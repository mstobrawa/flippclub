import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tiles = Array.from({ length: 6 }, (_, i) => i);

/**
 * Placeholder photo grid. Replace each tile's background with a real
 * `next/image` once photography from /public/images/gallery is available.
 */
export function Gallery() {
  return (
    <Section id="gallery" tone="default">
      <SectionHeading
        eyebrow="Inside the club"
        title="Gallery"
        description="A first look at the space — real photography replaces these placeholders soon."
      />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
        {tiles.map((i) => (
          <div
            key={i}
            aria-hidden="true"
            className="aspect-square w-full rounded-lg bg-gradient-to-br from-primary/20 via-surface to-accent/20"
          />
        ))}
      </div>
    </Section>
  );
}
