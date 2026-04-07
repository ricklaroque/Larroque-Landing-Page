import React from 'react';
import { FaCookieBite, FaRegStar, FaStar, FaStarHalfAlt, FaWhatsapp } from 'react-icons/fa';
import { useTracking } from './hooks/useTracking';
import { readCookieConsent, saveCookieConsent, syncCookieConsentToWindow } from './lib/cookieConsent';

const contacts = {
  whatsapp: 'https://api.whatsapp.com/send?phone=5553991544789&text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento.',
  whatsappDisplay: '(53) 99154-4789',
  phone: '(53) 3228-2536',
  address: 'R. Prof. Mario Peiruque, 518 - Areal, Pelotas - RS',
  landline: '(53) 3226-2143'
};

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Parceiros', href: '#destaques' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Avaliacoes', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' }
];

const carouselLogos = [
  { src: '/images/carousel-images/Peruzzo-cropped.png', alt: 'Peruzzo' },
  { src: '/images/carousel-images/ACTEC-cropped.png', alt: 'ACTEC' },
  { src: '/images/carousel-images/SSConstrutora-cropped.png', alt: 'SS Construtora' },
  { src: '/images/carousel-images/ELLO-transparent.png', alt: 'ELLO' },
  { src: '/images/carousel-images/Osirnet-cropped.png', alt: 'Osirnet' },
  { src: '/images/carousel-images/VLDconstrucoes-cropped.png', alt: 'VLD Construcoes' },
  { src: '/images/carousel-images/JSempreiteira-transparent.png', alt: 'JS Empreiteira' }
];

const carouselItems = Array.from({ length: carouselLogos.length * 3 }, (_, index) => ({
  id: index,
  ...carouselLogos[index % carouselLogos.length]
}));

const brands = [
  { src: '/images/sika--600.png', alt: 'Sika' },
  { src: '/images/Parceiro-Minerion-Dagoberto-1.webp', alt: 'Dagoberto Barcellos' },
  { src: '/images/logo-com-bordalogotipo-pacetta-borda.png', alt: 'Pacetta' },
  { src: '/images/votorantim-nova-2008-logo-png_seeklogo-150735.png', alt: 'Votorantim' },
  { src: '/images/tramontina-logo-png_seeklogo-272392.png', alt: 'Tramontina' },
  { src: '/images/logoNova.png', alt: 'Tinsul Tintas' }
];

const differentials = [
  {
    badge: 'Entrega rapida',
    title: 'Sua obra sem parada',
    description: 'Entregas ageis no bairro para manter o ritmo da obra sem perda de tempo. Dependendo da regiao, pode haver frete gratis.'
  },
  {
    badge: 'WhatsApp ativo',
    title: 'Atendimento em poucos minutos',
    description: 'Voce chama no WhatsApp, recebe orientacao e ja sai com o pedido encaminhado.'
  },
  {
    badge: 'Mix completo',
    title: 'Variedade para construcao e reforma',
    description: 'Argamassa, acabamento, ferramentas e itens de manutencao em um so lugar.'
  },
  {
    badge: 'Atendimento proximo',
    title: 'Equipe que entende sua necessidade',
    description: 'Suporte pratico para indicar materiais certos para cada etapa da sua obra.'
  }
];

