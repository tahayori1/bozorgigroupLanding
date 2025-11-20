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
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform scale-105 animate-pulse-slow"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')" }}
        aria-hidden="true"
      ></div>
      
      {/* Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 backdrop-blur-[2px]" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/80" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>

      <div className="relative z-10 p-8 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase mb-8 animate-fade-in-up opacity-0 drop-shadow-2xl">
          Bozorgi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary animate-shimmer bg-[length:200%_auto]">Group</span>
        </h1>
        <div className="h-1 w-32 mx-auto bg-primary mb-8 rounded-full animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}></div>
        <p className="text-xl md:text-3xl max-w-4xl mx-auto text-gray-50 font-light leading-relaxed animate-fade-in-up opacity-0 drop-shadow-md" style={{ animationDelay: '0.3s' }}>
          {t['hero.subtitle']}
        </p>
        <div className="mt-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
             <p className="inline-block px-8 py-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-md text-lg font-semibold tracking-widest text-white shadow-2xl hover:bg-white/10 transition-all duration-300">
              "{t['hero.motto']}"
            </p>
        </div>
      </div>
      
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow opacity-80 hover:opacity-100 transition-opacity">
        <a href="#departments" onClick={handleScroll} aria-label={t['hero.scroll']} className="flex flex-col items-center gap-3 text-white/90 hover:text-primary transition-colors group">
          <span className="text-xs tracking-[0.2em] uppercase font-medium group-hover:translate-y-1 transition-transform">{t['hero.scroll']}</span>
          <svg className="w-8 h-8 group-hover:translate-y-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;