# Dira Studio — Website

Production website for **Dira Studio**: premium websites for service businesses, engineered to generate calls, WhatsApp enquiries and quote requests.

Built with Next.js App Router, TypeScript (strict), Tailwind CSS v4, Framer Motion and a fully content-driven architecture.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm run start      # serve the production build locally
npm run lint       # eslint
```

**Requirements:** Node.js 20+.

---

## Editing content (no code knowledge needed)

Every word, price, service and industry lives in `src/content/`. **You never need to touch a React component to change content.**

| File | What it controls |
|---|---|
| `company.ts` | Name, phone, WhatsApp number, email, hours, address |
| `site.config.ts` | Domain, SEO defaults, feature flags |
| `navigation.ts` | Header and footer menus |
| `services.ts` | All services — add one object, it appears everywhere |
| `industries.ts` | All industries — see below |
| `portfolio.ts` | Projects and full case studies |
| `pricing.ts` | The three packages, prices and feature lists |
| `testimonials.ts` | Client quotes |
| `faq.ts` | All FAQ entries (FAQ schema generated automatically) |
| `process.ts` | Process steps, "why us" points, stats, trusted-by names |
| `socials.ts` | Social profiles (leave `href` empty to hide) |

### Adding an industry

Open `src/content/industries.ts` and add:

```ts
defineIndustry({
  slug: "pool-services",
  name: "Pool Services",
  singular: "pool service",
  icon: "waves",
  featured: false,
  searchTerm: "pool cleaning near me",
  urgentJob: "a green pool before a weekend braai",
}),
```

That's it. `/industries/pool-services` now exists with conversion-focused copy, its own FAQ, SEO metadata and a sitemap entry. Use `overrides` for fully bespoke copy on any field.

### Changing prices

Edit `src/content/pricing.ts`. The homepage and `/pricing` update together.

### Updating the phone/WhatsApp number

Edit `src/content/company.ts` once — every button, link and schema updates.

---

## Design system

All design tokens live in `src/app/globals.css` (`:root` block): colours, radii, shadows, motion curves, container widths. Components consume tokens through Tailwind utilities — **never hardcode a colour or shadow in a component**.

- **Fonts:** Space Grotesk (display) + Inter (body), self-hosted via `next/font`
- **Motion:** one easing curve (`--ds-ease`), variants in `src/lib/motion.ts`, `prefers-reduced-motion` respected globally
- **Components:** `src/components/ui` (primitives), `shared` (Container, SectionHeading, Reveal…), `sections` (page sections), `layout` (navbar/footer)

---

## Project structure

```
src/
├── app/                    # Routes (App Router)
│   ├── layout.tsx          # Fonts, chrome, Organization/LocalBusiness schema
│   ├── page.tsx            # Home
│   ├── industries/[slug]/  # Dynamic industry pages (statically generated)
│   ├── portfolio/[slug]/   # Case study pages (statically generated)
│   ├── contact/actions.ts  # Contact form server action
│   ├── sitemap.ts          # Generated sitemap.xml
│   ├── robots.ts           # Generated robots.txt
│   └── opengraph-image.tsx # Generated OG card
├── content/                # ← EDIT CONTENT HERE
├── components/
│   ├── ui/                 # Button, Card, Badge, Input, Accordion…
│   ├── shared/             # Container, Reveal, Icon, CtaGroup…
│   ├── sections/           # Hero, Pricing, FAQ, FinalCta…
│   ├── layout/             # Navbar, Footer
│   └── forms/              # ContactForm (RHF + Zod)
└── lib/                    # utils, seo, schema (JSON-LD), motion
```

---

## Deployment (Vercel)

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), **Add New Project** → import the repo. Framework auto-detects as Next.js; no build settings needed.
3. Set environment variables (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` — your production URL, e.g. `https://dirastudio.co.za`
   - `CONTACT_WEBHOOK_URL` — optional; see below
4. Deploy. Add your custom domain under **Domains** and Vercel handles SSL.

### Contact form delivery

The form validates with Zod on client and server, includes a honeypot spam trap, and posts to a server action:

- **With `CONTACT_WEBHOOK_URL` set** — submissions POST as JSON to any endpoint: Formspree, Make.com, Zapier (→ email/WhatsApp/Sheets), a Slack webhook or your own API.
- **Without it** — submissions are logged and visible in Vercel → Logs, so no enquiry is ever silently lost.

Direct channels (WhatsApp deep link, `tel:`, `mailto:`) work with no configuration.

### SEO checklist (already wired)

- Per-page metadata + canonical URLs, OpenGraph & Twitter cards
- JSON-LD: Organization, ProfessionalService (LocalBusiness), FAQPage, BreadcrumbList
- `sitemap.xml` and `robots.txt` generated from the content layer
- Semantic HTML, skip-link, focus states, reduced-motion support

After launch: verify the domain in Google Search Console and submit `/sitemap.xml`.

### Replacing placeholder content before go-live

1. `company.ts` — real phone, WhatsApp and email
2. `portfolio.ts` / `testimonials.ts` — replace launch placeholders with real projects and quotes (marked with `NOTE` comments)
3. `process.ts` — `trustedBy` names and stats
4. `socials.ts` — real profile URLs
5. Legal pages — have privacy/terms reviewed for your circumstances
