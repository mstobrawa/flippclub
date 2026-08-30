"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/config/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-7">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          const hasChildren = Boolean(item.children?.length);

          return (
            <li key={item.href} className="group relative">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex items-center gap-1.5 py-3 font-display text-sm font-medium tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                  isActive ? "text-primary" : "text-text hover:text-primary"
                }`}
              >
                {item.label}

                {hasChildren ? (
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-[10px] transition-transform duration-200 group-hover:rotate-180"
                  >
                    ▼
                  </span>
                ) : null}

                <span
                  className={`absolute -bottom-0.5 left-1/2 h-1 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                    isActive ? "w-5" : "w-0"
                  }`}
                />
              </Link>

              {hasChildren ? (
                <div className="pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 rounded-2xl border border-black/5 bg-background p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="flex flex-col gap-1">
                    {item.children?.map((child) => {
                      const childActive = pathname.startsWith(child.href);

                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${
                              childActive
                                ? "bg-primary/10 font-semibold text-primary"
                                : "text-text hover:bg-primary/10 hover:text-primary"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
