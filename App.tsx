import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Portfolio';
import History from './components/Team';
import Humanity from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import { useLanguage } from './context/LanguageContext';

const App: React.FC = () => {
  const { locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <div className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <History />
        <Humanity />
        <Contact />
      </main>
      <Footer />
      <Chatbox />
    </div>
  );
};

export default App;