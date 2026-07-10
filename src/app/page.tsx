import { Hero } from "@/components/sections/hero";
import { ShowcaseCarousel } from "@/components/sections/showcase-carousel";
import { SocialProof } from "@/components/sections/social-proof";
import { PainPoints } from "@/components/sections/pain-points";
import { ServicesSection } from "@/components/sections/services-section";
import { IndustriesPanorama } from "@/components/sections/industries-panorama";
import { ResultsSection } from "@/components/sections/results-section";
import { Manifesto } from "@/components/sections/manifesto";
import { Testimonials } from "@/components/sections/testimonials";
import { FounderSection } from "@/components/sections/founder-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { ZoneBridge } from "@/components/shared/zone-bridge";
import { testimonials } from "@/content/testimonials";
import { homeFaqs } from "@/content/faq";
import { faqSchema, jsonLd } from "@/lib/schema";

/**
 * The homepage journey: begins in warm ivory daylight and
 * descends into a candlelit executive dark as you scroll.
 */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(homeFaqs)) }}
      />

      {/* Light zone */}
      <Hero />
      <ShowcaseCarousel />
      <SocialProof />
      <PainPoints />
      <ServicesSection />
      <IndustriesPanorama />
      <ResultsSection />
      <Manifesto />

      {/* The lighting changes */}
      <ZoneBridge />

      {/* Dark zone */}
      <div className="zone-dark bg-background">
        <Testimonials testimonials={testimonials} />
        <FounderSection />
        <ProcessTimeline />
        <FaqSection items={homeFaqs} showAllLink />
      </div>
      <FinalCta />
    </>
  );
}
