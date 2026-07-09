import type { IconName, Industry } from "./types";

/* ============================================================
   DYNAMIC INDUSTRIES SYSTEM
   ------------------------------------------------------------
   Add an industry with one `defineIndustry({...})` call.
   Sensible, conversion-focused copy is generated from the trade
   name automatically; override any field for bespoke copy.
   The /industries/[slug] route picks it up with zero code changes.
   ============================================================ */

interface IndustryInput {
  slug: string;
  name: string;
  singular: string;
  icon: IconName;
  featured?: boolean;
  /** What customers search for, e.g. "electrician near me" */
  searchTerm?: string;
  /** The urgent job customers need, e.g. "a tripping breaker at 9pm" */
  urgentJob?: string;
  /** Override any generated field for fully bespoke copy */
  overrides?: Partial<Omit<Industry, "slug" | "name" | "singular" | "icon" | "featured">>;
}

function defineIndustry(input: IndustryInput): Industry {
  const { slug, name, singular, icon, featured = false, overrides = {} } = input;
  const searchTerm = input.searchTerm ?? `${singular} near me`;
  const urgentJob = input.urgentJob ?? "an urgent job";

  const lower = name.toLowerCase();

  return {
    slug,
    name,
    singular,
    icon,
    featured,
    hero: overrides.hero ?? {
      headline: `Websites for ${name} that make the phone ring`,
      subheadline: `Your customers are searching "${searchTerm}" right now. We build websites that put your business in front of them — and turn that visit into a call, a WhatsApp or a quote request.`,
    },
    problems: overrides.problems ?? [
      `Customers search "${searchTerm}" and find your competitors first`,
      "Your current website looks dated and undersells the quality of your work",
      "Visitors land on your site but leave without contacting you",
      "You rely on word of mouth, which you can't scale or predict",
      "Enquiries go unanswered while you're on site, and the job goes elsewhere",
    ],
    solutions: overrides.solutions ?? [
      {
        title: "A website that earns trust in seconds",
        description: `Someone with ${urgentJob} decides in moments whether to trust you. We design your site to look established, professional and worth calling — before they've read a single word.`,
      },
      {
        title: "Built to convert, not just impress",
        description:
          "Click-to-call, WhatsApp and quote request buttons exactly where visitors expect them. Social proof, service areas and guarantees placed to remove doubt at every step.",
      },
      {
        title: "Found by local customers",
        description: `We structure your site around the areas you serve and the services you offer, so Google shows you to people searching for ${lower} nearby.`,
      },
      {
        title: "Fast on the phones your customers use",
        description:
          "Most of your visitors are on mobile, often mid-emergency. Your site loads in under two seconds and works flawlessly on every screen.",
      },
    ],
    benefits: overrides.benefits ?? [
      "More calls from customers ready to book",
      "More WhatsApp enquiries — the channel South Africans prefer",
      "More quote requests with job details already filled in",
      "Show up in Google when nearby customers search",
      "A brand that justifies premium rates",
      "Look bigger than competitors twice your size",
    ],
    services: overrides.services ?? [
      "website-design",
      "technical-seo",
      "google-business-profile",
      "google-ads",
    ],
    faqs: overrides.faqs ?? [
      {
        question: `How much does a website for ${lower} cost?`,
        answer:
          "Our packages start at Starter level for a focused, professional site and scale up depending on pages, features and how aggressively you want to grow. You'll get a fixed quote upfront — no hourly billing, no surprises.",
      },
      {
        question: "How long until my website is live?",
        answer:
          "Most projects launch within 2–4 weeks. We handle everything — copy, images, structure — so it doesn't depend on you finding time you don't have.",
      },
      {
        question: "Will I actually get more enquiries?",
        answer: `That's the entire point. We don't measure success by how the site looks — we measure it by calls, WhatsApp messages and quote requests. Every design decision is made to turn a visitor into an enquiry for your ${lower.replace(/s$/, "")} business.`,
      },
      {
        question: "Do you understand my industry?",
        answer: `We specialise in service businesses. We know how customers choose a ${singular}, what makes them hesitate, and what convinces them to reach out — and we build your site around exactly that.`,
      },
    ],
    seo: overrides.seo ?? {
      title: `Website Design for ${name}`,
      description: `Premium websites for ${lower} that generate more calls, WhatsApp enquiries and quote requests. Look established, get found on Google, win more work.`,
    },
  };
}

