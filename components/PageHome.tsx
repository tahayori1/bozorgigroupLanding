import React from 'react';
import Hero from './Hero';
import Departments from './Departments';
import SEO from './SEO';

const PageHome: React.FC = () => {
  const organizationSchema = {
    "@type": "Corporation",
    "name": "Bozorgi Group",
    "url": "https://bozorgigroup.com",
    "logo": "https://cdn.bozorgigroup.com/img/aabozorgi.png",
    "foundingDate": "1988",
    "description": "A multi-faceted conglomerate specializing in Building Materials, Property Consulting, and IT Solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-4-321-3030",
      "contactType": "customer service",
      "areaServed": ["AE", "ES", "IR"],
      "availableLanguage": ["English", "Spanish", "Arabic", "Persian"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Manara Tower, 8th Floor, Office 802, Business Bay",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "sameAs": [
      "https://www.facebook.com/AliBozorgiofficial/",
      "https://x.com/aliabozorgi",
      "https://www.instagram.com/alibozorgi.uae"
    ]
  };

  return (
    <>
      <SEO 
        titleKey="seo.home.title" 
        descriptionKey="seo.home.desc" 
        schema={organizationSchema} 
        canonicalPath="/"
      />
      <Hero />
      <Departments />
    </>
  );
};

export default PageHome;