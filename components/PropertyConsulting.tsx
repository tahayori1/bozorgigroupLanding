import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PropertyConsulting: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  const cards = [
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      titleKey: 'property.when.title',
      descKey: 'property.when.desc'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      titleKey: 'property.where.title',
      descKey: 'property.where.desc'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      titleKey: 'property.what.title',
      descKey: 'property.what.desc'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      titleKey: 'property.who.title',
      descKey: 'property.who.desc'
    }
  ];

  return (
    <section 
      id="property-consulting" 
      ref={sectionRef} 
      className={`py-28 bg-gradient-to-b from-muted/30 to-background transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 text-foreground">
            {t['property.title']}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t['property.subtitle']}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-card text-card-foreground p-8 rounded-3xl shadow-lg border border-border hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2 transform relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                 <div className="transition-all duration-300 transform group-hover:scale-110 group-hover:text-white">
                     {React.cloneElement(card.icon as React.ReactElement<any>, { className: `w-9 h-9 ${'text-current'}` })}
                 </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{t[card.titleKey]}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t[card.descKey]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyConsulting;