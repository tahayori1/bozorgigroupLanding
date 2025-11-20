import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MaterialsConsulting: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  const cards = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      titleKey: 'materials.what.title',
      descKey: 'materials.what.desc'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titleKey: 'materials.when.title',
      descKey: 'materials.when.desc'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="1" stroke="currentColor" />
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      titleKey: 'materials.where.title',
      descKey: 'materials.where.desc'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      titleKey: 'materials.how.title',
      descKey: 'materials.how.desc'
    }
  ];

  return (
    <section 
      id="materials-consulting" 
      ref={sectionRef} 
      className={`py-24 bg-zinc-50 transition-all duration-1000 ease-in-out border-y border-zinc-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div className="max-w-2xl">
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-zinc-900">
                {t['materials.consulting.title']}
            </h2>
            <p className="text-lg text-zinc-500 font-light">
                {t['materials.consulting.subtitle']}
            </p>
          </div>
          <div className="mt-6 md:mt-0">
              <div className="h-px w-32 bg-black/10 mb-2"></div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Technical Services</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 border border-zinc-200 bg-white">
          {cards.map((card, index) => (
            <div key={index} className="group p-10 relative hover:bg-black hover:text-white transition-colors duration-500 flex flex-col min-h-[320px]">
               {/* Number Watermark */}
               <span className="absolute top-6 right-6 text-4xl font-bold text-zinc-100 group-hover:text-white/10 transition-colors">
                   0{index + 1}
               </span>

              <div className="mb-8 text-primary group-hover:text-white transition-colors duration-300">
                  {card.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 tracking-tight">{t[card.titleKey]}</h3>
              
              <p className="text-zinc-500 group-hover:text-zinc-300 leading-relaxed text-sm font-light mt-auto">
                {t[card.descKey]}
              </p>
              
              <div className="w-0 group-hover:w-full h-1 bg-primary absolute bottom-0 left-0 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsConsulting;