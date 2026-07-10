/**
 * Company identity and contact details.
 * Update phone/email/address here and it changes everywhere.
 */
export const company = {
  name: "Dira Studio",
  legalName: "Dira Studio (Pty) Ltd",
  tagline: "Premium websites. More leads. Real growth.",
  description:
    "Dira Studio builds premium websites for South African electrical, plumbing and solar companies. Website design, SEO, lead generation and hosting that turn searches into booked jobs.",
  foundedYear: 2023,
  country: "South Africa",
  city: "Polokwane",
  address: {
    street: "", // e.g. "12 Loop Street"
    suburb: "",
    city: "Polokwane",
    province: "Limpopo",
    postalCode: "",
    country: "ZA",
  },
  contact: {
    email: "hello@dirastudio.co.za",
    /** Display format */
    phone: "065 921 0078",
    /** tel: link format, digits only with country code */
    phoneHref: "+27659210078",
    /** WhatsApp number, digits only with country code, no plus */
    whatsapp: "27687500349",
    whatsappMessage: "Hi Dira Studio!",
    /** Calendly scheduling link for the strategy call */
    calendly: "https://calendly.com/besterdeve/30min",
  },
  hours: "Mon to Fri, 08:00 to 17:00 SAST",
} as const;

/** Prebuilt WhatsApp deep link with default message. */
export const whatsappLink = `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(
  company.contact.whatsappMessage
)}`;

export const phoneLink = `tel:${company.contact.phoneHref}`;
export const emailLink = `mailto:${company.contact.email}`;
