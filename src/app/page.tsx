import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { WhyUs } from "@/components/sections/why-us";
import { ProcessSection } from "@/components/sections/process-section";
import { Testimonials } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { featuredIndustries } from "@/content/industries";
import { featuredServices } from "@/content/services";
import { portfolio } from "@/content/portfolio";
import { testimonials } from "@/content/testimonials";
import { homeFaqs } from "@/content/faq";
import { faqSchema, jsonLd } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(homeFaqs)) }}
      />
      <Hero />
      <SocialProof />
      <IndustriesGrid industries={featuredIndustries} showAllLink />
      <ServicesGrid services={featuredServices} showAllLink />
      <PortfolioGrid projects={portfolio.slice(0, 2)} showAllLink />
      <WhyUs />
      <ProcessSection />
      <Testimonials testimonials={testimonials} />
      <PricingSection />
      <FaqSection items={homeFaqs} showAllLink />
      <FinalCta />
    </>
  );
}
