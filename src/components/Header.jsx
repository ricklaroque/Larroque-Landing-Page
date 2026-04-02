import React from 'react';

export function Header({ contacts }) {
  return (
    <header className="fixed top-4 left-1/2 z-30 w-screen -translate-x-1/2 rounded-[8px] border border-amber-100 bg-white/80 backdrop-blur-xl shadow-lg">
      <div className="mx-auto max-w-[60%] py-4">
        <div className="flex items-center justify-between gap-4 text-sm md:text-base">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-brand-500 font-bold text-white">L</span>
            <div>
              <p className="m-0 text-xl font-semibold tracking-wider">Larroque</p>
              <p className="m-0 text-xs text-amber-800">Ferragem e Materiais</p>
            </div>
          </div>
          <a
            className="rounded-[8px] border border-brand-500 bg-white px-4 py-2 text-sm font-semibold text-brand-500 transition hover:bg-brand-50"
            href={contacts.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Pedidos WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
