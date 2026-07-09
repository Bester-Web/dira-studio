import type { PortfolioProject } from "./types";

/**
 * Portfolio projects and case studies.
 *
 * NOTE: These are launch placeholders demonstrating the format.
 * Replace with real client projects as they complete. Cover art is
 * generated from `accentHue` until real screenshots are added.
 */
export const portfolio: PortfolioProject[] = [
  {
    slug: "volt-electrical",
    title: "From invisible to fully booked",
    client: "Volt Electrical",
    industry: "Electricians",
    year: "2025",
    summary:
      "A complete digital rebuild for a two-van electrical business that relied entirely on word of mouth.",
    services: ["Website Design", "Technical SEO", "Google Business Profile"],
    accentHue: 42,
    caseStudy: {
      goal: "Turn an invisible online presence into a steady source of booked jobs, without relying on referrals.",
      problem:
        "Volt Electrical did excellent work but had no website and an unclaimed Google listing. Competitors with weaker workmanship were winning jobs purely because they showed up first when customers searched.",
      solution:
        "We built a fast, trust-first website with emergency call-out messaging, suburb-level service pages and click-to-call on every screen. We claimed and optimised their Google Business Profile and connected review collection to every completed job.",
      results: [
        { value: "3.1x", label: "more calls within 90 days" },
        { value: "#1", label: "map ranking in 4 target suburbs" },
        { value: "68%", label: "of enquiries now arrive via WhatsApp" },
      ],
      narrative:
        "Within the first month, Volt started ranking in the local map results for their core suburbs. By day 90 the owner had hired a third electrician to keep up with booked work. He also stopped discounting to win jobs, because customers arrived already trusting the brand.",
    },
  },
  {
    slug: "aquaflow-plumbing",
    title: "Emergency traffic, converted",
    client: "AquaFlow Plumbing",
    industry: "Plumbers",
    year: "2025",
    summary:
      "A redesign built for the customer with a burst geyser at 9pm and the three seconds they give a website.",
    services: ["Website Redesign", "Landing Pages", "Google Ads"],
    accentHue: 205,
    caseStudy: {
      goal: "Convert expensive emergency-search ad clicks into calls instead of bounces.",
      problem:
        "AquaFlow was spending heavily on Google Ads but sending clicks to a slow, cluttered homepage. Mobile visitors, people standing in rising water, couldn't find the phone number without scrolling.",
      solution:
        "We rebuilt the site with a persistent call bar on mobile, a dedicated emergency landing page matched to their ad campaigns, and upfront pricing guidance that filtered out tyre-kickers before they called.",
      results: [
        { value: "47%", label: "lower cost per lead, same ad budget" },
        { value: "1.4s", label: "mobile load time, down from 8s" },
        { value: "2.2x", label: "more after-hours emergency calls" },
      ],
      narrative:
        "The same ad spend now produces more than double the emergency calls. The persistent call bar alone accounts for a third of all conversions. On mobile, removing one scroll can change a business.",
    },
  },
  {
    slug: "helios-solar",
    title: "Big-ticket trust, built online",
    client: "Helios Solar",
    industry: "Solar Installers",
    year: "2024",
    summary:
      "An education-led website that turns months of solar research into qualified quote requests.",
    services: ["Website Design", "Branding", "Technical SEO"],
    accentHue: 28,
    caseStudy: {
      goal: "Capture homeowners early in their solar research and stay with them until they request a quote.",
      problem:
        "Solar customers research for months before buying. Helios had no way to be part of that journey. Their single-page site answered nothing, so visitors researched on competitors' sites and bought there too.",
      solution:
        "We designed a content-rich site around the questions every solar buyer asks: costs, payback periods, load shedding protection, financing. A savings-focused quote form made the next step feel like a calculation, not a commitment.",
      results: [
        { value: "4.2x", label: "more quote requests per month" },
        { value: "52%", label: "of leads arrive pre-qualified on budget" },
        { value: "Top 3", label: "Google results for 12 buying keywords" },
      ],
      narrative:
        "Helios now enters sales conversations with customers who already trust them, because the website answered their questions for months before they were ready. Average deal size increased because educated customers choose better systems.",
    },
  },
  {
    slug: "sentinel-security",
    title: "Authority in a trust-first industry",
    client: "Sentinel Security",
    industry: "Security Companies",
    year: "2024",
    summary:
      "A brand and website rebuild for a security company competing against national franchises.",
    services: ["Branding", "Website Design", "Google Business Profile"],
    accentHue: 160,
    caseStudy: {
      goal: "Make a local security company feel more trustworthy than the national brands it competes against.",
      problem:
        "Sentinel offered faster response times than the big franchises but looked like a small operation online. In an industry where trust is everything, their dated site was costing them contracts before the first conversation.",
      solution:
        "We rebranded Sentinel with a confident, modern identity and built a website that leads with response-time proof, area-specific crime insight and armed response credentials. Every page ends with a low-friction security assessment request.",
      results: [
        { value: "2.8x", label: "more assessment requests" },
        { value: "41%", label: "increase in residential contracts" },
        { value: "9/10", label: "new clients cite the website as a trust factor" },
      ],
      narrative:
        "Sentinel now wins estate and complex contracts that previously defaulted to national brands. The sales team reports that prospects arrive at meetings already convinced. The website does the first meeting for them.",
    },
  },
];

export function getProject(slug: string): PortfolioProject | undefined {
  return portfolio.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return portfolio.map((p) => p.slug);
}
