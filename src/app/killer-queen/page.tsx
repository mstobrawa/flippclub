"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function KillerQueenPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [1, 2, 3, 4];

  return (
    <section className="relative overflow-hidden bg-background">
      {/* ================================================== */}
      {/* KILLER QUEEN DECORATIONS */}
      {/* ================================================== */}

      {/* Large yellow hex - top left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-15 top-[10%] z-0 hidden h-36 w-36 rotate-12 bg-accent lg:block"
        style={{
          clipPath:
            "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%)",
        }}
      />

      {/* Purple inner hex */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-18 top-[11.5%] z-0 hidden h-28 w-28 rotate-12 bg-background lg:block"
        style={{
          clipPath:
            "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%)",
        }}
      />

      {/* Large blue hex - top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-22 top-[17%] z-0 hidden h-32 w-32 -rotate-12 bg-blue lg:block"
        style={{
          clipPath:
            "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%)",
        }}
      />

      {/* Small yellow hex - upper right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[9%] top-[8%] z-0 hidden h-10 w-10 rotate-12 bg-accent lg:block"
        style={{
          clipPath:
            "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%)",
        }}
      />

      {/* Large purple hex - left of gallery */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-45 top-[46%] z-0 hidden h-28 w-28 -rotate-12 bg-primary lg:block"
        style={{
          clipPath:
            "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%)",
        }}
      />

      {/* Large yellow hex - right of gallery */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-16 top-[55%] z-0 hidden h-36 w-36 rotate-12 bg-accent lg:block"
        style={{
          clipPath:
            "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%)",
        }}
      />

      {/* Small blue hex - lower left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] bottom-[14%] z-0 hidden h-8 w-8 rotate-12 bg-blue lg:block"
        style={{
          clipPath:
            "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%)",
        }}
      />

      {/* Small purple hex - lower right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] bottom-[10%] z-0 hidden h-7 w-7 -rotate-12 bg-primary lg:block"
        style={{
          clipPath:
            "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%)",
        }}
      />

      {/* ================================================== */}
      {/* CONTENT */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Logo + intro */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
            STREFA MULTIPLAYER
          </p>

          <div className="mx-auto mt-5 max-w-4xl">
            <Image
              src="/images/killer_queen/logo-kq.png"
              alt="Killer Queen"
              width={1200}
              height={300}
              priority
              className="mx-auto h-auto w-full rounded-4xl"
            />
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Jedyna taka atrakcja w Europie. Dziesięciu graczy, dwie drużyny i
            jedna arena. Killer Queen to szybka, pełna chaosu gra 5 vs 5, w
            której liczy się refleks, współpraca i dobra strategia.
            <span className="font-semibold text-text">
              {" "}
              5 na 5. Szał pał. Zero taryfy ulgowej.
            </span>
          </p>
        </div>

        {/* ================================================== */}
        {/* TEAMS */}
        {/* ================================================== */}

        <div className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
            {/* Gold Team */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-accent/50 bg-surface p-6 text-center shadow-[6px_7px_0_var(--color-accent)] transition duration-200 hover:-translate-y-1 hover:border-accent">
              <Image
                src="/images/killer_queen/gteam.png"
                alt="The Gold Team"
                width={600}
                height={500}
                className="mx-auto h-auto max-h-64 w-auto object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* VS */}
            <div
              aria-hidden="true"
              className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-ink font-display text-xl font-extrabold uppercase text-accent shadow-[5px_6px_0_var(--color-primary)]"
            >
              VS
            </div>

            {/* Blue Team */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-blue/40 bg-surface p-6 text-center shadow-[6px_7px_0_var(--color-blue)] transition duration-200 hover:-translate-y-1 hover:border-blue">
              <Image
                src="/images/killer_queen/bteam.png"
                alt="The Blue Team"
                width={600}
                height={500}
                className="mx-auto h-auto max-h-64 w-auto object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* GALLERY */}
        {/* ================================================== */}

        <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="mb-7 text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
              ZOBACZ AKCJĘ
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSelectedImage(item)}
                aria-label={`Powiększ zdjęcie ${item}`}
                className={`group relative z-10 overflow-hidden rounded-2xl border-2 border-primary/30 bg-dark-gray text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-200 hover:-translate-y-1 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
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
                    alt={`Killer Queen ${item}`}
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

        {/* ================================================== */}
        {/* CTA */}
        {/* ================================================== */}

        <div className="mt-14 flex flex-col items-center gap-6 sm:mt-16">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span className="text-xl transition-transform duration-200 group-hover:rotate-12">
              ●
            </span>
            WEJDŹ DO EPICKIEJ ROZGRYWKI
          </Link>

          <Link
            href="/zones"
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            ← POWRÓT DO STREF
          </Link>
        </div>
      </div>

      {/* ================================================== */}
      {/* LIGHTBOX */}
      {/* ================================================== */}

      {selectedImage !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-5 backdrop-blur-sm sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
        >
          {/* Close */}
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
              alt={`Killer Queen ${selectedImage}`}
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
