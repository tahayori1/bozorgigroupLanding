import React, { useRef, useState } from 'react';
import Contact from './Contact';
import Testimonials from './Testimonials';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string, delay?: string }> = ({ children, className = "", delay = "0ms" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref, { triggerOnce: true, threshold: 0.1 });
    
    return (
        <div 
            ref={ref} 
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
            style={{ transitionDelay: delay }}
        >
            {children}
        </div>
    );
};

const PageIT: React.FC = () => {
  const { t, locale } = useLanguage();
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', product: '', message: '' });

  const handleScrollToProducts = () => {
    document.getElementById('it-products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest. We will contact you shortly.');
    setFormState({ name: '', phone: '', email: '', product: '', message: '' });
  };

  const metrics = [
    { value: '×10', labelKey: 'it.stats.success' },
    { value: '×3', labelKey: 'it.stats.sales' },
    { value: '×10', labelKey: 'it.stats.efficiency' },
    { value: '24/7', labelKey: 'it.stats.uptime' },
  ];

  const products = [
    { id: 'acquisition', icon: '🎯' },
    { id: 'sales', icon: '💰' },
    { id: 'support', icon: '🤝' },
    { id: 'ads', icon: '📢' },
    { id: 'crm', icon: '❤️' },
    { id: 'scenario', icon: '🔄' },
    { id: 'strategy', icon: '🧠', isSpecial: true },
  ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900 text-white">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center lg:text-start">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary font-medium text-sm animate-fadeIn">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        {t['it.hero.badge']}
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                        {t['it.title']}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 mt-2">
                            10x Your Success
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                        {t['it.subtitle']}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button onClick={handleScrollToProducts} className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                            {t['it.hero.cta']}
                        </button>
                    </div>
                </div>
                {/* Hero Image/Illustration */}
                <div className="hidden lg:block relative">
                     <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                        alt="Dashboard Analytics" 
                        className="rounded-2xl shadow-2xl border border-white/10 transform rotate-y-12 hover:rotate-0 transition-transform duration-700"
                     />
                </div>
            </div>

            {/* Metrics Strip */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
                {metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{m.value}</div>
                        <div className="text-sm text-gray-400 uppercase tracking-wider">{t[m.labelKey]}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">{t['it.why.title']}</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t['it.why.subtitle']}</p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
                <AnimatedSection delay="100ms" className="p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center text-3xl mb-6">🚀</div>
                    <h3 className="text-xl font-bold mb-3">{t['it.why.speed.title']}</h3>
                    <p className="text-muted-foreground">{t['it.why.speed.desc']}</p>
                </AnimatedSection>
                <AnimatedSection delay="200ms" className="p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center text-3xl mb-6">🛡️</div>
                    <h3 className="text-xl font-bold mb-3">{t['it.why.security.title']}</h3>
                    <p className="text-muted-foreground">{t['it.why.security.desc']}</p>
                </AnimatedSection>
                <AnimatedSection delay="300ms" className="p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center text-3xl mb-6">📈</div>
                    <h3 className="text-xl font-bold mb-3">{t['it.why.growth.title']}</h3>
                    <p className="text-muted-foreground">{t['it.why.growth.desc']}</p>
                </AnimatedSection>
            </div>
        </div>
      </section>

      {/* 3. PRODUCTS GRID */}
      <section id="it-products" className="py-20 bg-muted/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">{t['it.products.title']}</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t['it.products.subtitle']}</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((prod, idx) => (
                    <AnimatedSection key={prod.id} delay={`${idx * 100}ms`} className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${prod.isSpecial ? 'bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20 lg:col-span-3 lg:flex lg:items-center lg:gap-8' : 'bg-card hover:shadow-xl border-border'}`}>
                        <div className={`text-4xl mb-6 ${prod.isSpecial ? 'lg:mb-0 lg:text-6xl' : ''}`}>{prod.icon}</div>
                        <div>
                            {prod.isSpecial && <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2 backdrop-blur-sm">{t['it.prod.strategy.badge']}</span>}
                            <h3 className={`text-xl font-bold mb-2 ${prod.isSpecial ? 'text-white text-2xl' : ''}`}>{t[`it.prod.${prod.id}.title`]}</h3>
                            <p className={`${prod.isSpecial ? 'text-white/90' : 'text-muted-foreground'}`}>{t[`it.prod.${prod.id}.desc`]}</p>
                            {!prod.isSpecial && (
                                <div className="mt-4 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    {t['hero.scroll']} <span className="rtl:rotate-180 mx-1">→</span>
                                </div>
                            )}
                        </div>
                        {prod.isSpecial && (
                             <button className="mt-6 lg:mt-0 lg:ml-auto shrink-0 bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                                {t['it.form.submit']}
                             </button>
                        )}
                    </AnimatedSection>
                ))}
            </div>
         </div>
      </section>

      {/* 4. PROCESS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">{t['it.process.title']}</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t['it.process.subtitle']}</p>
            </AnimatedSection>

            <div className="relative grid md:grid-cols-3 gap-8">
                {/* Connector Line */}
                <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border z-0"></div>
                
                {[1, 2, 3].map((step) => (
                    <AnimatedSection key={step} delay={`${step * 200}ms`} className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-card border-4 border-primary flex items-center justify-center text-3xl font-bold text-primary shadow-lg mb-6">
                            {step}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t[`it.process.step${step}.title`]}</h3>
                        <p className="text-muted-foreground">{t[`it.process.step${step}.desc`]}</p>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <Testimonials category="it" />

      {/* 6. LEAD FORM */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">{t['it.form.title']}</h2>
                    <p className="text-gray-300">{t['it.form.subtitle']}</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">{t['it.form.name']}</label>
                            <input required type="text" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">{t['it.form.phone']}</label>
                            <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" value={formState.phone} onChange={e => setFormState({...formState, phone: e.target.value})} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">{t['it.form.email']}</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">{t['it.form.product']}</label>
                        <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors [&>option]:text-black" value={formState.product} onChange={e => setFormState({...formState, product: e.target.value})}>
                            <option value="">Select...</option>
                            {products.map(p => (
                                <option key={p.id} value={p.id}>{t[`it.prod.${p.id}.title`]}</option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">{t['it.form.message']}</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}></textarea>
                    </div>
                    
                    <button type="submit" className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-yellow-500 text-black font-bold text-lg hover:opacity-90 transition-opacity shadow-lg">
                        {t['it.form.submit']}
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-4">{t['it.form.disclaimer']}</p>
                </form>
            </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default PageIT;