"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import TetrisDecoration from "@/components/layout/TetrisDecoration";
import Reveal from "@/components/ui/Reveal";

const galleryImages = [
  "/images/events/event1.webp",
  "/images/events/event2.webp",
  "/images/events/event3.webp",
  "/images/events/event4.webp",
];

function ImageHover() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition duration-300 group-hover:bg-ink/20">
      <span className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink opacity-0 transition duration-300 group-hover:opacity-100">
        Powiększ
      </span>
    </div>
  );
}

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      <TetrisDecoration />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        {/* Nagłówek */}
        <div className="relative z-30 mx-auto max-w-4xl text-center">
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
                  wygodnymi kanapami dla Ciebie i Twojej ekipy — idealna baza na
                  wspólny wieczór.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Prywatny room */}
        <div className="mx-auto mt-16 grid max-w-5xl items-center gap-10 sm:mt-20 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 z-0 h-full w-full rounded-3xl bg-primary"
              />

              <button
                type="button"
                onClick={() => setSelectedImage("/images/events/events.webp")}
                aria-label="Powiększ zdjęcie prywatnego roomu"
                className="group relative z-10 block w-full overflow-hidden rounded-3xl border-2 border-accent bg-[#010522] text-left focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <Image
                  src="/images/events/events.webp"
                  alt="Prywatny room FlippClub"
                  width={1000}
                  height={750}
                  className="h-auto w-full -rotate-2 object-cover transition duration-500 group-hover:rotate-0 group-hover:scale-105"
                />
                <ImageHover />
              </button>
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
                    Prywatna przestrzeń, wygodne kanapy i miejsce tylko dla Was.
                    Room pomieści około 15–16 osób. Możecie pogadać, odpocząć,
                    coś przekąsić i po prostu dobrze spędzić czas.
                  </p>
                </div>
              </div>

              <p className="mt-7 font-mono text-sm font-bold uppercase tracking-[0.12em] text-primary">
                PRIVATE ROOM • YOUR CREW • YOUR RULES
              </p>
            </div>
          </Reveal>
        </div>

        {/* Galeria zdjęć 1–4 */}
        <div className="mx-auto mt-20 max-w-5xl sm:mt-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((src, index) => (
              <Reveal key={src} delay={index * 80} className="h-full">
                <button
                  type="button"
                  onClick={() => setSelectedImage(src)}
                  aria-label={`Powiększ zdjęcie ${index + 1}`}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl border-2 border-primary/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={src}
                      alt={`Imprezy we FlippClub — zdjęcie ${index + 1}`}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(50vw - 34px), 240px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <ImageHover />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Zdjęcie 7 i opis */}
        <div className="mx-auto mt-20 grid max-w-5xl items-center gap-8 sm:mt-24 md:grid-cols-2 md:gap-12">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-primary"
              />

              <button
                type="button"
                onClick={() => setSelectedImage("/images/events/event7.webp")}
                aria-label="Powiększ zdjęcie roomu"
                className="group relative block w-full overflow-hidden rounded-2xl border-2 border-accent bg-[#010522] text-left focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <Image
                  src="/images/events/event7.webp"
                  alt="Przestrzeń eventowa FlippClub"
                  width={1000}
                  height={750}
                  sizes="(max-width: 767px) calc(100vw - 40px), 480px"
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <ImageHover />
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
              />

              <div className="relative bg-[#f1f1ee] px-6 py-7 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-9">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  MAKE IT YOURS
                </p>

                <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
                  Wasza impreza. Wasze zasady.
                </h2>

                <p className="mt-5 text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                  Szukasz miejsca na spotkanie ze znajomymi w mniejszym gronie?
                  Wygodny space dla około 10 osob to idalne miejsca dla Was!
                  Gry, rozmowy i dobra atmosfera czekają na Was.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
          <Reveal>
            <button
              type="button"
              onClick={() => setSelectedImage("/images/events/event5.webp")}
              aria-label="Powiększ zdjęcie event5"
              className="group relative block w-full overflow-hidden rounded-2xl border-2 border-primary/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src="/images/events/event6.webp"
                  alt="Spotkanie we FlippClub"
                  fill
                  sizes="(max-width: 639px) calc(100vw - 40px), 480px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <ImageHover />
              </div>
            </button>
          </Reveal>

          <Reveal delay={100}>
            <button
              type="button"
              onClick={() => setSelectedImage("/images/events/event7.webp")}
              aria-label="Powiększ dodatkowe zdjęcie roomu"
              className="group relative block w-full overflow-hidden rounded-2xl border-2 border-accent/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src="/images/events/event7.webp"
                  alt="Room eventowy FlippClub"
                  fill
                  sizes="(max-width: 639px) calc(100vw - 40px), 480px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <ImageHover />
              </div>
            </button>
          </Reveal>
        </div>

        {/* GAME MODE SELECT */}
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

        {/* CTA */}
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
                  Zbierz ekipę, wybierz termin i daj nam znać. Resztę ogarniemy
                  razem.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Lightbox — styl jak na stronie Arcade */}
      {selectedImage !== null ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/90 p-5 backdrop-blur-sm sm:p-8"
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
              absolute right-5 top-5 z-10
              flex h-12 w-12 items-center justify-center
              rounded-full bg-accent
              text-2xl font-bold text-ink
              transition
              hover:bg-primary hover:text-on-ink
              focus-visible:outline
              focus-visible:outline-offset-2
              focus-visible:outline-accent
            "
          >
            ×
          </button>

          <div
            className="
              relative max-h-[90vh] w-full max-w-5xl
              cursor-pointer overflow-hidden rounded-2xl
              border-4 border-accent bg-dark-gray
              shadow-[8px_10px_0_var(--color-primary)]
            "
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src={selectedImage}
              alt="Powiększone zdjęcie z FlippClub"
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
