"use client";

import Link from "next/link";
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

type OpeningDay = {
  label: string;
  day: string;
  hours: string;
  accent: "primary" | "accent" | "pink";
};

const openingDays: OpeningDay[] = [
  {
    label: "FRIDAY",
    day: "Piątek",
    hours: "16:00 — 21:00",
    accent: "primary",
  },
  {
    label: "SATURDAY",
    day: "Sobota",
    hours: "12:00 — 21:00",
    accent: "accent",
  },
  {
    label: "SUNDAY",
    day: "Niedziela",
    hours: "12:00 — 21:00",
    accent: "pink",
  },
];

const accentStyles = {
  primary: {
    border: "border-primary",
    label: "text-primary",
    shadow: "shadow-[5px_6px_0_var(--color-accent)]",
  },
  accent: {
    border: "border-accent",
    label: "text-accent",
    shadow: "shadow-[5px_6px_0_var(--color-primary)]",
  },
  pink: {
    border: "border-pink",
    label: "text-pink",
    shadow: "shadow-[5px_6px_0_var(--color-primary)]",
  },
};

export default function OpeningPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* TETRIS DECORATIONS */}
      {/* ================================================== */}

      <TetrisDecorations />

      {/* ================================================== */}
      {/* MAIN CONTENT */}
      {/* ================================================== */}

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="relative z-20">
          {/* ================================================== */}
          {/* HEADER */}
          {/* ================================================== */}

          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                PLAYER SCHEDULE
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
                GODZINY
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <div className="relative mx-auto mt-7 max-w-3xl">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
                />

                <div className="relative bg-[#f1f1ee] px-6 py-5 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6">
                  <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                    Sprawdź, kiedy jesteśmy otwarci i zaplanuj swoją kolejną
                    rundę. Wpadaj wtedy, kiedy Ci pasuje.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* OPENING HOURS */}
          {/* ================================================== */}

          <div className="relative z-30 mx-auto mt-16 max-w-5xl sm:mt-20">
            <div className="grid gap-5 md:grid-cols-3">
              {openingDays.map((item, index) => {
                const styles = accentStyles[item.accent];

                return (
                  <Reveal
                    key={item.label}
                    delay={index * 120}
                    className="h-full"
                  >
                    <article
                      className={`
                        relative
                        z-10
                        h-full
                        border-2
                        bg-[#010522]
                        p-6
                        transition
                        duration-200
                        hover:-translate-y-1
                        sm:p-7
                        ${styles.border}
                        ${styles.shadow}
                      `}
                    >
                      <p
                        className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${styles.label}`}
                      >
                        {item.label}
                      </p>

                      <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                        {item.day}
                      </h2>

                      <div className="mt-6 border-t-2 border-white/15 pt-5">
                        <p
                          className={`font-display text-4xl font-extrabold sm:text-5xl ${styles.label}`}
                        >
                          {item.hours}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* ================================================== */}
          {/* QUICK INFO */}
          {/* ================================================== */}

          <Reveal className="relative z-30 mx-auto mt-24 max-w-4xl sm:mt-28">
            <div className="border-2 border-accent bg-[#010522] p-7 shadow-[6px_7px_0_var(--color-accent)] sm:p-9">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    OPEN FOR PLAY
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                    Wpadnij na rundę.
                  </h2>
                </div>

                <div className="font-mono text-sm leading-relaxed text-white/70 sm:text-base">
                  <p>
                    <span className="font-bold text-white">PT:</span>{" "}
                    16:00–21:00
                  </p>

                  <p className="mt-2">
                    <span className="font-bold text-white">SB:</span>{" "}
                    12:00–21:00
                  </p>

                  <p className="mt-2">
                    <span className="font-bold text-white">ND:</span>{" "}
                    12:00–21:00
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ================================================== */}
          {/* CTA */}
          {/* ================================================== */}

          <Reveal>
            <div className="relative z-30 mx-auto mt-24 flex max-w-3xl flex-col items-center text-center sm:mt-28">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-accent">
                READY?
              </p>

              <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
                WRZUĆ MONETĘ.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Sprawdź, kiedy jesteśmy otwarci i zaplanuj swoją wizytę.
              </p>

              <div className="relative mt-8 inline-flex">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
