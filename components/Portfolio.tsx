import React, { useRef } from 'react';
import type { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const productsData: Product[] = [
  { nameKey: 'products.mdf.name', imageUrl: 'https://cdn.bozorgigroup.com/img/mdf-bozorgi-scaled.jpg', descriptionKey: 'products.mdf.description' },
  { nameKey: 'products.hdf.name', imageUrl: 'https://cdn.bozorgigroup.com/img/hdf-ali-bozorgi.png', descriptionKey: 'products.hdf.description' },
  { nameKey: 'products.plywood.name', imageUrl: 'https://cdn.bozorgigroup.com/img/alibozorgi-plywood.jpg', descriptionKey: 'products.plywood.description' },
  { nameKey: 'products.hardwood.name', imageUrl: 'https://cdn.bozorgigroup.com/img/ali-bozorgi-hardwood-scaled.jpg', descriptionKey: 'products.hardwood.description' },
  { nameKey: 'products.chipboard.name', imageUrl: 'https://cdn.bozorgigroup.com/img/ali-bozorgi-chipboard-scaled.jpeg', descriptionKey: 'products.chipboard.description' },
  { nameKey: 'products.hpl.name', imageUrl: 'https://cdn.bozorgigroup.com/img/Decorative_laminate_HPL.jpg', descriptionKey: 'products.hpl.description' },
  { nameKey: 'products.veneer.name', imageUrl: 'https://cdn.bozorgigroup.com/img/ali-bozorgi-veneer-scaled.jpg', descriptionKey: 'products.veneer.description' },
];

const Products: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <section 
      id="products"
      ref={sectionRef}
      className={`py-24 bg-white text-foreground transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gray-200">
          <div className="max-w-3xl">
             <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-2 block">Collection</span>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
                {t['products.title']}
             </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-xl text-lg text-gray-500 font-light text-right">
            {t['products.subtitle']}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {productsData.map((item) => (
            <div key={item.nameKey} className="group relative bg-white aspect-[4/5] overflow-hidden hover:z-10 transition-all duration-500 cursor-pointer">
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                    src={item.imageUrl} 
                    alt={t[item.nameKey]}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white tracking-wide mb-2">{t[item.nameKey]}</h3>
                    <p className="text-sm text-gray-200 line-clamp-3 font-light leading-relaxed">{t[item.descriptionKey]}</p>
                    <div className="mt-4 h-0.5 w-12 bg-primary"></div>
                 </div>
              </div>

               {/* Static Title for Mobile/Default View */}
               <div className="absolute bottom-0 left-0 p-6 md:group-hover:opacity-0 transition-opacity duration-300">
                   <h3 className="text-xl font-bold text-white drop-shadow-md">{t[item.nameKey]}</h3>
               </div>
            </div>
          ))}
          
          {/* "More" Card */}
          <div className="relative bg-gray-50 aspect-[4/5] flex flex-col items-center justify-center p-8 text-center group overflow-hidden">
             <div className="absolute inset-0 border-2 border-dashed border-gray-300 m-4 group-hover:border-primary transition-colors duration-300"></div>
             <h3 className="text-xl font-bold text-gray-900 z-10">Custom Orders</h3>
             <p className="mt-2 text-sm text-gray-500 z-10 mb-6">Looking for something specific?</p>
             <a href="#contact" className="z-10 px-6 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors duration-300">
                Contact Us
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;