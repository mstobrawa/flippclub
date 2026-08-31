"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ArcadesPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [1, 2, 3, 4];

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative elements */}

      {/* Left upper ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[12%] hidden h-20 w-20 rounded-full border-[8px] border-primary lg:block"
      />

      {/* Right upper ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[18%] hidden h-14 w-14 rounded-full border-[7px] border-accent lg:block"
      />

      {/* Left yellow circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[14%] top-[30%] hidden h-6 w-6 rounded-full bg-accent lg:block"
      />

      {/* Right purple square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] top-[34%] hidden h-7 w-7 rotate-45 bg-primary lg:block"
      />

      {/* Left purple diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[50%] hidden h-5 w-5 rotate-45 bg-primary lg:block"
      />

      {/* Right yellow circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[57%] hidden h-5 w-5 rounded-full bg-accent lg:block"
      />

      {/* Left lower ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-[72%] hidden h-12 w-12 rounded-full border-[6px] border-accent lg:block"
      />

      {/* Right lower ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[17%] top-[78%] hidden h-14 w-14 rounded-full border-[6px] border-primary lg:block"
      />

      {/* Small left pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[22%] top-[20%] hidden h-3 w-3 rotate-12 bg-primary lg:block"
      />

      {/* Small right pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[21%] top-[25%] hidden h-3 w-3 rotate-45 bg-accent lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
            STREFA GIER ARCADE
          </p>

          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-primary sm:text-6xl lg:text-8xl">
            ARCADE
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Klasyczne automaty arcade, kultowe gry i mnóstwo dobrej zabawy.
          </p>
        </div>

        {/* Gallery */}
        <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSelectedImage(item)}
                aria-label={`Powiększ zdjęcie ${item}`}
                className={`group relative overflow-hidden rounded-2xl border-2 border-primary/30 bg-dark-gray text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-200 hover:-translate-y-1 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                  item === 1
                    ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    item === 1 ? "aspect-[4/3]" : "aspect-square"
                  }`}
                >
                  <Image
                    src="/images/placeholders/placeholder.png"
                    alt={`Automat arcade ${item}`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition group-hover:bg-ink/20">
                    <span className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink opacity-0 transition group-hover:opacity-100">
                      Powiększ
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-6 sm:mt-16">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span className="text-xl transition-transform duration-200 group-hover:rotate-12">
              ●
            </span>
            INSERT COIN
          </Link>

          <Link
            href="/zones"
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            ← POWRÓT DO STREF
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-5 backdrop-blur-sm sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Zamknij podgląd"
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl font-bold text-ink transition hover:bg-primary hover:text-on-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ×
          </button>

          {/* Enlarged image */}
          <div
            className="relative max-h-[90vh] w-full max-w-5xl cursor-pointer overflow-hidden rounded-2xl border-4 border-accent bg-dark-gray shadow-[8px_10px_0_var(--color-primary)]"
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src="/images/placeholders/placeholder.png"
              alt={`Automat arcade ${selectedImage}`}
              width={1600}
              height={1200}
              className="h-auto max-h-[85vh] w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
