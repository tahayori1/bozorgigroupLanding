import React, { useRef } from 'react';
import PropertyConsulting from './PropertyConsulting';
import PrivateClientServices from './PrivateClientServices';
import Contact from './Contact';
import Testimonials from './Testimonials';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SEO from './SEO';

const PageProperty: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroVisible = useIntersectionObserver(heroRef, { triggerOnce: true });

  const propertySchema = {
    "@type": "RealEstateAgent",
    "name": "Bozorgi Group Property Consulting",
    "image": "https://cdn.bozorgigroup.com/img/aabozorgi.png",
    "description": "Expert real estate investment consulting for buying, selling, and renting properties in the Middle East and Europe.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
    },
    "priceRange": "$$$"
  };

  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
        <SEO 
          titleKey="seo.property.title" 
          descriptionKey="seo.property.desc" 
          schema={propertySchema} 
          canonicalPath="/?page=property"
        />

        {/* 1. HERO: Minimalist & Typographic */}
        <section ref={heroRef} className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20 border-b border-zinc-100 overflow-hidden">
             {/* Subtle Texture Background */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] grayscale mix-blend-multiply pointer-events-none"></div>
            
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                 <div className="inline-block mb-8 px-4 py-1.5 border border-zinc-900 rounded-full">
                    <span className="text-xs font-mono uppercase tracking-widest font-bold">Bozorgi Real Estate</span>
                 </div>
                 
                 <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-zinc-900 leading-[0.9] mb-12">
                    PRECISE.<br/>
                    PROFITABLE.<br/>
                    PRIVATE.
                 </h1>

                 <div className="grid md:grid-cols-12 gap-12 items-end">
                    <div className="md:col-span-6 lg:col-span-5">
                         <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed border-l-2 border-zinc-900 pl-6">
                             {t['hero.property.subtitle']}
                         </p>
                    </div>
                    <div className="md:col-span-6 lg:col-span-7 flex justify-start md:justify-end pb-2">
                        <a href="#consulting" className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-zinc-600 transition-colors">
                            Explore Services
                            <span className="w-12 h-px bg-zinc-900 group-hover:w-20 transition-all duration-300"></span>
                        </a>
                    </div>
                 </div>
            </div>
        </section>

        {/* 2. CONSULTING GRID */}
        <div id="consulting">
             <PropertyConsulting />
        </div>

        {/* 3. STRATEGIC APPROACH: Split Screen */}
        <section className="py-0 bg-zinc-50 border-y border-zinc-200">
             <div className="grid lg:grid-cols-2">
                <div className="relative h-[50vh] lg:h-auto bg-zinc-200 overflow-hidden grayscale">
                     <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                        alt="Architecture" 
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-[2s]" 
                     />
                     <div className="absolute inset-0 bg-zinc-900/10"></div>
                </div>
                <div className="p-12 md:p-24 flex flex-col justify-center">
                     <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-8">
                         MARKET<br/>INTELLIGENCE
                     </h2>
                     <p className="text-lg text-zinc-600 font-light leading-relaxed mb-12">
                        {t['property.strategy.desc']}
                     </p>
                     
                     <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-colors">
                                <span className="text-lg font-bold group-hover:text-white">01</span>
                            </div>
                            <span className="text-zinc-800 font-medium uppercase tracking-wide">Data-Driven Valuation</span>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-colors">
                                <span className="text-lg font-bold group-hover:text-white">02</span>
                            </div>
                            <span className="text-zinc-800 font-medium uppercase tracking-wide">Regulatory Compliance</span>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-colors">
                                <span className="text-lg font-bold group-hover:text-white">03</span>
                            </div>
                            <span className="text-zinc-800 font-medium uppercase tracking-wide">Asset Management</span>
                        </div>
                     </div>
                </div>
             </div>
        </section>

        {/* 4. PRIVATE CLIENT SERVICES */}
        <PrivateClientServices />
        
        <Testimonials category="property" />
        <Contact />
    </div>
  );
};

export default PageProperty;