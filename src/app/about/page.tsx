"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        visible ? "page-reveal-visible" : "page-reveal-hidden"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* BACKGROUND DECORATIONS */}
      {/* ================================================== */}

      {/* Large purple ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-[10%] z-0 hidden h-40 w-40 rounded-full border-[12px] border-primary animate-[decor-float_14s_ease-in-out_infinite] lg:block"
      />

      {/* Large yellow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-[20%] z-0 hidden h-48 w-48 rounded-full border-[12px] border-accent animate-[decor-drift-reverse_16s_ease-in-out_infinite] lg:block"
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[7%] top-[38%] z-0 hidden h-12 w-12 rotate-12 bg-pink animate-[decor-spin-float_11s_ease-in-out_infinite] lg:block"
      />

      {/* Blue diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[45%] z-0 hidden h-14 w-14 rotate-45 bg-blue animate-[decor-drift_13s_ease-in-out_infinite] lg:block"
      />

      {/* Yellow diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 top-[65%] z-0 hidden h-24 w-24 rotate-45 bg-accent animate-[decor-float_17s_ease-in-out_infinite] lg:block"
      />

      {/* Purple square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-[72%] z-0 hidden h-28 w-28 -rotate-12 bg-primary animate-[decor-drift-reverse_15s_ease-in-out_infinite] lg:block"
      />

      {/* Bottom ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8%] left-[8%] z-0 hidden h-28 w-28 rounded-full border-[9px] border-blue animate-[decor-float-small_10s_ease-in-out_infinite] lg:block"
      />

      {/* Small yellow pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-[18%] z-0 hidden h-4 w-4 rotate-45 bg-accent animate-[decor-float-small_8s_ease-in-out_infinite] lg:block"
      />

      {/* Small pink pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[21%] top-[30%] z-0 hidden h-4 w-4 bg-pink animate-[decor-drift_9s_ease-in-out_infinite] lg:block"
      />

      {/* Small purple pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[25%] left-[17%] z-0 hidden h-3 w-3 bg-primary animate-[decor-float-small_7s_ease-in-out_infinite] lg:block"
      />

      {/* ================================================== */}
      {/* CONTENT SURFACE — CUSTOM BACKGROUND */}
      {/* ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          rounded-b-[32px]
          bg-cover
          bg-center
          bg-no-repeat
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-20
        "
        style={{
          backgroundImage: "url('/bg.png')",
        }}
      >
        {/* ================================================== */}
        {/* CONTENT */}
        {/* ================================================== */}

        <div className="relative z-30">
          {/* ================================================== */}
          {/* HEADER */}
          {/* ================================================== */}

          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                PLAYER PROFILE
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
                O NAS
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-3xl rounded-xl bg-[#f1f1ee] px-6 py-5 text-base leading-relaxed text-[#45454d] shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] sm:text-lg">
                FlippClub to miejsce stworzone dla ludzi, którzy lubią dobrą
                zabawę, rywalizację i powrót do klasyki. Wchodzisz, wybierasz
                swoją grę i po prostu grasz.
              </p>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* INTRO */}
          {/* ================================================== */}

          <div className="relative z-30 mx-auto mt-16 grid max-w-5xl items-center gap-10 sm:mt-20 md:grid-cols-2 md:gap-16">
            {/* Image */}
            <Reveal>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 z-0 h-full w-full rounded-3xl bg-primary"
                />

                <div className="relative z-10 overflow-hidden rounded-3xl border-2 border-accent bg-surface">
                  <div className="relative aspect-[4/3] bg-dark-gray">
                    <Image
                      src="/images/placeholders/placeholder.png"
                      alt="FlippClub"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={140}>
              <div className="relative z-30 max-w-xl">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  WHO WE ARE
                </p>

                <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-primary sm:text-5xl">
                  Więcej niż
                  <br />
                  salon gier.
                </h2>

                <p className="mt-5 rounded-xl bg-[#f1f1ee] px-6 py-5 text-base leading-relaxed text-[#45454d] shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] sm:text-lg">
                  Chcieliśmy stworzyć miejsce, do którego samemu wpada się na
                  szybką rundę, ale równie dobrze można przyjść z całą ekipą i
                  zostać na dłużej.
                </p>

                <p className="mt-5 rounded-xl bg-[#f1f1ee] px-6 py-5 text-base leading-relaxed text-[#45454d] shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] sm:text-lg">
                  Dlatego połączyliśmy klimat klasycznych salonów gier z
                  nowoczesną przestrzenią, w której można spotkać się ze
                  znajomymi, rywalizować i po prostu dobrze spędzić czas.
                </p>

                <p className="mt-5 font-mono text-sm font-bold uppercase tracking-[0.12em] text-primary">
                  PLAY • COMPETE • REPEAT
                </p>
              </div>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* VALUES */}
          {/* ================================================== */}

          <div className="relative z-30 mx-auto mt-24 max-w-5xl sm:mt-28">
            <Reveal>
              <div className="text-center">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
                  GAME RULES
                </p>

                <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-pink sm:text-5xl">
                  Jak gramy?
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {/* Card 01 */}
              <Reveal delay={0} className="h-full">
                <div className="relative z-10 h-full border-2 border-primary bg-surface p-6 shadow-[5px_6px_0_var(--color-accent)]">
                  <p className="font-mono text-xs font-bold text-primary">01</p>

                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase">
                    Dobra zabawa
                  </h3>

                  <p className="mt-3 rounded-lg bg-[#f1f1ee] px-4 py-4 text-sm leading-relaxed text-[#45454d] shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]">
                    Bez napinki. Liczy się atmosfera, wspólna gra i dobra
                    zabawa.
                  </p>
                </div>
              </Reveal>

              {/* Card 02 */}
              <Reveal delay={120} className="h-full">
                <div className="relative z-10 h-full border-2 border-accent bg-surface p-6 shadow-[5px_6px_0_var(--color-primary)]">
                  <p className="font-mono text-xs font-bold text-accent">02</p>

                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase">
                    Zdrowa rywalizacja
                  </h3>

                  <p className="mt-3 rounded-lg bg-[#f1f1ee] px-4 py-4 text-sm leading-relaxed text-[#45454d] shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]">
                    Wynik ma znaczenie. Ale jeszcze ważniejsze jest to, z kim
                    grasz.
                  </p>
                </div>
              </Reveal>

              {/* Card 03 */}
              <Reveal delay={240} className="h-full">
                <div className="relative z-10 h-full border-2 border-pink bg-surface p-6 shadow-[5px_6px_0_var(--color-primary)]">
                  <p className="font-mono text-xs font-bold text-pink">03</p>

                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase">
                    Zero nudy
                  </h3>

                  <p className="mt-3 rounded-lg bg-[#f1f1ee] px-4 py-4 text-sm leading-relaxed text-[#45454d] shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]">
                    Klasyczne automaty, różne strefy i ciągle coś nowego do
                    odkrycia.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ================================================== */}
          {/* EXPERIENCE */}
          {/* ================================================== */}

          <Reveal>
            <div className="relative z-30 mx-auto mt-24 max-w-4xl text-center sm:mt-28">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent sm:text-sm">
                PLAYER EXPERIENCE
              </p>

              <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-blue sm:text-6xl lg:text-7xl">
                Wpadasz.
                <br />
                <span className="text-primary">Grasz.</span>
                <br />
                Wracasz.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl rounded-xl bg-[#f1f1ee] px-6 py-5 text-base leading-relaxed text-[#45454d] shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] sm:text-lg">
                Niezależnie od tego, czy przychodzisz na chwilę, organizujesz
                imprezę dla ekipy, czy chcesz po prostu sprawdzić, kto ma
                najlepszy wynik — u nas zawsze znajdziesz powód, żeby wrócić.
              </p>
            </div>
          </Reveal>

          {/* ================================================== */}
          {/* CTA */}
          {/* ================================================== */}

          <Reveal>
            <div className="relative z-30 mx-auto mt-24 flex max-w-3xl flex-col items-center text-center sm:mt-28">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-primary">
                READY PLAYER ONE?
              </p>

              <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-pink sm:text-6xl lg:text-7xl">
                GAME ON.
              </h2>

              <p className="mt-5 max-w-xl rounded-xl bg-[#f1f1ee] px-6 py-5 text-base leading-relaxed text-[#45454d] shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] sm:text-lg">
                Zbierz ekipę, wybierz strefę i wpadaj pograć.
              </p>

              <Link
                href="/contact"
                className="mt-6 rounded-lg bg-[#f1f1ee] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#45454d] transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                MASZ PYTANIA? NAPISZ DO NAS →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
