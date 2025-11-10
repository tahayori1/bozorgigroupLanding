import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Humanity: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <section 
      id="humanity" 
      ref={sectionRef} 
      className={`py-20 md:py-32 bg-background text-foreground transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            {t['humanity.title']}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
            {t['humanity.subtitle']}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <img src="https://bozorgigroup.com/img/bozorgi-group-abualisina.net.jpg" alt="Abu-Ali Sina Hospital" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
            <h3 className="text-2xl font-bold text-primary">{t['humanity.hospitalTitle']}</h3>
            <p className="text-muted-foreground">{t['humanity.hospitalText']}</p>
            <a href="https://en.abualisina.net" target="_blank" rel="noopener noreferrer" className="inline-block text-primary font-semibold hover:text-primary/80 transition">
              {t['humanity.hospitalLink']} &rarr;
            </a>
          </div>
          <div className="space-y-4">
            <img src="https://bozorgigroup.com/img/bozorgiHighSchool2.jpg" alt="Mohammad Ali Bozorgi Highschool" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
            <h3 className="text-2xl font-bold text-primary">{t['humanity.schoolTitle']}</h3>
            <p className="text-muted-foreground">{t['humanity.schoolText']}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Humanity;