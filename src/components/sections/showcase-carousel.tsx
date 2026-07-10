"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { MiniSite } from "@/components/showcase/mini-site";
import { showcase, showcaseSites } from "@/content/home";
import { cn } from "@/lib/utils";
import { EASE_PREMIUM } from "@/lib/motion";

const SWIPE_THRESHOLD = 60;

/**
 * The website showcase: three industry concepts browsable via
 * tabs, arrows, or swiping. Transitions glide, nothing reloads.
 */
export function ShowcaseCarousel() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const reduceMotion = useReducedMotion();
  const site = showcaseSites[index];

  const go = React.useCallback(
    (next: number) => {
      const clamped = (next + showcaseSites.length) % showcaseSites.length;
      setDirection(clamped > index || (clamped === 0 && index === showcaseSites.length - 1) ? 1 : -1);
      setIndex(clamped);
    },
    [index]
  );

  return (
    <section className="py-24 md:py-32" id="work">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={showcase.eyebrow}
            heading={showcase.heading}
            subheading={showcase.subheading}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="ds-card p-4 sm:p-6 md:p-8">
            {/* Tabs + arrows */}
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex flex-1 flex-wrap gap-2">
                {showcaseSites.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => go(i)}
                    aria-pressed={i === index}
                    className={cn(
                      "flex cursor-pointer items-center gap-2 rounded-pill border px-4 py-2.5 text-sm font-medium transition-all duration-300 ease-premium",
                      i === index
                        ? "border-accent/40 bg-accent/10 text-foreground shadow-sm"
                        : "border-transparent text-muted hover:bg-surface-hover hover:text-foreground"
                    )}
                  >
                    <Icon name={s.icon} className="size-4 text-accent" />
                    {s.label}
                  </button>
                ))}
              </div>
              <div className="hidden gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous website"
                  className="flex size-10 cursor-pointer items-center justify-center rounded-pill border border-border text-muted transition-all duration-300 ease-premium hover:border-accent/50 hover:text-foreground"
                >
                  <ArrowLeft className="size-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next website"
                  className="flex size-10 cursor-pointer items-center justify-center rounded-pill bg-ink text-ink-foreground transition-all duration-300 ease-premium hover:brightness-110"
                >
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </div>
            </div>

            {/* Active concept */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={site.id}
                  custom={direction}
                  initial={reduceMotion ? false : { opacity: 0, x: 64 * direction }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: -64 * direction }}
                  transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                  drag={reduceMotion ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -SWIPE_THRESHOLD) go(index + 1);
                    else if (info.offset.x > SWIPE_THRESHOLD) go(index - 1);
                  }}
                  className="grid cursor-grab gap-8 active:cursor-grabbing lg:grid-cols-[280px_1fr]"
                >
                  {/* Description */}
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold tracking-[0.2em] text-faint uppercase">
                      {site.brand} {site.brandAccent}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                      {site.headline}
                    </h3>
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {site.checklist.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-strong">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <Button asChild variant="secondary">
                        <Link href={`/industries/${site.industrySlug}`}>
                          View Full Website
                          <ExternalLink aria-hidden />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Browser frame */}
                  <div className="overflow-hidden rounded-lg border border-border-strong shadow-md">
                    <div className="flex items-center gap-1.5 bg-ink/90 px-4 py-2.5">
                      <span className="size-2 rounded-full bg-white/25" />
                      <span className="size-2 rounded-full bg-white/25" />
                      <span className="size-2 rounded-full bg-white/25" />
                      <span className="ml-3 rounded-pill bg-white/10 px-3 py-0.5 text-[10px] text-white/50">
                        {site.brand.toLowerCase()}.co.za
                      </span>
                    </div>
                    <div className="aspect-[16/9.5] text-[clamp(14px,2.4vw,26px)]">
                      <MiniSite site={site} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Position dots */}
            <div className="mt-6 flex justify-center gap-2">
              {showcaseSites.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show ${s.label} website`}
                  className={cn(
                    "h-1.5 cursor-pointer rounded-pill transition-all duration-300 ease-premium",
                    i === index ? "w-8 bg-accent" : "w-3 bg-border-strong hover:bg-faint"
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
