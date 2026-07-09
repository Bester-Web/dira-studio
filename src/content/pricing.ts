import type { PricingTier } from "./types";

/**
 * Pricing packages. Edit prices and features here — the pricing page
 * and homepage pricing section render from this file.
 */
export const pricingIntro = {
  eyebrow: "Pricing",
  heading: "Clear pricing. Serious returns.",
  subheading:
    "One new customer usually pays for the website. Everything after that is growth. Fixed quotes, no hourly billing, no surprises.",
};

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For businesses that need a professional presence that converts.",
    price: "R12,500",
    priceNote: "once-off, from",
    features: [
      "5-page conversion-focused website",
      "Mobile-first, loads under 2 seconds",
      "Click-to-call & WhatsApp integration",
      "Quote request form",
      "Google Business Profile setup",
      "Foundational on-page SEO",
      "Launch in 2–3 weeks",
    ],
    highlighted: false,
    cta: { label: "Start with Starter", href: "/contact?package=starter" },
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For businesses serious about becoming the obvious choice in their area.",
    price: "R24,500",
    priceNote: "once-off, from",
    features: [
      "Up to 12 pages incl. service & area pages",
      "Everything in Starter",
      "Custom copywriting that sells",
      "Technical SEO foundation & schema",
      "Review collection system",
      "Lead notification via WhatsApp & email",
      "Analytics with plain-English reporting",
      "Launch in 3–4 weeks",
    ],
    highlighted: true,
    cta: { label: "Go Professional", href: "/contact?package=professional" },
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "For businesses that want to dominate their market, not just compete.",
    price: "R45,000",
    priceNote: "once-off, from",
    features: [
      "Unlimited pages & landing pages",
      "Everything in Professional",
      "Full brand identity refresh",
      "AI-powered instant enquiry response",
      "Google Ads campaign & landing pages",
      "Advanced local SEO campaign",
      "Quarterly growth strategy sessions",
      "Priority support, same-day changes",
    ],
    highlighted: false,
    cta: { label: "Dominate with Premium", href: "/contact?package=premium" },
  },
];

/** Reassurance shown under the pricing grid. */
export const pricingNotes = [
  "Every package includes hosting setup, SSL and launch support.",
  "Care plans available from R950/month — hosting, backups, updates and changes.",
  "Not sure which fits? Send a WhatsApp and we'll tell you honestly.",
];
