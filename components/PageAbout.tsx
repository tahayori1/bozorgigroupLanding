import React from 'react';
import About from './About';
import History from './Team';
import Humanity from './Philosophy';
import SEO from './SEO';

const PageAbout: React.FC = () => {
  const aboutSchema = {
    "@type": "AboutPage",
    "name": "About Bozorgi Group",
    "description": "History, Mission, Vision and Humanity initiatives of Bozorgi Group.",
    "url": "https://bozorgigroup.com/?page=about"
  };

  return (
    <>
      <SEO 
        titleKey="seo.about.title" 
        descriptionKey="seo.about.desc" 
        schema={aboutSchema} 
        canonicalPath="/?page=about"
      />
      <div className="pt-20"> {/* Padding for fixed header */}
        <About />
        <History />
        <Humanity />
      </div>
    </>
  );
};

export default PageAbout;