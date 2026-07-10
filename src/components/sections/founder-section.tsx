import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { founder } from "@/content/home";

/**
 * Founder section. Lives in the dark zone: warm, candlelit, personal.
 * The photo gets a warm colour grade via CSS only; the face is untouched.
 */
export function FounderSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="ds-card grid gap-10 overflow-hidden p-8 md:p-12 lg:grid-cols-[300px_1fr_280px] lg:items-center">
          {/* Portrait */}
          <Reveal>
            <div className="relative mx-auto w-56 lg:w-full">
              <div className="ds-glow -top-8 -left-8 h-40 w-40" aria-hidden />
              <Image
                src={founder.photo}
                alt={`${founder.fullName}, ${founder.role}`}
                width={480}
                height={480}
                className="relative aspect-square w-full rounded-xl border border-(--ds-glass-border) object-cover shadow-lg [filter:sepia(0.14)_saturate(1.06)_brightness(1.02)]"
              />
              <span className="absolute right-3 bottom-3 rounded-pill border border-(--ds-glass-border) bg-background/70 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-muted-strong uppercase backdrop-blur-md">
                Founder
              </span>
            </div>
          </Reveal>

          {/* Story */}
          <Reveal delay={0.08}>
            <div>
              <span className="ds-eyebrow">{founder.eyebrow}</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                {founder.heading}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                {founder.story}
              </p>
              <p className="mt-4 text-base font-medium text-muted-strong">{founder.closing}</p>
              <p className="mt-7 font-display text-2xl text-accent-soft italic">
                {founder.fullName}
              </p>
              <p className="mt-1 text-xs text-faint">{founder.role}</p>
            </div>
          </Reveal>

          {/* Principles */}
          <div className="flex flex-col gap-4">
            {founder.principles.map((principle, i) => (
              <Reveal key={principle.title} delay={0.12 + i * 0.06}>
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon name={principle.icon} className="size-4.5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
