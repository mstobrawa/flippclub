import { SocialLinks } from "@/components/layout/SocialLinks";

export default function ContactPage() {
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
        className="pointer-events-none absolute -right-16 top-[18%] z-0 hidden h-48 w-48 rounded-full border-[12px] border-accent lg:block"
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[7%] top-[34%] z-0 hidden h-12 w-12 rotate-12 bg-pink lg:block"
      />

      {/* Blue diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[42%] z-0 hidden h-14 w-14 rotate-45 bg-blue lg:block"
      />

      {/* Yellow diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 top-[60%] z-0 hidden h-24 w-24 rotate-45 bg-accent lg:block"
      />

      {/* Purple square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-[68%] z-0 hidden h-28 w-28 -rotate-12 bg-primary lg:block"
      />

      {/* Bottom blue ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] bottom-[8%] z-0 hidden h-28 w-28 rounded-full border-[9px] border-blue lg:block"
      />

      {/* Small yellow pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-[20%] z-0 hidden h-4 w-4 rotate-45 bg-accent lg:block"
      />

      {/* Small pink pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[21%] top-[28%] z-0 hidden h-4 w-4 bg-pink lg:block"
      />

      {/* Small purple pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[17%] bottom-[24%] z-0 hidden h-3 w-3 bg-primary lg:block"
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
        {/* ================================================== */}
        {/* CONTENT */}
        {/* ================================================== */}

        <div className="relative z-30">
          {/* ================================================== */}
          {/* HEADER */}
          {/* ================================================== */}

          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
              PLAYER SUPPORT
            </p>

            <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
              KONTAKT
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Masz pytanie, chcesz zarezerwować imprezę albo po prostu chcesz
              wiedzieć, co aktualnie gramy? Odezwij się. Jesteśmy tutaj.
            </p>
          </div>

          {/* ================================================== */}
          {/* CONTACT INFO + MAP */}
          {/* ================================================== */}

          <div className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] sm:mt-20">
            {/* ================================================== */}
            {/* CONTACT CARD */}
            {/* ================================================== */}

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-primary"
              />

              <div className="relative z-10 rounded-3xl border-2 border-accent bg-surface p-7 sm:p-8">
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

            {/* ================================================== */}
            {/* MAP */}
            {/* ================================================== */}

            <div>
              <div className="overflow-hidden rounded-3xl border-2 border-primary bg-dark-gray">
                <div className="border-b-2 border-primary bg-surface px-6 py-5 sm:px-7">
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

                <div className="aspect-[4/3] w-full bg-dark-gray sm:aspect-[16/10]">
                  <iframe
                    title="FlippClub - mapa dojazdu"
                    src="https://www.google.com/maps?q=FlippClub%20Klub%20Flipperowy%20Siemianowice%20%C5%9Al%C4%85skie&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* CTA */}
          {/* ================================================== */}

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
        </div>
      </div>
    </section>
  );
}
