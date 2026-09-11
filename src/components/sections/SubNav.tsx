"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";

const slides = [
  {
    id: "adult",
    blocks: [
      { top: "18+", bottom: "DOROŚLI" },
      { top: "1 godzina", bottom: "29 ZŁ" },
      { top: "2 godziny", bottom: "49 ZŁ" },
      { top: "3 godziny", bottom: "59 ZŁ" },
    ],
  },
  {
    id: "youth",
    blocks: [
      { top: "-18", bottom: "MŁODSI" },
      { top: "1 godzina", bottom: "25 ZŁ" },
      { top: "2 godziny", bottom: "45 ZŁ" },
      { top: "3 godziny", bottom: "55 ZŁ" },
    ],
  },
  {
    id: "special",
    blocks: [
      { top: "SPECJALNY", bottom: "" },
      { top: "1 godzina", bottom: "22 ZŁ" },
      { top: "2 godziny", bottom: "40 ZŁ" },
      { top: "3 godziny", bottom: "50 ZŁ" },
    ],
  },
  {
    id: "hours",
    blocks: [
      { top: "CZYNNE", bottom: "" },
      { top: "Piątek", bottom: "16–21" },
      { top: "Sobota", bottom: "12–21" },
      { top: "Niedziela", bottom: "12–21" },
    ],
  },
];

export function SubNav() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pt-5 sm:pt-6 lg:pt-8">
      {/* ================================================== */}
      {/* OZDOBNIKI */}
      {/* ================================================== */}

      {/* Lewy pierścień */}
      <div
        aria-hidden="true"
        className="absolute -left-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border-[7px] border-primary/70 sm:-left-10 sm:h-28 sm:w-28 sm:border-[10px]"
      />

      {/* Mała żółta kropka */}
      <div
        aria-hidden="true"
        className="absolute left-[4%] top-2 h-3 w-3 rounded-full bg-accent sm:left-[5%] sm:h-5 sm:w-5"
      />

      {/* Lewa plama */}
      <div
        aria-hidden="true"
        className="absolute -bottom-2 -left-5 h-10 w-16 rounded-t-full bg-primary/20 sm:-left-6 sm:h-16 sm:w-28"
      />

      {/* Prawa fioletowa kropka */}
      <div
        aria-hidden="true"
        className="absolute right-[4%] top-3 h-4 w-4 rounded-full bg-primary sm:right-[5%] sm:top-4 sm:h-6 sm:w-6"
      />

      {/* Prawa żółta plama */}
      <div
        aria-hidden="true"
        className="absolute -right-5 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-accent/40 sm:-right-8 sm:h-24 sm:w-24"
      />

      {/* Prawy pierścień */}
      <div
        aria-hidden="true"
        className="absolute bottom-2 right-[10%] h-7 w-7 rounded-full border-[4px] border-primary/60 sm:bottom-3 sm:right-[12%] sm:h-10 sm:w-10 sm:border-[6px]"
      />

      {/* ================================================== */}
      {/* CONTENT CARD */}
      {/* ================================================== */}

      <Container className="relative z-10">
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-6xl
            rounded-t-4xl
            rounded-b-none
            bg-background
            px-5
            py-8
            shadow-[0_0_0_2px_rgba(255,255,255,0.45),0_0_18px_rgba(255,255,255,0.35),0_0_40px_rgba(13,11,84,0.95),0_0_80px_rgba(13,11,84,0.85),0_0_140px_rgba(1,5,59,0.9)]
            sm:px-8
            sm:py-10
            lg:px-10
            lg:py-12
          "
        >
          <div
            key={slide.id}
            className="grid grid-cols-2 gap-3 animate-[subnav-in_500ms_ease-out] lg:grid-cols-4"
          >
            {slide.blocks.map((block, blockIndex) => {
              const isPurple = blockIndex % 2 === 0;
              const isFirstBlock = blockIndex === 0;

              return (
                <div
                  key={`${slide.id}-${block.top}`}
                  className={`flex h-24 flex-col items-center justify-center rounded-2xl border px-3 py-3 text-center transition-colors duration-500 sm:h-28 sm:px-5 ${
                    isPurple
                      ? "border-primary/35 bg-primary/15"
                      : "border-accent/50 bg-accent/25"
                  }`}
                >
                  <span
                    className={`font-mono font-bold uppercase leading-none tracking-[0.08em] text-text ${
                      isFirstBlock
                        ? "text-3xl sm:text-4xl"
                        : "text-2xl sm:text-3xl"
                    }`}
                  >
                    {block.top}
                  </span>

                  {!isFirstBlock && (
                    <strong className="mt-2 font-display text-xl font-extrabold leading-none tracking-tight text-text sm:text-2xl">
                      {block.bottom}
                    </strong>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
