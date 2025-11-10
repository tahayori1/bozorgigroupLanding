import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 p-8 max-w-4xl mx-auto animate-fadeIn">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-4">
          Investing in <br />
          <span className="text-amber-400">Visionary Ventures</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Bozorgi Group is a private investment firm focused on partnering with exceptional founders to build enduring, market-leading companies.
        </p>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
