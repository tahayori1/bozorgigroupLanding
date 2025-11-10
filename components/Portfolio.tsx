import React from 'react';
import type { PortfolioItem } from '../types';

const portfolioData: PortfolioItem[] = [
  { name: 'QuantumLeap', logoUrl: 'https://picsum.photos/200/100?random=10&grayscale', description: 'AI & Machine Learning' },
  { name: 'Nexus Robotics', logoUrl: 'https://picsum.photos/200/100?random=11&grayscale', description: 'Advanced Automation' },
  { name: 'BioSynth', logoUrl: 'https://picsum.photos/200/100?random=12&grayscale', description: 'Biotechnology' },
  { name: 'StellarCyber', logoUrl: 'https://picsum.photos/200/100?random=13&grayscale', description: 'Cybersecurity' },
  { name: 'EcoVate', logoUrl: 'https://picsum.photos/200/100?random=14&grayscale', description: 'Sustainable Tech' },
  { name: 'AeroDynamics', logoUrl: 'https://picsum.photos/200/100?random=15&grayscale', description: 'Aerospace Engineering' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            We are proud to partner with a diverse group of innovative companies shaping the future.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {portfolioData.map((item) => (
            <div key={item.name} className="group flex flex-col items-center justify-center p-6 bg-gray-900 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
              <img 
                className="h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition duration-300"
                src={item.logoUrl} 
                alt={`${item.name} logo`}
              />
              <p className="mt-4 text-sm font-semibold text-gray-300 group-hover:text-amber-400 transition-colors">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
