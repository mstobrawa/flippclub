import Image from "next/image";
import Link from "next/link";

type PriceBlock = {
  top: string;
  bottom: string;
};

type PriceCard = {
  label: string;
  blocks: PriceBlock[];
  accent: "primary" | "accent" | "pink";
};

const prices: PriceCard[] = [
  {
    label: "18+",
    accent: "primary",
    blocks: [
      { top: "DOROŚLI", bottom: "" },
      { top: "1 GODZINA", bottom: "29 ZŁ" },
      { top: "2 GODZINY", bottom: "49 ZŁ" },
      { top: "3 GODZINY", bottom: "59 ZŁ" },
    ],
  },
  {
    label: "-18",
    accent: "accent",
    blocks: [
      { top: "MŁODSI", bottom: "" },
      { top: "1 GODZINA", bottom: "25 ZŁ" },
      { top: "2 GODZINY", bottom: "45 ZŁ" },
      { top: "3 GODZINY", bottom: "55 ZŁ" },
    ],
  },
  {
    label: "SPECJALNY",
    accent: "pink",
    blocks: [
      { top: "SPECJALNY", bottom: "" },
      { top: "1 GODZINA", bottom: "22 ZŁ" },
      { top: "2 GODZINY", bottom: "40 ZŁ" },
      { top: "3 GODZINY", bottom: "50 ZŁ" },
    ],
  },
];

const accentStyles = {
  primary: {
    border: "border-primary",
    label: "text-primary",
    shadow: "shadow-[7px_8px_0_var(--color-primary)]",
  },
  accent: {
    border: "border-accent",
    label: "text-accent",
    shadow: "shadow-[7px_8px_0_var(--color-accent)]",
  },
  pink: {
    border: "border-pink",
    label: "text-pink",
    shadow: "shadow-[7px_8px_0_var(--color-pink)]",
  },
};

export default function PricingPage() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* ================================================== */}
      {/* DECORATIONS */}
      {/* ================================================== */}

      {/* Large purple ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-[14%] hidden h-36 w-36 rounded-full border-[10px] border-primary lg:block"
      />

      {/* Large yellow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-[27%] hidden h-44 w-44 rounded-full border-[10px] border-accent lg:block"
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[48%] hidden h-10 w-10 rotate-12 bg-pink lg:block"
      />

      {/* Blue diamond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[58%] hidden h-12 w-12 rotate-45 bg-blue lg:block"
      />

      {/* Small yellow pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[19%] top-[21%] hidden h-4 w-4 rotate-45 bg-accent lg:block"
      />

      {/* Small purple pixel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[20%] top-[18%] hidden h-4 w-4 bg-primary lg:block"
      />

      {/* Bottom ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 bottom-[10%] hidden h-28 w-28 rounded-full border-[8px] border-primary lg:block"
      />

      {/* ================================================== */}
      {/* CONTENT */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
            INSERT COIN
          </p>

          <h1 className="mt-3 font-display text-6xl font-extrabold uppercase tracking-tight text-primary sm:text-7xl lg:text-9xl">
            CENNIK
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Wybierz swój czas gry, wrzuć monetę i baw się ile chcesz. Prosto,
            bez kombinowania.
          </p>
        </div>

        {/* ================================================== */}
        {/* PRICING */}
        {/* ================================================== */}

        <div className="relative mx-auto mt-16 max-w-6xl sm:mt-20">
          {/* Coins decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-20 z-0 hidden w-44 rotate-6 lg:block"
          >
            <Image
              src="/images/coins.png"
              alt=""
              width={500}
              height={300}
              className="h-auto w-full"
            />
          </div>

          <div className="relative z-10 grid gap-7 md:grid-cols-3">
            {prices.map((price) => {
              const styles = accentStyles[price.accent];

              return (
                <article
                  key={price.label}
                  className={`group relative overflow-hidden rounded-3xl border-2 bg-surface p-6 transition duration-200 hover:-translate-y-1 ${styles.border} ${styles.shadow}`}
                >
                  {/* Card header */}
                  <div className="border-b-2 border-border pb-5">
                    <p
                      className={`font-display ${
                        price.label === "SPECJALNY"
                          ? "text-4xl sm:text-5xl"
                          : "text-5xl sm:text-6xl"
                      } font-extrabold uppercase tracking-tight ${styles.label}`}
                    >
                      {price.label}
                    </p>

                    <p className="mt-1 font-mono text-sm font-bold uppercase tracking-[0.2em] text-muted sm:text-base">
                      {price.blocks[0].top}
                    </p>
                  </div>

                  {/* Prices */}
                  <div className="mt-2">
                    {price.blocks.slice(1).map((block) => (
                      <div
                        key={block.top}
                        className="flex items-end justify-between border-b border-border py-5 last:border-b-0"
                      >
                        <span className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-muted sm:text-base">
                          {block.top}
                        </span>

                        <span
                          className={`font-display text-3xl font-extrabold ${styles.label} sm:text-4xl`}
                        >
                          {block.bottom}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover detail */}
                  <div className="mt-2 text-center font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted opacity-0 transition duration-200 group-hover:opacity-100">
                    INSERT COIN • PLAY
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ================================================== */}
        {/* COINS */}
        {/* ================================================== */}

        <div className="mx-auto mt-20 flex max-w-3xl items-center justify-center gap-6 sm:mt-24">
          <div className="hidden h-px flex-1 bg-border sm:block" />

          <div className="relative w-28 shrink-0 sm:w-36">
            <Image
              src="/images/coins.png"
              alt="Monety FlippClub"
              width={500}
              height={300}
              className="h-auto w-full"
            />
          </div>

          <div className="hidden h-px flex-1 bg-border sm:block" />
        </div>

        {/* ================================================== */}
        {/* CTA */}
        {/* ================================================== */}

        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center text-center sm:mt-20">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
            READY?
          </p>

          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Wrzuć monetę.
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Wybierz termin i wpadaj na partyjkę. Czekamy na Ciebie.
          </p>

          <Link
            href="/contact"
            className="group mt-7 inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-display text-base font-extrabold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-1 hover:bg-primary hover:text-on-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span className="text-xl transition-transform duration-200 group-hover:rotate-12">
              ●
            </span>
            ODEZWIJ SIĘ DO NAS
          </Link>

          <Link
            href="/zones"
            className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            ← POWRÓT DO STREF
          </Link>
        </div>
      </div>
    </section>
  );
}
