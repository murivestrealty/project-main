import React, { useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import InvestmentProcess from '../../components/InvestmentProcess';

const ProcessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SEOHead
        title="Investment Process - How We Work | Murivest Realty Group"
        description="Learn about our proven investment process for commercial real estate in Kenya. From initial consultation to portfolio management, discover our systematic approach."
        keywords="real estate investment process Kenya, commercial property investment steps, property investment consultation, real estate due diligence Kenya"
        url="https://murivest.co.ke/process"
      />
      <InvestmentProcess />
    </div>
  );
};

export default ProcessPage;