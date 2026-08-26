import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

/**
 * Dedicated placeholder for Killer Queen — flagged in the brief as a major
 * future USP, so it gets its own full-width, higher-contrast section
 * rather than living inside the generic Zones grid.
 */
export function KillerQueen() {
  return (
    <Section id="killer-queen" tone="ink" contained={false}>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div
          aria-hidden="true"
          className="order-1 aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-primary/40 via-ink to-accent/30 lg:order-2"
        />

        <div className="order-2 flex flex-col items-start gap-4 lg:order-1">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Signature attraction
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Killer Queen
          </h2>
          <p className="max-w-md text-base leading-relaxed text-on-ink/75 sm:text-lg">
            A 10-player, 2-team arcade cabinet built for chaos — the centerpiece of the club and
            the reason regulars keep coming back. Full rules, photos and match nights coming soon.
          </p>
          <Button href="/contact" variant="primary" className="mt-2">
            Ask about Killer Queen nights
          </Button>
        </div>
      </div>
    </Section>
  );
}
