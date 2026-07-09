import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";

interface PageSeoInput {
  title: string;
  description: string;
  /** Path starting with "/" e.g. "/services" */
  path: string;
}

/**
 * Build consistent Metadata for a page: canonical URL,
 * OpenGraph and Twitter cards derived from one definition.
 */
export function buildMetadata({ title, description, path }: PageSeoInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
