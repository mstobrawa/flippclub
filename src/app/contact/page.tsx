"use client";

import { SocialLinks } from "@/components/layout/SocialLinks";
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
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* BACKGROUND DECORATIONS */}
      {/* ================================================== */}

      {/* Large purple ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-[10%] z-0 hidden h-40 w-40 rounded-full border-[12px] border-primary animate-[decor-float_14s_ease-in-out_infinite] lg:block"
      />

      {/* Large yellow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-[18%] z-0 hidden h-48 w-48 rounded-full border-[12px] border-accent animate-[decor-drift-reverse_16s_ease-in-out_infinite] lg:block"
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[7%] top-[34%] z-0 hidden h-12 w-12 rotate-12 bg-pink animate-[decor-spin-float_11s_ease-in-out_infinite] lg:block"
      />

      {/* Blue diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[42%] z-0 hidden h-14 w-14 rotate-45 bg-blue animate-[decor-drift_13s_ease-in-out_infinite] lg:block"
      />

      {/* Yellow diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 top-[60%] z-0 hidden h-24 w-24 rotate-45 bg-accent animate-[decor-float_17s_ease-in-out_infinite] lg:block"
      />

      {/* Purple square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-[68%] z-0 hidden h-28 w-28 -rotate-12 bg-primary animate-[decor-drift-reverse_15s_ease-in-out_infinite] lg:block"
      />

      {/* Bottom blue ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8%] left-[8%] z-0 hidden h-28 w-28 rounded-full border-[9px] border-blue animate-[decor-float-small_10s_ease-in-out_infinite] lg:block"
      />

      {/* Small yellow pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-[20%] z-0 hidden h-4 w-4 rotate-45 bg-accent animate-[decor-float-small_8s_ease-in-out_infinite] lg:block"
      />

      {/* Small pink pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[21%] top-[28%] z-0 hidden h-4 w-4 bg-pink animate-[decor-drift_9s_ease-in-out_infinite] lg:block"
      />

      {/* Small purple pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[24%] left-[17%] z-0 hidden h-3 w-3 bg-primary animate-[decor-float-small_7s_ease-in-out_infinite] lg:block"
      />

      {/* Small blue pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[18%] right-[18%] z-0 hidden h-3 w-3 rotate-45 bg-blue animate-[decor-drift-reverse_8s_ease-in-out_infinite] lg:block"
      />

      {/* ================================================== */}
      {/* LIGHT CONTENT SURFACE */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl rounded-b-[32px] bg-background px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="relative z-30">
          {/* ================================================== */}
          {/* HEADER */}
          {/* ================================================== */}

          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                PLAYER SUPPORT
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
                KONTAKT
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                Masz pytanie, chcesz zarezerwować imprezę albo po prostu chcesz
                wiedzieć, co aktualnie gramy? Odezwij się. Jesteśmy tutaj.
              </p>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* CONTACT INFO + MAP */}
          {/* ================================================== */}

          <div className="mx-auto mt-16 grid max-w-6xl items-stretch gap-10 sm:mt-20 lg:grid-cols-[0.85fr_1.15fr]">
            {/* ================================================== */}
            {/* CONTACT CARD */}
            {/* ================================================== */}

            <Reveal className="h-full">
              <div className="relative h-full">
                {/* Offset shadow */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-primary"
                />

                <div className="relative z-10 h-full rounded-3xl border-2 border-accent bg-surface p-7 sm:p-8">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    GET IN TOUCH
                  </p>

                  <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                    Odezwij się.
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-muted">
                    Najszybciej złapiesz nas telefonicznie albo przez social
                    media. Możesz też po prostu wpaść na miejsce.
                  </p>

                  {/* ================================================== */}
                  {/* ADDRESS */}
                  {/* ================================================== */}

                  <div className="mt-8 border-t-2 border-border pt-6">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      LOCATION
                    </p>

                    <p className="mt-3 text-base font-bold leading-relaxed">
                      Orzeszkowej 2B
                      <br />
                      41-103 Siemianowice Śląskie
                    </p>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=FlippClub%20Klub%20Flipperowy%20Siemianowice%20%C5%9Al%C4%85skie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary transition-colors hover:text-accent"
                    >
                      OTWÓRZ W GOOGLE MAPS →
                    </a>
                  </div>

                  {/* ================================================== */}
                  {/* PHONE */}
                  {/* ================================================== */}

                  <div className="mt-7 border-t border-border pt-6">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                      PHONE
                    </p>

                    <a
                      href="tel:+48508465061"
                      className="mt-3 block font-display text-2xl font-extrabold text-text transition-colors hover:text-primary sm:text-3xl"
                    >
                      508 465 061
                    </a>
                  </div>

                  {/* ================================================== */}
                  {/* EMAIL */}
                  {/* ================================================== */}

                  <div className="mt-7 border-t border-border pt-6">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      E-MAIL
                    </p>

                    <a
                      href="mailto:flippclubsiemianowice@gmail.com"
                      className="mt-3 block break-all text-sm font-bold text-text transition-colors hover:text-primary sm:text-base"
                    >
                      flippclubsiemianowice@gmail.com
                    </a>
                  </div>

                  {/* ================================================== */}
                  {/* SOCIALS */}
                  {/* ================================================== */}

                  <div className="mt-7 border-t border-border pt-6">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pink">
                      SOCIAL
                    </p>

                    <div className="mt-4">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ================================================== */}
            {/* MAP */}
            {/* ================================================== */}

            <Reveal delay={140} className="h-full">
              <div className="relative h-full">
                {/* Offset shadow */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-primary"
                />

                {/* ONE MAP CARD */}
                <div className="relative z-10 flex h-full min-h-[560px] flex-col overflow-hidden rounded-3xl border-2 border-primary">
                  {/* Map header */}
                  <div className="shrink-0 border-b-2 border-primary bg-surface px-6 py-5 sm:px-7">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      PLAYER MAP
                    </p>

                    <h2 className="mt-2 font-display text-3xl font-extrabold uppercase sm:text-4xl">
                      Znajdź nas
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Orzeszkowej 2B, Siemianowice Śląskie
                    </p>
                  </div>

                  {/* Map fills all remaining space */}
                  <div className="relative min-h-0 flex-1">
                    <iframe
                      title="FlippClub - mapa dojazdu"
                      src="https://www.google.com/maps?q=FlippClub%20Klub%20Flipperowy%20Siemianowice%20%C5%9Al%C4%85skie&output=embed"
                      className="absolute inset-0 block h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* CTA */}
          {/* ================================================== */}

          <Reveal>
            <div className="relative z-30 mx-auto mt-24 flex max-w-3xl flex-col items-center text-center sm:mt-28">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-primary">
                READY?
              </p>

              <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                GAME ON.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Zbierz ekipę, wybierz termin i odezwij się do nas.
              </p>

              <a
                href="tel:+48508465061"
                className="group mt-8 inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span className="text-xl transition-transform duration-200 group-hover:scale-125">
                  ●
                </span>
                ZADZWOŃ DO NAS
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
