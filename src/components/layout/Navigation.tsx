"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/config/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex items-center rounded-full px-3 py-2.5 font-display text-[13px] font-semibold uppercase tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isActive
                    ? "bg-primary text-white shadow-[0_0_16px_rgba(13,11,84,0.9)]"
                    : "text-white/80 hover:bg-white/10 hover:text-accent"
                }`}
              >
                <span>{item.label}</span>

                {!isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_8px_rgba(255,193,7,0.9)] transition-all duration-200 group-hover:w-1/2"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
