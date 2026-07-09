import { Phone, MessageCircle, FileText } from "lucide-react";
import { Container } from "@/components/shared/container";
import { CtaGroup } from "@/components/shared/cta-group";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { hero } from "@/content/home";

const outcomes = [
  { icon: Phone, label: "More calls" },
  { icon: MessageCircle, label: "More WhatsApp enquiries" },
  { icon: FileText, label: "More quote requests" },
] as const;

/** Homepage hero: the promise, the proof, the paths to contact. */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Ambient glow */}
      <div
        className="ds-glow -top-40 left-1/2 h-[34rem] w-[52rem] -translate-x-1/2"
        aria-hidden
      />
      <div className="ds-glow top-40 -right-64 h-96 w-96 opacity-50" aria-hidden />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <Badge variant="accent" className="mb-6">
            {hero.eyebrow}
          </Badge>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="max-w-4xl font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {hero.headline}
            <br />
            <span className="ds-gradient-text">{hero.headlineAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {hero.subheadline}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <CtaGroup className="mt-10" size="xl" primaryLabel={hero.primaryCta} />
        </Reveal>

        <Reveal delay={0.32}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {outcomes.map(({ icon: OutcomeIcon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-muted-strong"
              >
                <span className="flex size-7 items-center justify-center rounded-pill bg-accent/10 text-accent">
                  <OutcomeIcon className="size-3.5" aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
