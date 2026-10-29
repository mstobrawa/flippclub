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
        href: "/flippery",
      },
      {
        label: "Arcade",
        href: "/arcade",
      },
      {
        label: "Koparki",
        href: "/koparki",
      },
      {
        label: "Killer Queen",
        href: "/killer-queen",
      },
    ],
  },
  {
    label: "Cennik",
    href: "/cennik",
  },
  {
    label: "Godziny otwarcia",
    href: "/godziny-otwarcia",
  },
  {
    label: "Mini bar",
    href: "/bar",
  },
  {
    label: "Urodziny / imprezy",
    href: "/urodziny",
  },
  {
    label: "Wypożyczalnia",
    href: "/wypozyczalnia",
  },
  {
    label: "Kup / Wymień",
    href: "/kup-wymien",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
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
