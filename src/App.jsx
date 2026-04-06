import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTracking } from './hooks/useTracking';

const contacts = {
  whatsapp: 'https://api.whatsapp.com/send?phone=555391544789&text=Ola%2C%20gostaria%20de%20atendimento%20da%20Larroque.',
  phone: '(53) 3228-2536',
  address: 'R. Prof. Mario Peiruque, 518 - Areal, Pelotas - RS',
  landline: '(53) 3226-2143'
};

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Destaques', href: '#destaques' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Blog', href: '#blog' },
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

const blogPosts = [
  {
    title: 'Guia rapido para escolher materiais sem erro',
    description: 'Use este card para um artigo curto com chamada objetiva e util.'
  },
  {
    title: 'Checklist de reforma para ganhar tempo na obra',
    description: 'Campo pronto para linkar um conteudo com foco em planejamento.'
  },
  {
    title: 'Tendencias de acabamento para o proximo trimestre',
    description: 'Use para apresentar novidades e orientar decisoes de compra.'
  }
];

const placeholderTone = ['a', 'b', 'c'];

function BrandLogo({ src, alt }) {
  const [hasError, setHasError] = React.useState(false);

  if (!src || hasError) {
    return <div className="brand-card-fallback">{alt}</div>;
  }

  return <img src={src} alt={alt} loading="lazy" className="brand-card-image" onError={() => setHasError(true)} />;
}

export function App() {
  const { track } = useTracking();

  const trackCta = (location, ctaLabel) => {
    track('cta_click', { location, cta_label: ctaLabel });
  };

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
            <img src="/images/parallax1.png" alt="" className="hero-image-main" />
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
              O centro
              <br />
              de compras
              <br />
              <span>do bairro.</span>
            </h1>
            <a
              className="lp-btn lp-btn-primary"
              href={contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => track('contact_whatsapp_click', { location: 'hero' })}
            >
              PEDIDOS WHATSAPP
            </a>
          </div>
        </section>

        <section className="lp-block lp-block-soft" id="destaques">
          <div className="section-inner scroll-up" data-scroll-up>
            <div className="lp-section-head">
              <h2>Parceiros</h2>
              <p>Confira alguns dos nossos parceiros que colaboram com a Larroque.</p>
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
              {contacts.phone}
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
              ENVIE UM WHATS
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
              <h3>UMA LOJA PENSADA PARA SUPRIR AS SUAS NECESSIDADES</h3>
              <p>
                Com excelente localizacao em Pelotas, a Larroque oferece atendimento rapido e um mix de produtos
                pensado para construcao, reforma e manutencao.
              </p>
              <p>
                Nossa equipe combina experiencia pratica e conhecimento tecnico para orientar cada cliente com mais
                assertividade.
              </p>
              <p>
                Este bloco esta pronto para o texto final da tua historia institucional, mantendo o visual limpo do
                layout de referencia.
              </p>
              <a href={contacts.whatsapp} className="lp-btn lp-btn-dark" onClick={() => trackCta('about', 'Saiba mais')}>
                SAIBA MAIS
              </a>
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

        <section className="lp-block lp-block-soft" id="blog">
          <div className="section-inner scroll-up" data-scroll-up>
            <div className="lp-section-head">
              <h2>Blog</h2>
            </div>

            <div className="lp-grid lp-grid-3">
              {blogPosts.map((post, index) => (
                <article className="blog-card" key={post.title}>
                  <div className={`media-placeholder media-placeholder-${placeholderTone[index % placeholderTone.length]}`}>
                    Imagem em breve
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </article>
              ))}
            </div>

            <div className="blog-action">
              <a href={contacts.whatsapp} className="lp-btn lp-btn-dark" onClick={() => trackCta('blog', 'Acessar blog')}>
                ACESSAR BLOG
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="lp-footer">
        <div className="section-inner footer-grid scroll-up" data-scroll-up>
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
            <p>Segunda a Sexta: 7h30 as 18h30</p>
            <p>Sabado: 7h30 as 17h30</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
