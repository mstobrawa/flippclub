"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
        Cena urodzinek zależy od Was – wybieracie czas jaki chcecie spędzić w
        klubie i mnożycie go przez ilość uczestników. (Sprawdź dział cennik)
        <br />
        <br />
        Najczęstszym wyborem jest czas 2 godzin, który kosztuje od osoby
        dorosłej (18 + lat) 49 zł a od dziecka (- 18 lat) 45 zł za 2 pełne
        godziny zabawy w klubie z bezpłatną rezerwacją miejsc siedzących.
      </>
    ),
  },
  {
    title: "Od jakiego wieku dzieci można rezerwować urodziny?",
    content: (
      <>
        Rekomendujemy wiek 10 + lat. Flippery, koparki RC i niektóre automaty
        wymagają większego skupienia, z którymi młodsi mogą mieć problemy.
        Decyzja o młodszej grupie należy oczywiście do Państwa.
      </>
    ),
  },
  {
    title: "Czy można zorganizować urodziny dla dorosłych?",
    content: (
      <>
        TAK! 😊 Jak najbardziej – czasami zastanawiamy się, kto się lepiej
        bawił, dziecko czy dorosły? Zapraszamy – wrócicie wspomnieniami do
        przeszłości.
      </>
    ),
  },
  {
    title: "Czy trzeba rezerwować termin?",
    content: (
      <>
        TAK – bez tego może się okazać, że mamy już zarezerwowane miejsce –
        zawsze zadzwoń i umów imprezę pod numerem:
      </>
    ),
    phones: true,
  },
  {
    title: "Jakie miejsce dostaniemy i czy jest to dodatkowo płatne?",
    content: (
      <>
        NIE – udostępnimy Wam bezpłatnie miejsca siedzące w klubie zgodnie z
        poniższą ilością:
      </>
    ),
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
        TAK – impreza osób niepełnoletnich ZAWSZE wymaga obecności opiekuna,
        który na miejscu wypełnia i podpisuje „zasady odpowiedzialności
        uczestnictwa w imprezie”.
      </>
    ),
  },
  {
    title: "Czy opiekun płaci za wstęp?",
    content: (
      <>
        JEDEN (1) wymagany opiekun nie musi wykupować biletu, jeśli nie chce
        korzystać z naszych atrakcji – jest po to, aby zwrócić uwagę na
        uczestników. KAŻDA dodatkowa osoba towarzysząca (opiekun nr. 2 itd.,
        rodzic, wujek, ciocia, koleżanka itp.) MUSI WYKUPIĆ bilet zgodny z
        czasem trwania imprezy urodzinowej.
      </>
    ),
  },
  {
    title: "Co zawiera impreza urodzinowa:",
    content: (
      <>
        Zabawę przez wybrany i opłacony w.g. standardowego cennika czas,
        bezpłatną rezerwację i udostępnienie miejsc siedzących (wg. ilości
        osób), bezpłatne zaproszenia elektroniczne, prezent od klubu – voucher
        dla solenizanta.
      </>
    ),
  },
  {
    title: "Woda, napoje, przekąski, słodycze, kawa, herbata",
    content: (
      <>
        Oferta naszego minibaru jest dla Państwa dostępna podczas trwania
        imprezy. Nasza oferta jest bardzo dobra cenowo. Zakupujecie Państwo to
        co chcecie i ile chcecie. Nie ma możliwości przyniesienia i spożywania
        własnych produktów.
      </>
    ),
  },
  {
    title: "Tort, babeczki, ciasto",
    content: (
      <>
        Istnieje możliwość dodatkowego zamówienia u nas okolicznościowego tortu
        lub innych słodkości – Prosimy o kontakt pod numerem telefonu:
      </>
    ),
    cake: true,
  },
  {
    title: "PIZZA, fastfoody i inne jedzenie.",
    content: (
      <>
        Niechętnie podchodzimy do tematu spożywania fastfoodów w klubie.
        Flippery nie lubią sosu i sera. JEŚLI jednak Wasza impreza zdecydowanie
        nie może się odbyć bez pizzy czy sałatki od cioci – zorganizujemy Wam
        papierowe talerzyki, pozbędziemy się kartonów i ogarniemy sprzątanie.
        Prosimy o ustalenie własnego jedzenia w trakcie rezerwowania urodzin –
        Pobieramy wtedy dodatkową opłatę 50 zł tzw. „talerzykowe”
      </>
    ),
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
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              URODZINY
              <span className="mt-2 block text-accent sm:mt-3">/ IMPREZY</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <div className="relative mx-auto mt-7 max-w-3xl">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
              />

              <div className="relative bg-[#f1f1ee] px-6 py-5 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6">
                <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                  Urodziny? Integracja? Wieczór kawalerski?{" "}
                  <span className="font-extrabold text-primary">
                    Say no more.
                  </span>{" "}
                  Wiemy, czego Ci trzeba, skontaktuj się z nami i zorganizujmy
                  niezapomnianą imprezę.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Informacje o imprezach */}
        <div className="mx-auto mt-16 max-w-6xl sm:mt-20">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                PLAYER GUIDE
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-5xl">
                Informacje o imprezach
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {eventInfo.map((item, index) => (
              <Reveal key={item.title} delay={Math.min((index % 3) * 70, 140)}>
                <article
                  className={`relative p-[3px] ${
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

                        <div className="mt-4 text-sm font-medium leading-relaxed text-[#45454d] sm:text-base">
                          {item.content}
                        </div>

                        {"bullets" in item && item.bullets && (
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#45454d] sm:text-base">
                            {item.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        )}

                        {"phones" in item && item.phones && (
                          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-base font-extrabold text-primary sm:text-lg">
                            <a
                              href="tel:606414973"
                              className="underline decoration-accent decoration-2 underline-offset-4"
                            >
                              606-414-973
                            </a>

                            <a
                              href="tel:509555123"
                              className="underline decoration-accent decoration-2 underline-offset-4"
                            >
                              509-555-123
                            </a>
                          </div>
                        )}

                        {"cake" in item && item.cake && (
                          <div className="mt-4 space-y-2 text-sm font-medium leading-relaxed text-[#45454d] sm:text-base">
                            <p>606-414-973 – Lucyna.</p>
                            <p>Studio tortów Babeczka z Michałkowic:</p>
                            <a
                              href="https://www.facebook.com/BabeczkaSiemianowice"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-block break-all font-bold text-primary underline decoration-accent decoration-2 underline-offset-4"
                            >
                              https://www.facebook.com/BabeczkaSiemianowice
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

        {/* Miejsca na imprezy urodzinowe */}
        <div className="mx-auto mt-16 max-w-6xl space-y-12 sm:mt-20 sm:space-y-16 lg:space-y-20">
          {/* Kanapy: mobile opis → zdjęcie; desktop zdjęcie → opis */}
          <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-14">
            {/* Zdjęcie — wrapper jest bezpośrednim dzieckiem grida */}
            <div className="order-2 md:order-1">
              <Reveal>
                <button
                  type="button"
                  onClick={() => setSelectedImage("/images/events/ur1.webp")}
                  aria-label="Powiększ zdjęcie kanap"
                  className="group relative block w-full overflow-hidden rounded-2xl border-2 border-primary/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src="/images/events/ur1.webp"
                      alt="Kanapy dla uczestników imprezy urodzinowej we FlippClub"
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
                <div className="relative bg-primary p-[3px] [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]">
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
          </div>

          {/* Loża: mobile opis → zdjęcie; desktop opis → zdjęcie */}
          <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-14">
            {/* Opis */}
            <div className="order-1">
              <Reveal>
                <div className="relative bg-pink p-[3px] [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]">
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
            <div className="order-2">
              <Reveal delay={120}>
                <button
                  type="button"
                  onClick={() => setSelectedImage("/images/events/ur2.webp")}
                  aria-label="Powiększ zdjęcie loży na parterze"
                  className="group relative block w-full overflow-hidden rounded-2xl border-2 border-primary/50 bg-[#010522] text-left shadow-[6px_7px_0_var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[8px_10px_0_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
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

          {/* VIP: mobile opis → zdjęcie; desktop zdjęcie → opis */}
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
                  <div className="relative aspect-[16/9] overflow-hidden">
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
                <div className="relative bg-accent p-[3px] [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]">
                  <div className="bg-[#f1f1ee] px-6 py-7 [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)] sm:px-8 sm:py-9 lg:px-10">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      STREFA 03
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
                      Pokój VIP
                    </h2>
                    <p className="mt-5 text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                      Jeśli będzie 10 lub powyżej gości – bezpłatnie udostępnimy
                      dla Was pokój VIP na piętrze. Pokój VIP pomieści ok. 15
                      osób.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* GAME MODE SELECT */}
        <div className="mx-auto mt-24 max-w-5xl sm:mt-28">
          <Reveal>
            <div className="text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
                GAME MODE SELECT
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-primary sm:text-5xl">
                Wybierz swój tryb
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <div className="h-full border-2 border-accent bg-[#010522] p-6 shadow-[5px_6px_0_var(--color-primary)]">
                <p className="font-mono text-xs font-bold text-accent">01</p>
                <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">
                  Urodziny
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Zbierz ekipę i zróbcie urodzinową rundę, której nie
                  zapomnicie.
                </p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="h-full border-2 border-primary bg-[#010522] p-6 shadow-[5px_6px_0_var(--color-accent)]">
                <p className="font-mono text-xs font-bold text-primary">02</p>
                <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">
                  Integracja
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Oderwijcie się od biurek i spędźcie razem trochę czasu poza
                  pracą.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="h-full border-2 border-pink bg-[#010522] p-6 shadow-[5px_6px_0_var(--color-primary)]">
                <p className="font-mono text-xs font-bold text-pink">03</p>
                <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">
                  Wieczór
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Kawalerski, panieński albo po prostu wieczór ze znajomymi.
                </p>
              </div>
            </Reveal>

            <Reveal delay={270}>
              <div className="h-full border-2 border-blue bg-[#010522] p-6 shadow-[5px_6px_0_var(--color-blue)]">
                <p className="font-mono text-xs font-bold text-blue">04</p>
                <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">
                  Wycieczka klasowa
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Wyjście ze szkoły nie musi byc nudne. Wpadnijcie całą klasą.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/90 p-5 backdrop-blur-sm sm:p-8"
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
            className="relative max-h-[90vh] w-full max-w-5xl cursor-pointer overflow-hidden rounded-2xl border-4 border-accent bg-dark-gray shadow-[8px_10px_0_var(--color-primary)]"
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src={selectedImage}
              alt="Powiększone zdjęcie z FlippClub"
              width={1600}
              height={1200}
              className="h-auto max-h-[85vh] w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
