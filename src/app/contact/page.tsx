import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/forms/contact-form";
import { company, whatsappLink, phoneLink, emailLink } from "@/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get a quote for a website that generates customers. Call, WhatsApp or send a message. We reply within one business day.",
  path: "/contact",
});

const contactChannels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Fastest way to reach us",
    href: whatsappLink,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: company.contact.phone,
    href: phoneLink,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.contact.email,
    href: emailLink,
    external: false,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="ds-glow -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2" aria-hidden />
        <Container className="relative flex flex-col items-center text-center">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              Contact
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Let&apos;s talk about
              <span className="ds-gradient-text"> growing your business</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Tell us what you do and what you want more of. We&apos;ll come back
              within one business day with honest advice and a fixed quote.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* Form */}
            <Reveal>
              <div className="ds-card p-8 md:p-10">
                <h2 className="mb-8 font-display text-xl font-semibold text-foreground">
                  Request your quote
                </h2>
                <ContactForm />
              </div>
            </Reveal>

            {/* Direct channels */}
            <div className="flex flex-col gap-4">
              {contactChannels.map((channel, i) => (
                <Reveal key={channel.label} delay={0.08 + i * 0.06}>
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="ds-card ds-card-interactive flex items-center gap-4 p-6"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <channel.icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-display text-sm font-semibold text-foreground">
                        {channel.label}
                      </span>
                      <span className="block text-sm text-muted">{channel.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}

              <Reveal delay={0.3}>
                <div className="ds-card flex items-center gap-4 p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Clock className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-sm font-semibold text-foreground">
                      Hours
                    </span>
                    <span className="block text-sm text-muted">{company.hours}</span>
                  </span>
                </div>
              </Reveal>

              {/* Map placeholder. Swap for an embed when the office address is public */}
              <Reveal delay={0.36}>
                <div className="ds-card flex min-h-52 flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
                  <MapPin className="size-7 text-accent" aria-hidden />
                  <p className="font-display text-sm font-semibold text-foreground">
                    {company.city}, {company.country}
                  </p>
                  <p className="text-xs text-faint">
                    Serving service businesses nationwide
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
