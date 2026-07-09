import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { stats, trustedBy } from "@/content/process";

/** Stats band + trusted-by strip, directly under the hero. */
export function SocialProof() {
  return (
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

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-5">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-faint">
              Trusted by growing businesses
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {trustedBy.map((name) => (
                <li
                  key={name}
                  className="font-display text-sm font-semibold tracking-wide text-faint transition-colors hover:text-muted"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
