"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hero } from "@/content/home";

/**
 * Cinematic prologue. A real generated fly-in video (outside the villa, through
 * the window, into the room) is scrubbed by scroll: scroll position maps to
 * video time, so you drive the camera with the wheel. At the end it brightens
 * into the ivory homepage below.
 *
 * The video is encoded all-keyframe so seeking every frame stays smooth.
 *
 * Desktop only and skipped for reduced-motion, matching <Hero />. On mobile the
 * section is display:none, so the video is never downloaded or laid out.
 */

const VIDEO_SRC = "/videos/flyin.mp4";
const POSTER_SRC = "/images/cinematic/villa.webp";

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const smooth = (e0: number, e1: number, x: number) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

export function CinematicPrologue() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const copyRef = React.useRef<HTMLDivElement>(null);
  const hintRef = React.useRef<HTMLDivElement>(null);
  const veilRef = React.useRef<HTMLDivElement>(null);

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
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let raf = 0;
    let cur = 0;
    let duration = 0;
    let ready = false;

    const onMeta = () => {
      duration = video.duration || 0;
      ready = duration > 0;
    };
    if (video.readyState >= 1) onMeta();
    video.addEventListener("loadedmetadata", onMeta);
    video.load();

    // Only touch the DOM when a value actually changes.
    const written: Record<string, string> = {};
    const setStyle = (el: HTMLElement | null, prop: string, v: string) => {
      if (!el) return;
      const k = `${prop}`;
      const key = (el.dataset.k || "") + k;
      if (written[key] !== v) {
        written[key] = v;
        el.style.setProperty(prop, v);
      }
    };
    copyRef.current?.setAttribute("data-k", "copy");
    hintRef.current?.setAttribute("data-k", "hint");
    veilRef.current?.setAttribute("data-k", "veil");

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const scroll = window.scrollY || window.pageYOffset || 0;

      // Stop once the homepage has taken over.
      if (scroll > section.offsetHeight + 120) return;

      const range = section.offsetHeight - window.innerHeight;
      const target = clamp(scroll / Math.max(range, 1), 0, 1);
      cur += (target - cur) * 0.1;

      if (ready) {
        const t = clamp(cur, 0, 1) * (duration - 0.05);
        // avoid redundant seeks that stack up and stutter
        if (Math.abs(video.currentTime - t) > 0.01) {
          try {
            video.currentTime = t;
          } catch {
            /* seeking not ready yet */
          }
        }
      }

      const out = 1 - smooth(0.05, 0.2, cur);
      setStyle(copyRef.current, "opacity", out.toFixed(2));
      setStyle(copyRef.current, "transform", `translateY(${((1 - out) * -26).toFixed(1)}px)`);
      setStyle(hintRef.current, "opacity", (1 - smooth(0.16, 0.34, cur)).toFixed(2));
      // brighten into the ivory homepage at the very end
      setStyle(veilRef.current, "opacity", (smooth(0.86, 1.0, cur) * 0.92).toFixed(2));
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, [active]);

  if (reduceMotion) return null;

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className="relative hidden h-[340vh] lg:block"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#100c06]">
        {/* Rendered only on desktop, so mobile never downloads the video. */}
        {active && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            muted
            playsInline
            preload="auto"
            // decorative, controlled by scroll
            aria-hidden
            tabIndex={-1}
          />
        )}

        {/* readability scrim, strongest on the left where the copy sits */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,rgba(6,4,2,.9) 0%,rgba(6,4,2,.68) 26%,rgba(6,4,2,.34) 46%,transparent 70%), linear-gradient(0deg,rgba(6,4,2,.5) 0%,transparent 40%)",
          }}
        />

        <div
          ref={copyRef}
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

        {/* ivory brighten that bridges the dark room into the light homepage */}
        <div
          ref={veilRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0"
          style={{ background: "#f6f1e4" }}
        />

        <div
          ref={hintRef}
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
