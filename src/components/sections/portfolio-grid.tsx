import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PortfolioProject } from "@/content/types";

interface PortfolioGridProps {
  projects: PortfolioProject[];
  showAllLink?: boolean;
  withHeading?: boolean;
}

/**
 * Generated cover art: a rich gradient keyed to the project's accent hue.
 * Automatically replaced by /public/images/portfolio/<slug>.jpg via the
 * case-study page when real screenshots exist.
 */
function ProjectCover({ project }: { project: PortfolioProject }) {
  const h = project.accentHue;
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(${h} 70% 12%), hsl(${h} 65% 22%) 55%, hsl(${(h + 40) % 360} 60% 18%))`,
      }}
    >
      <div
        className="absolute -top-12 -right-12 size-64 rounded-full opacity-40 blur-3xl transition-opacity duration-600 group-hover:opacity-70"
        style={{ background: `hsl(${h} 80% 45%)` }}
        aria-hidden
      />
      {/* Abstract browser frame — stands in until real screenshots are added */}
      <div className="absolute inset-x-10 top-12 rounded-t-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-transform duration-600 ease-premium group-hover:-translate-y-2">
        <div className="flex gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <div className="space-y-2.5 p-5 pb-16">
          <div className="h-3 w-2/5 rounded-full bg-white/25" />
          <div className="h-2 w-4/5 rounded-full bg-white/10" />
          <div className="h-2 w-3/5 rounded-full bg-white/10" />
          <div
            className="mt-4 h-7 w-28 rounded-full"
            style={{ background: `hsl(${h} 75% 55%)` }}
          />
        </div>
      </div>
    </div>
  );
}

export function PortfolioGrid({
  projects,
  showAllLink = false,
  withHeading = true,
}: PortfolioGridProps) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        {withHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="Our work"
              heading="Results, not just websites"
              subheading="Every project below had one brief: bring in more customers. Here's what happened."
            />
          </Reveal>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 0.08, 0.24)}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="ds-card ds-card-interactive group block overflow-hidden"
              >
                <ProjectCover project={project} />
                <div className="p-7">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Badge variant="accent">{project.industry}</Badge>
                    <span className="text-xs text-faint">{project.year}</span>
                  </div>
                  <h3 className="flex items-start justify-between gap-3 font-display text-xl font-semibold text-foreground">
                    {project.title}
                    <ArrowUpRight
                      className="mt-1 size-5 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft"
                      aria-hidden
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
                  <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-5">
                    {project.caseStudy.results.slice(0, 2).map((result) => (
                      <div key={result.label}>
                        <dd className="font-display text-lg font-bold text-accent-soft">
                          {result.value}
                        </dd>
                        <dt className="text-xs text-faint">{result.label}</dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {showAllLink && (
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/portfolio">
                  View all work
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
