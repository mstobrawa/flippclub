"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  type ExternalContentConsent,
  externalContentConsentChangedEvent,
  externalContentConsentStorageKey,
  getExternalContentConsent,
  setExternalContentConsent,
} from "@/lib/externalContentConsent";

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

function FacebookConsentPlaceholder({ className = "" }: { className?: string }) {
  function acceptFacebookContent() {
    setExternalContentConsent("accepted");
  }

  return (
    <div
      className={`flex h-full min-h-[360px] flex-col items-center justify-center bg-surface px-6 py-10 text-center ${className}`}
    >
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
        Aktualności z Facebooka
      </p>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
        Zaakceptuj zewnętrzne treści, aby wyświetlić Facebook Feed.
      </p>
      <button
        type="button"
        onClick={acceptFacebookContent}
        className="mt-5 inline-flex items-center justify-center rounded-pill bg-accent px-5 py-3 font-display text-xs font-extrabold uppercase tracking-[0.1em] text-ink transition hover:-translate-y-0.5 hover:bg-primary hover:text-on-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        Akceptuj Facebook
      </button>
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
        // The placeholder is intentionally not replaced with an external fallback.
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
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)] pt-0 pb-6 sm:pb-8 lg:pb-10"
    >
      {/* ================================================== */}
      {/* GŁÓWNY WRAPPER */}
      {/* ================================================== */}

      <div className="relative mx-auto w-full max-w-7xl">
        {/* ================================================== */}
        {/* MOCNY NEONOWY GLOW */}
        {/* ================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -inset-x-12
            top-0
            -bottom-8.75
            rounded-b-[40px]
            bg-primary
            opacity-100
            blur-[55px]
            shadow-[0_0_100px_35px_rgba(13,11,84,0.95)]
            sm:-inset-x-16
            sm:bottom-[-45px]
            sm:blur-[65px]
            sm:shadow-[0_0_130px_45px_rgba(13,11,84,0.98)]
            lg:-inset-x-24
            lg:bottom-[-55px]
            lg:blur-[80px]
            lg:shadow-[0_0_170px_60px_rgba(13,11,84,1)]
          "
        />

        {/* ================================================== */}
        {/* GŁÓWNA JASNA POWIERZCHNIA */}
        {/* ================================================== */}

        <div
          className="
            relative
            rounded-b-4xl
            bg-background
            px-5
            pb-8
            sm:px-8
            sm:pb-10
            lg:px-10
            lg:pb-12
          "
        >
          {/* ================================================== */}
          {/* SUBNAV */}
          {/* ================================================== */}

          <div className="relative -mx-5 px-5 pt-6 sm:-mx-8 sm:px-8 sm:pt-8 lg:-mx-10 lg:px-10 lg:pt-10">
            {/* Dekoracje SubNav */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border-[7px] border-primary/70 sm:-left-10 sm:h-28 sm:w-28 sm:border-[10px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[4%] top-2 h-3 w-3 rounded-full bg-accent sm:left-[5%] sm:h-5 sm:w-5"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-2 -left-5 h-10 w-16 rounded-t-full bg-primary/20 sm:-left-6 sm:h-16 sm:w-28"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[4%] top-3 h-4 w-4 rounded-full bg-primary sm:right-[5%] sm:top-4 sm:h-6 sm:w-6"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-accent/40 sm:-right-8 sm:h-24 sm:w-24"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-2 right-[10%] h-7 w-7 rounded-full border-[4px] border-primary/60 sm:bottom-3 sm:right-[12%] sm:h-10 sm:w-10 sm:border-[6px]"
            />

            {/* Karty */}

            <div
              key={slide.id}
              className="relative z-10 grid grid-cols-2 gap-3 animate-[subnav-in_500ms_ease-out] lg:grid-cols-4"
            >
              {slide.blocks.map((block, blockIndex) => {
                const isPurple = blockIndex % 2 === 0;
                const isFirstBlock = blockIndex === 0;

                return (
                  <div
                    key={`${slide.id}-${block.top}`}
                    className={`flex h-24 flex-col items-center justify-center rounded-2xl border px-3 py-3 text-center transition-colors duration-500 sm:h-28 sm:px-5 ${
                      isPurple
                        ? "border-primary/35 bg-primary/15"
                        : "border-accent/50 bg-accent/25"
                    }`}
                  >
                    <span
                      className={`font-mono font-bold uppercase leading-none tracking-[0.08em] text-text ${
                        isFirstBlock
                          ? "text-3xl sm:text-4xl"
                          : "text-2xl sm:text-3xl"
                      }`}
                    >
                      {block.top}
                    </span>

                    {!isFirstBlock && (
                      <strong className="mt-2 font-display text-xl font-extrabold leading-none tracking-tight text-text sm:text-2xl">
                        {block.bottom}
                      </strong>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================================================== */}
          {/* ODSTĘP PRZED AKTUALNOŚCIAMI */}
          {/* ================================================== */}

          <div className="h-8 sm:h-10 lg:h-12" />

          {/* ================================================== */}
          {/* HEADING */}
          {/* ================================================== */}

          <div className="relative mx-auto max-w-2xl text-center">
            {/* Dekoracje */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-32 top-1/2 hidden h-14 w-14 -translate-y-1/2 rounded-full border-[6px] border-primary lg:block xl:h-16 xl:w-16"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-2 hidden h-5 w-5 rotate-12 bg-accent lg:block"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full border-[6px] border-accent lg:block xl:h-20 xl:w-20"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-1 hidden h-5 w-5 -rotate-12 bg-primary lg:block"
            />

            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-primary sm:text-5xl lg:text-6xl">
              AKTUALNOŚCI
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Sprawdź, co dzieje się na naszym Facebooku. Nowe wydarzenia,
              aktualności i wszystko, co warto wiedzieć przed kolejną rozgrywką.
            </p>
          </div>

          {/* ================================================== */}
          {/* DESKTOP ARCADE CABINET */}
          {/* ================================================== */}

          <div className="relative mx-[calc(50%-50vw)] mt-2 hidden w-screen lg:block">
            {/* ================================================== */}
            {/* LEWA STRONA */}
            {/* ================================================== */}

            <Image
              src="/images/heart.png"
              alt=""
              width={180}
              height={180}
              aria-hidden="true"
              className="pointer-events-none absolute left-[9%] top-[22%] z-0 w-[115px] -rotate-12 xl:w-[140px]"
            />

            <div
              aria-hidden="true"
              className="absolute left-[2%] top-[43%] z-0 h-20 w-20 rounded-full border-[7px] border-primary xl:h-24 xl:w-24"
            />

            <div
              aria-hidden="true"
              className="absolute left-[10%] top-[10%] z-0 h-6 w-6 rounded-full bg-accent xl:h-7 xl:w-7"
            />

            <div
              aria-hidden="true"
              className="absolute left-[15%] top-[61%] z-0 h-12 w-12 rounded-full border-[5px] border-accent xl:h-14 xl:w-14"
            />

            <div
              aria-hidden="true"
              className="absolute left-[5%] top-[76%] z-0 h-16 w-16 rounded-full border-[6px] border-primary xl:h-20 xl:w-20"
            />

            <div
              aria-hidden="true"
              className="absolute left-[10%] top-[70%] z-0 h-5 w-5 rotate-12 bg-accent xl:h-6 xl:w-6"
            />

            <div
              aria-hidden="true"
              className="absolute left-[24%] top-[38%] z-0 h-4 w-4 rotate-45 bg-primary"
            />

            {/* ================================================== */}
            {/* PRAWA STRONA */}
            {/* ================================================== */}

            <Image
              src="/images/like.png"
              alt=""
              width={180}
              height={180}
              aria-hidden="true"
              className="pointer-events-none absolute right-[8%] top-[43%] z-0 w-[115px] rotate-12 xl:w-[140px]"
            />

            <div
              aria-hidden="true"
              className="absolute right-[2%] top-[58%] z-0 h-20 w-20 rounded-full border-[7px] border-accent xl:h-24 xl:w-24"
            />

            <div
              aria-hidden="true"
              className="absolute right-[12%] top-[12%] z-0 h-12 w-12 rounded-full border-[5px] border-primary xl:h-14 xl:w-14"
            />

            <div
              aria-hidden="true"
              className="absolute right-[9%] top-[20%] z-0 h-5 w-5 rotate-12 bg-accent xl:h-6 xl:w-6"
            />

            <div
              aria-hidden="true"
              className="absolute right-[15%] top-[68%] z-0 h-12 w-12 rounded-full border-[5px] border-accent xl:h-14 xl:w-14"
            />

            <div
              aria-hidden="true"
              className="absolute right-[5%] top-[76%] z-0 h-16 w-16 rounded-full border-[6px] border-primary xl:h-20 xl:w-20"
            />

            <div
              aria-hidden="true"
              className="absolute right-[23%] top-[74%] z-0 h-5 w-5 rotate-45 bg-primary xl:h-6 xl:w-6"
            />

            <div
              aria-hidden="true"
              className="absolute right-[25%] top-[38%] z-0 h-4 w-4 rotate-45 bg-accent"
            />

            {/* ================================================== */}
            {/* ARCADE CABINET */}
            {/* ================================================== */}

            <div className="relative z-10 mx-auto w-full max-w-220">
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
                  <div className="flex min-h-full justify-center">
                    <div className="min-w-0">
                      <div
                        className="fb-page"
                        data-href="https://www.facebook.com/flippclub"
                        data-show-posts="true"
                        data-width="500"
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

          {/* ================================================== */}
          {/* MOBILE / TABLET */}
          {/* ================================================== */}

          <div className="mx-auto mt-3 w-full max-w-[520px] lg:hidden">
            <div className="rounded-[28px] border-4 border-text bg-dark-gray p-2 shadow-[6px_8px_0_var(--color-primary)]">
              <div className="overflow-hidden rounded-[20px] border-4 border-accent bg-background">
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
          </div>
        </div>
      </div>
    </section>
  );
}
