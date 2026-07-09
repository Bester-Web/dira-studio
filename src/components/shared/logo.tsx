import Link from "next/link";
import { cn } from "@/lib/utils";
import { company } from "@/content/company";

interface LogoProps {
  className?: string;
}

/**
 * Wordmark logo. Swap the inner markup for an <Image> when a
 * graphic logo is produced — the header/footer won't change.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${company.name} — home`}
      className={cn(
        "inline-flex items-baseline gap-0.5 font-display text-xl font-bold tracking-tight text-foreground",
        className
      )}
    >
      Dira
      <span className="text-accent-soft">Studio</span>
    </Link>
  );
}
