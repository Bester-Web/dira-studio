import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { problem } from "@/content/home";

/** Problem-first section: name the pain before selling the fix. */
export function ProblemSection() {
  return (
    <section className="bg-background-deep/60 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={problem.eyebrow}
            heading={problem.heading}
            subheading={problem.subheading}
          />
        </Reveal>

        <ul className="grid gap-5 md:grid-cols-3">
          {problem.pains.map((pain, i) => (
            <Reveal key={pain.title} as="li" delay={Math.min(i * 0.08, 0.24)}>
              <div className="ds-card h-full p-8">
                <span className="mb-5 flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon name={pain.icon} className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {pain.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {pain.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
