import { Phone, MessageCircle, Star, Check } from "lucide-react";
import { Icon } from "@/components/shared/icon";
import type { ShowcaseSite } from "@/content/home";

/**
 * A full website concept rendered at miniature scale.
 * Pure HTML so it stays razor sharp inside the MacBook screen
 * and the showcase carousel at any size.
 */
export function MiniSite({ site }: { site: ShowcaseSite }) {
  const { palette } = site;
  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden font-sans"
      style={{
        background: `linear-gradient(150deg, ${palette.bgFrom}, ${palette.bgTo})`,
      }}
    >
      {/* Site navbar */}
      <div className="flex items-center justify-between px-[4%] py-[2.2%]">
        <span className="flex items-center gap-1 text-[0.55em] font-bold tracking-widest text-white">
          <Icon name={site.icon} className="size-[1.1em]" aria-hidden />
          {site.brand}
          <span style={{ color: palette.accent }} className="font-medium">
            {site.brandAccent}
          </span>
        </span>
        <span className="hidden gap-[1.2em] text-[0.42em] text-white/60 sm:flex">
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Projects</span>
          <span>Contact</span>
        </span>
        <span
          className="rounded-full px-[1em] py-[0.4em] text-[0.42em] font-bold"
          style={{ background: palette.accent, color: palette.accentText }}
        >
          Get a Quote
        </span>
      </div>

      {/* Hero */}
      <div className="flex flex-1 flex-col justify-center px-[5%]">
        <h3
          className="max-w-[70%] font-display text-[1.15em] leading-[1.12] font-bold text-white"
          style={{ textWrap: "balance" }}
        >
          {site.headline}
        </h3>
        <p className="mt-[0.6em] text-[0.55em] font-medium text-white/90">{site.tagline}</p>
        <p className="mt-[0.5em] max-w-[55%] text-[0.45em] leading-relaxed text-white/55">
          {site.sub}
        </p>
        <div className="mt-[1em] flex items-center gap-[0.8em]">
          <span
            className="flex items-center gap-[0.5em] rounded-full px-[1.1em] py-[0.55em] text-[0.48em] font-bold shadow-lg"
            style={{ background: palette.accent, color: palette.accentText }}
          >
            <Phone className="size-[1.2em]" aria-hidden />
            {site.cta}
          </span>
          <span className="flex items-center gap-[0.5em] rounded-full border border-white/25 px-[1.1em] py-[0.55em] text-[0.48em] font-semibold text-white">
            <MessageCircle className="size-[1.2em]" aria-hidden />
            WhatsApp
          </span>
        </div>
        <div className="mt-[0.9em] flex items-center gap-[0.35em]">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              className="size-[0.55em]"
              style={{ fill: palette.accent, color: palette.accent }}
              aria-hidden
            />
          ))}
          <span className="ml-[0.4em] text-[0.42em] text-white/60">
            5.0 rating · 200+ completed projects
          </span>
        </div>
      </div>

      {/* Feature strip */}
      <div
        className="grid grid-cols-3 gap-[2%] px-[4%] py-[2.5%]"
        style={{ background: "rgba(0,0,0,0.35)" }}
      >
        {site.features.map((feature) => (
          <div key={feature} className="flex items-center gap-[0.5em]">
            <span
              className="flex size-[1.4em] shrink-0 items-center justify-center rounded-full"
              style={{ background: `${palette.accent}22`, color: palette.accent }}
            >
              <Check className="size-[0.8em]" aria-hidden />
            </span>
            <span className="text-[0.42em] leading-tight font-medium text-white/85">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
