import type { IconName } from "./types";

/* ============================================================
   HOMEPAGE CONTENT
   The journey: hero → showcase → pain → services → industries
   → results → testimonials → founder → process → faq → book.
   ============================================================ */

/** Hero copy. This wording is final. Do not rewrite. */
export const hero = {
  eyebrow: "Premium websites. More leads. Real growth.",
  headline: "YOUR NEXT CUSTOMER IS SEARCHING RIGHT NOW.",
  headlineAccent: "But don't worry... your favourite competitor already has them covered",
  subheadline:
    "They're answering the phone, sending the quote, and booking the job, all because they showed up on Google before you did. We help South African electrical, plumbing, and solar companies get found first with premium website design, SEO, lead generation, and secure web hosting.",
  cta: "Book Your Free Strategy Call",
  rating: {
    score: "4.9/5",
    label: "Trusted by South African business owners",
    count: "120+ happy clients",
    avatars: [
      "/images/avatars/men-32.jpg",
      "/images/avatars/women-44.jpg",
      "/images/avatars/men-54.jpg",
      "/images/avatars/women-68.jpg",
      "/images/avatars/men-22.jpg",
    ],
  },
};

/** The three website concepts shown inside the MacBook. */
export interface ShowcaseSite {
  id: "electrical" | "plumbing" | "solar";
  label: string;
  icon: IconName;
  brand: string;
  brandAccent: string;
  headline: string;
  tagline: string;
  sub: string;
  cta: string;
  features: string[];
  /** Bullet list shown beside the showcase */
  checklist: string[];
  industrySlug: string;
  palette: {
    /** Screen background gradient stops */
    bgFrom: string;
    bgTo: string;
    accent: string;
    accentText: string;
  };
}

export const showcaseSites: ShowcaseSite[] = [
  {
    id: "electrical",
    label: "Electrical",
    icon: "zap",
    brand: "VOLTIX",
    brandAccent: "ELECTRICAL",
    headline: "Powering Homes. Connecting Futures.",
    tagline: "Reliable. Safe. Professional.",
    sub: "Expert electrical solutions for homes and businesses. Quality you can see, service you can trust.",
    cta: "Request a Quote",
    features: ["24/7 Emergency Support", "Certified Professionals", "100% Safe & Compliant"],
    checklist: [
      "Residential & commercial installations",
      "Fault finding & repairs",
      "DB upgrades & maintenance",
      "Solar & backup power",
    ],
    industrySlug: "electricians",
    palette: {
      bgFrom: "#101318",
      bgTo: "#1c2027",
      accent: "#f0b429",
      accentText: "#181104",
    },
  },
  {
    id: "plumbing",
    label: "Plumbing",
    icon: "wrench",
    brand: "FLOWRIGHT",
    brandAccent: "PLUMBING",
    headline: "Fixed Right. First Time.",
    tagline: "Fast. Clean. Guaranteed.",
    sub: "From burst geysers to full installations. Certified plumbers who arrive on time and leave your home spotless.",
    cta: "Get Help Now",
    features: ["Same-Day Call Outs", "Upfront Pricing", "Workmanship Guarantee"],
    checklist: [
      "Emergency call outs, day and night",
      "Geyser installations & repairs",
      "Leak detection & drain cleaning",
      "Bathroom & kitchen plumbing",
    ],
    industrySlug: "plumbers",
    palette: {
      bgFrom: "#0c1a26",
      bgTo: "#143246",
      accent: "#38bdf8",
      accentText: "#04121c",
    },
  },
  {
    id: "solar",
    label: "Solar",
    icon: "sun",
    brand: "SUNMASTER",
    brandAccent: "SOLAR",
    headline: "Own Your Power.",
    tagline: "Beat load shedding for good.",
    sub: "Premium solar and backup systems designed around your home, your usage and your budget.",
    cta: "Get My Solar Quote",
    features: ["Free Site Assessment", "Tier-1 Panels", "Financing Available"],
    checklist: [
      "Hybrid & backup systems",
      "Load shedding protection",
      "Payback calculated upfront",
      "Certificate of Compliance included",
    ],
    industrySlug: "solar-installers",
    palette: {
      bgFrom: "#1a1206",
      bgTo: "#2d1f0a",
      accent: "#f59e0b",
      accentText: "#1c1204",
    },
  },
];

export const showcase = {
  eyebrow: "Our work",
  heading: "Websites your competitors will wish they had",
  subheading:
    "Browse three of our industry concepts. Swipe, drag or use the arrows. Every one is built to do one thing: make the phone ring.",
};

