import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import PageHome from './components/PageHome';
import PageMaterials from './components/PageMaterials';
import PageProperty from './components/PageProperty';
import PageIT from './components/PageIT';
import PageAbout from './components/PageAbout';
import PageContact from './components/PageContact';
import { useLanguage } from './context/LanguageContext';
import { useNavigation } from './context/NavigationContext';

const App: React.FC = () => {
  const { locale } = useLanguage();
  const { currentPage } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <div className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground min-h-screen flex flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-grow">
        {currentPage === 'home' && <PageHome />}
        {currentPage === 'materials' && <PageMaterials />}
        {currentPage === 'property' && <PageProperty />}
        {currentPage === 'it' && <PageIT />}
        {currentPage === 'about' && <PageAbout />}
        {currentPage === 'contact' && <PageContact />}
      </main>
      <Footer />
      <Chatbox isHidden={mobileMenuOpen} />
    </div>
  );
};

export default App;