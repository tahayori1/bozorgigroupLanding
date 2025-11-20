import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ITLead: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <section 
      ref={sectionRef} 
      className={`py-32 bg-white border-t border-zinc-100 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* 1. Sidebar / ID Card */}
            <div className="lg:col-span-4 flex flex-col sticky top-24">
                <div className="w-full aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                     <img 
                        src="https://cdn.bozorgigroup.com/img/Farzin-Tahayori.jpg" 
                        alt={t['it.lead.name']} 
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-zinc-900 tracking-tight mb-1">{t['it.lead.name']}</h3>
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-6">{t['it.lead.title']}</p>
                    <a 
                        href={t['it.lead.website.url']} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm font-bold border-b-2 border-zinc-900 pb-0.5 hover:text-zinc-600 hover:border-zinc-600 transition-colors"
                    >
                        {t['it.lead.website.text']}
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
            </div>

            {/* 2. Content / Resume */}
            <div className="lg:col-span-8 space-y-16 lg:pt-8">
                
                {/* Summary */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">01 / Profile</h4>
                    <p className="text-2xl md:text-3xl font-light text-zinc-800 leading-tight">
                        {t['it.lead.summary']}
                    </p>
                </div>

                {/* Expertise Grid */}
                <div className="grid md:grid-cols-2 gap-12 border-t border-zinc-100 pt-12">
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">02 / Core Systems</h4>
                        <ul className="space-y-3">
                            <li className="text-lg text-zinc-900 font-medium border-b border-zinc-100 pb-2">Automation & AI Agents</li>
                            <li className="text-lg text-zinc-900 font-medium border-b border-zinc-100 pb-2">System Architecture</li>
                            <li className="text-lg text-zinc-900 font-medium border-b border-zinc-100 pb-2">Full-Stack Development</li>
                        </ul>
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">03 / Growth Mechanics</h4>
                        <ul className="space-y-3">
                             <li className="text-lg text-zinc-900 font-medium border-b border-zinc-100 pb-2">Sales Funnel Optimization</li>
                             <li className="text-lg text-zinc-900 font-medium border-b border-zinc-100 pb-2">Data-Driven CRO</li>
                             <li className="text-lg text-zinc-900 font-medium border-b border-zinc-100 pb-2">Performance Marketing</li>
                        </ul>
                     </div>
                </div>

                {/* Mindset */}
                <div className="bg-zinc-50 p-8 border-l-4 border-zinc-900">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Philosophy</h4>
                    <p className="text-lg text-zinc-600 italic font-serif">
                        "Efficiency isn't just about speed; it's about designing systems that remove friction from human potential."
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ITLead;
