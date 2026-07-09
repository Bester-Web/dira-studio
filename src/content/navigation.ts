import type { NavLink } from "./types";

/** Primary header navigation. */
export const mainNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Footer column: company */
export const footerCompanyNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/** Footer column: services (top-level page anchors) */
export const footerServicesNav: NavLink[] = [
  { label: "Website Design", href: "/services#website-design" },
  { label: "Website Redesign", href: "/services#website-redesign" },
  { label: "Landing Pages", href: "/services#landing-pages" },
  { label: "Technical SEO", href: "/services#technical-seo" },
  { label: "Hosting & Care", href: "/services#hosting" },
];

/** Footer column: legal */
export const footerLegalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];
