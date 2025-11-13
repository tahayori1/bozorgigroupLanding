import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  titleKey: string;
  descriptionKey: string;
  schema?: Record<string, any>;
  canonicalPath?: string;
}

const SEO: React.FC<SEOProps> = ({ titleKey, descriptionKey, schema, canonicalPath }) => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    // Update Title
    const title = `${t[titleKey]} | Bozorgi Group`;
    document.title = title;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t[descriptionKey] || "");
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = t[descriptionKey] || "";
      document.head.appendChild(newMeta);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t[descriptionKey] || "");

    // Update Canonical URL
    const baseUrl = 'https://bozorgigroup.com';
    const fullUrl = canonicalPath ? `${baseUrl}${canonicalPath}` : baseUrl;
    
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullUrl);

    // Inject LD-JSON
    if (schema) {
        // Remove existing LD-JSON scripts to avoid duplicates
        const existingScript = document.getElementById('ld-json-schema');
        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.id = 'ld-json-schema';
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            ...schema
        });
        document.head.appendChild(script);
    }

  }, [titleKey, descriptionKey, t, locale, schema, canonicalPath]);

  return null;
};

export default SEO;