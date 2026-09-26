"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

type TetrisPiece = {
  src: string;
  alt: string;
  side: "left" | "right";
  top: number;
  rotate: number;
  delay: number;
  duration: number;
};

const pieces = [
  {
    src: "/images/tetris/i.webp",
    alt: "",
  },
  {
    src: "/images/tetris/o.webp",
    alt: "",
  },
  {
    src: "/images/tetris/t.webp",
    alt: "",
  },
  {
    src: "/images/tetris/l.webp",
    alt: "",
  },
  {
    src: "/images/tetris/j.webp",
    alt: "",
  },
  {
    src: "/images/tetris/s.webp",
    alt: "",
  },
  {
    src: "/images/tetris/z.webp",
    alt: "",
  },
];

/*
 * Client seed jest generowany tylko raz.
 * Dzięki temu każde odświeżenie może dostać inny układ,
 * ale podczas SSR i hydracji nie powstaje mismatch.
 */
let clientSeed: number | null = null;

function getClientSeed() {
  if (clientSeed === null) {
    clientSeed = Math.floor(Math.random() * 1_000_000);
  }

  return clientSeed;
}

function getServerSeed() {
  return 123456;
}

function subscribe() {
  return () => {};
}

function seededRandom(seed: number) {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
}

function generatePiece(
  viewportIndex: number,
  positionIndex: number,
  seed: number,
): TetrisPiece {
  const baseSeed = seed + viewportIndex * 7919 + positionIndex * 104729;

  const pieceIndex = Math.floor(seededRandom(baseSeed) * pieces.length);

  const piece = pieces[pieceIndex];

  /*
   * Zawsze:
   *
   * 0 = lewa strona
   * 1 = prawa strona
   */
  const side: "left" | "right" = positionIndex === 0 ? "left" : "right";

  /*
   * Lewy i prawy klocek dostają różne strefy wysokości.
   *
   * Dzięki temu nie będą znajdowały się dokładnie
   * na tej samej wysokości.
   */
  const top =
    positionIndex === 0
      ? 14 + seededRandom(baseSeed + 31) * 28
      : 58 + seededRandom(baseSeed + 47) * 26;

  /*
   * Lekki losowy obrót.
   */
  const rotate = -16 + seededRandom(baseSeed + 61) * 32;

  /*
   * Losowe opóźnienie animacji.
   */
  const delay = seededRandom(baseSeed + 73) * 4;

  /*
   * Losowa długość animacji.
   */
  const duration = 8 + seededRandom(baseSeed + 89) * 5;

  return {
    ...piece,
    side,
    top,
    rotate,
    delay,
    duration,
  };
}

function generatePieces(viewportCount: number, seed: number): TetrisPiece[] {
  return Array.from({ length: viewportCount }).flatMap((_, viewportIndex) =>
    [0, 1].map((positionIndex) =>
      generatePiece(viewportIndex, positionIndex, seed),
    ),
  );
}

export function TetrisDecorations() {
  const [viewportCount, setViewportCount] = useState(1);

  /*
   * SSR:
   * zawsze ten sam seed.
   *
   * Client:
   * losowy seed wygenerowany tylko raz.
   */
  const seed = useSyncExternalStore(subscribe, getClientSeed, getServerSeed);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const updateViewportCount = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const viewportHeight = window.innerHeight;

        const documentHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
        );

        const count = Math.max(1, Math.ceil(documentHeight / viewportHeight));

        setViewportCount(count);
      }, 100);
    };

    updateViewportCount();

    const resizeObserver = new ResizeObserver(updateViewportCount);

    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(document.body);

    window.addEventListener("resize", updateViewportCount);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      resizeObserver.disconnect();
      window.removeEventListener("resize", updateViewportCount);
    };
  }, []);

  const generatedPieces = useMemo(
    () => generatePieces(viewportCount, seed),
    [viewportCount, seed],
  );

  return (
    <div
      aria-hidden="true"
      className="
    pointer-events-none
    absolute
    left-0
    top-0
    z-0
    w-full
    overflow-hidden
  "
      style={{
        height: `${viewportCount * 100}svh`,
      }}
    >
      {generatedPieces.map((piece, index) => {
        const viewportIndex = Math.floor(index / 2);
        const isLeft = piece.side === "left";

        return (
          <div
            key={`${viewportIndex}-${index}`}
            className="
              tetris-piece
              absolute
              w-[120px]
              sm:w-[145px]
              lg:w-[175px]
              xl:w-[200px]
            "
            style={{
              top: `calc(${viewportIndex * 100 + piece.top}svh)`,

              left: isLeft
                ? "max(12px, calc((100vw - 1280px) / 2 - 140px))"
                : undefined,

              right: !isLeft
                ? "max(12px, calc((100vw - 1280px) / 2 - 140px))"
                : undefined,

              transform: `rotate(${piece.rotate}deg)`,

              animationDelay: `${piece.delay}s`,

              animationDuration: `${piece.duration}s`,
            }}
          >
            <Image
              src={piece.src}
              alt={piece.alt}
              width={300}
              height={300}
              className="
                h-auto
                w-full
                object-contain
                opacity-55
                sm:opacity-65
                lg:opacity-75
              "
            />
          </div>
        );
      })}
    </div>
  );
}
