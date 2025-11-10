import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="relative z-10 p-8 max-w-4xl mx-auto animate-fadeIn">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-4">
          Bozorgi <span className="text-amber-400">Group</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          {t['hero.subtitle']}
        </p>
        <p className="mt-4 text-2xl font-semibold tracking-wider text-amber-400/90">
          "{t['hero.motto']}"
        </p>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;