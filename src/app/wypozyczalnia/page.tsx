"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import TetrisDecorations from "@/components/layout/TetrisDecoration";

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

export default function RentalPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      <TetrisDecorations />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="relative z-20">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                TAKE THE GAME HOME
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-8xl">
                WYPOŻYCZALNIA
              </h1>
            </Reveal>
          </div>

          <Reveal className="mx-auto mt-16 max-w-5xl sm:mt-20" delay={200}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
              />

              <div className="relative overflow-hidden bg-[#010522] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]">
                <Image
                  src="/images/under.webp"
                  alt="FlippClub — Under Construction"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
