import React from 'react';
import SEOHead from '../components/SEOHead';
import Blog from '../components/Blog';

const BlogPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Property Insights - Murivest Realty Group Blog",
    "description": "Stay informed with the latest trends, analysis, and insights from Nairobi's commercial real estate market. Expert commentary and data-driven insights to guide your investment decisions.",
    "url": "https://murivest.co.ke/blog",
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
        description="Stay informed with the latest trends, analysis, and insights from Nairobi's commercial real estate market. Expert commentary and data-driven insights to guide your investment decisions in Kenya's property market."
        keywords="real estate blog Kenya, property investment insights Kenya, commercial real estate trends Nairobi, property market analysis Kenya, real estate investment advice Kenya, Nairobi property market news, commercial property insights Kenya"
        url="https://murivest.co.ke/blog"
        structuredData={structuredData}
      />
      <Blog />
    </div>
  );
};

export default BlogPage;