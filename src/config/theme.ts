/**
 * FLIPPCLUB — design tokens
 * ─────────────────────────────────────────────────────────────────────────
 * Single source of truth for brand colors, typography and radii.
 *
 * These values MUST stay in sync with the CSS custom properties defined in
 * `src/app/globals.css` (`@theme` block). Tailwind utility classes such as
 * `bg-primary`, `text-muted` or `font-display` are generated from that CSS
 * block, while this file exposes the same values to plain TypeScript/JS
 * (e.g. for a `<meta name="theme-color">`, canvas drawing, charts, etc.).
 *
 * To change a brand color or font later: edit BOTH this file and the
 * matching variable in `globals.css`. Everything else in the app reads
 * from Tailwind classes, so components never need to change.
 */

export const colors = {
  // Brand
  purple: "#CA61F1",
  yellow: "#F8CA1F",
  darkGray: "#292929",

  // Neutral surfaces (muted, never pure white)
  background: "#F8F4EE",
  surface: "#FFFFFF",
  ink: "#1C1420", // near-black used for the slider panel & footer

  // Text
  text: "#292929",
  muted: "#6E6675",
  onInk: "#F8F4EE",

  // Borders / dividers
  border: "#E7E0D6",
} as const;

export const radii = {
  sm: "0.5rem",
  md: "1rem",
  lg: "1.75rem",
  pill: "999px",
} as const;

export const fonts = {
  display: "var(--font-display)",
  body: "var(--font-body)",
  mono: "var(--font-mono)",
} as const;

export const siteConfig = {
  name: "FLIPPCLUB",
  shortName: "FLIPPCLUB",
  description:
    "FLIPPCLUB — flippery, retro arcade games, drinks and events in one place.",
  locale: "en",
} as const;
