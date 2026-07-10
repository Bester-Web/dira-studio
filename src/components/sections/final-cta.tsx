import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { finalCta } from "@/content/home";
import { company, whatsappLink } from "@/content/company";

interface FinalCtaProps {
  heading?: React.ReactNode;
  subheading?: string;
}

/**
 * Closing conversion section. Always renders inside the dark zone
 * so every page ends in the same candlelit finish as the footer.
 */
export function FinalCta({
  heading = finalCta.heading,
  subheading = finalCta.subheading,
}: FinalCtaProps) {
  return (
    <div className="zone-dark bg-background">
      <section className="relative overflow-hidden py-24 md:py-36">
        <div
          className="ds-glow bottom-0 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 translate-y-1/2"
          aria-hidden
        />
        <div className="ds-arch -top-24 left-[-8%] h-96 w-72 opacity-40 max-lg:hidden" aria-hidden />
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
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="xl" className="shadow-accent-lg">
                <Link href="/contact">
                  {finalCta.cta}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild size="xl" variant="whatsapp">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden />
                  WhatsApp us
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {finalCta.chips.map((chip) => (
                <li key={chip} className="flex items-center gap-1.5 text-sm text-muted">
                  <Check className="size-3.5 text-accent" aria-hidden />
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-6 text-sm text-faint">
              Or call us directly: {company.contact.phone} · {company.hours}
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
