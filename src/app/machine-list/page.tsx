import Image from "next/image";
import TetrisDecorations from "@/components/layout/TetrisDecoration";

const flippers = [
  "Guns n Roses JJP",
  "The Walking Dead STERN",
  "Stranger Things STERN",
  "Pacman BALLY",
  "Ghostbusters STERN",
  "Star trek STERN",
  "Metallica STERN",
  "Terminator 3 STERN",
  "Jaws STERN",
  "Jurassic Park STERN",
  "Godzilla STERN",
  "Deadpool STERN",
  "Black Knight STERN",
  "Foo Fighters STERN",
  "Teenage Mutant Ninja Turtles DATA EAST",
  "Fish Tales WILLIAMS",
  "Terminator 2 Williams",
  "Creature from Black Lagoon Williams",
  "The Bride of Pinbot Williams",
  "Attack from Mars BALLY",
  "Hot Wheels AMERICAN PINBALL",
  "Starship troopers SEGA",
  "Revenge From Mars",
];

const arcade = [
  "Killer Queen",
  "Wacky Racers x2",
  "SNK VS CAPCOM",
  "Metal Slug",
  "Street Hoop",
  "Donkey Kong",
  "Punisher",
  "Captain Commando",
  "Cadillacs and Dinosaurs",
  "Mercs",
  "Golden Axe",
  "Tapper",
  "Subway Surfer",
  "ATARI Arcade",
  "Commodore 64 Arcade",
  "Tekken 3",
  "Donkey Kong junior / Burger time",
  "Boubble Booble",
  "Mortal Kombat 3",
  "Altus",
  "Tetris",
  "Bomb Jack / 1942",
  "Time Pilot / Scramble",
  "Final fight",
  "Frogger / Dig Doug",
  "Galaga / Galaxian",
  "Pacman / Poojan",
  "Mario / Tanki",
  "Terminator Salvation DX",
  "Terratoma DX",
  "Transformers Human Aliance DX",
  "Ghost Squad DX",
  "The house of Dead 3 DX",
  "Subsoccer - piłka",
  "Piłkarzyki Garlando",
  "1UP Arcade Mortal Kombat 2",
  "Crane - łapa",
  "HOKKEY - Bubble Hokej",
  "MAGIC Arcade",
  "Sponge Bob arcade auto",
];

const other = ["Piaskownica RC - 5 stanowisk", "4 x PC LAN", "4 x konsole"];

const flipperInDevelopment = new Set([
  "Starship troopers SEGA",
  "Revenge From Mars",
]);

const arcadeInDevelopment = new Set(["MAGIC Arcade", "Sponge Bob arcade auto"]);

const otherInDevelopment = new Set(["4 x PC LAN", "4 x konsole"]);

function MachineCard({
  number,
  name,
  inDevelopment = false,
}: {
  number: number;
  name: string;
  inDevelopment?: boolean;
}) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]"
      />

      <div className="relative flex min-h-[82px] items-center gap-4 bg-[#f1f1ee] px-5 py-4 shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]">
        <span className="shrink-0 text-2xl font-black text-[#007ff7]">
          {String(number).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <p className="text-base font-bold leading-tight text-[#30303a] sm:text-lg">
            {name}
          </p>

          {inDevelopment && (
            <span className="mt-2 inline-block text-xs font-black tracking-[0.12em] text-[#007ff7]">
              W OPRACOWANIU
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mb-7">
      <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl lg:text-5xl">
        {children}
      </h2>

      {subtitle && (
        <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent sm:text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function MachineListPage() {
  let number = 1;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)]">
      <TetrisDecorations />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent sm:text-sm">
            FLIPPCLUB
          </p>

          <h1 className="mt-3 font-display text-[clamp(3.5rem,12vw,7rem)] font-extrabold uppercase leading-[0.85] tracking-tight text-primary">
            Lista maszyn
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/70 sm:text-lg">
            Flippery, automaty arcade i pozostałe atrakcje dostępne w klubie.
          </p>
        </div>

        {/* Flippery */}
        <section>
          <SectionTitle subtitle="23 maszyny">Flippery</SectionTitle>

          <div className="grid gap-5 md:grid-cols-2">
            {flippers.map((machine) => {
              const currentNumber = number++;

              return (
                <MachineCard
                  key={machine}
                  number={currentNumber}
                  name={machine}
                  inDevelopment={flipperInDevelopment.has(machine)}
                />
              );
            })}
          </div>
        </section>

        {/* Arcade */}
        <section className="mt-20">
          <SectionTitle subtitle="40 pozycji">Arcade</SectionTitle>

          <div className="grid gap-5 md:grid-cols-2">
            {arcade.map((machine) => {
              const currentNumber = number++;

              return (
                <MachineCard
                  key={machine}
                  number={currentNumber}
                  name={machine}
                  inDevelopment={arcadeInDevelopment.has(machine)}
                />
              );
            })}
          </div>
        </section>

        {/* Inne */}
        <section className="mt-20">
          <SectionTitle subtitle="3 pozycje">Inne</SectionTitle>

          <div className="grid gap-5 md:grid-cols-2">
            {other.map((machine) => {
              const currentNumber = number++;

              return (
                <MachineCard
                  key={machine}
                  number={currentNumber}
                  name={machine}
                  inDevelopment={otherInDevelopment.has(machine)}
                />
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
