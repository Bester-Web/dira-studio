import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { services } from "@/content/services";
import { servicesIntro } from "@/content/home";

/** The four services, presented as glass cards. */
export function ServicesSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={servicesIntro.eyebrow}
            heading={servicesIntro.heading}
            subheading={servicesIntro.subheading}
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={Math.min(i * 0.07, 0.28)}>
              <article className="ds-card ds-card-interactive flex h-full flex-col p-7">
                <span className="mb-5 flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon name={service.icon} className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {service.shortDescription}
                </p>
                <div className="mt-auto pt-5">
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
                  >
                    Learn more
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
