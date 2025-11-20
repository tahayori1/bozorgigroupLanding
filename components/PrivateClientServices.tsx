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
      className={`py-32 bg-zinc-950 text-white transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-20 border-t border-zinc-800 pt-12">
          
          {/* Header Column */}
          <div className="lg:col-span-5">
            <span className="text-amber-500 font-mono text-xs tracking-[0.2em] uppercase mb-6 block">Invitation Only</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-8 text-white">
                PRIVATE<br/>CLIENT
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed font-light border-l border-zinc-800 pl-6">
              {t['property.private.subtitle']}
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-7">
            <div className="grid gap-12">
                 {/* Stat Box */}
                 <div className="bg-zinc-900 p-8 border border-zinc-800">
                      <div className="flex items-baseline gap-4 mb-2">
                          <span className="text-6xl font-bold text-white">{t['property.private.stat.value']}</span>
                          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Retention Rate</span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed font-light">
                          {t['property.private.stat.desc']}
                      </p>
                 </div>

                 {/* List */}
                 <div>
                    <h3 className="text-lg font-bold text-white mb-6 border-b border-zinc-800 pb-4">Exclusive Privileges</h3>
                    <ul className="grid md:grid-cols-2 gap-y-6 gap-x-12">
                        {[1, 2, 3, 4].map((num) => (
                        <li key={num} className="flex items-start group">
                            <span className="text-amber-500 text-xs mt-1.5 mr-4 group-hover:text-white transition-colors">■</span>
                            <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-sm font-light leading-relaxed">
                                {t[`property.private.list${num}`]}
                            </span>
                        </li>
                        ))}
                    </ul>
                 </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PrivateClientServices;