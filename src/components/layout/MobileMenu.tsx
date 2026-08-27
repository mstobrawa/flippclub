"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems, ctaItem } from "@/config/navigation";
import { SocialLinks } from "./SocialLinks";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  menuId: string;
};

export function MobileMenu({ open, onClose, menuId }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      id={menuId}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={`fixed inset-0 z-10 bg-background transition-opacity duration-300 lg:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`h-full overflow-y-auto px-6 pb-8 pt-24 transition-all duration-300 ease-out ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        <nav aria-label="Mobile primary">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center py-3 font-display text-3xl font-extrabold uppercase tracking-[0.02em] transition-colors ${
                      isActive ? "text-primary" : "text-text hover:text-primary"
                    }`}
                  >
                    {item.label}

                    {isActive ? (
                      <span className="ml-3 h-2.5 w-2.5 rounded-full bg-accent" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href={ctaItem.href}
            onClick={onClose}
            className="mt-8 flex w-full items-center justify-center rounded-pill bg-accent px-6 py-4 font-display text-base font-extrabold uppercase tracking-[0.08em] text-ink transition hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {ctaItem.label}
          </Link>
        </nav>

        <div className="pt-10">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
