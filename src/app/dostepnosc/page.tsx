"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { TetrisDecorations } from "@/components/layout/TetrisDecoration";

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
    offset: "bg-primary",
  },
  accent: {
    border: "border-accent",
    number: "text-accent",
    shadow: "shadow-[5px_6px_0_var(--color-primary)]",
    offset: "bg-accent",
  },
  pink: {
    border: "border-pink",
    number: "text-pink",
    shadow: "shadow-[5px_6px_0_var(--color-primary)]",
    offset: "bg-pink",
  },
  blue: {
    border: "border-blue",
    number: "text-blue",
    shadow: "shadow-[5px_6px_0_var(--color-accent)]",
    offset: "bg-blue",
  },
};

export default function AccessibilityPage() {
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
              EVERY PLAYER WELCOME
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-3 font-display text-[clamp(3rem,12vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-primary">
              DOSTĘPNOŚĆ
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
                  Chcemy, żeby FlippClub był miejscem, w którym każdy może
                  dobrze spędzić czas. Sprawdź najważniejsze informacje
                  dotyczące dostępności naszej przestrzeni.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ================================================== */}
        {/* MAIN INFO */}
        {/* ================================================== */}

        <Reveal className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="text-center">
            <div
              aria-hidden="true"
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                border-2
                border-accent
                bg-[#010522]
                font-display
                text-4xl
                font-extrabold
                text-primary
                shadow-[5px_6px_0_var(--color-primary)]
                sm:h-24
                sm:w-24
                sm:text-5xl
              "
            >
              ♿
            </div>

            <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
              PLAYER ACCESS
            </p>

            <h2 className="mt-3 font-display text-[clamp(2rem,6vw,3rem)] font-extrabold uppercase leading-tight tracking-tight text-primary">
              Parter jest dostępny
            </h2>

            <div className="relative mx-auto mt-6 max-w-3xl">
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

        <div className="mx-auto mt-24 max-w-5xl sm:mt-28">
          <Reveal>
            <div className="text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
                CHECK YOUR ACCESS
              </p>

              <h2 className="mt-3 font-display text-[clamp(2.3rem,7vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-white">
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
                    className={`
                      relative
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
                      className={`
                        font-mono
                        text-xs
                        font-bold
                        tracking-[0.15em]
                        ${styles.number}
                      `}
                    >
                      {item.number}
                    </p>

                    <h3 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-white">
                      {item.title}
                    </h3>

                    <div className="relative mt-5">
                      <div
                        aria-hidden="true"
                        className={`
                          absolute
                          inset-0
                          translate-x-1
                          translate-y-1
                          ${styles.offset}
                          [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]
                        `}
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
                        <p className="text-sm leading-relaxed text-[#45454d] sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
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
          <div className="text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
              NEED TO KNOW
            </p>

            <h2 className="mt-3 font-display text-[clamp(2rem,6vw,3rem)] font-extrabold uppercase leading-tight text-white">
              Masz konkretne potrzeby?
            </h2>

            <div className="relative mx-auto mt-6 max-w-3xl">
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
                  Jeśli planujesz wizytę i chcesz dowiedzieć się czegoś o
                  dostępności konkretnej części naszego lokalu, najlepiej
                  skontaktuj się z nami przed przyjazdem. Chętnie podpowiemy i
                  odpowiemy na wszystkie pytania.
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
              NEED MORE INFO?
            </p>

            <h2 className="mt-3 font-display text-[clamp(3rem,10vw,5rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-pink">
              NAPISZ DO NAS.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Masz pytanie dotyczące dostępności? Odezwij się — pomożemy.
            </p>

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
