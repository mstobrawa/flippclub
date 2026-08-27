"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { SocialLinks } from "./SocialLinks";

import { ctaItem } from "@/config/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
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
    <header className="sticky top-0 z-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-background/95 backdrop-blur"
      />
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
        <Link
          href="/"
          className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Image
            src="/images/logo.png"
            alt="FLIPPCLUB"
            width={220}
            height={100}
            priority
            className="h-14 w-auto object-contain lg:h-[4.25rem]"
          />
        </Link>

        <Navigation />

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <SocialLinks />
          </div>

          <Link
            href={ctaItem.href}
            className="hidden items-center rounded-pill bg-accent px-5 py-2.5 font-display text-sm font-extrabold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:inline-flex"
          >
            {ctaItem.label}
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
            className="relative z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-text text-text transition hover:border-primary hover:bg-primary hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

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

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        menuId={menuId}
      />
    </header>
  );
}