const fallbackTestimonials = [
  {
    id: 'fallback-1',
    author: 'Maria Ines Sa Brito',
    meta: '7 avaliacoes · 2 fotos',
    rating: 5,
    date: '10 meses atras',
    text: 'Servico impecavel, pessoal atencioso, entrega rapida e preco justo. Super recomendo. Estou gostando bastante.',
    sourceUrl:
      'https://www.google.com/maps/place/Larroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o/@-31.7476626,-52.3188551,17z/data=!3m1!5s0x9511b4ff8229d4bb:0x1d4aa7038b6de34c!4m15!1m8!3m7!1s0x9511b50220000193:0x88d37ded4740d5a!2sLarroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o!8m2!3d-31.7476626!4d-52.3162802!10e1!16s%2Fg%2F1tg_h6lq!3m5!1s0x9511b50220000193:0x88d37ded4740d5a!8m2!3d-31.7476626!4d-52.3162802!16s%2Fg%2F1tg_h6lq?entry=ttu'
  },
  {
    id: 'fallback-2',
    author: 'Mariuza Pinheiro',
    meta: 'Local Guide · 63 avaliacoes',
    rating: 5,
    date: '4 anos atras',
    text: 'Tem absolutamente tudo! Preco bom e vende a quantidade de produtos conforme a necessidade. Atendimento tambem via WhatsApp com possibilidade de pre pagamento via Pix. Recomendo.',
    sourceUrl:
      'https://www.google.com/maps/place/Larroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o/@-31.7476626,-52.3188551,17z/data=!3m1!5s0x9511b4ff8229d4bb:0x1d4aa7038b6de34c!4m15!1m8!3m7!1s0x9511b50220000193:0x88d37ded4740d5a!2sLarroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o!8m2!3d-31.7476626!4d-52.3162802!10e1!16s%2Fg%2F1tg_h6lq!3m5!1s0x9511b50220000193:0x88d37ded4740d5a!8m2!3d-31.7476626!4d-52.3162802!16s%2Fg%2F1tg_h6lq?entry=ttu'
  },
  {
    id: 'fallback-3',
    author: 'Sandra Lucia Tavares',
    meta: 'Local Guide · 33 avaliacoes',
    rating: 5,
    date: '1 ano atras',
    text: 'Otimo atendimento.',
    sourceUrl:
      'https://www.google.com/maps/place/Larroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o/@-31.7476626,-52.3188551,17z/data=!3m1!5s0x9511b4ff8229d4bb:0x1d4aa7038b6de34c!4m15!1m8!3m7!1s0x9511b50220000193:0x88d37ded4740d5a!2sLarroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o!8m2!3d-31.7476626!4d-52.3162802!10e1!16s%2Fg%2F1tg_h6lq!3m5!1s0x9511b50220000193:0x88d37ded4740d5a!8m2!3d-31.7476626!4d-52.3162802!16s%2Fg%2F1tg_h6lq?entry=ttu'
  },
  {
    id: 'fallback-4',
    author: 'Bernard Troger',
    meta: 'Local Guide · 331 avaliacoes · 508 fotos',
    rating: 5,
    date: '4 anos atras',
    text: 'Bom atendimento e facil de encontrar as coisas.',
    sourceUrl:
      'https://www.google.com/maps/place/Larroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o/@-31.7476626,-52.3188551,17z/data=!3m1!5s0x9511b4ff8229d4bb:0x1d4aa7038b6de34c!4m15!1m8!3m7!1s0x9511b50220000193:0x88d37ded4740d5a!2sLarroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o!8m2!3d-31.7476626!4d-52.3162802!10e1!16s%2Fg%2F1tg_h6lq!3m5!1s0x9511b50220000193:0x88d37ded4740d5a!8m2!3d-31.7476626!4d-52.3162802!16s%2Fg%2F1tg_h6lq?entry=ttu'
  },
  {
    id: 'fallback-5',
    author: 'Jerri Zanusso',
    meta: 'Local Guide · 123 avaliacoes · 40 fotos',
    rating: 5,
    date: '2 anos atras',
    text: 'Bom atendimento, o pessoal fraciona material (argamassa, areia, etc), tem uma boa gama de produtos.',
    sourceUrl:
      'https://www.google.com/maps/place/Larroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o/@-31.7476626,-52.3188551,17z/data=!3m1!5s0x9511b4ff8229d4bb:0x1d4aa7038b6de34c!4m15!1m8!3m7!1s0x9511b50220000193:0x88d37ded4740d5a!2sLarroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o!8m2!3d-31.7476626!4d-52.3162802!10e1!16s%2Fg%2F1tg_h6lq!3m5!1s0x9511b50220000193:0x88d37ded4740d5a!8m2!3d-31.7476626!4d-52.3162802!16s%2Fg%2F1tg_h6lq?entry=ttu'
  },
  {
    id: 'fallback-6',
    author: 'Rodrigo Carvalho',
    meta: 'Local Guide · 25 avaliacoes',
    rating: 4,
    date: '5 anos atras',
    text: 'Lugar bom de comprar... pena algumas coisas serem um pouco mais caras... mas o atendimento e top.',
    sourceUrl:
      'https://www.google.com/maps/place/Larroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o/@-31.7476626,-52.3188551,17z/data=!3m1!5s0x9511b4ff8229d4bb:0x1d4aa7038b6de34c!4m15!1m8!3m7!1s0x9511b50220000193:0x88d37ded4740d5a!2sLarroque+Ferragem+e+Material+de+Constru%C3%A7%C3%A3o!8m2!3d-31.7476626!4d-52.3162802!10e1!16s%2Fg%2F1tg_h6lq!3m5!1s0x9511b50220000193:0x88d37ded4740d5a!8m2!3d-31.7476626!4d-52.3162802!16s%2Fg%2F1tg_h6lq?entry=ttu'
  }
];

