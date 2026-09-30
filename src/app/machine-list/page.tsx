import Link from "next/link";
import { TetrisDecorations } from "@/components/layout/TetrisDecoration";

const machines = [
  {
    name: "The Addams Family",
    type: "Flipper",
    year: "1992",
    manufacturer: "Bally",
    description: "Klasyczny flipper inspirowany rodziną Addamsów.",
    status: "DOSTĘPNY",
  },
  {
    name: "Attack from Mars",
    type: "Flipper",
    year: "1995",
    manufacturer: "Bally",
    description:
      "Kosmiczna inwazja, dużo akcji i charakterystyczny klimat retro.",
    status: "DOSTĘPNY",
  },
  {
    name: "Medieval Madness",
    type: "Flipper",
    year: "1997",
    manufacturer: "Williams",
    description:
      "Średniowieczne zamki, rycerze i jedna z najbardziej kultowych maszyn.",
    status: "DOSTĘPNY",
  },
  {
    name: "The Mandalorian",
    type: "Flipper",
    year: "2021",
    manufacturer: "Stern",
    description: "Nowoczesny flipper osadzony w świecie Star Wars.",
    status: "DOSTĘPNY",
  },
  {
    name: "Street Fighter II",
    type: "Arcade",
    year: "1991",
    manufacturer: "Capcom",
    description:
      "Klasyczna bijatyka arcade. Ryu, Ken i cała ekipa czekają na pojedynek.",
    status: "DOSTĘPNY",
  },
  {
    name: "Metal Slug",
    type: "Arcade",
    year: "1996",
    manufacturer: "SNK",
    description:
      "Dynamiczna klasyka arcade z charakterystyczną pixel-artową oprawą.",
    status: "DOSTĘPNY",
  },
  {
    name: "Time Crisis",
    type: "Arcade",
    year: "1995",
    manufacturer: "Namco",
    description:
      "Klasyczny shooter arcade z pistoletem i charakterystycznym systemem osłon.",
    status: "DOSTĘPNY",
  },
  {
    name: "Mario Kart Arcade GP",
    type: "Arcade",
    year: "2005",
    manufacturer: "Namco",
    description:
      "Wyścigi Mario w wersji stworzonej specjalnie z myślą o salonach arcade.",
    status: "WKRÓTCE",
  },
];

export default function MachineListPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] py-16 sm:py-20">
      <TetrisDecorations />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
            FLIPPCLUB
          </p>

          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-accent sm:text-5xl lg:text-6xl">
            NASZE MASZYNY
          </h1>

          <div className="relative mx-auto mt-6 max-w-2xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
            />

            <div className="relative bg-[#f1f1ee] px-6 py-5 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] sm:px-8 sm:py-6">
              <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                Sprawdź, jakie flippery i automaty arcade znajdziesz w
                FlippClubie. Lista jest aktualnie wersją roboczą i będzie
                uzupełniana wraz z kolejnymi maszynami.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine, index) => (
            <article
              key={`${machine.name}-${index}`}
              className="relative border-2 border-white/15 bg-[#010522]/90 p-5 shadow-[6px_7px_0_var(--color-primary)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  {machine.type}
                </span>

                <span
                  className={`shrink-0 border px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] ${
                    machine.status === "DOSTĘPNY"
                      ? "border-accent/60 text-accent"
                      : "border-primary/60 text-primary"
                  }`}
                >
                  {machine.status}
                </span>
              </div>

              <h2 className="mt-5 font-display text-2xl font-extrabold uppercase leading-tight text-white">
                {machine.name}
              </h2>

              <div className="mt-3 flex gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
                <span>{machine.manufacturer}</span>
                <span>•</span>
                <span>{machine.year}</span>
              </div>

              <p className="mt-5 min-h-[72px] text-sm leading-relaxed text-white/65">
                {machine.description}
              </p>

              <div className="mt-5 border-t border-white/10 pt-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                  FLIPPCLUB • SIEMIANOWICE ŚLĄSKIE
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
