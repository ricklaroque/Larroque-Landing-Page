import React from 'react';

export function Header({ contacts }) {
  return (
    <div>
        <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm border-b border-slate-200">
        <div className="mx-auto max-w-[1120px] w-[min(92vw,1120px)] py-4 px-4">
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

        <div
            className="flex flex-col justify-center h-screen relative overflow-hidden bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/images/parallax1.png')" }}
            >
            <h1 className="text-white text-4xl text-center z-10">
                FORCA PARA CONSTRUIR COM A LARROQUE
            </h1>
        </div>
    </div>
  );
}
