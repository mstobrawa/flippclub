import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Short, image-led About placeholder. Keep copy brief here — the final
 * site prioritizes photography over long text blocks.
 */
export function About() {
  return (
    <Section id="about" tone="default">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div
          aria-hidden="true"
          className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-accent/25 via-surface to-primary/25"
        />
        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="About FLIPPCLUB"
            description="A club built around flippers, arcade cabinets and good company. Full story and team photos to follow."
          />
        </div>
      </div>
    </Section>
  );
}
