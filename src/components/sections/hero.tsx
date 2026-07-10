"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Star, ChevronDown } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Macbook } from "@/components/showcase/macbook";
import { MiniSite } from "@/components/showcase/mini-site";
import { hero, showcaseSites } from "@/content/home";
import { EASE_PREMIUM } from "@/lib/motion";

/** Star rating + avatars strip shown directly under the CTA. */
function RatingStrip() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex -space-x-2.5">
        {hero.rating.avatars.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full border-2 border-(--ds-bg-elevated) object-cover"
            priority={i < 2}
          />
        ))}
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="flex items-center gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="size-3.5 fill-accent text-accent" aria-hidden />
          ))}
          <span className="ml-1 text-xs font-semibold text-foreground">
            {hero.rating.score} average rating
          </span>
        </span>
        <span className="text-xs text-muted">
          {hero.rating.label} · {hero.rating.count}
        </span>
      </div>
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="flex max-w-xl flex-col items-start">
      <motion.span
        className="ds-eyebrow mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_PREMIUM }}
      >
        {hero.eyebrow}
      </motion.span>

      <motion.h1
        className="font-display text-4xl font-bold tracking-tight text-foreground uppercase sm:text-5xl lg:text-[3.4rem]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08, ease: EASE_PREMIUM }}
      >
        {hero.headline}
      </motion.h1>

      <motion.p
        className="ds-gradient-text mt-4 font-display text-2xl leading-snug font-medium italic sm:text-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.18, ease: EASE_PREMIUM }}
      >
        {hero.headlineAccent}
      </motion.p>

      <motion.p
        className="mt-6 text-base leading-relaxed text-muted"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.28, ease: EASE_PREMIUM }}
      >
        {hero.subheadline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.38, ease: EASE_PREMIUM }}
        className="mt-9"
      >
        <Button asChild size="xl" className="shadow-accent-lg">
          <Link href="/contact">
            {hero.cta}
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE_PREMIUM }}
        className="mt-9"
      >
        <RatingStrip />
      </motion.div>
    </div>
  );
}

/**
 * Cinematic hero. On desktop the section pins while the Space Black
 * MacBook opens and powers on, revealing the electrical concept site.
 * On mobile and for reduced-motion users, the MacBook renders open.
 */
export function Hero() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const lidAngle = useTransform(scrollYProgress, [0.04, 0.52], [-86, 0]);
  // Derived from the lid so the screen always powers on as it opens
  const screenPower = useTransform(lidAngle, [-38, -4], [0, 1]);
  const laptopY = useTransform(scrollYProgress, [0, 0.55], [40, 0]);
  // NOTE: opacity values are derived from transform-driven values;
  // standalone scroll-linked opacities stall in this framer/React combo.
  const hintOpacity = useTransform(lidAngle, [-86, -62], [1, 0]);
  // Copy settles back as the reveal completes, keeping focus on the screen
  const copyY = useTransform(scrollYProgress, [0.55, 0.85], [0, -24]);
  const copyOpacity = useTransform(copyY, [0, -24], [1, 0.35]);

  const animated = isDesktop && !reduceMotion;
  const heroSite = showcaseSites[0];

  return (
    <section
      ref={sectionRef}
      className="relative lg:h-[240vh]"
    >
      {/* Classical arch, drawn faintly behind the composition */}
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden pt-(--ds-header-height)">
        <div className="ds-arch top-[8%] right-[-6%] h-[70vh] w-[34vw] max-lg:hidden" aria-hidden />
        <div className="ds-glow -top-40 left-[15%] h-[30rem] w-[44rem]" aria-hidden />
        <div className="ds-glow right-[-10%] bottom-[-20%] h-96 w-96 opacity-60" aria-hidden />

        <Container className="relative py-16 lg:py-0">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
            <motion.div style={animated ? { opacity: copyOpacity, y: copyY } : undefined}>
              <HeroCopy />
            </motion.div>

            <div className="relative">
              {animated ? (
                <motion.div style={{ y: laptopY }}>
                  <Macbook lidAngle={lidAngle} screenPower={screenPower} className="w-full">
                    <MiniSite site={heroSite} />
                  </Macbook>
                </motion.div>
              ) : (
                <Macbook lidAngle={0} screenPower={1} className="w-full">
                  <MiniSite site={heroSite} />
                </Macbook>
              )}
            </div>
          </div>
        </Container>

        {/* Scroll hint, desktop only */}
        {animated && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            style={{ opacity: hintOpacity }}
            aria-hidden
          >
            <span className="flex size-10 items-center justify-center rounded-pill border border-border bg-surface backdrop-blur-md">
              <ChevronDown className="size-4 animate-bounce text-muted" />
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
