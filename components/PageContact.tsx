import React from 'react';
import Contact from './Contact';
import SEO from './SEO';

const PageContact: React.FC = () => {
  const contactSchema = {
    "@type": "ContactPage",
    "name": "Contact Bozorgi Group",
    "url": "https://bozorgigroup.com/?page=contact"
  };

  return (
    <>
      <SEO 
        titleKey="seo.contact.title" 
        descriptionKey="seo.contact.desc" 
        schema={contactSchema} 
        canonicalPath="/?page=contact"
      />
      <div className="pt-20 min-h-screen flex flex-col justify-center"> 
        <Contact />
      </div>
    </>
  );
};

export default PageContact;