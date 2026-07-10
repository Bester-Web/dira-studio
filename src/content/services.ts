import type { ServiceOffering } from "./types";

/**
 * The four services Dira Studio offers. Nothing else.
 * Every service exists to produce leads and revenue for
 * electrical, plumbing and solar companies.
 */
export const services: ServiceOffering[] = [
  {
    slug: "website-design",
    name: "Premium Website Design",
    shortDescription:
      "Custom websites that look premium, build trust and convert visitors into paying customers.",
    description:
      "Your website is the first impression most customers ever get of your business. We design yours to look like the market leader in your area and to make calling you the obvious next step. No templates. Built around how your customers choose.",
    icon: "globe",
    outcomes: [
      "Look like the most established company in your area",
      "Calling and WhatsApp one tap away on every page",
      "Loads in under two seconds on any phone",
      "Built to turn visitors into quote requests",
    ],
    featured: true,
  },
  {
    slug: "technical-seo",
    name: "SEO That Gets You Found",
    shortDescription:
      "Rank on Google for the keywords your customers are searching for right now.",
    description:
      "When someone in your area searches for an electrician, a plumber or a solar quote, one business gets that job. SEO decides which one. We handle the structure, speed, local signals and content that put your name at the top.",
    icon: "search",
    outcomes: [
      "Show up for 'near me' searches in your service area",
      "Win the Google map results for your suburbs",
      "Clear monthly reporting in plain English",
      "Organic leads that compound month after month",
    ],
    featured: true,
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    shortDescription:
      "We generate high-quality leads and book more jobs for your business.",
    description:
      "Traffic means nothing if it doesn't turn into work. We run targeted campaigns pointed at pages built to convert, so you pay for customers, not clicks. Every lead is tracked, so you always know exactly what your marketing brings in.",
    icon: "target",
    outcomes: [
      "Qualified enquiries from people ready to buy",
      "Leads within days, not months",
      "Full tracking from click to booked job",
      "Transparent cost per lead, no guesswork",
    ],
    featured: true,
  },
  {
    slug: "hosting",
    name: "Premium Web Hosting",
    shortDescription:
      "Blazing fast, secure hosting with 99.9% uptime and world class support.",
    description:
      "A slow or offline website loses jobs silently. We host your site on enterprise infrastructure, keep it updated, back it up daily, and fix issues before you notice them. When you need a change, you send one WhatsApp.",
    icon: "server",
    outcomes: [
      "99.9% uptime with daily backups",
      "Under two second load times, always",
      "Security updates handled for you",
      "Changes done within one business day",
    ],
    featured: true,
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string): ServiceOffering | undefined {
  return services.find((s) => s.slug === slug);
}
