"use client";

import Image from "next/image";
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

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [1, 2, 3, 4, 5, 6];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      <TetrisDecorations />

      {/* ================================================== */}
      {/* MAIN CONTENT */}
      {/* ================================================== */}

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="relative z-30">
          {/* ================================================== */}
          {/* HEADER */}
          {/* ================================================== */}

          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                EVENT MODE
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
                IMPREZY
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
                    Urodziny? Integracja? Wieczór kawalerski?{" "}
                    <span className="font-bold text-primary">Say no more.</span>{" "}
                    Wiemy, czego Ci trzeba, a sala już czeka. Prywatny room z
                    wygodnymi kanapami dla Ciebie i Twojej ekipy — idealna baza
                    na wspólny wieczór.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* HERO ROOM */}
          {/* ================================================== */}

          <div className="mx-auto mt-16 grid max-w-5xl items-center gap-10 sm:mt-20 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 z-0 h-full w-full rounded-3xl bg-primary"
                />

                <div className="relative z-10 overflow-hidden rounded-3xl border-2 border-accent bg-[#010522]">
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

                <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-primary sm:text-5xl">
                  Twój room.
                  <br />
                  Twoja ekipa.
                </h2>

                <div className="relative mt-6">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
                  />

                  <div className="relative bg-[#f1f1ee] px-6 py-5 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-7 sm:py-6">
                    <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                      Zamykasz drzwi i zaczyna się Wasza impreza. Prywatna
                      przestrzeń, wygodne kanapy i miejsce tylko dla Was.
                      Możecie pogadać, odpocząć, coś przekąsić i po prostu
                      dobrze spędzić czas.
                    </p>
                  </div>
                </div>

                <p className="mt-7 font-mono text-sm font-bold uppercase tracking-[0.12em] text-primary">
                  PRIVATE ROOM • YOUR CREW • YOUR RULES
                </p>
              </div>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* RESPAWN POINT */}
          {/* ================================================== */}

          <div className="relative mx-auto mt-24 max-w-5xl sm:mt-28">
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <Reveal>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-primary sm:text-sm">
                  CHECKPOINT
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight drop-shadow-[2px_2px_0_#f1f1ee] sm:text-6xl lg:text-7xl">
                  <span className="text-primary">RESPAWN</span>{" "}
                  <span className="text-accent drop-shadow-[2px_2px_0_#010522]">
                    POINT
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={180}>
                <div className="relative mx-auto mt-7 max-w-2xl">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-2 translate-y-2 bg-blue [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]"
                  />

                  <div className="relative bg-[#f1f1ee] px-6 py-5 text-left shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)] sm:px-8 sm:py-6">
                    <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                      Tu zaczynacie. Tu wracacie. Tu łapiecie oddech między
                      kolejnymi rundami. Room jest Waszą bazą, a kiedy przyjdzie
                      ochota na grę — po prostu wychodzicie i ruszacie do stref.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                  {["PLAYER 1", "PLAYER 2", "PLAYER 3", "PLAYER 4"].map(
                    (player) => (
                      <div
                        key={player}
                        className="group border-2 border-primary/20 bg-[#010522] px-3 py-3 text-center font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-primary shadow-[3px_4px_0_var(--color-accent)] transition duration-200 hover:-translate-y-1 hover:border-accent hover:bg-primary hover:text-white hover:shadow-[4px_5px_0_var(--color-accent)]"
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

                <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-primary sm:text-4xl">
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

                <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-primary sm:text-5xl">
                  Wybierz swój tryb
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal>
                <div className="h-full border-2 border-accent bg-[#010522] p-6 shadow-[5px_6px_0_var(--color-primary)]">
                  <p className="font-mono text-xs font-bold text-accent">01</p>

                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">
                    Urodziny
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Zbierz ekipę i zróbcie urodzinową rundę, której nie
                    zapomnicie.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={90}>
                <div className="h-full border-2 border-primary bg-[#010522] p-6 shadow-[5px_6px_0_var(--color-accent)]">
                  <p className="font-mono text-xs font-bold text-primary">02</p>

                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">
                    Integracja
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Oderwijcie się od biurek i spędźcie razem trochę czasu poza
                    pracą.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="h-full border-2 border-pink bg-[#010522] p-6 shadow-[5px_6px_0_var(--color-primary)]">
                  <p className="font-mono text-xs font-bold text-pink">03</p>

                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">
                    Wieczór
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Kawalerski, panieński albo po prostu wieczór ze znajomymi.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={270}>
                <div className="h-full border-2 border-blue bg-[#010522] p-6 shadow-[5px_6px_0_var(--color-blue)]">
                  <p className="font-mono text-xs font-bold text-blue">04</p>

                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">
                    Wasz tryb
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
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

              <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-primary sm:text-6xl lg:text-7xl">
                GAME ON.
              </h2>

              <div className="relative mt-6 max-w-xl">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]"
                />

                <div className="relative bg-[#f1f1ee] px-6 py-5 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)] sm:px-8 sm:py-6">
                  <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                    Zbierz ekipę, wybierz termin i daj nam znać. Resztę
                    ogarniemy razem.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 inline-flex">
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
            className="
              absolute
              right-5
              top-5
              z-10
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-accent
              text-2xl
              font-bold
              text-ink
              transition
              hover:bg-primary
              hover:text-white
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-accent
            "
          >
            ×
          </button>

          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-5xl
              cursor-pointer
              overflow-hidden
              rounded-2xl
              border-4
              border-accent
              bg-dark-gray
              shadow-[8px_10px_0_var(--color-primary)]
            "
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
