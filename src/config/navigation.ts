export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    label: "Strefy",
    href: "/zones",
    children: [
      { label: "Flippery", href: "/zones/flippers" },
      { label: "Arcade", href: "/zones/arcades" },
      { label: "Koparki", href: "/excavators" },
      { label: "Killer Queen", href: "/killer-queen" },
      { label: "Bar", href: "/zones/bar" },
      { label: "Imprezy okolicznościowe", href: "/zones/events" },
    ],
  },
  {
    label: "Koparki",
    href: "/excavators",
  },
  {
    label: "Killer Queen",
    href: "/killer-queen",
  },
  {
    label: "Imprezy",
    href: "/zones/events",
  },
  {
    label: "Cennik",
    href: "/pricing",
  },
  {
    label: "O nas",
    href: "/about",
    children: [
      { label: "O FlippClub", href: "/about" },
      { label: "Aktualności", href: "/news" },
      { label: "Godziny otwarcia", href: "/opening-hours" },
      { label: "FAQ", href: "/faq" },
      { label: "300 m²", href: "/about#space" },
      { label: "Dostępność", href: "/about#accessibility" },
    ],
  },
  {
    label: "Galeria",
    href: "/gallery",
  },
  {
    label: "Kontakt",
    href: "/contact",
  },
];

export const ctaItem: NavItem = {
  label: "Odezwij się do nas",
  href: "/contact",
};

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/flippclub",
  },
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "TikTok",
    href: "#",
  },
];
