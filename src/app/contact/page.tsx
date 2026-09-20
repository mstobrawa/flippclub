"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { SocialLinks } from "@/components/layout/SocialLinks";
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

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)]">
      <TetrisDecorations />

      <section className="relative z-20 px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <Reveal className="flex flex-col items-center text-center">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.22em] text-accent sm:text-base">
              PLAYER SUPPORT
            </p>

            <h1 className="mt-3 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Kontakt
            </h1>

            <div className="relative mt-8 w-full max-w-3xl text-left">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
              />

              <div className="relative bg-[#f1f1ee] px-6 py-5 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6">
                <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                  Masz pytania? Chcesz zarezerwować miejsce na imprezę albo
                  dowiedzieć się więcej o naszym klubie? Napisz, zadzwoń lub
                  odwiedź nas na miejscu.
                </p>
              </div>
            </div>
          </Reveal>

          {/* CONTACT + MAP */}
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-10">
            {/* CONTACT DATA */}
            <Reveal delay={100}>
              <div className="h-full border-2 border-accent bg-[#010522] p-6 text-center shadow-[8px_8px_0_var(--color-primary)] sm:p-8">
                <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent">
                  ZNAJDŹ NAS
                </p>

                <h2 className="mt-3 font-display text-3xl font-black uppercase text-white sm:text-4xl">
                  FLIPPCLUB
                </h2>

                <div className="mt-8 space-y-6">
                  {/* ADDRESS */}
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                      ADRES
                    </p>

                    <p className="mt-2 text-lg font-semibold leading-relaxed text-white sm:text-xl">
                      Orzeszkowej 2B
                      <br />
                      41-103 Siemianowice Śląskie
                    </p>
                  </div>

                  {/* PHONE */}
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                      TELEFON
                    </p>

                    <a
                      href="tel:+48508465061"
                      className="mt-2 inline-block text-lg font-bold text-accent transition-colors hover:text-primary sm:text-xl"
                    >
                      508 465 061
                    </a>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                      E-MAIL
                    </p>

                    <a
                      href="mailto:flippclubsiemianowice@gmail.com"
                      className="mt-2 inline-block break-all text-base font-bold text-accent transition-colors hover:text-primary sm:text-lg"
                    >
                      flippclubsiemianowice@gmail.com
                    </a>
                  </div>

                  {/* SOCIAL */}
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                      SOCIAL MEDIA
                    </p>

                    <div className="mt-4 flex justify-center">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* MAP */}
            <Reveal delay={180}>
              <div className="h-full min-h-[420px] overflow-hidden border-2 border-accent bg-[#010522] shadow-[8px_8px_0_var(--color-primary)] sm:min-h-[500px]">
                <iframe
                  title="Lokalizacja FlippClub"
                  src="https://www.google.com/maps?q=Orzeszkowej%202B,%2041-103%20Siemianowice%20Śląskie&output=embed"
                  className="h-full min-h-[420px] w-full border-0 sm:min-h-[500px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* CLUB PHOTO */}
          <Reveal
            className="mx-auto mt-14 w-full max-w-5xl sm:mt-18 lg:mt-20"
            delay={260}
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  translate-x-3
                  translate-y-3
                  rounded-3xl
                  bg-accent
                "
              />

              <div
                className="
                  relative
                  z-10
                  overflow-hidden
                  rounded-3xl
                  border-4
                  border-accent
                  bg-[#010522]
                "
              >
                <Image
                  src="/images/club.webp"
                  alt="FlippClub - klub flipperowy w Siemianowicach Śląskich"
                  width={1600}
                  height={1000}
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal
            className="mt-16 flex flex-col items-center text-center sm:mt-20"
            delay={320}
          >
            <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-white/60">
              MASZ PYTANIE?
            </p>

            <h2 className="mt-3 font-display text-3xl font-black uppercase text-white sm:text-4xl lg:text-5xl">
              Odezwij się do nas
            </h2>

            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+48508465061"
                className="
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  border-2
                  border-ink
                  bg-accent
                  px-8
                  py-3
                  font-display
                  text-lg
                  font-black
                  uppercase
                  tracking-tight
                  text-ink
                  transition
                  hover:bg-primary
                  hover:text-white
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-primary
                "
              >
                Zadzwoń
              </a>

              <a
                href="mailto:flippclubsiemianowice@gmail.com"
                className="
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  border-2
                  border-accent
                  bg-transparent
                  px-8
                  py-3
                  font-display
                  text-lg
                  font-black
                  uppercase
                  tracking-tight
                  text-accent
                  transition
                  hover:bg-accent
                  hover:text-ink
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-primary
                "
              >
                Napisz e-mail
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
