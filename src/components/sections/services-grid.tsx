import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import type { ServiceOffering } from "@/content/types";

interface ServicesGridProps {
  services: ServiceOffering[];
  showAllLink?: boolean;
  /** Detailed variant lists outcomes (services page); compact for homepage */
  detailed?: boolean;
}

export function ServicesGrid({
  services,
  showAllLink = false,
  detailed = false,
}: ServicesGridProps) {
  return (
    <section className="bg-background-deep/60 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            heading="Everything your growth needs. Nothing it doesn't."
            subheading="Each service exists for one reason: to bring you more customers. Start with what you need today — add more as you grow."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={Math.min(i * 0.06, 0.3)}>
              <article
                id={service.slug}
                className="ds-card ds-card-interactive flex h-full scroll-mt-28 flex-col p-7"
              >
                <span className="mb-5 flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent-soft">
                  <Icon name={service.icon} className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {detailed ? service.description : service.shortDescription}
                </p>
                {detailed && (
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5 text-sm text-muted-strong">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-5">
                  <Link
                    href={detailed ? "/contact" : `/services#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft transition-colors hover:text-foreground"
                  >
                    {detailed ? "Start a conversation" : "Learn more"}
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {showAllLink && (
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">
                  Explore all services
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
