import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Crown } from 'lucide-react';

const Hero = () => {
  const images = ['/kenya-night.png', '/ke.1.jpg']; // Add your image paths here
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);
  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = "254115277610";
    const encodedMessage = encodeURIComponent(
      `Hi! I'm interested in your properties ${message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Dynamic background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-1000"
        style={{
          backgroundImage: `url("${images[currentImage]}")`,
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-gold-400 rounded-full opacity-60"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-gold-300 rounded-full opacity-40"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-gold-500 rounded-full opacity-50"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 z-30">
        <div className="max-w-4xl">
          <motion.div
            className="flex items-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Crown className="h-8 w-8 text-gold-600 mr-3" />
            <span className="text-gold-600 font-elegant font-semibold text-lg">
              Premier Real Estate Investment
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl font-luxury font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Income generating property
            <span className="text-gold-400 block">Strategic Commercial Real Estate</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-1xl mb-8 text-gray-300 leading-relaxed font-elegant"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience truly passive income through our curated portfolio of premium properties.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-elegant font-semibold text-lg transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Properties
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="border-2 border-white hover:bg-white hover:text-navy-900 text-white px-8 py-4 rounded-lg font-elegant font-semibold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // The 'ref="/"' seems like a mistaken prop. If it's meant to be a link, use an <a> tag or a routing component.
              // For now, I'm focusing on the onClick for WhatsApp.
              onClick={() => handleWhatsAppContact("I would like to schedule a consultation.")}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <TrendingUp className="h-8 w-8 text-gold-400 mr-3" />
              <div>
                <div className="text-2xl font-luxury font-bold">15%+</div>
                <div className="text-gray-300 font-elegant">Average Annual Returns</div>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <Shield className="h-8 w-8 text-gold-400 mr-3" />
              <div>
                <div className="text-2xl font-luxury font-bold">100%</div>
                <div className="text-gray-300 font-elegant">Managed Properties</div>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <Crown className="h-8 w-8 text-gold-400 mr-3" />
              <div>
                <div className="text-2xl font-luxury font-bold">500+</div>
                <div className="text-gray-300 font-elegant">Satisfied Investors</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
