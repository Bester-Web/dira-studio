import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricingIntro, pricingTiers, pricingNotes } from "@/content/pricing";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={pricingIntro.eyebrow}
            heading={pricingIntro.heading}
            subheading={pricingIntro.subheading}
          />
        </Reveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.id} delay={Math.min(i * 0.08, 0.24)} className="h-full">
              <article
                className={cn(
                  "ds-card relative flex h-full flex-col p-8",
                  tier.highlighted &&
                    "border-accent/50 bg-accent/[0.06] shadow-accent lg:-my-3 lg:py-11"
                )}
              >
                {tier.highlighted && (
                  <Badge
                    variant="accent"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 border-accent/50 bg-background-elevated"
                  >
                    Most popular
                  </Badge>
                )}
                <h3 className="font-display text-lg font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-2 min-h-10 text-sm leading-relaxed text-muted">{tier.tagline}</p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-xs text-faint">{tier.priceNote}</span>
                </p>
                <ul className="mt-7 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-strong">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Button
                    asChild
                    className="w-full"
                    size="lg"
                    variant={tier.highlighted ? "primary" : "secondary"}
                  >
                    <Link href={tier.cta.href}>
                      {tier.cta.label}
                      <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <ul className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-2 text-center">
            {pricingNotes.map((note) => (
              <li key={note} className="text-sm text-muted">
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
