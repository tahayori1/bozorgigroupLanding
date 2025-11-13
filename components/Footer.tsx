import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';

const SocialIcon: React.FC<{ href: string, path: string, label: string }> = ({ href, path, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
    <span className="sr-only">{label}</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  </a>
);

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-start">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <button onClick={() => navigateTo('home')} className="inline-block">
               <img className="h-12 w-auto mx-auto md:mx-0" src="/images/logobozorgi.png" alt="Bozorgi Group Logo" />
            </button>
            <p className="text-muted-foreground max-w-xs mx-auto md:mx-0">"{t['hero.motto']}"</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
             <h3 className="text-lg font-semibold text-foreground uppercase tracking-wider">{t['footer.links']}</h3>
             <ul className="space-y-2">
                <li><button onClick={() => navigateTo('home')} className="text-muted-foreground hover:text-primary transition-colors">{t['header.home']}</button></li>
                <li><button onClick={() => navigateTo('about')} className="text-muted-foreground hover:text-primary transition-colors">{t['header.aboutUs']}</button></li>
                <li><button onClick={() => navigateTo('materials')} className="text-muted-foreground hover:text-primary transition-colors">{t['header.products']}</button></li>
                <li><button onClick={() => navigateTo('property')} className="text-muted-foreground hover:text-primary transition-colors">{t['header.property']}</button></li>
                <li><button onClick={() => navigateTo('it')} className="text-muted-foreground hover:text-primary transition-colors">{t['header.it']}</button></li>
                <li><button onClick={() => navigateTo('contact')} className="text-muted-foreground hover:text-primary transition-colors">{t['header.contact']}</button></li>
             </ul>
          </div>

          {/* Column 3: Location Map */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground uppercase tracking-wider">{t['footer.locationTitle']}</h3>
            <div className="overflow-hidden rounded-lg border border-border h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.493922652616!2d55.26385367538206!3d25.1865984777178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69eb6b3353c1%3A0x234910292534563a!2sAl%20Manara%20Tower%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1718826558485!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bozorgi Group Location"
              ></iframe>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
             <h3 className="text-lg font-semibold text-foreground uppercase tracking-wider">{t['footer.followUs']}</h3>
             <div className="flex justify-center md:justify-start space-x-6 rtl:space-x-reverse">
                <SocialIcon 
                  href="https://www.facebook.com/AliBozorgiofficial/"
                  label="Facebook"
                  path="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                />
                <SocialIcon 
                  href="https://x.com/aliabozorgi"
                  label="X"
                  path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
                <SocialIcon 
                  href="https://www.instagram.com/alibozorgi.uae" 
                  label="Instagram"
                  path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
                />
             </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-base text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bozorgi Group. {t['footer.rights']}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;