import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation, Page } from '../context/NavigationContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Departments: React.FC = () => {
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  const departments = [
    {
      id: 'materials',
      titleKey: 'departments.materials.title',
      descKey: 'departments.materials.desc',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             {/* Stylized Stacked Wood / Materials */}
             <path d="M20 65L50 80L80 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
             <path d="M20 50L50 65L80 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/80"/>
             <path d="M20 35L50 50L80 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60"/>
             <path d="M50 20L80 35L50 50L20 35L50 20Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
             <path d="M50 50V80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
        </svg>
      ),
      page: 'materials' as Page
    },
    {
      id: 'property',
      titleKey: 'departments.property.title',
      descKey: 'departments.property.desc',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             {/* Stylized Modern Building */}
             <path d="M25 85H75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary"/>
             <path d="M35 85V40L50 25L65 40V85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
             <path d="M50 25V85" stroke="currentColor" strokeWidth="1.5" className="text-primary/30"/>
             <path d="M42 50H58" stroke="currentColor" strokeWidth="1.5" className="text-primary/30"/>
             <path d="M42 65H58" stroke="currentColor" strokeWidth="1.5" className="text-primary/30"/>
             <rect x="38" y="50" width="24" height="25" fill="currentColor" fillOpacity="0.05" className="text-primary"/>
             {/* Sun/Moon abstract */}
             <circle cx="75" cy="25" r="8" fill="currentColor" fillOpacity="0.1" className="text-primary"/>
        </svg>
      ),
      page: 'property' as Page
    },
    {
      id: 'it',
      titleKey: 'departments.it.title',
      descKey: 'departments.it.desc',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             {/* Network / Circuit Nodes */}
             <circle cx="50" cy="50" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" className="text-primary"/>
             <circle cx="25" cy="75" r="6" stroke="currentColor" strokeWidth="2" className="text-primary/70"/>
             <circle cx="75" cy="25" r="6" stroke="currentColor" strokeWidth="2" className="text-primary/70"/>
             <circle cx="75" cy="75" r="6" stroke="currentColor" strokeWidth="2" className="text-primary/70"/>
             <path d="M43 57L29 71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/60"/>
             <path d="M57 43L71 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/60"/>
             <path d="M57 57L71 71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/60"/>
             <path d="M30 25H50V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40" strokeDasharray="4 4"/>
        </svg>
      ),
      page: 'it' as Page
    }
  ];

  return (
    <section 
      id="departments" 
      ref={sectionRef} 
      className={`py-32 bg-background text-foreground relative overflow-hidden transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/50 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            {t['departments.title']}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            {t['departments.subtitle']}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {departments.map((dept, index) => (
            <button
              key={dept.id} 
              onClick={() => navigateTo(dept.page)}
              className={`group relative bg-card p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center w-full overflow-hidden hover:-translate-y-3 hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              
              <div className="relative mb-10 p-6 rounded-full bg-background shadow-sm border border-border/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                {dept.icon}
              </div>
              
              <h3 className="relative text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">{t[dept.titleKey]}</h3>
              <p className="relative text-muted-foreground mb-10 leading-relaxed">{t[dept.descKey]}</p>
              
              <span className="relative mt-auto inline-flex items-center justify-center px-8 py-3 border border-primary/20 text-base font-medium rounded-full text-primary bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm group-hover:shadow-lg hover:scale-105">
                {t['hero.scroll']} 
                <svg className="ml-2 -mr-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;