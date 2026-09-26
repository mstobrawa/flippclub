"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { TetrisDecorations } from "@/components/layout/TetrisDecoration";

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

const accentStyles = [
  {
    border: "border-primary",
    offset: "bg-primary",
    number: "text-primary",
  },
  {
    border: "border-accent",
    offset: "bg-accent",
    number: "text-accent",
  },
  {
    border: "border-pink",
    offset: "bg-pink",
    number: "text-pink",
  },
];

export default function FaqPage() {
  return (
    <section
      className="
        relative
        z-0
        min-h-screen
        overflow-hidden
        bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)]
        pb-16
        sm:pb-20
        lg:pb-24
      "
    >
      {/* ================================================== */}
      {/* TETRIS DECORATIONS */}
      {/* ================================================== */}

      <TetrisDecorations />

      {/* ================================================== */}
      {/* CONTENT */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
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
              <h1 className="mt-3 font-display text-[clamp(3.5rem,16vw,8rem)] font-extrabold uppercase leading-[0.85] tracking-tight text-primary">
                FAQ
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <div className="relative mx-auto mt-7 max-w-3xl">
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    translate-x-2
                    translate-y-2
                    bg-primary
                    [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  "
                />

                <div
                  className="
                    relative
                    bg-[#f1f1ee]
                    px-5
                    py-5
                    shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                    [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                    sm:px-8
                    sm:py-6
                  "
                >
                  <p className="text-base leading-relaxed text-[#45454d] sm:text-lg">
                    Masz pytanie? Tu znajdziesz odpowiedzi na najczęstsze
                    pytania dotyczące wizyty w FlippClub.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* FAQ */}
          {/* ================================================== */}

          <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
            <div className="grid gap-5">
              {faqItems.map((item, index) => {
                const styles = accentStyles[index % accentStyles.length];

                return (
                  <Reveal key={item.question} delay={(index % 4) * 100}>
                    <details
                      className={`
                        group
                        relative
                        border-2
                        bg-[#010522]
                        p-5
                        text-center
                        transition
                        duration-200
                        hover:-translate-y-1
                        sm:p-6
                        ${styles.border}
                        shadow-[5px_6px_0_var(--color-primary)]
                      `}
                    >
                      <summary
                        className="
                          flex
                          cursor-pointer
                          list-none
                          items-center
                          justify-center
                          gap-5
                          font-display
                          text-lg
                          font-extrabold
                          uppercase
                          tracking-tight
                          text-white
                          sm:text-xl
                          [&::-webkit-details-marker]:hidden
                        "
                      >
                        <span>{item.question}</span>

                        <span
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            bg-accent
                            font-mono
                            text-xl
                            font-bold
                            text-ink
                            transition-transform
                            duration-200
                            group-open:rotate-45
                          "
                        >
                          +
                        </span>
                      </summary>

                      <div className="relative mx-auto mt-6 max-w-3xl">
                        <div
                          aria-hidden="true"
                          className={`
                            absolute
                            inset-0
                            translate-x-2
                            translate-y-2
                            ${styles.offset}
                            [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                          `}
                        />

                        <div
                          className="
                            relative
                            bg-[#f1f1ee]
                            px-5
                            py-5
                            text-left
                            shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                            [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                            sm:px-7
                            sm:py-6
                          "
                        >
                          <p className="text-sm leading-relaxed text-[#45454d] sm:text-base">
                            {item.answer}
                          </p>
                        </div>
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
            <div className="mx-auto mt-24 flex max-w-3xl flex-col items-center text-center sm:mt-28">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent sm:text-sm">
                STILL CONFUSED?
              </p>

              <h2 className="mt-3 font-display text-[clamp(2.5rem,8vw,4rem)] font-extrabold uppercase leading-tight tracking-tight text-white">
                NIE ZNALAZŁEŚ ODPOWIEDZI?
              </h2>

              <div className="relative mt-6 max-w-xl">
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    translate-x-2
                    translate-y-2
                    bg-accent
                    [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  "
                />

                <div
                  className="
                    relative
                    bg-[#f1f1ee]
                    px-5
                    py-5
                    shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                    [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                    sm:px-8
                    sm:py-6
                  "
                >
                  <p className="text-base leading-relaxed text-[#45454d] sm:text-lg">
                    Nic nie szkodzi. Napisz do nas — chętnie odpowiemy na Twoje
                    pytanie.
                  </p>
                </div>
              </div>

              <div className="relative mt-8 inline-flex">
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    translate-x-2
                    translate-y-2
                    bg-accent
                    [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  "
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
    </section>
  );
}
