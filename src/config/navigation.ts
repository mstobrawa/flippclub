export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    label: "Flippery",
    href: "/zones/flippers",
  },
  {
    label: "Arcade",
    href: "/zones/arcades",
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
    label: "Bar",
    href: "/zones/bar",
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
