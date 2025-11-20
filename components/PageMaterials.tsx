import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import MaterialsConsulting from './MaterialsConsulting';
import Products from './Portfolio';
import Contact from './Contact';
import Testimonials from './Testimonials';
import { useLanguage } from '../context/LanguageContext';
import SEO from './SEO';

const PageMaterials: React.FC = () => {
  const { t } = useLanguage();

  const materialsSchema = {
    "@type": "Service",
    "serviceType": "Building Materials Consulting and Sourcing",
    "provider": {
      "@type": "Corporation",
      "name": "Bozorgi Group"
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wood and Building Materials",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "MDF" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "HDF" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Plywood" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Hardwood" } }
      ]
    }
  };

  return (
    <>
      <SEO 
        titleKey="seo.materials.title" 
        descriptionKey="seo.materials.desc" 
        schema={materialsSchema} 
        canonicalPath="/?page=materials"
      />
      
      {/* Finsa-style Architectural Hero - Light Theme */}
      <section className="relative h-[85vh] flex items-center justify-start overflow-hidden group bg-white">
        {/* Background Image with subtle zoom effect */}
        <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-[10s] ease-in-out group-hover:scale-105 opacity-90"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585314062604-1a357de8b000?q=80&w=2071&auto=format&fit=crop')" }}
            aria-hidden="true"
        ></div>
        
        {/* Gradient Overlay - Light Mode: White fading to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent opacity-100" aria-hidden="true"></div>
        
        {/* Content - Architectural Layout */}
        <div className="relative z-10 p-8 md:p-16 max-w-7xl w-full mx-auto">
            <div className="border-l-4 border-primary pl-6 md:pl-10 animate-fade-in-up">
                <span className="block text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 font-bold">
                    Global Sourcing
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-6 leading-none drop-shadow-sm">
                    {t['departments.materials.title']}
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl text-slate-600 font-light leading-relaxed">
                    {t['hero.materials.subtitle']}
                </p>
            </div>
        </div>
      </section>

      {/* Sections ordered for narrative flow: Portfolio (Visual) -> Consulting (Process) -> Why Us (Trust) */}
      <Products />
      <MaterialsConsulting />
      <WhyChooseUs />
      <Testimonials category="materials" />
      <Contact />
    </>
  );
};

export default PageMaterials;