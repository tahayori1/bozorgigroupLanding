import React from 'react';
import PropertyConsulting from './PropertyConsulting';
import Contact from './Contact';
import Testimonials from './Testimonials';
import { useLanguage } from '../context/LanguageContext';
import SEO from './SEO';

const PageProperty: React.FC = () => {
  const { t } = useLanguage();

  const propertySchema = {
    "@type": "RealEstateAgent",
    "name": "Bozorgi Group Property Consulting",
    "image": "https://bozorgigroup.com/images/logo-bozorgi.png",
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
        {/* Specific Hero for Property */}
        <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop')" }}
                aria-hidden="true"
            ></div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" aria-hidden="true"></div>
            <div className="relative z-10 p-8 max-w-4xl mx-auto animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                {t['departments.property.title']}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
                {t['hero.property.subtitle']}
                </p>
            </div>
        </section>

      <PropertyConsulting />
      
      <section className="py-20 bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-6">{t['property.strategy.title']}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
                {t['property.strategy.desc']}
            </p>
        </div>
      </section>
      
      <Testimonials category="property" />
      <Contact />
    </>
  );
};

export default PageProperty;