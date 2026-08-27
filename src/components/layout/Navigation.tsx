"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/config/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-8">
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
                className={`relative font-display text-sm font-medium tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                  isActive ? "text-primary" : "text-text hover:text-primary"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-2 left-1/2 h-1 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                    isActive ? "w-5" : "w-0"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
