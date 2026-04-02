import React from 'react';

export function Highlights({ highlights }) {
  return (
    <section id="destaques" className="rounded-[8px] border border-slate-200 bg-white p-8 shadow-sm px-4">
      <div className="mx-auto max-w-[60%]">
        <div className="mb-6">
        <p className="mb-2 text-xs uppercase tracking-widest text-slate-500">Destaques Larroque</p>
        <h2 className="text-3xl font-bold text-slate-900">Vantagens preparadas para acelerar seu projeto.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-[8px] border border-amber-100 bg-amber-50 p-5">
            <p className="mb-2 inline-flex rounded-[8px] bg-brand-500 px-3 py-1 text-xs font-semibold text-white">{item.badge}</p>
            <h3 className="mb-2 text-xl font-bold text-amber-900">{item.title}</h3>
            <p className="text-sm text-amber-800">{item.description}</p>
          </article>
        ))}
      </div>      </div>    </section>
  );
}
