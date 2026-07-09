import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { industries } from "@/content/industries";
import { testimonials } from "@/content/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Websites for electricians, plumbers, solar installers, law firms, builders and every service business in between. Built to generate calls and quote requests.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="ds-glow -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2" aria-hidden />
        <Container className="relative flex flex-col items-center text-center">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              Industries
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Your trade is unique.
              <span className="ds-gradient-text"> Your customers aren&apos;t.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Whatever you do, your customers follow the same path: search, compare,
              trust, contact. We&apos;ve refined that path for service businesses of
              every kind, and we keep adding more.
            </p>
          </Reveal>
        </Container>
      </section>

      <IndustriesGrid
        industries={industries}
        eyebrow="All industries"
        heading="Find your business below"
        subheading="Don't see your industry? The approach works for any business whose customers search online. Get in touch. The list keeps growing."
      />
      <Testimonials testimonials={testimonials} />
      <FinalCta
        heading={
          <>
            Don&apos;t see your industry?
            <span className="ds-gradient-text"> That&apos;s never stopped us</span>
          </>
        }
        subheading="The fundamentals of winning customers online are universal. Tell us what you do and we'll show you exactly how we'd apply them to your business."
      />
    </>
  );
}
