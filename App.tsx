import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import PageHome from './components/PageHome';
import PageMaterials from './components/PageMaterials';
import PageProperty from './components/PageProperty';
import PageIT from './components/PageIT';
import { useLanguage } from './context/LanguageContext';
import { useNavigation } from './context/NavigationContext';

const App: React.FC = () => {
  const { locale } = useLanguage();
  const { currentPage } = useNavigation();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <div className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {currentPage === 'home' && <PageHome />}
        {currentPage === 'materials' && <PageMaterials />}
        {currentPage === 'property' && <PageProperty />}
        {currentPage === 'it' && <PageIT />}
      </main>
      <Footer />
      <Chatbox />
    </div>
  );
};

export default App;