export {};

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown> | unknown[] | IArguments>;
    gtag?: (...args: unknown[]) => void;
    __lpCookieConsent?: {
      necessary: true;
      analytics: boolean;
      marketing: boolean;
      version: number;
      updatedAt: string;
    };
  }
}
