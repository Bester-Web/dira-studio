"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hero } from "@/content/home";

/**
 * Cinematic prologue: a generated fly-in (outside the villa, through the window,
 * into the room).
 *
 * Desktop: the video is SCRUBBED by scroll (scroll position -> video time), so
 * you drive the camera. Uses the sharp all-keyframe clip.
 *
 * Mobile: scroll-scrubbing video is unreliable on phones (iOS especially), so
 * the phone gets a small clip that PLAYS THROUGH once on its own, then the site
 * scrolls up. Separate lightweight file, so phones download ~0.4MB, not 4MB.
 *
 * Reduced-motion users get neither.
 */

const DESKTOP_SRC = "/videos/flyin.mp4";
const MOBILE_SRC = "/videos/flyin-mobile.mp4";
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
  const [mounted, setMounted] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    setMounted(true);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Desktop only: scrub the video with scroll.
  React.useEffect(() => {
    if (reduceMotion || !mounted || !isDesktop) return;
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

    const written: Record<string, string> = {};
    const setStyle = (el: HTMLElement | null, prop: string, key: string, v: string) => {
      if (!el) return;
      const k = key + prop;
      if (written[k] !== v) {
        written[k] = v;
        el.style.setProperty(prop, v);
      }
    };

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const scroll = window.scrollY || window.pageYOffset || 0;
      if (scroll > section.offsetHeight + 120) return;

      const range = section.offsetHeight - window.innerHeight;
      const target = clamp(scroll / Math.max(range, 1), 0, 1);
      cur += (target - cur) * 0.1;

      if (ready) {
        const t = clamp(cur, 0, 1) * (duration - 0.05);
        if (Math.abs(video.currentTime - t) > 0.01) {
          try {
            video.currentTime = t;
          } catch {
            /* not seekable yet */
          }
        }
      }

      const out = 1 - smooth(0.05, 0.2, cur);
      setStyle(copyRef.current, "opacity", "c", out.toFixed(2));
      setStyle(copyRef.current, "transform", "c", `translateY(${((1 - out) * -26).toFixed(1)}px)`);
      setStyle(hintRef.current, "opacity", "h", (1 - smooth(0.16, 0.34, cur)).toFixed(2));
      setStyle(veilRef.current, "opacity", "v", (smooth(0.86, 1.0, cur) * 0.92).toFixed(2));
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, [mounted, isDesktop, reduceMotion]);

  if (reduceMotion) return null;

  const showVideo = mounted;

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      // Full screen on phones, tall scroll track on desktop for the scrub.
      className="relative block h-screen lg:h-[340vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#100c06]">
        {showVideo &&
          (isDesktop ? (
            <video
              ref={videoRef}
              key="desktop"
              className="absolute inset-0 h-full w-full object-cover"
              src={DESKTOP_SRC}
              poster={POSTER_SRC}
              muted
              playsInline
              preload="auto"
              aria-hidden
              tabIndex={-1}
            />
          ) : (
            <video
              key="mobile"
              className="absolute inset-0 h-full w-full object-cover"
              src={MOBILE_SRC}
              poster={POSTER_SRC}
              autoPlay
              muted
              playsInline
              preload="auto"
              aria-hidden
              tabIndex={-1}
            />
          ))}

        {/* readability scrim */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,rgba(6,4,2,.9) 0%,rgba(6,4,2,.68) 26%,rgba(6,4,2,.34) 46%,transparent 70%), linear-gradient(0deg,rgba(6,4,2,.55) 0%,transparent 40%)",
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
            className="font-display text-3xl leading-tight font-semibold text-[#ffeec2] italic sm:text-4xl xl:text-5xl"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,.95), 0 0 4px rgba(0,0,0,.9)" }}
          >
            Step inside the studio.
          </p>
        </div>

        {/* ivory brighten into the light homepage (desktop scrub end) */}
        <div
          ref={veilRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0"
          style={{ background: "#f6f1e4" }}
        />

        {/* scroll hint, desktop only */}
        <div
          ref={hintRef}
          aria-hidden
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
        >
          <span className="flex size-10 items-center justify-center rounded-pill border border-[rgba(243,236,218,.3)] bg-[rgba(20,14,6,.5)]">
            <ChevronDown className="size-4 animate-bounce text-[#f0e2c4]" />
          </span>
        </div>
      </div>
    </section>
  );
}
