import Link from "next/link";
import { navItems } from "@/config/navigation";

/**
 * Simple, easy-to-expand footer. Part of the sticky-footer layout defined
 * in `src/app/layout.tsx` — this component only needs to render its own
 * content, the flex layout takes care of positioning.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink text-on-ink">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <span className="font-display text-lg font-extrabold tracking-tight">
              FLIPP<span className="text-primary">CLUB</span>
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-on-ink/70">
              Flippery, retro arcade games, drinks and events — all in one place.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-ink/50">
              Explore
            </span>
            <ul className="flex flex-col gap-2">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-on-ink/80 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-ink/50">
              Visit
            </span>
            <address className="not-italic text-sm leading-relaxed text-on-ink/80">
              1 Maja 10
              <br />
              41-100 Siemianowice Śląskie
            </address>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-ink/50">
              Contact
            </span>
            <ul className="flex flex-col gap-2 text-sm text-on-ink/80">
              <li>
                <a
                  href="mailto:hello@flippclub.example"
                  className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  hello@flippclub.example
                </a>
              </li>
              <li>
                <a
                  href="tel:+48123456789"
                  className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  +48 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-on-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} FLIPPCLUB. All rights reserved.</p>
          <p>Placeholder content — final copy and legal links to follow.</p>
        </div>
      </div>
    </footer>
  );
}
