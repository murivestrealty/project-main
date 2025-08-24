import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  type: string;
  price: string;
  yield: string;
  image: string;
  features: string[];
  status: string;
  description: string;
  roi: string;
  index: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  type,
  price,
  yield: propertyYield,
  image,
  features,
  status,
  description,
  roi,
  index
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-50 text-emerald-800 border border-emerald-200';
      case 'Exclusive':
        return 'bg-amber-50 text-amber-800 border border-amber-200';
      case 'Under Offer':
        return 'bg-orange-50 text-orange-800 border border-orange-200';
      case 'Sold':
        return 'bg-slate-50 text-slate-800 border border-slate-200';
      default:
        return 'bg-slate-50 text-slate-800 border border-slate-200';
    }
  };

  const getTypeColor = (type: string) => {
    return 'bg-slate-50 text-slate-700 border border-slate-200';
  };

  return (
    <motion.div
      className="group bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 text-xs font-medium ${getTypeColor(type)}`}>
            {type}
          </span>
          <span className={`px-3 py-1 text-xs font-medium ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
        
        <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-2 flex items-center">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span className="text-sm font-semibold">{propertyYield}</span>
        </div>

        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-2xl font-serif font-medium">{price}</div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-medium text-slate-900 mb-2">{title}</h3>
        <div className="flex items-center text-slate-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="bg-amber-50 p-3 mb-4 border border-amber-200">
          <p className="text-amber-800 text-sm font-medium">
            {roi}
          </p>
        </div>
        
        <div className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
              {feature}
            </div>
          ))}
        </div>
        
        <Link to={`/properties/${id}`}>
          <button className="w-full bg-slate-900 hover:bg-amber-600 text-white py-3 font-medium transition-all duration-300 group">
            LEARN MORE
            <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PropertyCard;