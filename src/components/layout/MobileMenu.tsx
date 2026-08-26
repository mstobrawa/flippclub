"use client";

import Link from "next/link";
import { navItems, ctaItem } from "@/config/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  menuId: string;
};

/**
 * Full-screen mobile navigation panel. Visibility is controlled by the
 * parent `Header` component; this component only renders the panel markup
 * and closes itself when a link is activated.
 */
export function MobileMenu({ open, onClose, menuId }: MobileMenuProps) {
  return (
    <div
      id={menuId}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={`fixed inset-0 z-40 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`absolute inset-0 bg-ink/60 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        className={`absolute inset-x-0 top-0 origin-top bg-background pt-20 pb-10 shadow-xl transition-transform duration-200 ease-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav aria-label="Mobile primary" className="px-6">
          <ul className="flex flex-col divide-y divide-border">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-4 font-display text-xl font-semibold tracking-tight text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={ctaItem.href}
            onClick={onClose}
            className="mt-8 inline-flex w-full items-center justify-center rounded-pill bg-primary px-6 py-3 font-display text-base font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {ctaItem.label}
          </Link>
        </nav>
      </div>
    </div>
  );
}
