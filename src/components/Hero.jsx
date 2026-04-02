import React from 'react';
import { useTracking } from '../hooks/useTracking';

export function Hero({ contacts }) {
  const { track } = useTracking();
  return (
    <section className="rounded-[8px] border border-slate-200 bg-white p-10 shadow-md px-4">
      <div className="mx-auto max-w-[60%]">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-slate-500">Centro de Solucoes para Obra e Reforma</p>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">Forca, precisao e parceria para construir com confianca</h1>
            <p className="mb-6 text-sm text-slate-600">A Larroque entrega produtos confiaveis, atendimento profissional e execucao de projetos com padrao corporativo.</p>
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-[8px] bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
                href={contacts.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => track('contact_whatsapp_click', { location: 'hero', cta_label: 'Solicitar Orcamento' })}
              >
                Solicitar Orcamento
              </a>
              <a
                className="rounded-[8px] border border-amber-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-amber-50"
                href="#destaques"
                onClick={() => track('cta_click', { cta_label: 'Ver Destaques', section: 'hero' })}
              >
                Ver Destaques
              </a>
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
