"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { TetrisDecorations } from "@/components/layout/TetrisDecoration";

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
    <section
      className="
        relative
        z-0
        min-h-screen
        overflow-hidden
        bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)]
        pb-16
        sm:pb-20
        lg:pb-24
      "
    >
      {/* ================================================== */}
      {/* TETRIS DECORATIONS */}
      {/* ================================================== */}

      <TetrisDecorations />

      {/* ================================================== */}
      {/* CONTENT */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
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
            <h1 className="mt-3 font-display text-[clamp(3.5rem,16vw,8rem)] font-extrabold uppercase leading-[0.85] tracking-tight text-primary">
              O NAS
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <div className="relative mx-auto mt-7 max-w-3xl">
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
                  px-5
                  py-5
                  shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                  [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  sm:px-8
                  sm:py-6
                "
              >
                <p className="text-base leading-relaxed text-[#45454d] sm:text-lg">
                  FlippClub to miejsce stworzone dla ludzi, którzy lubią dobrą
                  zabawę, rywalizację i powrót do klasyki. Wchodzisz, wybierasz
                  swoją grę i po prostu grasz.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ================================================== */}
        {/* INTRO */}
        {/* ================================================== */}

        <div className="mx-auto mt-16 grid max-w-5xl items-center gap-10 sm:mt-20 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-xl">
              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-4
                  -right-4
                  h-full
                  w-full
                  rounded-3xl
                  bg-primary
                "
              />

              <div
                className="
                  relative
                  z-10
                  overflow-hidden
                  rounded-3xl
                  border-2
                  border-accent
                  bg-[#010522]
                "
              >
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
          <Reveal
            delay={140}
            className="mx-auto w-full max-w-xl text-center md:mx-0 md:text-left"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
              WHO WE ARE
            </p>

            <h2 className="mt-3 font-display text-[clamp(2rem,6vw,3rem)] font-extrabold uppercase leading-tight tracking-tight text-primary">
              Więcej niż
              <br />
              salon gier.
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
                  px-5
                  py-5
                  text-left
                  shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                  [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  sm:px-8
                  sm:py-6
                "
              >
                <p className="text-base leading-relaxed text-[#45454d] sm:text-lg">
                  Chcieliśmy stworzyć miejsce, do którego samemu wpada się na
                  szybką rundę, ale równie dobrze można przyjść z całą ekipą i
                  zostać na dłużej.
                </p>
              </div>
            </div>

            <div className="relative mt-5">
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
                  px-5
                  py-5
                  text-left
                  shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                  [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  sm:px-8
                  sm:py-6
                "
              >
                <p className="text-base leading-relaxed text-[#45454d] sm:text-lg">
                  Dlatego połączyliśmy klimat klasycznych salonów gier z
                  nowoczesną przestrzenią, w której można spotkać się ze
                  znajomymi, rywalizować i po prostu dobrze spędzić czas.
                </p>
              </div>
            </div>

            <p className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-primary sm:text-sm">
              PLAY • COMPETE • REPEAT
            </p>
          </Reveal>
        </div>

        {/* ================================================== */}
        {/* VALUES */}
        {/* ================================================== */}

        <div className="mx-auto mt-24 max-w-5xl sm:mt-28">
          <Reveal>
            <div className="text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
                GAME RULES
              </p>

              <h2 className="mt-3 font-display text-[clamp(2.3rem,7vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-pink">
                Jak gramy?
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {/* Card 01 */}
            <Reveal delay={0} className="h-full">
              <div
                className="
                  relative
                  h-full
                  border-2
                  border-primary
                  bg-[#010522]
                  p-6
                  shadow-[5px_6px_0_var(--color-accent)]
                "
              >
                <p className="font-mono text-xs font-bold text-primary">01</p>

                <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">
                  Dobra zabawa
                </h3>

                <div className="relative mt-4">
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      translate-x-1
                      translate-y-1
                      bg-primary
                      [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]
                    "
                  />

                  <div
                    className="
                      relative
                      bg-[#f1f1ee]
                      px-4
                      py-4
                      text-left
                      shadow-[inset_4px_4px_8px_0px_rgba(0,0,0,0.5)]
                      [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]
                    "
                  >
                    <p className="text-sm leading-relaxed text-[#45454d]">
                      Bez napinki. Liczy się atmosfera, wspólna gra i dobra
                      zabawa.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 02 */}
            <Reveal delay={120} className="h-full">
              <div
                className="
                  relative
                  h-full
                  border-2
                  border-accent
                  bg-[#010522]
                  p-6
                  shadow-[5px_6px_0_var(--color-primary)]
                "
              >
                <p className="font-mono text-xs font-bold text-accent">02</p>

                <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">
                  Zdrowa rywalizacja
                </h3>

                <div className="relative mt-4">
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      translate-x-1
                      translate-y-1
                      bg-accent
                      [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]
                    "
                  />

                  <div
                    className="
                      relative
                      bg-[#f1f1ee]
                      px-4
                      py-4
                      text-left
                      shadow-[inset_4px_4px_8px_0px_rgba(0,0,0,0.5)]
                      [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]
                    "
                  >
                    <p className="text-sm leading-relaxed text-[#45454d]">
                      Wynik ma znaczenie. Ale jeszcze ważniejsze jest to, z kim
                      grasz.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 03 */}
            <Reveal delay={240} className="h-full">
              <div
                className="
                  relative
                  h-full
                  border-2
                  border-pink
                  bg-[#010522]
                  p-6
                  shadow-[5px_6px_0_var(--color-primary)]
                "
              >
                <p className="font-mono text-xs font-bold text-pink">03</p>

                <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">
                  Zero nudy
                </h3>

                <div className="relative mt-4">
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      translate-x-1
                      translate-y-1
                      bg-pink
                      [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]
                    "
                  />

                  <div
                    className="
                      relative
                      bg-[#f1f1ee]
                      px-4
                      py-4
                      text-left
                      shadow-[inset_4px_4px_8px_0px_rgba(0,0,0,0.5)]
                      [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]
                    "
                  >
                    <p className="text-sm leading-relaxed text-[#45454d]">
                      Klasyczne automaty, różne strefy i ciągle coś nowego do
                      odkrycia.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ================================================== */}
        {/* EXPERIENCE */}
        {/* ================================================== */}

        <Reveal>
          <div className="mx-auto mt-24 max-w-4xl text-center sm:mt-28">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent sm:text-sm">
              PLAYER EXPERIENCE
            </p>

            <h2 className="mt-3 font-display text-[clamp(3rem,10vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-blue">
              Wpadasz.
              <br />
              <span className="text-primary">Grasz.</span>
              <br />
              Wracasz.
            </h2>

            <div className="relative mx-auto mt-7 max-w-2xl">
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
                  px-5
                  py-5
                  text-left
                  shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                  [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  sm:px-8
                  sm:py-6
                "
              >
                <p className="text-base leading-relaxed text-[#45454d] sm:text-lg">
                  Niezależnie od tego, czy przychodzisz na chwilę, organizujesz
                  imprezę dla ekipy, czy chcesz po prostu sprawdzić, kto ma
                  najlepszy wynik — u nas zawsze znajdziesz powód, żeby wrócić.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================================================== */}
        {/* CTA */}
        {/* ================================================== */}

        <Reveal>
          <div className="mx-auto mt-24 flex max-w-3xl flex-col items-center text-center sm:mt-28">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-primary">
              READY PLAYER ONE?
            </p>

            <h2 className="mt-3 font-display text-[clamp(3rem,10vw,5rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-pink">
              GAME ON.
            </h2>

            <div className="relative mt-7 max-w-xl">
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
                  px-5
                  py-5
                  shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                  [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  sm:px-8
                  sm:py-6
                "
              >
                <p className="text-base leading-relaxed text-[#45454d] sm:text-lg">
                  Zbierz ekipę, wybierz strefę i wpadaj pograć.
                </p>
              </div>
            </div>

            <div className="relative mt-8 inline-flex">
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
        </Reveal>
      </div>
    </section>
  );
}
