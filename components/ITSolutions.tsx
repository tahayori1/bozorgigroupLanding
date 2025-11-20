import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SolutionItem: React.FC<{ 
    title: string; 
    desc: string; 
    icon: string; 
    delay: string 
}> = ({ title, desc, icon, delay }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref, { triggerOnce: true, threshold: 0.1 });

    return (
        <div 
            ref={ref}
            className={`group border-b border-zinc-200 py-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: delay }}
        >
            <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2 text-3xl group-hover:scale-110 transition-transform duration-300 origin-left filter grayscale group-hover:grayscale-0">
                    {icon}
                </div>
                <div className="md:col-span-4">
                    <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
                </div>
                <div className="md:col-span-6">
                    <p className="text-zinc-500 font-light leading-relaxed">{desc}</p>
                </div>
            </div>
        </div>
    );
};

const ITSolutions: React.FC = () => {
  const { t } = useLanguage();
  
  const solutions = [
    { id: 'acquisition', icon: '🎯' },
    { id: 'sales', icon: '⚡' },
    { id: 'support', icon: '🤝' },
    { id: 'ads', icon: '📢' },
    { id: 'crm', icon: '🔄' },
    { id: 'strategy', icon: '🧠' },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-zinc-900 pb-6">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">System Capabilities</h2>
            </div>
            <div className="mt-4 md:mt-0">
                <p className="text-zinc-500 text-right font-mono text-sm">ARCHITECTURE V2.0</p>
            </div>
        </div>

        <div className="flex flex-col">
          {solutions.map((sol, idx) => (
            <SolutionItem
                key={sol.id}
                title={t[`it.prod.${sol.id}.title`]}
                desc={t[`it.prod.${sol.id}.desc`]}
                icon={sol.icon}
                delay={`${idx * 100}ms`}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center md:text-left">
             <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
                Full integration available within 48 hours
             </p>
        </div>
      </div>
    </section>
  );
};

export default ITSolutions;
