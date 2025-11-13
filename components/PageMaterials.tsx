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
      {/* Specific Hero for Materials */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585314062604-1a357de8b000?q=80&w=2071&auto=format&fit=crop')" }}
            aria-hidden="true"
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" aria-hidden="true"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            {t['departments.materials.title']}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            {t['hero.materials.subtitle']}
            </p>
        </div>
      </section>

      <WhyChooseUs />
      <MaterialsConsulting />
      <Products />
      <Testimonials category="materials" />
      <Contact />
    </>
  );
};

export default PageMaterials;