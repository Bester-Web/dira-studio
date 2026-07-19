"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hero } from "@/content/home";

/**
 * Cinematic prologue. The camera approaches a clifftop villa, crosses through
 * the lit window inside a blowout of warm light, and arrives in the living room.
 * The homepage then scrolls up over the room.
 *
 * Desktop only and skipped entirely for reduced-motion users, matching the
 * gating already used by <Hero />. three.js is imported lazily so it never
 * lands in the initial bundle (this site sells page speed).
 *
 * The two photos are never cross-faded: they are shot from impossible-to-blend
 * camera positions, so the swap is hidden inside the light blowout instead.
 */

const VILLA_SRC = "/images/cinematic/villa.webp";
const INTERIOR_SRC = "/images/cinematic/interior.webp";
const IMG_W = 1376;
const IMG_H = 768;

const VERT = `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }`;

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTexA, uTexB;
uniform float uProgress, uTime;
uniform vec2 uMouse, uRes, uImg;

vec2 coverUv(vec2 uv){
  float rA=uRes.x/uRes.y, rI=uImg.x/uImg.y;
  vec2 s = rA>rI ? vec2(1.0, rI/rA) : vec2(rA/rI, 1.0);
  return (uv-0.5)*s+0.5;
}
float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }

void main(){
  vec2 uv=vUv;
  vec2 cuv=coverUv(uv);
  float p=uProgress;

  // Exterior: accelerate at the lit window.
  vec2 winA=vec2(0.39,0.50);
  float accel=pow(smoothstep(0.0,0.50,p),1.7);
  float zA=1.0 - accel*0.44;
  vec2 uvA=(cuv-winA)*zA+winA + uMouse*0.012*(1.0-smoothstep(0.20,0.46,p));

  // Interior: arrive a touch wide, settle to native scale so it stays sharp.
  float settle=1.0 - smoothstep(0.48,0.74,p);
  float zB=1.0 + settle*0.09;
  vec2 winB=vec2(0.58,0.46);
  vec2 uvB=(cuv-winB)*zB+winB + uMouse*0.016;

  vec3 colA=texture2D(uTexA,uvA).rgb;
  vec3 colB=texture2D(uTexB,uvB).rgb;

  // Hard cut hidden inside the blowout, never a blend of the two angles.
  float sel=step(0.48,p);
  vec3 col=mix(colA,colB,sel);

  float flash=smoothstep(0.33,0.48,p)*(1.0-smoothstep(0.48,0.66,p));
  col=mix(col, vec3(1.0,0.95,0.82), flash*0.96);

  // Gentle settle only. Never fade to black: the page scrolls up over the room.
  float dark=smoothstep(0.80,1.0,p)*0.28;
  col=mix(col, vec3(0.055,0.043,0.024), dark);

  col += (hash(uv*uRes+uTime)-0.5)*0.05;
  float vig=smoothstep(1.15,0.35, distance(uv,vec2(0.5)));
  col *= mix(0.70,1.0,vig);

  gl_FragColor=vec4(col,1.0);
}`;

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const smooth = (e0: number, e1: number, x: number) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

export function CinematicPrologue() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const copyRef = React.useRef<HTMLDivElement>(null);
  const hintRef = React.useRef<HTMLDivElement>(null);

  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const active = isDesktop && !reduceMotion;

  React.useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const Lenis = (await import("lenis")).default;
      if (disposed) return;

      // Lenis needs CSS smooth scrolling out of the way (globals.css sets it).
      const prevBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false, // fullscreen quad has no geometry edges
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(1); // source photos are only 1376px wide

      const scene = new THREE.Scene();
      const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const loader = new THREE.TextureLoader();
      const texA = loader.load(VILLA_SRC);
      const texB = loader.load(INTERIOR_SRC);
      for (const t of [texA, texB]) {
        t.minFilter = THREE.LinearFilter;
        t.magFilter = THREE.LinearFilter;
        t.generateMipmaps = false;
      }

      const uniforms = {
        uTexA: { value: texA },
        uTexB: { value: texB },
        uProgress: { value: 0 },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uRes: { value: new THREE.Vector2(1, 1) },
        uImg: { value: new THREE.Vector2(IMG_W, IMG_H) },
      };

      const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: VERT,
        fragmentShader: FRAG,
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
      scene.add(mesh);

      const resize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        renderer.setSize(w, h, false);
        uniforms.uRes.value.set(w, h);
      };
      resize();
      window.addEventListener("resize", resize);

      const lenis = new Lenis({ lerp: 0.14, smoothWheel: true });
      let scroll = 0;
      lenis.on("scroll", ({ scroll: s }: { scroll: number }) => {
        scroll = s;
      });

      let mx = 0;
      let my = 0;
      let smx = 0;
      let smy = 0;
      const onMouse = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouse);

      const clock = new THREE.Clock();
      let p = 0;
      let idle = 0;
      let raf = 0;
      const written: Record<string, string> = {};
      const setStyle = (el: HTMLElement | null, prop: string, v: string) => {
        if (!el) return;
        const k = `${el.id}:${prop}`;
        if (written[k] !== v) {
          written[k] = v;
          el.style.setProperty(prop, v);
        }
      };

      const loop = (time: number) => {
        raf = requestAnimationFrame(loop);
        lenis.raf(time);

        const range = section.offsetHeight - window.innerHeight;
        // Once the page takes over, stop all cinematic work.
        if (scroll > section.offsetHeight + 120) return;

        const target = clamp(scroll / Math.max(range, 1), 0, 1);
        const prev = p;
        p += (target - p) * 0.09;
        smx += (mx - smx) * 0.06;
        smy += (my - smy) * 0.06;

        const still =
          Math.abs(p - prev) < 0.0002 &&
          Math.abs(mx - smx) < 0.002 &&
          Math.abs(my - smy) < 0.002;
        if (still && idle > 2) return;
        idle = still ? idle + 1 : 0;

        uniforms.uProgress.value = p;
        uniforms.uTime.value = clock.getElapsedTime();
        uniforms.uMouse.value.set(smx, smy);
        renderer.render(scene, cam);

        const out = 1 - smooth(0.05, 0.2, p);
        setStyle(copyRef.current, "opacity", out.toFixed(2));
        setStyle(copyRef.current, "transform", `translateY(${((1 - out) * -26).toFixed(1)}px)`);
        setStyle(hintRef.current, "opacity", (1 - smooth(0.16, 0.34, p)).toFixed(2));
      };
      raf = requestAnimationFrame(loop);

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", onMouse);
        lenis.destroy();
        document.documentElement.style.scrollBehavior = prevBehavior;
        mesh.geometry.dispose();
        mat.dispose();
        texA.dispose();
        texB.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [active]);

  // Reduced motion users get no prologue at all.
  if (reduceMotion) return null;

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      // hidden below lg via CSS so mobile never downloads or lays this out
      className="relative hidden h-[340vh] lg:block"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#100c06]">
        <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

        {/* readability scrim, strongest on the left where the copy sits */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,rgba(6,4,2,.92) 0%,rgba(6,4,2,.72) 26%,rgba(6,4,2,.36) 46%,transparent 70%), linear-gradient(0deg,rgba(6,4,2,.55) 0%,transparent 40%)",
          }}
        />

        <div
          ref={copyRef}
          id="cine-copy"
          className="absolute inset-y-0 left-[7vw] z-10 flex max-w-2xl flex-col justify-center"
        >
          <span
            className="mb-5 w-max rounded-pill border px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white uppercase"
            style={{ borderColor: "rgba(255,240,210,.28)", background: "rgba(20,14,6,.55)" }}
          >
            {hero.eyebrow}
          </span>
          <p
            className="font-display text-4xl leading-tight font-semibold text-[#ffeec2] italic xl:text-5xl"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,.95), 0 0 4px rgba(0,0,0,.9)" }}
          >
            Step inside the studio.
          </p>
        </div>

        <div
          ref={hintRef}
          id="cine-hint"
          aria-hidden
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <span className="flex size-10 items-center justify-center rounded-pill border border-[rgba(243,236,218,.3)] bg-[rgba(20,14,6,.5)]">
            <ChevronDown className="size-4 animate-bounce text-[#f0e2c4]" />
          </span>
        </div>
      </div>
    </section>
  );
}
