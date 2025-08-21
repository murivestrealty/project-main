import React from 'react';
import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import Properties from '../components/Properties';

const PropertiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Investment Properties - Murivest Realty Group",
    "description": "Browse our comprehensive portfolio of premium commercial investment properties in Nairobi, Kenya. Hotels, office buildings, retail spaces, and industrial properties with exceptional returns.",
    "url": "https://murivest.co.ke/properties",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Commercial Investment Properties",
      "description": "Premium commercial properties for investment in Nairobi, Kenya",
      "numberOfItems": 7
    }
  };
  return (
    <div>
      <SEOHead
        title="Investment Properties Kenya - Commercial Real Estate | Murivest Realty Group"
        description="Browse our comprehensive portfolio of premium commercial investment properties in Nairobi, Kenya. Hotels, office buildings, retail spaces, and industrial properties with exceptional returns of 15%+ annually."
        keywords="investment properties Kenya, commercial properties Nairobi, office buildings investment Kenya, hotel investment Kenya, retail properties Kenya, industrial properties Kenya, commercial real estate portfolio Kenya, property investment opportunities Nairobi"
        url="https://murivest.co.ke/properties"
        structuredData={structuredData}
      />
      <Properties />
    </div>
  );
};

export default PropertiesPage;