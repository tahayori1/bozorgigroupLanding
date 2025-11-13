import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Departments: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  const departments = [
    {
      id: 'materials',
      titleKey: 'departments.materials.title',
      descKey: 'departments.materials.desc',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: '#products'
    },
    {
      id: 'property',
      titleKey: 'departments.property.title',
      descKey: 'departments.property.desc',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      link: '#property-consulting'
    },
    {
      id: 'it',
      titleKey: 'departments.it.title',
      descKey: 'departments.it.desc',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: '#it-solutions'
    }
  ];

  return (
    <section 
      id="departments" 
      ref={sectionRef} 
      className={`py-20 bg-background text-foreground transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
            {t['departments.title']}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t['departments.subtitle']}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <a 
              key={dept.id} 
              href={dept.link}
              className="group relative bg-card p-8 rounded-2xl shadow-lg border border-border hover:border-primary hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {dept.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t[dept.titleKey]}</h3>
              <p className="text-muted-foreground mb-6">{t[dept.descKey]}</p>
              <span className="text-primary font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                {t['hero.scroll']} 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;