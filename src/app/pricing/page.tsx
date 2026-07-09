import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { PricingSection } from "@/components/sections/pricing-section";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { testimonials } from "@/content/testimonials";
import { faqs } from "@/content/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Clear, fixed pricing for premium websites that generate customers. Three packages, no hourly billing, no surprises — one new customer usually pays for the site.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-4 md:pt-28">
        <div className="ds-glow -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2" aria-hidden />
        <Container className="relative flex flex-col items-center text-center">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              Pricing
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              An investment that
              <span className="ds-gradient-text"> pays for itself</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Think about what one new customer is worth to your business. Now
              imagine a website bringing you several every month. That&apos;s the
              maths behind every package below.
            </p>
          </Reveal>
        </Container>
      </section>

      <PricingSection />
      <Testimonials testimonials={testimonials.slice(0, 2)} />
      <FaqSection
        items={faqs.filter((f) => f.category === "pricing" || f.category === "general").slice(0, 6)}
        showAllLink
      />
      <FinalCta
        heading={
          <>
            Still weighing it up?
            <span className="ds-gradient-text"> Let&apos;s talk numbers</span>
          </>
        }
        subheading="Tell us what an average customer is worth to you, and we'll show you exactly what your website needs to do to pay for itself. No pressure, just arithmetic."
      />
    </>
  );
}
