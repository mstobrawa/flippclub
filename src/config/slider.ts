export type SlideLabel = "Nowość" | "Popularne" | "Wkrótce";

export type Slide = {
  id: string;
  title: string;
  description: string;
  href: string;
  imageDesktop: string;
  imageMobile: string;
  label?: SlideLabel;
  accent?: string;
  titleColor: string;
  accentColor: string;
  labelColor: string;
};

export const slides: Slide[] = [
  {
    id: "pinball-zone",
    title: "STREFA FLIPPERÓW",
    description:
      "Klasyczne i nowoczesne flippery, które możesz odkrywać i rozgrywać bez końca.",
    href: "/zones",
    imageDesktop: "/images/placeholders/placeholder.png",
    imageMobile: "/images/placeholders/placeholder.png",
    label: "Popularne",
    accent: "12 maszyn",
    titleColor: "text-primary",
    accentColor: "text-accent",
    labelColor: "bg-primary text-ink",
  },
  {
    id: "arcade-zone",
    title: "STREFA ARCADE",
    description: "Retro automaty i współczesne gry arcade w jednym miejscu.",
    href: "/zones",
    imageDesktop: "/images/placeholders/placeholder.png",
    imageMobile: "/images/placeholders/placeholder.png",
    accent: "20+ automatów",
    titleColor: "text-accent",
    accentColor: "text-primary",
    labelColor: "bg-accent text-ink",
  },
  {
    id: "killer-queen",
    title: "KILLER QUEEN",
    description:
      "Wyjątkowa, wieloosobowa maszyna arcade, przy której liczy się współpraca.",
    href: "/killer-queen",
    imageDesktop: "/images/placeholders/placeholder.png",
    imageMobile: "/images/placeholders/placeholder.png",
    label: "Nowość",
    accent: "10 graczy",
    titleColor: "text-primary",
    accentColor: "text-accent",
    labelColor: "bg-primary text-ink",
  },
  {
    id: "excavator-zone",
    title: "STREFA KOPAREK",
    description:
      "Sprawdź swoją precyzję i spróbuj zdobyć nagrodę w automatach z chwytakami.",
    href: "/zones",
    imageDesktop: "/images/placeholders/placeholder.png",
    imageMobile: "/images/placeholders/placeholder.png",
    titleColor: "text-accent",
    accentColor: "text-primary",
    labelColor: "bg-accent text-ink",
  },
  {
    id: "events",
    title: "IMPREZY I WYDARZENIA",
    description:
      "Urodziny, spotkania ze znajomymi i prywatne wydarzenia w wyjątkowej atmosferze.",
    href: "/contact",
    imageDesktop: "/images/placeholders/placeholder.png",
    imageMobile: "/images/placeholders/placeholder.png",
    accent: "Zarezerwuj termin",
    titleColor: "text-primary",
    accentColor: "text-accent",
    labelColor: "bg-primary text-ink",
  },
  {
    id: "bar",
    title: "BAR",
    description:
      "Zrób przerwę od gry, napij się czegoś i złap chwilę oddechu między kolejnymi rozgrywkami.",
    href: "/about",
    imageDesktop: "/images/placeholders/placeholder.png",
    imageMobile: "/images/placeholders/placeholder.png",
    titleColor: "text-accent",
    accentColor: "text-primary",
    labelColor: "bg-accent text-ink",
  },
  {
    id: "space",
    title: "PONAD 300 m² ROZRYWKI",
    description:
      "Dużo przestrzeni, różne strefy i atrakcje, które możesz odkrywać we własnym tempie.",
    href: "/zones",
    imageDesktop: "/images/placeholders/placeholder.png",
    imageMobile: "/images/placeholders/placeholder.png",
    accent: "Jedno miejsce. Wiele atrakcji.",
    titleColor: "text-primary",
    accentColor: "text-accent",
    labelColor: "bg-primary text-ink",
  },
  {
    id: "coming-soon",
    title: "WKRÓTCE WIĘCEJ",
    description:
      "Nowe maszyny, kolejne atrakcje i jeszcze więcej powodów, żeby do nas wracać.",
    href: "/about",
    imageDesktop: "/images/placeholders/placeholder.png",
    imageMobile: "/images/placeholders/placeholder.png",
    label: "Wkrótce",
    titleColor: "text-primary",
    accentColor: "text-accent",
    labelColor: "bg-accent text-ink",
  },
];
