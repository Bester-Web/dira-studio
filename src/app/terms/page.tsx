import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { company } from "@/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `The terms that govern the use of the ${company.name} website and our services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28">
      <Container narrow>
        <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-faint">Last updated: July 2026</p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted md:text-base [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
          <div className="space-y-3">
            <h2>1. About these terms</h2>
            <p>
              These terms govern your use of this website, operated by{" "}
              {company.legalName}, and provide a summary of how we engage on client
              projects. Specific project engagements are governed by the written
              proposal and agreement issued for that project, which take precedence
              over this summary.
            </p>
          </div>

          <div className="space-y-3">
            <h2>2. Use of this website</h2>
            <p>
              The content on this site is provided for general information about our
              services. You may not copy, scrape or reuse our content, design or
              branding without written permission.
            </p>
          </div>

          <div className="space-y-3">
            <h2>3. Quotes & payment</h2>
            <ul>
              <li>All quotes are fixed-price and valid for 30 days from issue.</li>
              <li>Projects begin on receipt of the agreed deposit.</li>
              <li>
                Final deliverables, including website handover, are released on
                receipt of full payment.
              </li>
              <li>Recurring services (hosting, care plans) are billed monthly in advance.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2>4. Client responsibilities</h2>
            <p>
              Timely feedback, approvals and any client-supplied materials (such as
              photographs or licences) are required to keep projects on schedule.
              Delays in feedback may shift delivery dates.
            </p>
          </div>

          <div className="space-y-3">
            <h2>5. Intellectual property</h2>
            <p>
              On full payment, you own your website and its content. We retain the
              right to showcase completed work in our portfolio unless agreed
              otherwise in writing. Third-party components (fonts, libraries, stock
              assets) remain subject to their own licences.
            </p>
          </div>

          <div className="space-y-3">
            <h2>6. Results</h2>
            <p>
              We build every website to generate enquiries, and our case studies
              reflect real outcomes. Marketing results depend on factors beyond any
              agency&apos;s control, so specific outcomes are not guaranteed unless
              expressly agreed in writing.
            </p>
          </div>

          <div className="space-y-3">
            <h2>7. Liability</h2>
            <p>
              To the maximum extent permitted by law, our liability in connection
              with any project is limited to the fees paid for that project. We are
              not liable for indirect or consequential loss.
            </p>
          </div>

          <div className="space-y-3">
            <h2>8. Governing law</h2>
            <p>These terms are governed by the laws of the Republic of South Africa.</p>
          </div>

          <div className="space-y-3">
            <h2>9. Contact</h2>
            <p>
              Questions about these terms: {company.contact.email} ·{" "}
              {company.contact.phone}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
