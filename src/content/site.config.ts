import { company } from "./company";

/**
 * Global site configuration. SEO defaults, URLs, feature flags.
 */
export const siteConfig = {
  name: company.name,
  /** Canonical production URL. Update when the domain is live. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dirastudio.co.za",
  title: {
    default: `${company.name} | Website Design for Electrical, Plumbing & Solar Companies`,
    /** Used by Next.js title templates: "%s | Dira Studio" */
    template: `%s | ${company.name}`,
  },
  description:
    "Premium website design, SEO, lead generation and web hosting for South African electrical, plumbing and solar companies. Get found first and win more work.",
  keywords: [
    "website design South Africa",
    "SEO South Africa",
    "electrical website design",
    "plumbing website design",
    "solar website design",
    "lead generation South Africa",
    "web hosting South Africa",
  ],
  locale: "en_ZA",
  /** Feature flags. Flip without touching components. */
  features: {
    whatsappFloatingButton: true,
    portfolioSection: true,
  },
} as const;
