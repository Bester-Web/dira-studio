import type { NavLink } from "./types";

/** Primary header navigation. */
export const mainNav: NavLink[] = [
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

/** Footer column: company */
export const footerCompanyNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Book a Strategy Call", href: "/contact" },
];

/** Footer column: services */
export const footerServicesNav: NavLink[] = [
  { label: "Premium Website Design", href: "/services#website-design" },
  { label: "SEO", href: "/services#technical-seo" },
  { label: "Lead Generation", href: "/services#lead-generation" },
  { label: "Premium Web Hosting", href: "/services#hosting" },
];

/** Footer column: legal */
export const footerLegalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];
