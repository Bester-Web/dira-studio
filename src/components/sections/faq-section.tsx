import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem, IndustryFaq } from "@/content/types";

interface FaqSectionProps {
  items: (FaqItem | IndustryFaq)[];
  showAllLink?: boolean;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
}

export function FaqSection({
  items,
  showAllLink = false,
  eyebrow = "Questions",
  heading = "Answers before you ask",
  subheading = "The things business owners ask us most. Something else on your mind? WhatsApp us. A real person answers fast.",
}: FaqSectionProps) {
  return (
    <section className="bg-background-deep/60 py-24 md:py-32">
      <Container narrow>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} heading={heading} subheading={subheading} />
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {items.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {showAllLink && (
          <Reveal delay={0.15}>
            <div className="mt-10 text-center">
              <Button asChild variant="ghost">
                <Link href="/faq">
                  See all questions
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
