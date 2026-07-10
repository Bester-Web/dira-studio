import type { PortfolioProject } from "./types";

/**
 * Case studies.
 * NOTE: Launch placeholders demonstrating the format. Replace
 * with real client projects as they complete.
 */
export const portfolio: PortfolioProject[] = [
  {
    slug: "powergrid-electrical",
    title: "From invisible to fully booked",
    client: "PowerGrid Electrical",
    industry: "Electrical Contractors",
    year: "2025",
    summary:
      "A complete digital rebuild for an electrical contractor that relied entirely on word of mouth.",
    services: ["Premium Website Design", "SEO", "Lead Generation"],
    accentHue: 42,
    caseStudy: {
      goal: "Turn an invisible online presence into a steady source of booked jobs, without relying on referrals.",
      problem:
        "PowerGrid did excellent work but had no real website and an unclaimed Google listing. Competitors with weaker workmanship were winning jobs purely because they showed up first when customers searched.",
      solution:
        "We built a fast, trust-first website with emergency call-out messaging, suburb-level service pages and click-to-call on every screen. We claimed and optimised their Google Business Profile and pointed a lead generation campaign at pages built to convert.",
      results: [
        { value: "+215%", label: "more organic traffic" },
        { value: "+178", label: "leads in 90 days" },
        { value: "#1", label: "map ranking in 4 target suburbs" },
      ],
      narrative:
        "Within the first month, PowerGrid started ranking in the local map results for their core suburbs. By day 90 the owner had hired two more electricians to keep up with booked work. He also stopped discounting to win jobs, because customers arrived already trusting the brand.",
    },
  },
  {
    slug: "flowright-plumbing",
    title: "Emergency traffic, converted",
    client: "FlowRight Plumbing",
    industry: "Plumbing Companies",
    year: "2025",
    summary:
      "A rebuild designed for the customer with a burst geyser at 9pm and the three seconds they give a website.",
    services: ["Premium Website Design", "Lead Generation", "Premium Web Hosting"],
    accentHue: 205,
    caseStudy: {
      goal: "Convert expensive emergency-search traffic into calls instead of bounces.",
      problem:
        "FlowRight was spending on ads but sending clicks to a slow, cluttered homepage. Mobile visitors, people standing in rising water, couldn't find the phone number without scrolling.",
      solution:
        "We rebuilt the site with a persistent call bar on mobile, dedicated emergency landing pages matched to their campaigns, and upfront call-out information that filtered out tyre-kickers before they called.",
      results: [
        { value: "+312%", label: "more website visitors" },
        { value: "+143", label: "booked jobs" },
        { value: "1.4s", label: "mobile load time, down from 8s" },
      ],
      narrative:
        "The same ad spend now produces more than double the emergency calls. The persistent call bar alone accounts for a third of all conversions. On mobile, removing one scroll can change a business.",
    },
  },
  {
    slug: "sunmaster-solar",
    title: "Big-ticket trust, built online",
    client: "SunMaster Solar",
    industry: "Solar Installers",
    year: "2024",
    summary:
      "An education-led website that turns months of solar research into qualified quote requests.",
    services: ["Premium Website Design", "SEO", "Lead Generation"],
    accentHue: 28,
    caseStudy: {
      goal: "Capture homeowners early in their solar research and stay with them until they request a quote.",
      problem:
        "Solar customers research for months before buying. SunMaster had no way to be part of that journey. Their single-page site answered nothing, so visitors researched on competitors' sites and bought there too.",
      solution:
        "We designed a content-rich site around the questions every solar buyer asks: costs, payback periods, load shedding protection, financing. A usage-based quote form made the next step feel like a calculation, not a commitment.",
      results: [
        { value: "+260%", label: "more quote requests" },
        { value: "+89", label: "new customers" },
        { value: "Top 3", label: "Google results for 12 buying keywords" },
      ],
      narrative:
        "SunMaster now enters sales conversations with customers who already trust them, because the website answered their questions for months before they were ready. Average system size increased because educated customers choose better installations.",
    },
  },
];

export function getProject(slug: string): PortfolioProject | undefined {
  return portfolio.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return portfolio.map((p) => p.slug);
}
