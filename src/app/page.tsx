import { Hero } from "@/components/sections/hero";
import { LaptopShowcase } from "@/components/sections/laptop-showcase";
import { SocialProof } from "@/components/sections/social-proof";
import { ProblemSection } from "@/components/sections/problem-section";
import { SystemSection } from "@/components/sections/system-section";
import { DifferenceSection } from "@/components/sections/difference-section";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { siteConfig } from "@/content/site.config";
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
      {siteConfig.features.laptopShowcase && <LaptopShowcase />}
      <SocialProof />
      <ProblemSection />
      <SystemSection />
      <DifferenceSection />
      <IndustriesGrid industries={featuredIndustries} showAllLink />
      <ServicesGrid services={featuredServices} showAllLink />
      <PortfolioGrid projects={portfolio.slice(0, 2)} showAllLink />
      <Testimonials testimonials={testimonials} />
      <FaqSection items={homeFaqs} showAllLink />
      <FinalCta />
    </>
  );
}
