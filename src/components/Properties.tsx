import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, Star, Filter, Search, ArrowRight } from 'lucide-react';

const Properties = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const allProperties = [
    {
    id: 1,
    title: "Best Western Meridian Hotel",
    location: "Nairobi CBD",
    type: "Hotel",
    price: "US$10M/Ksh 1.2B",
    yield: "15.2%",
    image: "https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200",
    features: ["119 Rooms", "3.5 Star Hotel", "Conference Facilities", "Restaurant & Bar"],
    status: "Available",
    description: "Landmark hotel property in Nairobi CBD with excellent occupancy rates and comprehensive hospitality amenities"
  },

  {
    id: 2,
    title: "Buffalo Mall & Development Land",
    location: "Naivasha",
    type: "Retail",
    price: "US$5M",
    yield: "11.0%",
    image: "https://content.knightfrank.com/property/hub2429185/images/79bb901f-3dba-41b8-9601-d462f09fa400-0.jpg?cio=true&w=1200",
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

  {
    id: 4,
    title: "BASL House",
    location: "Kumasi Road, Nairobi CBD",
    type: "Commercial",
    price: "KSh 190M",
    yield: "16.5%",
    image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["18,988 sqft", "4 Storey Building", "100% Occupied", "Multiple Tenants"],
    status: "Available",
    description: "Prime investment opportunity in CBD with exceptional rental returns and full occupancy"
  },

  {
    id: 5,
    title: "The Atrium Office Development",
    location: "Chaka Road, Kilimani",
    type: "Commercial",
    price: "US$13.5M",
    yield: "13.8%",
    image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["6 Storey Modern Office", "161,019 sqft", "221 Parking Bays", "International Standards"],
    status: "Available",
    description: "Excellently designed office development with high-grade tenants and international specifications"
  },

  {
    id: 6,
    title: "Aga Khan Walk Commercial Building",
    location: "Central Business District",
    type: "Commercial", 
    price: "KSh 562.5M",
    yield: "12.2%",
    image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["4,491 sqm", "5 Storey + Basement", "Prime CBD Location", "Excellent Visibility"],
    status: "Available",
    description: "Premier commercial property with excellent visibility and immediate rental income in CBD"
  },

  {
    id: 7,
    title: "The Panari Hotel",
    location: "Mombasa Road, Nairobi West",
    type: "Hotel",
    price: "KSh 3.5B", 
    yield: "18.5%",
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["136 Rooms", "5-Star Rating", "2.5 Acres", "12 Meeting Rooms"],
    status: "Available",
    description: "Magnificent 5-star hotel with luxury amenities, strategic location and international clientele"
  }
  ];

  const propertyTypes = ['All', 'Commercial', 'Residential', 'Hospitality', 'Retail', 'Industrial', 'Healthcare', 'Student Housing', 'Short-term Rental'];

  const filteredProperties = allProperties.filter(property => {
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Featured':
        return 'bg-gold-100 text-gold-800';
      case 'Under Offer':
        return 'bg-yellow-100 text-yellow-800';
      case 'Sold':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Commercial': 'bg-blue-100 text-blue-800',
      'Residential': 'bg-purple-100 text-purple-800',
      'Hospitality': 'bg-amber-100 text-amber-800',
      'Retail': 'bg-pink-100 text-pink-800',
      'Industrial': 'bg-gray-100 text-gray-800',
      'Healthcare': 'bg-green-100 text-green-800',
      'Student Housing': 'bg-indigo-100 text-indigo-800',
      'Short-term Rental': 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-luxury font-bold text-navy-900 mb-4">
            Investment <span className="text-gold-600">Properties</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-elegant">
            Discover our comprehensive portfolio of premium investment opportunities across Nairobi's most desirable locations. 
            Each property is carefully selected for its potential to deliver superior returns and long-term value appreciation.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          className="mb-12 bg-white rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent font-elegant"
              />
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full font-elegant font-medium transition-all duration-300 ${
                      selectedType === type
                        ? 'bg-gold-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-elegant font-semibold ${getTypeColor(property.type)}`}>
                    {property.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-elegant font-semibold ${getStatusColor(property.status)}`}>
                    {property.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-gold-600 text-white px-3 py-1 rounded-full flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-elegant font-semibold">{property.yield}</span>
                </div>
                {property.status === 'Featured' && (
                  <div className="absolute bottom-4 left-4 bg-navy-900 text-gold-400 px-3 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    <span className="text-sm font-elegant font-semibold">Featured</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-luxury font-bold text-navy-900 mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm font-elegant">{property.location}</span>
                </div>
                
                <p className="text-gray-600 font-elegant text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-14xl font-luxury font-bold text-gold-600">{property.price}</span>
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

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-luxury font-bold text-gray-900 mb-4">No Properties Found</h3>
            <p className="text-gray-600 font-elegant mb-6">
              Try adjusting your search criteria or browse all properties
            </p>
            <button 
              onClick={() => {
                setSelectedType('All');
                setSearchTerm('');
              }}
              className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-lg font-elegant font-semibold transition-all duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Investment Stats */}
        <motion.div 
          className="bg-navy-950 rounded-2xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-luxury font-bold text-center mb-12">Investment Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-luxury font-bold text-gold-400 mb-2">500+</div>
              <div className="text-gray-300 font-elegant">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-luxury font-bold text-gold-400 mb-2">15.8%</div>
              <div className="text-gray-300 font-elegant">Average Annual Return</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-luxury font-bold text-gold-400 mb-2">KSh 2.5B</div>
              <div className="text-gray-300 font-elegant">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-luxury font-bold text-gold-400 mb-2">98%</div>
              <div className="text-gray-300 font-elegant">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Properties;