/* ------------------------------------------------------------
   THE INDUSTRY LIST — add, remove or reorder freely.
   ------------------------------------------------------------ */
export const industries: Industry[] = [
  defineIndustry({
    slug: "electricians",
    name: "Electricians",
    singular: "electrician",
    icon: "zap",
    featured: true,
    searchTerm: "electrician near me",
    urgentJob: "a tripping breaker at 9pm",
  }),
  defineIndustry({
    slug: "plumbers",
    name: "Plumbers",
    singular: "plumber",
    icon: "wrench",
    featured: true,
    searchTerm: "emergency plumber",
    urgentJob: "a burst geyser flooding the ceiling",
  }),
  defineIndustry({
    slug: "solar-installers",
    name: "Solar Installers",
    singular: "solar installer",
    icon: "sun",
    featured: true,
    searchTerm: "solar installation quotes",
    urgentJob: "load shedding hitting their business",
    overrides: {
      hero: {
        headline: "Websites for Solar Installers that turn interest into installations",
        subheadline:
          "Solar is a big-ticket, high-research purchase. We build websites that educate, build trust and capture quote requests from homeowners who are ready to invest.",
      },
    },
  }),
  defineIndustry({
    slug: "roofers",
    name: "Roofers",
    singular: "roofer",
    icon: "home",
    featured: true,
    searchTerm: "roof repairs near me",
    urgentJob: "a leaking roof before the weekend storm",
  }),
  defineIndustry({
    slug: "hvac",
    name: "HVAC Companies",
    singular: "HVAC technician",
    icon: "wind",
    featured: false,
    searchTerm: "aircon installation near me",
    urgentJob: "an aircon that died in a heatwave",
  }),
  defineIndustry({
    slug: "security-companies",
    name: "Security Companies",
    singular: "security provider",
    icon: "shield",
    featured: false,
    searchTerm: "security company near me",
    urgentJob: "a break-in on their street last night",
  }),
  defineIndustry({
    slug: "builders",
    name: "Builders",
    singular: "builder",
    icon: "hammer",
    featured: true,
    searchTerm: "building contractors near me",
    urgentJob: "a renovation they've postponed for years",
  }),
  defineIndustry({
    slug: "landscapers",
    name: "Landscapers",
    singular: "landscaper",
    icon: "trees",
    featured: false,
    searchTerm: "landscaping services near me",
  }),
  defineIndustry({
    slug: "cleaning-companies",
    name: "Cleaning Companies",
    singular: "cleaning company",
    icon: "sparkles",
    featured: false,
    searchTerm: "cleaning services near me",
  }),
  defineIndustry({
    slug: "painters",
    name: "Painters",
    singular: "painter",
    icon: "paintbrush",
    featured: false,
    searchTerm: "painters near me",
  }),
  defineIndustry({
    slug: "law-firms",
    name: "Law Firms",
    singular: "attorney",
    icon: "scale",
    featured: true,
    searchTerm: "attorney near me",
    urgentJob: "a legal matter they can't afford to get wrong",
    overrides: {
      benefits: [
        "More consultation bookings from qualified clients",
        "A digital presence that matches your professional standing",
        "Rank for the practice areas you want to grow",
        "Clear positioning that attracts the right matters",
        "Confidential, professional enquiry handling",
        "Authority content that wins trust before the first call",
      ],
    },
  }),
  defineIndustry({
    slug: "medical-clinics",
    name: "Medical Clinics",
    singular: "clinic",
    icon: "stethoscope",
    featured: false,
    searchTerm: "doctor near me",
    urgentJob: "a health concern they want seen to today",
  }),
  defineIndustry({
    slug: "dentists",
    name: "Dentists",
    singular: "dentist",
    icon: "smile",
    featured: false,
    searchTerm: "dentist near me",
    urgentJob: "a toothache that can't wait",
  }),
  defineIndustry({
    slug: "accountants",
    name: "Accountants",
    singular: "accountant",
    icon: "calculator",
    featured: false,
    searchTerm: "accountant for small business",
  }),
  defineIndustry({
    slug: "financial-advisors",
    name: "Financial Advisors",
    singular: "financial advisor",
    icon: "trending-up",
    featured: false,
    searchTerm: "financial advisor near me",
  }),
  defineIndustry({
    slug: "contractors",
    name: "Contractors",
    singular: "contractor",
    icon: "hard-hat",
    featured: false,
    searchTerm: "contractors near me",
  }),
];

export const featuredIndustries = industries.filter((i) => i.featured);

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
