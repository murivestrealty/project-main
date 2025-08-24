import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '../contexts/AuthContext';
import ScrollToTop from '../components/ui/ScrollToTop';
import ScrollToTopButton from '../components/ui/ScrollToTopButton';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <div className="min-h-screen">
          <ScrollToTop />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default Layout;