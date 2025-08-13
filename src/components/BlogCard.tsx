import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  category,
  index
}) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Market Analysis': 'bg-blue-100 text-blue-800',
      'Investment Tips': 'bg-green-100 text-green-800',
      'Property News': 'bg-purple-100 text-purple-800',
      'Commercial Trends': 'bg-amber-100 text-amber-800',
      'Legal Updates': 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <motion.article
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-elegant font-semibold ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-luxury font-bold text-navy-900 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 font-elegant text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span className="font-elegant">{author}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="font-elegant">{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span className="font-elegant">{readTime}</span>
            </div>
          </div>
        </div>
        
        <Link 
          to={`/blog/${id}`}
          className="w-full bg-navy-900 hover:bg-gold-600 text-white py-3 rounded-lg font-elegant font-semibold transition-all duration-300 flex items-center justify-center group"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;