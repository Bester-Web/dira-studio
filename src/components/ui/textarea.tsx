import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground transition-colors duration-300 ease-premium",
        "placeholder:text-faint",
        "hover:border-border-strong",
        "focus:border-accent/60 focus:bg-surface-hover focus:outline-none focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid=true]:border-destructive/60",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
