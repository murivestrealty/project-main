import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const { currentUser } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Murivest Realty Group" 
              className="h-12 w-auto"
            />
            <div className="ml-3">
              <h1 className="text-xl font-luxury font-bold text-navy-900">Murivest Realty Group</h1>
              <p className="text-sm text-gold-600 font-elegant">Premier Real Estate Investment</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-gold-600' : 'text-navy-700 hover:text-gold-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-gold-600' : 'text-navy-700 hover:text-gold-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/properties" 
              className={`font-medium transition-colors ${
                isActive('/properties') ? 'text-gold-600' : 'text-navy-700 hover:text-gold-600'
              }`}
            >
              Properties
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-gold-600' : 'text-navy-700 hover:text-gold-600'
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium transition-colors ${
                isActive('/blog') ? 'text-gold-600' : 'text-navy-700 hover:text-gold-600'
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Contact Info & Auth */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center text-sm text-gray-600">
              
              <Phone className="h-4 w-4 mr-1" />
              <Link to="tel:0740469911">
              <span>Call Now</span>
              </Link>
            </div>
            
            {currentUser ? (
              <Link 
                to="/dashboard"
                className="flex items-center bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg font-elegant font-semibold transition-colors"
              >
                <User className="h-4 w-4 mr-2" />
                My Murivest
              </Link>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg font-elegant font-semibold transition-colors"
              >
                <User className="h-4 w-4 mr-2" />
                My Murivest
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium ${
                  isActive('/') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium ${
                  isActive('/about') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/properties" 
                className={`font-medium ${
                  isActive('/properties') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium ${
                  isActive('/contact') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/blog" 
                className={`font-medium ${
                  isActive('/blog') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </nav>
            
            {/* Mobile Auth Button */}
            <div className="mt-4 pt-4 border-t">
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