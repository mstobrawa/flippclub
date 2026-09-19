"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/config/navigation";
import { SocialLinks } from "./SocialLinks";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  menuId: string;
};

export function MobileMenu({ open, onClose, menuId }: MobileMenuProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  const attractions = navItems.find((item) => item.label === "Nasze atrakcje");

  const regularItems = navItems.filter(
    (item) => item.label !== "Nasze atrakcje",
  );

  const isAttractionsActive = Boolean(
    attractions?.children?.some((child) => pathname.startsWith(child.href)),
  );

  return (
    <div
      id={menuId}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={`
        fixed
        inset-0
        z-10
        bg-accent
        transition-opacity
        duration-300
        lg:hidden
        ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
    >
      <div
        className={`
          h-full
          overflow-y-auto
          px-5
          pb-8
          pt-24
          transition-all
          duration-300
          ease-out
          ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
        `}
      >
        <nav aria-label="Mobile primary">
          {/* Nasze atrakcje */}
          {attractions && (
            <section className="border-b-2 border-ink/15 pb-5">
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                aria-expanded={expanded}
                className={`
    flex
    w-full
    items-center
    justify-between
    border-2
    border-ink
    px-5
    py-4
    text-left
    font-display
    text-xl
    font-extrabold
    uppercase
    tracking-tight
    transition
    ${
      isAttractionsActive
        ? "bg-ink text-accent shadow-[5px_5px_0_var(--color-primary)]"
        : "bg-white/40 text-ink"
    }
  `}
              >
                <span>Nasze atrakcje</span>

                <span
                  aria-hidden="true"
                  className={`text-2xl leading-none transition-transform duration-200 ${
                    expanded ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`
                  grid
                  transition-[grid-template-rows]
                  duration-300
                  ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                `}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {attractions.children?.map((child) => {
                      const childActive = pathname.startsWith(child.href);

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          aria-current={childActive ? "page" : undefined}
                          className={`
                            flex
                            min-h-24
                            items-end
                            justify-between
                            border-2
                            border-ink
                            p-4
                            font-display
                            text-sm
                            font-extrabold
                            uppercase
                            leading-tight
                            tracking-tight
                            ${
                              childActive
                                ? "bg-ink text-accent shadow-[4px_4px_0_var(--color-primary)]"
                                : "bg-white/40 text-ink"
                            }
                          `}
                        >
                          <span>{child.label}</span>

                          <span aria-hidden="true">→</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Regular items */}
          <ul className="grid gap-3 pt-5">
            {regularItems.map((item) => {
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
                    className={`
                      flex
                      min-h-16
                      items-center
                      justify-between
                      border-2
                      border-ink
                      px-5
                      py-4
                      font-display
                      text-lg
                      font-extrabold
                      uppercase
                      tracking-tight
                      ${
                        isActive
                          ? "bg-ink text-accent shadow-[4px_4px_0_var(--color-primary)]"
                          : "bg-white/40 text-ink"
                      }
                    `}
                  >
                    <span>{item.label}</span>

                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social media */}
        <div className="mt-8 border-t-2 border-ink/15 pt-6">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
            Znajdź nas
          </p>

          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
