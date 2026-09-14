"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BarPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [1, 2, 3, 4];

  return (
    <section
      className="
        relative
        z-0
        overflow-hidden
        bg-[length:100%_100%]
        bg-center
        bg-no-repeat
        pb-16
        sm:pb-20
        lg:pb-24
      "
      style={{
        backgroundImage: "url('/images/bgv2.png')",
      }}
    >
      {/* ================================================== */}
      {/* BAR DECORATIONS */}
      {/* ================================================== */}

      {/* Large purple ring - top left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-14
          top-[10%]
          z-20
          hidden
          h-36
          w-36
          rounded-full
          border-[12px]
          border-primary
          animate-[decor-float_14s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Large yellow ring - top right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          top-[14%]
          z-20
          hidden
          h-40
          w-40
          rounded-full
          border-[12px]
          border-accent
          animate-[decor-float_17s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[13%]
          top-[28%]
          z-20
          hidden
          h-7
          w-7
          rotate-12
          bg-pink
          animate-[decor-drift_10s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Blue square */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[40%]
          z-20
          hidden
          h-6
          w-6
          -rotate-12
          bg-blue
          animate-[decor-drift-reverse_12s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Small yellow pixel */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[22%]
          top-[18%]
          z-20
          hidden
          h-4
          w-4
          rotate-45
          bg-accent
          animate-[decor-float-small_8s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Small pink pixel */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[21%]
          top-[24%]
          z-20
          hidden
          h-4
          w-4
          bg-pink
          animate-[decor-drift-reverse_10s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Small purple pixel */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[25%]
          left-[17%]
          z-20
          hidden
          h-3
          w-3
          bg-primary
          animate-[decor-float-small_7s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* Small blue diamond */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[20%]
          right-[18%]
          z-20
          hidden
          h-3
          w-3
          rotate-45
          bg-blue
          animate-[decor-spin-float_9s_ease-in-out_infinite]
          lg:block
        "
      />

      {/* ================================================== */}
      {/* CONTENT */}
      {/* ================================================== */}

      <div className="relative z-30 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          <p
            className="page-reveal font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm"
            style={{ animationDelay: "0ms" }}
          >
            STREFA RELAKSU
          </p>

          <h1
            className="page-reveal mt-3 font-display text-6xl font-extrabold uppercase tracking-tight sm:text-7xl lg:text-9xl"
            style={{ animationDelay: "100ms" }}
          >
            <span className="text-primary">B</span>
            <span className="text-accent">A</span>
            <span className="text-pink">R</span>
          </h1>

          <div
            className="page-reveal-up relative mx-auto mt-7 max-w-3xl"
            style={{ animationDelay: "220ms" }}
          >
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                translate-x-2
                translate-y-2
                bg-primary
                [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
              "
            />

            <div
              className="
                relative
                bg-[#f1f1ee]
                px-6
                py-5
                shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                sm:px-8
                sm:py-6
              "
            >
              <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                Uzupełnij życie i manę. Złap przekąskę, napój i wracaj do gry. W
                naszym barze znajdziesz klasyki, które znasz od lat — od
                legendarnych gum Turbo po oranżadę w woreczku i wiele innych.
              </p>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* BAR SECTION 1 */}
        {/* ================================================== */}

        <div className="mx-auto mt-16 grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div
            className="page-image-reveal relative"
            style={{ animationDelay: "350ms" }}
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl bg-primary"
            />

            <div className="relative overflow-hidden rounded-3xl border-2 border-accent bg-surface">
              <Image
                src="/images/bar/bar1.png"
                alt="Bar FlippClub"
                width={900}
                height={700}
                className="mx-auto h-auto w-full -rotate-2 object-contain transition duration-300 hover:rotate-0"
              />
            </div>
          </div>

          {/* Text */}
          <div
            className="page-reveal-up max-w-xl"
            style={{ animationDelay: "500ms" }}
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
              POWER UP
            </p>

            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
              Złap coś na ząb
            </h2>

            <div className="relative mt-6">
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  translate-x-2
                  translate-y-2
                  bg-accent
                  [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                "
              />

              <div
                className="
                  relative
                  bg-[#f1f1ee]
                  px-6
                  py-5
                  shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                  [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  sm:px-8
                  sm:py-6
                "
              >
                <p className="text-base leading-relaxed text-[#45454d] sm:text-lg">
                  Między jedną rundą a drugą trzeba czasem naładować baterie.
                  Wpadnij do baru po coś zimnego, słodkiego albo chrupiącego i
                  wracaj do zabawy.
                </p>
              </div>
            </div>

            <p className="mt-5 font-mono text-sm font-bold uppercase tracking-[0.12em] text-primary">
              TURBO • ORANŻADA • PRZEKĄSKI • I WIELE WIĘCEJ
            </p>
          </div>
        </div>

        {/* ================================================== */}
        {/* GALLERY */}
        {/* ================================================== */}

        <div className="mx-auto mt-20 max-w-5xl sm:mt-24">
          <div
            className="page-reveal-up mb-8 text-center"
            style={{ animationDelay: "650ms" }}
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
              CO CZAI SIĘ ZA LADĄ?
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((item, imageIndex) => (
              <button
                key={item}
                type="button"
                onClick={() => setSelectedImage(item)}
                aria-label={`Powiększ zdjęcie ${item}`}
                style={{
                  animationDelay: `${750 + imageIndex * 110}ms`,
                }}
                className="page-image-reveal group relative z-30 overflow-hidden rounded-2xl border-2 border-primary/30 bg-dark-gray text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-200 hover:-translate-y-1 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/placeholders/placeholder.png"
                    alt={`Bar FlippClub ${item}`}
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
        {/* BAR SECTION 2 */}
        {/* ================================================== */}

        <div className="mx-auto mt-20 grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16 sm:mt-24">
          {/* Text */}
          <div
            className="page-reveal-up order-2 max-w-xl md:order-1"
            style={{ animationDelay: "1200ms" }}
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
              INSERT COIN
            </p>

            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
              Klasyki, które znasz
            </h2>

            <div className="relative mt-6">
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  translate-x-2
                  translate-y-2
                  bg-blue
                  [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                "
              />

              <div
                className="
                  relative
                  bg-[#f1f1ee]
                  px-6
                  py-5
                  shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                  [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  sm:px-8
                  sm:py-6
                "
              >
                <p className="text-base leading-relaxed text-[#45454d] sm:text-lg">
                  Są rzeczy, które smakują najlepiej właśnie tutaj. Retro
                  przekąski, kultowe napoje i małe powroty do dzieciństwa.
                  Uzupełnij życie, manę i ruszaj po kolejny rekord.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="page-image-reveal relative order-1 md:order-2"
            style={{ animationDelay: "1100ms" }}
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-full w-full rounded-3xl bg-accent"
            />

            <div className="relative overflow-hidden rounded-3xl border-2 border-primary bg-surface">
              <Image
                src="/images/bar/bar2.png"
                alt="Przekąski i napoje w barze FlippClub"
                width={900}
                height={700}
                className="mx-auto h-auto w-full rotate-2 object-contain transition duration-300 hover:rotate-0"
              />
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* CTA */}
        {/* ================================================== */}

        <div
          className="page-reveal-up mx-auto mt-20 max-w-3xl text-center sm:mt-24"
          style={{ animationDelay: "1450ms" }}
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
            GAME ON
          </p>

          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
            Gotowy na kolejną rundę?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Wpadnij do FlippClub, złap coś dobrego i zostań na jeszcze jedną
            partię.
          </p>

          <Link
            href="/contact"
            className="
              mt-7
              inline-flex
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
              text-on-ink
              shadow-[5px_6px_0_var(--color-accent)]
              transition
              duration-200
              hover:-translate-y-1
              hover:shadow-[7px_8px_0_var(--color-accent)]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-accent
            "
          >
            Napisz do nas →
          </Link>
        </div>
      </div>

      {/* ================================================== */}
      {/* LIGHTBOX */}
      {/* ================================================== */}

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-5"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Powiększone zdjęcie"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Zamknij"
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
              bg-accent
              font-mono
              text-xl
              font-bold
              text-ink
              transition
              hover:scale-105
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-accent
            "
          >
            ×
          </button>

          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/images/placeholders/placeholder.png"
              alt={`Bar FlippClub ${selectedImage}`}
              width={1400}
              height={1000}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
