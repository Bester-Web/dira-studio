import type { SocialLink } from "./types";

/**
 * Social profiles. Leave href empty to hide a platform.
 */
export const socials: SocialLink[] = [
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://instagram.com/dirastudio",
  },
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://facebook.com/dirastudio",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/company/dirastudio",
  },
];

/** Only socials with a URL set are rendered. */
export const activeSocials = socials.filter((s) => s.href.length > 0);
