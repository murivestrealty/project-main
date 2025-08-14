import React from 'react';
import SEOHead from '../components/SEOHead';
import About from '../components/About';

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Murivest Realty Group",
    "description": "Learn about Murivest Realty Group, a premier real estate investment firm in Nairobi, Kenya. Our mission, vision, and commitment to excellence in commercial property investment.",
<<<<<<< HEAD
    "url": "https://murivest.co.ke/about",
=======
    "url": "https://murivest.com/about",
>>>>>>> ed7b6cbc8571867f4cd1ef4a108bf3bb16a9b9de
    "mainEntity": {
      "@type": "Organization",
      "name": "Murivest Realty Group",
      "foundingDate": "2020",
      "description": "Premier real estate investment firm transcending traditional brokerage through comprehensive, consultative services for discerning clientele.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Westlands Business District",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      }
    }
  };
  return (
    <div>
      <SEOHead
        title="About Us - Premier Real Estate Investment Firm | Murivest Realty Group"
        description="Learn about Murivest Realty Group, a premier real estate investment firm in Nairobi, Kenya. Our mission, vision, and commitment to excellence in commercial property investment and wealth building strategies."
        keywords="about Murivest Realty Group, real estate investment firm Kenya, commercial property experts Nairobi, property investment company Kenya, real estate advisory services Kenya, investment firm Nairobi"
<<<<<<< HEAD
        url="https://murivest.co.ke/about"
=======
        url="https://murivest.com/about"
>>>>>>> ed7b6cbc8571867f4cd1ef4a108bf3bb16a9b9de
        structuredData={structuredData}
      />
      <About />
    </div>
  );
};

export default AboutPage;