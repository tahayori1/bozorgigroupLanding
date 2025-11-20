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
      className={`py-32 bg-muted/50 transition-all duration-1000 ease-in-out relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-3 space-y-10">
            <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">Private Client</span>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground leading-tight">
                {t['property.private.title']}
                </h2>
            </div>
             <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury private property"
              className="rounded-3xl shadow-2xl w-full h-64 object-cover lg:hidden" // Show on mobile
            />
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              {t['property.private.subtitle']}
            </p>

            <div className="bg-card p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-8 border-b border-border pb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  {t['property.private.listTitle']}
              </h3>
              <ul className="space-y-5">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                        <svg className="h-5 w-5 text-primary group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <span className="ml-4 rtl:ml-0 rtl:mr-4 text-muted-foreground group-hover:text-foreground transition-colors text-lg">{t[`property.private.list${num}`]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stat Column */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-black p-12 rounded-[2.5rem] shadow-2xl text-center flex flex-col justify-center items-center h-full min-h-[400px] transform hover:scale-105 transition-transform duration-500 group relative overflow-hidden border-4 border-gray-800">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
             
             <div className="relative z-10">
                <div className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 mb-8 animate-fade-in-up drop-shadow-lg">
                    {t['property.private.stat.value']}
                </div>
                <p className="text-xl font-medium text-gray-300 max-w-xs mx-auto leading-relaxed group-hover:text-white transition-colors">
                    {t['property.private.stat.desc']}
                </p>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PrivateClientServices;