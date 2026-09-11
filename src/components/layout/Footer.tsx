import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "./CookieSettingsButton";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-on-ink">
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-12 hidden h-24 w-24 rounded-full border-[8px] border-primary/40 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-20 hidden h-14 w-14 rounded-full border-[6px] border-accent/50 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 left-[12%] hidden h-5 w-5 rotate-45 bg-accent lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 right-[15%] hidden h-4 w-4 rotate-12 bg-primary lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        {/* Main footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              aria-label="FlippClub - strona główna"
              className="inline-flex w-fit"
            >
              <Image
                src="/images/logo.png"
                alt="FlippClub"
                width={100}
                height={100}
                className="h-auto w-21.25"
              />
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-on-ink/65">
              Flippery, arcade, retro gry i dobra zabawa. Ponad 300 m² rozrywki
              w Siemianowicach Śląskich.
            </p>

            {/* Social media */}
            <SocialLinks />
          </div>

          {/* Oferta */}
          <nav aria-label="Oferta" className="flex flex-col gap-5">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Oferta
            </span>

            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/wypozyczalnia"
                  className="text-sm text-on-ink/70 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Wypożyczalnia
                </Link>
              </li>

              <li>
                <Link
                  href="/kup-wymien"
                  className="text-sm text-on-ink/70 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Kup / Wymień
                </Link>
              </li>
            </ul>
          </nav>

          {/* O nas */}
          <nav
            aria-label="Informacje o FlippClub"
            className="flex flex-col gap-5"
          >
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
              O nas
            </span>

            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-on-ink/70 transition-colors hover:text-primary"
                >
                  O FlippClub
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-sm text-on-ink/70 transition-colors hover:text-primary"
                >
                  Aktualności
                </Link>
              </li>

              <li>
                <Link
                  href="/opening"
                  className="text-sm text-on-ink/70 transition-colors hover:text-primary"
                >
                  Godziny otwarcia
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="text-sm text-on-ink/70 transition-colors hover:text-primary"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-on-ink/70 transition-colors hover:text-primary"
                >
                  Cennik
                </Link>
              </li>

              <li>
                <Link
                  href="/dostepnosc"
                  className="text-sm text-on-ink/70 transition-colors hover:text-primary"
                >
                  Dostępność
                </Link>
              </li>
            </ul>
          </nav>

          {/* Kontakt */}
          <div id="kontakt" className="flex scroll-mt-24 flex-col gap-5">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Odwiedź nas
            </span>

            <address className="not-italic text-sm leading-relaxed text-on-ink/75">
              <strong className="font-semibold text-on-ink">FlippClub</strong>
              <br />
              ul. E. Orzeszkowej 2B
              <br />
              41-103 Siemianowice Śląskie
            </address>

            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+48509555123"
                className="w-fit text-on-ink/75 transition-colors hover:text-primary"
              >
                509 555 123
              </a>

              <a
                href="mailto:flippclubsiemianowice@gmail.com"
                className="break-all text-on-ink/75 transition-colors hover:text-primary"
              >
                flippclubsiemianowice@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-5 text-xs text-on-ink/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} FLIPPCLUB. Wszystkie prawa zastrzeżone.</p>

            <CookieSettingsButton />

            <p>
              Crafted by{" "}
              <a
                href="https://mikewebworks.dev"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-on-ink/70 transition-colors hover:text-accent"
              >
                Mike Webworks
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
