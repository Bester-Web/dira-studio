import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { pains } from "@/content/home";

/** The cost of being invisible: heading beside four glass cards. */
export function PainPoints() {
  return (
    <section className="bg-background-deep/60 py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <span className="ds-eyebrow">{pains.eyebrow}</span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                {pains.heading}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
                {pains.subheading}
              </p>
            </div>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {pains.items.map((pain, i) => (
              <Reveal key={pain.title} as="li" delay={Math.min(i * 0.07, 0.28)}>
                <div className="ds-card h-full p-6">
                  <span className="mb-4 flex size-11 items-center justify-center rounded-pill bg-accent/10 text-accent">
                    <Icon name={pain.icon} className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {pain.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pain.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
