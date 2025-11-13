import React from 'react';
import ITSolutions from './ITSolutions';
import Contact from './Contact';
import { useLanguage } from '../context/LanguageContext';

const PageIT: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      {/* Specific Hero for IT */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')" }}
            aria-hidden="true"
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-70" aria-hidden="true"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            {t['departments.it.title']}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            {t['hero.it.subtitle']}
            </p>
        </div>
      </section>

      <ITSolutions />
      <Contact />
    </>
  );
};

export default PageIT;