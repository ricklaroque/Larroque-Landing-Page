import React from 'react';

export function Footer({ contacts }) {
  return (
    <footer className="bg-amber-900 px-4 py-12 text-white">
      <div className="mx-auto max-w-[60%]">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          {/* Logo e Descrição */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-brand-500 font-bold">L</span>
              <div>
                <p className="m-0 text-lg font-semibold tracking-wider">Larroque</p>
                <p className="m-0 text-xs">Ferragem e Materiais</p>
              </div>
            </div>
            <p className="text-sm text-amber-100">Soluções completas para sua obra e reforma.</p>
          </div>

          {/* Contato e Localização */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">📍</span>
              <div>
                <p className="text-xs font-semibold uppercase text-amber-300">Localização</p>
                <p className="text-sm text-amber-100">{contacts.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">📞</span>
              <div>
                <p className="text-xs font-semibold uppercase text-amber-300">Telefone</p>
                <p className="text-sm text-amber-100">{contacts.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">💬</span>
              <div>
                <p className="text-xs font-semibold uppercase text-amber-300">WhatsApp</p>
                <a href={contacts.whatsapp} target="_blank" rel="noreferrer" className="text-sm text-amber-300 transition hover:text-white">
                  Envie uma mensagem
                </a>
              </div>
            </div>
          </div>

          {/* Horário de Trabalho */}
          <div>
            <div className="flex items-start gap-3">
              <span className="text-xl">🕐</span>
              <div>
                <p className="text-xs font-semibold uppercase text-amber-300 mb-2">Horário de Trabalho</p>
                <ul className="space-y-1 text-sm text-amber-100">
                  <li>Seg-Sex: 07:00 - 18:00</li>
                  <li>Sábado: 08:00 - 17:00</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-amber-300">Redes Sociais</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-white">
                <span className="text-xl">f</span>
                Facebook
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-white">
                <span className="text-xl">📷</span>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-800 pt-6">
          <p className="text-center text-xs text-amber-200">
            © 2024 Larroque Ferragem e Materiais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
