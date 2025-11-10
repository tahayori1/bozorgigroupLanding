import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Locale = 'en' | 'es' | 'ar';
type TranslationKeys = { [key: string]: string };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');
  const [translations, setTranslations] = useState<TranslationKeys>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      setLoading(true);
      try {
        // In this environment, we can reference the public directory directly.
        const response = await fetch(`/locales/${locale}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Could not load translations:', error);
        // Fallback to an empty object or handle error appropriately
        setTranslations({});
      } finally {
        setLoading(false);
      }
    };

    fetchTranslations();
  }, [locale]);
  
  const contextValue = {
    locale,
    setLocale,
    t: translations,
    loading,
  };

  // Prevent rendering children until the initial translations are loaded
  if (loading && Object.keys(translations).length === 0) {
    return null; 
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
