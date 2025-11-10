import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-gray-300 font-sans selection:bg-amber-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
