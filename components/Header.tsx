import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
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

  const languages = {
    en: 'English',
    es: 'Español',
    ar: 'العربية',
  };

  const handleLocaleChange = (newLocale: 'en' | 'es' | 'ar') => {
    setLocale(newLocale);
    setLangDropdownOpen(false);
  };

  const renderNavLinks = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="block md:inline-block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >
          {t[link.labelKey]}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold tracking-wider text-white uppercase">
              Bozorgi <span className="text-amber-400">Group</span>
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <nav className="ms-10 flex items-baseline space-x-4 rtl:space-x-reverse">
              {renderNavLinks()}
            </nav>
            <div className="relative ms-6" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m0 0a9 9 0 019 9m-9-9a9 9 0 009-9" />
                </svg>
                <span className="ms-2 text-sm font-medium">{languages[locale]}</span>
                <svg className="w-4 h-4 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {langDropdownOpen && (
                <div className="absolute end-0 mt-2 w-32 bg-gray-800 rounded-md shadow-lg py-1">
                  {Object.entries(languages).map(([key, name]) => (
                    <button
                      key={key}
                      onClick={() => handleLocaleChange(key as 'en' | 'es' | 'ar')}
                      className="text-left w-full block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3 space-y-1">
            {renderNavLinks()}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;