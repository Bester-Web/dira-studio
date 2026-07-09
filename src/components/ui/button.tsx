import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base: pill, confident, smooth
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-pill font-medium whitespace-nowrap transition-all duration-300 ease-premium focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-ink-foreground shadow-accent hover:shadow-accent-lg hover:-translate-y-0.5 hover:brightness-110",
        secondary:
          "border border-(--ds-glass-border) bg-surface text-foreground backdrop-blur-md hover:bg-surface-hover hover:border-accent/40 shadow-sm",
        ghost: "text-muted-strong hover:text-foreground hover:bg-surface",
        whatsapp:
          "border border-(--ds-glass-border) bg-surface text-foreground font-semibold backdrop-blur-md shadow-sm hover:bg-surface-hover hover:-translate-y-0.5 [&_svg]:text-whatsapp",
        link: "text-accent underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
