"use client";

import Image from "next/image";
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

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    "/images/gallery/gal1.webp",
    "/images/gallery/gal2.webp",
    "/images/gallery/gal3.webp",
    "/images/gallery/gal4.webp",
    "/images/gallery/gal5.webp",
    "/images/gallery/gal6.webp",
    "/images/gallery/gal7.webp",
    "/images/gallery/gal8.webp",
    "/images/gallery/gal9.webp",
    "/images/gallery/gal10.webp",
    "/images/gallery/gal11.webp",
    "/images/gallery/gal12.webp",
    "/images/gallery/gal13.webp",
    "/images/gallery/gal14.webp",
    "/images/gallery/gal15.webp",
  ];

  const layoutClasses = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
  ];

  return (
    <section
      className="
        relative
        z-0
        min-h-screen
        overflow-hidden
        bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)]
        pb-16
        sm:pb-20
        lg:pb-24
      "
    >
      <TetrisDecorations />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="relative z-30">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                INSERT COIN • PRESS START
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-3 font-display text-[clamp(3.5rem,16vw,8rem)] font-extrabold uppercase leading-[0.85] tracking-tight text-primary">
                GALERIA
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <div className="relative mx-auto mt-7 max-w-3xl">
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    translate-x-2
                    translate-y-2
                    bg-primary
                    [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  "
                />

                <div
                  className="
                    relative
                    bg-[#f1f1ee]
                    px-5
                    py-5
                    shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                    [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                    sm:px-8
                    sm:py-6
                  "
                >
                  <p className="text-base leading-relaxed text-[#45454d] sm:text-lg">
                    Zajrzyj do środka i zobacz, jak wygląda FlippClub. Automaty,
                    klasyki, rywalizacja i dużo dobrej zabawy.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mx-auto mt-14 max-w-6xl sm:mt-20">
            <div className="grid auto-rows-45 grid-cols-2 gap-4 sm:auto-rows-55 sm:gap-5 md:grid-cols-4 lg:auto-rows-60">
              {images.map((item, index) => (
                <Reveal
                  key={item}
                  delay={(index % 4) * 100}
                  className={layoutClasses[index]}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    aria-label={`Powiększ zdjęcie ${index + 1}`}
                    className="
                      group
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      rounded-2xl
                      border-2
                      border-primary/30
                      bg-[#010522]
                      text-left
                      shadow-[6px_7px_0_var(--color-primary)]
                      transition
                      duration-200
                      hover:-translate-y-1
                      hover:border-accent
                      hover:shadow-[7px_8px_0_var(--color-accent)]
                      focus-visible:outline
                      focus-visible:outline-offset-4
                      focus-visible:outline-accent
                    "
                  >
                    <Image
                      src={item}
                      alt={`FlippClub galeria ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 1200px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition duration-300 group-hover:bg-ink/30">
                      <span className="translate-y-2 rounded-full bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        Powiększ
                      </span>
                    </div>

                    <span className="absolute bottom-3 left-3 bg-ink/80 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white opacity-0 transition duration-200 group-hover:opacity-100">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mx-auto mt-16 max-w-3xl text-center sm:mt-20">
              <div className="mx-auto flex items-center justify-center gap-4">
                <div className="hidden h-px flex-1 bg-white/20 sm:block" />

                <p className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  PLAYER VIEW
                </p>

                <div className="hidden h-px flex-1 bg-white/20 sm:block" />
              </div>

              <div className="relative mx-auto mt-5 max-w-xl">
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    translate-x-2
                    translate-y-2
                    bg-accent
                    [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                  "
                />

                <div
                  className="
                    relative
                    bg-[#f1f1ee]
                    px-5
                    py-5
                    shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
                    [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]
                    sm:px-7
                    sm:py-6
                  "
                >
                  <p className="text-base leading-relaxed text-[#45454d] sm:text-lg">
                    Kliknij dowolne zdjęcie, żeby zobaczyć je w pełnym
                    rozmiarze.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {selectedImage !== null ? (
        <div
          className="
            fixed
            inset-0
            z-100
            flex
            items-center
            justify-center
            bg-ink/90
            p-5
            backdrop-blur-sm
            sm:p-8
          "
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Zamknij podgląd"
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-accent
              text-2xl
              font-bold
              text-ink
              transition
              hover:bg-primary
              hover:text-white
              focus-visible:outline
              focus-visible:outline-offset-2
              focus-visible:outline-accent
              sm:right-8
              sm:top-8
            "
          >
            ×
          </button>

          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-6xl
              cursor-pointer
              overflow-hidden
              rounded-2xl
              border-4
              border-accent
              bg-dark-gray
              shadow-[8px_10px_0_var(--color-primary)]
            "
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src={images[selectedImage]}
              alt={`FlippClub galeria ${selectedImage + 1}`}
              width={1600}
              height={1200}
              className="h-auto max-h-[85vh] w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
