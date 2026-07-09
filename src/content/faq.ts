import type { FaqItem } from "./types";

/**
 * Site-wide FAQ. Items marked for the homepage appear there;
 * the full list renders on /faq. FAQ schema is generated from this file.
 */
export const faqs: FaqItem[] = [
  {
    question: "How is Dira Studio different from other web agencies?",
    answer:
      "Most agencies sell you a website and disappear. We sell outcomes: more calls, more WhatsApp enquiries, more quote requests. Every decision, from layout to loading speed, is made to turn visitors into customers for a service business. If a design choice doesn't help you win work, we don't make it.",
    category: "general",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Every project gets a fixed quote before we start, based on what your business actually needs. No hourly billing, no scope creep, no surprises. Tell us about your business and you'll have a number within a day. One new customer typically covers the investment.",
    category: "pricing",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Most sites launch in 2 to 4 weeks. We handle the copy, structure and imagery ourselves, so progress never depends on you finding spare time. You review, we refine, we launch.",
    category: "process",
  },
  {
    question: "Do you write the content, or do I need to?",
    answer:
      "We write it. You know your trade; we know what makes website visitors pick up the phone. We'll ask you a few questions about your business, then handle every word. You approve everything before launch.",
    category: "process",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "Every site we build ships with the technical foundations Google rewards: fast load times, clean structure, local business schema and suburb-level service pages. For competitive markets, our Technical SEO and Google Business Profile services push rankings further.",
    category: "technical",
  },
  {
    question: "What happens after launch? Am I on my own?",
    answer:
      "Never. Our care plans cover hosting, security, backups and content changes, with most updates done within one business day. Your website is a growth asset and we keep it working like one.",
    category: "general",
  },
  {
    question: "I already have a website. Can you fix it instead of rebuilding?",
    answer:
      "We'll tell you honestly. Sometimes a focused redesign of key pages is enough. Often a rebuild costs about the same as patching and performs far better. Either way, we migrate your content and protect your Google rankings in the process.",
    category: "general",
  },
  {
    question: "Do you only work with the industries listed on your site?",
    answer:
      "No, those are examples. If your business serves customers who search online for what you do, our approach works. The fundamentals of trust and conversion apply to every service business.",
    category: "general",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "About an hour of your time for a kickoff conversation, examples of your work if you have them, and your logo if one exists. We take it from there and come back with something to react to.",
    category: "process",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "If you want to, yes. We'll show you how. Most clients prefer sending us a WhatsApp with changes and having them done within a day. Your time is better spent running your business.",
    category: "technical",
  },
  {
    question: "Do you build online stores?",
    answer:
      "Our focus is lead generation for service businesses: websites that produce calls and quote requests. If your project is mainly e-commerce, we'll refer you to a specialist rather than do average work outside our lane.",
    category: "general",
  },
  {
    question: "What if I'm not happy with the design?",
    answer:
      "You see the design direction early and we refine it together, so you're never surprised at the end. Revisions are part of the process, not a paid extra. We're not done until you're proud to send customers to your site.",
    category: "process",
  },
];

/** Subset shown on the homepage. */
export const homeFaqs = faqs.slice(0, 6);
