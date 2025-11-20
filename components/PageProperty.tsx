import React from 'react';
import PropertyConsulting from './PropertyConsulting';
import PrivateClientServices from './PrivateClientServices';
import Contact from './Contact';
import Testimonials from './Testimonials';
import { useLanguage } from '../context/LanguageContext';
import SEO from './SEO';

const PageProperty: React.FC = () => {
  const { t } = useLanguage();

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
    <>
        <SEO 
          titleKey="seo.property.title" 
          descriptionKey="seo.property.desc" 
          schema={propertySchema} 
          canonicalPath="/?page=property"
        />
        {/* Specific Hero for Property - Light Theme */}
        <section className="relative h-[70vh] flex items-center justify-center text-center text-slate-900 overflow-hidden bg-white">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop')" }}
                aria-hidden="true"
            ></div>
            {/* Light Overlay with Blur */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/75 backdrop-blur-[2px]" aria-hidden="true"></div>
            
            <div className="relative z-10 p-8 max-w-5xl mx-auto animate-fadeIn">
                <div className="inline-block mb-4 px-3 py-1 border border-slate-400 rounded-full text-xs font-semibold tracking-widest uppercase text-slate-500">
                    Real Estate & Investment
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-slate-900 drop-shadow-sm">
                  {t['departments.property.title']}
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-600 font-light leading-relaxed">
                  {t['hero.property.subtitle']}
                </p>
            </div>
        </section>

      <PropertyConsulting />
      
      <section className="py-20 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t['property.strategy.title']}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    {t['property.strategy.desc']}
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Strategic property planning" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
        </div>
      </section>

      <PrivateClientServices />
      
      <Testimonials category="property" />
      <Contact />
    </>
  );
};

export default PageProperty;