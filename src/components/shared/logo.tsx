import Link from "next/link";
import { cn } from "@/lib/utils";
import { company } from "@/content/company";

interface LogoProps {
  className?: string;
}

/** Classical column mark, drawn inline so it inherits the current zone colour. */
function ColumnMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M4 21h16" />
      <path d="M5 18h14" />
      <path d="M8 18V8M12 18V8M16 18V8" />
      <path d="M5 8h14" />
      <path d="M4 5.5C7 4 9.5 3.5 12 3.5S17 4 20 5.5" />
    </svg>
  );
}

/** Wordmark logo with classical column icon. */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${company.name} home`}
      className={cn("inline-flex items-center gap-2.5 text-foreground", className)}
    >
      <ColumnMark className="size-7 text-accent" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.18em]">DIRA</span>
        <span className="mt-0.5 text-[0.55rem] font-medium tracking-[0.42em] text-muted">
          STUDIO
        </span>
      </span>
    </Link>
  );
}
