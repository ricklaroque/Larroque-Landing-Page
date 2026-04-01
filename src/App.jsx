import React from "https://esm.sh/react@18.3.1";

const highlights = [
  {
    title: "Promo de Inverno",
    description: "Descontos progressivos em parafusos, buchas e fixadores para reforcar seu estoque.",
    badge: "ate 25% OFF"
  },
  {
    title: "Linha Profissional",
    description: "Ferramentas eletricas com garantia estendida e suporte tecnico especializado.",
    badge: "novo"
  },
  {
    title: "Entrega Expressa",
    description: "Receba materiais da obra no mesmo dia para Pelotas e regiao metropolitana.",
    badge: "same day"
  }
];

const categories = [
  "Materiais de construcao",
  "Tintas e acabamentos",
  "Ferragens e fixacao",
  "Ferramentas manuais e eletricas",
  "Hidraulica e eletrica",
  "EPI e seguranca"
];

const contacts = {
  whatsapp: "https://api.whatsapp.com/send?phone=5553999999999&text=Ola%2C%20quero%20atendimento%20da%20Larroque.",
  phone: "(53) 3228-2536",
  address: "Av. Central, 850 | Pelotas/RS"
};

export function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-x-0 top-0 h-[320px] overflow-hidden z-0 pointer-events-none">
        <img
          src="/images/larroquelandingpage.png"
          alt="Larroque Ferragem Logo"
          className="w-full h-full object-cover opacity-30 blur-sm"
        />
      </div>

      <header className="fixed top-4 left-1/2 z-30 w-[min(1120px,92vw)] -translate-x-1/2 rounded-full border border-amber-100 bg-white/80 backdrop-blur-xl shadow-lg">
        <div className="mx-4 flex items-center justify-between gap-4 text-sm md:text-base">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-bold text-white">L</span>
            <div>
              <p className="m-0 text-xl font-semibold tracking-wider">Larroque</p>
              <p className="m-0 text-xs text-amber-800">Ferragem e Materiais</p>
            </div>
          </div>
          <a
            className="rounded-full border border-brand-500 bg-white px-4 py-2 text-sm font-semibold text-brand-500 transition hover:bg-brand-50"
            href={contacts.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Pedidos WhatsApp
          </a>
        </div>
      </header>

      <main className="relative z-20 mx-auto mt-[380px] w-[min(1120px,92vw)] space-y-6 pb-10">
        <section className="rounded-[22px] border border-amber-200 bg-[rgba(255,252,246,0.95)] p-8 shadow-[0_18px_40px_rgba(35,24,16,0.06)]">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-amber-700">Centro de Solucoes para Obra e Reforma</p>
              <h1 className="mb-4 text-4xl font-black leading-tight text-ink md:text-5xl">Forca, precisao e parceria para construir com confianca.</h1>
              <p className="mb-6 text-sm text-amber-900">A Larroque entrega mais que produtos: orientacao tecnica, marcas confiaveis e velocidade para manter sua obra em movimento.</p>
              <div className="flex flex-wrap gap-3">
                <a className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600" href={contacts.whatsapp} target="_blank" rel="noreferrer">Solicitar Orcamento</a>
                <a className="rounded-full border border-amber-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-amber-50" href="#destaques">Ver Destaques</a>
              </div>
            </div>
            <div className="rounded-xl bg-stone-950 p-6 text-white shadow-lg">
              <p className="mb-3 text-lg font-semibold">Atendimento Tecnico</p>
              <ul className="space-y-2 text-sm">
                <li>Equipe especializada em escolha de materiais</li>
                <li>Suporte para construtoras e profissionais</li>
                <li>Mix completo para obra, manutencao e acabamento</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="destaques" className="rounded-[22px] border border-amber-200 bg-white p-8 shadow-[0_18px_40px_rgba(35,24,16,0.06)]">
          <div className="mb-6">
            <p className="mb-2 text-xs uppercase tracking-widest text-amber-700">Destaques Larroque</p>
            <h2 className="text-3xl font-bold text-amber-900">Vantagens preparadas para acelerar seu projeto.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-xl border border-amber-100 bg-amber-50 p-5">
                <p className="mb-2 inline-flex rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">{item.badge}</p>
                <h3 className="mb-2 text-xl font-bold text-amber-900">{item.title}</h3>
                <p className="text-sm text-amber-800">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[22px] border border-amber-200 bg-white p-8 shadow-[0_18px_40px_rgba(35,24,16,0.06)]">
          <div className="mb-6">
            <p className="mb-2 text-xs uppercase tracking-widest text-amber-700">Sobre a Larroque</p>
            <h2 className="text-3xl font-bold text-amber-900">Uma ferragem pensada para suprir as necessidades da sua obra.</h2>
            <p className="mt-4 text-sm text-amber-800">Com estrutura ampla e atendimento objetivo, a Larroque conecta preco justo, agilidade logistica e curadoria tecnica para quem nao pode parar.</p>
          </div>
          <ul className="grid gap-2 text-sm text-amber-800 md:grid-cols-3">
            {categories.map((category) => (
              <li key={category} className="rounded-lg bg-amber-50 p-3">{category}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-[22px] border border-amber-200 bg-white p-8 shadow-[0_18px_40px_rgba(35,24,16,0.06)] flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-700">Fale com a equipe</p>
            <h2 className="text-2xl font-bold text-amber-900">Seu pedido no ritmo da sua obra.</h2>
            <p className="text-sm text-amber-800">{contacts.address}</p>
            <p className="text-sm text-amber-800">{contacts.phone}</p>
          </div>
          <a className="w-full rounded-full bg-brand-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-600 md:w-auto" href={contacts.whatsapp} target="_blank" rel="noreferrer">Enviar WhatsApp</a>
        </section>
      </main>
    </div>
  );
}
