"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, type KeyboardEvent } from "react";

import { slides } from "@/config/slider";

export function FeaturedSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % total);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Najważniejsze atrakcje"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative z-10 overflow-hidden bg-transparent"
    >
      <div className="relative h-[250px] overflow-hidden bg-transparent sm:h-[280px] lg:h-[300px]">
        {slides.map((slide, i) => {
          const isActive = i === index;

          return (
            <Link
              key={slide.id}
              href={slide.href}
              aria-hidden={!isActive}
              aria-roledescription="slide"
              aria-label={`${i + 1} z ${total}: ${slide.title}`}
              tabIndex={isActive ? 0 : -1}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {/* MOBILE IMAGE */}
              <div className="absolute inset-0 lg:hidden">
                <Image
                  src={slide.imageMobile}
                  alt=""
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#010522]/95 via-[#010522]/75 to-[#010522]/25" />
              </div>

              <div className="mx-auto grid h-full max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
                {/* TEXT */}
                <div className="relative z-20 flex flex-col justify-center px-5 pb-14 pt-14 sm:px-8 lg:px-12 lg:py-8">
                  {slide.label ? (
                    <span
                      className={`mb-3 inline-flex w-fit border border-accent/60 bg-[#010522]/80 px-3 py-1 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-accent backdrop-blur-sm ${slide.labelColor}`}
                    >
                      {slide.label}
                    </span>
                  ) : null}

                  <h2
                    className={`max-w-xl font-display text-4xl font-extrabold leading-[0.9] tracking-[-0.03em] sm:text-5xl lg:text-6xl ${slide.titleColor}`}
                  >
                    {slide.title}
                  </h2>

                  <p className="mt-3 max-w-lg text-sm font-semibold leading-relaxed tracking-[0.01em] text-white/90 sm:text-base lg:text-base">
                    {slide.description}
                  </p>

                  {slide.accent ? (
                    <span
                      className={`mt-4 font-mono text-[10px] font-black uppercase tracking-[0.22em] sm:text-xs ${slide.accentColor}`}
                    >
                      {slide.accent}
                    </span>
                  ) : null}
                </div>

                {/* DESKTOP IMAGE */}
                <div className="relative hidden h-full overflow-hidden lg:block">
                  <Image
                    src={slide.imageDesktop}
                    alt=""
                    fill
                    priority={i === 0}
                    className="scale-[1.03] object-cover object-center"
                    sizes="55vw"
                  />

                  <div className="absolute inset-0 bg-[#010522]/10" />
                </div>
              </div>
            </Link>
          );
        })}

        {/* CONTROLS */}
        <div className="absolute inset-x-0 bottom-0 z-40">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pb-3 sm:px-6 lg:px-12 lg:pb-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Poprzedni slajd"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                border-2
                border-accent
                bg-[#010522]/80
                text-accent
                backdrop-blur
                transition
                hover:bg-accent
                hover:text-ink
                lg:h-10
                lg:w-10
              "
            >
              <ArrowIcon direction="left" />
            </button>

            <div className="flex items-center gap-2 border-2 border-accent/50 bg-[#010522]/85 px-3 py-1.5 text-white backdrop-blur">
              <span className="font-mono text-[10px] font-bold">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>

              <div className="hidden items-center gap-1.5 sm:flex">
                {slides.map((slide, i) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Przejdź do slajdu ${i + 1}: ${slide.title}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-7 bg-accent"
                        : "w-1.5 bg-white/40 hover:bg-primary"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Następny slajd"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                border-2
                border-accent
                bg-[#010522]/80
                text-accent
                backdrop-blur
                transition
                hover:bg-accent
                hover:text-ink
                lg:h-10
                lg:w-10
              "
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 ${direction === "left" ? "" : "rotate-180"}`}
    >
      <path
        d="M15 5l-7 7 7 7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
