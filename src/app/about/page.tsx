import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { WhyUs } from "@/components/sections/why-us";
import { ProcessSection } from "@/components/sections/process-section";
import { FinalCta } from "@/components/sections/final-cta";
import { stats } from "@/content/process";
import { company } from "@/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: `${company.name} builds premium websites for service businesses across South Africa — engineered to generate calls, WhatsApp enquiries and quote requests.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="ds-glow -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2" aria-hidden />
        <Container className="relative">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              About {company.name}
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              We exist to make good businesses{" "}
              <span className="ds-gradient-text">impossible to overlook</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Somewhere in your area is a business that does worse work than you —
                and wins more customers. Not because they&apos;re better. Because they
                show up first, look more established, and make it effortless to get
                in touch.
              </p>
              <p>
                {company.name} was founded to fix that imbalance. We build websites
                for service businesses — electricians, builders, law firms, solar
                installers and dozens more — with a single obsession: turning the
                people already searching for your services into calls, WhatsApp
                messages and quote requests.
              </p>
              <p>
                We&apos;re not a volume shop and we don&apos;t do template work. Every
                project gets senior attention, honest advice and a fixed quote. If we
                don&apos;t believe a website will grow your business, we&apos;ll tell
                you — before you spend a rand.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-border bg-background-deep/60 py-14">
        <Container>
          <Reveal>
            <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                  <dd className="font-display text-3xl font-bold text-foreground md:text-4xl">
                    {stat.value}
                  </dd>
                  <dt className="text-xs text-muted md:text-sm">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container narrow>
          <Reveal>
            <SectionHeading
              eyebrow="What we believe"
              heading="Three principles behind every project"
              align="center"
            />
          </Reveal>
          <div className="flex flex-col gap-5">
            {[
              {
                title: "A website is an employee, not an expense.",
                body: "It should show up every day, represent you perfectly, and bring in work. We design to that job description — and we measure performance the way you'd measure any employee: results.",
              },
              {
                title: "Trust is won in seconds.",
                body: "Your customers decide whether to call you before they've read a word. Speed, clarity and professional presentation aren't nice-to-haves; they're the whole game.",
              },
              {
                title: "Simple beats clever.",
                body: "Visitors don't want to be impressed — they want to be helped. The best websites make the next step obvious: call, WhatsApp, or request a quote. Everything else is decoration.",
              },
            ].map((principle, i) => (
              <Reveal key={principle.title} delay={i * 0.08}>
                <div className="ds-card p-8">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <WhyUs />
      <ProcessSection />
      <FinalCta
        heading={
          <>
            Let&apos;s find out what your business
            <span className="ds-gradient-text"> could be winning</span>
          </>
        }
      />
    </>
  );
}
