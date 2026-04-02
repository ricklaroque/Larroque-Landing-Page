import React from 'react';

export function Hero({ contacts }) {
  return (
    <section className="rounded-[8px] border border-amber-200 bg-[rgba(255,252,246,0.95)] p-8 shadow-[0_18px_40px_rgba(35,24,16,0.06)] px-4">
      <div className="mx-auto max-w-[60%]">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-amber-700">Centro de Solucoes para Obra e Reforma</p>
            <h1 className="mb-4 text-4xl font-black leading-tight text-ink md:text-5xl">Forca, precisao e parceria para construir com confianca.</h1>
            <p className="mb-6 text-sm text-amber-900">A Larroque entrega mais que produtos: orientacao tecnica, marcas confiaveis e velocidade para manter sua obra em movimento.</p>
            <div className="flex flex-wrap gap-3">
              <a className="rounded-[8px] bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600" href={contacts.whatsapp} target="_blank" rel="noreferrer">Solicitar Orcamento</a>
              <a className="rounded-[8px] border border-amber-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-amber-50" href="#destaques">Ver Destaques</a>
            </div>
          </div>
          <div className="rounded-[8px] bg-stone-950 p-6 text-white shadow-lg">
            <p className="mb-3 text-lg font-semibold">Atendimento Tecnico</p>
            <ul className="space-y-2 text-sm">
              <li>Equipe especializada em escolha de materiais</li>
              <li>Suporte para construtoras e profissionais</li>
              <li>Mix completo para obra, manutencao e acabamento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
