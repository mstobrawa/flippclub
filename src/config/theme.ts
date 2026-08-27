export const colors = {
  purple: "#CA61F1",
  yellow: "#F8CA1F",
  darkGray: "#292929",

  background: "#ECE8DF",
  surface: "#F4F1EB",
  surfaceMuted: "#E3DED4",
  ink: "#292929",

  text: "#292929",
  muted: "#716C73",
  onInk: "#F4F1EB",

  border: "#D2CCC1",
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
