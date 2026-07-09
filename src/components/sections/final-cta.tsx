import { Container } from "@/components/shared/container";
import { CtaGroup } from "@/components/shared/cta-group";
import { Reveal } from "@/components/shared/reveal";
import { company } from "@/content/company";

interface FinalCtaProps {
  heading?: React.ReactNode;
  subheading?: string;
  primaryLabel?: string;
}

/** Closing conversion section used at the bottom of nearly every page. */
export function FinalCta({
  heading = (
    <>
      Your competitors&apos; websites are
      <br className="hidden sm:block" />
      <span className="ds-gradient-text"> winning your customers</span>
    </>
  ),
  subheading = "Every day without a website that converts is a day of enquiries going to someone else. A 15-minute conversation is all it takes to find out what's possible.",
  primaryLabel = "Get a free quote",
}: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div
        className="ds-glow bottom-0 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 translate-y-1/2"
        aria-hidden
      />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {subheading}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <CtaGroup className="mt-10" size="xl" primaryLabel={primaryLabel} />
        </Reveal>
        <Reveal delay={0.26}>
          <p className="mt-8 text-sm text-faint">
            Or call us directly: {company.contact.phone} · {company.hours}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
