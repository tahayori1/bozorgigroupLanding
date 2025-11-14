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
        const sections = ['common', 'seo', 'home', 'about', 'materials', 'property', 'it', 'contact', 'testimonials'];
        try {
            const promises = sections.map(section =>
                fetch(`/locales/${locale}/${section}.json`).then(res => {
                    if (!res.ok) {
                        throw new Error(`Failed to load ${section}.json for ${locale}`);
                    }
                    return res.json();
                })
            );

            const results = await Promise.all(promises);
            const combinedTranslations = results.reduce((acc, current) => ({ ...acc, ...current }), {});
            setTranslations(combinedTranslations);
        } catch (error) {
            console.error('Could not load translations:', error);
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
