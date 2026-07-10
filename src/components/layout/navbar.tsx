"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { mainNav } from "@/content/navigation";
import { whatsappLink } from "@/content/company";
import { cn } from "@/lib/utils";
import { EASE_PREMIUM } from "@/lib/motion";

/**
 * Sticky glass header. Blurs and gains a hairline border once the
 * page is scrolled; collapses into an animated drawer on mobile.
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation (state adjustment during render,
  // per https://react.dev/learn/you-might-not-need-an-effect)
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Lock body scroll while the drawer is open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium",
        scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-5"
      )}
    >
      <Container
        className={cn(
          "flex h-14 items-center justify-between rounded-pill border px-4 transition-all duration-300 ease-premium sm:h-16 sm:px-6",
          scrolled || open
            ? "border-(--ds-glass-border) bg-surface shadow-md backdrop-blur-2xl backdrop-saturate-150"
            : "border-transparent bg-transparent"
        )}
      >
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors duration-150",
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden />
              WhatsApp
            </a>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">
              Book Free Strategy Call
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex size-10 cursor-pointer items-center justify-center rounded-md text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </Container>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE_PREMIUM }}
            className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex h-[calc(100dvh-var(--ds-header-height))] flex-col gap-1 overflow-y-auto py-6">
              {mainNav.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 * i, ease: EASE_PREMIUM }}
                >
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-md px-3 py-3 font-display text-2xl font-medium transition-colors",
                      isActive(link.href)
                        ? "text-foreground"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">
                    Book Your Free Strategy Call
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="whatsapp" className="w-full">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle aria-hidden />
                    WhatsApp us
                  </a>
                </Button>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
