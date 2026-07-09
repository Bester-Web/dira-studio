import { company, whatsappLink } from "@/content/company";
import { siteConfig } from "@/content/site.config";
import { activeSocials } from "@/content/socials";
import type { FaqItem, IndustryFaq } from "@/content/types";

/**
 * JSON-LD structured data builders.
 * Rendered via <script type="application/ld+json"> in layouts/pages.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: company.description,
    email: company.contact.email,
    telephone: company.contact.phone,
    foundingDate: String(company.foundedYear),
    sameAs: activeSocials.map((s) => s.href),
    address: {
      "@type": "PostalAddress",
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      addressCountry: company.address.country,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    image: `${siteConfig.url}/images/og.png`,
    url: siteConfig.url,
    telephone: company.contact.phone,
    email: company.contact.email,
    priceRange: "R12,500 - R45,000+",
    description: company.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      addressCountry: company.address.country,
    },
    areaServed: { "@type": "Country", name: "South Africa" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: company.contact.phone,
      email: company.contact.email,
      url: whatsappLink,
    },
  };
}

export function faqSchema(items: (FaqItem | IndustryFaq)[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/** Serialize schema safely for a <script> tag. */
export function jsonLd(schema: object): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
