import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { valueProps } from "@/content/process";

/** Why Choose Dira Studio — differentiators grid. */
export function WhyUs() {
  return (
    <section className="bg-background-deep/60 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Dira Studio"
            heading="Agencies sell websites. We deliver customers."
            subheading="The difference shows up in your call log, your WhatsApp inbox and your quote pipeline. Not just on your screen."
          />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop, i) => (
            <Reveal key={prop.title} as="li" delay={Math.min(i * 0.06, 0.3)}>
              <div className="ds-card h-full p-7">
                <span className="mb-5 flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent-soft">
                  <Icon name={prop.icon} className="size-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {prop.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{prop.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
