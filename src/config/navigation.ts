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
    label: "Nasze atrakcje",
    href: "#",
    children: [
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
    ],
  },
  {
    label: "Mini bar",
    href: "/zones/bar",
  },
  {
    label: "Cennik",
    href: "/pricing",
  },
  {
    label: "Imprezy",
    href: "/zones/events",
  },
  {
    label: "Wypożyczalnia",
    href: "/wypozyczalnia",
  },
  {
    label: "Kup/Wymień",
    href: "/kup-wymien",
  },
  {
    label: "Kontakt",
    href: "/contact",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/flippclub",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/flippclub.pl",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@flippclubsiemianowice",
  },
];
