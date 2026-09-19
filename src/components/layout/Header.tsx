"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { SocialLinks } from "./SocialLinks";

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
    <header className="relative z-50">
      {/* Yellow header */}
      <div className="relative h-16 bg-accent lg:h-20">
        {/* Subtle bottom edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-ink/15"
        />

        <div className="mx-auto flex h-full w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label="FLIPPCLUB - strona główna"
            className="
  absolute
  left-4
  top-20
  z-30
  hidden
  h-29
  w-29
  -translate-y-1/2
  items-center
  justify-center
  rounded-full
  border-4
  border-ink
  bg-ink
  p-2
  shadow-[6px_7px_0_var(--color-primary)]
  transition-transform
  duration-200
  hover:-translate-y-[calc(50%+3px)]
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-primary

  lg:left-8
  lg:flex
  lg:h-28
  lg:w-28
  lg:border-4
  lg:p-2

  xl:left-10
  xl:h-38
  xl:w-38
  xl:border-[5px]
  xl:p-3
"
          >
            <Image
              src="/images/logo.png"
              alt="FLIPPCLUB"
              width={320}
              height={160}
              priority
              className="h-auto w-full object-contain"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="ml-[8.5rem] flex flex-1 lg:ml-[10rem]">
            <Navigation />
          </div>

          {/* Right side */}
          <div className="ml-auto flex shrink-0 items-center gap-3 lg:gap-4">
            {/* Social media */}
            <div className="hidden lg:block">
              <SocialLinks />
            </div>

            {/* Mobile menu */}
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
              onClick={() => setMenuOpen((value) => !value)}
              className="
                relative
                z-40
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                border-2
                border-ink
                bg-accent
                text-ink
                transition
                hover:bg-ink
                hover:text-accent
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-primary
                lg:hidden
              "
            >
              <span className="sr-only">
                {menuOpen ? "Zamknij menu" : "Otwórz menu"}
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
      </div>

      {/* Mobile menu */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        menuId={menuId}
      />
    </header>
  );
}
