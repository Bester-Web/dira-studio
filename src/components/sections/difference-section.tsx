import { X, Check } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { difference } from "@/content/home";

/** Side-by-side comparison: the usual agency experience vs Dira Studio. */
export function DifferenceSection() {
  return (
    <section className="bg-background-deep/60 py-24 md:py-32">
      <Container narrow>
        <Reveal>
          <SectionHeading eyebrow={difference.eyebrow} heading={difference.heading} />
        </Reveal>

        <div className="flex flex-col gap-3">
          {difference.rows.map((row, i) => (
            <Reveal key={row.us} delay={Math.min(i * 0.06, 0.3)}>
              <div className="ds-card grid gap-0 overflow-hidden p-0 sm:grid-cols-2">
                <div className="flex items-start gap-3 border-b border-border p-5 sm:border-r sm:border-b-0">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive/70" aria-hidden />
                  <p className="text-sm leading-relaxed text-muted">{row.others}</p>
                </div>
                <div className="flex items-start gap-3 bg-accent/[0.06] p-5">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  <p className="text-sm leading-relaxed font-medium text-foreground">
                    {row.us}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
