import React from 'react';

export function Contact({ contacts }) {
  return (
    <section className="rounded-[8px] border border-amber-200 bg-white p-8 shadow-[0_18px_40px_rgba(35,24,16,0.06)] px-4">
      <div className="mx-auto max-w-[60%] flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-amber-700">Fale com a equipe</p>
          <h2 className="text-2xl font-bold text-amber-900">Seu pedido no ritmo da sua obra.</h2>
          <p className="text-sm text-amber-800">{contacts.address}</p>
          <p className="text-sm text-amber-800">{contacts.phone}</p>
        </div>
        <a className="w-full rounded-[8px] bg-brand-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-600 md:w-auto" href={contacts.whatsapp} target="_blank" rel="noreferrer">Enviar WhatsApp</a>
      </div>
    </section>
  );
}
