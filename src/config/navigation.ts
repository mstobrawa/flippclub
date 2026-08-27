export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Strefy", href: "/zones" },
  { label: "Killer Queen", href: "/killer-queen" },
  { label: "Cennik", href: "/pricing" },
  { label: "Galeria", href: "/gallery" },
  { label: "Godziny otwarcia", href: "/opening-hours" },
  { label: "O nas", href: "/about" },
];

export const ctaItem: NavItem = {
  label: "Odezwij sie do nas",
  href: "/contact",
};

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "#",
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
