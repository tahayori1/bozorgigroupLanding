import React, { useRef, useState } from 'react';
import Contact from './Contact';
import Testimonials from './Testimonials';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SEO from './SEO';
import ITLead from './ITLead';
import ITSolutions from './ITSolutions';

const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string, delay?: string }> = ({ children, className = "", delay = "0ms" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref, { triggerOnce: true, threshold: 0.1 });
    
    return (
        <div 
            ref={ref} 
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
            style={{ transitionDelay: delay }}
        >
            {children}
        </div>
    );
};

const MetricCard: React.FC<{ label: string, value: string, index: number }> = ({ label, value, index }) => (
    <div className="border-l border-zinc-200 pl-6 py-2" style={{ transitionDelay: `${index * 100}ms` }}>
        <p className="text-4xl font-bold text-zinc-900 tracking-tight mb-1">{value}</p>
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">{label}</p>
    </div>
);

const PageIT: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', website: '' });

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Request received. We will audit your system and reply shortly.');
    setFormState({ name: '', email: '', website: '' });
  };

  const itSchema = {
    "@type": "SoftwareApplication",
    "name": "Tahayori Automation System",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free Strategy Call Available"
    }
  };

  const metrics = [
    { value: "312%", key: 'it.stats.success' },
    { value: "8.7x", key: 'it.stats.sales' },
    { value: "-73%", key: 'it.stats.efficiency' },
    { value: "100%", key: 'it.stats.uptime' },
  ];

  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <SEO 
        titleKey="seo.it.title" 
        descriptionKey="seo.it.desc" 
        schema={itSchema} 
        canonicalPath="/?page=it"
      />
      
      {/* 1. HERO: FOCUS ARCHITECTURE */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden border-b border-zinc-100">
        {/* Subtle Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
             <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-200 rounded-full bg-white mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">System Operational</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-zinc-900 leading-[0.9] mb-8">
                    AUTOMATION<br />
                    <span className="text-zinc-400">IS LEVERAGE.</span>
                </h1>
             </AnimatedSection>

             <div className="grid lg:grid-cols-12 gap-12 items-end mt-12">
                <div className="lg:col-span-5">
                    <AnimatedSection delay="200ms">
                        <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed">
                            {t['it.subtitle']}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                             <button onClick={() => handleScrollTo('lead-form')} className="px-8 py-4 bg-zinc-900 text-white font-medium text-sm uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                                {t['it.hero.cta']}
                            </button>
                            <button onClick={() => handleScrollTo('solutions')} className="px-8 py-4 border border-zinc-200 text-zinc-900 font-medium text-sm uppercase tracking-widest hover:bg-zinc-50 transition-colors">
                                {t['it.hero.cta_secondary']}
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
                <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {metrics.map((m, idx) => (
                        <MetricCard 
                            key={idx} 
                            index={idx} 
                            value={m.value} 
                            label={t[m.key].split(' ').slice(1).join(' ')} 
                        />
                    ))}
                </div>
             </div>
        </div>
      </section>

      {/* 2. SOLUTIONS (Refined) */}
      <div id="solutions">
        <ITSolutions />
      </div>

      {/* 3. PROCESS: LINEAR & CLEAN */}
      <section className="py-32 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <AnimatedSection className="mb-20 max-w-2xl">
                <h2 className="text-4xl font-bold tracking-tight mb-6">{t['it.process.title']}</h2>
                <div className="h-1 w-20 bg-zinc-900"></div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-12 relative">
                <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-zinc-200 z-0"></div>
                
                {[1, 2, 3].map((step) => (
                    <AnimatedSection key={step} delay={`${step * 150}ms`} className="relative z-10 bg-white pr-8">
                        <div className="text-6xl font-bold text-zinc-100 mb-4 transition-colors duration-500 hover:text-zinc-900 cursor-default">0{step}</div>
                        <h3 className="text-lg font-bold uppercase tracking-wide mb-3">{t[`it.process.step${step}.title`]}</h3>
                        <p className="text-zinc-500 font-light leading-relaxed">{t[`it.process.step${step}.desc`]}</p>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </section>

      {/* 4. LEAD PROFILE */}
      <ITLead />

      {/* 5. MINIMALIST AUDIT FORM */}
      <section id="lead-form" className="py-32 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">{t['it.form.title']}</h2>
                <p className="text-zinc-500">{t['it.form.subtitle']}</p>
            </div>

            <form onSubmit={handleFormSubmit} className="bg-white p-10 border border-zinc-200 shadow-sm">
                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">{t['it.form.name']}</label>
                            <input 
                                required 
                                type="text" 
                                className="w-full bg-transparent border-b border-zinc-300 py-2 text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors rounded-none" 
                                value={formState.name} 
                                onChange={e => setFormState({...formState, name: e.target.value})} 
                            />
                        </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">{t['it.form.email']}</label>
                            <input 
                                required 
                                type="email" 
                                className="w-full bg-transparent border-b border-zinc-300 py-2 text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors rounded-none" 
                                value={formState.email} 
                                onChange={e => setFormState({...formState, email: e.target.value})} 
                            />
                        </div>
                    </div>
                     <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Company Website</label>
                        <input 
                            type="text" 
                            className="w-full bg-transparent border-b border-zinc-300 py-2 text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors rounded-none" 
                            value={formState.website} 
                            onChange={e => setFormState({...formState, website: e.target.value})} 
                        />
                    </div>
                    
                    <div className="pt-6">
                        <button type="submit" className="w-full py-4 bg-zinc-900 text-white font-bold text-sm uppercase tracking-widest hover:bg-black transition-colors">
                            {t['it.form.submit']}
                        </button>
                    </div>
                    <p className="text-xs text-center text-zinc-400 mt-4 font-mono">SECURE & CONFIDENTIAL</p>
                </div>
            </form>
        </div>
      </section>
      
      <Testimonials category="it" />
      <Contact />
    </div>
  );
};

export default PageIT;
