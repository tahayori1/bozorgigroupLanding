import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ITLead: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  const skillGroups = [
    { titleKey: 'it.lead.skills.group1.title', skills: ['C', 'C++', 'C#', 'Node.js', 'Node-RED', 'Electron', 'Vue', 'React', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'MongoDB', 'IoT'] },
    { titleKey: 'it.lead.skills.group2.title', skills: ['WordPress', 'Elementor', 'TailwindCSS', 'CRO', 'SEO', 'UX Architecture', 'Landing Page Optimization'] },
    { titleKey: 'it.lead.skills.group3.title', skills: ['n8n', 'ChatGPT Prompt Engineering', 'Multi-Agent AI Systems', 'Workflow Automation'] },
    { titleKey: 'it.lead.skills.group4.title', skills: ['Performance Marketing', 'CRM Design', 'Sales Funnel Optimization', 'Copywriting', 'Brand Strategy'] },
    { titleKey: 'it.lead.skills.group5.title', skills: ['Video Editing (CapCut, InShot, Canva)', 'Social Media Strategy', 'Content Scripting'] }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 bg-muted/30 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 text-foreground">
            {t['it.lead.sectionTitle']}
          </h2>
        </div>

        <div className="bg-card rounded-2xl shadow-xl border border-border p-8 grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Profile Pic & Info */}
          <div className="lg:col-span-1 text-center flex flex-col items-center">
            <img 
              src="https://bozorgigroup.com/img/Farzin-Tahayori.jpg" 
              alt={t['it.lead.name']} 
              className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-primary shadow-lg"
            />
            <h3 className="text-2xl font-bold text-foreground">{t['it.lead.name']}</h3>
            <p className="text-primary font-medium">{t['it.lead.title']}</p>
            <a 
              href={t['it.lead.website.url']} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              {t['it.lead.website.text']}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h4 className="text-xl font-bold mb-3 border-b-2 border-primary/20 pb-2">{t['it.lead.summaryTitle']}</h4>
              <p className="text-muted-foreground leading-relaxed">{t['it.lead.summary']}</p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 border-b-2 border-primary/20 pb-2">{t['it.lead.skillsTitle']}</h4>
              <div className="space-y-4">
                {skillGroups.map(group => (
                  <div key={group.titleKey}>
                    <h5 className="font-semibold text-foreground mb-2">{t[group.titleKey]}</h5>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map(skill => (
                        <span key={skill} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

             <div>
              <h4 className="text-xl font-bold mb-3 border-b-2 border-primary/20 pb-2">{t['it.lead.traitsTitle']}</h4>
              <ul className="space-y-2">
                {[1, 2, 3, 4, 5].map(num => (
                   <li key={num} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted-foreground">{t[`it.lead.trait${num}`]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITLead;