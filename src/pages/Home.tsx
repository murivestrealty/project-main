import React from 'react';
import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import BlogHero from '../components/BlogHero';
import InvestorStats from '../components/InvestorStats';
import ExclusiveOpportunities from '../components/ExclusiveOpportunities';
import GlobalPresence from '../components/GlobalPresence';
import InvestmentProcess from '../components/InvestmentProcess';
import TrustIndicators from '../components/TrustIndicators';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home - Murivest Realty Group",
    "description": "Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns.",
    "url": "https://murivest.co.ke",
    "mainEntity": {
      "@type": "RealEstateAgent",
      "name": "Murivest Realty Group",
      "description": "Premier commercial real estate investment firm specializing in high-yield investment opportunities in Nairobi, Kenya.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      }
    }
  };

  return (
    <div>
      <SEOHead
        title="Commercial Real Estate Investment Kenya - Murivest Realty Group"
        description="Commercial Real Estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns. Expert property management and wealth-building strategies for discerning investors."
        keywords="commercial real estate Kenya, property investment Nairobi, real estate investment firm Kenya, commercial property Nairobi, investment properties Kenya, property management Kenya, real estate returns Kenya, Murivest Realty Group, passive income properties Kenya, commercial real estate Nairobi CBD"
        url="https://murivest.co.ke/"
        structuredData={structuredData}
      />
      <Hero />
      <InvestorStats />
      <ExclusiveOpportunities />
      <BlogHero />
      <GlobalPresence />
      <InvestmentProcess />
      <TrustIndicators />
    </div>
  );
};

export default Home;