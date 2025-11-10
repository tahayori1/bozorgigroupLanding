import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className={`py-20 md:py-32 bg-muted transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
          {t['contact.title']}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {t['contact.subtitle']}
        </p>
        <div className="mt-12 text-muted-foreground space-y-4">
          <div>
            <p className="font-semibold text-foreground">Bozorgi Group</p>
            <p>Business Bay, Marasi Dr</p>
            <p>Al Manara Tower, 8th Floor, Office 802</p>
            <p>Dubai, United Arab Emirates</p>
            <p>P.O.Box: 124361</p>
          </div>
          <div>
            <a href="tel:+97143213030" className="hover:text-primary">+971 4 321 3030</a>
            <span className="mx-2">|</span>
            <a href="tel:+971523952892" className="hover:text-primary">+971 52 395 2892</a>
          </div>
           <div>
             <a
              href="mailto:info@bozorgigroup.com"
              className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary/90 transition duration-300 transform hover:scale-105 mt-6"
            >
              info@bozorgigroup.com
            </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;