import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/10 to-teal-500/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-gradient-to-r from-pink-400/10 to-red-500/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img 
                    src="/image.png" 
                    alt="Murivest Realty Group" 
                    className="h-auto w-40 mr-4 rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm transform transition-all duration-300 group-hover:text-gray-200">
                A premier real estate investment firm based in Nairobi, Kenya, offering a full-service, 
                consultative approach to property investment for discerning clientele seeking superior 
                returns and truly passive income experiences.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#", color: "from-blue-500 to-blue-600" },
                  { icon: Twitter, href: "#", color: "from-sky-500 to-sky-600" },
                  { icon: Linkedin, href: "#", color: "from-blue-600 to-blue-700" },
                  { icon: Instagram, href: "#", color: "from-pink-500 to-purple-600" }
                ].map(({ icon: Icon, href, color }, index) => (
                  <a 
                    key={index}
                    href={href} 
                    className={`relative bg-gradient-to-r ${color} p-3 rounded-full transition-all duration-300 hover:transform hover:scale-110 hover:rotate-12 hover:shadow-lg group/social`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="h-4 w-4 text-white transition-all duration-300 group-hover/social:scale-110" />
                    <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover/social:scale-100 transition-transform duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:transform hover:translateY-2 hover:shadow-xl h-full">
              <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 transform transition-all duration-300 group-hover:scale-105">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/properties", label: "Properties" },
                  { to: "/contact", label: "Contact" }
                ].map((link, index) => (
                  <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                    <Link 
                      to={link.to} 
                      className="relative text-gray-300 hover:text-amber-400 transition-all duration-300 text-sm font-medium group/link inline-block"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover/link:w-full"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:transform hover:translateY-2 hover:shadow-xl h-full">
              <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 transform transition-all duration-300 group-hover:scale-105">
                Contact Info
              </h4>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "+254 115 277 610", color: "text-green-400" },
                  { icon: Mail, text: "investments@murivest.co.ke", color: "text-blue-400" },
                  { icon: MapPin, text: "Westlands Business District\nNairobi, Kenya", color: "text-red-400" }
                ].map(({ icon: Icon, text, color }, index) => (
                  <div key={index} className="flex items-start group/contact transform transition-all duration-300 hover:translate-x-2">
                    <div className={`${color} p-2 rounded-lg bg-white/10 mr-3 transition-all duration-300 group-hover/contact:scale-110 group-hover/contact:rotate-12`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed whitespace-pre-line transition-all duration-300 group-hover/contact:text-white">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 p-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 group/scroll"
          >
            <ArrowUp className="h-5 w-5 text-white transition-transform duration-300 group-hover/scroll:scale-110" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent h-px"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 Murivest Realty Group. All rights reserved.
              </p>
              <div className="flex space-x-8 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="relative text-gray-400 hover:text-amber-400 transition-all duration-300 group/policy"
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover/policy:w-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 animate-pulse"></div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;