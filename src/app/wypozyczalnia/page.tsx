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

export default function RentalPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      <TetrisDecorations />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="relative z-20">
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
              <h1 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-8xl">
                WYPOŻYCZALNIA
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
                    Chcesz pograć we własnym domu? Wypożycz wybrany sprzęt i
                    zabierz klimat FlippClub ze sobą.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* CONTENT */}
          {/* ================================================== */}

          <Reveal className="mx-auto mt-16 max-w-5xl sm:mt-20" delay={280}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-primary"
              />

              <div className="relative z-10 overflow-hidden rounded-3xl border-2 border-accent bg-[#010522] p-8 sm:p-12 lg:p-16">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    COMING SOON
                  </p>

                  <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
                    Gra poza klubem.
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
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

          <Reveal delay={150}>
            <div className="mx-auto mt-20 flex max-w-2xl flex-col items-center text-center sm:mt-24">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                NEED MORE INFO?
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
                Zapytaj nas.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                Jeśli chcesz dowiedzieć się więcej o wypożyczeniu, skontaktuj
                się z nami.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
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
