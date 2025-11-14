import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex items-start space-x-4 rtl:space-x-reverse">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-1 text-muted-foreground">{text}</p>
    </div>
  </div>
);


const About: React.FC = () => {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className={`py-20 md:py-32 bg-muted transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl tracking-tight">
            {t['about.title']}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {t['about.description']}
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div className={`mt-10 lg:mt-0 ${locale === 'ar' ? 'lg:order-last' : ''}`} aria-hidden="true">
            <img 
              className="rounded-lg shadow-2xl shadow-primary/5" 
              src="https://cdn.bozorgigroup.com/img/bozorgi%20group%20trading.jpg" 
              alt="Bozorgi Group Trading Team" 
            />
          </div>
          <div className="space-y-10">
              <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                title={t['about.missionTitle']}
                text={t['about.missionText']}
              />
              <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                title={t['about.visionTitle']}
                text={t['about.visionText']}
              />
              <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                title={t['about.valuesTitle']}
                text={t['about.valuesText']}
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;