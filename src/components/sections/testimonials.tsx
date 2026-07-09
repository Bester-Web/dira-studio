import { Quote } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import type { Testimonial } from "@/content/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
  withHeading?: boolean;
}

export function Testimonials({ testimonials, withHeading = true }: TestimonialsProps) {
  return (
    <section className="bg-background-deep/60 py-24 md:py-32">
      <Container>
        {withHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="Client stories"
              heading="Hear it from the owners"
              subheading="Business owners don't care about design trends. They care about the phone ringing. So do we."
            />
          </Reveal>
        )}

        <ul className="grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.author} as="li" delay={Math.min(i * 0.07, 0.28)}>
              <figure className="ds-card flex h-full flex-col p-8">
                <Quote className="mb-5 size-7 text-accent/50" aria-hidden />
                <blockquote className="text-base leading-relaxed text-muted-strong">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-faint">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                  {testimonial.result && (
                    <Badge variant="success">{testimonial.result}</Badge>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
