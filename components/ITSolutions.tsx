import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ITSolutions: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      titleKey: 'it.ai.title',
      descKey: 'it.ai.desc',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      titleKey: 'it.automation.title',
      descKey: 'it.automation.desc',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      titleKey: 'it.marketing.title',
      descKey: 'it.marketing.desc',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="it-solutions" 
      ref={sectionRef} 
      className={`py-28 bg-muted transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">Innovation Lab</div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl mb-6 text-foreground leading-tight">
              {t['it.title']}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t['it.subtitle']}
            </p>
            
            <div className="space-y-6">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-start gap-6 p-6 bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 group hover:border-primary/30 transform hover:-translate-x-[-5px]">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-yellow-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 transform group-hover:rotate-6 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{t[service.titleKey]}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{t[service.descKey]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative perspective-1000 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-3xl transform rotate-6 scale-95 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse-slow"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 transform transition-transform duration-700 group-hover:rotate-1 group-hover:scale-[1.02]">
                <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="AI and Technology" 
                className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        <span className="text-sm font-mono text-green-300">SYSTEM ONLINE</span>
                    </div>
                    <p className="font-mono text-sm opacity-80">Processing automated workflows...</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSolutions;