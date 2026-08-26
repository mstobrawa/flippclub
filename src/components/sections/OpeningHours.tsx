import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const hours = [
  { day: "Monday", time: "14:00 – 22:00" },
  { day: "Tuesday", time: "14:00 – 22:00" },
  { day: "Wednesday", time: "14:00 – 22:00" },
  { day: "Thursday", time: "14:00 – 22:00" },
  { day: "Friday", time: "14:00 – 24:00" },
  { day: "Saturday", time: "12:00 – 24:00" },
  { day: "Sunday", time: "12:00 – 22:00" },
];

/**
 * Opening hours placeholder, paired with an address block. Confirm final
 * hours before launch.
 */
export function OpeningHours() {
  return (
    <Section id="opening-hours" tone="surface">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Plan your visit" title="Opening hours" />
          <dl className="mt-6 flex flex-col divide-y divide-border">
            {hours.map((row) => (
              <div key={row.day} className="flex items-center justify-between py-3">
                <dt className="text-sm text-muted">{row.day}</dt>
                <dd className="font-mono text-sm text-text">{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-4">
          <SectionHeading eyebrow="Find us" title="Location" />
          <address className="not-italic text-base leading-relaxed text-muted">
            1 Maja 10
            <br />
            41-100 Siemianowice Śląskie
          </address>
          <div
            aria-hidden="true"
            className="aspect-video w-full rounded-lg bg-gradient-to-br from-primary/15 via-background to-accent/15"
          />
          <p className="text-xs text-muted">Map embed placeholder.</p>
        </div>
      </div>
    </Section>
  );
}
