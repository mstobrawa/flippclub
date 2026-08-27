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
      className="relative z-10 overflow-hidden"
    >
      <div className="relative h-[250px] overflow-hidden bg-background sm:h-[280px] lg:h-[300px]">
        <div
          aria-hidden="true"
          className="absolute -left-8 top-10 z-20 hidden h-20 w-20 rounded-full border-[12px] border-primary lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute left-[8%] top-8 z-20 hidden h-7 w-7 rounded-full bg-accent lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-6 left-[18%] z-20 hidden h-10 w-10 rounded-full border-[6px] border-primary lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute left-[43%] top-7 z-20 hidden h-8 w-8 rounded-full bg-primary lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-8 left-[47%] z-20 hidden h-5 w-5 rounded-full bg-accent lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute right-[39%] top-12 z-20 hidden h-12 w-12 rounded-full border-[7px] border-primary/70 lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute -right-10 top-6 z-20 hidden h-24 w-24 rounded-full bg-primary lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute right-[13%] top-7 z-20 hidden h-7 w-7 rounded-full bg-accent lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-5 right-[8%] z-20 hidden h-14 w-14 rounded-full border-[8px] border-accent lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-12 right-[27%] z-20 hidden h-6 w-6 rounded-full bg-primary lg:block"
        />

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
              <div className="absolute inset-0 lg:hidden">
                <Image
                  src={slide.imageMobile}
                  alt=""
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25" />
              </div>

              <div className="mx-auto grid h-full max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative z-10 flex flex-col justify-center px-5 pb-14 pt-14 sm:px-8 lg:px-12 lg:py-8">
                  {slide.label ? (
                    <span
                      className={`mb-3 inline-flex w-fit rounded-full px-3 py-1 font-mono text-[9px] font-black uppercase tracking-[0.2em] ${slide.labelColor}`}
                    >
                      {slide.label}
                    </span>
                  ) : null}

                  <h2
                    className={`max-w-xl font-display text-4xl font-extrabold leading-[0.9] tracking-[-0.03em] sm:text-5xl lg:text-6xl ${slide.titleColor}`}
                  >
                    {slide.title}
                  </h2>

                  <p className="mt-3 max-w-lg text-sm font-semibold leading-relaxed tracking-[0.01em] text-on-ink/95 sm:text-base lg:text-base lg:text-text">
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

                <div className="relative hidden h-full overflow-hidden lg:block">
                  <div className="absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-background via-background/75 to-transparent" />

                  <Image
                    src={slide.imageDesktop}
                    alt=""
                    fill
                    priority={i === 0}
                    className="object-cover object-center"
                    sizes="55vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
                </div>
              </div>
            </Link>
          );
        })}

        <div className="absolute inset-x-0 bottom-0 z-40">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pb-3 sm:px-6 lg:px-12 lg:pb-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Poprzedni slajd"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-on-ink/25 bg-ink/50 text-on-ink backdrop-blur transition hover:scale-105 hover:bg-primary hover:text-ink lg:border-primary/30 lg:bg-surface lg:text-ink"
            >
              <ArrowIcon direction="left" />
            </button>

            <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-ink/55 px-3 py-1.5 text-on-ink backdrop-blur lg:bg-surface lg:text-ink">
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
                        ? "w-7 bg-primary"
                        : "w-1.5 bg-on-ink/40 hover:bg-accent lg:bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Następny slajd"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-on-ink/25 bg-ink/50 text-on-ink backdrop-blur transition hover:scale-105 hover:bg-primary hover:text-ink lg:border-primary/30 lg:bg-surface lg:text-ink"
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
