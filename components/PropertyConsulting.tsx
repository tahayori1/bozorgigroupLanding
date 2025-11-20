import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PropertyConsulting: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  const items = [
    { id: 'when', titleKey: 'property.when.title', descKey: 'property.when.desc' },
    { id: 'where', titleKey: 'property.where.title', descKey: 'property.where.desc' },
    { id: 'what', titleKey: 'property.what.title', descKey: 'property.what.desc' },
    { id: 'who', titleKey: 'property.who.title', descKey: 'property.who.desc' }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`py-32 bg-white transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-6 border-b border-zinc-900">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tighter mb-2 text-zinc-900">
              {t['property.title']}
            </h2>
            <p className="text-xl text-zinc-500 font-light">
               {t['property.subtitle']}
            </p>
          </div>
          <div className="mt-6 md:mt-0">
             <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">Advisory Scope</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-10 min-h-[320px] flex flex-col justify-between group hover:bg-zinc-900 transition-colors duration-500">
              
              {/* Number */}
              <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-600 transition-colors">
                      0{index + 1}
                  </span>
                  <div className="w-2 h-2 bg-zinc-200 rounded-full group-hover:bg-white transition-colors"></div>
              </div>
              
              {/* Content */}
              <div>
                 <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {t[item.titleKey]}
                 </h3>
                 <p className="text-zinc-500 leading-relaxed text-sm font-light group-hover:text-zinc-400 transition-colors duration-300">
                    {t[item.descKey]}
                 </p>
              </div>

              {/* Line */}
              <div className="mt-8 w-full h-px bg-zinc-100 group-hover:bg-zinc-800 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyConsulting;