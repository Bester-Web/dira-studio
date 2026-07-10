import type { SocialLink } from "./types";

/**
 * Social profiles. Leave href empty to hide a platform.
 */
export const socials: SocialLink[] = [
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/dirastudio.co.za/",
  },
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61591723865712",
  },
];

/** Only socials with a URL set are rendered. */
export const activeSocials = socials.filter((s) => s.href.length > 0);
