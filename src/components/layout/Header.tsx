import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const { currentUser } = useAuth();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-slate-900 shadow-2xl sticky top-0 z-50 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-3">
          {/* Prestigious Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Murivest Realty Group" 
              className="h-8 w-auto"
            />
            <div className="ml-3">
              <h1 className="text-lg font-serif font-light text-white tracking-tight">
                Murivest <span className="text-amber-400 font-medium">Realty Group</span>
              </h1>
              <p className="text-xs text-amber-500 font-serif uppercase tracking-widest">
                International Investment House
              </p>
            </div>
          </div>

          {/* Sophisticated Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/') 
                  ? 'text-amber-400 border-b border-amber-400' 
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-amber-400 border-b border-amber-400' 
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              About
            </Link>
            <Link 
              to="/properties" 
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/properties') 
                  ? 'text-amber-400 border-b border-amber-400' 
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-amber-400 border-b border-amber-400' 
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/blog') 
                  ? 'text-amber-400 border-b border-amber-400' 
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              Insights
            </Link>
          </nav>

          {/* Executive Contact & Access */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Trust Indicator */}
            <div className="flex items-center text-xs text-amber-400 border-r border-gray-600 pr-4">
              <Globe className="h-3 w-3 mr-1" />
              <span className="font-serif">Global Investors</span>
            </div>
            
            {/* Premium Contact */}
            <div className="flex items-center text-xs text-gray-300">
              <Phone className="h-3 w-3 mr-1" />
              <Link to="tel:0115277610" className="font-serif hover:text-amber-400 transition-colors">
                +254 115 277 610
              </Link>
            </div>
            
            {/* Client Portal */}
            {currentUser ? (
              <Link 
                to="/dashboard"
                className="flex items-center bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 text-xs font-serif font-medium transition-all duration-300 border border-amber-500 hover:shadow-lg hover:shadow-amber-500/25"
              >
                <User className="h-3 w-3 mr-1.5" />
                Client Portal
              </Link>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center bg-transparent hover:bg-amber-600 text-amber-400 hover:text-white px-3 py-2 text-xs font-serif font-medium transition-all duration-300 border border-amber-400 hover:border-amber-600"
              >
                <User className="h-3 w-3 mr-1.5" />
                Client Access
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-amber-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Refined Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/about') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/properties" 
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/properties') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/contact" 
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/contact') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/blog" 
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/blog') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </Link>
            </nav>
            
            {/* Mobile Auth Button */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              {currentUser ? (
                <Link 
                  to="/dashboard"
                  className="flex items-center bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg font-elegant font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4 mr-2" />
                  My Murivest
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg font-elegant font-semibold transition-colors w-full justify-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login/Sign up My Murivest
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
};

export default Header;