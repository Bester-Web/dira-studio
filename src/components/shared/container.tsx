import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Narrow variant for long-form text pages */
  narrow?: boolean;
}

/** Standard page container — controls max width and horizontal padding. */
export function Container({ className, narrow = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        narrow ? "max-w-(--ds-container-narrow)" : "max-w-(--ds-container)",
        className
      )}
      {...props}
    />
  );
}
