import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Phone, User, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import AuthModal from '../ui/AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isInvestDropdownOpen, setIsInvestDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const { currentUser } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  // Toggle dropdowns (desktop or mobile)
  const toggleDropdown = (
    dropdownState: boolean,
    setDropdownState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsInvestDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setDropdownState(!dropdownState);
  };

  const closeAllDropdowns = () => {
    setIsInvestDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-slate-900 shadow-2xl sticky top-0 z-50 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Murivest Realty Group"
              className="h-8 w-auto"
            />
            <div className="ml-3">
              <Link to="/">
                <h1 className="text-lg font-serif font-light text-white tracking-tight">
                  M<span className="text-amber-400 font-medium">RG</span>
                </h1>
                <p className="text-xs text-white font-serif uppercase tracking-widest">
                  Murivest Int.
                </p>
              </Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/investor"
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/investor')
                  ? 'text-amber-400 border-b border-amber-400'
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              Investor Portal
            </Link>

            {/* Invest Dropdown */}
            <div className="relative">
              <button
                className={`font-serif text-sm font-light tracking-wide transition-all duration-300 flex items-center ${
                  location.pathname.startsWith('/invest')
                    ? 'text-amber-400 border-b border-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } pb-1`}
                onClick={() =>
                  toggleDropdown(isInvestDropdownOpen, setIsInvestDropdownOpen)
                }
              >
                Invest
                {isInvestDropdownOpen ? (
                  <ChevronUp className="ml-1 h-3 w-3" />
                ) : (
                  <ChevronDown className="ml-1 h-3 w-3" />
                )}
              </button>
              {isInvestDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 border border-amber-500/20 shadow-lg py-2 z-10">
                  <Link
                    to="/process"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Investment Process
                  </Link>
                  <Link
                    to="/market"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Market Intelligence
                  </Link>
                  <Link
                    to="/leadership"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Executive Leadership
                  </Link>
                  <Link
                    to="/calculator"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Investment Calculator
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
                  location.pathname.startsWith('/about')
                    ? 'text-amber-400 border-b border-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } pb-1`}
                onClick={() =>
                  toggleDropdown(isAboutDropdownOpen, setIsAboutDropdownOpen)
                }
              >
                About
                {isAboutDropdownOpen ? (
                  <ChevronUp className="ml-1 h-3 w-3" />
                ) : (
                  <ChevronDown className="ml-1 h-3 w-3" />
                )}
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 border border-amber-500/20 shadow-lg py-2 z-10">
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    About Murivest
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Murivest Realty Group
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

          {/* Desktop contact + access */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-xs text-gray-300">
              <Phone className="h-3 w-3 mr-1" />
              <Link
                to="tel:0115277610"
                className="font-serif hover:text-amber-400 transition-colors"
              >
                +254 115 277 610
              </Link>
            </div>
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Home
              </Link>

              {/* About mobile dropdown */}
              <div className="flex flex-col">
                <button
                  className={`font-serif text-sm font-light tracking-wide transition-colors flex items-center justify-between ${
                    location.pathname.startsWith('/about')
                      ? 'text-amber-400'
                      : 'text-gray-300 hover:text-amber-400'
                  } py-1`}
                  onClick={() =>
                    toggleDropdown(isAboutDropdownOpen, setIsAboutDropdownOpen)
                  }
                >
                  About
                  {isAboutDropdownOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {isAboutDropdownOpen && (
                  <div className="flex flex-col pl-4 space-y-2 mt-2">
                    <Link
                      to="/about"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      About Murivest
                    </Link>
                    <Link
                      to="/"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Murivest Realty Group
                    </Link>
                  </div>
                )}
              </div>

              {/* Invest mobile dropdown */}
              <div className="flex flex-col">
                <button
                  className={`font-serif text-sm font-light tracking-wide transition-colors flex items-center justify-between ${
                    location.pathname.startsWith('/invest')
                      ? 'text-amber-400'
                      : 'text-gray-300 hover:text-amber-400'
                  } py-1`}
                  onClick={() =>
                    toggleDropdown(isInvestDropdownOpen, setIsInvestDropdownOpen)
                  }
                >
                  Invest
                  {isInvestDropdownOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {isInvestDropdownOpen && (
                  <div className="flex flex-col pl-4 space-y-2 mt-2">
                    <Link
                      to="/process"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Investment Process
                    </Link>
                    <Link
                      to="/market"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Market Intelligence
                    </Link>
                    <Link
                      to="/leadership"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Executive Leadership
                    </Link>
                    <Link
                      to="/calculator"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Investment Calculator
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/properties"
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/properties')
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/blog')
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Insights
              </Link>
              <Link
                to="/contact"
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/contact')
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Auth Button */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              {currentUser ? (
                <Link
                  to="/dashboard"
                  className="flex items-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-serif font-medium transition-colors w-full justify-center"
                  onClick={closeAllDropdowns}
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

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};

export default Header;
