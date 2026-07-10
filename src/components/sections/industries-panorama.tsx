"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Icon } from "@/components/shared/icon";
import { industries } from "@/content/industries";
import { results } from "@/content/home";
import { showcaseSites } from "@/content/home";
import { MiniSite } from "@/components/showcase/mini-site";

function IndustryPanel({ slug }: { slug: string }) {
  const industry = industries.find((i) => i.slug === slug);
  const site = showcaseSites.find((s) => s.industrySlug === slug);
  const caseData = results.cases.find((c) =>
    site ? c.industry.toLowerCase().includes(site.label.toLowerCase()) : false
  );
  if (!industry || !site) return null;

  return (
    <div className="flex w-screen shrink-0 items-center justify-center px-5 sm:px-10">
      <div
        className="grid w-full max-w-6xl gap-10 overflow-hidden rounded-2xl border p-8 sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        style={{
          background: `linear-gradient(150deg, ${site.palette.bgFrom}, ${site.palette.bgTo})`,
          borderColor: "rgba(255,255,255,0.12)",
          boxShadow: "0 32px 80px rgba(20,14,4,0.35)",
        }}
      >
        <div>
          <span
            className="flex w-fit items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-white/80 uppercase backdrop-blur-md"
          >
            <Icon name={industry.icon} className="size-3.5" style={{ color: site.palette.accent }} />
            {industry.name}
          </span>
          <h3 className="mt-6 font-display text-3xl font-semibold text-white sm:text-4xl">
            {industry.hero.headline}
          </h3>
          <ul className="mt-7 flex flex-col gap-3">
            {industry.benefits.slice(0, 4).map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-white/75">
                <Check
                  className="mt-0.5 size-4 shrink-0"
                  style={{ color: site.palette.accent }}
                  aria-hidden
                />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href={`/industries/${industry.slug}`}
              className="inline-flex h-12 items-center gap-2 rounded-pill px-7 text-sm font-semibold transition-transform duration-300 ease-premium hover:-translate-y-0.5"
              style={{ background: site.palette.accent, color: site.palette.accentText }}
            >
              See how we help
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            {caseData && (
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-white">
                  {caseData.stats[0].value}
                </span>
                <span className="text-xs text-white/60">{caseData.stats[0].label}</span>
              </div>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/12 shadow-lg">
          <div className="aspect-[16/10] text-[clamp(10px,1.6vw,18px)]">
            <MiniSite site={site} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Horizontal storytelling: the section pins while the three
 * industries glide past sideways. Falls back to a vertical
 * stack on mobile and for reduced-motion users.
 */
export function IndustriesPanorama() {
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
  const x = useTransform(scrollYProgress, [0.06, 0.94], ["0vw", "-200vw"]);

  const slugs = ["electricians", "plumbers", "solar-installers"];
  const horizontal = isDesktop && !reduceMotion;

  return (
    <section ref={sectionRef} className={horizontal ? "relative h-[320vh]" : "relative"}>
      {/* Heading */}
      <div className={horizontal ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : "py-24"}>
        <div className="mb-10 flex flex-col items-center gap-4 px-5 text-center">
          <span className="ds-eyebrow">Who we serve</span>
          <h2 className="max-w-3xl font-display text-3xl font-semibold text-foreground sm:text-4xl md:text-[2.75rem]">
            Three industries. Deep expertise in each.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            We don&apos;t build websites for everyone. We build them for electrical,
            plumbing and solar companies, and that focus shows in the results.
          </p>
        </div>

        {horizontal ? (
          <motion.div className="flex w-[300vw]" style={{ x }}>
            {slugs.map((slug) => (
              <IndustryPanel key={slug} slug={slug} />
            ))}
          </motion.div>
        ) : (
          <div className="flex flex-col gap-8">
            {slugs.map((slug) => (
              <IndustryPanel key={slug} slug={slug} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
