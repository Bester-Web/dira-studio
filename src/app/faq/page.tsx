import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { faqs } from "@/content/faq";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Everything business owners ask about working with Dira Studio — pricing, timelines, process, SEO and what happens after launch.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqs)) }}
      />
      <section className="relative overflow-hidden pt-20 pb-4 md:pt-28">
        <div className="ds-glow -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2" aria-hidden />
        <Container className="relative flex flex-col items-center text-center">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              FAQ
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Straight answers to
              <span className="ds-gradient-text"> fair questions</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Hiring an agency is a real decision. Here&apos;s everything we&apos;d
              want to know if we were in your position.
            </p>
          </Reveal>
        </Container>
      </section>

      <FaqSection
        items={faqs}
        eyebrow="All questions"
        heading="The full list"
        subheading="Still unanswered? WhatsApp us — a real person replies, fast."
      />
      <FinalCta />
    </>
  );
}
