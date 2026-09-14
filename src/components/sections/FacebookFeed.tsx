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
      className={`${visible ? "page-reveal-visible" : "page-reveal-hidden"} ${className}`}
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
          {/* SUBNAV / CENNIK */}
          {/* ================================================== */}

          <div className="relative -mx-5 px-5 pt-6 sm:-mx-8 sm:px-8 sm:pt-8 lg:-mx-10 lg:px-10 lg:pt-10">
            {/* DEKOR 1 — DUŻE FIOLETOWE KOŁO — LEWA GÓRA */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[1%]
                top-1/2
                z-0
                h-16
                w-16
                -translate-y-1/2
                rounded-full
                border-[7px]
                border-primary/70
                animate-[decor-float_11s_ease-in-out_infinite]
                sm:left-[1.5%]
                sm:h-28
                sm:w-28
                sm:border-[10px]
              "
            />

            {/* DEKOR 2 — MAŁA ŻÓŁTA KROPKA — LEWA GÓRA */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[4%]
                top-2
                z-0
                h-3
                w-3
                rounded-full
                bg-accent
                animate-[decor-float-small_9s_ease-in-out_infinite]
                sm:left-[5%]
                sm:h-5
                sm:w-5
              "
            />

            {/* DEKOR 4 — MAŁA FIOLETOWA KROPKA — PRAWA GÓRA */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[4%]
                top-3
                z-0
                h-4
                w-4
                rounded-full
                bg-primary
                animate-[decor-float_10s_ease-in-out_infinite]
                sm:right-[5%]
                sm:top-4
                sm:h-6
                sm:w-6
              "
            />

            {/* DEKOR 5 — DUŻE ŻÓŁTE KOŁO — PRAWA ŚRODKOWA */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-5
                top-1/2
                z-0
                h-16
                w-16
                -translate-y-1/2
                rounded-full
                bg-accent/40
                animate-[decor-drift-reverse_12s_ease-in-out_infinite]
                sm:-right-8
                sm:h-24
                sm:w-24
              "
            />

            {/* DEKOR 6 — MAŁE FIOLETOWE KOŁO — PRAWY DÓŁ */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-2
                right-[10%]
                z-0
                h-7
                w-7
                rounded-full
                border-4
                border-primary/60
                animate-[decor-float_11s_ease-in-out_infinite]
                sm:bottom-3
                sm:right-[12%]
                sm:h-10
                sm:w-10
                sm:border-[6px]
              "
            />

            <Reveal className="relative z-10" delay={0}>
              <div
                key={slide.id}
                className="grid grid-cols-1 gap-3 animate-[subnav-in_500ms_ease-out] lg:grid-cols-4"
              >
                {slide.blocks.map((block, blockIndex) => {
                  const isPurple = blockIndex % 2 === 0;
                  const isFirstBlock = blockIndex === 0;

                  return (
                    <div
                      key={`${slide.id}-${block.top}`}
                      className={`flex h-20 flex-col items-center justify-center rounded-2xl border px-3 py-2 text-center transition-colors duration-500 sm:h-24 sm:px-5 sm:py-3 ${
                        isPurple
                          ? "border-primary/35 bg-primary/15"
                          : "border-accent/50 bg-accent/25"
                      }`}
                    >
                      <span
                        className={`font-mono font-bold uppercase leading-none tracking-[0.08em] text-text ${
                          isFirstBlock
                            ? "text-2xl sm:text-4xl"
                            : "text-xl sm:text-3xl"
                        }`}
                      >
                        {block.top}
                      </span>

                      {!isFirstBlock && (
                        <strong className="mt-2 font-display text-lg font-extrabold leading-none tracking-tight text-text sm:text-2xl">
                          {block.bottom}
                        </strong>
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* ================================================== */}
          {/* ODSTĘP */}
          {/* ================================================== */}

          <div className="h-8 sm:h-10 lg:h-12" />

          {/* ================================================== */}
          {/* HEADING */}
          {/* ================================================== */}

          <Reveal delay={100}>
            <div className="relative mx-auto max-w-2xl text-center">
              {/* DEKOR 7 — DUŻE FIOLETOWE KOŁO — LEWO OD NAGŁÓWKA */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-32
                  top-1/2
                  hidden
                  h-14
                  w-14
                  -translate-y-1/2
                  rounded-full
                  border-[6px]
                  border-primary
                  animate-[decor-float_12s_ease-in-out_infinite]
                  lg:block
                  xl:h-16
                  xl:w-16
                "
              />

              {/* DEKOR 8 — MAŁY ŻÓŁTY KWADRAT — LEWY GÓRNY RÓG */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-16
                  -top-2
                  hidden
                  h-5
                  w-5
                  rotate-12
                  bg-accent
                  animate-[decor-drift_10s_ease-in-out_infinite]
                  lg:block
                "
              />

              {/* DEKOR 9 — DUŻE ŻÓŁTE KOŁO — PRAWO OD NAGŁÓWKA */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  top-1/2
                  hidden
                  h-16
                  w-16
                  -translate-y-1/2
                  rounded-full
                  border-[6px]
                  border-accent
                  animate-[decor-float_13s_ease-in-out_infinite]
                  lg:block
                  xl:h-20
                  xl:w-20
                "
              />

              {/* DEKOR 10 — MAŁY FIOLETOWY KWADRAT — PRAWY GÓRNY RÓG */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-1
                  hidden
                  h-5
                  w-5
                  -rotate-12
                  bg-primary
                  animate-[decor-drift-reverse_11s_ease-in-out_infinite]
                  lg:block
                "
              />

              <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-primary sm:text-5xl lg:text-6xl">
                AKTUALNOŚCI
              </h2>

              <p className="relative z-10 mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Sprawdź, co dzieje się na naszym Facebooku. Nowe wydarzenia,
                aktualności i wszystko, co warto wiedzieć przed kolejną
                rozgrywką.
              </p>
            </div>
          </Reveal>

          {/* ================================================== */}
          {/* DESKTOP ARCADE CABINET */}
          {/* ================================================== */}

          <Reveal delay={180}>
            <div className="relative mx-[calc(50%-50vw)] mt-2 hidden w-screen lg:block">
              {/* ================================================== */}
              {/* LEWA STRONA DEKORACJI */}
              {/* ================================================== */}

              {/* DEKOR 11 — SERDUSZKO — LEWA GÓRA */}
              <Image
                src="/images/heart.png"
                alt=""
                width={180}
                height={180}
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[9%]
                  top-[22%]
                  z-0
                  w-28.75
                  -rotate-12
                  animate-[decor-drift-reverse_13s_ease-in-out_infinite]
                  xl:w-35
                "
              />

              {/* DEKOR 12 — DUŻE FIOLETOWE KOŁO — LEWA ŚRODKOWA */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[2%]
                  top-[43%]
                  z-0
                  h-20
                  w-20
                  rounded-full
                  border-[7px]
                  border-primary
                  animate-[decor-float_14s_ease-in-out_infinite]
                  xl:h-24
                  xl:w-24
                "
              />

              {/* DEKOR 13 — MAŁA ŻÓŁTA KROPKA — LEWA GÓRA */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[10%]
                  top-[10%]
                  z-0
                  h-6
                  w-6
                  rounded-full
                  bg-accent
                  animate-[decor-float-small_9s_ease-in-out_infinite]
                  xl:h-7
                  xl:w-7
                "
              />

              {/* DEKOR 14 — ŚREDNIE ŻÓŁTE KOŁO — LEWA ŚRODKOWA/DÓŁ */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[15%]
                  top-[61%]
                  z-0
                  h-12
                  w-12
                  rounded-full
                  border-[5px]
                  border-accent
                  animate-[decor-drift_12s_ease-in-out_infinite]
                  xl:h-14
                  xl:w-14
                "
              />

              {/* DEKOR 15 — DUŻE FIOLETOWE KOŁO — LEWY DÓŁ */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[5%]
                  top-[76%]
                  z-0
                  h-16
                  w-16
                  rounded-full
                  border-[6px]
                  border-primary
                  animate-[decor-float_15s_ease-in-out_infinite]
                  xl:h-20
                  xl:w-20
                "
              />

              {/* DEKOR 16 — MAŁY ŻÓŁTY KWADRAT — LEWY DÓŁ */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[10%]
                  top-[70%]
                  z-0
                  h-5
                  w-5
                  rotate-12
                  bg-accent
                  animate-[decor-drift-reverse_11s_ease-in-out_infinite]
                  xl:h-6
                  xl:w-6
                "
              />

              {/* DEKOR 17 — MAŁY FIOLETOWY DIAMENT — LEWA ŚRODKOWA */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[24%]
                  top-[38%]
                  z-0
                  h-4
                  w-4
                  rotate-45
                  bg-primary
                  animate-[decor-spin-float_13s_ease-in-out_infinite]
                "
              />

              {/* ================================================== */}
              {/* PRAWA STRONA DEKORACJI */}
              {/* ================================================== */}

              {/* DEKOR 18 — LIKE — PRAWA ŚRODKOWA */}
              <Image
                src="/images/like.png"
                alt=""
                width={180}
                height={180}
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-[8%]
                  top-[43%]
                  z-0
                  w-[115px]
                  rotate-12
                  animate-[decor-drift_14s_ease-in-out_infinite]
                  xl:w-[140px]
                "
              />

              {/* DEKOR 19 — DUŻE ŻÓŁTE KOŁO — PRAWA ŚRODKOWA */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-[2%]
                  top-[58%]
                  z-0
                  h-20
                  w-20
                  rounded-full
                  border-[7px]
                  border-accent
                  animate-[decor-float_13s_ease-in-out_infinite]
                  xl:h-24
                  xl:w-24
                "
              />

              {/* DEKOR 20 — ŚREDNIE FIOLETOWE KOŁO — PRAWA GÓRA */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-[12%]
                  top-[12%]
                  z-0
                  h-12
                  w-12
                  rounded-full
                  border-[5px]
                  border-primary
                  animate-[decor-drift-reverse_12s_ease-in-out_infinite]
                  xl:h-14
                  xl:w-14
                "
              />

              {/* DEKOR 21 — MAŁY ŻÓŁTY KWADRAT — PRAWA GÓRA */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-[9%]
                  top-[20%]
                  z-0
                  h-5
                  w-5
                  rotate-12
                  bg-accent
                  animate-[decor-float-small_10s_ease-in-out_infinite]
                  xl:h-6
                  xl:w-6
                "
              />

              {/* DEKOR 22 — ŚREDNIE ŻÓŁTE KOŁO — PRAWY DÓŁ */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-[15%]
                  top-[68%]
                  z-0
                  h-12
                  w-12
                  rounded-full
                  border-[5px]
                  border-accent
                  animate-[decor-float_15s_ease-in-out_infinite]
                  xl:h-14
                  xl:w-14
                "
              />

              {/* DEKOR 23 — DUŻE FIOLETOWE KOŁO — PRAWY DÓŁ */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-[5%]
                  top-[76%]
                  z-0
                  h-16
                  w-16
                  rounded-full
                  border-[6px]
                  border-primary
                  animate-[decor-drift_13s_ease-in-out_infinite]
                  xl:h-20
                  xl:w-20
                "
              />

              {/* DEKOR 24 — MAŁY FIOLETOWY DIAMENT — PRAWY DÓŁ */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-[23%]
                  top-[74%]
                  z-0
                  h-5
                  w-5
                  rotate-45
                  bg-primary
                  animate-[decor-spin-float_14s_ease-in-out_infinite]
                  xl:h-6
                  xl:w-6
                "
              />

              {/* DEKOR 25 — MAŁY ŻÓŁTY DIAMENT — PRAWA ŚRODKOWA */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-[25%]
                  top-[38%]
                  z-0
                  h-4
                  w-4
                  rotate-45
                  bg-accent
                  animate-[decor-spin-float_12s_ease-in-out_infinite]
                "
              />

              {/* ================================================== */}
              {/* ARCADE CABINET */}
              {/* ================================================== */}

              <div className="relative z-10 mx-auto w-full max-w-220">
                <div
                  aria-hidden="true"
                  className="facebook-glow-primary pointer-events-none absolute -inset-16 rounded-[64px]"
                />

                <div
                  aria-hidden="true"
                  className="facebook-glow-secondary pointer-events-none absolute -inset-8 rounded-[56px]"
                />

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
          </Reveal>

          {/* ================================================== */}
          {/* MOBILE / TABLET */}
          {/* ================================================== */}

          <Reveal
            delay={180}
            className="relative mx-auto mt-3 w-full max-w-[520px] lg:hidden"
          >
            {/* MOBILE / TABLET NEON */}

            <div
              aria-hidden="true"
              className="facebook-glow-primary pointer-events-none absolute -inset-8 rounded-[38px]"
            />

            <div
              aria-hidden="true"
              className="facebook-glow-secondary pointer-events-none absolute -inset-4 rounded-[34px]"
            />

            <div className="relative z-10 rounded-[28px] border-4 border-text bg-dark-gray p-2 shadow-[6px_8px_0_var(--color-primary)]">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
