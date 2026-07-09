import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <div className="ds-glow top-1/2 left-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2" aria-hidden />
      <Container className="relative flex flex-col items-center text-center">
        <p className="font-display text-8xl font-bold text-white/[0.06] md:text-9xl" aria-hidden>
          404
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
          This page took the day off
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you somewhere useful.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">
              <Home aria-hidden />
              Back to home
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Get a quote
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
