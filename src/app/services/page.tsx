import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessSection } from "@/components/sections/process-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { services } from "@/content/services";
import { faqs } from "@/content/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Website design, redesigns, landing pages, SEO, Google Ads and AI automation for service businesses. Every service built to generate more customers.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="ds-glow -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2" aria-hidden />
        <Container className="relative flex flex-col items-center text-center">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              Services
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Every service points at
              <span className="ds-gradient-text"> one outcome</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              More customers for your business. Premium websites, SEO, lead
              generation and hosting, combined around what will actually move your
              numbers, not what&apos;s easiest to sell.
            </p>
          </Reveal>
        </Container>
      </section>

      <ServicesGrid services={services} detailed />
      <ProcessSection />
      <FaqSection
        items={faqs.filter((f) => f.category === "process" || f.category === "pricing")}
        showAllLink
      />
      <FinalCta
        heading={
          <>
            Not sure what you need?
            <span className="ds-gradient-text"> We&apos;ll tell you honestly</span>
          </>
        }
        subheading="Send us a message about your business. We'll come back with a straight answer about what will grow it, even if the answer is 'not us'."
      />
    </>
  );
}
