/**
 * FLIPPCLUB — featured slider configuration
 * ─────────────────────────────────────────────────────────────────────────
 * Single source of truth for the featured slider in
 * `src/components/sections/FeaturedSlider.tsx`.
 *
 * To add a new slide, append a new object to `slides`. Nothing else needs
 * to change — the component renders whatever is in this array.
 */

export type SlideLabel = "New" | "Popular" | "Coming Soon";

export type Slide = {
  /** Unique, stable id — used for React keys and aria control ids. */
  id: string;
  /** Main slide title. */
  title: string;
  /** Short supporting copy, one or two sentences max. */
  description: string;
  /** Route or in-page anchor the whole slide links to. */
  href: string;
  /** Path to the placeholder/real image in /public/images. */
  image: string;
  /** Optional small pill label rendered over the image. */
  label?: SlideLabel;
  /** Optional short accent line (e.g. a stat or tagline fragment). */
  accent?: string;
};

export const slides: Slide[] = [
  {
    id: "pinball-zone",
    title: "Pinball Zone",
    description:
      "A lineup of restored classic pinball machines from the golden era.",
    href: "#zones",
    image: "/images/hero/pinball-zone.jpg",
    label: "Popular",
    accent: "12 machines",
  },
  {
    id: "arcade-zone",
    title: "Arcade Zone",
    description: "Retro cabinets and modern arcade favorites, side by side.",
    href: "#zones",
    image: "/images/hero/arcade-zone.jpg",
    accent: "20+ cabinets",
  },
  {
    id: "killer-queen",
    title: "Killer Queen",
    description: "Our signature 10-player arcade cabinet — the club's big draw.",
    href: "#killer-queen",
    image: "/images/hero/killer-queen.jpg",
    label: "New",
    accent: "10 players, 1 cabinet",
  },
  {
    id: "excavator-zone",
    title: "Excavator Zone",
    description: "Claw and excavator games for a quick round with friends.",
    href: "#zones",
    image: "/images/hero/excavator-zone.jpg",
  },
  {
    id: "events",
    title: "Events & Special Occasions",
    description: "Birthdays, tournaments and private parties, hosted at the club.",
    href: "#contact",
    image: "/images/hero/events.jpg",
    accent: "Book your date",
  },
  {
    id: "bar",
    title: "Bar",
    description: "Cold drinks, coffee and snacks while you play.",
    href: "#about",
    image: "/images/hero/bar.jpg",
  },
  {
    id: "space",
    title: "300+ m² of Entertainment",
    description: "Plenty of room to play, hang out and explore every zone.",
    href: "#zones",
    image: "/images/hero/space.jpg",
  },
  {
    id: "coming-soon",
    title: "Coming Soon",
    description: "New machines and zones are on the way — stay tuned.",
    href: "#about",
    image: "/images/hero/coming-soon.jpg",
    label: "Coming Soon",
  },
];
