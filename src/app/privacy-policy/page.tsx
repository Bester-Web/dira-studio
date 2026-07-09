import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { company } from "@/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses and protects your personal information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 md:py-28">
      <Container narrow>
        <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-faint">Last updated: July 2026</p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted md:text-base [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
          <div className="space-y-3">
            <h2>Who we are</h2>
            <p>
              {company.legalName} (&ldquo;{company.name}&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) is a web design studio based in {company.city},{" "}
              {company.country}. This policy explains how we handle personal
              information in line with the Protection of Personal Information Act
              (POPIA).
            </p>
          </div>

          <div className="space-y-3">
            <h2>Information we collect</h2>
            <ul>
              <li>
                <strong className="text-muted-strong">Contact details you give us</strong> — name,
                email address, phone number and business name when you submit our
                contact form, WhatsApp us, call us or email us.
              </li>
              <li>
                <strong className="text-muted-strong">Project information</strong> — details about
                your business that you share so we can quote and deliver work.
              </li>
              <li>
                <strong className="text-muted-strong">Technical data</strong> — standard server
                logs (IP address, browser type, pages visited) used to keep the site
                secure and performing well.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2>How we use it</h2>
            <ul>
              <li>To respond to your enquiries and provide quotes.</li>
              <li>To deliver and support the services you engage us for.</li>
              <li>To improve our website and services.</li>
              <li>To meet legal and accounting obligations.</li>
            </ul>
            <p>
              We do not sell your personal information, and we do not send marketing
              you haven&apos;t asked for.
            </p>
          </div>

          <div className="space-y-3">
            <h2>Sharing</h2>
            <p>
              We share information only with service providers needed to operate our
              business (such as hosting and email providers), under appropriate
              safeguards, or when the law requires it.
            </p>
          </div>

          <div className="space-y-3">
            <h2>Retention & security</h2>
            <p>
              We keep personal information only as long as needed for the purposes
              above, and protect it with appropriate technical and organisational
              measures, including encrypted connections (HTTPS) across this site.
            </p>
          </div>

          <div className="space-y-3">
            <h2>Your rights</h2>
            <p>
              Under POPIA you may request access to, correction of, or deletion of
              your personal information, and you may object to processing. Contact us
              at{" "}
              <a href={`mailto:${company.contact.email}`} className="text-accent-soft underline">
                {company.contact.email}
              </a>{" "}
              and we&apos;ll respond promptly. You may also lodge a complaint with the
              Information Regulator of South Africa.
            </p>
          </div>

          <div className="space-y-3">
            <h2>Cookies</h2>
            <p>
              This site uses only essential cookies and privacy-respecting analytics.
              We don&apos;t use advertising trackers.
            </p>
          </div>

          <div className="space-y-3">
            <h2>Contact</h2>
            <p>
              Questions about this policy: {company.contact.email} ·{" "}
              {company.contact.phone}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
