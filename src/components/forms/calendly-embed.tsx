"use client";

import { InlineWidget } from "react-calendly";

interface CalendlyEmbedProps {
  /** Full Calendly scheduling URL */
  url: string;
}

/**
 * Inline Calendly scheduler. Client-only (the widget injects an iframe).
 * Styled to sit inside the site's glass card with the brand accent.
 */
export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  return (
    <InlineWidget
      url={url}
      styles={{ height: "700px", minWidth: "280px" }}
      pageSettings={{
        backgroundColor: "faf6ec",
        primaryColor: "8a6f3c",
        textColor: "221c10",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        hideGdprBanner: true,
      }}
    />
  );
}
