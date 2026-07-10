import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/content/company";
import { cn } from "@/lib/utils";

interface CtaGroupProps {
  primaryLabel?: string;
  primaryHref?: string;
  /** Show the WhatsApp secondary action */
  whatsapp?: boolean;
  size?: "md" | "lg" | "xl";
  className?: string;
}

/**
 * The site's core conversion pair: primary quote CTA + WhatsApp.
 * Used in the hero, section footers and final CTA to keep the
 * paths to contact identical everywhere.
 */
export function CtaGroup({
  primaryLabel = "Book Your Free Strategy Call",
  primaryHref = "/contact",
  whatsapp = true,
  size = "lg",
  className,
}: CtaGroupProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
      <Button asChild size={size}>
        <Link href={primaryHref}>
          {primaryLabel}
          <ArrowRight aria-hidden />
        </Link>
      </Button>
      {whatsapp && (
        <Button asChild size={size} variant="whatsapp">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden />
            WhatsApp us
          </a>
        </Button>
      )}
    </div>
  );
}
