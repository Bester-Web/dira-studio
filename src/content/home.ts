import type { IconName } from "./types";

/**
 * Homepage narrative content: hero, problem, system, difference.
 * Structure inspired by problem-first sales pages. Edit freely.
 */

export const hero = {
  eyebrow: "Websites for service businesses",
  headline: "Your website should be winning you work.",
  headlineAccent: "Right now it's losing it.",
  subheadline:
    "Every day, people in your area search for exactly what you do. The business they call is the one that shows up looking professional and makes contact easy. We make sure that business is yours.",
  primaryCta: "Get a quote",
};

/** The problem section. Name the pain before selling the fix. */
export const problem = {
  eyebrow: "The real problem",
  heading: "You don't have a marketing problem. You have a website problem.",
  subheading:
    "Most service businesses think they need more traffic. Usually the visitors are already there. The website just isn't turning them into customers.",
  pains: [
    {
      icon: "search" as IconName,
      title: "They can't find you",
      description:
        "Someone searches for your trade in your area. Your competitors show up. You don't. That job was yours and you never knew it existed.",
    },
    {
      icon: "clock" as IconName,
      title: "They find you, then leave",
      description:
        "Your site takes ages to load and looks like it was built years ago. Visitors judge your workmanship by your website. Fair or not, they leave.",
    },
    {
      icon: "phone" as IconName,
      title: "They want to call, but it's hard work",
      description:
        "No click-to-call button. No WhatsApp. A contact form nobody answers. Every extra step loses another customer to whoever made it easier.",
    },
  ],
};

/** The 3-step system. Done in the right order. */
export const system = {
  eyebrow: "How we fix it",
  heading: "The simple system that grows service businesses",
  subheading:
    "Three steps, done in the right order. Buying ads before your website converts is pouring water into a leaky bucket.",
  steps: [
    {
      number: "1",
      icon: "target" as IconName,
      title: "Convert",
      description:
        "First we build you a website that turns visitors into enquiries. Fast on mobile, credible in seconds, with calling and WhatsApp one tap away. This is the foundation everything else stands on.",
    },
    {
      number: "2",
      icon: "search" as IconName,
      title: "Get found",
      description:
        "Then we put you in front of people already searching. Local SEO, suburb pages and a properly managed Google Business Profile so your name comes up when it matters.",
    },
    {
      number: "3",
      icon: "trending-up" as IconName,
      title: "Multiply",
      description:
        "Then we help you win more from every enquiry. Fast responses, review collection and follow-ups that turn one job into repeat work and referrals.",
    },
  ],
  footnote: "In that order. Skipping step one is why most ad budgets get wasted.",
};

/** The difference section: us vs the usual experience. */
export const difference = {
  eyebrow: "The difference",
  heading: "What you've had before. What you get with us.",
  rows: [
    {
      others: "A template with your logo dropped on it",
      us: "A site built around how your customers choose",
    },
    {
      others: "Looks fine on the designer's screen, broken on phones",
      us: "Built mobile-first, loads in under 2 seconds",
    },
    {
      others: "Launched, invoiced, never heard from again",
      us: "We stay on and keep improving what's working",
    },
    {
      others: "Reports about visits and impressions",
      us: "Measured in calls, WhatsApps and quote requests",
    },
    {
      others: "Vague costs that grow as the project drags",
      us: "One fixed quote agreed before we start",
    },
  ],
};

/** Laptop showcase copy. */
export const showcase = {
  eyebrow: "See it in action",
  heading: "This is what a website that sells looks like",
  subheading:
    "Clear message. Instant trust. One obvious next step. Scroll and watch how a proper trade website comes together.",
};
