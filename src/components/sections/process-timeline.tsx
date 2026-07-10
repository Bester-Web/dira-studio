import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { process } from "@/content/home";

/** Four-step process on a gold connecting line. */
export function ProcessTimeline() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <Reveal>
            <div>
              <span className="ds-eyebrow">{process.eyebrow}</span>
              <h2 className="mt-4 max-w-sm font-display text-3xl font-semibold text-foreground sm:text-4xl">
                {process.heading}
              </h2>
            </div>
          </Reveal>

          <ol className="relative grid gap-8 sm:grid-cols-2">
            {/* Connecting line */}
            <span
              className="absolute top-5 left-5 hidden h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-accent/60 via-accent/25 to-transparent sm:block"
              aria-hidden
            />
            {process.steps.map((step, i) => (
              <Reveal key={step.number} as="li" delay={Math.min(i * 0.08, 0.32)}>
                <div className="ds-card relative h-full p-7">
                  <span className="mb-4 flex size-10 items-center justify-center rounded-pill border border-accent/40 bg-accent/10 font-display text-sm font-bold text-accent">
                    {step.number}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
