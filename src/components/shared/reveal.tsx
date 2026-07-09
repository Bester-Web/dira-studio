"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  /** Delay in seconds — use for simple stagger effects */
  delay?: number;
  className?: string;
  /** Render as a different element (defaults to div) */
  as?: "div" | "section" | "li" | "span";
}

/**
 * Scroll-reveal wrapper: fades content up as it enters the viewport.
 * Respects prefers-reduced-motion automatically.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.6, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </Component>
  );
}
