"use client";

import { useEffect, useRef, useState } from "react";

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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xl font-bold uppercase tracking-[0.08em] text-accent sm:text-2xl">
      {children}
    </h2>
  );
}

type RhomboidBoxProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
};

function RhomboidBox({ children, variant = "light" }: RhomboidBoxProps) {
  const isLight = variant === "light";

  return (
    <div className="relative mt-5">
      <div
        aria-hidden="true"
        className={`absolute inset-0 translate-x-2 translate-y-2 ${
          isLight ? "bg-primary" : "bg-accent"
        } [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]`}
      />

      <div
        className={`relative px-5 py-5 ${
          isLight
            ? "bg-[#f1f1ee] shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] text-[#45454d]"
            : "bg-[#010522] text-white/75"
        } [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6`}
      >
        <div className="text-sm font-medium leading-relaxed sm:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)]">
      <TetrisDecorations />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
              INFORMACJE
            </p>

            <h1 className="mt-3 font-mono text-3xl font-black uppercase tracking-[0.04em] text-white sm:text-4xl lg:text-5xl">
              POLITYKA PRYWATNOŚCI I COOKIES
            </h1>

            <RhomboidBox>
              <p>
                Poniżej znajdują się informacje dotyczące zasad przetwarzania
                danych oraz wykorzystywania plików cookies na stronie
                internetowej FlippClub.
              </p>
            </RhomboidBox>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 max-w-5xl space-y-12 sm:mt-18 lg:mt-20">
          <Reveal delay={100}>
            <section>
              <SectionTitle>1. Administrator strony</SectionTitle>

              <RhomboidBox>
                <p>
                  Administratorem strony internetowej FlippClub jest{" "}
                  <strong>Waap Filtrowentylacja Jakub Dziura</strong>,
                  prowadzący działalność gospodarczą pod adresem:
                </p>

                <p className="mt-4">
                  <strong>Waap Filtrowentylacja Jakub Dziura</strong>
                  <br />
                  ul. Oświęcimska 10
                  <br />
                  41-106 Siemianowice Śląskie
                  <br />
                  NIP: 6431641698
                  <br />
                  REGON: 241237132
                </p>

                <p className="mt-4">Aktualny kontakt z FlippClub:</p>

                <p className="mt-2">
                  <strong>FlippClub</strong>
                  <br />
                  ul. E. Orzeszkowej 2B
                  <br />
                  41-103 Siemianowice Śląskie
                  <br />
                  tel.{" "}
                  <a
                    href="tel:+48508465061"
                    className="font-bold underline decoration-primary decoration-2 underline-offset-2"
                  >
                    508 465 061
                  </a>
                  <br />
                  e-mail:{" "}
                  <a
                    href="mailto:flippclubsiemianowice@gmail.com"
                    className="font-bold underline decoration-primary decoration-2 underline-offset-2"
                  >
                    flippclubsiemianowice@gmail.com
                  </a>
                </p>
              </RhomboidBox>
            </section>
          </Reveal>

          <Reveal delay={150}>
            <section>
              <SectionTitle>2. Jakie dane mogą być przetwarzane</SectionTitle>

              <RhomboidBox>
                <p>
                  Korzystanie ze strony internetowej może wiązać się z
                  przetwarzaniem danych technicznych związanych z urządzeniem i
                  sposobem korzystania ze strony, takich jak adres IP,
                  informacje o przeglądarce, systemie operacyjnym oraz
                  podstawowe informacje dotyczące aktywności w serwisie.
                </p>

                <p className="mt-4">
                  Zakres tych danych zależy między innymi od sposobu korzystania
                  ze strony oraz usług technicznych wykorzystywanych do jej
                  obsługi.
                </p>
              </RhomboidBox>
            </section>
          </Reveal>

          <Reveal delay={200}>
            <section>
              <SectionTitle>3. W jakim celu przetwarzamy dane</SectionTitle>

              <RhomboidBox variant="light">
                <ul className="space-y-3">
                  <li>
                    • zapewnienie prawidłowego działania strony internetowej,
                  </li>
                  <li>
                    • zapewnienie bezpieczeństwa i ochrony infrastruktury
                    technicznej,
                  </li>
                  <li>
                    • obsługa i zapamiętywanie ustawień dotyczących cookies,
                  </li>
                  <li>
                    • umożliwienie wyświetlania zaakceptowanych treści
                    zewnętrznych, w szczególności materiałów Facebooka,
                  </li>
                  <li>
                    • obsługa kontaktu użytkownika z FlippClub za pomocą
                    dostępnych kanałów kontaktu.
                  </li>
                </ul>
              </RhomboidBox>
            </section>
          </Reveal>

          <Reveal delay={250}>
            <section>
              <SectionTitle>4. Pliki cookies</SectionTitle>

              <RhomboidBox>
                <p>
                  Strona wykorzystuje pliki cookies oraz podobne technologie,
                  które mogą być niezbędne do prawidłowego działania serwisu
                  oraz zapamiętania wybranych ustawień użytkownika.
                </p>

                <p className="mt-4">
                  W przypadku treści pochodzących od zewnętrznych dostawców,
                  takich jak Facebook, ich załadowanie może zależeć od zgody
                  użytkownika udzielonej za pomocą ustawień cookies.
                </p>

                <p className="mt-4">
                  Użytkownik może w każdej chwili zmienić swoje ustawienia
                  cookies za pomocą opcji <strong>„USTAWIENIA COOKIES”</strong>{" "}
                  dostępnej w stopce strony.
                </p>
              </RhomboidBox>
            </section>
          </Reveal>

          <Reveal delay={300}>
            <section>
              <SectionTitle>5. Facebook i usługi zewnętrzne</SectionTitle>

              <RhomboidBox variant="light">
                <p>
                  Na stronie może być wyświetlana zawartość pochodząca z serwisu
                  Facebook należącego do Meta Platforms, Inc.
                </p>

                <p className="mt-4">
                  Treści zewnętrzne są ładowane zgodnie z ustawieniami zgody
                  dotyczącymi usług zewnętrznych. Po zaakceptowaniu takiej
                  usługi mogą być przetwarzane informacje przez jej operatora
                  zgodnie z jego własnymi zasadami prywatności.
                </p>

                <p className="mt-4">
                  Szczegółowe informacje dotyczące przetwarzania danych przez
                  Meta znajdują się w dokumentacji i polityce prywatności tego
                  podmiotu.
                </p>
              </RhomboidBox>
            </section>
          </Reveal>

          <Reveal delay={350}>
            <section>
              <SectionTitle>6. Hosting i dane techniczne</SectionTitle>

              <RhomboidBox>
                <p>
                  Strona jest utrzymywana przy wykorzystaniu usług hostingowych
                  i infrastruktury technicznej niezbędnej do jej prawidłowego
                  działania.
                </p>

                <p className="mt-4">
                  W ramach działania serwera mogą być automatycznie przetwarzane
                  informacje techniczne, w szczególności adres IP, data i czas
                  połączenia, informacje o przeglądarce oraz informacje
                  dotyczące żądania kierowanego do serwera.
                </p>

                <p className="mt-4">
                  Dane te mogą być wykorzystywane między innymi w celu
                  zapewnienia bezpieczeństwa, wykrywania błędów oraz utrzymania
                  prawidłowego działania strony.
                </p>
              </RhomboidBox>
            </section>
          </Reveal>

          <Reveal delay={400}>
            <section>
              <SectionTitle>7. Linki do innych stron</SectionTitle>

              <RhomboidBox variant="light">
                <p>
                  Strona może zawierać odnośniki do zewnętrznych serwisów, w
                  szczególności Facebooka, Instagrama oraz innych stron
                  internetowych.
                </p>

                <p className="mt-4">
                  Po przejściu na zewnętrzną stronę użytkownik podlega zasadom
                  prywatności i cookies obowiązującym u operatora danego
                  serwisu.
                </p>
              </RhomboidBox>
            </section>
          </Reveal>

          <Reveal delay={450}>
            <section>
              <SectionTitle>8. Prawa użytkownika</SectionTitle>

              <RhomboidBox>
                <p>
                  W zakresie, w jakim przepisy o ochronie danych osobowych mają
                  zastosowanie, użytkownikowi mogą przysługiwać w szczególności
                  prawa do:
                </p>

                <ul className="mt-4 space-y-2">
                  <li>• dostępu do swoich danych osobowych,</li>
                  <li>• sprostowania danych,</li>
                  <li>• usunięcia danych,</li>
                  <li>• ograniczenia przetwarzania danych,</li>
                  <li>• wniesienia sprzeciwu wobec przetwarzania danych,</li>
                  <li>
                    • przenoszenia danych — w przypadkach przewidzianych
                    przepisami,
                  </li>
                  <li>
                    • wycofania zgody, jeżeli przetwarzanie odbywa się na
                    podstawie zgody.
                  </li>
                </ul>

                <p className="mt-4">
                  Użytkownik ma również prawo wniesienia skargi do Prezesa
                  Urzędu Ochrony Danych Osobowych, jeżeli uzna, że przetwarzanie
                  jego danych osobowych narusza obowiązujące przepisy.
                </p>
              </RhomboidBox>
            </section>
          </Reveal>

          <Reveal delay={500}>
            <section>
              <SectionTitle>9. Zmiany polityki prywatności</SectionTitle>

              <RhomboidBox variant="light">
                <p>
                  Polityka prywatności może być okresowo aktualizowana, w
                  szczególności w przypadku zmian w funkcjonowaniu strony,
                  wykorzystywanych usług lub obowiązujących przepisów.
                </p>

                <p className="mt-4">
                  Aktualna wersja dokumentu jest publikowana na tej stronie.
                </p>
              </RhomboidBox>
            </section>
          </Reveal>

          <Reveal delay={550}>
            <section>
              <RhomboidBox>
                <p className="text-center">
                  <strong>Ostatnia aktualizacja: wrzesień 2026</strong>
                </p>
              </RhomboidBox>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
