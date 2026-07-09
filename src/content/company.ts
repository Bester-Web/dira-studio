/**
 * Company identity and contact details.
 * Update phone/email/address here and it changes everywhere.
 */
export const company = {
  name: "Dira Studio",
  legalName: "Dira Studio (Pty) Ltd",
  tagline: "Websites that win you customers",
  description:
    "Dira Studio builds websites for service businesses that turn visitors into calls, WhatsApp messages and quote requests.",
  foundedYear: 2023,
  country: "South Africa",
  city: "Cape Town",
  address: {
    street: "", // e.g. "12 Loop Street"
    suburb: "",
    city: "Cape Town",
    province: "Western Cape",
    postalCode: "",
    country: "ZA",
  },
  contact: {
    email: "hello@dirastudio.co.za",
    /** Display format */
    phone: "+27 82 000 0000",
    /** tel: link format, digits only with country code */
    phoneHref: "+27820000000",
    /** WhatsApp number, digits only with country code, no plus */
    whatsapp: "27820000000",
    whatsappMessage: "Hi Dira Studio! I'd like to chat about a website for my business.",
  },
  hours: "Mon to Fri, 08:00 to 17:00 SAST",
} as const;

/** Prebuilt WhatsApp deep link with default message. */
export const whatsappLink = `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(
  company.contact.whatsappMessage
)}`;

export const phoneLink = `tel:${company.contact.phoneHref}`;
export const emailLink = `mailto:${company.contact.email}`;
