"use client";

import * as React from "react";
import { motion, type MotionValue } from "framer-motion";

interface MacbookProps {
  /** Lid rotation in degrees: -88 closed, 0 fully open */
  lidAngle: MotionValue<number> | number;
  /** 0 = screen off (black), 1 = powered on */
  screenPower: MotionValue<number> | number;
  children: React.ReactNode;
  className?: string;
}

/**
 * Photorealistic Space Black MacBook Pro built in CSS 3D.
 * The lid rotates around its hinge; the screen powers on
 * with a soft glow as `screenPower` approaches 1.
 */
export function Macbook({ lidAngle, screenPower, children, className }: MacbookProps) {
  return (
    <div className={className} style={{ perspective: "2600px" }} aria-hidden>
      <div style={{ transformStyle: "preserve-3d" }}>
        {/* Lid */}
        <motion.div
          className="relative aspect-[16/10.4] w-full origin-bottom rounded-t-[4.5%] p-[1.6%]"
          style={{
            rotateX: lidAngle,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            background: "linear-gradient(175deg, #3a3a40 0%, #232327 30%, #1a1a1e 100%)",
            boxShadow:
              "0 2px 6px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255,255,255,0.16), inset 0 -1px 1px rgba(0,0,0,0.6)",
          }}
        >
          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[3%] bg-black">
            <motion.div className="h-full w-full" style={{ opacity: screenPower }}>
              {children}
            </motion.div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 h-[3.2%] w-[11%] -translate-x-1/2 rounded-b-[6px] bg-black" />
            {/* Glass reflection */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(112deg, rgba(255,255,255,0.1) 0%, transparent 28%, transparent 72%, rgba(255,255,255,0.04) 100%)",
              }}
            />
          </div>
          {/* Screen glow while powered */}
          <motion.div
            className="pointer-events-none absolute inset-[-6%] -z-10 rounded-[10%]"
            style={{
              opacity: screenPower,
              background:
                "radial-gradient(60% 60% at 50% 45%, rgba(214,182,110,0.22), transparent 70%)",
              filter: "blur(24px)",
            }}
          />
        </motion.div>

        {/* Base / keyboard deck */}
        <div className="relative">
          <div
            className="h-[13px] w-full rounded-b-[10px] sm:h-[17px]"
            style={{
              background:
                "linear-gradient(to bottom, #37373d 0%, #26262b 40%, #131316 100%)",
              boxShadow:
                "0 3px 8px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)",
            }}
          />
          {/* Front lip notch */}
          <div
            className="absolute top-0 left-1/2 h-[6px] w-[13%] -translate-x-1/2 rounded-b-[8px]"
            style={{ background: "rgba(0,0,0,0.55)" }}
          />
          {/* Ground shadow */}
          <div
            className="absolute -bottom-8 left-1/2 h-9 w-[88%] -translate-x-1/2 rounded-[50%]"
            style={{ background: "rgba(30,22,8,0.35)", filter: "blur(22px)" }}
          />
        </div>
      </div>
    </div>
  );
}
