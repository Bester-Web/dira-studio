import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Heading level for document outline; visual size is independent */
  as?: "h1" | "h2" | "h3";
}

/** Consistent section intro: eyebrow, heading, optional subheading. */
export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.16em] uppercase text-accent-soft">
          {eyebrow}
        </span>
      )}
      <Tag className="max-w-3xl font-display text-3xl font-semibold text-foreground sm:text-4xl md:text-[2.75rem]">
        {heading}
      </Tag>
      {subheading && (
        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{subheading}</p>
      )}
    </div>
  );
}
