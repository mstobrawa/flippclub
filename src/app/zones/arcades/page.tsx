"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ArcadesPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [1, 2, 3, 4];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* DECORATIONS */}
      {/* ================================================== */}

      {/* Left upper ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[12%]
          z-20
          hidden
          h-20
          w-20
          rounded-full
          border-[8px]
          border-primary
          animate-[decor-float_11s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Right upper ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[6%]
          top-[18%]
          z-20
          hidden
          h-14
          w-14
          rounded-full
          border-[7px]
          border-accent
          animate-[decor-drift-reverse_13s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Left yellow circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[14%]
          top-[30%]
          z-20
          hidden
          h-6
          w-6
          rounded-full
          bg-accent
          animate-[decor-float-small_9s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Right purple square */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[34%]
          z-20
          hidden
          h-7
          w-7
          rotate-45
          bg-primary
          animate-[decor-spin-float_12s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Left purple diamond */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[50%]
          z-20
          hidden
          h-5
          w-5
          rotate-45
          bg-primary
          animate-[decor-spin-float_10s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Right yellow circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[57%]
          z-20
          hidden
          h-5
          w-5
          rounded-full
          bg-accent
          animate-[decor-float-small_8s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Left lower ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[72%]
          z-20
          hidden
          h-12
          w-12
          rounded-full
          border-[6px]
          border-accent
          animate-[decor-float_14s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Right lower ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[17%]
          top-[78%]
          z-20
          hidden
          h-14
          w-14
          rounded-full
          border-[6px]
          border-primary
          animate-[decor-drift-reverse_12s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Small left pixel */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[22%]
          top-[20%]
          z-20
          hidden
          h-3
          w-3
          rotate-12
          bg-primary
          animate-[decor-drift_10s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Small right pixel */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[21%]
          top-[25%]
          z-20
          hidden
          h-3
          w-3
          rotate-45
          bg-accent
          animate-[decor-spin-float_11s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* ================================================== */}
      {/* NEON GLOW */}
      {/* ================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          bottom-[-35px]
          z-0
          w-full
          max-w-7xl
          -translate-x-1/2
          rounded-b-[36px]
          bg-[#0d0b54]
          opacity-100
          blur-[55px]
          shadow-[0_0_100px_35px_rgba(13,11,84,0.95),0_0_160px_55px_rgba(1,5,59,0.9)]
          sm:blur-[65px]
          sm:shadow-[0_0_120px_40px_rgba(13,11,84,0.98),0_0_190px_65px_rgba(1,5,59,0.95)]
        "
      />

      {/* ================================================== */}
      {/* MAIN LIGHT SURFACE */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl rounded-b-[32px] bg-background px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* ================================================== */}
        {/* CONTENT */}
        {/* ================================================== */}

        <div className="relative z-10">
          {/* ================================================== */}
          {/* HEADING */}
          {/* ================================================== */}

          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="
                page-reveal
                font-display
                text-5xl
                font-extrabold
                uppercase
                tracking-tight
                text-primary
                sm:text-6xl
                lg:text-8xl
              "
            >
              ARCADE
            </h1>

            <p
              className="
                page-reveal-up
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-relaxed
                text-muted
              "
              style={{ animationDelay: "180ms" }}
            >
              Klasyczne automaty arcade, kultowe gry i mnóstwo dobrej zabawy.
            </p>
          </div>

          {/* ================================================== */}
          {/* GALLERY */}
          {/* ================================================== */}

          <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {images.map((item, imageIndex) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`Powiększ zdjęcie ${item}`}
                  style={{
                    animationDelay: `${300 + imageIndex * 110}ms`,
                  }}
                  className={`
                    page-image-reveal
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border-2
                    border-primary/30
                    bg-dark-gray
                    text-left
                    shadow-[6px_7px_0_var(--color-primary)]
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary
                    hover:shadow-[8px_10px_0_var(--color-primary)]
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-primary
                    ${
                      item === 1
                        ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2"
                        : ""
                    }
                  `}
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
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition duration-300 group-hover:bg-ink/20">
                      <span className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink opacity-0 transition duration-300 group-hover:opacity-100">
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

          <div
            className="
              page-reveal-up
              mt-14
              flex
              flex-col
              items-center
              gap-6
              sm:mt-16
            "
            style={{ animationDelay: "750ms" }}
          >
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
