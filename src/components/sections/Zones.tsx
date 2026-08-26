import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Zone = {
  name: string;
  blurb: string;
};

const zones: Zone[] = [
  { name: "Pinball Zone", blurb: "Classic machines from the golden era." },
  { name: "Arcade Zone", blurb: "Retro cabinets and modern favorites." },
  { name: "Excavator Zone", blurb: "Claw and excavator games for quick rounds." },
  { name: "Bar", blurb: "Cold drinks, coffee and snacks." },
];

/**
 * Placeholder grid establishing the future "Zones" section structure.
 * Swap `zones` for real content/photography later — layout stays the same.
 */
export function Zones() {
  return (
    <Section id="zones" tone="default">
      <SectionHeading
        eyebrow="Around the club"
        title="Zones"
        description="Four areas, one club. Real photography and full zone descriptions land here next."
      />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {zones.map((zone) => (
          <article
            key={zone.name}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface"
          >
            <div
              aria-hidden="true"
              className="aspect-[4/3] w-full bg-gradient-to-br from-primary/25 via-surface to-accent/25"
            />
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="font-display text-lg font-semibold tracking-tight">{zone.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{zone.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
