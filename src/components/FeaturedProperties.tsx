import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, ArrowRight, Star } from 'lucide-react';

const FeaturedProperties = () => {
  const featuredProperties = [
    {
    id: 1,
    title: "Best Western Meridian Hotel",
    location: "Nairobi CBD",
    type: "Hotel",
    price: "Ksh 1.2B",
    yield: "15.2%",
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["119 Rooms", "3.5 Star Hotel", "Conference Facilities", "Restaurant & Bar"],
    status: "Available",
    description: "Landmark hotel property in Nairobi CBD with excellent occupancy rates and comprehensive hospitality amenities"
  },

  {
    id: 2,
    title: "Buffalo Mall & Development Land",
    location: "Naivasha",
    type: "Retail",
    price: "Ksh 750M",
    yield: "11.0%",
    image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["58,965 sqft GLA", "33 Retail Units", "9 Acres Additional Land", "70% Occupancy"],
    status: "Available",
    description: "Premier shopping destination in Naivasha with significant development potential on adjoining land"
  },

  {
    id: 3,
    title: "ICD Industrial Complex",
    location: "Mombasa Road, Nairobi",
    type: "Industrial",
    price: "KSh 1B",
    yield: "14.8%",
    image: "/p/IMG-20250813-WA0001.jpg",
    features: ["3 Acres", "99,300 sqft GLA", "4-Storey Office Block", "Motor Showroom"],
    status: "Available", 
    description: "Prime industrial site with offices, showrooms, warehouses and strategic transport connectivity"
  },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-navy-900 mb-4">
            Featured Investment Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-elegant">
            Discover our hand-selected portfolio of premium properties offering exceptional returns 
            and long-term value appreciation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-gold-600 text-white px-3 py-1 rounded-full flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-elegant font-semibold">{property.yield}</span>
                </div>
                {property.status === 'Featured' && (
                  <div className="absolute top-4 left-4 bg-navy-900 text-gold-400 px-3 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    <span className="text-sm font-elegant font-semibold">Featured</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-luxury font-bold text-navy-900 mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm font-elegant">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-luxury font-bold text-gold-600">{property.price}</span>
                  <span className="text-sm font-elegant text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {property.type}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {property.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600 font-elegant">
                      <div className="w-2 h-2 bg-gold-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={`/property/${property.id}`}
                  className="w-full bg-navy-900 hover:bg-gold-600 text-white py-3 rounded-lg font-elegant font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/properties"
            className="inline-flex items-center bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-elegant font-semibold text-lg transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            View All Properties
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;