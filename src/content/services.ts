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
      "A premium website engineered to turn visitors into enquiries — designed around your customers, not a template.",
    description:
      "We design and build your website from a blank canvas around one question: what makes your ideal customer pick up the phone? Every page, every word and every button exists to move a visitor closer to contacting you.",
    icon: "globe",
    outcomes: [
      "A website that looks like the biggest company in your area",
      "Clear paths to call, WhatsApp or request a quote on every page",
      "Loads in under two seconds on mobile, where your customers are",
      "Built to rank for the searches your customers actually make",
    ],
    featured: true,
  },
  {
    slug: "website-redesign",
    name: "Website Redesign",
    shortDescription:
      "Already have a website that looks dated or never rings? We rebuild it into your best salesperson.",
    description:
      "Most business websites were built once and forgotten. We take what's working, cut what isn't, and rebuild your site so it earns trust in the first five seconds and turns that trust into enquiries.",
    icon: "refresh-ccw",
    outcomes: [
      "A modern site that finally matches the quality of your work",
      "Keep your Google rankings — we migrate everything safely",
      "Every visitor funnelled toward a call or quote request",
      "Measurably more enquiries from the same traffic",
    ],
    featured: true,
  },
  {
    slug: "landing-pages",
    name: "Landing Pages",
    shortDescription:
      "High-converting single pages for your ads, promotions and seasonal campaigns.",
    description:
      "Sending ad traffic to your homepage wastes money. We build focused landing pages with one goal — an enquiry — so every rand you spend on Google or Facebook ads works harder.",
    icon: "rocket",
    outcomes: [
      "One page, one message, one action",
      "Built to match your ad campaigns for higher quality scores",
      "Fast to launch — days, not months",
      "Lower cost per lead from the ads you already run",
    ],
    featured: true,
  },
  {
    slug: "hosting",
    name: "Hosting & Care Plans",
    shortDescription:
      "Fast, secure hosting with updates, backups and support — so your site never becomes your problem.",
    description:
      "Your website is a business asset, and assets need maintenance. We keep your site fast, secure, backed up and online, and we're one message away when you need something changed.",
    icon: "server",
    outcomes: [
      "Enterprise-grade hosting with 99.9% uptime",
      "Daily backups and proactive security updates",
      "Content changes handled for you within one business day",
      "One predictable monthly fee, no surprises",
    ],
    featured: false,
  },
  {
    slug: "maintenance",
    name: "Maintenance & Support",
    shortDescription:
      "Ongoing updates, improvements and priority support from the team that built your site.",
    description:
      "Websites that grow businesses are never 'done'. We keep improving your site as your business evolves — new services, new pages, new offers — without you ever chasing a developer.",
    icon: "life-buoy",
    outcomes: [
      "A site that keeps pace with your business",
      "Priority response when something needs to change",
      "Continuous small improvements that add up",
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
      "Being invisible on Google is expensive. We handle the technical foundations — site structure, speed, schema, local signals — that help your business show up when nearby customers search for what you do.",
    icon: "search",
    outcomes: [
      "Show up for 'near me' searches in your service area",
      "Technical foundations Google rewards: speed, structure, schema",
      "Clear monthly reporting in plain English",
      "Compounding organic enquiries over time",
    ],
    featured: true,
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    shortDescription:
      "Turn your Google listing into a steady source of calls and direction requests.",
    description:
      "For local services, your Google Business Profile is often seen before your website. We optimise it, keep it active and connect it to your site so you win the map pack for your area.",
    icon: "map-pin",
    outcomes: [
      "Rank higher in the Google map results",
      "More calls directly from your listing",
      "Professional photos, posts and review strategy",
      "Reviews handled and responded to properly",
    ],
    featured: false,
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    shortDescription:
      "Reply to enquiries instantly, even after hours — before your competitor does.",
    description:
      "The first business to respond usually wins the job. We build AI-powered responders and automations that reply to enquiries in seconds, qualify leads and book appointments while you're on site working.",
    icon: "bot",
    outcomes: [
      "Instant responses to every enquiry, 24/7",
      "Leads qualified before they reach your phone",
      "Appointments booked automatically",
      "Never lose a job to a slow reply again",
    ],
    featured: false,
  },
  {
    slug: "branding",
    name: "Branding",
    shortDescription:
      "A logo and identity that makes your business look established, trusted and worth premium prices.",
    description:
      "Customers judge your prices by your presentation. We create clean, professional brand identities — logo, colours, typography — that make small businesses look like market leaders.",
    icon: "pen-tool",
    outcomes: [
      "A brand that justifies premium pricing",
      "Consistent identity across site, vehicles and uniforms",
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
      "SEO compounds, but ads are instant. We run tightly-managed Google Ads campaigns pointed at purpose-built landing pages, so you pay for clicks that become customers — not just traffic.",
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
