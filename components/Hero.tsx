import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('departments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-gray-900 overflow-hidden bg-white">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform scale-105 animate-pulse-slow opacity-50"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')" }}
        aria-hidden="true"
      ></div>
      
      {/* Light Overlays for Clean Aesthetic */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/70 backdrop-blur-[2px]" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/80 via-transparent to-white/90" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]"></div>

      <div className="relative z-10 p-8 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase mb-8 animate-fade-in-up opacity-0 drop-shadow-sm">
          <span className="text-slate-900">Bozorgi</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-primary animate-shimmer bg-[length:200%_auto]">Group</span>
        </h1>
        <div className="h-1.5 w-32 mx-auto bg-primary mb-8 rounded-full animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}></div>
        <p className="text-xl md:text-3xl max-w-4xl mx-auto text-gray-600 font-light leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          {t['hero.subtitle']}
        </p>
        <div className="mt-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
             <p className="inline-block px-6 py-3 md:px-10 md:py-4 border border-gray-900/10 rounded-full bg-white/50 backdrop-blur-md text-base md:text-lg font-semibold tracking-widest text-gray-900 shadow-xl hover:bg-white/80 transition-all duration-300">
              "{t['hero.motto']}"
            </p>
        </div>
      </div>
      
      {/* Scroll Indicator: Safe positioning for Mobile */}
       <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow opacity-80 hover:opacity-100 transition-opacity">
        <a href="#departments" onClick={handleScroll} aria-label={t['hero.scroll']} className="flex flex-col items-center gap-3 text-gray-500 hover:text-primary transition-colors group">
          <span className="text-xs tracking-[0.2em] uppercase font-medium group-hover:translate-y-1 transition-transform text-gray-800">{t['hero.scroll']}</span>
          <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-y-1 transition-transform text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;