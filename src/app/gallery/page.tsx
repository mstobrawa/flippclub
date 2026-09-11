"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* BACKGROUND DECORATIONS */}
      {/* ================================================== */}

      {/* Large purple ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-[8%] z-0 hidden h-40 w-40 rounded-full border-[12px] border-primary lg:block"
      />

      {/* Large yellow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-[17%] z-0 hidden h-48 w-48 rounded-full border-[12px] border-accent lg:block"
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[6%] top-[30%] z-0 hidden h-12 w-12 rotate-12 bg-pink lg:block"
      />

      {/* Blue diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[7%] top-[37%] z-0 hidden h-14 w-14 rotate-45 bg-blue lg:block"
      />

      {/* Large yellow diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-[55%] z-0 hidden h-24 w-24 rotate-45 bg-accent lg:block"
      />

      {/* Large purple square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-[64%] z-0 hidden h-28 w-28 -rotate-12 bg-primary lg:block"
      />

      {/* Bottom ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8%] left-[7%] z-0 hidden h-28 w-28 rounded-full border-[9px] border-blue lg:block"
      />

      {/* Bottom yellow pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[12%] right-[13%] z-0 hidden h-8 w-8 rotate-45 bg-accent lg:block"
      />

      {/* Small yellow pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-[18%] z-0 hidden h-4 w-4 rotate-45 bg-accent lg:block"
      />

      {/* Small pink pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[21%] top-[25%] z-0 hidden h-4 w-4 bg-pink lg:block"
      />

      {/* Small purple pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[27%] left-[18%] z-0 hidden h-3 w-3 bg-primary lg:block"
      />

      {/* Small blue pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[22%] right-[19%] z-0 hidden h-3 w-3 rotate-45 bg-blue lg:block"
      />

      {/* ================================================== */}
      {/* LIGHT CONTENT SURFACE */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl rounded-b-[32px] bg-background px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* ================================================== */}
        {/* CONTENT */}
        {/* ================================================== */}

        <div className="relative z-30">
          {/* ================================================== */}
          {/* HEADER */}
          {/* ================================================== */}

          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
              INSERT COIN • PRESS START
            </p>

            <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
              GALERIA
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Zajrzyj do środka i zobacz, jak wygląda FlippClub. Automaty,
              klasyki, rywalizacja i dużo dobrej zabawy.
            </p>
          </div>

          {/* ================================================== */}
          {/* GALLERY */}
          {/* ================================================== */}

          <div className="mx-auto mt-14 max-w-6xl sm:mt-20">
            <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:gap-5 md:grid-cols-4 lg:auto-rows-[240px]">
              {images.map((item) => {
                const layoutClasses = [
                  "col-span-2 row-span-2",
                  "col-span-1 row-span-1",
                  "col-span-1 row-span-2",
                  "col-span-1 row-span-1",
                  "col-span-1 row-span-2",
                  "col-span-2 row-span-1",
                  "col-span-1 row-span-1",
                  "col-span-1 row-span-1",
                  "col-span-2 row-span-2",
                  "col-span-1 row-span-1",
                  "col-span-1 row-span-2",
                  "col-span-2 row-span-1",
                ];

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    aria-label={`Powiększ zdjęcie ${item}`}
                    className={`group relative overflow-hidden rounded-2xl border-2 border-primary/30 bg-dark-gray text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[7px_8px_0_var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${layoutClasses[item - 1]}`}
                  >
                    <Image
                      src="/images/placeholders/placeholder.png"
                      alt={`FlippClub galeria ${item}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition duration-300 group-hover:bg-ink/30">
                      <span className="translate-y-2 rounded-full bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        Powiększ
                      </span>
                    </div>

                    {/* Image number */}
                    <span className="absolute bottom-3 left-3 bg-ink/80 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-on-ink opacity-0 transition duration-200 group-hover:opacity-100">
                      #{String(item).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================================================== */}
          {/* GALLERY FOOTER */}
          {/* ================================================== */}

          <div className="mx-auto mt-16 max-w-3xl text-center sm:mt-20">
            <div className="mx-auto flex items-center justify-center gap-4">
              <div className="hidden h-px flex-1 bg-border sm:block" />

              <p className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
                PLAYER VIEW
              </p>

              <div className="hidden h-px flex-1 bg-border sm:block" />
            </div>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Kliknij dowolne zdjęcie, żeby zobaczyć je w pełnym rozmiarze.
            </p>
          </div>

          {/* ================================================== */}
          {/* CTA */}
          {/* ================================================== */}

          <div className="relative z-30 mx-auto mt-24 flex max-w-3xl flex-col items-center text-center sm:mt-28">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-accent">
              READY?
            </p>

            <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
              GAME ON.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Zobaczyłeś już wszystko. Teraz czas wpaść i zagrać.
            </p>

            <Link
              href="/contact"
              className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              MASZ PYTANIA? NAPISZ DO NAS →
            </Link>
          </div>
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
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Zamknij podgląd"
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl font-bold text-ink transition hover:bg-primary hover:text-on-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-8 sm:top-8"
          >
            ×
          </button>

          {/* Enlarged image */}
          <div
            className="relative max-h-[90vh] w-full max-w-6xl cursor-pointer overflow-hidden rounded-2xl border-4 border-accent bg-dark-gray shadow-[8px_10px_0_var(--color-primary)]"
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src="/images/placeholders/placeholder.png"
              alt={`FlippClub galeria ${selectedImage}`}
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
