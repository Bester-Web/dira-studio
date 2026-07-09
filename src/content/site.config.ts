import { company } from "./company";

/**
 * Global site configuration — SEO defaults, URLs, feature flags.
 */
export const siteConfig = {
  name: company.name,
  /** Canonical production URL — update when the domain is live. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dirastudio.co.za",
  title: {
    default: `${company.name} — Websites That Win You Customers`,
    /** Used by Next.js title templates: "%s — Dira Studio" */
    template: `%s — ${company.name}`,
  },
  description:
    "We design premium websites for service businesses that turn visitors into calls, WhatsApp enquiries and quote requests. More customers, not just a prettier website.",
  keywords: [
    "web design agency South Africa",
    "websites for service businesses",
    "lead generation websites",
    "website design Cape Town",
    "conversion focused web design",
  ],
  locale: "en_ZA",
  /** Feature flags — flip without touching components. */
  features: {
    whatsappFloatingButton: true,
    portfolioSection: true,
    pricingSection: true,
  },
  /**
   * 3D hero scene (Spline). Set enabled: false to return to the
   * text-only hero, or swap the URL for any other scene export.
   * Loads on desktop only, and never for reduced-motion users.
   */
  heroScene: {
    enabled: true,
    url: "https://prod.spline.design/oeExwdARrtvYt38J/scene.splinecode",
  },
} as const;
