export default function BuyExchangePage() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* BACKGROUND DECORATIONS */}
      {/* ================================================== */}

      {/* Large purple ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-[12%] z-0 hidden h-40 w-40 rounded-full border-[12px] border-primary lg:block"
      />

      {/* Large yellow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-[24%] z-0 hidden h-48 w-48 rounded-full border-[12px] border-accent lg:block"
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[7%] top-[42%] z-0 hidden h-12 w-12 rotate-12 bg-pink lg:block"
      />

      {/* Blue diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[48%] z-0 hidden h-14 w-14 rotate-45 bg-blue lg:block"
      />

      {/* Yellow diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 top-[68%] z-0 hidden h-24 w-24 rotate-45 bg-accent lg:block"
      />

      {/* Purple square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-[74%] z-0 hidden h-28 w-28 -rotate-12 bg-primary lg:block"
      />

      {/* Bottom blue ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] bottom-[8%] z-0 hidden h-28 w-28 rounded-full border-[9px] border-blue lg:block"
      />

      {/* Small yellow pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-[18%] z-0 hidden h-4 w-4 rotate-45 bg-accent lg:block"
      />

      {/* Small pink pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[21%] top-[31%] z-0 hidden h-4 w-4 bg-pink lg:block"
      />

      {/* Small purple pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[17%] bottom-[25%] z-0 hidden h-3 w-3 bg-primary lg:block"
      />

      {/* Small blue pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] bottom-[18%] z-0 hidden h-3 w-3 rotate-45 bg-blue lg:block"
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
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
              LEVEL UP YOUR COLLECTION
            </p>

            <h1 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-primary sm:text-6xl lg:text-8xl">
              KUP / WYMIEN
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Szukasz konkretnego sprzętu albo chcesz wymienić coś ze swojej
              kolekcji? Sprawdź, co mamy aktualnie dostępne.
            </p>
          </div>

          {/* ================================================== */}
          {/* CONTENT PLACEHOLDER */}
          {/* ================================================== */}

          <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-primary"
              />

              <div className="relative overflow-hidden rounded-3xl border-2 border-accent bg-surface p-8 sm:p-12 lg:p-16">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    COMING SOON
                  </p>

                  <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                    Zbuduj swoją kolekcję.
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                    Tutaj znajdziesz informacje o sprzęcie dostępnym na sprzedaż
                    oraz możliwościach wymiany.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* CTA */}
          {/* ================================================== */}

          <div className="mx-auto mt-20 flex max-w-2xl flex-col items-center text-center sm:mt-24">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
              LOOKING FOR SOMETHING?
            </p>

            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              Zapytaj nas.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Jeśli szukasz konkretnego sprzętu albo masz coś na wymianę —
              odezwij się do nas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