const GOOGLE_PLACES_FIELD_MASK =
  'id,displayName,googleMapsUri,rating,userRatingCount,reviews.authorAttribution,reviews.rating,reviews.relativePublishTimeDescription,reviews.text,reviews.originalText';

const GTM_CONTAINER_ID = 'GTM-5PK28FX2';
const GA_MEASUREMENT_ID = 'G-Q9NSE5HC5Q';
const OPTIONAL_COOKIE_NAMES = ['_ga', '_gid', '_gat', '_gcl_au'];

function injectExternalScript(scriptId, source) {
  if (document.getElementById(scriptId)) {
    return;
  }

  const scriptElement = document.createElement('script');
  scriptElement.id = scriptId;
  scriptElement.async = true;
  scriptElement.src = source;
  document.head.appendChild(scriptElement);
}

function updateGoogleConsent(optionalSettings) {
  if (typeof window.gtag !== 'function') {
    return;
  }

  const analyticsStorage = optionalSettings.analytics ? 'granted' : 'denied';
  const adsStorage = optionalSettings.marketing ? 'granted' : 'denied';

  window.gtag('consent', 'update', {
    analytics_storage: analyticsStorage,
    ad_storage: adsStorage,
    ad_user_data: adsStorage,
    ad_personalization: adsStorage
  });
}

function initializeOptionalTracking(optionalSettings, hasLoadedRef) {
  window.dataLayer = window.dataLayer ?? [];

  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  if (!hasLoadedRef.current) {
    injectExternalScript('lp-ga-script', `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`);
    injectExternalScript('lp-gtm-script', `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`);
    hasLoadedRef.current = true;
  }

  updateGoogleConsent(optionalSettings);
}

function removeCookieByName(name, domain) {
  const domainPart = domain ? `; domain=${domain}` : '';
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainPart}`;
}

function clearOptionalCookies() {
  const hostname = window.location.hostname;
  const segments = hostname.split('.');
  const rootDomain = segments.length > 1 ? `.${segments.slice(-2).join('.')}` : '';

  OPTIONAL_COOKIE_NAMES.forEach((cookieName) => {
    removeCookieByName(cookieName);

    if (rootDomain) {
      removeCookieByName(cookieName, rootDomain);
    }
  });
}

function normalizeGoogleReview(review, index, placeUrl) {
  const parsedRating = Number(review.rating);
  const rating = Number.isFinite(parsedRating) ? Math.min(5, Math.max(0, parsedRating)) : 5;

  return {
    id: review.name ?? `google-${index}`,
    author: review.authorAttribution?.displayName ?? 'Cliente Google',
    rating,
    date: review.relativePublishTimeDescription ?? 'avaliacao recente',
    text: review.originalText?.text ?? review.text?.text ?? 'Comentario sem texto.',
    sourceUrl: review.authorAttribution?.uri ?? placeUrl ?? 'https://www.google.com/maps'
  };
}

function resolveReviewPayload(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.reviews)) {
    return payload.reviews;
  }

  if (Array.isArray(payload?.data?.reviews)) {
    return payload.data.reviews;
  }

  return [];
}

function ReviewStars({ rating }) {
  return (
    <div className="review-stars" aria-label={`${rating.toFixed(1)} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, index) => {
        const mark = index + 1;
        const isFull = rating >= mark;
        const isHalf = !isFull && rating >= mark - 0.5;

        if (isFull) {
          return <FaStar key={mark} className="review-star-icon review-star-icon-filled" aria-hidden="true" />;
        }

        if (isHalf) {
          return <FaStarHalfAlt key={mark} className="review-star-icon review-star-icon-filled" aria-hidden="true" />;
        }

        return <FaRegStar key={mark} className="review-star-icon review-star-icon-empty" aria-hidden="true" />;
      })}

      <span className="review-rating-value">{rating.toFixed(1)}</span>
    </div>
  );
}

