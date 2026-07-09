import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { portfolio } from "@/content/portfolio";
import { testimonials } from "@/content/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Work",
  description:
    "Case studies from service businesses that turned their websites into their best salesman: more calls, more WhatsApp enquiries, more booked jobs.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="ds-glow -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2" aria-hidden />
        <Container className="relative flex flex-col items-center text-center">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              Our work
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Judge us by
              <span className="ds-gradient-text"> their numbers</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Beautiful websites are table stakes. What matters is what happened
              after launch: the calls, the enquiries, the growth. Here are the
              stories.
            </p>
          </Reveal>
        </Container>
      </section>

      <PortfolioGrid projects={portfolio} withHeading={false} />
      <Testimonials testimonials={testimonials} />
      <FinalCta
        heading={
          <>
            Want results like these
            <span className="ds-gradient-text"> for your business?</span>
          </>
        }
      />
    </>
  );
}
