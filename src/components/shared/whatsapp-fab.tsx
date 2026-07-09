import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/content/company";
import { siteConfig } from "@/content/site.config";

/**
 * Floating WhatsApp action — persistent, low-friction contact path.
 * Controlled by siteConfig.features.whatsappFloatingButton.
 */
export function WhatsappFab() {
  if (!siteConfig.features.whatsappFloatingButton) return null;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-13 items-center justify-center rounded-pill bg-whatsapp text-[#062b16] shadow-[0_8px_32px_rgba(37,211,102,0.35)] transition-transform duration-300 ease-premium hover:scale-110 sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}
