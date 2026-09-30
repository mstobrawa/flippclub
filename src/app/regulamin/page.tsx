import Link from "next/link";
import { TetrisDecorations } from "@/components/layout/TetrisDecoration";

const sections = [
  {
    number: "01",
    title: "POSTANOWIENIA OGÓLNE",
    content:
      "[PLACEHOLDER] Tutaj zostanie dodana treść dotycząca ogólnych zasad korzystania z FlippClubu.",
  },
  {
    number: "02",
    title: "ZASADY KORZYSTANIA Z KLUBU",
    content:
      "[PLACEHOLDER] Tutaj zostaną opisane zasady obowiązujące osoby korzystające z klubu, flipperów oraz automatów arcade.",
  },
  {
    number: "03",
    title: "BEZPIECZEŃSTWO",
    content:
      "[PLACEHOLDER] Tutaj zostaną opisane zasady bezpieczeństwa oraz zachowania na terenie FlippClubu.",
  },
  {
    number: "04",
    title: "ODPOWIEDZIALNOŚĆ",
    content:
      "[PLACEHOLDER] Tutaj zostaną opisane zasady odpowiedzialności użytkowników oraz klubu.",
  },
  {
    number: "05",
    title: "PŁATNOŚCI I CENNIK",
    content:
      "[PLACEHOLDER] Tutaj zostaną opisane zasady dotyczące opłat, biletów, cennika oraz ewentualnych zwrotów.",
  },
  {
    number: "06",
    title: "REZERWACJE I IMPREZY",
    content:
      "[PLACEHOLDER] Tutaj zostaną opisane zasady dotyczące rezerwacji, imprez oraz wydarzeń organizowanych w klubie.",
  },
  {
    number: "07",
    title: "POSTANOWIENIA KOŃCOWE",
    content:
      "[PLACEHOLDER] Tutaj zostaną dodane końcowe postanowienia regulaminu.",
  },
];

export default function RegulaminPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] py-16 sm:py-20">
      <TetrisDecorations />

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
                Poniższa strona zawiera regulamin korzystania z FlippClubu.
                <br />
                <span className="font-bold">
                  [PLACEHOLDER — TREŚĆ REGULAMINU ZOSTANIE DODANA]
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

        <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
          [PLACEHOLDER — DATA OBOWIĄZYWANIA REGULAMINU]
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/60 transition hover:text-accent"
          >
            ← WRÓĆ NA STRONĘ GŁÓWNĄ
          </Link>
        </div>
      </div>
    </main>
  );
}
