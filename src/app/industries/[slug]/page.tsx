import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { XCircle, CheckCircle2, Phone } from "lucide-react";
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

/** Premium photo shown inside the device mockup on each industry hero. */
const industryHeroImages: Record<string, { src: string; alt: string }> = {
  electricians: {
    src: "/images/industries/electrical-hero.jpg",
    alt: "Professional electrician working on an electrical installation",
  },
  plumbers: {
    src: "/images/industries/plumbing-hero.jpg",
    alt: "Professional plumbing installation and pipework",
  },
  "solar-installers": {
    src: "/images/industries/solar-hero.jpg",
    alt: "Solar panel installation under a clear sky",
  },
};

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
  const heroImage = industryHeroImages[industry.slug];

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
        <div className="ds-glow -top-32 left-[10%] h-96 w-[40rem]" aria-hidden />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Copy */}
            <div className="flex flex-col items-start text-left">
              <Reveal>
                <Badge variant="accent" className="mb-6">
                  <Icon name={industry.icon} className="size-3.5" />
                  For {industry.name}
                </Badge>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-[3.4rem]">
                  {industry.hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  {industry.hero.subheadline}
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <CtaGroup className="mt-10 justify-start" size="xl" />
              </Reveal>
            </div>

            {/* Device mockup with industry photo inside the screen */}
            {heroImage && (
              <Reveal delay={0.16}>
                <div className="overflow-hidden rounded-xl border border-border-strong bg-ink shadow-lg">
                  {/* Browser bar */}
                  <div className="flex items-center gap-1.5 px-4 py-3">
                    <span className="size-2.5 rounded-full bg-white/25" />
                    <span className="size-2.5 rounded-full bg-white/25" />
                    <span className="size-2.5 rounded-full bg-white/25" />
                    <span className="ml-3 rounded-pill bg-white/10 px-3 py-0.5 text-[11px] text-white/50">
                      your-{industry.singular.replace(/\s+/g, "")}-business.co.za
                    </span>
                  </div>
                  {/* Screen: photo + dark overlay + overlaid site UI */}
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                      priority
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(15,11,5,0.45) 0%, rgba(15,11,5,0.25) 45%, rgba(15,11,5,0.85) 100%)",
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                      <span className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-white uppercase">
                        <Icon name={industry.icon} className="size-4 text-accent-soft" />
                        {industry.name}
                      </span>
                      <p className="mt-2 max-w-sm font-display text-xl font-semibold text-white sm:text-2xl">
                        Trusted local {industry.singular}s, one tap away.
                      </p>
                      <span className="mt-4 flex w-fit items-center gap-2 rounded-pill bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground">
                        <Phone className="size-4" aria-hidden />
                        Get a Quote
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
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
              subheading="Not a generic template with your logo dropped on it. A system designed around the decisions your customers make."
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
        subheading="A 15-minute conversation about your business. No pressure and no jargon, just an honest look at what a proper website would change."
      />
    </>
  );
}
