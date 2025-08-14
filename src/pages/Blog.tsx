import React from 'react';
import SEOHead from '../components/SEOHead';
import Blog from '../components/Blog';

const BlogPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Property Insights - Murivest Realty Group Blog",
    "description": "Stay informed with the latest trends, analysis, and insights from Nairobi's commercial real estate market. Expert commentary and data-driven insights to guide your investment decisions.",
<<<<<<< HEAD
    "url": "https://murivest.co.ke/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Murivest Realty Group",
      "logo": "https://murivest.co.ke/logo.png"
=======
    "url": "https://murivest.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Murivest Realty Group",
      "logo": "https://murivest.com/logo.png"
>>>>>>> ed7b6cbc8571867f4cd1ef4a108bf3bb16a9b9de
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
<<<<<<< HEAD
        url="https://murivest.co.ke/blog"
=======
        url="https://murivest.com/blog"
>>>>>>> ed7b6cbc8571867f4cd1ef4a108bf3bb16a9b9de
        structuredData={structuredData}
      />
      <Blog />
    </div>
  );
};

export default BlogPage;