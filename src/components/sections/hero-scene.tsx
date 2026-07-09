"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

/** Ambient placeholder shown before (or instead of) the 3D scene. */
function ScenePlaceholder() {
  return (
    <div className="relative h-full w-full" aria-hidden>
      <div className="ds-glow top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

// Client-only: the WebGL runtime is heavy, so it must never block SSR or hydration.
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <ScenePlaceholder />,
});

interface HeroSceneProps {
  sceneUrl: string;
}

/**
 * 3D hero scene with strict performance guards:
 * - loads on desktop viewports only (the runtime is ~1.5MB — too heavy for mobile)
 * - skipped entirely for prefers-reduced-motion users
 * - deferred until the browser is idle so LCP (headline) renders first
 * - edge gradients blend the canvas into the page background
 */
export function HeroScene({ sceneUrl }: HeroSceneProps) {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (reduceMotion) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    // Small delay lets the headline and CTAs render and become interactive
    // before the WebGL runtime starts downloading.
    const timer = window.setTimeout(() => setReady(true), 400);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {ready ? (
        <div
          className="h-full w-full transition-opacity duration-1000 ease-premium"
          style={{ opacity: loaded ? 1 : 0 }}
        >
          <Spline
            scene={sceneUrl}
            onLoad={() => setLoaded(true)}
            className="h-full w-full"
          />
        </div>
      ) : (
        <ScenePlaceholder />
      )}
      {/* Blend edges into the page background so the canvas never reads as a box */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--ds-bg) 2%, transparent 30%, transparent 70%, var(--ds-bg) 98%), linear-gradient(to bottom, var(--ds-bg) 2%, transparent 28%, transparent 72%, var(--ds-bg) 98%)",
        }}
        aria-hidden
      />
      {/* Soft radial vignette to unify the scene's baked background with the page */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, transparent 55%, var(--ds-bg) 100%)",
        }}
        aria-hidden
      />
    </div>
  );
}
