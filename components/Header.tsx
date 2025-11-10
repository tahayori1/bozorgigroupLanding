import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import type { Theme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const themeDropdownRef = useRef<HTMLDivElement>(null);

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
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: '#about', labelKey: 'header.about' },
    { href: '#products', labelKey: 'header.products' },
    { href: '#history', labelKey: 'header.history' },
    { href: '#humanity', labelKey: 'header.humanity' },
    { href: '#contact', labelKey: 'header.contact' },
  ];

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

  const renderNavLinks = () => (
    <>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}
          className="block md:inline-block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition duration-150 ease-in-out">
          {t[link.labelKey]}
        </a>
      ))}
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold tracking-wider text-black dark:text-white uppercase">
              Bozorgi <span className="text-amber-500 dark:text-amber-400">Group</span>
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <nav className="ms-10 flex items-baseline space-x-4 rtl:space-x-reverse">
              {renderNavLinks()}
            </nav>
            {/* Theme Switcher */}
            <div className="relative ms-4" ref={themeDropdownRef}>
              <button onClick={() => setThemeDropdownOpen(!themeDropdownOpen)} className="flex items-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                {themes[theme].icon}
                <svg className="w-4 h-4 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {themeDropdownOpen && (
                <div className="absolute end-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  {Object.entries(themes).map(([key, value]) => (
                    <button key={key} onClick={() => handleThemeChange(key as Theme)} className="text-left w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      {value.icon} {value.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Language Switcher */}
            <div className="relative ms-4" ref={langDropdownRef}>
              <button onClick={() => setLangDropdownOpen(!langDropdownOpen)} className="flex items-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m4 13-4-4-4 4M19 17v-2a4 4 0 00-4-4H9M17 13l-4 4-4-4M12 17.75V19.5" /></svg>
                <svg className="w-4 h-4 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {langDropdownOpen && (
                <div className="absolute end-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  {Object.entries(languages).map(([key, name]) => (
                    <button key={key} onClick={() => handleLocaleChange(key as 'en' | 'es' | 'ar')} className="text-left w-full block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {mobileMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />) }
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 sm:px-3 space-y-1">
            {renderNavLinks()}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;