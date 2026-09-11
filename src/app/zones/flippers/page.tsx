"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FlippersPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [1, 2, 3, 4];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* DECORATIONS */}
      {/* ================================================== */}

      {/* Left ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[4%] top-[14%] hidden h-20 w-20 rounded-full border-[8px] border-primary lg:block"
      />

      {/* Right ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-[20%] hidden h-14 w-14 rounded-full border-[7px] border-accent lg:block"
      />

      {/* Left small pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-[38%] hidden h-5 w-5 rotate-12 bg-accent lg:block"
      />

      {/* Right small pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] top-[42%] hidden h-6 w-6 rotate-45 bg-primary lg:block"
      />

      {/* Left pink dot */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[6%] top-[64%] hidden h-4 w-4 rounded-full bg-pink lg:block"
      />

      {/* Right blue pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[7%] top-[70%] hidden h-5 w-5 rotate-12 bg-blue lg:block"
      />

      {/* Left lower ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-[78%] hidden h-12 w-12 rounded-full border-[6px] border-primary lg:block"
      />

      {/* Right lower ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-[82%] hidden h-10 w-10 rounded-full border-[5px] border-accent lg:block"
      />

      {/* Flipper balls */}
      <Image
        src="/images/flipper-ball.png"
        alt=""
        width={160}
        height={160}
        aria-hidden="true"
        className="pointer-events-none absolute left-[9%] top-[25%] z-20 hidden w-[90px] rotate-12 lg:block xl:w-[110px]"
      />

      <Image
        src="/images/flipper-ball.png"
        alt=""
        width={160}
        height={160}
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[34%] z-20 hidden w-[70px] -rotate-12 lg:block xl:w-[90px]"
      />

      <Image
        src="/images/flipper-ball.png"
        alt=""
        width={200}
        height={200}
        aria-hidden="true"
        className="pointer-events-none absolute right-[20%] top-[68%] z-20 hidden w-18 rotate-45 lg:block xl:w-28"
      />

      {/* ================================================== */}
      {/* NEON GLOW */}
      {/* ================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 bottom-[-35px] w-full max-w-7xl -translate-x-1/2 rounded-b-[36px] bg-[#0d0b54] opacity-100 blur-[55px] shadow-[0_0_100px_35px_rgba(13,11,84,0.95),0_0_160px_55px_rgba(1,5,59,0.9)] sm:blur-[65px] sm:shadow-[0_0_120px_40px_rgba(13,11,84,0.98),0_0_190px_65px_rgba(1,5,59,0.95)]"
      />

      {/* ================================================== */}
      {/* MAIN LIGHT SURFACE */}
      {/* ================================================== */}

      <div className="relative mx-auto w-full max-w-7xl rounded-b-[32px] bg-background px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* ================================================== */}
        {/* HEADING */}
        {/* ================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-extrabold uppercase tracking-tight text-primary sm:text-6xl lg:text-8xl">
            FLIPPERY
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Od klasycznych maszyn po nowoczesne tytuły — tutaj każdy znajdzie
            coś dla siebie.
          </p>
        </div>

        {/* ================================================== */}
        {/* GALLERY */}
        {/* ================================================== */}

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
                    alt={`Flipper ${item}`}
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
            INSERT COIN
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
              alt={`Flipper ${selectedImage}`}
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
