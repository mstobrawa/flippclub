"use client";

import Link from "next/link";
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

export default function RentalPage() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* BACKGROUND DECORATIONS */}
      {/* ================================================== */}

      {/* Large purple ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-[9%] z-0 hidden h-40 w-40 rounded-full border-[12px] border-primary animate-[decor-float_14s_ease-in-out_infinite] lg:block"
      />

      {/* Large yellow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-[18%] z-0 hidden h-48 w-48 rounded-full border-[12px] border-accent animate-[decor-drift-reverse_16s_ease-in-out_infinite] lg:block"
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[34%] z-0 hidden h-12 w-12 rotate-12 bg-pink animate-[decor-spin-float_11s_ease-in-out_infinite] lg:block"
      />

      {/* Blue diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[43%] z-0 hidden h-14 w-14 rotate-45 bg-blue animate-[decor-drift_13s_ease-in-out_infinite] lg:block"
      />

      {/* Yellow diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-[61%] z-0 hidden h-24 w-24 rotate-45 bg-accent animate-[decor-float_17s_ease-in-out_infinite] lg:block"
      />

      {/* Purple square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-[70%] z-0 hidden h-28 w-28 -rotate-12 bg-primary animate-[decor-drift-reverse_15s_ease-in-out_infinite] lg:block"
      />

      {/* Bottom blue ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] bottom-[7%] z-0 hidden h-28 w-28 rounded-full border-[9px] border-blue animate-[decor-float-small_10s_ease-in-out_infinite] lg:block"
      />

      {/* Small yellow pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-[16%] z-0 hidden h-4 w-4 rotate-45 bg-accent animate-[decor-float-small_8s_ease-in-out_infinite] lg:block"
      />

      {/* Small pink pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[21%] top-[28%] z-0 hidden h-4 w-4 bg-pink animate-[decor-drift_9s_ease-in-out_infinite] lg:block"
      />

      {/* Small purple pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[17%] bottom-[24%] z-0 hidden h-3 w-3 bg-primary animate-[decor-float-small_7s_ease-in-out_infinite] lg:block"
      />

      {/* Small blue pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] bottom-[17%] z-0 hidden h-3 w-3 rotate-45 bg-blue animate-[decor-drift-reverse_8s_ease-in-out_infinite] lg:block"
      />

      {/* ================================================== */}
      {/* LIGHT CONTENT SURFACE */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl rounded-b-[32px] bg-background px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="relative z-30">
          {/* ================================================== */}
          {/* HEADER */}
          {/* ================================================== */}

          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                TAKE THE GAME HOME
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-7xl">
                WYPOŻYCZALNIA
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                Chcesz pograć we własnym domu? Wypożycz wybrany sprzęt i zabierz
                klimat FlippClub ze sobą.
              </p>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* CONTENT PLACEHOLDER */}
          {/* ================================================== */}

          <Reveal className="mx-auto mt-16 max-w-5xl sm:mt-20">
            <div className="relative">
              {/* Offset shadow */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-primary"
              />

              <div className="relative z-10 overflow-hidden rounded-3xl border-2 border-accent bg-surface p-8 sm:p-12 lg:p-16">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    COMING SOON
                  </p>

                  <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                    Gra poza klubem.
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                    Tutaj znajdziesz informacje o sprzęcie dostępnym w naszej
                    wypożyczalni, zasadach wypożyczenia oraz dostępności.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ================================================== */}
          {/* CTA */}
          {/* ================================================== */}

          <Reveal>
            <div className="mx-auto mt-20 flex max-w-2xl flex-col items-center text-center sm:mt-24">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                NEED MORE INFO?
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                Zapytaj nas.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Jeśli chcesz dowiedzieć się więcej o wypożyczeniu, skontaktuj
                się z nami.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span className="text-xl transition-transform duration-200 group-hover:scale-125">
                  ●
                </span>
                ODEZWIJ SIĘ DO NAS
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
