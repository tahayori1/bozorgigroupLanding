import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';

export type Page = 'home' | 'materials' | 'property' | 'it';

interface NavigationContextType {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Initial load: Check URL params
  useEffect(() => {
    // Wrap in try-catch as accessing location might be restricted in some environments
    try {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam && ['home', 'materials', 'property', 'it'].includes(pageParam)) {
        setCurrentPage(pageParam as Page);
      }
    } catch (e) {
      console.warn('Could not read URL parameters:', e);
    }
  }, []);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL without refreshing
    try {
      const newUrl = page === 'home' ? window.location.pathname : `?page=${page}`;
      window.history.pushState({ page }, '', newUrl);
    } catch (e) {
      // In sandboxed environments (like blob URLs), pushState might be blocked.
      // We catch the error so the app doesn't crash, allowing navigation to still work via React state.
      console.warn('Navigation URL update blocked by environment:', e);
    }
  }, []);

  // Handle Back Button
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      try {
        const params = new URLSearchParams(window.location.search);
        const pageParam = params.get('page');
        if (pageParam && ['home', 'materials', 'property', 'it'].includes(pageParam)) {
          setCurrentPage(pageParam as Page);
        } else {
          setCurrentPage('home');
        }
      } catch (e) {
        console.warn('PopState handling blocked:', e);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};