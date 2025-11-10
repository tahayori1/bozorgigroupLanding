import React from 'react';

// Fix: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const PhilosophyCard: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-white">{title}</h3>
    <p className="mt-2 text-base text-gray-400">{children}</p>
  </div>
);

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-amber-400 font-semibold tracking-wide uppercase">Our Approach</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Investment Philosophy
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            We invest in businesses with strong fundamentals, visionary leadership, and the potential for transformative growth.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <PhilosophyCard 
              icon={<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} 
              title="Founder-Focused"
            >
              We back exceptional founders and management teams, providing them with the resources and autonomy to execute their vision.
            </PhilosophyCard>
            <PhilosophyCard 
              icon={<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Long-Term Partnerships"
            >
              We are patient investors committed to building enduring value over the long term, through all market cycles.
            </PhilosophyCard>
            <PhilosophyCard 
              icon={<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
              title="Data-Driven Decisions"
            >
              Our investment process is rigorous and analytical, grounded in deep industry research and a thorough understanding of market dynamics.
            </PhilosophyCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;