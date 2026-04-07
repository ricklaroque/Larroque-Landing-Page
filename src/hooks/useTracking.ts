import { canTrackAnalytics } from '../lib/cookieConsent';

type TrackingEvent =
  | 'category_click'
  | 'contact_phone_click'
  | 'contact_whatsapp_click'
  | 'cta_click'
  | 'section_view';

type EventProperties = Record<string, unknown>;

export function useTracking() {
  const track = (event: TrackingEvent, properties?: EventProperties) => {
    if (import.meta.env.DEV) {
      console.log('[track]', event, properties);
      return;
    }

    if (!canTrackAnalytics()) {
      return;
    }

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...properties });
  };

  return { track };
}
