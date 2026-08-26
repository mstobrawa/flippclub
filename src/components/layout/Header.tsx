"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { ctaItem } from "@/config/navigation";

/**
 * Site header. Sticky at the top of the viewport, holds the open/closed
 * state for the mobile menu, and closes that menu on Escape or route
 * change (link click).
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  // Close the mobile menu with Escape, and lock body scroll while it's open.
  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-tight text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:text-2xl"
        >
          FLIPP<span className="text-primary">CLUB</span>
        </Link>

        <Navigation />

        <div className="flex items-center gap-3">
          <Link
            href={ctaItem.href}
            className="hidden rounded-pill bg-primary px-5 py-2.5 font-display text-sm font-semibold text-ink transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:inline-flex"
          >
            {ctaItem.label}
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} menuId={menuId} />
    </header>
  );
}
