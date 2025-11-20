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
      className={`py-32 bg-white text-zinc-900 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
            
          {/* Left: Minimalist Header */}
          <div className="flex flex-col justify-center">
             <div className="inline-block w-12 h-1 bg-primary mb-8"></div>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight text-black">
               {t['whyus.title']}
             </h2>
             <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                {t['whyus.subtitle']}
             </p>
             
             {/* Quote Box - Finsa Style */}
             <div className="bg-zinc-50 p-8 border-l-4 border-zinc-900">
                 <p className="text-lg italic text-zinc-700 font-serif">
                 "{t['whyus.desc2']}"
                 </p>
             </div>
          </div>

          {/* Right: Structured Content */}
          <div className="space-y-12">
             <p className="text-lg leading-8 text-zinc-600 font-light">
               {t['whyus.desc1']}
             </p>

             <div className="border-t border-zinc-200 pt-10">
                 <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-sm">Key Advantages</h3>
                 <ul className="grid gap-6">
                    {[1, 2, 3, 4].map((num) => (
                      <li key={num} className="flex items-start group">
                        <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        </div>
                        <span className="ml-6 text-zinc-700 text-lg font-light group-hover:text-black transition-colors duration-300">
                            {t[`whyus.list${num}`]}
                        </span>
                      </li>
                    ))}
                 </ul>
             </div>
             
             <div className="pt-4">
                 <a href="#contact" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                     Start a consultation
                     <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                 </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;