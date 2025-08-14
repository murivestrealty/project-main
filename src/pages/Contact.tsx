import React from 'react';
import SEOHead from '../components/SEOHead';
import Contact from '../components/Contact';

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Murivest Realty Group",
    "description": "Get in touch with Murivest Realty Group for commercial real estate investment opportunities in Nairobi, Kenya. Schedule a consultation with our investment experts.",
    "url": "https://murivest.com/contact",
    "mainEntity": {
      "@type": "ContactPoint",
      "telephone": "+254-729-170-156",
      "email": "info@murivest.com",
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": ["English", "Swahili"]
    }
  };
  return (
    <div>
      <SEOHead
        title="Contact Us - Real Estate Investment Consultation | Murivest Realty Group"
        description="Get in touch with Murivest Realty Group for commercial real estate investment opportunities in Nairobi, Kenya. Schedule a consultation with our investment experts. Call +254-729-170-156 or email info@murivest.com"
        keywords="contact Murivest Realty Group, real estate investment consultation Kenya, property investment advice Nairobi, commercial real estate experts Kenya, investment consultation Nairobi, real estate advisory services Kenya"
        url="https://murivest.com/contact"
        structuredData={structuredData}
      />
      <Contact />
    </div>
  );
};

export default ContactPage;