import Link from "next/link";

export default function OpeningPage() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pb-16 sm:pb-20 lg:pb-24">
      {/* ================================================== */}
      {/* BACKGROUND DECORATIONS */}
      {/* ================================================== */}

      {/* Large purple ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-[10%] z-0 hidden h-40 w-40 rounded-full border-[12px] border-primary lg:block"
      />

      {/* Large yellow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-[20%] z-0 hidden h-48 w-48 rounded-full border-[12px] border-accent lg:block"
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[7%] top-[38%] z-0 hidden h-12 w-12 rotate-12 bg-pink lg:block"
      />

      {/* Blue diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[45%] z-0 hidden h-14 w-14 rotate-45 bg-blue lg:block"
      />

      {/* Large yellow diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 top-[65%] z-0 hidden h-24 w-24 rotate-45 bg-accent lg:block"
      />

      {/* Large purple square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-[72%] z-0 hidden h-28 w-28 -rotate-12 bg-primary lg:block"
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
        className="pointer-events-none absolute right-[21%] top-[30%] z-0 hidden h-4 w-4 bg-pink lg:block"
      />

      {/* Small purple pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[17%] bottom-[25%] z-0 hidden h-3 w-3 bg-primary lg:block"
      />

      {/* Small blue pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] bottom-[20%] z-0 hidden h-3 w-3 rotate-45 bg-blue lg:block"
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
              PLAYER SCHEDULE
            </p>

            <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
              GODZINY
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Sprawdź, kiedy jesteśmy otwarci i zaplanuj swoją kolejną rundę.
              Wpadaj wtedy, kiedy Ci pasuje.
            </p>
          </div>

          {/* ================================================== */}
          {/* OPENING HOURS */}
          {/* ================================================== */}

          <div className="relative z-30 mx-auto mt-16 max-w-5xl sm:mt-20">
            <div className="grid gap-5 md:grid-cols-3">
              {/* WEEKDAYS */}
              <article className="relative z-10 border-2 border-primary bg-surface p-6 shadow-[5px_6px_0_var(--color-accent)] transition duration-200 hover:-translate-y-1">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  MON — FRI
                </p>

                <h2 className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">
                  Pon — Pt
                </h2>

                <div className="mt-6 border-t-2 border-border pt-5">
                  <p className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
                    16:00 — 21:00
                  </p>
                </div>
              </article>

              {/* SATURDAY */}
              <article className="relative z-10 border-2 border-accent bg-surface p-6 shadow-[5px_6px_0_var(--color-primary)] transition duration-200 hover:-translate-y-1">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  SATURDAY
                </p>

                <h2 className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">
                  Sobota
                </h2>

                <div className="mt-6 border-t-2 border-border pt-5">
                  <p className="font-display text-4xl font-extrabold text-accent sm:text-5xl">
                    12:00 — 21:00
                  </p>
                </div>
              </article>

              {/* SUNDAY */}
              <article className="relative z-10 border-2 border-pink bg-surface p-6 shadow-[5px_6px_0_var(--color-primary)] transition duration-200 hover:-translate-y-1">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-pink">
                  SUNDAY
                </p>

                <h2 className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">
                  Niedziela
                </h2>

                <div className="mt-6 border-t-2 border-border pt-5">
                  <p className="font-display text-4xl font-extrabold text-pink sm:text-5xl">
                    12:00 — 21:00
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* ================================================== */}
          {/* QUICK INFO */}
          {/* ================================================== */}

          <div className="relative z-30 mx-auto mt-24 max-w-4xl sm:mt-28">
            <div className="border-2 border-border bg-surface p-7 shadow-[6px_7px_0_var(--color-accent)] sm:p-9">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    OPEN FOR PLAY
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">
                    Wpadnij na rundę.
                  </h2>
                </div>

                <div className="font-mono text-sm leading-relaxed text-muted sm:text-base">
                  <p>
                    <span className="font-bold text-text">PT:</span> 16:00–21:00
                  </p>

                  <p className="mt-2">
                    <span className="font-bold text-text">SB:</span> 12:00–21:00
                  </p>

                  <p className="mt-2">
                    <span className="font-bold text-text">ND:</span> 12:00–21:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* PRICING CTA */}
          {/* ================================================== */}

          <div className="relative z-30 mx-auto mt-24 flex max-w-3xl flex-col items-center text-center sm:mt-28">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-accent">
              READY?
            </p>

            <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
              WRZUĆ MONETĘ.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Sprawdź ceny i wybierz, ile czasu chcesz spędzić przy maszynach.
            </p>

            <Link
              href="/pricing"
              className="group mt-8 inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span className="text-xl transition-transform duration-200 group-hover:rotate-12">
                ●
              </span>
              ZOBACZ CENNIK
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
