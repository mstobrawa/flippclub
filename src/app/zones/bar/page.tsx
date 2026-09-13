"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BarPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [1, 2, 3, 4];

  return (
    <section className="relative z-0 overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* NEON GLOW */}
      {/* ================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-35px] left-1/2 top-0 z-0 w-full max-w-7xl -translate-x-1/2 rounded-b-[36px] bg-[#0d0b54] opacity-100 blur-[55px] shadow-[0_0_100px_35px_rgba(13,11,84,0.95),0_0_160px_55px_rgba(1,5,59,0.9)] sm:blur-[65px] sm:shadow-[0_0_120px_40px_rgba(13,11,84,0.98),0_0_190px_65px_rgba(1,5,59,0.95)]"
      />

      {/* ================================================== */}
      {/* MAIN LIGHT SURFACE */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl rounded-b-[32px] bg-background px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
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
            h-44
            w-44
            rounded-full
            border-[12px]
            border-accent
            animate-[decor-drift-reverse_16s_ease-in-out_infinite]
            lg:block
          "
        />

        {/* Large pink square - left */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[5%]
            top-[32%]
            z-20
            hidden
            h-12
            w-12
            rotate-12
            bg-pink
            animate-[decor-spin-float_11s_ease-in-out_infinite]
            lg:block
          "
        />

        {/* Purple diamond - right */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[7%]
            top-[39%]
            z-20
            hidden
            h-14
            w-14
            rotate-45
            bg-primary
            animate-[decor-drift_13s_ease-in-out_infinite]
            lg:block
          "
        />

        {/* Large yellow ring - left of gallery */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-10
            top-[53%]
            z-20
            hidden
            h-28
            w-28
            rounded-full
            border-[9px]
            border-accent
            animate-[decor-float-small_10s_ease-in-out_infinite]
            lg:block
          "
        />

        {/* Large blue ring - right of gallery */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-8
            top-[60%]
            z-20
            hidden
            h-24
            w-24
            rounded-full
            border-[8px]
            border-blue
            animate-[decor-drift-reverse_12s_ease-in-out_infinite]
            lg:block
          "
        />

        {/* Large purple square - bottom left */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[13%]
            left-[9%]
            z-20
            hidden
            h-9
            w-9
            -rotate-12
            bg-primary
            animate-[decor-float-small_9s_ease-in-out_infinite]
            lg:block
          "
        />

        {/* Large yellow diamond - bottom right */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[10%]
            right-[12%]
            z-20
            hidden
            h-10
            w-10
            rotate-45
            bg-accent
            animate-[decor-spin-float_12s_ease-in-out_infinite]
            lg:block
          "
        />

        {/* Small arcade pixels */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[18%]
            top-[24%]
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

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[20%]
            top-[28%]
            z-20
            hidden
            h-4
            w-4
            rotate-12
            bg-pink
            animate-[decor-drift-reverse_10s_ease-in-out_infinite]
            lg:block
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[28%]
            left-[17%]
            z-20
            hidden
            h-3
            w-3
            bg-blue
            animate-[decor-float-small_7s_ease-in-out_infinite]
            lg:block
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[24%]
            right-[19%]
            z-20
            hidden
            h-3
            w-3
            rotate-45
            bg-primary
            animate-[decor-spin-float_9s_ease-in-out_infinite]
            lg:block
          "
        />

        {/* ================================================== */}
        {/* CONTENT */}
        {/* ================================================== */}

        <div className="relative z-30">
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
              <span className="text-accent">B</span>
              <span className="text-text">A</span>
              <span className="text-primary">R</span>
            </h1>

            <p
              className="page-reveal-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: "220ms" }}
            >
              Uzupełnij życie i manę. Złap przekąskę, napój i wracaj do gry. W
              naszym barze znajdziesz klasyki, które znasz od lat — od
              legendarnych gum Turbo po oranżadę w woreczku i wiele innych.
            </p>
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

              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                Złap coś na ząb
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                Między jedną rundą a drugą trzeba czasem naładować baterie.
                Wpadnij do baru po coś zimnego, słodkiego albo chrupiącego i
                wracaj do zabawy.
              </p>

              <p className="mt-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-primary">
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

              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                Klasyki, które znasz
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                Są rzeczy, które smakują najlepiej właśnie tutaj. Retro
                przekąski, kultowe napoje i małe powroty do dzieciństwa.
                Uzupełnij życie, manę i ruszaj po kolejny rekord.
              </p>
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
            className="page-reveal-up mt-16 flex flex-col items-center gap-6 sm:mt-20"
            style={{ animationDelay: "1350ms" }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span className="text-xl transition-transform duration-200 group-hover:scale-125">
                ●
              </span>
              POWER UP
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
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl font-bold text-ink transition hover:bg-primary hover:text-on-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ×
          </button>

          <div
            className="relative max-h-[90vh] w-full max-w-5xl cursor-pointer overflow-hidden rounded-2xl border-4 border-accent bg-dark-gray shadow-[8px_10px_0_var(--color-primary)]"
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src="/images/placeholders/placeholder.png"
              alt={`Bar FlippClub ${selectedImage}`}
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
