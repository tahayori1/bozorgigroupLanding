import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Humanity: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="humanity" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t['humanity.title']}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 lg:mx-auto">
            {t['humanity.subtitle']}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <img src="https://bozorgigroup.com/img/bozorgi-group-abualisina.net.jpg" alt="Abu-Ali Sina Hospital" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
            <h3 className="text-2xl font-bold text-amber-500 dark:text-amber-400">{t['humanity.hospitalTitle']}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t['humanity.hospitalText']}</p>
            <a href="https://en.abualisina.net" target="_blank" rel="noopener noreferrer" className="inline-block text-amber-600 dark:text-amber-500 font-semibold hover:text-amber-500 dark:hover:text-amber-400 transition">
              {t['humanity.hospitalLink']} &rarr;
            </a>
          </div>
          <div className="space-y-4">
            <img src="https://bozorgigroup.com/img/bozorgiHighSchool2.jpg" alt="Mohammad Ali Bozorgi Highschool" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
            <h3 className="text-2xl font-bold text-amber-500 dark:text-amber-400">{t['humanity.schoolTitle']}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t['humanity.schoolText']}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Humanity;