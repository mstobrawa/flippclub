import TetrisDecoration from "@/components/layout/TetrisDecoration";

const sections = [
  {
    number: "01",
    title: "DOSTĘP DO URZĄDZEŃ",
    content:
      "Dostęp do urządzeń możliwy jest wyłącznie po opłaceniu wejściówki w kasie klubu. Cennik dostępny jest u pracownika klubu oraz ogólnie dostępny na wywieszonej tablicy.",
  },
  {
    number: "02",
    title: "WEJŚCIÓWKI",
    content:
      "Osoby dorosłe, które ukończyły 18 lat życia zobowiązane są do wykupienia wejściówki NORMALNEJ. Dzieci, które nie ukończyły 18 roku życia zobowiązane są do wykupienia wejściówki ULGOWEJ. Dzieci do lat 13 mogą przebywać w klubie i korzystać z maszyn po wykupieniu biletu WYŁĄCZNIE pod nadzorem pełnoletniego opiekuna, który wykupił wejściówkę.",
  },
  {
    number: "03",
    title: "ZASADY KORZYSTANIA Z URZĄDZEŃ",
    content:
      "Wszystkie urządzenia, do dostępu których wymagane jest zakupienie wejściówki (piętro) ustawione są na tryb gry tzw. Freeplay – uruchomienie nie wymaga WRZUCANIA ŻADNYCH PIENIĘDZY, MONET. Urządzenia NIE PRZYJMUJĄ ŻADNYCH PIENIĘDZY ANI NIE ICH NIE WYPŁACAJĄ, a wrzutniki monet są zabezpieczone przed omyłkowym wrzuceniem pieniędzy. Urządzenia służą jedynie rozrywce, a granie na nich NIE POWODUJE ZDOBYCIA JAKIEJKOLWIEK NAGRODY, WYPŁATY PIENIĘŻNEJ ANI RZECZOWEJ.",
  },
  {
    number: "04",
    title: "INFORMACJE O KLUBIE",
    content:
      "Wszelkie informacje dotyczące godzin otwarcia, cen oraz wydarzeniach udostępnione są na stronie internetowej www.flippclub.pl oraz dostępne u pracownika klubu.",
  },
  {
    number: "05",
    title: "ZWROT I PRZEKAZANIE WEJŚCIÓWKI",
    content:
      "Po wykupieniu wejściówki, nie można jej zwrócić, przekazać innej osobie oraz wymagać zwrotu części opłaty w związku z nie wykorzystanym w pełni wykupionego czasu gry.",
  },
  {
    number: "06",
    title: "KORZYSTANIE Z MASZYN I ZDROWIE",
    content:
      "Korzystanie z maszyn odbywa się na własne ryzyko. Osobom nadwrażliwym na bodźce oraz chorym na epilepsję stanowczo ODRADZAMY korzystania z maszyn, gdyż generują one duże ilości światła oraz dźwięków mogących u osób chorych wywołać reakcję choroby.",
  },
  {
    number: "07",
    title: "BEZPIECZEŃSTWO",
    content:
      "Wszystkie osoby w Klubie zobowiązane są do przestrzegania ogólnych zasad bezpieczeństwa. NIESTOSOWANIE SIĘ DO ZASAD BEZPIECZEŃSTWA obciąża odpowiedzialnością Klienta.",
  },
  {
    number: "08",
    title: "ZACHOWANIE W KLUBIE",
    content:
      "Jakiekolwiek przejawy agresji w stosunku do reszty użytkowników, obsługi oraz maszyn są zabronione. Nie wolno kopać czy uderzać maszyn oraz pozostawiać na nich jedzenia, napojów oraz innych rzeczy. Niestosowanie się do zaleceń spowoduje wyproszeniem z klubu lub wezwanie ochrony mienia oraz konsekwencjami prawnymi.",
  },
  {
    number: "09",
    title: "ZAKAZ PALENIA I SPOŻYWANIA",
    content:
      "Na terenie Klubu występuje całkowity zakaz palenia papierosów oraz e-papierosów, spożywania jedzenia i napojów nie zakupionych w klubie. Osoby będące pod wpływem alkoholu czy narkotyków zostaną wyproszone. Niestosowanie się do zakazu spowoduje wyproszeniem z klubu lub wezwaniem ochrony mienia oraz konsekwencjami prawnymi.",
  },
  {
    number: "10",
    title: "ODPOWIEDZIALNOŚĆ ZA RZECZY",
    content:
      "Klub FLIPPCLUB.PL nie ponosi odpowiedzialności za rzeczy pozostawione przez Klientów. Do dyspozycji Klientów oddajemy zamykane na klucz szafki do zabezpieczenia cennych przedmiotów.",
  },
  {
    number: "11",
    title: "FILMOWANIE, FOTOGRAFOWANIE I WIZERUNEK",
    content:
      "Wejście do klubu oznacza wyrażenie zgodny na filmowanie, fotografowanie oraz udostępnienie wizerunku w celach marketingowych przez zarządcę klubu FLIPPCLUB.PL, NIP: 6431641698. W PRZYPADKU NIE WYRAŻENIA ZGODNY NA POWYŻSZE – PROSIMY O PRZEKAZANIE TEJ INFORMACJI OBSŁUDZE KLUBU.",
  },
  {
    number: "12",
    title: "PODMIOT ODPOWIEDZIALNY",
    content:
      "Podmiotem odpowiedzialnym za funkcjonowanie Klubu jest WAAP FILTROWENTYLACJA Jakub Dziura, ul. Tarnogórska 17, 41-103, Siemianowice Śląskie, NIP: 643-164-16-98.",
  },
];

