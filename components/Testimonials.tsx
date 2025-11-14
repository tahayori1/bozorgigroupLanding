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

const Testimonials: React.FC<TestimonialsProps> = ({ category }) => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });
  const data = testimonialsMap[category];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-background text-foreground transition-all duration-1000 ease-in-out border-t border-border ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
            {t['testimonials.title']}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t[`testimonials.${category}.subtitle`]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div key={item.id} className="bg-card p-8 rounded-2xl shadow-lg border border-border relative flex flex-col">
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-primary/20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
                </svg>
              </div>

              <div className="flex-grow mb-6 relative z-10">
                <p className="text-muted-foreground italic text-lg leading-relaxed">
                    "{t[item.quoteKey]}"
                </p>
              </div>

              <div className="flex items-center mt-auto pt-6 border-t border-border/50">
                <img 
                    src={item.image} 
                    alt={t[item.nameKey]} 
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/50"
                />
                <div>
                    <h4 className="font-bold text-foreground">{t[item.nameKey]}</h4>
                    <p className="text-sm text-primary font-medium">{t[item.roleKey]}</p>
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