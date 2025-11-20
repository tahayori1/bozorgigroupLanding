import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation, Page } from '../context/NavigationContext';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const { t } = useLanguage();
  const { currentPage, navigateTo } = useNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
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
      try {
         window.history.replaceState(null, '', `#${sectionId}`);
      } catch(e) { /* ignore */ }
    } else {
      navigateTo(page);
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: 'smooth' });
          try {
             const newUrl = `?page=${page}#${sectionId}`;
             window.history.replaceState({ page }, '', newUrl);
          } catch(e) { /* ignore */ }
        }, 300);
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${ scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/40 py-2' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => handleNavClick('home')}>
            <img className="h-12 w-auto drop-shadow-sm" src="https://cdn.bozorgigroup.com/img/aabozorgi.png" alt="Bozorgi Group Logo" />
          </div>
          <div className="hidden md:flex items-center">
            <nav className="ms-4 lg:ms-10 flex items-center space-x-1 lg:space-x-2 rtl:space-x-reverse bg-background/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-border/20 shadow-sm">
              <button
                  onClick={() => handleNavClick('home')}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap group ${currentPage === 'home' ? 'text-primary bg-primary/5 font-semibold' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'}`}
              >
                  {t['header.home']}
              </button>

              {/* About Dropdown */}
              <div className="relative" ref={aboutDropdownRef}>
                <button 
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap group ${currentPage === 'about' ? 'text-primary bg-primary/5 font-semibold' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'}`}
                >
                  {t['header.about']}
                  <svg className={`w-3.5 h-3.5 ms-1.5 transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {aboutDropdownOpen && (
                    <div 
                        className="absolute start-0 mt-2 w-56 bg-popover/95 backdrop-blur-xl text-popover-foreground rounded-2xl shadow-2xl py-2 border border-border/50 ring-1 ring-black/5 animate-zoom-in origin-top-left" 
                        onMouseLeave={() => setAboutDropdownOpen(false)}
                    >
                        <button onClick={() => handleNavClick('about', 'about')} className="flex items-center w-full text-left px-5 py-3 text-sm hover:bg-accent/50 hover:text-primary transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3"></span>
                            {t['header.aboutUs']}
                        </button>
                        <button onClick={() => handleNavClick('about', 'history')} className="flex items-center w-full text-left px-5 py-3 text-sm hover:bg-accent/50 hover:text-primary transition-colors">
                             <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3"></span>
                            {t['header.history']}
                        </button>
                        <button onClick={() => handleNavClick('about', 'humanity')} className="flex items-center w-full text-left px-5 py-3 text-sm hover:bg-accent/50 hover:text-primary transition-colors">
                             <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3"></span>
                            {t['header.humanity']}
                        </button>
                    </div>
                )}
              </div>

              {['materials', 'property', 'it', 'contact'].map((page) => (
                 <button
                    key={page}
                    onClick={() => handleNavClick(page as Page)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap group ${currentPage === page ? 'text-primary bg-primary/5 font-semibold' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'}`}
                 >
                    {t[`header.${page === 'materials' ? 'products' : page}`]}
                 </button>
              ))}
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none transition-colors" aria-expanded={mobileMenuOpen} aria-controls="mobile-menu">
              <span className="sr-only">Open main menu</span>
              <svg className="h-7 w-7" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {mobileMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />) }
              </svg>
            </button>
          </div>
      </div>
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border shadow-2xl animate-in slide-in-from-top-5 duration-300 h-screen overflow-y-auto absolute top-full left-0 w-full z-40">
          <div className="px-4 pt-4 pb-2 space-y-2">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left px-4 py-4 rounded-2xl text-lg font-medium text-foreground hover:bg-accent transition-colors">
                {t['header.home']}
            </button>

             {/* Mobile About Group */}
            <div className="space-y-1 pl-4 border-l-2 border-primary/20 ml-4 my-2">
                <div className="px-4 py-2 text-xs font-bold text-primary uppercase tracking-wider">{t['header.about']}</div>
                <button onClick={() => handleNavClick('about', 'about')} className="block w-full text-left px-4 py-3 rounded-xl text-base text-muted-foreground hover:text-foreground hover:bg-accent">
                    {t['header.aboutUs']}
                </button>
                <button onClick={() => handleNavClick('about', 'history')} className="block w-full text-left px-4 py-3 rounded-xl text-base text-muted-foreground hover:text-foreground hover:bg-accent">
                    {t['header.history']}
                </button>
                <button onClick={() => handleNavClick('about', 'humanity')} className="block w-full text-left px-4 py-3 rounded-xl text-base text-muted-foreground hover:text-foreground hover:bg-accent">
                    {t['header.humanity']}
                </button>
            </div>

            <button onClick={() => handleNavClick('materials')} className="block w-full text-left px-4 py-4 rounded-2xl text-lg font-medium text-foreground hover:bg-accent transition-colors">
                {t['header.products']}
            </button>
            <button onClick={() => handleNavClick('property')} className="block w-full text-left px-4 py-4 rounded-2xl text-lg font-medium text-foreground hover:bg-accent transition-colors">
                {t['header.property']}
            </button>
             <button onClick={() => handleNavClick('it')} className="block w-full text-left px-4 py-4 rounded-2xl text-lg font-medium text-foreground hover:bg-accent transition-colors">
                {t['header.it']}
            </button>
             <button onClick={() => handleNavClick('contact')} className="block w-full text-left px-4 py-4 rounded-2xl text-lg font-medium text-foreground hover:bg-accent transition-colors">
                {t['header.contact']}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;