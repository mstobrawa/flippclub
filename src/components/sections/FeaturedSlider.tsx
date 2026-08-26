"use client";

import Link from "next/link";
import { useCallback, useState, type KeyboardEvent } from "react";
import { slides } from "@/config/slider";
import { Container } from "@/components/ui/Container";

/**
 * Featured slider directly below the header.
 *
 * - Exactly one slide is visible at a time (crossfade, not a carousel track).
 * - Every slide is a full-bleed link (`<Link>` wraps the slide content).
 * - Prev/Next buttons and dots live outside the link so they never create
 *   nested interactive elements.
 * - Arrow keys move to the previous/next slide when focus is anywhere
 *   inside the slider.
 *
 * Slide content comes entirely from `src/config/slider.ts` — add a slide
 * there and it appears here automatically.
 */
export function FeaturedSlider() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured zones"
      onKeyDown={handleKeyDown}
      className="relative z-10 -mt-7 sm:-mt-9"
    >
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-ink text-on-ink shadow-xl h-[440px] sm:h-[460px] lg:h-[500px]">
          {/* Decorative organic cutout — purely visual, sits behind the
             content and pokes toward the header. The sticky header (z-50)
             always renders above this, so nav links stay fully clickable. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 z-0 h-20 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent sm:h-28 sm:w-56 lg:h-32 lg:w-72"
          />

          {slides.map((slide, i) => {
            const isActive = i === index;
            return (
              <Link
                key={slide.id}
                href={slide.href}
                aria-hidden={!isActive}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}: ${slide.title}`}
                tabIndex={isActive ? 0 : -1}
                className={`absolute inset-0 z-[1] flex flex-col justify-end gap-3 p-6 transition-opacity duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary sm:p-10 lg:p-14 ${
                  isActive ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                {/* Image placeholder — swap for next/image once real
                   photography lands in /public/images/hero. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-ink via-ink to-primary/30"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(248,202,31,0.25),transparent_55%)]"
                />

                {slide.label ? (
                  <span className="mb-1 inline-flex w-fit items-center rounded-pill bg-accent px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                    {slide.label}
                  </span>
                ) : null}
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-on-ink/80 sm:text-base">
                  {slide.description}
                </p>
                {slide.accent ? (
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    {slide.accent}
                  </span>
                ) : null}
              </Link>
            );
          })}

          {/* Controls sit above the slide links (higher z-index) as
             independent buttons, so they never nest inside a <Link>. */}
          <div className="absolute inset-x-0 bottom-0 z-[2] flex items-center justify-between gap-4 p-4 sm:p-6">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-on-ink/10 text-on-ink backdrop-blur transition-colors hover:bg-on-ink/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowIcon direction="left" />
            </button>

            <div className="flex items-center gap-2 rounded-pill bg-on-ink/10 px-3 py-1.5 backdrop-blur">
              <span className="font-mono text-xs text-on-ink/80">
                <span className="text-on-ink">{index + 1}</span> / {total}
              </span>
              <div className="ml-1 hidden items-center gap-1.5 sm:flex">
                {slides.map((slide, i) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-pill transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      i === index ? "w-5 bg-primary" : "w-1.5 bg-on-ink/30 hover:bg-on-ink/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-on-ink/10 text-on-ink backdrop-blur transition-colors hover:bg-on-ink/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-5 w-5 ${direction === "left" ? "" : "rotate-180"}`}
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
