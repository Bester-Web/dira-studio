import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Target, AlertTriangle, Lightbulb } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { FinalCta } from "@/components/sections/final-cta";
import { getProject, getAllProjectSlugs, portfolio } from "@/content/portfolio";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.client} — Case Study`,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
  });
}

const caseStudySections = [
  { key: "goal", label: "The goal", icon: Target },
  { key: "problem", label: "The problem", icon: AlertTriangle },
  { key: "solution", label: "The solution", icon: Lightbulb },
] as const;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProjects = portfolio.filter((p) => p.slug !== project.slug).slice(0, 2);
  const h = project.accentHue;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Our Work", path: "/portfolio" },
              { name: project.client, path: `/portfolio/${project.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div
          className="ds-glow -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2"
          style={{ background: `radial-gradient(circle, hsl(${h} 70% 50% / 0.18), transparent 65%)` }}
          aria-hidden
        />
        <Container className="relative">
          <Reveal>
            <Link
              href="/portfolio"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden />
              All work
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{project.industry}</Badge>
              <span className="text-xs text-faint">{project.year}</span>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {project.client} · {project.summary}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-7 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <li key={service}>
                  <Badge>{service}</Badge>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Results band */}
      <section className="border-y border-border bg-background-deep/60 py-14">
        <Container>
          <Reveal>
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {project.caseStudy.results.map((result) => (
                <div key={result.label} className="flex flex-col items-center gap-1 text-center">
                  <dd className="font-display text-4xl font-bold text-accent-soft md:text-5xl">
                    {result.value}
                  </dd>
                  <dt className="text-sm text-muted">{result.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Narrative */}
      <section className="py-24 md:py-32">
        <Container narrow>
          <div className="flex flex-col gap-5">
            {caseStudySections.map(({ key, label, icon: SectionIcon }, i) => (
              <Reveal key={key} delay={i * 0.08}>
                <div className="ds-card p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent-soft">
                      <SectionIcon className="size-4.5" aria-hidden />
                    </span>
                    <h2 className="font-display text-lg font-semibold text-foreground">{label}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-strong md:text-base">
                    {project.caseStudy[key]}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <div className="ds-card border-accent/30 bg-accent/[0.05] p-8">
                <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
                  What changed
                </h2>
                <p className="text-sm leading-relaxed text-muted-strong md:text-base">
                  {project.caseStudy.narrative}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* More work */}
      {otherProjects.length > 0 && (
        <section className="bg-background-deep/60">
          <PortfolioGrid projects={otherProjects} withHeading={false} showAllLink />
        </section>
      )}

      <FinalCta
        heading={
          <>
            Your business could be
            <span className="ds-gradient-text"> the next case study</span>
          </>
        }
      />
    </>
  );
}
