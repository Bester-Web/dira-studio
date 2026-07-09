import { Phone, MessageCircle, FileText } from "lucide-react";
import { Container } from "@/components/shared/container";
import { CtaGroup } from "@/components/shared/cta-group";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { HeroScene } from "@/components/sections/hero-scene";
import { siteConfig } from "@/content/site.config";
import { cn } from "@/lib/utils";

const outcomes = [
  { icon: Phone, label: "More calls" },
  { icon: MessageCircle, label: "More WhatsApp enquiries" },
  { icon: FileText, label: "More quote requests" },
] as const;

/** Homepage hero: the promise, the proof, the paths to contact. */
export function Hero() {
  const scene = siteConfig.heroScene;
  const withScene = scene.enabled;

  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-24 md:pb-32">
      {/* Ambient glow */}
      <div
        className="ds-glow -top-40 left-1/2 h-[34rem] w-[52rem] -translate-x-1/2"
        aria-hidden
      />
      <div className="ds-glow top-40 -right-64 h-96 w-96 opacity-50" aria-hidden />

      <Container className="relative">
        <div
          className={cn(
            "flex flex-col items-center text-center",
            withScene &&
              "lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:text-left"
          )}
        >
          <div className={cn("flex flex-col items-center", withScene && "lg:items-start")}>
            <Reveal>
              <Badge variant="accent" className="mb-6">
                Premium websites for service businesses
              </Badge>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-4xl font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-[4rem]">
                Your best salesperson
                <br />
                <span className="ds-gradient-text">works on your website</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                We don&apos;t sell websites. We build digital experiences that turn
                the people searching for your services into booked jobs — while you
                focus on doing the work.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <CtaGroup
                className={cn("mt-10", withScene && "lg:justify-start")}
                size="xl"
              />
            </Reveal>

            <Reveal delay={0.32}>
              <ul
                className={cn(
                  "mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3",
                  withScene && "lg:justify-start"
                )}
              >
                {outcomes.map(({ icon: OutcomeIcon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-sm font-medium text-muted-strong"
                  >
                    <span className="flex size-7 items-center justify-center rounded-pill bg-accent/10 text-accent-soft">
                      <OutcomeIcon className="size-3.5" aria-hidden />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {withScene && (
            <div className="hidden h-[620px] lg:-my-8 lg:block" aria-hidden>
              <HeroScene sceneUrl={scene.url} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
