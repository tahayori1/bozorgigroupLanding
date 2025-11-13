import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigation, Page } from '../context/NavigationContext';
import type { Theme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { currentPage, navigateTo } = useNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (page: Page, sectionId?: string) => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);

    if (currentPage === page && sectionId) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
      // Update hash for deep linking simulation
      try {
         window.history.replaceState(null, '', `#${sectionId}`);
      } catch(e) { /* ignore */ }
    } else {
      navigateTo(page);
      if (sectionId) {
        // We need to wait for the page to render before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: 'smooth' });
          try {
             // Update hash to reflect section
             const newUrl = `?page=${page}#${sectionId}`;
             window.history.replaceState({ page }, '', newUrl);
          } catch(e) { /* ignore */ }
        }, 300);
      }
    }
  };

  const languages = { en: 'English', es: 'Español', ar: 'العربية' };
  const themes = {
    light: { name: t['theme.light'], icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
    dark: { name: t['theme.dark'], icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> },
    auto: { name: t['theme.auto'], icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  };

  const handleLocaleChange = (newLocale: 'en' | 'es' | 'ar') => {
    setLocale(newLocale);
    setLangDropdownOpen(false);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setThemeDropdownOpen(false);
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-border' : 'bg-background/50 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img className="h-12 w-auto" src="/logo-bozorgi.png" alt="Bozorgi Group Logo" />
          </div>
          <div className="hidden md:flex items-center">
            <nav className="ms-4 lg:ms-10 flex items-baseline space-x-1 lg:space-x-2 rtl:space-x-reverse">
              {/* Home */}
              <button
                  onClick={() => handleNavClick('home')}
                  className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out whitespace-nowrap ${currentPage === 'home' ? 'text-primary font-bold' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}
              >
                  {t['header.home']}
              </button>

              {/* About Dropdown */}
              <div className="relative" ref={aboutDropdownRef}>
                <button 
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  className={`flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out whitespace-nowrap ${currentPage === 'about' ? 'text-primary font-bold' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}
                >
                  {t['header.about']}
                  <svg className="w-4 h-4 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {aboutDropdownOpen && (
                    <div 
                        className="absolute start-0 mt-1 w-48 bg-popover text-popover-foreground rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5" 
                        onMouseLeave={() => setAboutDropdownOpen(false)}
                    >
                        <button onClick={() => handleNavClick('about', 'about')} className="block w-full text-left px-4 py-2 text-sm hover:bg-accent">
                            {t['header.aboutUs']}
                        </button>
                        <button onClick={() => handleNavClick('about', 'history')} className="block w-full text-left px-4 py-2 text-sm hover:bg-accent">
                            {t['header.history']}
                        </button>
                        <button onClick={() => handleNavClick('about', 'humanity')} className="block w-full text-left px-4 py-2 text-sm hover:bg-accent">
                            {t['header.humanity']}
                        </button>
                    </div>
                )}
              </div>

              {/* Products */}
              <button
                  onClick={() => handleNavClick('materials')}
                  className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out whitespace-nowrap ${currentPage === 'materials' ? 'text-primary font-bold' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}
              >
                  {t['header.products']}
              </button>

              {/* Property */}
              <button
                  onClick={() => handleNavClick('property')}
                  className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out whitespace-nowrap ${currentPage === 'property' ? 'text-primary font-bold' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}
              >
                  {t['header.property']}
              </button>

              {/* IT */}
              <button
                  onClick={() => handleNavClick('it')}
                  className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out whitespace-nowrap ${currentPage === 'it' ? 'text-primary font-bold' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}
              >
                  {t['header.it']}
              </button>

              {/* Contact */}
              <button
                  onClick={() => handleNavClick('contact')}
                  className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out whitespace-nowrap ${currentPage === 'contact' ? 'text-primary font-bold' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}
              >
                  {t['header.contact']}
              </button>
            </nav>

            {/* Theme Switcher */}
            <div className="relative ms-2 lg:ms-4" ref={themeDropdownRef}>
              <button onClick={() => setThemeDropdownOpen(!themeDropdownOpen)} className="flex items-center p-2 rounded-md text-muted-foreground hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-haspopup="true" aria-expanded={themeDropdownOpen}>
                {themes[theme].icon}
                <svg className="w-4 h-4 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {themeDropdownOpen && (
                <div className="absolute end-0 mt-2 w-32 bg-popover text-popover-foreground rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical">
                  {Object.entries(themes).map(([key, value]) => (
                    <button key={key} onClick={() => handleThemeChange(key as Theme)} className="text-left w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent focus:outline-none focus-visible:bg-accent" role="menuitem">
                      {value.icon} {value.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Language Switcher */}
            <div className="relative ms-2 lg:ms-4" ref={langDropdownRef}>
              <button onClick={() => setLangDropdownOpen(!langDropdownOpen)} className="flex items-center p-2 rounded-md text-muted-foreground hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-haspopup="true" aria-expanded={langDropdownOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m0 14v2m-6 0h12a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM15 9h-2a2 2 0 00-2 2v2a2 2 0 002 2h2m-2-4h2m-4 0V9m0 4v2" /></svg>
                <svg className="w-4 h-4 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {langDropdownOpen && (
                <div className="absolute end-0 mt-2 w-32 bg-popover text-popover-foreground rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical">
                  {Object.entries(languages).map(([key, name]) => (
                    <button key={key} onClick={() => handleLocaleChange(key as 'en' | 'es' | 'ar')} className="text-left w-full block px-4 py-2 text-sm hover:bg-accent focus:outline-none focus-visible:bg-accent" role="menuitem">
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-expanded={mobileMenuOpen} aria-controls="mobile-menu">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {mobileMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />) }
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-background border-b border-border shadow-xl animate-in slide-in-from-top-5 duration-200 h-screen overflow-y-auto">
          <div className="px-4 pt-4 pb-2 space-y-1">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent">
                {t['header.home']}
            </button>

             {/* Mobile About Group */}
            <div className="space-y-1 pl-3 border-l-2 border-border ml-3">
                <div className="px-3 py-2 text-sm font-bold text-foreground uppercase">{t['header.about']}</div>
                <button onClick={() => handleNavClick('about', 'about')} className="block w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent">
                    {t['header.aboutUs']}
                </button>
                <button onClick={() => handleNavClick('about', 'history')} className="block w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent">
                    {t['header.history']}
                </button>
                <button onClick={() => handleNavClick('about', 'humanity')} className="block w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent">
                    {t['header.humanity']}
                </button>
            </div>

            <button onClick={() => handleNavClick('materials')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent">
                {t['header.products']}
            </button>
            <button onClick={() => handleNavClick('property')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent">
                {t['header.property']}
            </button>
             <button onClick={() => handleNavClick('it')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent">
                {t['header.it']}
            </button>
             <button onClick={() => handleNavClick('contact')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent">
                {t['header.contact']}
            </button>
          </div>
          
          <div className="border-t border-border mt-2 pt-4 pb-20 px-6 space-y-6">
             {/* Theme Toggle */}
             <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{t['theme.title']}</span>
                <div className="flex bg-muted/50 p-1 rounded-lg">
                  {Object.entries(themes).map(([key, value]) => (
                     <button
                        key={key}
                        onClick={() => setTheme(key as Theme)}
                        className={`p-2 rounded-md transition-all duration-200 ${theme === key ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                        aria-label={value.name}
                     >
                        {value.icon}
                     </button>
                  ))}
                </div>
             </div>

             {/* Language Toggle */}
             <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{t['header.language']}</span>
                <div className="flex gap-2">
                   {Object.entries(languages).map(([key, name]) => (
                      <button 
                        key={key}
                        onClick={() => handleLocaleChange(key as 'en' | 'es' | 'ar')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md border transition-colors ${locale === key ? 'bg-primary border-primary text-primary-foreground' : 'border-border text-muted-foreground hover:border-primary/50'}`}
                      >
                        {key.toUpperCase()}
                      </button>
                   ))}
                </div>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;