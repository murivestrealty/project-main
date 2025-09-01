import type { Metadata } from 'next'
import Hero from '../src/components/sections/Hero'
import InvestorStats from '../src/components/sections/InvestorStats'
import ExclusiveOpportunities from '../src/components/sections/ExclusiveOpportunities'
import GlobalPresence from '../src/components/sections/GlobalPresence'
import InvestmentProcess from '../src/components/sections/InvestmentProcess'
import TrustIndicators from '../src/components/sections/TrustIndicators'

export const metadata: Metadata = {
  title: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
  description: 'Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns. Expert property management and wealth-building strategies for discerning investors.',
  keywords: 'commercial real estate Kenya, property investment Nairobi, real estate investment firm Kenya, commercial property Nairobi, investment properties Kenya, property management Kenya, real estate returns Kenya, Murivest Realty Group, passive income properties Kenya',
  openGraph: {
    title: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
    description: 'Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns.',
    images: ['/kenya-night.png'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <InvestorStats />
      <ExclusiveOpportunities />
      <GlobalPresence />
      <InvestmentProcess />
      <TrustIndicators />
    </>
  )
}