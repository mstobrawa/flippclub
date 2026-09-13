"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type AccessibilityItem = {
  number: string;
  title: string;
  description: string;
  accent: "primary" | "accent" | "pink" | "blue";
};

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

const accessibilityItems: AccessibilityItem[] = [
  {
    number: "01",
    title: "Parter bez barier",
    description:
      "Cały parter FlippClub jest dostępny dla osób poruszających się na wózku. Przestrzeń pozwala na swobodne poruszanie się i korzystanie z dostępnych atrakcji.",
    accent: "primary",
  },
  {
    number: "02",
    title: "Dostosowana toaleta",
    description:
      "Na parterze znajduje się toaleta dostosowana do potrzeb osób z niepełnosprawnościami, z odpowiednią przestrzenią do swobodnego korzystania.",
    accent: "accent",
  },
  {
    number: "03",
    title: "Swobodne poruszanie",
    description:
      "Staramy się, aby przestrzeń była możliwie wygodna i łatwa do poruszania się również dla osób z ograniczoną mobilnością.",
    accent: "pink",
  },
  {
    number: "04",
    title: "Potrzebujesz pomocy?",
    description:
      "Jeżeli przed wizytą chcesz upewnić się, że nasze miejsce odpowiada Twoim potrzebom, skontaktuj się z nami. Chętnie odpowiemy na pytania.",
    accent: "blue",
  },
];

const accentStyles = {
  primary: {
    border: "border-primary",
    number: "text-primary",
    shadow: "shadow-[5px_6px_0_var(--color-accent)]",
  },
  accent: {
    border: "border-accent",
    number: "text-accent",
    shadow: "shadow-[5px_6px_0_var(--color-primary)]",
  },
  pink: {
    border: "border-pink",
    number: "text-pink",
    shadow: "shadow-[5px_6px_0_var(--color-primary)]",
  },
  blue: {
    border: "border-blue",
    number: "text-blue",
    shadow: "shadow-[5px_6px_0_var(--color-accent)]",
  },
};

export default function AccessibilityPage() {
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
        className="pointer-events-none absolute right-[8%] top-[46%] z-0 hidden h-14 w-14 rotate-45 bg-blue animate-[decor-drift_13s_ease-in-out_infinite] lg:block"
      />

      {/* Yellow diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 top-[67%] z-0 hidden h-24 w-24 rotate-45 bg-accent animate-[decor-float_17s_ease-in-out_infinite] lg:block"
      />

      {/* Purple square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-[74%] z-0 hidden h-28 w-28 -rotate-12 bg-primary animate-[decor-drift-reverse_15s_ease-in-out_infinite] lg:block"
      />

      {/* Bottom blue ring */}
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
        className="pointer-events-none absolute right-[21%] top-[29%] z-0 hidden h-4 w-4 bg-pink animate-[decor-drift_9s_ease-in-out_infinite] lg:block"
      />

      {/* Small purple pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[25%] left-[17%] z-0 hidden h-3 w-3 bg-primary animate-[decor-float-small_7s_ease-in-out_infinite] lg:block"
      />

      {/* Small blue pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] bottom-[20%] z-0 hidden h-3 w-3 rotate-45 bg-blue animate-[decor-drift-reverse_8s_ease-in-out_infinite] lg:block"
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
                EVERY PLAYER WELCOME
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-8xl">
                DOSTĘPNOŚĆ
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                Chcemy, żeby FlippClub był miejscem, w którym każdy może dobrze
                spędzić czas. Sprawdź najważniejsze informacje dotyczące
                dostępności naszej przestrzeni.
              </p>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* MAIN INFO */}
          {/* ================================================== */}

          <Reveal className="mx-auto mt-16 max-w-5xl sm:mt-20">
            <div className="relative z-30 border-2 border-primary bg-surface p-7 shadow-[7px_8px_0_var(--color-accent)] sm:p-10">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
                <div className="flex h-20 w-20 items-center justify-center border-2 border-accent bg-background font-display text-4xl font-extrabold text-primary sm:h-24 sm:w-24 sm:text-5xl">
                  ♿
                </div>

                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    PLAYER ACCESS
                  </p>

                  <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                    Parter jest dostępny
                  </h2>

                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                    Osoby poruszające się na wózku mogą korzystać z parteru
                    FlippClub. Zadbaliśmy również o dostosowaną toaletę, aby
                    wizyta była możliwie komfortowa.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ================================================== */}
          {/* ACCESSIBILITY FEATURES */}
          {/* ================================================== */}

          <div className="relative z-30 mx-auto mt-24 max-w-5xl sm:mt-28">
            <Reveal>
              <div className="text-center">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
                  CHECK YOUR ACCESS
                </p>

                <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                  Co warto wiedzieć?
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {accessibilityItems.map((item, index) => {
                const styles = accentStyles[item.accent];

                return (
                  <Reveal
                    key={item.number}
                    delay={index * 120}
                    className="h-full"
                  >
                    <article
                      className={`relative z-10 h-full border-2 bg-surface p-6 transition duration-200 hover:-translate-y-1 sm:p-7 ${styles.border} ${styles.shadow}`}
                    >
                      <p
                        className={`font-mono text-xs font-bold tracking-[0.15em] ${styles.number}`}
                      >
                        {item.number}
                      </p>

                      <h3 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* ================================================== */}
          {/* IMPORTANT NOTE */}
          {/* ================================================== */}

          <Reveal className="mx-auto mt-24 max-w-4xl sm:mt-28">
            <div className="border-2 border-accent bg-surface p-7 shadow-[6px_7px_0_var(--color-primary)] sm:p-9">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                NEED TO KNOW
              </p>

              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">
                Masz konkretne potrzeby?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Jeśli planujesz wizytę i chcesz dowiedzieć się czegoś o
                dostępności konkretnej części naszego lokalu, najlepiej
                skontaktuj się z nami przed przyjazdem. Chętnie podpowiemy i
                odpowiemy na wszystkie pytania.
              </p>
            </div>
          </Reveal>

          {/* ================================================== */}
          {/* CTA */}
          {/* ================================================== */}

          <Reveal>
            <div className="relative z-30 mx-auto mt-24 flex max-w-3xl flex-col items-center text-center sm:mt-28">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-primary">
                NEED MORE INFO?
              </p>

              <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                NAPISZ DO NAS.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Masz pytanie dotyczące dostępności? Odezwij się — pomożemy.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span className="text-xl transition-transform duration-200 group-hover:scale-125">
                  ●
                </span>
                KONTAKT
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
