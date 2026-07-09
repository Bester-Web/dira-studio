import { z } from "zod";

/** Shared between the client form and the server action. */
export const contactFormSchema = z.object({
  name: z.string().min(2, "Please tell us your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .regex(/^[+\d][\d\s()-]{7,}$/, "Please enter a valid phone number"),
  business: z.string().min(2, "Please tell us your business name"),
  service: z.string().min(1, "Please choose what you're interested in"),
  message: z
    .string()
    .min(10, "Give us a sentence or two about what you need")
    .max(2000, "Please keep your message under 2000 characters"),
  /** Honeypot — humans never fill this */
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
