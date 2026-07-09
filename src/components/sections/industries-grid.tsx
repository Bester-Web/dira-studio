import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import type { Industry } from "@/content/types";

interface IndustriesGridProps {
  industries: Industry[];
  /** Full listing (industries page) vs featured teaser (homepage) */
  showAllLink?: boolean;
  eyebrow?: string;
  heading?: React.ReactNode;
  subheading?: string;
}

export function IndustriesGrid({
  industries,
  showAllLink = false,
  eyebrow = "Who it's for",
  heading = "Built for businesses like yours",
  subheading = "We work with service businesses, because winning a customer who's searching for help right now is a very specific craft.",
}: IndustriesGridProps) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} heading={heading} subheading={subheading} />
        </Reveal>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} as="li" delay={Math.min(i * 0.05, 0.3)}>
              <Link
                href={`/industries/${industry.slug}`}
                className="ds-card ds-card-interactive group flex h-full flex-col gap-4 p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent-soft transition-colors duration-300 group-hover:bg-accent/20">
                  <Icon name={industry.icon} className="size-5" />
                </span>
                <span className="font-display text-base font-semibold text-foreground">
                  {industry.name}
                </span>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-faint transition-colors duration-300 group-hover:text-accent-soft">
                  See how we help
                  <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        {showAllLink && (
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/industries">
                  View all industries
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
