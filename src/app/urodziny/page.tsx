"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import TetrisDecoration from "@/components/layout/TetrisDecoration";
import Reveal from "@/components/ui/Reveal";

function ImageHover() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition duration-300 group-hover:bg-ink/20">
      <span className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink opacity-0 transition duration-300 group-hover:opacity-100">
        Powiększ
      </span>
    </div>
  );
}

const eventInfo = [
  {
    title: "ILE TO KOSZTUJE?",
    content: (
      <>
        Najczęstszym wyborem jest czas 2 godzin, który kosztuje od osoby
        dorosłej (18+ lat) 49 zł, a od dziecka (poniżej 18 lat) 45 zł za 2 pełne
        godziny zabawy w klubie z bezpłatną rezerwacją miejsc siedzących. Bez
        żetonów, bez dodatkowych opłat.
      </>
    ),
  },
  {
    title: "Od jakiego wieku dzieci można rezerwować urodziny?",
    content: (
      <>
        Rekomendujemy wiek 10+ lat. Flippery, koparki RC i niektóre automaty
        wymagają większego skupienia, z którymi młodsi mogą mieć problemy.
        Decyzja o młodszej grupie należy oczywiście do Państwa.
      </>
    ),
  },
  {
    title: "Czy można zorganizować urodziny dla dorosłych?",
    content: (
      <>
        TAK! 😊 Jak najbardziej, zapraszamy – wrócicie wspomnieniami do
        przeszłości.
      </>
    ),
  },
  {
    title: "Czy trzeba rezerwować termin?",
    content: null,
    phones: true,
  },
  {
    title: "Jakie miejsce dostaniemy i czy jest to dodatkowo płatne?",
    bullets: [
      "Jeśli będzie mniej niż 5 gości – bezpłatnie udostępnimy dla Was kanapy",
      "Jeśli będzie mniej niż 10 gości – bezpłatnie udostępnimy dla Was lożę na parterze",
      "Jeśli będzie 10 lub powyżej gości – bezpłatnie udostępnimy dla Was pokój VIP na piętrze (uwaga – pokój VIP pomieści ok. 15 osób).",
    ],
  },
  {
    title: "Czy wymagany jest opiekun?",
    content: (
      <>
        TAK – impreza osób niepełnoletnich ZAWSZE wymaga obecności jednego (1)
        opiekuna.
      </>
    ),
  },
  {
    title: "Czy opiekun płaci za wstęp?",
    content: (
      <>
        JEDEN (1) wymagany opiekun nie musi wykupować biletu – jest po to, aby
        zwrócić uwagę na uczestników. KAŻDA dodatkowa osoba towarzysząca
        (opiekun nr. 2 itd., rodzic, wujek, ciocia, koleżanka itp.) MUSI WYKUPIĆ
        bilet zgodny z czasem trwania imprezy urodzinowej.
      </>
    ),
  },
  {
    title: "Co zawiera impreza urodzinowa:",
    content: (
      <>
        Zabawę przez wybrany i opłacony wg standardowego cennika czas, bezpłatną
        rezerwację i udostępnienie miejsc siedzących (wg ilości osób), bezpłatne
        zaproszenia elektroniczne, prezent od klubu.
      </>
    ),
  },
  {
    title: "Woda, napoje, przekąski, słodycze, kawa, herbata",
    content: (
      <>
        Oferta naszego minibaru jest dla Państwa dostępna podczas trwania
        imprezy. Nasza oferta jest bardzo dobra cenowo. Zakupujecie Państwo to,
        co chcecie i ile chcecie. Nie ma możliwości przyniesienia i spożywania
        własnych produktów.
      </>
    ),
  },
  {
    title: "Tort, babeczki, ciasto",
    content: (
      <>
        Tort lub inne słodkości można zamówić dodatkowo. Szczegóły pod numerem:{" "}
        <a
          href="tel:606414973"
          className="whitespace-nowrap font-bold text-primary underline decoration-accent decoration-2 underline-offset-4"
        >
          606-414-973
        </a>{" "}
        – Lucyna.
        <span className="block">
          Studio tortów Babeczka z Michałkowic:{" "}
          <a
            href="https://www.facebook.com/BabeczkaSiemianowice"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-primary underline decoration-accent decoration-2 underline-offset-4"
          >
            www.facebook.com/BabeczkaSiemianowice
          </a>
        </span>
      </>
    ),
  },
  {
    title: "PIZZA, fast foody i inne jedzenie.",
    content: (
      <>
        Flippery nie lubią sosu i sera. JEŚLI jednak Wasza impreza zdecydowanie
        nie może się odbyć bez pizzy czy sałatki od cioci – zorganizujemy Wam
        jednorazowe talerzyki i sztućce, pozbędziemy się kartonów i ogarniemy
        sprzątanie. Prosimy o ustalenie własnego jedzenia w trakcie rezerwowania
        urodzin – Pobieramy wtedy dodatkową opłatę 50 zł tzw. „talerzykowe”
      </>
    ),
  },
  {
    title: "W jakie dni możemy zorganizować urodziny?",
    content: (
      <>
        Standardowo organizujemy urodziny w dniach i godzinach otwarcia klubu.
        Jeśli jednak masz dużą liczbę gości (min. 12) i chcesz żebyśmy
        udostępnili klub wyłącznie dla Was, skontaktuj się z nami i ustalmy
        szczegóły Waszej imprezy.
      </>
    ),
  },
  {
    title: "Mam rezerwację. O której mam być?",
    content: <>Prosimy być około 10 minut przed zarezerwowanym czasem.</>,
  },
];

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
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              IMPREZY
              <span className="mt-1 block text-accent sm:mt-2">/ URODZINY</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <div className="relative mx-auto mt-7 max-w-3xl">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 bg-accent [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
              />

              <div className="relative bg-primary px-6 py-5 text-on-ink shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.35)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6">
                <p className="text-base font-bold leading-relaxed sm:text-lg">
                  Integracje, wieczór kawalerski, wycieczka szkolna — zadzwoń i
                  omów szczegóły:{" "}
                  <a
                    href="tel:509555123"
                    className="font-extrabold underline decoration-primary decoration-2 underline-offset-4"
                  >
                    509-555-123
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="relative mx-auto mt-12 max-w-3xl">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
              />

              <div className="relative bg-accent px-6 py-5 text-ink [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6">
                <p className="mt-3 text-base font-medium leading-relaxed sm:text-lg">
                  Planujesz u nas urodziny? Zapoznaj się ze szczegółami poniżej.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Informacje o imprezach */}
        <div className="mx-auto mt-16 max-w-6xl sm:mt-20">
          <div className="space-y-6">
            {eventInfo.map((item, index) => (
              <Reveal key={item.title} delay={Math.min((index % 3) * 70, 140)}>
                <article
                  className={`relative p-0.75 ${
                    index % 3 === 0
                      ? "bg-accent"
                      : index % 3 === 1
                        ? "bg-primary"
                        : "bg-pink"
                  } [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]`}
                >
                  <div className="bg-[#f1f1ee] px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="shrink-0 font-mono text-sm font-extrabold text-primary sm:text-base">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-xl font-extrabold uppercase leading-tight text-primary sm:text-2xl">
                          {item.title}
                        </h3>

                        {"content" in item && item.content && (
                          <div className="mt-4 text-sm font-medium leading-relaxed text-[#45454d] sm:text-base">
                            {item.content}
                          </div>
                        )}

                        {"bullets" in item && item.bullets && (
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#45454d] sm:text-base">
                            {item.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        )}

                        {"phones" in item && item.phones && (
                          <div className="mt-4 flex flex-col gap-2 text-sm font-medium leading-relaxed text-[#45454d] sm:text-base">
                            <p>
                              Prosimy o kontakt telefoniczny w celu ustalenia
                              terminu imprezy:
                            </p>
                            <a
                              href="tel:509555123"
                              className="font-bold text-primary underline decoration-accent decoration-2 underline-offset-4"
                            >
                              509-555-123
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Strefy urodzinowe */}
        <div className="mx-auto mt-20 max-w-6xl sm:mt-24">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
                WYBIERZ SWOJĄ STREFĘ
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl md:text-5xl">
                Miejsce na Twoje urodziny
              </h2>
            </div>
          </Reveal>

          <div className="space-y-16 sm:space-y-20">
            {/* Kanapy */}
            <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-14">
              {/* Opis */}
              <div className="order-1">
                <Reveal>
                  <div className="relative bg-accent p-0.75 [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]">
                    <div className="bg-[#f1f1ee] px-6 py-7 [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)] sm:px-8 sm:py-9 lg:px-10">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        STREFA 01
                      </p>
                      <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
                        Kanapy
                      </h2>
                      <p className="mt-5 text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                        Jeśli będzie mniej niż 5 gości – bezpłatnie udostępnimy
                        dla Was kanapy.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Zdjęcie */}
              <div className="order-2">
                <Reveal delay={120}>
                  <button
                    type="button"
                    onClick={() => setSelectedImage("/images/events/ur1.webp")}
                    aria-label="Powiększ zdjęcie kanap"
                    className="group relative block w-full overflow-hidden rounded-2xl border-2 border-primary/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="/images/events/ur1.webp"
                        alt="Kanapy w strefie urodzinowej FlippClub"
                        fill
                        sizes="(max-width: 767px) calc(100vw - 40px), 50vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <ImageHover />
                    </div>
                  </button>
                </Reveal>
              </div>
            </div>

            {/* Loża */}
            <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-14">
              {/* Opis */}
              <div className="order-1 md:order-2">
                <Reveal delay={120}>
                  <div className="relative bg-primary p-0.75 [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]">
                    <div className="bg-[#f1f1ee] px-6 py-7 [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)] sm:px-8 sm:py-9 lg:px-10">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        STREFA 02
                      </p>
                      <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
                        Loża na parterze
                      </h2>
                      <p className="mt-5 text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                        Jeśli będzie mniej niż 10 gości – bezpłatnie udostępnimy
                        dla Was lożę na parterze.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Zdjęcie */}
              <div className="order-2 md:order-1">
                <Reveal>
                  <button
                    type="button"
                    onClick={() => setSelectedImage("/images/events/ur2.webp")}
                    aria-label="Powiększ zdjęcie loży na parterze"
                    className="group relative block w-full overflow-hidden rounded-2xl border-2 border-primary/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="/images/events/ur2.webp"
                        alt="Loża na parterze we FlippClub"
                        fill
                        sizes="(max-width: 767px) calc(100vw - 40px), 50vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <ImageHover />
                    </div>
                  </button>
                </Reveal>
              </div>
            </div>

            {/* VIP */}
            <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-14">
              {/* Zdjęcie */}
              <div className="order-2 md:order-1">
                <Reveal>
                  <button
                    type="button"
                    onClick={() => setSelectedImage("/images/events/ur3.webp")}
                    aria-label="Powiększ zdjęcie pokoju VIP"
                    className="group relative block w-full overflow-hidden rounded-2xl border-2 border-primary/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="/images/events/ur3.webp"
                        alt="Pokój VIP na piętrze we FlippClub"
                        fill
                        sizes="(max-width: 767px) calc(100vw - 40px), 50vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <ImageHover />
                    </div>
                  </button>
                </Reveal>
              </div>

              {/* Opis */}
              <div className="order-1 md:order-2">
                <Reveal delay={120}>
                  <div className="relative bg-accent p-0.75 [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]">
                    <div className="bg-[#f1f1ee] px-6 py-7 [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)] sm:px-8 sm:py-9 lg:px-10">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        STREFA 03
                      </p>
                      <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
                        Pokój VIP
                      </h2>
                      <p className="mt-5 text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                        Jeśli będzie 10 lub powyżej gości – bezpłatnie
                        udostępnimy dla Was pokój VIP na piętrze. Pokój VIP
                        pomieści ok. 15 osób.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Ceny w naszym barze */}
        <div className="mx-auto mt-20 max-w-6xl sm:mt-24">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
                BAR / MENU
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl md:text-5xl">
                Ceny w naszym barze
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-2 md:gap-10">
            <Reveal>
              <button
                type="button"
                onClick={() => setSelectedImage("/images/bar/bar6.webp")}
                aria-label="Powiększ zdjęcie cennika baru"
                className="group relative block w-full overflow-hidden rounded-2xl border-2 border-primary/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <div className="relative aspect-3/4 overflow-hidden">
                  <Image
                    src="/images/bar/bar6.webp"
                    alt="Cennik produktów w barze FlippClub"
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <ImageHover />
                </div>
              </button>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setSelectedImage("/images/bar/bar7.webp")}
                  aria-label="Powiększ zdjęcie cennika napojów"
                  className="group relative block w-full overflow-hidden rounded-2xl border-2 border-primary/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/bar/bar7.webp"
                      alt="Cennik napojów w barze FlippClub"
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <ImageHover />
                  </div>
                </button>

                {/* Informacyjny box baru */}
                <div className="relative mt-20 bg-accent p-0.75 [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]">
                  <div className="bg-[#f1f1ee] px-6 py-7 [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)] sm:px-8 sm:py-9">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      BAR / INFO
                    </p>

                    <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight text-primary sm:text-3xl">
                      Coś na mały głód?
                    </h3>

                    <p className="mt-5 text-base font-medium leading-relaxed text-[#45454d]">
                      W naszym barze znajdziecie napoje, słodycze i przekąski
                      dla małych i dużych. W dobrym klubie mamy dobre ceny.
                    </p>

                    <p className="mt-5 border-t-2 border-primary/20 pt-4 font-mono text-xs font-extrabold uppercase leading-relaxed tracking-wider text-primary sm:text-sm">
                      Wszystko na miejscu. Dobra zabawa bez przerwy!
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-9999 flex items-center justify-center bg-ink/90 p-5 backdrop-blur-sm sm:p-8"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Podgląd zdjęcia"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Zamknij podgląd"
                className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl font-bold text-ink transition hover:bg-primary hover:text-on-ink focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                ×
              </button>

              <div
                className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border-4 border-accent bg-dark-gray shadow-[8px_10px_0_var(--color-primary)]"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Powiększone zdjęcie z FlippClub"
                  width={1600}
                  height={1200}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1024px"
                  className="block h-auto max-h-[85vh] w-full object-contain"
                  priority
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