/** Pain points. Name the cost of being invisible. */
export const pains = {
  eyebrow: "The cost of being invisible",
  heading: "Every day you're not found online, you're losing business.",
  subheading:
    "Your next customer is searching right now. If they can't find you, they'll find your competitor.",
  items: [
    {
      icon: "phone" as IconName,
      title: "Missed Calls",
      description: "Potential customers call your competitor because they couldn't find you.",
    },
    {
      icon: "clock" as IconName,
      title: "Empty Calendar",
      description: "Your schedule isn't full because your online presence isn't working.",
    },
    {
      icon: "trending-up" as IconName,
      title: "Losing Revenue",
      description: "Every missed job is money out of your pocket.",
    },
    {
      icon: "users" as IconName,
      title: "Competitors Win",
      description: "They show up on Google. They get the leads. They grow while you stay stuck.",
    },
  ],
};

/** Services intro (cards come from services.ts). */
export const servicesIntro = {
  eyebrow: "What we do",
  heading: "Everything you need to get found, get leads and grow.",
  subheading:
    "Four services. One goal. A steady stream of customers finding your business instead of your competitor's.",
};

/** Results / case study cards. */
export const results = {
  eyebrow: "Real results for real businesses",
  heading: "We don't make promises. We deliver results.",
  subheading: "See how we've helped businesses just like yours grow.",
  cases: [
    {
      slug: "powergrid-electrical",
      icon: "zap" as IconName,
      company: "PowerGrid Electrical",
      industry: "Electrical Contractor",
      stats: [
        { value: "+215%", label: "More Organic Traffic" },
        { value: "+178", label: "Leads in 90 Days" },
      ],
      quote:
        "Our phones haven't stopped ringing since Dira Studio built our website and sorted our SEO.",
    },
    {
      slug: "flowright-plumbing",
      icon: "wrench" as IconName,
      company: "FlowRight Plumbing",
      industry: "Plumbing Company",
      stats: [
        { value: "+312%", label: "More Website Visitors" },
        { value: "+143", label: "Booked Jobs" },
      ],
      quote: "Best investment we've made. The leads are consistent and the quality is unreal.",
    },
    {
      slug: "sunmaster-solar",
      icon: "sun" as IconName,
      company: "SunMaster Solar",
      industry: "Solar Installer",
      stats: [
        { value: "+260%", label: "More Quote Requests" },
        { value: "+89", label: "New Customers" },
      ],
      quote: "Dira Studio helped us become the #1 solar company in our area. Highly recommend.",
    },
  ],
};

/** Founder section. */
export const founder = {
  eyebrow: "Founder",
  name: "Bester",
  fullName: "Bester Devenier",
  heading: "Hi, I'm Bester",
  photo: "/images/founder.jpg",
  story:
    "I started Dira Studio because I saw too many great trades businesses losing work simply because they couldn't be found online. My mission is simple. Build premium websites that generate leads, bring in more customers and help South African businesses grow.",
  closing: "When we win, you win.",
  role: "Founder, Dira Studio",
  principles: [
    {
      icon: "target" as IconName,
      title: "Results Focused",
      description: "We care about your leads and revenue, not vanity metrics.",
    },
    {
      icon: "handshake" as IconName,
      title: "Honest & Transparent",
      description: "Clear communication and zero hidden surprises.",
    },
    {
      icon: "users" as IconName,
      title: "Long Term Partner",
      description: "We're in this for the long run and grow with you.",
    },
  ],
};

/** Process timeline. */
export const process = {
  eyebrow: "Our proven process",
  heading: "A simple process that delivers real results.",
  steps: [
    {
      number: "01",
      title: "Discover",
      description: "We learn about your business, your goals and your ideal customers.",
    },
    {
      number: "02",
      title: "Strategise",
      description: "We create a custom strategy to get you found and bring in more leads.",
    },
    {
      number: "03",
      title: "Build",
      description: "We design and build your premium website and set up everything.",
    },
    {
      number: "04",
      title: "Grow",
      description: "We drive traffic, generate leads and help your business grow consistently.",
    },
  ],
};

/** Final call to action. */
export const finalCta = {
  heading: "Ready to get found, get more leads and grow your business?",
  subheading: "Book your free strategy call and let's map out your growth plan.",
  cta: "Book Your Free Strategy Call",
  chips: ["No obligation", "Takes 20 minutes", "Honest advice either way"],
};