function BrandLogo({ src, alt }) {
  const [hasError, setHasError] = React.useState(false);

  if (!src || hasError) {
    return <div className="brand-card-fallback">{alt}</div>;
  }

  return <img src={src} alt={alt} loading="lazy" className="brand-card-image" onError={() => setHasError(true)} />;
}

export function App() {
  const { track } = useTracking();
  const initialConsent = React.useMemo(() => readCookieConsent(), []);
  const [cookieConsent, setCookieConsent] = React.useState(initialConsent);
  const [cookiePreferencesDraft, setCookiePreferencesDraft] = React.useState({
    analytics: initialConsent?.analytics ?? false,
    marketing: initialConsent?.marketing ?? false
  });
  const [isCookieBannerVisible, setIsCookieBannerVisible] = React.useState(initialConsent === null);
  const [isCookieModalOpen, setIsCookieModalOpen] = React.useState(false);
  const optionalTrackingLoadedRef = React.useRef(false);
  const [activeReview, setActiveReview] = React.useState(0);
  const [isReviewPaused, setIsReviewPaused] = React.useState(false);
  const [reviews, setReviews] = React.useState(fallbackTestimonials);

  const trackCta = (location, ctaLabel) => {
    track('cta_click', { location, cta_label: ctaLabel });
  };

  const openCookiePreferences = () => {
    setCookiePreferencesDraft({
      analytics: cookieConsent?.analytics ?? false,
      marketing: cookieConsent?.marketing ?? false
    });
    setIsCookieModalOpen(true);
  };

  const applyCookieChoice = (optionalSettings, source) => {
    const savedConsent = saveCookieConsent(optionalSettings);

    syncCookieConsentToWindow(savedConsent);
    setCookieConsent(savedConsent);
    setCookiePreferencesDraft({
      analytics: savedConsent.analytics,
      marketing: savedConsent.marketing
    });
    setIsCookieBannerVisible(false);
    setIsCookieModalOpen(false);

    if (savedConsent.analytics) {
      track('category_click', {
        category: 'cookie_preferences',
        source,
        analytics: savedConsent.analytics ? 'granted' : 'denied',
        marketing: savedConsent.marketing ? 'granted' : 'denied'
      });
    }
  };

  React.useEffect(() => {
    syncCookieConsentToWindow(cookieConsent);
  }, [cookieConsent]);

  React.useEffect(() => {
    if (!cookieConsent) {
      return;
    }

    const optionalSettings = {
      analytics: cookieConsent.analytics,
      marketing: cookieConsent.marketing
    };

    if (optionalSettings.analytics || optionalSettings.marketing) {
      initializeOptionalTracking(optionalSettings, optionalTrackingLoadedRef);
      return;
    }

    updateGoogleConsent(optionalSettings);
    clearOptionalCookies();
  }, [cookieConsent]);

  React.useEffect(() => {
    if (!isCookieModalOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isCookieModalOpen]);

  React.useEffect(() => {
    const elements = document.querySelectorAll('[data-scroll-up]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    const customEndpoint = import.meta.env.VITE_GOOGLE_REVIEWS_ENDPOINT;

    if (!customEndpoint && (!placeId || !apiKey)) {
      return;
    }

    let isMounted = true;

    const fetchGoogleReviews = async () => {
      try {
        let payload;
        let placeUrl;

        if (customEndpoint) {
          const response = await fetch(customEndpoint);

          if (!response.ok) {
            throw new Error(`Erro ao buscar endpoint customizado: ${response.status}`);
          }

          payload = await response.json();
          placeUrl = payload?.googleMapsUri;
        } else {
          const endpoint = `https://places.googleapis.com/v1/places/${placeId}?languageCode=pt-BR`;
          const response = await fetch(endpoint, {
            headers: {
              'X-Goog-Api-Key': apiKey,
              'X-Goog-FieldMask': GOOGLE_PLACES_FIELD_MASK
            }
          });

          if (!response.ok) {
            throw new Error(`Erro ao buscar Google Places API: ${response.status}`);
          }

          payload = await response.json();
          placeUrl = payload.googleMapsUri;
        }

        const normalizedReviews = resolveReviewPayload(payload)
          .map((review, index) => normalizeGoogleReview(review, index, placeUrl))
          .filter((review) => review.text?.trim().length > 0)
          .slice(0, 8);

        if (isMounted && normalizedReviews.length > 0) {
          setReviews(normalizedReviews);
          setActiveReview(0);
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('[reviews] fallback local ativado', error);
        }
      }
    };

    fetchGoogleReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  React.useEffect(() => {
    if (activeReview > reviews.length - 1) {
      setActiveReview(0);
    }
  }, [activeReview, reviews.length]);

  React.useEffect(() => {
    if (isReviewPaused) {
      return undefined;
    }

    if (reviews.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isReviewPaused, reviews.length]);

  const goToReview = (index) => {
    const safeIndex = (index + reviews.length) % reviews.length;
    setActiveReview(safeIndex);
  };

  const handleReviewPrev = () => {
    goToReview(activeReview - 1);
    trackCta('reviews', 'Anterior');
  };

  const handleReviewNext = () => {
    goToReview(activeReview + 1);
    trackCta('reviews', 'Proximo');
  };

  return (
    <div className="lp-root">
      <a
        className="lp-whats"
        href={contacts.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        onClick={() => track('contact_whatsapp_click', { location: 'floating_button' })}
      >
        <FaWhatsapp className="lp-whats-icon" aria-hidden="true" />
      </a>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-image-mask" aria-hidden="true">
            <img src="/images/Gemini_Generated_Image_tuukuctuukuctuuk.png" alt="" className="hero-image-main" />
          </div>

          <div className="hero-top section-inner">
            <a className="wordmark" href="#inicio" onClick={() => trackCta('header', 'logo')}>
              Larroque
            </a>

            <nav className="hero-nav" aria-label="Navegacao principal">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => trackCta('header', item.label)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hero-content section-inner scroll-up is-visible">
            <h1>
              Tudo para sua obra
              <br />
              <span>com entrega rapida no bairro.</span>
            </h1>
            <p className="hero-subtitle">
              Orcamento rapido em poucos minutos, com atendimento imediato via WhatsApp da Ferragem Larroque em
              Pelotas para voce comprar sem sair da obra.
            </p>

            <a
              className="lp-btn lp-btn-primary"
              href={contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => track('contact_whatsapp_click', { location: 'hero_primary' })}
            >
              PECA AGORA NO WHATSAPP
            </a>
          </div>
        </section>

        <section className="lp-block lp-block-soft" id="destaques">
          <div className="section-inner scroll-up" data-scroll-up>
            <div className="lp-section-head">
              <h2>Empresas que confiam na Larroque</h2>
              <p>Fornecemos materiais para construtoras, empreiteiras e clientes de toda Pelotas</p>
            </div>

            <div className="logo-carousel" aria-label="Carrossel de parceiros">
              <div className="logo-track">
                {[...carouselItems, ...carouselItems].map((item, index) => (
                  <div key={`${item.id}-${index}`} className="logo-slide reveal">
                    <img src={item.src} alt={item.alt} loading="lazy" className="logo-image" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lp-band lp-band-red">
          <div className="section-inner lp-band-content scroll-up" data-scroll-up>
            <p>
              Pedidos via
              <br />
              <strong>WhatsApp</strong>
              <br />
              {contacts.whatsappDisplay}
              <br />
              <span className="lp-band-note">Atendimento imediato via WhatsApp</span>
              <br />
              Ou telefone fixo
              <br />
              {contacts.landline}
            </p>
            <a
              className="lp-btn lp-btn-white"
              href={contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => track('contact_whatsapp_click', { location: 'contact_band' })}
            >
              SOLICITAR ORCAMENTO RAPIDO
            </a>
          </div>
        </section>

        <section className="lp-block lp-block-white" id="sobre">
          <div className="section-inner about-layout scroll-up" data-scroll-up>
            <div className="about-title">
              <p>Sobre a</p>
              <h2>Larroque</h2>
            </div>

            <div className="about-text">
              <h3>MATERIAIS DE CONSTRUCAO COM ATENDIMENTO AGIL E PROXIMO</h3>
              <p>
                A Larroque atende obras de todos os portes com entrega rapida no bairro e suporte no momento da compra.
              </p>
              <p>
                Nossa equipe ajuda voce a escolher os materiais certos, com orientacao pratica e atendimento objetivo.
              </p>
              <p>
                Aqui voce encontra variedade para construcao, reforma e manutencao, com atendimento proximo e
                personalizado para cada necessidade.
              </p>
            </div>
          </div>
        </section>

        <section className="lp-block lp-block-soft" id="diferenciais">
          <div className="section-inner scroll-up" data-scroll-up>
            <div className="lp-section-head">
              <h2>Por que escolher a Larroque</h2>
              <p>Clareza no atendimento, agilidade na entrega e foco no que sua obra precisa.</p>
            </div>

            <p className="benefits-urgency">Orcamento rapido em poucos minutos e atendimento imediato via WhatsApp.</p>

            <div className="benefits-grid">
              {differentials.map((item) => (
                <article className="benefit-card" key={item.title}>
                  <p className="benefit-badge">{item.badge}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

          </div>
        </section>

        <section className="lp-band lp-band-store">
          <div className="section-inner lp-store-copy scroll-up" data-scroll-up>
            <p>Seja construcao, reforma, decoracao ou jardinagem.</p>
            <strong>Tudo para sua obra.</strong>
          </div>
        </section>

        <section className="lp-block lp-block-white" id="marcas">
          <div className="section-inner scroll-up" data-scroll-up>
            <div className="lp-section-head">
              <h2>Marcas que trabalhamos</h2>
              <p>Algumas marcas e parceiros que fazem parte da nossa rotina de atendimento.</p>
            </div>

            <div className="brands-grid" aria-label="Lista de marcas">
              {brands.map((brand) => (
                <article
                  className={`brand-card${brand.alt === 'Dagoberto Barcellos' ? ' brand-card--dagoberto' : ''}${brand.alt === 'Tramontina' ? ' brand-card--tramontina' : ''}`}
                  key={brand.alt}
                >
                  <BrandLogo src={brand.src} alt={brand.alt} />
                  <p>{brand.alt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lp-block lp-block-soft" id="avaliacoes">
          <div className="section-inner scroll-up" data-scroll-up>
            <div className="lp-section-head">
              <h2>Avaliacoes dos clientes</h2>
              <p>Confira alguns comentarios de quem compra com a Larroque.</p>
            </div>

            <div
              className="reviews-carousel"
              onMouseEnter={() => setIsReviewPaused(true)}
              onMouseLeave={() => setIsReviewPaused(false)}
            >
              <button
                type="button"
                className="review-arrow review-arrow-prev"
                onClick={handleReviewPrev}
                aria-label="Ver avaliacao anterior"
              >
                &lt;
              </button>

              <div className="reviews-window">
                <div className="reviews-track" style={{ transform: `translateX(-${activeReview * 100}%)` }}>
                  {reviews.map((review, index) => (
                    <article className="review-card" key={`${review.id}-${index}`}>
                      <ReviewStars rating={review.rating} />
                      <p className="review-text">"{review.text}"</p>
                      <p className="review-author">{review.author}</p>
                      {review.meta && <p className="review-meta">{review.meta}</p>}
                      <div className="review-footer">
                        <span>{review.date}</span>
                        <a
                          href={review.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => trackCta('reviews', 'Ver no Google')}
                        >
                          Ver no Google
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="review-arrow review-arrow-next"
                onClick={handleReviewNext}
                aria-label="Ver proxima avaliacao"
              >
                &gt;
              </button>

              <div className="review-dots" role="tablist" aria-label="Selecionar avaliacao">
                {reviews.map((review, index) => (
                  <button
                    type="button"
                    key={review.id}
                    className={`review-dot${activeReview === index ? ' is-active' : ''}`}
                    aria-label={`Ir para avaliacao ${index + 1}`}
                    aria-selected={activeReview === index}
                    onClick={() => {
                      goToReview(index);
                      trackCta('reviews', `Indicador ${index + 1}`);
                    }}
                  />
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>

      <footer id="contato" className="lp-footer">
        <div className="section-inner footer-grid">
          <div>
            <p className="footer-brand">Larroque</p>
            <p>Ferragem e Materiais</p>
          </div>

          <div>
            <p className="footer-label">Endereco</p>
            <p>{contacts.address}</p>
          </div>

          <div>
            <p className="footer-label">Telefone</p>
            <a href={`tel:${contacts.phone.replace(/\D/g, '')}`}>{contacts.phone}</a>
            <a href={`tel:${contacts.landline.replace(/\D/g, '')}`}>{contacts.landline}</a>
          </div>

          <div>
            <p className="footer-label">Horario</p>
            <p>Segunda a Sexta: 7h30 as 18h00</p>
            <p>Sabado: 8h00 as 17h00</p>
          </div>
        </div>

        <div className="section-inner footer-legal">
          <p>
            Privacidade e Cookies: utilizamos cookies necessarios para o funcionamento da pagina e cookies opcionais
            para estatisticas e campanhas. Voce pode revisar, alterar ou revogar seu consentimento a qualquer momento.
          </p>

          <button type="button" className="footer-link-button" onClick={openCookiePreferences}>
            Politica de Privacidade e Preferencias de Cookies
          </button>
        </div>
      </footer>

      {!isCookieBannerVisible && (
        <button
          type="button"
          className="cookie-settings-trigger"
          onClick={openCookiePreferences}
          aria-label="Revisar preferencias de cookies"
        >
          <FaCookieBite className="cookie-settings-icon" aria-hidden="true" />
        </button>
      )}

      {isCookieBannerVisible && (
        <section className="cookie-banner" role="dialog" aria-live="polite" aria-label="Consentimento de cookies">
          <p className="cookie-banner-title">Sua privacidade importa</p>
          <p className="cookie-banner-text">
            Usamos apenas cookies necessarios por padrao. Cookies de analise e marketing so serao ativados com seu
            consentimento, conforme a LGPD.
          </p>

          <div className="cookie-banner-actions">
            <button
              type="button"
              className="cookie-btn cookie-btn-muted"
              onClick={() => applyCookieChoice({ analytics: false, marketing: false }, 'banner_reject')}
            >
              Recusar opcionais
            </button>

            <button type="button" className="cookie-btn cookie-btn-outline" onClick={openCookiePreferences}>
              Personalizar
            </button>

            <button
              type="button"
              className="cookie-btn cookie-btn-primary"
              onClick={() => applyCookieChoice({ analytics: true, marketing: true }, 'banner_accept_all')}
            >
              Aceitar todos
            </button>
          </div>
        </section>
      )}

      {isCookieModalOpen && (
        <div className="cookie-modal-overlay" role="presentation" onClick={() => setIsCookieModalOpen(false)}>
          <section
            className="cookie-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Preferencias de privacidade"
            onClick={(event) => event.stopPropagation()}
          >
            <h2>Preferencias de Privacidade</h2>
            <p>
              Aqui voce escolhe quais cookies opcionais podem ser ativados. Cookies necessarios permanecem ativos para
              garantir seguranca e funcionamento basico da LP.
            </p>

            <div className="cookie-option">
              <div>
                <h3>Necessarios</h3>
                <p>Essenciais para carregamento da pagina, navegacao e recursos obrigatorios.</p>
              </div>
              <span className="cookie-option-badge">Sempre ativo</span>
            </div>

            <label className="cookie-option cookie-option-toggle">
              <div>
                <h3>Analise e desempenho</h3>
                <p>Ajuda a entender visitas, paginas acessadas e melhorias de experiencia.</p>
              </div>
              <input
                type="checkbox"
                checked={cookiePreferencesDraft.analytics}
                onChange={(event) =>
                  setCookiePreferencesDraft((current) => ({
                    ...current,
                    analytics: event.target.checked
                  }))
                }
              />
            </label>

            <label className="cookie-option cookie-option-toggle">
              <div>
                <h3>Marketing</h3>
                <p>Permite medir campanhas e personalizar anuncios em plataformas parceiras.</p>
              </div>
              <input
                type="checkbox"
                checked={cookiePreferencesDraft.marketing}
                onChange={(event) =>
                  setCookiePreferencesDraft((current) => ({
                    ...current,
                    marketing: event.target.checked
                  }))
                }
              />
            </label>

            <p className="cookie-modal-note">
              Voce pode alterar esta escolha a qualquer momento no botao de cookies no canto da tela.
            </p>

            <div className="cookie-modal-actions">
              <button
                type="button"
                className="cookie-btn cookie-btn-muted"
                onClick={() => applyCookieChoice({ analytics: false, marketing: false }, 'modal_reject')}
              >
                Recusar opcionais
              </button>

              <button
                type="button"
                className="cookie-btn cookie-btn-outline"
                onClick={() => applyCookieChoice(cookiePreferencesDraft, 'modal_save')}
              >
                Salvar preferencias
              </button>

              <button
                type="button"
                className="cookie-btn cookie-btn-primary"
                onClick={() => applyCookieChoice({ analytics: true, marketing: true }, 'modal_accept_all')}
              >
                Aceitar todos
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
