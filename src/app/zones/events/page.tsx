"use client";

import Image from "next/image";
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
      className={`${visible ? "page-reveal-visible" : "page-reveal-hidden"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [1, 2, 3, 4, 5, 6];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* BACKGROUND DECORATIONS */}
      {/* ================================================== */}

      {/* Large purple ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-[8%] z-0 hidden h-40 w-40 rounded-full border-[12px] border-primary animate-[decor-float_14s_ease-in-out_infinite] lg:block"
      />

      {/* Large yellow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-[15%] z-0 hidden h-48 w-48 rounded-full border-[12px] border-accent animate-[decor-drift-reverse_16s_ease-in-out_infinite] lg:block"
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[7%] top-[27%] z-0 hidden h-12 w-12 rotate-12 bg-pink animate-[decor-spin-float_11s_ease-in-out_infinite] lg:block"
      />

      {/* Blue diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[34%] z-0 hidden h-14 w-14 rotate-45 bg-blue animate-[decor-drift_13s_ease-in-out_infinite] lg:block"
      />

      {/* Large yellow diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 top-[52%] z-0 hidden h-24 w-24 rotate-45 bg-accent animate-[decor-float_15s_ease-in-out_infinite] lg:block"
      />

      {/* Large purple square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-[61%] z-0 hidden h-28 w-28 -rotate-12 bg-primary animate-[decor-drift-reverse_17s_ease-in-out_infinite] lg:block"
      />

      {/* Bottom blue ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8%] left-[7%] z-0 hidden h-28 w-28 rounded-full border-[9px] border-blue animate-[decor-float-small_10s_ease-in-out_infinite] lg:block"
      />

      {/* Bottom yellow pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[10%] right-[12%] z-0 hidden h-8 w-8 rotate-45 bg-accent animate-[decor-spin-float_9s_ease-in-out_infinite] lg:block"
      />

      {/* Arcade pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-[18%] z-0 hidden h-4 w-4 rotate-45 bg-accent animate-[decor-float-small_8s_ease-in-out_infinite] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[21%] top-[24%] z-0 hidden h-4 w-4 bg-pink animate-[decor-drift-reverse_10s_ease-in-out_infinite] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[25%] left-[17%] z-0 hidden h-3 w-3 bg-primary animate-[decor-float-small_7s_ease-in-out_infinite] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[20%] right-[18%] z-0 hidden h-3 w-3 rotate-45 bg-blue animate-[decor-spin-float_9s_ease-in-out_infinite] lg:block"
      />

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
        <div className="relative z-30">
          {/* ================================================== */}
          {/* HEADER */}
          {/* ================================================== */}

          <div className="mx-auto max-w-4xl text-center">
            <Reveal delay={0}>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                EVENT MODE
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
                IMPREZY
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                Urodziny? Integracja? Wieczór kawalerski?{" "}
                <span className="font-bold text-text">Say no more.</span> Wiemy,
                czego Ci trzeba, a sala już czeka. Prywatny room z wygodnymi
                kanapami dla Ciebie i Twojej ekipy — idealna baza na wspólny
                wieczór.
              </p>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* HERO ROOM */}
          {/* ================================================== */}

          <div className="mx-auto mt-16 grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16 sm:mt-20">
            <Reveal delay={0}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 z-0 h-full w-full rounded-3xl bg-primary"
                />

                <div className="relative z-10 overflow-hidden rounded-3xl border-2 border-accent bg-surface">
                  <Image
                    src="/images/placeholders/placeholder.png"
                    alt="Prywatny room FlippClub"
                    width={1000}
                    height={750}
                    className="h-auto w-full -rotate-2 object-cover transition duration-300 hover:rotate-0"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="max-w-xl">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  YOUR PARTY BASE
                </p>

                <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                  Twój room.
                  <br />
                  Twoja ekipa.
                </h2>

                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                  Zamykasz drzwi i zaczyna się Wasza impreza. Prywatna
                  przestrzeń, wygodne kanapy i miejsce tylko dla Was. Możecie
                  pogadać, odpocząć, coś przekąsić i po prostu dobrze spędzić
                  czas.
                </p>

                <p className="mt-5 font-mono text-sm font-bold uppercase tracking-[0.12em] text-primary">
                  PRIVATE ROOM • YOUR CREW • YOUR RULES
                </p>
              </div>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* RESPAWN POINT */}
          {/* ================================================== */}

          <div className="relative mx-auto mt-24 max-w-5xl sm:mt-28">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-[20px] border-accent/20 animate-[decor-float_18s_ease-in-out_infinite] lg:block"
            />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <Reveal>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-primary sm:text-sm">
                  CHECKPOINT
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="text-primary">RESPAWN</span>{" "}
                  <span className="text-accent">POINT</span>
                </h2>
              </Reveal>

              <Reveal delay={180}>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  Tu zaczynacie. Tu wracacie. Tu łapiecie oddech między
                  kolejnymi rundami. Room jest Waszą bazą, a kiedy przyjdzie
                  ochota na grę — po prostu wychodzicie i ruszacie do stref.
                </p>
              </Reveal>

              <Reveal delay={280}>
                <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                  {["PLAYER 1", "PLAYER 2", "PLAYER 3", "PLAYER 4"].map(
                    (player) => (
                      <div
                        key={player}
                        className="group border-2 border-primary/20 bg-surface px-3 py-3 text-center font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-primary shadow-[3px_4px_0_var(--color-accent)] transition duration-200 hover:-translate-y-1 hover:border-accent hover:bg-primary hover:text-on-ink hover:shadow-[4px_5px_0_var(--color-accent)]"
                      >
                        <span className="group-hover:hidden">{player}</span>

                        <span className="hidden group-hover:inline">
                          INSERT COIN
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          {/* ================================================== */}
          {/* GALLERY */}
          {/* ================================================== */}

          <div className="mx-auto mt-24 max-w-5xl sm:mt-28">
            <Reveal>
              <div className="mb-8 text-center">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  TWOJA BAZA
                </p>

                <h2 className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">
                  Zobacz, gdzie się spotkacie
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {images.map((item, imageIndex) => (
                <Reveal key={item} delay={imageIndex * 90}>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    aria-label={`Powiększ zdjęcie ${item}`}
                    className={`group relative w-full overflow-hidden rounded-2xl border-2 border-primary/30 bg-dark-gray text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-200 hover:-translate-y-1 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                      item === 1
                        ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2"
                        : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        item === 1 ? "aspect-[4/3]" : "aspect-square"
                      }`}
                    >
                      <Image
                        src="/images/placeholders/placeholder.png"
                        alt={`Imprezy FlippClub ${item}`}
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
                </Reveal>
              ))}
            </div>
          </div>

          {/* ================================================== */}
          {/* PARTY TYPES */}
          {/* ================================================== */}

          <div className="mx-auto mt-24 max-w-5xl sm:mt-28">
            <Reveal>
              <div className="text-center">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  GAME MODE SELECT
                </p>

                <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                  Wybierz swój tryb
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal delay={0}>
                <div className="h-full border-2 border-accent bg-surface p-6 shadow-[5px_6px_0_var(--color-primary)]">
                  <p className="font-mono text-xs font-bold text-accent">01</p>

                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase">
                    Urodziny
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Zbierz ekipę i zróbcie urodzinową rundę, której nie
                    zapomnicie.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={90}>
                <div className="h-full border-2 border-primary bg-surface p-6 shadow-[5px_6px_0_var(--color-accent)]">
                  <p className="font-mono text-xs font-bold text-primary">02</p>

                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase">
                    Integracja
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Oderwijcie się od biurek i spędźcie razem trochę czasu poza
                    pracą.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="h-full border-2 border-pink bg-surface p-6 shadow-[5px_6px_0_var(--color-primary)]">
                  <p className="font-mono text-xs font-bold text-pink">03</p>

                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase">
                    Wieczór
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Kawalerski, panieński albo po prostu wieczór ze znajomymi.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={270}>
                <div className="h-full border-2 border-blue bg-surface p-6 shadow-[5px_6px_0_var(--color-blue)]">
                  <p className="font-mono text-xs font-bold text-blue">04</p>

                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase">
                    Wasz tryb
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Nie ma na liście? Tym lepiej. Powiedzcie nam, co planujecie.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ================================================== */}
          {/* READY */}
          {/* ================================================== */}

          <Reveal>
            <div className="mx-auto mt-24 flex max-w-3xl flex-col items-center text-center sm:mt-28">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-accent">
                READY?
              </p>

              <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                GAME ON.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Zbierz ekipę, wybierz termin i daj nam znać. Resztę ogarniemy
                razem.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span className="text-xl transition-transform duration-200 group-hover:scale-125">
                  ●
                </span>
                ZAREZERWUJ IMPREZĘ
              </Link>
            </div>
          </Reveal>
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
              alt={`Imprezy FlippClub ${selectedImage}`}
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
