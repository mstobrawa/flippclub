/**
 * FLIPPCLUB — navigation configuration
 * ─────────────────────────────────────────────────────────────────────────
 * Single source of truth for site navigation. Both the desktop nav
 * (`Navigation.tsx`) and the mobile menu (`MobileMenu.tsx`) read from this
 * list, so adding, renaming or reordering a link only requires editing the
 * array below.
 */

export type NavItem = {
  /** Text shown to the user. */
  label: string;
  /** In-page anchor or route, e.g. "#zones" or "/contact". */
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Zones", href: "#zones" },
  { label: "Killer Queen", href: "#killer-queen" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Opening Hours", href: "#opening-hours" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const ctaItem: NavItem = {
  label: "Get in touch",
  href: "#contact",
};
