import React from 'react';

export const HeroSection: React.FC = () => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1334')" }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-brand-dark opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50"></div>
      
      <div className="relative z-10 p-6">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-lilac via-white to-brand-lilac animate-pulse">
          Aumente seus seguidores
        </h2>
        <p className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
          de forma rápida e segura!
        </p>
        <p className="max-w-2xl mx-auto text-slate-300 md:text-xl mb-12">
          Transforme sua presença online e alcance o sucesso que você merece com nossos planos de crescimento para todas as redes sociais.
        </p>
        <a 
          href="#comprar"
          onClick={handleScroll}
          className="bg-brand-purple hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
        >
          Saiba Mais
        </a>
      </div>
    </section>
  );
};