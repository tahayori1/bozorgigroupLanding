import React, { useRef } from 'react';
import type { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const productsData: Product[] = [
  { nameKey: 'products.mdf.name', imageUrl: 'https://bozorgigroup.com/img/mdf-bozorgi-scaled.jpg', descriptionKey: 'products.mdf.description' },
  { nameKey: 'products.hdf.name', imageUrl: 'https://bozorgigroup.com/img/hdf-ali-bozorgi.png', descriptionKey: 'products.hdf.description' },
  { nameKey: 'products.plywood.name', imageUrl: 'https://bozorgigroup.com/img/alibozorgi-plywood.jpg', descriptionKey: 'products.plywood.description' },
  { nameKey: 'products.hardwood.name', imageUrl: 'https://bozorgigroup.com/img/ali-bozorgi-hardwood-scaled.jpg', descriptionKey: 'products.hardwood.description' },
  { nameKey: 'products.chipboard.name', imageUrl: 'https://bozorgigroup.com/img/ali-bozorgi-chipboard-scaled.jpeg', descriptionKey: 'products.chipboard.description' },
  { nameKey: 'products.hpl.name', imageUrl: 'https://bozorgigroup.com/img/Decorative_laminate_HPL.jpg', descriptionKey: 'products.hpl.description' },
  { nameKey: 'products.veneer.name', imageUrl: 'https://bozorgigroup.com/img/ali-bozorgi-veneer-scaled.jpg', descriptionKey: 'products.veneer.description' },
];

const Products: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <section 
      id="products"
      ref={sectionRef}
      className={`py-20 md:py-32 bg-muted transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            {t['products.title']}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
            {t['products.subtitle']}
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productsData.map((item) => (
            <div key={item.nameKey} className="group flex flex-col items-center text-center p-6 bg-card rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border border-border">
              <img 
                className="h-40 w-full object-cover rounded-md mb-4"
                src={item.imageUrl} 
                alt={t[item.nameKey]}
              />
              <h3 className="text-lg font-bold text-primary">{t[item.nameKey]}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t[item.descriptionKey]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;