"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  type ExternalContentConsent,
  externalContentConsentChangedEvent,
  externalContentConsentStorageKey,
  getExternalContentConsent,
  setExternalContentConsent,
} from "@/lib/externalContentConsent";

import { TetrisDecorations } from "@/components/layout/TetrisDecoration";

const facebookSdkId = "facebook-jssdk";
const facebookSdkUrl =
  "https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v25.0";

declare global {
  interface Window {
    FB?: {
      XFBML?: {
        parse: () => void;
      };
    };
  }
}

const slides = [
  {
    id: "adult",
    blocks: [
      { top: "18+", bottom: "DOROŚLI" },
      { top: "1 godzina", bottom: "29 ZŁ" },
      { top: "2 godziny", bottom: "49 ZŁ" },
      { top: "3 godziny", bottom: "59 ZŁ" },
    ],
  },
  {
    id: "youth",
    blocks: [
      { top: "-18", bottom: "MŁODSI" },
      { top: "1 godzina", bottom: "25 ZŁ" },
      { top: "2 godziny", bottom: "45 ZŁ" },
      { top: "3 godziny", bottom: "55 ZŁ" },
    ],
  },
  {
    id: "special",
    blocks: [
      { top: "SPECJALNY", bottom: "" },
      { top: "1 godzina", bottom: "22 ZŁ" },
      { top: "2 godziny", bottom: "40 ZŁ" },
      { top: "3 godziny", bottom: "50 ZŁ" },
    ],
  },
  {
    id: "hours",
    blocks: [
      { top: "CZYNNE", bottom: "" },
      { top: "Piątek", bottom: "16–21" },
      { top: "Sobota", bottom: "12–21" },
      { top: "Niedziela", bottom: "12–21" },
    ],
  },
];

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

    if (!element) {
      return;
    }

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
      className={`${
        visible ? "page-reveal-visible" : "page-reveal-hidden"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function loadFacebookSdk(): Promise<void> {
  const existingScript = document.getElementById(
    facebookSdkId,
  ) as HTMLScriptElement | null;

  if (window.FB?.XFBML) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = existingScript ?? document.createElement("script");

    function handleLoad() {
      resolve();
    }

    function handleError() {
      reject(new Error("Nie udało się załadować Facebook SDK."));
    }

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });

    if (!existingScript) {
      script.id = facebookSdkId;
      script.src = facebookSdkUrl;
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  });
}

function FacebookConsentPlaceholder({
  className = "",
}: {
  className?: string;
}) {
  function acceptFacebookContent() {
    setExternalContentConsent("accepted");
  }

  return (
    <div
      className={`flex h-full min-h-[360px] flex-col items-center justify-center bg-[#010522] px-6 py-10 text-center ${className}`}
    >
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
        Aktualności z Facebooka
      </p>

      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
        Zaakceptuj zewnętrzne treści, aby wyświetlić Facebook Feed.
      </p>

      <button
        type="button"
        onClick={acceptFacebookContent}
        className="
          mt-5
          inline-flex
          items-center
          justify-center
          border-2
          border-ink
          bg-accent
          px-5
          py-3
          font-display
          text-xs
          font-extrabold
          uppercase
          tracking-[0.1em]
          text-ink
          transition
          hover:bg-primary
          hover:text-white
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-primary
        "
      >
        Akceptuj Facebook
      </button>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <path d="M13.5 21v-8h2.75l.5-3h-3.25V8.05c0-.87.28-1.55 1.58-1.55h1.67V3.82c-.29-.04-1.29-.12-2.46-.12-2.44 0-4.12 1.49-4.12 4.23V10H7.4v3h2.77v8h3.33Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <path d="M15.7 3c.3 1.8 1.3 3 3.3 3.2v3.1c-1.2-.1-2.3-.5-3.3-1.1v6.9c0 4-2.7 6.2-6 6.2-3 0-5.3-2.2-5.3-5.2 0-3.2 2.6-5.5 6.1-5.3v3.2c-1.7-.2-2.9.7-2.9 2.1 0 1.2.9 2.1 2.1 2.1 1.3 0 2.6-.8 2.6-3V3h3.4Z" />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="
        group
        flex
        items-center
        gap-4
        border-2
        border-white/15
        bg-[#010522]/80
        px-5
        py-4
        text-white
        transition
        duration-200
        hover:-translate-y-1
        hover:border-accent
        hover:bg-[#0d0b54]
      "
    >
      <span className="shrink-0 text-accent transition-transform duration-200 group-hover:scale-110">
        {icon}
      </span>

      <span className="flex flex-col text-left">
        <span className="font-display text-base font-extrabold uppercase tracking-tight">
          {label}
        </span>

        <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">
          Obserwuj nas
        </span>
      </span>

      <span className="ml-auto text-lg text-white/30 transition group-hover:text-accent">
        →
      </span>
    </a>
  );
}

function RhombusText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          translate-x-2
          translate-y-2
          bg-primary
          [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]
        "
      />

      <div
        className="
          relative
          bg-[#f1f1ee]
          px-6
          py-5
          shadow-[inset_5px_5px_10px_0px_rgba(0,0,0,0.55)]
          [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]
          sm:px-7
          sm:py-6
        "
      >
        {children}
      </div>
    </div>
  );
}

export function FacebookFeed() {
  const [index, setIndex] = useState(0);
  const [consent, setConsent] = useState<ExternalContentConsent | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setConsent(getExternalContentConsent());
    }, 0);

    function handleConsentChange(event: Event) {
      setConsent((event as CustomEvent<ExternalContentConsent>).detail);
    }

    function handleStorageChange(event: StorageEvent) {
      if (event.key === externalContentConsentStorageKey) {
        setConsent(getExternalContentConsent());
      }
    }

    window.addEventListener(
      externalContentConsentChangedEvent,
      handleConsentChange,
    );

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.clearTimeout(timeoutId);

      window.removeEventListener(
        externalContentConsentChangedEvent,
        handleConsentChange,
      );

      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (consent !== "accepted") {
      return;
    }

    let cancelled = false;

    loadFacebookSdk()
      .then(() => {
        if (!cancelled) {
          window.FB?.XFBML?.parse();
        }
      })
      .catch(() => {
        // Placeholder remains visible if Facebook SDK fails.
      });

    return () => {
      cancelled = true;
    };
  }, [consent]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section
      id="news"
      className="relative overflow-hidden bg-transparent pb-8 pt-0 sm:pb-10 lg:pb-12"
    >
      <TetrisDecorations />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* PRICING / OPENING HOURS */}

        <Reveal className="relative z-10 pt-6 sm:pt-8 lg:pt-10">
          <div key={slide.id} className="grid grid-cols-1 gap-3 lg:grid-cols-4">
            {slide.blocks.map((block, blockIndex) => {
              const isPurple = blockIndex % 2 === 0;
              const isFirstBlock = blockIndex === 0;

              return (
                <div
                  key={`${slide.id}-${block.top}`}
                  className={`
                    flex
                    h-20
                    flex-col
                    items-center
                    justify-center
                    border-2
                    px-3
                    py-2
                    text-center
                    transition-colors
                    duration-500
                    sm:h-24
                    sm:px-5
                    sm:py-3
                    ${
                      isPurple
                        ? "border-primary/60 bg-[#0d0b54]/80"
                        : "border-accent/70 bg-[#010522]/85"
                    }
                  `}
                >
                  <span
                    className={`
                      font-mono
                      font-bold
                      uppercase
                      leading-none
                      tracking-[0.08em]
                      ${isPurple ? "text-primary" : "text-accent"}
                      ${
                        isFirstBlock
                          ? "text-2xl sm:text-4xl"
                          : "text-xl sm:text-3xl"
                      }
                    `}
                  >
                    {block.top}
                  </span>

                  {!isFirstBlock && (
                    <strong className="mt-2 font-display text-lg font-extrabold leading-none tracking-tight text-white sm:text-2xl">
                      {block.bottom}
                    </strong>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="h-10 sm:h-12 lg:h-16" />

        {/* HEADING */}

        <Reveal delay={100} className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-accent sm:text-5xl lg:text-6xl">
            AKTUALNOŚCI
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Sprawdź, co dzieje się na naszym Facebooku. Nowe wydarzenia,
            aktualności i wszystko, co warto wiedzieć przed kolejną rozgrywką.
          </p>
        </Reveal>

        {/* DESKTOP SOCIAL AREA */}

        <Reveal delay={180} className="mx-auto mt-10 max-w-6xl lg:mt-14">
          <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-14">
            {/* FACEBOOK CABINET - DESKTOP ONLY */}

            <div className="relative mx-auto hidden w-full max-w-[680px] lg:block">
              <div className="relative z-10">
                <Image
                  src="/images/facebook-frame.png"
                  alt=""
                  width={1024}
                  height={1536}
                  priority={false}
                  className="pointer-events-none relative z-10 h-auto w-full"
                />

                <div className="absolute left-[20.8%] top-[16.55%] z-20 h-[58.2%] w-[58.5%] overflow-hidden rounded-[2%] bg-black">
                  {consent === "accepted" ? (
                    <div className="absolute inset-0 overflow-hidden">
                      <div
                        className="
                          absolute
                          left-0
                          top-0
                          w-[138%]
                          origin-top-left
                          scale-[0.72]
                        "
                      >
                        <div
                          className="fb-page"
                          data-href="https://www.facebook.com/flippclub"
                          data-show-posts="true"
                          data-width="520"
                          data-height="900"
                          data-small-header="true"
                          data-adapt-container-width="true"
                          data-hide-cover="true"
                          data-show-facepile="false"
                        />
                      </div>
                    </div>
                  ) : (
                    <FacebookConsentPlaceholder className="min-h-full" />
                  )}
                </div>
              </div>
            </div>

            {/* SOCIAL CONTENT */}

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                ZNAJDŹ NAS ONLINE
              </p>

              {/* HEADING IN RHOMBUS */}

              <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#1c1420] sm:text-4xl">
                Zostań z nami w kontakcie
              </h3>

              {/* DESCRIPTION IN RHOMBUS */}

              <RhombusText className="mt-5 w-full">
                <p className="text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                  Wydarzenia, nowe maszyny, zdjęcia z klubu, ciekawostki i
                  wszystko, co dzieje się we FlippClubie. Wpadnij na nasze
                  social media i zobacz, co gramy.
                </p>
              </RhombusText>

              {/* SOCIAL LINKS */}

              <div className="mt-7 flex w-full flex-col gap-3">
                <SocialLink
                  href="https://www.facebook.com/flippclub"
                  label="Facebook"
                  icon={<FacebookIcon />}
                />

                <SocialLink
                  href="https://www.instagram.com/flippclub"
                  label="Instagram"
                  icon={<InstagramIcon />}
                />

                <SocialLink
                  href="https://www.tiktok.com/@flippclub"
                  label="TikTok"
                  icon={<TikTokIcon />}
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* MOBILE FACEBOOK */}

        <Reveal
          delay={220}
          className="mx-auto mt-8 w-full max-w-[520px] lg:hidden"
        >
          <div className="relative z-10 border-2 border-accent bg-[#010522] p-2 shadow-[6px_8px_0_var(--color-primary)]">
            <div className="overflow-hidden border-2 border-accent bg-[#010522]">
              {consent === "accepted" ? (
                <div
                  className="fb-page w-full"
                  data-href="https://www.facebook.com/flippclub"
                  data-show-posts="true"
                  data-width="500"
                  data-height="750"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="false"
                />
              ) : (
                <FacebookConsentPlaceholder />
              )}
            </div>
          </div>
        </Reveal>

        {/* MOBILE SOCIAL CONTENT */}

        <Reveal delay={260} className="mx-auto mt-10 w-full max-w-xl lg:hidden">
          <div className="text-center">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              ZNAJDŹ NAS ONLINE
            </p>

            {/* MOBILE HEADING RHOMBUS */}

            <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#1c1420] sm:text-4xl">
              Zostań z nami w kontakcie
            </h3>

            {/* MOBILE DESCRIPTION RHOMBUS */}

            <RhombusText className="mt-5 w-full">
              <p className="text-left text-base font-medium leading-relaxed text-[#45454d] sm:text-lg">
                Wydarzenia, nowe maszyny, zdjęcia z klubu, ciekawostki i
                wszystko, co dzieje się we FlippClubie. Wpadnij na nasze social
                media i zobacz, co gramy.
              </p>
            </RhombusText>

            {/* MOBILE SOCIAL LINKS */}

            <div className="mt-7 flex flex-col gap-3">
              <SocialLink
                href="https://www.facebook.com/flippclub"
                label="Facebook"
                icon={<FacebookIcon />}
              />

              <SocialLink
                href="https://www.instagram.com/flippclub"
                label="Instagram"
                icon={<InstagramIcon />}
              />

              <SocialLink
                href="https://www.tiktok.com/@flippclub"
                label="TikTok"
                icon={<TikTokIcon />}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
