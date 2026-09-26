"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { TetrisDecorations } from "@/components/layout/TetrisDecoration";

type PriceBlock = {
  top: string;
  bottom: string;
};

type PriceCard = {
  label: string;
  blocks: PriceBlock[];
  accent: "primary" | "accent" | "pink";
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

const prices: PriceCard[] = [
  {
    label: "18+ lat",
    accent: "primary",
    blocks: [
      { top: "DOROŚLI", bottom: "" },
      { top: "1 GODZINA", bottom: "29 ZŁ" },
      { top: "2 GODZINY", bottom: "49 ZŁ" },
      { top: "3 GODZINY", bottom: "59 ZŁ" },
    ],
  },
  {
    label: "-18 lat",
    accent: "accent",
    blocks: [
      { top: "MŁODSI", bottom: "" },
      { top: "1 GODZINA", bottom: "25 ZŁ" },
      { top: "2 GODZINY", bottom: "45 ZŁ" },
      { top: "3 GODZINY", bottom: "55 ZŁ" },
    ],
  },
  {
    label: "SPECJALNY",
    accent: "pink",
    blocks: [
      { top: "SPECJALNY", bottom: "" },
      { top: "1 GODZINA", bottom: "22 ZŁ" },
      { top: "2 GODZINY", bottom: "40 ZŁ" },
      { top: "3 GODZINY", bottom: "50 ZŁ" },
    ],
  },
];

const accentStyles = {
  primary: {
    border: "border-primary",
    label: "text-primary",
    shadow: "shadow-[7px_8px_0_var(--color-primary)]",
  },
  accent: {
    border: "border-accent",
    label: "text-accent",
    shadow: "shadow-[7px_8px_0_var(--color-accent)]",
  },
  pink: {
    border: "border-pink",
    label: "text-pink",
    shadow: "shadow-[7px_8px_0_var(--color-pink)]",
  },
};

export default function PricingPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      <TetrisDecorations />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="relative z-20">
          {/* ================================================== */}
          {/* HEADER */}
          {/* ================================================== */}

          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                INSERT COIN
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
                CENNIK
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <div className="relative mx-auto mt-6 max-w-2xl">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
                />

                <div className="relative bg-[#f1f1ee] px-6 py-5 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6">
                  <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                    Wybierz swój czas gry, wrzuć monetę i baw się ile chcesz.
                    Prosto, bez kombinowania.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* PRICING */}
          {/* ================================================== */}

          <div className="relative mx-auto mt-16 max-w-6xl sm:mt-20">
            <div className="relative z-10 grid gap-7 md:grid-cols-3">
              {prices.map((price, index) => {
                const styles = accentStyles[price.accent];

                return (
                  <Reveal key={price.label} delay={index * 120}>
                    <article
                      className={`group relative h-full overflow-hidden rounded-3xl border-2 bg-[#010522] p-6 transition duration-200 hover:-translate-y-1 ${styles.border} ${styles.shadow}`}
                    >
                      {/* Card header */}

                      <div className="border-b-2 border-white/15 pb-5">
                        <p
                          className={`font-display ${
                            price.label === "SPECJALNY"
                              ? "text-4xl sm:text-5xl"
                              : "text-5xl sm:text-6xl"
                          } font-extrabold uppercase tracking-tight ${styles.label}`}
                        >
                          {price.label}
                        </p>

                        <p className="mt-1 font-mono text-sm font-bold uppercase tracking-[0.2em] text-white/60 sm:text-base">
                          {price.blocks[0].top}
                        </p>
                      </div>

                      {/* Prices */}

                      <div className="mt-2">
                        {price.blocks.slice(1).map((block) => (
                          <div
                            key={block.top}
                            className="flex items-end justify-between border-b border-white/15 py-5 last:border-b-0"
                          >
                            <span className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-white/60 sm:text-base">
                              {block.top}
                            </span>

                            <span
                              className={`font-display text-3xl font-extrabold ${styles.label} sm:text-4xl`}
                            >
                              {block.bottom}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Hover detail */}

                      <div className="mt-2 text-center font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 opacity-0 transition duration-200 group-hover:opacity-100">
                        INSERT COIN • PLAY
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* ================================================== */}
          {/* COINS */}
          {/* ================================================== */}

          <Reveal delay={250}>
            <div className="mx-auto mt-20 flex max-w-3xl items-center justify-center gap-6 sm:mt-24">
              <div className="hidden h-px flex-1 bg-white/15 sm:block" />

              <div className="relative w-28 shrink-0 sm:w-36">
                <Image
                  src="/images/coins.png"
                  alt="Monety FlippClub"
                  width={500}
                  height={300}
                  className="h-auto w-full"
                />
              </div>

              <div className="hidden h-px flex-1 bg-white/15 sm:block" />
            </div>
          </Reveal>

          {/* ================================================== */}
          {/* CTA */}
          {/* ================================================== */}

          <Reveal delay={350}>
            <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center text-center sm:mt-20">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                READY?
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
                Wrzuć monetę.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                Wybierz termin i wpadaj na partyjkę. Czekamy na Ciebie.
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
