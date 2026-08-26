import { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Set false to render children without the default Container gutters. */
  contained?: boolean;
  /** Optional background tone for alternating sections. */
  tone?: "default" | "surface" | "ink";
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-background",
  surface: "bg-surface",
  ink: "bg-ink text-on-ink",
};

/**
 * Standard vertical rhythm + background wrapper for page sections.
 * Keeps spacing consistent so individual sections don't reinvent padding.
 */
export function Section({
  id,
  children,
  className = "",
  contained = true,
  tone = "default",
}: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 lg:py-24 ${tones[tone]} ${className}`}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
