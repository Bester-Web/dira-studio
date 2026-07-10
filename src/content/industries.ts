import type { Industry } from "./types";

/* ============================================================
   THE THREE INDUSTRIES WE SERVE
   Electrical. Plumbing. Solar. Nothing else.
   Each entry drives /industries/[slug] and the homepage
   horizontal storytelling section.
   ============================================================ */

export const industries: Industry[] = [
  {
    slug: "electricians",
    name: "Electrical Contractors",
    singular: "electrician",
    icon: "zap",
    featured: true,
    hero: {
      headline: "Websites for electrical contractors that make the phone ring",
      subheadline:
        "Someone's power just tripped and they're searching \"electrician near me\" right now. The contractor they call is the one who shows up first and looks like a professional. We make sure that's you.",
    },
    problems: [
      "Customers search \"electrician near me\" and find your competitors first",
      "Your website looks outdated next to the quality of your actual work",
      "Emergency callers can't find your number fast enough and dial the next result",
      "Word of mouth keeps you busy some months and quiet others",
      "Bigger companies win the compliance and contract work because they look bigger online",
    ],
    solutions: [
      {
        title: "Built for the emergency search",
        description:
          "A tripped DB board at 9pm is a customer who decides in seconds. Your number, WhatsApp and call-out promise sit right at the top of every page.",
      },
      {
        title: "Credentials where they count",
        description:
          "Registration, compliance certificates, guarantees and real project photos placed exactly where nervous customers look for reasons to trust you.",
      },
      {
        title: "Suburb by suburb visibility",
        description:
          "Service pages for every area you cover, so Google shows you to the customers you actually want, in the areas you actually work.",
      },
      {
        title: "Quote requests with the details filled in",
        description:
          "Forms that ask the right questions upfront, so you quote faster and stop driving out for jobs that were never serious.",
      },
    ],
    benefits: [
      "More emergency call-outs from your area",
      "More installation and COC work booked in advance",
      "A brand that justifies professional rates",
      "Show up in the Google map results for your suburbs",
      "Look established next to any competitor",
      "Leads tracked so you know what your marketing earns",
    ],
    services: ["website-design", "technical-seo", "lead-generation", "hosting"],
    faqs: [
      {
        question: "How much does a website for an electrical business cost?",
        answer:
          "Every project gets a fixed quote before we start, based on what your business needs. No hourly billing and no surprises. Book a strategy call and you'll have a clear number the same week.",
      },
      {
        question: "Can you help me rank for emergency searches?",
        answer:
          "Yes. Emergency searches are won with local SEO, fast pages and a properly managed Google Business Profile. That combination is exactly what we build for electrical contractors.",
      },
      {
        question: "How long until my website is live?",
        answer:
          "Most electrical contractor sites launch within 2 to 4 weeks. We write the copy and source the imagery ourselves, so progress never waits on you.",
      },
      {
        question: "Will I actually get more work from this?",
        answer:
          "That's the only measure we care about. We track calls, WhatsApp messages and quote requests, so you'll see exactly what the website produces.",
      },
    ],
    seo: {
      title: "Electrical Website Design South Africa",
      description:
        "Premium website design, SEO and lead generation for South African electrical contractors. Get found first, win more call-outs and grow your business.",
    },
  },
  {
    slug: "plumbers",
    name: "Plumbing Companies",
    singular: "plumber",
    icon: "wrench",
    featured: true,
    hero: {
      headline: "Websites for plumbing companies that turn emergencies into bookings",
      subheadline:
        "A burst geyser doesn't wait for business hours. When someone's standing in rising water searching \"emergency plumber\", we make sure your number is the one they tap.",
    },
    problems: [
      "Emergency searchers find your competitors before they find you",
      "Your current site is slow, and someone with a flooding kitchen won't wait for it",
      "Callers can't see your call-out area or rates, so they phone around",
      "You spend on ads but can't tell which jobs they actually brought in",
      "Insurance and body corporate work goes to companies that look more established",
    ],
    solutions: [
      {
        title: "The three second rule",
        description:
          "Your site loads instantly and shows one thing first: a call button. Everything about the design assumes your customer is in a hurry.",
      },
      {
        title: "Trust before the callout",
        description:
          "Upfront call-out info, guarantees, real reviews and photos of clean workmanship. Customers book with confidence instead of phoning four plumbers.",
      },
      {
        title: "Own your service areas",
        description:
          "Suburb-level pages and a managed Google Business Profile put you in the map results where emergency decisions are made.",
      },
      {
        title: "Every lead accounted for",
        description:
          "Call tracking and enquiry reporting show exactly which jobs your website produced. No more guessing whether marketing works.",
      },
    ],
    benefits: [
      "More emergency calls at better rates",
      "More geyser and installation work booked ahead",
      "Fewer time-wasters, better qualified enquiries",
      "Win the map results in your service areas",
      "A brand insurers and body corporates take seriously",
      "Marketing you can measure in booked jobs",
    ],
    services: ["website-design", "technical-seo", "lead-generation", "hosting"],
    faqs: [
      {
        question: "How much does a plumbing website cost?",
        answer:
          "You get a fixed quote before we start, sized to your business. Book a strategy call, tell us about your company, and you'll have a clear number within days.",
      },
      {
        question: "Can customers book jobs through the website?",
        answer:
          "Yes. Calls and WhatsApp are always one tap away, and quote forms collect the job details upfront so you can respond fast with an accurate price.",
      },
      {
        question: "We're a small operation. Is this worth it for us?",
        answer:
          "Small teams benefit most. A professional website makes a two-van operation look like the biggest plumber in the area, and emergency work pays well when you're the first call.",
      },
      {
        question: "How quickly can we launch?",
        answer:
          "Most plumbing sites go live within 2 to 4 weeks. We handle the words and images, you approve, we launch.",
      },
    ],
    seo: {
      title: "Plumbing Website Design South Africa",
      description:
        "Premium website design, SEO and lead generation for South African plumbing companies. Win the emergency search and book more jobs.",
    },
  },
  {
    slug: "solar-installers",
    name: "Solar Installers",
    singular: "solar installer",
    icon: "sun",
    featured: true,
    hero: {
      headline: "Websites for solar installers that turn research into signed quotes",
      subheadline:
        "Solar customers research for months before they spend. We build websites that answer their questions, earn their trust early, and capture the quote request before your competitors even know they exist.",
    },
    problems: [
      "Homeowners research on your competitors' websites and buy from them too",
      "Your site can't answer the questions every solar buyer asks",
      "Quote requests arrive with no detail, so every quote starts with a long phone call",
      "Load shedding surges bring traffic your website fails to capture",
      "Big national installers outrank you in your own area",
    ],
    solutions: [
      {
        title: "Be part of the research",
        description:
          "Pages that answer the real questions: costs, payback, load shedding cover, financing. Customers who learn from you tend to buy from you.",
      },
      {
        title: "Quotes that feel like calculations",
        description:
          "A quote form built around usage and goals, so requests arrive qualified and your proposals land with customers who already trust your numbers.",
      },
      {
        title: "Local authority, built deliberately",
        description:
          "Installation galleries, certifications and area pages that make you the obvious local choice over faceless national brands.",
      },
      {
        title: "Capture the surge",
        description:
          "When load shedding hits, searches spike. Fast pages and strong rankings mean those spikes turn into your pipeline, not your competitor's.",
      },
    ],
    benefits: [
      "More qualified quote requests every month",
      "Customers arrive pre-sold on your expertise",
      "Bigger average systems from better educated buyers",
      "Outrank national players in your service areas",
      "A premium brand for a premium purchase",
      "Pipeline you can see and measure",
    ],
    services: ["website-design", "technical-seo", "lead-generation", "hosting"],
    faqs: [
      {
        question: "How much does a solar company website cost?",
        answer:
          "Fixed quote, agreed before we start, sized to your goals. Book a strategy call and we'll give you a straight number once we understand your business.",
      },
      {
        question: "Solar is competitive. Can we actually rank?",
        answer:
          "Locally, yes. National players are weak at suburb-level relevance. We win rankings where your installs actually happen, which is where the buying decisions are made.",
      },
      {
        question: "Can the website qualify leads before they reach us?",
        answer:
          "Yes. Our solar quote forms collect property type, usage and budget expectations upfront, so your team spends time on serious buyers.",
      },
      {
        question: "How long does it take?",
        answer:
          "Solar sites are content-rich, so plan for 3 to 4 weeks. Every week is spent building the asset that will feed your pipeline for years.",
      },
    ],
    seo: {
      title: "Solar Website Design South Africa",
      description:
        "Premium website design, SEO and lead generation for South African solar installers. Turn months of customer research into signed quotes.",
    },
  },
];

export const featuredIndustries = industries;

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
