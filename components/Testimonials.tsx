import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type Category = 'materials' | 'property' | 'it';

interface TestimonialData {
  id: number;
  nameKey: string;
  roleKey: string;
  quoteKey: string;
  image: string;
}

const testimonialsMap: Record<Category, TestimonialData[]> = {
  materials: [
    {
      id: 1,
      nameKey: "testimonials.materials.name1",
      roleKey: "testimonials.materials.role1",
      quoteKey: "testimonials.materials.quote1",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: 2,
      nameKey: "testimonials.materials.name2",
      roleKey: "testimonials.materials.role2",
      quoteKey: "testimonials.materials.quote2",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    },
    {
      id: 3,
      nameKey: "testimonials.materials.name3",
      roleKey: "testimonials.materials.role3",
      quoteKey: "testimonials.materials.quote3",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop"
    }
  ],
  property: [
    {
      id: 1,
      nameKey: "testimonials.property.name1",
      roleKey: "testimonials.property.role1",
      quoteKey: "testimonials.property.quote1",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
      id: 2,
      nameKey: "testimonials.property.name2",
      roleKey: "testimonials.property.role2",
      quoteKey: "testimonials.property.quote2",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      nameKey: "testimonials.property.name3",
      roleKey: "testimonials.property.role3",
      quoteKey: "testimonials.property.quote3",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop"
    }
  ],
  it: [
    {
      id: 1,
      nameKey: "testimonials.it.name1",
      roleKey: "testimonials.it.role1",
      quoteKey: "testimonials.it.quote1",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: 2,
      nameKey: "testimonials.it.name2",
      roleKey: "testimonials.it.role2",
      quoteKey: "testimonials.it.quote2",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1886&auto=format&fit=crop"
    },
    {
      id: 3,
      nameKey: "testimonials.it.name3",
      roleKey: "testimonials.it.role3",
      quoteKey: "testimonials.it.quote3",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
    }
  ]
};

interface TestimonialsProps {
  category: Category;
}

const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const QuoteMarkIcon = () => (
    <svg className="w-8 h-8 text-primary/20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zM26 8c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
    </svg>
);

const Testimonials: React.FC<TestimonialsProps> = ({ category }) => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });
  const data = testimonialsMap[category];

  return (
    <section 
      ref={sectionRef}
      className={`py-24 bg-gradient-to-b from-background to-secondary/20 transition-all duration-1000 ease-in-out border-t border-border/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">{t['testimonials.title']}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-foreground">
             Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            {t[`testimonials.${category}.subtitle`]}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div 
                key={item.id} 
                className="relative flex flex-col bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-6 right-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <QuoteMarkIcon />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(n => <StarIcon key={n} filled={true} />)}
              </div>

              {/* Quote */}
              <blockquote className="flex-grow mb-8">
                  <p className="text-lg text-foreground/80 leading-relaxed font-medium italic">
                      "{t[item.quoteKey]}"
                  </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center pt-6 border-t border-border/50 mt-auto">
                  <img 
                    src={item.image} 
                    alt={t[item.nameKey]}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-background shadow-sm mr-4"
                  />
                  <div>
                      <div className="font-bold text-foreground text-base">{t[item.nameKey]}</div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-wide">{t[item.roleKey]}</div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;