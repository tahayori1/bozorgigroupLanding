import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PrivateClientServices: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <section 
      id="private-client" 
      ref={sectionRef} 
      className={`py-20 md:py-32 bg-muted transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-3 space-y-8">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              {t['property.private.title']}
            </h2>
             <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury private property"
              className="rounded-lg shadow-xl w-full h-auto object-cover lg:hidden" // Show on mobile
            />
            <p className="text-lg text-muted-foreground">
              {t['property.private.subtitle']}
            </p>

            <div className="border-l-4 border-primary pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4 space-y-4">
              <h3 className="text-xl font-bold text-foreground">{t['property.private.listTitle']}</h3>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-muted-foreground">{t[`property.private.list${num}`]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stat Column */}
          <div className="lg:col-span-2 bg-card rounded-2xl shadow-2xl border border-border p-8 text-center flex flex-col justify-center items-center h-full transform hover:scale-105 transition-transform duration-300">
             <div className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-yellow-400 mb-4">
                {t['property.private.stat.value']}
             </div>
             <p className="text-lg font-medium text-muted-foreground max-w-xs mx-auto">
                {t['property.private.stat.desc']}
             </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PrivateClientServices;