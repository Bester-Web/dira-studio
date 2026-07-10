import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

/**
 * Editorial pause: one large serif statement between the proof
 * and the dark zone. No cards, no buttons. Just conviction.
 */
export function Manifesto() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="ds-arch -bottom-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 opacity-60" aria-hidden />
      <Container narrow className="relative text-center">
        <Reveal>
          <span className="ds-eyebrow">Why we do this</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-3xl leading-[1.25] font-medium text-foreground md:text-4xl lg:text-[2.9rem]">
            We believe the best tradesman in town should never lose work to the
            one with the better website. So we make sure you have{" "}
            <span className="text-accent italic">both</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-9 max-w-xl text-base leading-relaxed text-muted">
            Your reputation is built on workmanship. Ours is built on what that
            workmanship earns you online. Every website we craft carries the same
            standard you hold your own tools to.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
