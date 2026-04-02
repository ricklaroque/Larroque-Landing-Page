import React from 'react';
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Carousel } from "./components/Carousel.jsx";
import { Highlights } from "./components/Highlights.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

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

const carouselImages = [
  "/images/carousel-images/ACTEC.jpg",
  "/images/carousel-images/ELLO.jfif",
  "/images/carousel-images/JSempreiteira.jfif",
  "/images/carousel-images/Osirnet.jpg",
  "/images/carousel-images/Peruzzo.jpg",
  "/images/carousel-images/SSConstrutora.jpg",
  "/images/carousel-images/VLDconstrucoes.jpg",
];

const contacts = {
  whatsapp: "https://api.whatsapp.com/send?phone=555391544789&text=Ola%2C%20quero%20atendimento%20da%20Larroque.",
  phone: "(53) 3228-2536",
  address: "R. Prof. Mário Peiruque, 518 - Areal, Pelotas - RS"
};

export function App() {
  return (
    <div className="relative min-h-screen">
      {/* <div className="absolute inset-x-0 top-0 h-[320px] overflow-hidden z-0 pointer-events-none">
        
      </div> */}

      <Header contacts={contacts} />

      <main className="relative z-20 mx-auto mt-[120px] w-screen space-y-6 pb-10">
        <Hero contacts={contacts} />
        <Carousel slides={carouselImages} />
        <Highlights highlights={highlights} />
        <About categories={categories} />
        <Contact contacts={contacts} />
      </main>

      <Footer contacts={contacts} />
    </div>
  );
}
