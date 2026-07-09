import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { processSteps } from "@/content/process";

/** The four-step process, presented as a connected timeline. */
export function ProcessSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            heading="From first call to first customer"
            subheading="A clear, proven process. You'll always know what's happening, what's next, and what it costs."
          />
        </Reveal>

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} as="li" delay={Math.min(i * 0.08, 0.32)}>
              <div className="ds-card relative h-full p-7">
                <span
                  className="pointer-events-none absolute top-5 right-6 font-display text-5xl font-bold text-white/[0.05]"
                  aria-hidden
                >
                  {step.number}
                </span>
                <span className="mb-5 flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent-soft">
                  <Icon name={step.icon} className="size-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-foreground">
                  <span className="mr-2 text-accent-soft">{step.number}</span>
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
