import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { system } from "@/content/home";

/** The numbered system: three steps, done in the right order. */
export function SystemSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={system.eyebrow}
            heading={system.heading}
            subheading={system.subheading}
          />
        </Reveal>

        <ol className="grid gap-5 md:grid-cols-3">
          {system.steps.map((step, i) => (
            <Reveal key={step.number} as="li" delay={Math.min(i * 0.08, 0.24)}>
              <div className="ds-card relative h-full p-8">
                <span
                  className="pointer-events-none absolute top-4 right-6 font-display text-7xl font-bold text-accent/10"
                  aria-hidden
                >
                  {step.number}
                </span>
                <span className="mb-5 flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon name={step.icon} className="size-5" />
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm font-medium text-muted-strong md:text-base">
            {system.footnote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
