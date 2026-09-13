"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

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

const faqItems: FaqItem[] = [
  {
    question: "Czy trzeba wcześniej rezerwować miejsce?",
    answer:
      "Nie zawsze. Możesz po prostu wpaść i zagrać, ale jeśli planujesz większą ekipę albo imprezę, warto wcześniej się z nami skontaktować.",
  },
  {
    question: "Ile kosztuje godzina gry?",
    answer:
      "Cena zależy od wybranego wariantu. Aktualny cennik znajdziesz na stronie Cennik.",
  },
  {
    question: "Czy mogę przyjść z dziećmi?",
    answer:
      "Tak. FlippClub jest miejscem dla graczy w różnym wieku. Na miejscu znajdziesz zarówno klasyczne automaty, jak i flippery.",
  },
  {
    question: "Czy można zorganizować u Was imprezę?",
    answer:
      "Tak. Możesz zorganizować u nas urodziny, integrację, wieczór ze znajomymi albo inną okazję. Skontaktuj się z nami, żeby ustalić szczegóły.",
  },
  {
    question: "Czy można wynająć sprzęt do domu?",
    answer:
      "Tak. Wybrane urządzenia są dostępne w naszej wypożyczalni. Szczegóły dotyczące dostępnego sprzętu ustalamy indywidualnie.",
  },
  {
    question: "Czy na miejscu można kupić coś do picia?",
    answer:
      "Tak. Na miejscu działa bar, więc podczas gry możesz zrobić sobie przerwę i coś zamówić.",
  },
  {
    question: "Czy można przyjść większą grupą?",
    answer:
      "Oczywiście. Większe ekipy są mile widziane. Przy większej grupie najlepiej wcześniej się z nami skontaktować.",
  },
  {
    question: "Gdzie znajduje się FlippClub?",
    answer:
      "Znajdziesz nas przy ul. E. Orzeszkowej 2B w Siemianowicach Śląskich.",
  },
];

export default function FaqPage() {
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
        className="pointer-events-none absolute left-[7%] top-[36%] z-0 hidden h-12 w-12 rotate-12 bg-pink animate-[decor-spin-float_11s_ease-in-out_infinite] lg:block"
      />

      {/* Blue diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[44%] z-0 hidden h-14 w-14 rotate-45 bg-blue animate-[decor-drift_13s_ease-in-out_infinite] lg:block"
      />

      {/* Yellow diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 top-[64%] z-0 hidden h-24 w-24 rotate-45 bg-accent animate-[decor-float_17s_ease-in-out_infinite] lg:block"
      />

      {/* Purple square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-[73%] z-0 hidden h-28 w-28 -rotate-12 bg-primary animate-[decor-drift-reverse_15s_ease-in-out_infinite] lg:block"
      />

      {/* Bottom blue ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8%] left-[8%] z-0 hidden h-28 w-28 rounded-full border-[9px] border-blue animate-[decor-float-small_10s_ease-in-out_infinite] lg:block"
      />

      {/* Small yellow pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-[19%] z-0 hidden h-4 w-4 rotate-45 bg-accent animate-[decor-float-small_8s_ease-in-out_infinite] lg:block"
      />

      {/* Small pink pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[21%] top-[27%] z-0 hidden h-4 w-4 bg-pink animate-[decor-drift_9s_ease-in-out_infinite] lg:block"
      />

      {/* Small purple pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[17%] bottom-[25%] z-0 hidden h-3 w-3 bg-primary animate-[decor-float-small_7s_ease-in-out_infinite] lg:block"
      />

      {/* Small blue pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] bottom-[20%] z-0 hidden h-3 w-3 rotate-45 bg-blue animate-[decor-drift-reverse_8s_ease-in-out_infinite] lg:block"
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
                PLAYER HELP
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
                FAQ
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                Masz pytanie? Tu znajdziesz odpowiedzi na najczęstsze pytania
                dotyczące wizyty w FlippClub.
              </p>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* FAQ */}
          {/* ================================================== */}

          <div className="relative z-30 mx-auto mt-16 max-w-4xl sm:mt-20">
            <div className="grid gap-5">
              {faqItems.map((item, index) => {
                const borderClass =
                  index % 3 === 0
                    ? "border-primary"
                    : index % 3 === 1
                      ? "border-accent"
                      : "border-pink";

                return (
                  <Reveal key={item.question} delay={(index % 4) * 100}>
                    <details
                      className={`group relative border-2 bg-surface p-6 shadow-[5px_6px_0_var(--color-primary)] transition duration-200 hover:-translate-y-1 ${borderClass}`}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-extrabold uppercase tracking-tight sm:text-2xl [&::-webkit-details-marker]:hidden">
                        <span>{item.question}</span>

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-xl font-bold text-ink transition-transform duration-200 group-open:rotate-45">
                          +
                        </span>
                      </summary>

                      <div className="mt-5 border-t-2 border-border pt-5">
                        <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* ================================================== */}
          {/* CONTACT CTA */}
          {/* ================================================== */}

          <Reveal>
            <div className="relative z-30 mx-auto mt-24 max-w-3xl text-center sm:mt-28">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent sm:text-sm">
                STILL CONFUSED?
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                NIE ZNALAZŁEŚ ODPOWIEDZI?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Nic nie szkodzi. Napisz do nas — chętnie odpowiemy na Twoje
                pytanie.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span className="text-xl transition-transform duration-200 group-hover:scale-125">
                  ●
                </span>
                NAPISZ DO NAS
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
