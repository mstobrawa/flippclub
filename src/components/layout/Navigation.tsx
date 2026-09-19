"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/config/navigation";

export function Navigation() {
  const pathname = usePathname();
  const [attractionsOpen, setAttractionsOpen] = useState(false);

  const attractions = navItems.find((item) => item.label === "Nasze atrakcje");

  const regularItems = navItems.filter(
    (item) => item.label !== "Nasze atrakcje",
  );

  const isAttractionsActive = Boolean(
    attractions?.children?.some((child) => pathname.startsWith(child.href)),
  );

  return (
    <nav aria-label="Primary" className="hidden flex-1 justify-center lg:flex">
      <ul className="flex items-center gap-1">
        {/* Nasze atrakcje */}
        {attractions && (
          <li
            className="relative"
            onMouseEnter={() => setAttractionsOpen(true)}
            onMouseLeave={() => setAttractionsOpen(false)}
          >
            <button
              type="button"
              aria-expanded={attractionsOpen}
              onClick={() => setAttractionsOpen((value) => !value)}
              className={`
                group
                flex
                items-center
                gap-2
                px-3
                py-2.5
                font-display
                text-[14px]
                font-extrabold
                uppercase
                tracking-tight
                transition-all
                duration-200
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-primary
                ${
                  isAttractionsActive
                    ? "bg-ink text-accent shadow-[3px_3px_0_var(--color-primary)]"
                    : "text-ink hover:bg-ink/10"
                }
              `}
            >
              <span>{attractions.label}</span>

              <svg
                aria-hidden="true"
                viewBox="0 0 12 12"
                className={`h-3 w-3 shrink-0 transition-transform duration-200 ${
                  attractionsOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M2 4.5 6 8l4-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`
                absolute
                left-0
                top-full
                pt-2
                transition-all
                duration-200
                ${
                  attractionsOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }
              `}
            >
              <div className="w-60 border-2 border-ink bg-accent p-2 shadow-[6px_6px_0_var(--color-primary)]">
                <ul className="grid gap-1">
                  {attractions.children?.map((child) => {
                    const isActive = pathname.startsWith(child.href);

                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setAttractionsOpen(false)}
                          className={`
                            flex
                            items-center
                            justify-between
                            px-4
                            py-3
                            font-display
                            text-sm
                            font-extrabold
                            uppercase
                            tracking-tight
                            transition
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-[-2px]
                            focus-visible:outline-ink
                            ${
                              isActive
                                ? "bg-ink text-accent shadow-[3px_3px_0_var(--color-primary)]"
                                : "text-ink hover:bg-primary hover:text-white"
                            }
                          `}
                        >
                          <span>{child.label}</span>

                          <span aria-hidden="true" className="ml-3">
                            →
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>
        )}

        {/* Regular items */}
        {regularItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`
          relative
          flex
          items-center
          px-3
          py-2.5
          font-display
          text-[14px]
          font-extrabold
          uppercase
          tracking-tight
          transition-all
          duration-200
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-primary
          ${
            isActive
              ? "bg-ink text-accent shadow-[3px_3px_0_var(--color-primary)]"
              : "text-ink hover:bg-primary hover:text-white"
          }
        `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
