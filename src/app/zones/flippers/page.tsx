"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { TetrisDecorations } from "@/components/layout/TetrisDecoration";

export default function FlippersPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [1, 2, 3, 4];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* TETRIS DECORATIONS */}
      {/* ================================================== */}

      <TetrisDecorations />

      {/* ================================================== */}
      {/* FLIPPER BALLS */}
      {/* ================================================== */}

      <Image
        src="/images/flipper-ball.png"
        alt=""
        width={160}
        height={160}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[6%]
          top-[24%]
          z-10
          hidden
          w-[90px]
          rotate-12
          animate-[decor-drift_12s_ease-in-out_infinite]
          lg:block
          xl:w-[110px]
        "
      />

      <Image
        src="/images/flipper-ball.png"
        alt=""
        width={160}
        height={160}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-[35%]
          z-10
          hidden
          w-[70px]
          -rotate-12
          animate-[decor-drift-reverse_14s_ease-in-out_infinite]
          lg:block
          xl:w-[90px]
        "
      />

      <Image
        src="/images/flipper-ball.png"
        alt=""
        width={200}
        height={200}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[16%]
          top-[68%]
          z-10
          hidden
          w-18
          rotate-45
          animate-[decor-spin-float_15s_ease-in-out_infinite]
          lg:block
          xl:w-28
        "
      />

      {/* ================================================== */}
      {/* MAIN CONTENT */}
      {/* ================================================== */}

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        {/* ================================================== */}
        {/* HEADING */}
        {/* ================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          <h1
            className="
              page-reveal
              font-display
              text-[clamp(3.5rem,14vw,9rem)]
              font-extrabold
              uppercase
              leading-[0.85]
              tracking-tight
              text-primary
            "
          >
            FLIPPERY
          </h1>

          <div className="page-reveal-up mx-auto mt-7 max-w-2xl">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
              />

              <div className="relative bg-[#f1f1ee] px-6 py-5 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6">
                <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                  Od klasycznych maszyn po nowoczesne tytuły — tutaj każdy
                  znajdzie coś dla siebie.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* GALLERY */}
        {/* ================================================== */}

        <div className="mx-auto mt-14 max-w-6xl sm:mt-18 lg:mt-20">
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
                  border-primary/50
                  bg-[#010522]
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
                    alt={`Flipper ${item}`}
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
        {/* INTRO / PINBALL VIBE */}
        {/* ================================================== */}

        <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2 translate-y-2 bg-accent [clip-path:polygon(2%_0,100%_0,98%_100%,0_100%)]"
            />

            <div className="relative bg-[#f1f1ee] px-6 py-7 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(2%_0,100%_0,98%_100%,0_100%)] sm:px-10 sm:py-8">
              <p className="text-center font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-2xl">
                Odbijaj, kombinuj, zdobywaj punkty.
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-center text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                Klasyczne flippery to nie tylko nostalgia. To szybka akcja,
                refleks i rywalizacja, w której każda kolejna piłeczka może
                zmienić wynik.
              </p>
            </div>
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
          <div className="relative inline-flex">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2 translate-y-2 bg-accent [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
            />

            <Link
              href="/contact"
              className="
                relative
                inline-flex
                min-h-14
                items-center
                justify-center
                bg-primary
                px-7
                py-4
                font-mono
                text-sm
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
                transition
                duration-200
                hover:-translate-y-1
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-accent
                [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
              "
            >
              NAPISZ DO NAS →
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
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Zamknij podgląd"
            className="
              absolute
              right-5
              top-5
              z-10
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-accent
              text-2xl
              font-bold
              text-ink
              transition
              hover:bg-primary
              hover:text-on-ink
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-accent
            "
          >
            ×
          </button>

          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-5xl
              cursor-pointer
              overflow-hidden
              rounded-2xl
              border-4
              border-accent
              bg-dark-gray
              shadow-[8px_10px_0_var(--color-primary)]
            "
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
