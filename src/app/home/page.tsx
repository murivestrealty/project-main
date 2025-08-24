import React, { useEffect } from 'react';
import SEOHead from '../../components/shared/SEOHead';
import Hero from '../../components/sections/Hero';
import InvestorStats from '../../components/sections/InvestorStats';
import ExclusiveOpportunities from '../../components/sections/ExclusiveOpportunities';
import GlobalPresence from '../../components/sections/GlobalPresence';
import InvestmentProcess from '../../components/sections/InvestmentProcess';
import TrustIndicators from '../../components/sections/TrustIndicators';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Murivest Realty Group",
    "alternateName": "Murivest",
    "url": "https://murivest.co.ke",
    "logo": "https://murivest.co.ke/logo.png",
    "image": "https://murivest.co.ke/image.png",
    "description": "Premier commercial real estate investment firm in Nairobi, Kenya, offering curated investment opportunities and comprehensive property management services for discerning clientele.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Westlands Business District",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "postalCode": "00100",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-115-277-610",
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.facebook.com/murivest",
      "https://www.linkedin.com/company/murivest-realty-group",
      "https://www.instagram.com/murivest_realty"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "25-50",
    "slogan": "Premier Real Estate Investment",
    "knowsAbout": [
      "Commercial Real Estate",
      "Property Investment",
      "Real Estate Management",
      "Investment Advisory",
      "Property Development"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    }
  };

  return (
    <div>
      <SEOHead
        title="Commercial Real Estate Investment Kenya - Murivest Realty Group"
        description="Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns. Expert property management and wealth-building strategies for discerning investors."
        keywords="commercial real estate Kenya, property investment Nairobi, real estate investment firm Kenya, commercial property Nairobi, investment properties Kenya, property management Kenya, real estate returns Kenya, Murivest Realty Group, passive income properties Kenya"
        url="https://murivest.co.ke"
        structuredData={structuredData}
      />
      <Hero />
      <InvestorStats />
      <ExclusiveOpportunities />
      <GlobalPresence />
      <InvestmentProcess />
      <TrustIndicators />
    </div>
  );
};

export default HomePage;