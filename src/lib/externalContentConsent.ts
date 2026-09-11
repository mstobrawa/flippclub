export const externalContentConsentStorageKey =
  "flippclub-external-content-consent";
export const externalContentConsentChangedEvent =
  "flippclub:external-content-consent-changed";
export const cookieSettingsOpenEvent = "flippclub:open-cookie-settings";

export type ExternalContentConsent = "necessary" | "accepted" | "declined";

export function getExternalContentConsent(): ExternalContentConsent | null {
  try {
    const value = window.localStorage.getItem(externalContentConsentStorageKey);

    return value === "necessary" ||
      value === "accepted" ||
      value === "declined"
      ? value
      : null;
  } catch {
    return null;
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(cookieSettingsOpenEvent));
}

export function setExternalContentConsent(consent: ExternalContentConsent) {
  try {
    window.localStorage.setItem(externalContentConsentStorageKey, consent);
  } catch {
    // Keep the choice for the current visit if browser storage is unavailable.
  }

  window.dispatchEvent(
    new CustomEvent<ExternalContentConsent>(
      externalContentConsentChangedEvent,
      { detail: consent },
    ),
  );
}
