/**
 * Content layer types.
 *
 * Every piece of site content is described here so that editing content
 * never requires touching a React component. Icons are referenced by
 * name (see components/shared/icon.tsx) to keep this layer framework-free.
 */

/** Names of Lucide icons whitelisted for content use. */
export type IconName =
  | "zap"
  | "wrench"
  | "sun"
  | "home"
  | "wind"
  | "shield"
  | "hammer"
  | "trees"
  | "sparkles"
  | "axe"
  | "paintbrush"
  | "warehouse"
  | "waves"
  | "scale"
  | "stethoscope"
  | "smile"
  | "calculator"
  | "trending-up"
  | "hard-hat"
  | "phone"
  | "message-circle"
  | "file-text"
  | "users"
  | "globe"
  | "refresh-ccw"
  | "rocket"
  | "server"
  | "life-buoy"
  | "search"
  | "map-pin"
  | "bot"
  | "pen-tool"
  | "megaphone"
  | "gauge"
  | "target"
  | "handshake"
  | "clock"
  | "award"
  | "layout"
  | "check";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  /** Display value, e.g. "3.2x" or "94%" */
  value: string;
  label: string;
}

export interface ServiceOffering {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: IconName;
  /** Outcome-focused bullet points */
  outcomes: string[];
  featured: boolean;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface Industry {
  slug: string;
  /** Plural trade name, e.g. "Electricians" */
  name: string;
  /** Singular, e.g. "electrician" — used inside copy */
  singular: string;
  icon: IconName;
  featured: boolean;
  hero: {
    headline: string;
    subheadline: string;
  };
  /** Pain points this industry faces online */
  problems: string[];
  /** How Dira Studio solves them */
  solutions: { title: string; description: string }[];
  /** Outcome-led benefits */
  benefits: string[];
  /** Slugs of relevant services */
  services: string[];
  faqs: IndustryFaq[];
  seo: {
    title: string;
    description: string;
  };
}

export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  summary: string;
  services: string[];
  /** Accent hue used for the generated cover art (0-360) */
  accentHue: number;
  caseStudy: {
    goal: string;
    problem: string;
    solution: string;
    results: Stat[];
    narrative: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  /** Formatted price, e.g. "R9,500" */
  price: string;
  priceNote: string;
  features: string[];
  highlighted: boolean;
  cta: {
    label: string;
    href: string;
  };
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  /** Headline result, e.g. "2.4x more calls" */
  result?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "general" | "process" | "pricing" | "technical";
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: IconName;
}

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
}