export default function RegulaminPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] py-16 sm:py-20">
      <TetrisDecoration />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
            FLIPPCLUB
          </p>

          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-accent sm:text-5xl lg:text-6xl">
            REGULAMIN
          </h1>

          <div className="relative mx-auto mt-6 max-w-3xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
            />

            <div className="relative bg-[#f1f1ee] px-6 py-5 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6">
              <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                Przed zakupem wejściówki do klubu Flipperowego FLIPPCLUB.PL, ul.
                Orzeszkowej 2B, 41-103, Siemianowice Śląskie KLIENT zapoznaje
                się i akceptuje treść niniejszego regulaminu.
                <br />
                <span className="font-bold">
                  Wejście i przebywanie w klubie jest jednoznaczne z akceptacją
                  niniejszego regulaminu.
                </span>
              </p>
            </div>
          </div>
        </header>

        <div className="mt-12 space-y-6 sm:mt-16">
          {sections.map((section) => (
            <section key={section.number} className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(2%_0,100%_0,98%_100%,0_100%)]"
              />

              <div className="relative bg-[#f1f1ee] px-6 py-6 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(2%_0,100%_0,98%_100%,0_100%)] sm:px-8 sm:py-7">
                <div className="flex gap-4 sm:gap-6">
                  <span className="shrink-0 font-mono text-sm font-bold text-primary sm:text-base">
                    {section.number}
                  </span>

                  <div>
                    <h2 className="font-display text-xl font-extrabold uppercase leading-tight text-[#1c1420] sm:text-2xl">
                      {section.title}
                    </h2>

                    <p className="mt-4 text-sm font-medium leading-relaxed text-[#45454d] sm:text-base">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 relative mx-auto max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
          />

          <div className="relative bg-[#f1f1ee] px-6 py-5 text-center shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#45454d] sm:text-xs">
              Regulamin Klubu Flipperowego FLIPPCLUB.PL
            </p>

            <p className="mt-2 text-sm font-medium leading-relaxed text-[#45454d]">
              ul. Orzeszkowej 2B, 41-103 Siemianowice Śląskie
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
