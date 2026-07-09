import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { XCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CtaGroup } from "@/components/shared/cta-group";
import { Icon } from "@/components/shared/icon";
import { Badge } from "@/components/ui/badge";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { getIndustry, getAllIndustrySlugs } from "@/content/industries";
import { services } from "@/content/services";
import { portfolio } from "@/content/portfolio";
import { testimonials } from "@/content/testimonials";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.seo.title,
    description: industry.seo.description,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const industryServices = services.filter((s) => industry.services.includes(s.slug));
  const industryProjects = portfolio.filter((p) => p.industry === industry.name);
  const industryTestimonials = testimonials.filter((t) => t.industry === industry.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(industry.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: industry.name, path: `/industries/${industry.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="ds-glow -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2" aria-hidden />
        <Container className="relative flex flex-col items-center text-center">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              <Icon name={industry.icon} className="size-3.5" />
              For {industry.name}
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-4xl font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              {industry.hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {industry.hero.subheadline}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <CtaGroup className="mt-10" size="xl" />
          </Reveal>
        </Container>
      </section>

      {/* Problems */}
      <section className="bg-background-deep/60 py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Sound familiar?"
              heading="What's quietly costing you work"
              subheading={`These are the patterns we see over and over with ${industry.name.toLowerCase()} before we work together.`}
            />
          </Reveal>
          <ul className="mx-auto grid max-w-3xl gap-4">
            {industry.problems.map((problem, i) => (
              <Reveal key={problem} as="li" delay={Math.min(i * 0.06, 0.3)}>
                <div className="ds-card flex items-start gap-4 p-6">
                  <XCircle className="mt-0.5 size-5 shrink-0 text-destructive/80" aria-hidden />
                  <p className="text-sm leading-relaxed text-muted-strong md:text-base">
                    {problem}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Solutions */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we fix it"
              heading="A website built for how your customers choose"
              subheading="Not a generic template with your logo on it — a system designed around the decisions your customers make."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {industry.solutions.map((solution, i) => (
              <Reveal key={solution.title} delay={Math.min(i * 0.07, 0.28)}>
                <div className="ds-card h-full p-8">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {solution.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-background-deep/60 py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What you get"
              heading="The outcomes that matter"
            />
          </Reveal>
          <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {industry.benefits.map((benefit, i) => (
              <Reveal key={benefit} as="li" delay={Math.min(i * 0.05, 0.25)}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-hidden />
                  <p className="text-sm leading-relaxed text-muted-strong md:text-base">
                    {benefit}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Relevant services */}
      <ServicesGrid services={industryServices} />

      {/* Industry-relevant portfolio + testimonials, if any exist */}
      {industryProjects.length > 0 && (
        <PortfolioGrid projects={industryProjects} withHeading />
      )}
      {industryTestimonials.length > 0 && (
        <Testimonials testimonials={industryTestimonials} />
      )}

      <FaqSection
        items={industry.faqs}
        eyebrow={`${industry.name} FAQ`}
        heading="Your questions, answered"
      />

      <FinalCta
        heading={
          <>
            Ready to be the {industry.singular} customers
            <span className="ds-gradient-text"> find first?</span>
          </>
        }
        subheading="A 15-minute conversation about your business. No pressure, no jargon — just an honest look at what a proper website would change."
      />
    </>
  );
}
