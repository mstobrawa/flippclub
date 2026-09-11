"use client";

import { useEffect, useRef, useState } from "react";
import {
  type ExternalContentConsent,
  cookieSettingsOpenEvent,
  getExternalContentConsent,
  setExternalContentConsent,
} from "@/lib/externalContentConsent";

/**
 * Lets visitors opt in to the Facebook feed without delaying the server render.
 * The initial null state keeps server and first client render identical.
 */
export function CookieBanner() {
  const [consent, setConsent] = useState<ExternalContentConsent | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const necessaryButtonRef = useRef<HTMLButtonElement>(null);
  const acceptButtonRef = useRef<HTMLButtonElement>(null);
  const declineButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setConsent(getExternalContentConsent());
      setIsReady(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    function showSettings() {
      setSettingsOpen(true);
    }

    window.addEventListener(cookieSettingsOpenEvent, showSettings);

    return () => window.removeEventListener(cookieSettingsOpenEvent, showSettings);
  }, []);

  useEffect(() => {
    if (isReady && (consent === null || settingsOpen)) {
      necessaryButtonRef.current?.focus();
    }
  }, [consent, isReady, settingsOpen]);

  function chooseConsent(choice: ExternalContentConsent) {
    setExternalContentConsent(choice);
    setConsent(choice);
    setSettingsOpen(false);
  }

  if (!isReady || (consent !== null && !settingsOpen)) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      onKeyDown={(event) => {
        if (event.key === "Tab") {
          event.preventDefault();
          const buttons = [
            necessaryButtonRef.current,
            declineButtonRef.current,
            acceptButtonRef.current,
          ].filter((button): button is HTMLButtonElement => button !== null);
          const currentIndex = buttons.indexOf(
            document.activeElement as HTMLButtonElement,
          );
          const direction = event.shiftKey ? -1 : 1;
          const nextIndex =
            (currentIndex + direction + buttons.length) % buttons.length;

          buttons[nextIndex]?.focus();
        }
      }}
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6 lg:p-8"
    >
      <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border-2 border-primary bg-surface p-5 shadow-[8px_9px_0_var(--color-accent)] sm:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-5 -top-5 h-16 w-16 rotate-45 bg-accent sm:h-20 sm:w-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-5 right-7 hidden h-7 w-7 rounded-full border-[5px] border-primary sm:block"
        />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Twoja prywatność
            </p>
            <h2
              id="cookie-banner-title"
              className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-text sm:text-3xl"
            >
              Tylko niezbędne mechanizmy
            </h2>
            <p
              id="cookie-banner-description"
              className="mt-3 text-sm leading-relaxed text-muted sm:text-base"
            >
              Ta strona korzysta z niezbędnych plików potrzebnych do jej
              prawidłowego działania. Korzystamy również z osadzonego
              Facebook Feed, który może wykorzystywać pliki cookies podmiotów
              trzecich.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:items-end">
            <button
              ref={necessaryButtonRef}
              type="button"
              onClick={() => chooseConsent("necessary")}
              className="inline-flex items-center justify-center rounded-pill border-2 border-primary px-6 py-3 font-display text-sm font-extrabold uppercase tracking-[0.1em] text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-on-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Tylko niezbędne
            </button>
            <button
              ref={declineButtonRef}
              type="button"
              onClick={() => chooseConsent("declined")}
              className="inline-flex items-center justify-center rounded-pill border-2 border-border px-6 py-3 font-display text-sm font-extrabold uppercase tracking-[0.1em] text-text transition hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Nie zgadzam się
            </button>
            <button
              ref={acceptButtonRef}
              type="button"
              onClick={() => chooseConsent("accepted")}
              className="group inline-flex items-center justify-center gap-2 rounded-pill bg-accent px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-[0.1em] text-ink transition hover:-translate-y-0.5 hover:bg-primary hover:text-on-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Akceptuję
              <span
                aria-hidden="true"
                className="text-lg leading-none transition-transform group-hover:rotate-12"
              >
                +
              </span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
