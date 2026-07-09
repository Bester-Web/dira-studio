"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Phone, MessageCircle, Star, Wrench, Zap, Hammer } from "lucide-react";
import { Container } from "@/components/shared/container";
import { showcase } from "@/content/home";

/**
 * Mini handyman website rendered inside the laptop screen.
 * Built in HTML (not an image) so it stays razor sharp at any size.
 */
function HandymanSite() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white font-sans">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3 py-1.5">
        <span className="size-1.5 rounded-full bg-red-400" />
        <span className="size-1.5 rounded-full bg-amber-400" />
        <span className="size-1.5 rounded-full bg-green-400" />
        <span className="ml-2 flex-1 rounded-full bg-white px-2 py-0.5 text-[7px] text-slate-400">
          fixitpro.co.za
        </span>
      </div>

      {/* Site navbar */}
      <div className="flex items-center justify-between bg-[#1f3a5f] px-4 py-2">
        <span className="text-[10px] font-bold tracking-tight text-white">
          FixIt<span className="text-orange-400">Pro</span>
        </span>
        <span className="flex items-center gap-1 rounded-full bg-orange-500 px-2.5 py-1 text-[8px] font-semibold text-white">
          <Phone className="size-2" aria-hidden />
          082 555 0199
        </span>
      </div>

      {/* Hero */}
      <div className="flex flex-1 flex-col justify-center bg-gradient-to-br from-[#1f3a5f] to-[#16294a] px-5 py-4">
        <span className="mb-1.5 w-fit rounded-full bg-white/10 px-2 py-0.5 text-[6.5px] font-medium tracking-wide text-orange-300 uppercase">
          Pretoria East · Same-day service
        </span>
        <h3 className="max-w-[220px] font-display text-[16px] leading-[1.15] font-bold text-white">
          Home repairs done right, the first time
        </h3>
        <p className="mt-1.5 max-w-[240px] text-[8px] leading-relaxed text-slate-300">
          Plumbing, electrical and carpentry by vetted professionals. Upfront
          quotes, guaranteed workmanship.
        </p>
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1.5 text-[8px] font-bold text-white shadow-lg">
            <Phone className="size-2" aria-hidden />
            Call Now
          </span>
          <span className="flex items-center gap-1 rounded-full border border-white/30 px-3 py-1.5 text-[8px] font-semibold text-white">
            <MessageCircle className="size-2" aria-hidden />
            WhatsApp
          </span>
        </div>
        <div className="mt-2.5 flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="size-2 fill-amber-400 text-amber-400" aria-hidden />
          ))}
          <span className="ml-1 text-[7px] text-slate-300">4.9 · 500+ jobs completed</span>
        </div>
      </div>

      {/* Services strip */}
      <div className="grid grid-cols-3 gap-1.5 bg-slate-50 p-2.5">
        {[
          { icon: Wrench, label: "Plumbing" },
          { icon: Zap, label: "Electrical" },
          { icon: Hammer, label: "Carpentry" },
        ].map(({ icon: ServiceIcon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 rounded-lg border border-slate-200 bg-white py-2"
          >
            <ServiceIcon className="size-2.5 text-orange-500" aria-hidden />
            <span className="text-[7px] font-semibold text-slate-700">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface LaptopProps {
  lidAngle: MotionValue<number> | number;
  screenOpacity: MotionValue<number> | number;
}

/** CSS 3D laptop. The lid rotates open around its bottom hinge. */
function Laptop({ lidAngle, screenOpacity }: LaptopProps) {
  return (
    <div
      className="mx-auto w-[88vw] max-w-[720px]"
      style={{ perspective: "2400px" }}
      aria-hidden
    >
      <div style={{ transformStyle: "preserve-3d" }}>
        {/* Lid / screen */}
        <motion.div
          className="relative aspect-[16/10] w-full origin-bottom overflow-hidden rounded-t-2xl border border-[#b9ad8e] bg-[#2a2417] p-[1.2%] shadow-lg"
          style={{
            rotateX: lidAngle,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <motion.div
            className="h-full w-full overflow-hidden rounded-lg"
            style={{ opacity: screenOpacity }}
          >
            <HandymanSite />
          </motion.div>
          {/* Screen glass reflection */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.14) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.06) 100%)",
            }}
          />
        </motion.div>

        {/* Base / keyboard deck */}
        <div className="relative">
          <div className="h-[14px] w-full rounded-b-md bg-gradient-to-b from-[#d8cdb0] via-[#c8bc9c] to-[#a99c78] shadow-md sm:h-[18px]" />
          {/* Front lip notch */}
          <div className="absolute top-0 left-1/2 h-[5px] w-[12%] -translate-x-1/2 rounded-b-lg bg-[#8f835f]/60" />
          {/* Ground shadow */}
          <div className="absolute -bottom-7 left-1/2 h-8 w-[85%] -translate-x-1/2 rounded-[50%] bg-[#4a3e24]/20 blur-xl" />
        </div>
      </div>
    </div>
  );
}

/**
 * Scroll-driven showcase: the laptop folds open as the visitor scrolls,
 * revealing an example trade website on its screen.
 */
export function LaptopShowcase() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const lidAngle = useTransform(scrollYProgress, [0.05, 0.65], [-88, 0]);
  const screenOpacity = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);
  const laptopScale = useTransform(scrollYProgress, [0, 0.65], [0.92, 1]);
  const captionOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.6, 0.8], [24, 0]);

  return (
    <section ref={sectionRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="ds-glow top-1/3 left-1/2 h-[26rem] w-[40rem] -translate-x-1/2 -translate-y-1/2" aria-hidden />

        <Container className="relative flex flex-col items-center">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-semibold tracking-[0.16em] uppercase text-accent">
              {showcase.eyebrow}
            </span>
            <h2 className="max-w-2xl font-display text-3xl font-semibold text-foreground sm:text-4xl">
              {showcase.heading}
            </h2>
          </div>

          {reduceMotion ? (
            <Laptop lidAngle={0} screenOpacity={1} />
          ) : (
            <motion.div style={{ scale: laptopScale }}>
              <Laptop lidAngle={lidAngle} screenOpacity={screenOpacity} />
            </motion.div>
          )}

          <motion.p
            className="mt-14 max-w-xl text-center text-base leading-relaxed text-muted md:text-lg"
            style={reduceMotion ? undefined : { opacity: captionOpacity, y: captionY }}
          >
            {showcase.subheading}
          </motion.p>
        </Container>
      </div>
    </section>
  );
}
