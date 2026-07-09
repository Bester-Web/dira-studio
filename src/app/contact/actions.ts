"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";

export interface ContactActionResult {
  success: boolean;
  error?: string;
}

/**
 * Handles contact form submissions.
 *
 * Delivery: set CONTACT_WEBHOOK_URL in your environment to forward
 * submissions as JSON to any endpoint — Formspree, Make.com, Zapier,
 * a Slack webhook or your own API. Without it, submissions are logged
 * to the server console (visible in Vercel logs) so nothing is lost.
 */
export async function submitContactForm(
  values: ContactFormValues
): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Please check the form and try again." };
  }

  // Honeypot triggered — pretend success, deliver nothing.
  if (parsed.data.website && parsed.data.website.length > 0) {
    return { success: true };
  }

  const submission = {
    ...parsed.data,
    website: undefined,
    submittedAt: new Date().toISOString(),
    source: "dirastudio.co.za contact form",
  };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (!res.ok) {
        console.error("Contact webhook failed:", res.status, await res.text());
        return {
          success: false,
          error:
            "Something went wrong sending your message. Please WhatsApp or call us instead.",
        };
      }
    } catch (error) {
      console.error("Contact webhook error:", error);
      return {
        success: false,
        error:
          "Something went wrong sending your message. Please WhatsApp or call us instead.",
      };
    }
  } else {
    // No webhook configured — log so submissions appear in server/Vercel logs.
    console.log("CONTACT FORM SUBMISSION:", JSON.stringify(submission, null, 2));
  }

  return { success: true };
}
