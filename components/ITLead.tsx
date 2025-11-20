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
      className={`py-24 bg-white border-t border-zinc-100 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Technical ID Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16 border-b border-zinc-100 pb-12">
             
             {/* Small Image - Avatar Style */}
             <div className="relative group flex-shrink-0">
                 <div className="absolute -inset-1.5 border border-dashed border-zinc-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
                 <div className="w-32 h-32 rounded-full bg-zinc-100 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10 ring-4 ring-white">
                     <img 
                        src="https://cdn.bozorgigroup.com/img/Farzin-Tahayori.jpg" 
                        alt={t['it.lead.name']} 
                        className="w-full h-full object-cover object-top"
                    />
                 </div>
                 <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 border-4 border-white rounded-full z-20"></div>
             </div>

             {/* Info Block */}
             <div className="flex-grow pt-2">
                 <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-3xl font-bold text-zinc-900 tracking-tight">{t['it.lead.name']}</h3>
                            <span className="px-2 py-0.5 bg-zinc-100 text-[10px] font-mono uppercase tracking-widest text-zinc-500 rounded">System Architect</span>
                        </div>
                        <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mb-4">{t['it.lead.title']}</p>
                    </div>
                    
                    <a 
                        href={t['it.lead.website.url']} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group inline-flex items-center text-sm font-bold text-zinc-900 hover:text-blue-600 transition-colors bg-zinc-50 px-4 py-2 rounded-full hover:bg-blue-50"
                    >
                        {t['it.lead.website.text']}
                        <svg className="w-4 h-4 ms-2 transform group-hover:translate-x-1 transition-transform rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                 </div>
             </div>
        </div>

        {/* Two Column Layout for Content */}
        <div className="grid md:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="md:col-span-7 lg:col-span-8">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    01 / Executive Profile
                 </h4>
                 <p className="text-xl font-light text-zinc-800 leading-relaxed mb-10">
                    {t['it.lead.summary']}
                 </p>
                 
                 <div className="bg-white border border-zinc-100 p-6 shadow-sm rounded-lg relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                     <p className="text-zinc-600 italic font-serif pl-4">
                        "Efficiency isn't just about speed; it's about designing systems that remove friction from human potential."
                     </p>
                 </div>
            </div>

            {/* Sidebar / Skills */}
            <div className="md:col-span-5 lg:col-span-4 space-y-10">
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-5 border-b border-zinc-100 pb-2">02 / Core Architecture</h4>
                    <ul className="space-y-3">
                         <li className="flex justify-between items-center group">
                             <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">AI Agents & Automation</span>
                             <span className="text-xs font-mono text-zinc-300 group-hover:text-blue-500">V.2.0</span>
                         </li>
                         <li className="flex justify-between items-center group">
                             <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">Funnel Engineering</span>
                             <span className="text-xs font-mono text-zinc-300 group-hover:text-blue-500">EXP</span>
                         </li>
                         <li className="flex justify-between items-center group">
                             <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">Full-Stack Systems</span>
                             <span className="text-xs font-mono text-zinc-300 group-hover:text-blue-500">DEV</span>
                         </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-5 border-b border-zinc-100 pb-2">03 / Attributes</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Systemic Thinking', 'Data-Driven', 'Scalability', 'Problem Solving'].map((tag, i) => (
                             <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md bg-zinc-50 text-xs text-zinc-600 border border-zinc-100">
                                {tag}
                             </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ITLead;