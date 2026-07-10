import Link from "next/link";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { InstagramIcon, FacebookIcon } from "@/components/shared/social-icons";
import {
  footerCompanyNav,
  footerServicesNav,
  footerLegalNav,
} from "@/content/navigation";
import { featuredIndustries } from "@/content/industries";
import { company, whatsappLink, phoneLink, emailLink } from "@/content/company";
import { activeSocials } from "@/content/socials";
import type { NavLink } from "@/content/types";

const socialIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <nav aria-label={title}>
      <h3 className="mb-4 text-xs font-semibold tracking-[0.16em] uppercase text-faint">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted transition-colors duration-150 hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const industriesNav: NavLink[] = featuredIndustries.slice(0, 5).map((i) => ({
    label: i.name,
    href: `/industries/${i.slug}`,
  }));

  return (
    <footer className="border-t border-border bg-background-deep">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {company.description}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm">
              <a
                href={phoneLink}
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <Phone className="size-4" aria-hidden />
                {company.contact.phone}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-whatsapp"
              >
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp us
              </a>
              <a
                href={emailLink}
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden />
                {company.contact.email}
              </a>
              <span className="inline-flex items-center gap-2 text-muted">
                <MapPin className="size-4" aria-hidden />
                Based in {company.city}
              </span>
            </div>
            {activeSocials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {activeSocials.map((social) => {
                  const SocialIcon = socialIcons[social.platform];
                  if (!SocialIcon) return null;
                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-9 items-center justify-center rounded-pill border border-border text-muted transition-all duration-300 ease-premium hover:border-accent/50 hover:text-foreground"
                    >
                      <SocialIcon className="size-4" aria-hidden />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <FooterColumn title="Company" links={footerCompanyNav} />
          <FooterColumn title="Services" links={footerServicesNav} />
          <FooterColumn title="Industries" links={industriesNav} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex gap-6">
              {footerLegalNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-faint transition-colors hover:text-muted-strong"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
