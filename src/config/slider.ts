export type SlideLabel =
  | "Nowość"
  | "Popularne"
  | "Wkrótce"
  | "Jedyny w Europie";

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
    title: "FLIPPERY",
    description:
      "Klasyczne i nowoczesne flippery, które możesz odkrywać i rozgrywać bez końca.",
    href: "/zones/flippers",
    imageDesktop: "/images/slider/slider_flippery.webp",
    imageMobile: "/images/slider/slider_flippery.webp",
    label: "Popularne",
    accent: "",
    titleColor: "text-primary",
    accentColor: "text-accent",
    labelColor: "bg-primary text-white",
  },
  {
    id: "arcade-zone",
    title: "ARCADE",
    description: "Retro automaty i współczesne gry arcade w jednym miejscu.",
    href: "/zones/arcades",
    imageDesktop: "/images/slider/slider_arcade.webp",
    imageMobile: "/images/slider/slider_arcade.webp",
    accent: "40 automatów",
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
    imageDesktop: "/images/slider/slider_killerqueen.webp",
    imageMobile: "/images/slider/slider_killerqueen.webp",
    label: "Jedyny w Europie",
    accent: "10 graczy",
    titleColor: "text-primary",
    accentColor: "text-accent",
    labelColor: "bg-accent text-primary",
  },
  {
    id: "excavator-zone",
    title: "KOPARKI RC",
    description:
      "Sprawdź swoją precyzję i spróbuj zdobyć nagrodę w automatach z chwytakami.",
    href: "/excavators",
    imageDesktop: "/images/slider/slider_koparki.webp",
    imageMobile: "/images/slider/slider_koparki.webp",
    titleColor: "text-accent",
    accentColor: "text-primary",
    labelColor: "bg-accent text-ink",
  },
  {
    id: "events",
    title: "IMPREZY I WYDARZENIA",
    description:
      "Urodziny, spotkania ze znajomymi i prywatne wydarzenia w wyjątkowej atmosferze.",
    href: "/zones/events",
    imageDesktop: "/images/slider/slider_events.webp",
    imageMobile: "/images/slider/slider_events.webp",
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
    href: "/zones/bar",
    imageDesktop: "/images/slider/slider_bar.webp",
    imageMobile: "/images/slider/slider_bar.webp",
    titleColor: "text-accent",
    accentColor: "text-primary",
    labelColor: "bg-accent text-ink",
  },

  // {
  //   id: "coming-soon",
  //   title: "WKRÓTCE WIĘCEJ",
  //   description:
  //     "Nowe maszyny, kolejne atrakcje i jeszcze więcej powodów, żeby do nas wracać.",
  //   href: "/about",
  //   imageDesktop: "/images/placeholders/placeholder.png",
  //   imageMobile: "/images/placeholders/placeholder.png",
  //   label: "Wkrótce",
  //   titleColor: "text-primary",
  //   accentColor: "text-accent",
  //   labelColor: "bg-accent text-ink",
  // },
];
