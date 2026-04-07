export const COOKIE_CONSENT_STORAGE_KEY = 'larroque_cookie_consent_v1';
export const COOKIE_CONSENT_VERSION = 1;

export type OptionalCookieSettings = {
  analytics: boolean;
  marketing: boolean;
};

export type CookieConsentSettings = OptionalCookieSettings & {
  necessary: true;
  version: number;
  updatedAt: string;
};

function isValidConsent(value: unknown): value is CookieConsentSettings {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<CookieConsentSettings>;

  return (
    candidate.necessary === true &&
    typeof candidate.analytics === 'boolean' &&
    typeof candidate.marketing === 'boolean' &&
    typeof candidate.version === 'number' &&
    typeof candidate.updatedAt === 'string'
  );
}

export function buildCookieConsent(optionalSettings: OptionalCookieSettings): CookieConsentSettings {
  return {
    necessary: true,
    analytics: optionalSettings.analytics,
    marketing: optionalSettings.marketing,
    version: COOKIE_CONSENT_VERSION,
    updatedAt: new Date().toISOString()
  };
}

export function readCookieConsent(): CookieConsentSettings | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const rawValue = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue);

    if (!isValidConsent(parsed)) {
      return null;
    }

    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function saveCookieConsent(optionalSettings: OptionalCookieSettings): CookieConsentSettings {
  const consent = buildCookieConsent(optionalSettings);

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  }

  return consent;
}

export function syncCookieConsentToWindow(consent: CookieConsentSettings | null): void {
  if (typeof window === 'undefined') {
    return;
  }

  if (consent) {
    window.__lpCookieConsent = consent;
    return;
  }

  delete window.__lpCookieConsent;
}

export function canTrackAnalytics(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  if (window.__lpCookieConsent) {
    return Boolean(window.__lpCookieConsent.analytics);
  }

  const storedConsent = readCookieConsent();

  if (storedConsent) {
    syncCookieConsentToWindow(storedConsent);
    return Boolean(storedConsent.analytics);
  }

  return false;
}
