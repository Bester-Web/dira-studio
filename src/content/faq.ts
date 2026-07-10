import type { FaqItem } from "./types";

/**
 * Site-wide FAQ. Items marked for the homepage appear there;
 * the full list renders on /faq. FAQ schema is generated from this file.
 */
export const faqs: FaqItem[] = [
  {
    question: "Why do you only work with electrical, plumbing and solar companies?",
    answer:
      "Because focus wins. We know exactly how customers choose an electrician, a plumber or a solar installer. We know the emergency search, the quote comparison, the trust signals that matter. That depth is why our websites outperform ones built by generalist agencies.",
    category: "general",
  },
  {
    question: "What happens on the strategy call?",
    answer:
      "Twenty minutes, no pressure. You tell us about your business and the work you want more of. We tell you honestly what we'd build, what it would cost, and what results to expect. If we're not the right fit, we'll say so and point you in a better direction.",
    category: "process",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Every project gets a fixed quote before we start, sized to what your business actually needs. No hourly billing, no scope creep, no surprises. One booked job usually covers a meaningful part of the investment.",
    category: "pricing",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Most sites launch in 2 to 4 weeks. We write the copy, structure the pages and source the imagery ourselves, so progress never depends on you finding spare time. You review, we refine, we launch.",
    category: "process",
  },
  {
    question: "Will my website actually show up on Google?",
    answer:
      "Every site ships with the technical foundations Google rewards: fast load times, clean structure, local business schema and suburb-level service pages. Our SEO service then pushes rankings further for competitive areas.",
    category: "technical",
  },
  {
    question: "How does lead generation work?",
    answer:
      "We run targeted campaigns pointed at pages built to convert, then track every call, WhatsApp and quote request back to its source. You see exactly what your marketing produces in booked work, not clicks.",
    category: "general",
  },
  {
    question: "I already have a website. Can you fix it instead of rebuilding?",
    answer:
      "We'll tell you honestly. Sometimes a focused rework of key pages is enough. Often a rebuild costs about the same as patching and performs far better. Either way, we migrate your content and protect your Google rankings.",
    category: "general",
  },
  {
    question: "What happens after launch? Am I on my own?",
    answer:
      "Never. Our hosting and care service keeps your site fast, secure and backed up, with content changes done within one business day. Your website is a growth asset and we keep it working like one.",
    category: "general",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "About an hour for a kickoff conversation, examples of your work if you have them, and your logo if one exists. We take it from there and come back with something to react to.",
    category: "process",
  },
  {
    question: "What if I'm not happy with the design?",
    answer:
      "You see the design direction early and we shape it together, so you're never surprised at the end. Revisions are part of the process, not a paid extra. We're not done until you're proud to send customers to your site.",
    category: "process",
  },
];

/** Subset shown on the homepage. */
export const homeFaqs = faqs.slice(0, 6);
