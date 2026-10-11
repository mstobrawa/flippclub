"use client";

import Image from "next/image";
import { useState } from "react";

import TetrisDecoration from "@/components/layout/TetrisDecoration";
import Reveal from "@/components/ui/Reveal";

export default function FlippersPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    "/images/flippers/flip1.webp",
    "/images/flippers/flip2.webp",
    "/images/flippers/flip3.webp",
    "/images/flippers/flip4.webp",
    "/images/flippers/flip5.webp",
    "/images/flippers/flip6.webp",
    "/images/flippers/flip7.webp",
    "/images/flippers/flip8.webp",
    "/images/flippers/flip9.webp",
    "/images/flippers/flip10.webp",
    "/images/flippers/flip11.webp",
    "/images/flippers/flip12.webp",
    "/images/flippers/flip13.webp",
    "/images/flippers/flip14.webp",
    "/images/flippers/flip15.webp",
    "/images/flippers/flip16.webp",
    "/images/flippers/flip17.webp",
    "/images/flippers/flip18.webp",
    "/images/flippers/flip19.webp",
    "/images/flippers/flip20.webp",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      <TetrisDecoration />

      <Image
        src="/images/flipper-ball.webp"
        alt=""
        width={160}
        height={160}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[6%]
          top-[45%]
          z-10
          hidden
          w-22.5
          rotate-12
          animate-[decor-drift_12s_ease-in-out_infinite]
          lg:block
          xl:w-27.5
        "
      />

      <Image
        src="/images/flipper-ball.webp"
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
          w-17.5
          -rotate-12
          animate-[decor-drift-reverse_14s_ease-in-out_infinite]
          lg:block
          xl:w-22.5
        "
      />

      <Image
        src="/images/flipper-ball.webp"
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

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h1
              className="
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
          </Reveal>

          <Reveal delay={180}>
            <div className="mx-auto mt-7 max-w-2xl">
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
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-6xl sm:mt-18 lg:mt-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((item, imageIndex) => (
              <Reveal key={item} delay={imageIndex * 80}>
                <button
                  type="button"
                  onClick={() => setSelectedImage(imageIndex)}
                  aria-label={`Powiększ zdjęcie ${imageIndex + 1}`}
                  className={`group relative h-full w-full overflow-hidden rounded-2xl border-2 border-primary/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-primary ${
                    imageIndex === 0
                      ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2"
                      : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      imageIndex === 0 ? "aspect-4/3" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={item}
                      alt={`Flipper ${imageIndex + 1}`}
                      fill
                      sizes={
                        imageIndex === 0
                          ? "(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(50vw - 34px), 560px"
                          : "(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(50vw - 34px), 270px"
                      }
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition duration-300 group-hover:bg-ink/20">
                      <span className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink opacity-0 transition duration-300 group-hover:opacity-100">
                        Powiększ
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={180}>
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
        </Reveal>
      </div>

      {selectedImage !== null ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/90 p-5 backdrop-blur-sm sm:p-8"
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
              src={images[selectedImage]}
              alt={`Flipper ${selectedImage + 1}`}
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
