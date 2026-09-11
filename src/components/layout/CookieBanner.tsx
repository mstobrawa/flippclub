"use client";

import { useEffect, useRef, useState } from "react";

const storageKey = "flippclub-cookie-notice-accepted";

/**
 * Acknowledges the site notice about strictly necessary browser storage.
 * The initial null state keeps server and first client render identical.
 */
export function CookieBanner() {
  const [accepted, setAccepted] = useState<boolean | null>(null);
  const acknowledgeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      try {
        setAccepted(window.localStorage.getItem(storageKey) === "true");
      } catch {
        // If browser storage is unavailable, show the notice for this visit.
        setAccepted(false);
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!accepted) {
      acknowledgeButtonRef.current?.focus();
    }
  }, [accepted]);

  function acknowledge() {
    try {
      window.localStorage.setItem(storageKey, "true");
    } catch {
      // The notice can still be dismissed for the current visit.
    }

    setAccepted(true);
  }

  if (accepted !== false) {
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
          acknowledgeButtonRef.current?.focus();
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
              FlippClub korzysta wyłącznie z plików cookies i lokalnego
              zapisu niezbędnych do prawidłowego działania strony. Nie
              śledzimy użytkowników ani nie używamy reklam, analityki czy
              marketingu.
            </p>
          </div>

          <button
            ref={acknowledgeButtonRef}
            type="button"
            onClick={acknowledge}
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-pill bg-accent px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-[0.1em] text-ink transition hover:-translate-y-0.5 hover:bg-primary hover:text-on-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Rozumiem
            <span
              aria-hidden="true"
              className="text-lg leading-none transition-transform group-hover:rotate-12"
            >
              +
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
