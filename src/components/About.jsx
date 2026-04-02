import React from 'react';

export function About({ categories }) {
  return (
    <section className="rounded-[8px] border border-slate-200 bg-white p-8 shadow-sm px-4">
      <div className="mx-auto max-w-[60%]">
        <div className="mb-6">
        <p className="mb-2 text-xs uppercase tracking-widest text-slate-500">Sobre a Larroque</p>
        <h2 className="text-3xl font-bold text-slate-900">Uma ferragem pensada para suprir as necessidades da sua obra.</h2>
        <p className="mt-4 text-sm text-slate-600">Com estrutura ampla e atendimento objetivo, a Larroque conecta preco justo, agilidade logistica e curadoria tecnica para quem nao pode parar.</p>
      </div>
      <ul className="grid gap-2 text-sm text-amber-800 md:grid-cols-3">
        {categories.map((category) => (
          <li key={category} className="rounded-[8px] bg-amber-50 p-3">{category}</li>
        ))}
      </ul>      </div>    </section>
  );
}
