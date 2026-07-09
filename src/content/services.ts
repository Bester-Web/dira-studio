import type { ServiceOffering } from "./types";

/**
 * Services offered by Dira Studio.
 * Add a new object here and it appears on /services, the homepage,
 * the footer and anywhere else services are listed. Zero redesign needed.
 */
export const services: ServiceOffering[] = [
  {
    slug: "website-design",
    name: "Website Design",
    shortDescription:
      "A website built from scratch around one question: what makes your customer pick up the phone?",
    description:
      "We design and build your website around the moment a customer decides who to call. Every page, every word and every button has one job: moving a visitor closer to contacting you.",
    icon: "globe",
    outcomes: [
      "Look like the most established business in your area",
      "Calling, WhatsApp and quote requests one tap away on every page",
      "Loads in under two seconds on the phones your customers use",
      "Structured to rank for the searches your customers actually make",
    ],
    featured: true,
  },
  {
    slug: "website-redesign",
    name: "Website Redesign",
    shortDescription:
      "Already have a website that looks tired and never rings? We rebuild it into your best salesman.",
    description:
      "Most business websites were built once and forgotten. We keep what works, cut what doesn't, and rebuild your site so it earns trust in the first five seconds and turns that trust into enquiries.",
    icon: "refresh-ccw",
    outcomes: [
      "A modern site that finally matches the quality of your work",
      "Your Google rankings stay intact. We migrate everything safely",
      "Every visitor steered toward a call or quote request",
      "Measurably more enquiries from the same traffic",
    ],
    featured: true,
  },
  {
    slug: "landing-pages",
    name: "Landing Pages",
    shortDescription:
      "Focused single pages for your ads and campaigns. One page, one message, one action.",
    description:
      "Sending ad traffic to your homepage wastes money. We build focused landing pages with a single goal, so every rand you spend on Google or Facebook ads works harder.",
    icon: "rocket",
    outcomes: [
      "Built to match your ad campaigns for better quality scores",
      "Live in days, not months",
      "Lower cost per lead from the ads you already run",
      "Every element pointed at one action: the enquiry",
    ],
    featured: true,
  },
  {
    slug: "hosting",
    name: "Hosting & Care Plans",
    shortDescription:
      "Fast, secure hosting with updates, backups and support. Your site stays our problem, not yours.",
    description:
      "Your website is a business asset, and assets need maintenance. We keep your site fast, secure, backed up and online. When you need something changed, you send one message.",
    icon: "server",
    outcomes: [
      "Enterprise-grade hosting with 99.9% uptime",
      "Daily backups and proactive security updates",
      "Content changes handled within one business day",
      "One predictable monthly fee",
    ],
    featured: false,
  },
  {
    slug: "maintenance",
    name: "Maintenance & Support",
    shortDescription:
      "Ongoing updates and priority support from the team that built your site.",
    description:
      "Websites that grow businesses are never finished. We keep improving your site as your business evolves. New services, new pages, new offers, without you ever chasing a developer.",
    icon: "life-buoy",
    outcomes: [
      "A site that keeps pace with your business",
      "Priority response when something needs to change",
      "Small continuous improvements that add up",
      "No hourly-rate surprises",
    ],
    featured: false,
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    shortDescription:
      "Get found by customers searching for your services in your area.",
    description:
      "Being invisible on Google is expensive. We handle the technical foundations that help your business show up when nearby customers search for what you do: site structure, speed, schema and local signals.",
    icon: "search",
    outcomes: [
      "Show up for 'near me' searches in your service area",
      "The technical foundations Google rewards",
      "Clear monthly reporting in plain English",
      "Organic enquiries that compound over time",
    ],
    featured: true,
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    shortDescription:
      "Turn your Google listing into a steady source of calls and direction requests.",
    description:
      "For local services, your Google Business Profile is often seen before your website. We optimise it, keep it active and connect it to your site so you win the map results for your area.",
    icon: "map-pin",
    outcomes: [
      "Rank higher in the Google map results",
      "More calls directly from your listing",
      "Professional photos, posts and a review strategy",
      "Reviews responded to properly, every time",
    ],
    featured: false,
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    shortDescription:
      "Reply to enquiries in seconds, even after hours, before your competitor does.",
    description:
      "The first business to respond usually wins the job. We build automated responders that reply to enquiries instantly, qualify leads and book appointments while you're on site working.",
    icon: "bot",
    outcomes: [
      "Instant responses to every enquiry, day and night",
      "Leads qualified before they reach your phone",
      "Appointments booked automatically",
      "Never lose another job to a slow reply",
    ],
    featured: false,
  },
  {
    slug: "branding",
    name: "Branding",
    shortDescription:
      "A logo and identity that makes your business look established and worth premium prices.",
    description:
      "Customers judge your prices by your presentation. We create clean, professional brand identities that make small businesses look like market leaders.",
    icon: "pen-tool",
    outcomes: [
      "A brand that justifies premium pricing",
      "Consistent identity across your site, vehicles and uniforms",
      "Professional files for print and digital",
      "Stand out in a market full of DIY logos",
    ],
    featured: false,
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    shortDescription:
      "Appear at the top of Google today for the exact jobs you want more of.",
    description:
      "SEO compounds, but ads are instant. We run tightly managed Google Ads campaigns pointed at purpose-built landing pages, so you pay for clicks that become customers instead of just traffic.",
    icon: "megaphone",
    outcomes: [
      "Leads within days, not months",
      "Only pay for searches with buying intent",
      "Landing pages built to convert the clicks you pay for",
      "Transparent reporting on cost per enquiry",
    ],
    featured: false,
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string): ServiceOffering | undefined {
  return services.find((s) => s.slug === slug);
}
