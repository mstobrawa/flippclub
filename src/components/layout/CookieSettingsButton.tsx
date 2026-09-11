"use client";

import { openCookieSettings } from "@/lib/externalContentConsent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="w-fit font-mono text-xs font-bold uppercase tracking-[0.12em] text-on-ink/70 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      Ustawienia cookies
    </button>
  );
}
