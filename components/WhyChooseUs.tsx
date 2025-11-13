import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <section 
      id="why-us" 
      ref={sectionRef} 
      className={`py-20 md:py-32 bg-background text-foreground transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
            {t['whyus.title']}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t['whyus.subtitle']}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
             <p className="text-lg leading-relaxed text-muted-foreground">
               {t['whyus.desc1']}
             </p>
             <p className="text-lg font-medium text-primary border-l-4 border-primary pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
               {t['whyus.desc2']}
             </p>
             <div className="pt-4">
               <p className="text-muted-foreground leading-relaxed">
                 {t['whyus.conclusion']}
               </p>
             </div>
          </div>

          <div className="bg-card rounded-2xl shadow-xl border border-border p-8 hover:shadow-2xl hover:shadow-primary/5 transition-shadow duration-300">
             <h3 className="text-2xl font-bold mb-6 text-foreground">{t['whyus.listTitle']}</h3>
             <ul className="space-y-4">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                       <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    <span className="ms-4 text-muted-foreground text-lg">{t[`whyus.list${num}`]}</span>
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;