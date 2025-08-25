import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Phone, Globe, User, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import AuthModal from '../ui/AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isInvestDropdownOpen, setIsInvestDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const { currentUser } = useAuth();

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to toggle dropdowns and close others
  const toggleDropdown = (dropdownState: boolean, setDropdownState: { (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (arg0: boolean): void; }) => {
    setIsInvestDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setDropdownState(!dropdownState);
  };
  
  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setIsInvestDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsMenuOpen(false);
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
                Int. 
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
            
            {/* Invest Dropdown */}
            <div className="relative">
              <button
                className={`font-serif text-sm font-light tracking-wide transition-all duration-300 flex items-center ${
                  location.pathname.startsWith('/invest') ? 'text-amber-400 border-b border-amber-400' : 'text-gray-300 hover:text-amber-400'
                } pb-1`}
                onClick={() => toggleDropdown(isInvestDropdownOpen, setIsInvestDropdownOpen)}
              >
                Invest
                {isInvestDropdownOpen ? <ChevronUp className="ml-1 h-3 w-3" /> : <ChevronDown className="ml-1 h-3 w-3" />}
              </button>
              {isInvestDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-amber-500/20 shadow-lg py-2 z-10">
                  <Link 
                    to="/process" 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={() => closeAllDropdowns()}
                  >
                    Investment Process
                  </Link>
                  <Link 
                    to="/market" 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={() => closeAllDropdowns()}
                  >
                    Market Intelligence
                  </Link>
                  <Link 
                    to="/leadership" 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={() => closeAllDropdowns()}
                  >
                    Executive Leadership
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/properties" 
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/properties') 
                  ? 'text-amber-400 border-b border-amber-400' 
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              Investment Portfolio
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
             {/* About Dropdown */}
            <div className="relative">
              <button
                className={`font-serif text-sm font-light tracking-wide transition-all duration-300 flex items-center ${
                  location.pathname.startsWith('/about') ? 'text-amber-400 border-b border-amber-400' : 'text-gray-300 hover:text-amber-400'
                } pb-1`}
                onClick={() => toggleDropdown(isAboutDropdownOpen, setIsAboutDropdownOpen)}
              >
                About 
                {isAboutDropdownOpen ? <ChevronUp className="ml-1 h-3 w-3" /> : <ChevronDown className="ml-1 h-3 w-3" />}
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-amber-500/20 shadow-lg py-2 z-10">
                  <Link 
                    to="/about/mission" 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={() => closeAllDropdowns()}
                  >
                    Our Mission
                  </Link>
                  <Link 
                    to="/about/team" 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={() => closeAllDropdowns()}
                  >
                    Our Team
                  </Link>
                  <Link 
                    to="/about/sustainability" 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={() => closeAllDropdowns()}
                  >
                    Sustainability
                  </Link>
                </div>
              )}
            </div>
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
            

          </nav>

          {/* Executive Contact & Access */}
          <div className="hidden lg:flex items-center space-x-4">
            
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
                onClick={() => closeAllDropdowns()}
              >
                Home
              </Link>
              
              {/* Mobile About Dropdown */}
              <div className="flex flex-col">
                <button
                  className={`font-serif text-sm font-light tracking-wide transition-colors flex items-center justify-between ${
                    location.pathname.startsWith('/about') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                  } py-1`}
                  onClick={() => toggleDropdown(isAboutDropdownOpen, setIsAboutDropdownOpen)}
                >
                  About 
                  {isAboutDropdownOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {isAboutDropdownOpen && (
                  <div className="flex flex-col pl-4 space-y-2 mt-2">
                    <Link 
                      to="/about/mission" 
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={() => closeAllDropdowns()}
                    >
                      Our Mission
                    </Link>
                    <Link 
                      to="/about/team" 
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={() => closeAllDropdowns()}
                    >
                      Our Team
                    </Link>
                    <Link 
                      to="/about/sustainability" 
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={() => closeAllDropdowns()}
                    >
                      Sustainability
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Invest Dropdown */}
              <div className="flex flex-col">
                <button
                  className={`font-serif text-sm font-light tracking-wide transition-colors flex items-center justify-between ${
                    location.pathname.startsWith('/invest') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                  } py-1`}
                  onClick={() => toggleDropdown(isInvestDropdownOpen, setIsInvestDropdownOpen)}
                >
                  Invest
                  {isInvestDropdownOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {isInvestDropdownOpen && (
                  <div className="flex flex-col pl-4 space-y-2 mt-2">
                    <Link 
                      to="/invest/strategies" 
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={() => closeAllDropdowns()}
                    >
                      Our Strategies
                    </Link>
                    <Link 
                      to="/invest/opportunities" 
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={() => closeAllDropdowns()}
                    >
                      Opportunities
                    </Link>
                    <Link 
                      to="/invest/faq" 
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={() => closeAllDropdowns()}
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>
            
              <Link 
                to="/properties" 
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/properties') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={() => closeAllDropdowns()}
              >
                Portfolio
              </Link>
              <Link 
                to="/contact" 
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/contact') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={() => closeAllDropdowns()}
              >
                Contact
              </Link>
              <Link 
                to="/blog" 
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/blog') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={() => closeAllDropdowns()}
              >
                Insights
              </Link>
            </nav>
            
            {/* Mobile Auth Button */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              {currentUser ? (
                <Link 
                  to="/dashboard"
                  className="flex items-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-elegant font-semibold transition-colors w-full justify-center"
                  onClick={() => closeAllDropdowns()}
                >
                  <User className="h-4 w-4 mr-2" />
                  My Murivest
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    closeAllDropdowns();
                  }}
                  className="flex items-center bg-transparent hover:bg-amber-600 text-amber-400 hover:text-white px-3 py-2 text-sm font-serif font-medium transition-all duration-300 border border-amber-400 hover:border-amber-600 w-full justify-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  Client Access
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