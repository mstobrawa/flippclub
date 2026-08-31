"use client";

import Image from "next/image";
import Link from "next/link";

type Zone = {
  name: string;
  blurb: string;
  href: string;
  accent: "primary" | "accent" | "blue" | "pink";
};

const zones: Zone[] = [
  {
    name: "Flippery",
    blurb: "Klasyczne flippery i maszyny z różnych epok.",
    href: "/zones/flippers",
    accent: "primary",
  },
  {
    name: "Arcade",
    blurb: "Retro klasyki i współczesne arcade.",
    href: "/zones/arcades",
    accent: "accent",
  },
  {
    name: "Koparki",
    blurb: "Zdalnie sterowane maszyny i mały plac budowy.",
    href: "/excavators",
    accent: "accent",
  },
  {
    name: "Killer Queen",
    blurb: "Dwie drużyny. 5 vs 5. Jedna arena.",
    href: "/killer-queen",
    accent: "blue",
  },
  {
    name: "Bar",
    blurb: "Przekąski, napoje i power-upy.",
    href: "/zones/bar",
    accent: "pink",
  },
  {
    name: "Imprezy",
    blurb: "Prywatny room dla Ciebie i Twojej ekipy.",
    href: "/zones/events",
    accent: "primary",
  },
];

const accentClasses = {
  primary: {
    border: "border-primary/30 hover:border-primary",
    shadow: "hover:shadow-[6px_7px_0_var(--color-primary)]",
    text: "text-primary",
  },
  accent: {
    border: "border-accent/30 hover:border-accent",
    shadow: "hover:shadow-[6px_7px_0_var(--color-accent)]",
    text: "text-accent",
  },
  blue: {
    border: "border-blue/30 hover:border-blue",
    shadow: "hover:shadow-[6px_7px_0_var(--color-blue)]",
    text: "text-blue",
  },
  pink: {
    border: "border-pink/30 hover:border-pink",
    shadow: "hover:shadow-[6px_7px_0_var(--color-pink)]",
    text: "text-pink",
  },
};

export default function ZonesPage() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* ================================================== */}
      {/* DECORATIONS */}
      {/* ================================================== */}

      {/* Large purple ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-[12%] hidden h-36 w-36 rounded-full border-[10px] border-primary lg:block"
      />

      {/* Large yellow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 top-[20%] hidden h-40 w-40 rounded-full border-[10px] border-accent lg:block"
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[7%] top-[48%] hidden h-10 w-10 rotate-12 bg-pink lg:block"
      />

      {/* Blue diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[55%] hidden h-12 w-12 rotate-45 bg-blue lg:block"
      />

      {/* Bottom purple ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 bottom-[12%] hidden h-28 w-28 rounded-full border-[8px] border-primary lg:block"
      />

      {/* Bottom yellow diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] bottom-[8%] hidden h-10 w-10 rotate-45 bg-accent lg:block"
      />

      {/* Small pixels */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-[18%] hidden h-4 w-4 rotate-45 bg-accent lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[19%] top-[32%] hidden h-4 w-4 bg-primary lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] bottom-[28%] hidden h-3 w-3 rotate-45 bg-blue lg:block"
      />

      {/* ================================================== */}
      {/* CONTENT */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
            FLIPPCLUB
          </p>

          <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
            STREFY
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Wybierz swój tryb. Flippery, arcade, koparki, Killer Queen, bar albo
            prywatna impreza — sprawdź, co czeka na Ciebie w FlippClubie.
          </p>
        </div>

        {/* ================================================== */}
        {/* ZONES GRID */}
        {/* ================================================== */}

        <div className="mx-auto mt-14 max-w-6xl sm:mt-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((zone) => {
              const styles = accentClasses[zone.accent];

              return (
                <Link
                  key={zone.name}
                  href={zone.href}
                  className={`group flex flex-col overflow-hidden rounded-3xl border-2 bg-surface transition duration-200 hover:-translate-y-1 ${styles.border} ${styles.shadow}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-dark-gray">
                    <Image
                      src="/images/placeholders/placeholder.png"
                      alt={zone.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition duration-200 group-hover:bg-ink/20">
                      <span
                        className={`rounded-full bg-accent px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink opacity-0 transition duration-200 group-hover:opacity-100`}
                      >
                        Wejdź
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <p
                      className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${styles.text}`}
                    >
                      ZONE
                    </p>

                    <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-text sm:text-3xl">
                      {zone.name}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {zone.blurb}
                    </p>

                    <div
                      className={`mt-6 font-mono text-xs font-bold uppercase tracking-[0.15em] transition-colors ${styles.text}`}
                    >
                      SPRAWDŹ STREFĘ →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ================================================== */}
        {/* BOTTOM CTA */}
        {/* ================================================== */}

        <div className="mx-auto mt-16 flex flex-col items-center text-center sm:mt-20">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-muted">
            WHICH ONE?
          </p>

          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">
            Wybierz swoją przygodę
          </h2>

          <Link
            href="/contact"
            className="group mt-7 inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span className="text-xl transition-transform duration-200 group-hover:rotate-12">
              ●
            </span>
            ODEZWIJ SIĘ DO NAS
          </Link>
        </div>
      </div>
    </section>
  );
}
