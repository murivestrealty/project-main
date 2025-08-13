import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Kimani",
      title: "Medical Professional & Investor",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      content: "Murivest transformed my investment approach. Their expertise in Nairobi's commercial real estate market is unmatched. I've achieved consistent 16% returns while maintaining completely passive involvement.",
      rating: 5,
      investment: "Commercial Portfolio - KSh 35M"
    },
    {
      id: 2,
      name: "James Mwangi",
      title: "Tech Entrepreneur",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      content: "The level of professionalism and market intelligence Murivest provides is exceptional. They don't just sell properties; they build wealth strategies. My portfolio has grown 40% in two years.",
      rating: 5,
      investment: "Mixed Portfolio - KSh 50M"
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      title: "Investment Banker",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      content: "As someone who understands investments, I appreciate Murivest's data-driven approach and transparency. Their property management is flawless - truly passive income at its finest.",
      rating: 5,
      investment: "Luxury Residential - KSh 28M"
    }
  ];

  // 3D floating orbs
  const orbs = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 8 + Math.random() * 6,
    size: 20 + Math.random() * 40,
  }));

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-blue-500/20" />
        </div>
        
        {/* 3D floating orbs */}
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 blur-xl"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
            }}
            animate={{
              x: [-30, 30, -30],
              y: [-40, 40, -40],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              delay: orb.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-3xl blur-sm"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-sm"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            <Users className="h-12 w-12 text-amber-400 mx-auto" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            What Our{' '}
            <motion.span 
              className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Investors
            </motion.span>{' '}
            Say
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover why discerning investors trust Murivest with their wealth-building journey
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                boxShadow: "0 40px 80px -12px rgba(0, 0, 0, 0.4)",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* 3D hover gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-blue-400/20 rounded-3xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Profile section with 3D effects */}
              <motion.div 
                className="relative flex items-center mb-6 z-10"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover mr-4 border-2 border-white/30"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-amber-400/40 to-transparent rounded-2xl blur-sm"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
                <div>
                  <motion.h4 
                    className="font-bold text-lg text-white"
                    whileHover={{ x: 3 }}
                  >
                    {testimonial.name}
                  </motion.h4>
                  <motion.p 
                    className="text-amber-400 text-sm"
                    whileHover={{ x: 3 }}
                  >
                    {testimonial.title}
                  </motion.p>
                </div>
              </motion.div>

              {/* Enhanced star rating */}
              <motion.div 
                className="flex items-center mb-6 z-10 relative"
                whileHover={{ scale: 1.05 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      color: "#fbbf24" 
                    }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star className="h-5 w-5 text-amber-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote with 3D effects */}
              <motion.div 
                className="relative mb-6 z-10"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="absolute -top-2 -left-2"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <Quote className="h-8 w-8 text-amber-400/60" />
                </motion.div>
                <motion.p 
                  className="text-gray-200 leading-relaxed pl-6"
                  whileHover={{ color: "#ffffff" }}
                  transition={{ duration: 0.3 }}
                >
                  "{testimonial.content}"
                </motion.p>
              </motion.div>

              {/* Investment badge with 3D styling */}
              <motion.div 
                className="relative border-t border-white/20 pt-6 z-10"
                whileHover={{ y: -2 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-3 border border-amber-400/30"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(251, 191, 36, 0.3)"
                  }}
                >
                  <p className="text-amber-400 text-sm font-bold flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    {testimonial.investment}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 backdrop-blur-xl rounded-3xl p-10 border border-amber-400/30 overflow-hidden max-w-4xl mx-auto"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 40px 80px -12px rgba(251, 191, 36, 0.3)"
            }}
            style={{
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full bg-gradient-to-r from-amber-400 via-transparent to-orange-500 rounded-3xl" />
            </motion.div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl font-bold mb-6 text-white"
                whileHover={{ scale: 1.05 }}
              >
                Join Our Exclusive Network
              </motion.h3>
              <motion.p 
                className="text-gray-200 text-lg mb-8 leading-relaxed"
                whileHover={{ color: "#ffffff" }}
              >
                Experience the same level of service and returns that our satisfied investors enjoy
              </motion.p>
              <motion.button 
                className="relative bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-5 rounded-3xl font-semibold text-lg transition-all duration-300 shadow-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;