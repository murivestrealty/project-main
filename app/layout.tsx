import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '../src/components/contexts/AuthContext'
import ScrollToTopButton from '../src/components/ui/ScrollToTopButton'
import Header from '../src/components/layout/Header'
import Footer from '../src/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
    template: '%s | Murivest Realty Group'
  },
  description: 'Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns. Expert property management and wealth-building strategies for discerning investors.',
  keywords: 'commercial real estate Kenya, property investment Nairobi, real estate investment firm Kenya, commercial property Nairobi, investment properties Kenya, property management Kenya, real estate returns Kenya, Murivest Realty Group, passive income properties Kenya',
  authors: [{ name: 'Murivest Realty Group' }],
  creator: 'Murivest Realty Group',
  publisher: 'Murivest Realty Group',
  metadataBase: new URL('https://murivest.co.ke'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://murivest.co.ke',
    title: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
    description: 'Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns. Expert property management and wealth-building strategies for discerning investors.',
    siteName: 'Murivest Realty Group',
    images: [
      {
        url: '/kenya-night.png',
        width: 1200,
        height: 630,
        alt: 'Murivest Realty Group - Premier Commercial Real Estate Investment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
    description: 'Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns. Expert property management and wealth-building strategies for discerning investors.',
    images: ['/kenya-night.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'mZuQ5eAJX2bdSHNjKx6J8kzGipYsyLbr2iseGxdlk7A',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="msapplication-TileColor" content="#1e1b4b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
            <ScrollToTopButton />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}