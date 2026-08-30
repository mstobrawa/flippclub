"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems, ctaItem } from "@/config/navigation";
import { SocialLinks } from "./SocialLinks";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  menuId: string;
};

export function MobileMenu({ open, onClose, menuId }: MobileMenuProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string[]>([]);

  function toggleSection(label: string) {
    setExpanded((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  }

  return (
    <div
      id={menuId}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={`fixed inset-0 z-10 bg-background transition-opacity duration-300 lg:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`h-full overflow-y-auto px-6 pb-8 pt-24 transition-all duration-300 ease-out ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        <nav aria-label="Mobile primary">
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              const hasChildren = Boolean(item.children?.length);
              const isExpanded = expanded.includes(item.label);

              if (hasChildren) {
                return (
                  <li key={item.href} className="border-b border-text/10">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex flex-1 items-center py-4 font-display text-2xl font-extrabold uppercase tracking-[0.02em] transition-colors ${
                          isActive
                            ? "text-primary"
                            : "text-text hover:text-primary"
                        }`}
                      >
                        {item.label}

                        {isActive ? (
                          <span className="ml-3 h-2.5 w-2.5 rounded-full bg-accent" />
                        ) : null}
                      </Link>

                      <button
                        type="button"
                        onClick={() => toggleSection(item.label)}
                        aria-expanded={isExpanded}
                        aria-label={
                          isExpanded
                            ? `Zwiń ${item.label}`
                            : `Rozwiń ${item.label}`
                        }
                        className="flex h-12 w-12 shrink-0 items-center justify-center text-2xl text-text transition-colors hover:text-primary"
                      >
                        <span
                          className={`transition-transform duration-200 ${
                            isExpanded ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ${
                        isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="mb-4 ml-3 border-l-2 border-primary/20 pl-5">
                          {item.children?.map((child) => {
                            const childActive = pathname.startsWith(child.href);

                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  aria-current={
                                    childActive ? "page" : undefined
                                  }
                                  className={`flex items-center py-2.5 text-base font-medium transition-colors ${
                                    childActive
                                      ? "text-primary"
                                      : "text-text/70 hover:text-primary"
                                  }`}
                                >
                                  {child.label}

                                  {childActive ? (
                                    <span className="ml-2 h-2 w-2 rounded-full bg-accent" />
                                  ) : null}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href} className="border-b border-text/10">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center py-4 font-display text-2xl font-extrabold uppercase tracking-[0.02em] transition-colors ${
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

          {/* Cennik */}
          <Link
            href={ctaItem.href}
            onClick={onClose}
            className="mt-7 flex w-full items-center justify-center rounded-pill bg-accent px-6 py-4 font-display text-base font-extrabold uppercase tracking-[0.08em] text-ink transition hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
