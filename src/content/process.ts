import type { ProcessStep, Stat, ValueProp } from "./types";

/** The Dira Studio process, shown on the About and Services pages. */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "A short conversation about your business: the jobs you want more of, the customers you want to attract, and what's stopping them from choosing you today.",
    icon: "search",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design your website around the moment a customer decides to contact you. You see the direction early and shape it with us. No big reveal, no surprises.",
    icon: "pen-tool",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Your site is built to production standards: fast on mobile, structured for Google, and wired so every call, WhatsApp and quote request reaches you instantly.",
    icon: "hammer",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Launch is the start, not the finish. We measure what's working, keep improving, and make sure your website keeps pace as your business grows.",
    icon: "trending-up",
  },
];

/** Why Choose Dira Studio value propositions. */
export const valueProps: ValueProp[] = [
  {
    title: "Built to generate enquiries",
    description:
      "We measure success in calls, WhatsApps and quote requests, not design awards. Every pixel has a job: moving a visitor closer to contacting you.",
    icon: "target",
  },
  {
    title: "Service businesses are our lane",
    description:
      "We know how customers choose an electrician, a lawyer, a solar installer. That understanding is built into every page we design.",
    icon: "handshake",
  },
  {
    title: "Fast, because speed wins jobs",
    description:
      "Your customers are on mobile, often mid-emergency. Our sites load in under two seconds, before your competitor's has shown its logo.",
    icon: "gauge",
  },
  {
    title: "You stay focused on your work",
    description:
      "We write the copy, source the imagery and handle the technology. Your involvement is one conversation and a few approvals.",
    icon: "clock",
  },
  {
    title: "Premium look, honest quoting",
    description:
      "One fixed quote agreed upfront. A website that makes you look like the market leader shouldn't come with billing surprises.",
    icon: "award",
  },
  {
    title: "A partner, not a supplier",
    description:
      "After launch we stay accountable to one number: how many enquiries your website produces. When you grow, we grow.",
    icon: "users",
  },
];

/** Headline stats used for social proof. Update as real numbers accumulate. */
export const stats: Stat[] = [
  { value: "3.2x", label: "average increase in enquiries" },
  { value: "<2s", label: "mobile load time on every site" },
  { value: "2-4", label: "weeks from kickoff to launch" },
  { value: "100%", label: "fixed quotes, zero surprises" },
];

/**
 * "Trusted by" strip. Text-based logos until real client marks are added.
 */
export const trustedBy = [
  "Volt Electrical",
  "AquaFlow Plumbing",
  "Helios Solar",
  "Sentinel Security",
  "Oakline Builders",
  "ClearView Roofing",
];
