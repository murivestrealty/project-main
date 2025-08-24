import React from 'react';
import { useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import Blog from '../../components/Blog';

const InsightsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Property Insights - Murivest Realty Group Blog",
    "description": "Stay informed with the latest trends, analysis, and insights from Nairobi's real estate market. Expert commentary on REITs, commercial properties, residential investments, and data-driven insights to guide your investment decisions in Kenya.",
    "url": "https://murivest.co.ke/insights",
    "publisher": {
      "@type": "Organization",
      "name": "Murivest Realty Group",
      "logo": "https://murivest.co.ke/logo.png"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Real Estate Investment Articles",
      "description": "Expert insights on commercial real estate investment in Kenya"
    }
  };
  return (
    <div>
      <SEOHead
        title="Property Insights - Real Estate Investment Blog | Murivest Realty Group"
        description="Stay informed with the latest trends, analysis, and insights from Nairobi's real estate market. Expert commentary on REITs, commercial properties, residential investments, and data-driven insights to guide your investment decisions in Kenya."
        keywords="real estate blog Kenya, property investment insights Kenya, REITs Kenya, commercial real estate trends Nairobi, residential property investment Kenya, property market analysis Kenya, real estate investment advice Kenya, Nairobi property market news, commercial property insights Kenya, apartment investment Kenya"
        url="https://murivest.co.ke/insights"
        structuredData={structuredData}
      />
      <Blog />
    </div>
  );
};

export default InsightsPage;