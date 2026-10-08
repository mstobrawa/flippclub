"use client";

import Image from "next/image";
import { useState } from "react";

export default function ExcavatorsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    "/images/koparki/kop1.webp",
    "/images/koparki/kop2.webp",
    "/images/koparki/kop3.webp",
    "/images/koparki/kop4.webp",
    "/images/koparki/kop5.webp",
    "/images/koparki/kop6.webp",
    "/images/koparki/kop7.webp",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      <div
        aria-hidden="true"
        className="tape-reveal pointer-events-none absolute left-[-2%] top-[3.7%] z-10 hidden w-[40%] lg:block"
        style={{ animationDelay: "150ms" }}
      >
        <Image
          src="/images/tapev2.webp"
          alt=""
          width={2100}
          height={600}
          className="h-auto w-full"
        />
      </div>

      <div
        aria-hidden="true"
        className="tape-reveal pointer-events-none absolute right-[-2%] top-[3.7%] z-10 hidden w-[40%] lg:block"
        style={{ animationDelay: "300ms" }}
      >
        <Image
          src="/images/tapev2.webp"
          alt=""
          width={2100}
          height={600}
          className="h-auto w-full"
        />
      </div>

      <div
        aria-hidden="true"
        className="tape-reveal pointer-events-none absolute left-[-12%] top-[27%] z-10 hidden w-[125%] rotate-[-15deg] lg:block"
        style={{ animationDelay: "450ms" }}
      >
        <Image
          src="/images/tapev2.webp"
          alt=""
          width={2100}
          height={600}
          className="h-auto w-full"
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="relative z-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="page-reveal font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
              RC
            </p>

            <h1
              className="page-reveal mt-3 font-display text-[clamp(3.5rem,14vw,9rem)] font-extrabold uppercase leading-[0.85] tracking-tight"
              style={{ animationDelay: "100ms" }}
            >
              <span className="text-accent">K</span>
              <span className="text-white">O</span>
              <span className="text-accent">P</span>
              <span className="text-white">A</span>
              <span className="text-accent">R</span>
              <span className="text-white">K</span>
              <span className="text-accent">I</span>
            </h1>

            <div
              className="page-reveal-up mx-auto mt-7 max-w-3xl"
              style={{ animationDelay: "220ms" }}
            >
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-2 translate-y-2 bg-accent [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
                />

                <div className="relative bg-[#f1f1ee] px-6 py-5 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6">
                  <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                    Mały plac budowy, wielka frajda. Steruj zdalnie koparkami,
                    spychaczami i ciężarówkami i sprawdź, kto najlepiej poradzi
                    sobie na naszym placu budowy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-6xl sm:mt-18 lg:mt-20">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {images.map((item, imageIndex) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedImage(imageIndex)}
                  aria-label={`Powiększ zdjęcie ${imageIndex + 1}`}
                  style={{
                    animationDelay: `${350 + imageIndex * 110}ms`,
                  }}
                  className={`page-image-reveal group relative overflow-hidden rounded-2xl border-2 border-accent/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-accent ${
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
                      alt={`Strefa koparek ${imageIndex + 1}`}
                      fill
                      sizes={
                        imageIndex === 0
                          ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
              ))}
            </div>
          </div>
        </div>
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
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl font-bold text-ink transition hover:bg-primary hover:text-on-ink focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ×
          </button>

          <div
            className="relative max-h-[90vh] w-full max-w-5xl cursor-pointer overflow-hidden rounded-2xl border-4 border-accent bg-dark-gray shadow-[8px_10px_0_var(--color-primary)]"
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src={images[selectedImage]}
              alt={`Strefa koparek ${selectedImage + 1}`}
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
