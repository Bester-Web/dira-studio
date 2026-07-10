import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { results } from "@/content/home";

/** Case study stat cards. Proof before promises. */
export function ResultsSection() {
  return (
    <section className="bg-background-deep/60 py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="flex flex-col items-start">
              <span className="ds-eyebrow">{results.eyebrow}</span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                {results.heading}
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
                {results.subheading}
              </p>
              <Button asChild variant="secondary" className="mt-8">
                <Link href="/portfolio">
                  View More Case Studies
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {results.cases.map((c, i) => (
              <Reveal key={c.slug} delay={Math.min(i * 0.08, 0.24)}>
                <Link
                  href={`/portfolio/${c.slug}`}
                  className="ds-card ds-card-interactive grid gap-5 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon name={c.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {c.company}
                    </h3>
                    <p className="text-xs text-faint">{c.industry}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted italic">
                      &ldquo;{c.quote}&rdquo;
                    </p>
                    <span className="mt-2 flex gap-0.5">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="size-3 fill-accent text-accent" aria-hidden />
                      ))}
                    </span>
                  </div>
                  <dl className="flex gap-8 sm:flex-col sm:gap-3 sm:text-right">
                    {c.stats.map((stat) => (
                      <div key={stat.label}>
                        <dd className="font-display text-2xl font-bold text-accent">
                          {stat.value}
                        </dd>
                        <dt className="text-xs text-faint">{stat.label}</dt>
                      </div>
                    ))}
                  </dl>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
