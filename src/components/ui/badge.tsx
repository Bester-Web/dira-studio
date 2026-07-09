import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-xs font-medium tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-(--ds-glass-border) bg-surface text-muted-strong backdrop-blur-md",
        accent: "border-accent/25 bg-accent/10 text-accent",
        success: "border-success/25 bg-success/10 text-success",
        outline: "border-border-strong bg-transparent text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
