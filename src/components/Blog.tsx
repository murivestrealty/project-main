import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp } from 'lucide-react';
import BlogCard from './BlogCard';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Nairobi's Commercial Real Estate Market: 2024 Investment Outlook",
      excerpt: "Comprehensive analysis of Nairobi's commercial property market trends, emerging opportunities, and investment strategies for the coming year.",
      author: "Sarah Kimani",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Market Analysis"
    },
    {
      id: 2,
      title: "Top 5 Commercial Property Investment Strategies for High Returns",
      excerpt: "Expert insights on maximizing returns through strategic commercial property investments in Kenya's growing economy.",
      author: "James Mwangi",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Investment Tips"
    },
    {
      id: 3,
      title: "Westlands District: The New Hub for Premium Office Spaces",
      excerpt: "Exploring why Westlands has become the preferred location for multinational corporations and premium office developments.",
      author: "Grace Wanjiku",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Property News"
    },
    {
      id: 4,
      title: "Understanding Commercial Property Yields in Nairobi",
      excerpt: "A detailed guide to calculating and maximizing commercial property yields in Kenya's capital city.",
      author: "David Ochieng",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Investment Tips"
    },
    {
      id: 5,
      title: "The Rise of Mixed-Use Developments in Nairobi",
      excerpt: "How mixed-use commercial developments are reshaping Nairobi's skyline and creating new investment opportunities.",
      author: "Mary Njeri",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Commercial Trends"
    },
    {
      id: 10,
      title: "REITs in Kenya: Your Gateway to Real Estate Investment",
      excerpt: "Discover how Real Estate Investment Trusts (REITs) are revolutionizing property investment in Kenya, offering accessible entry points for both retail and institutional investors.",
      author: "Catherine Muthoni",
      date: "Dec 20, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "REITs"
    },
    {
      id: 11,
      title: "Residential Apartment Investment: Building Wealth Through Rental Income",
      excerpt: "Complete guide to investing in residential apartments in Nairobi - from studio units to luxury penthouses, maximizing rental yields and capital appreciation.",
      author: "Robert Kiprotich",
      date: "Dec 18, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Residential Investment"
    },
    {
      id: 12,
      title: "Commercial Property vs Residential: Which Offers Better Returns?",
      excerpt: "In-depth comparison of commercial and residential property investments in Kenya, analyzing yields, risks, and long-term growth potential.",
      author: "Elizabeth Wanjiru",
      date: "Dec 16, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Investment Comparison"
    },
    {
      id: 13,
      title: "Student Housing Investment: Tapping into Kenya's Education Boom",
      excerpt: "How to capitalize on Kenya's growing student population by investing in purpose-built student accommodation near universities and colleges.",
      author: "Samuel Mutua",
      date: "Dec 14, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Residential Investment"
    },
    {
      id: 14,
      title: "Office Space Investment: Post-COVID Opportunities in Nairobi",
      excerpt: "Analyzing the transformation of office space demand post-pandemic and identifying lucrative investment opportunities in flexible workspaces.",
      author: "Patricia Nyong'o",
      date: "Dec 11, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Commercial Investment"
    },
    {
      id: 15,
      title: "REIT Performance Analysis: Kenya's Top Real Estate Investment Trusts",
      excerpt: "Comprehensive analysis of Kenya's leading REITs, their performance metrics, dividend yields, and investment strategies for 2024.",
      author: "John Macharia",
      date: "Dec 9, 2024",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "REITs"
    },
    {
      id: 16,
      title: "Luxury Residential Properties: Investment in High-End Markets",
      excerpt: "Exploring investment opportunities in luxury residential properties across Nairobi's premium neighborhoods like Karen, Runda, and Muthaiga.",
      author: "Diana Chebet",
      date: "Dec 7, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Residential Investment"
    },
    {
      id: 17,
      title: "Warehouse and Logistics Properties: E-commerce Driven Growth",
      excerpt: "How the e-commerce boom is driving demand for warehouse and logistics properties, creating new investment opportunities along major transport corridors.",
      author: "Francis Omondi",
      date: "Dec 4, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Commercial Investment"
    },
    {
      id: 18,
      title: "Affordable Housing Investment: Government Initiatives and Opportunities",
      excerpt: "Understanding Kenya's affordable housing agenda and how investors can participate in government-backed housing projects for stable returns.",
      author: "Margaret Wanjiku",
      date: "Dec 2, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Residential Investment"
    },
    {
      id: 10,
      title: "REIT Dividend Strategies: Maximizing Income from Real Estate Trusts",
      excerpt: "Advanced strategies for maximizing dividend income from REIT investments, including reinvestment plans and tax optimization techniques.",
      author: "Thomas Kiplagat",
      date: "Nov 29, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "REITs"
    },
    {
      id: 20,
      title: "Shopping Mall Investment: Retail Real Estate in the Digital Age",
      excerpt: "Evaluating shopping mall investments in Kenya's evolving retail landscape, focusing on experiential retail and mixed-use developments.",
      author: "Joyce Mutindi",
      date: "Nov 27, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Commercial Investment"
    },
    {
      id: 6,
      title: "New Property Laws: What Investors Need to Know",
      excerpt: "Recent changes in Kenya's property laws and their impact on commercial real estate investments.",
      author: "Peter Kamau",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Legal Updates"
    },
    {
      id: 7,
      title: "Industrial Real Estate: The Next Big Investment Opportunity",
      excerpt: "Why industrial properties are becoming increasingly attractive to investors in Kenya's growing economy.",
      author: "Ann Wambui",
      date: "Nov 30, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Market Analysis"
    },
    {
      id: 8,
      title: "Financing Commercial Property: A Complete Guide",
      excerpt: "Everything you need to know about securing financing for commercial property investments in Kenya.",
      author: "Michael Otieno",
      date: "Nov 28, 2024",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Investment Tips"
    },
    {
      id: 9,
      title: "Retail Spaces: Adapting to Post-Pandemic Consumer Behavior",
      excerpt: "How retail commercial properties are evolving to meet changing consumer preferences and shopping habits.",
      author: "Lucy Akinyi",
      date: "Nov 25, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Commercial Trends"
    },
    {
      id: 21,
      title: "Property Tax Optimization: Legal Strategies for Real Estate Investors",
      excerpt: "Comprehensive guide to minimizing property taxes and maximizing after-tax returns through legal optimization strategies in Kenya's real estate market.",
      author: "Advocate Sarah Mwangi",
      date: "Nov 24, 2024",
      readTime: "11 min read",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Legal Updates"
    }
  ];

  const categories = ['All', 'Market Analysis', 'Investment Tips', 'Property News', 'Commercial Trends', 'Legal Updates', 'REITs', 'Residential Investment', 'Commercial Investment', 'Investment Comparison'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Property <span className="text-gold-600">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-elegant">
            Stay informed with the latest trends, analysis, and insights from Nairobi's commercial real estate market. 
            Expert commentary and data-driven insights to guide your investment decisions.
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
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent font-elegant"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-elegant font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gold-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Article */}
        {filteredPosts.length > 0 && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-navy-950 rounded-2xl overflow-hidden text-white relative">
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-transparent z-10"></div>
              <img 
                src={filteredPosts[0].image} 
                alt={filteredPosts[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-20 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-gold-400 mr-2" />
                  <span className="text-gold-400 font-elegant font-semibold">Featured Article</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-luxury font-bold mb-4">{filteredPosts[0].title}</h2>
                <p className="text-gray-300 font-elegant text-lg mb-6 max-w-2xl">{filteredPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-300">
                    <span className="font-elegant">By {filteredPosts[0].author}</span>
                    <span className="mx-2">•</span>
                    <span className="font-elegant">{filteredPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span className="font-elegant">{filteredPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.slice(1).map((post, index) => (
            <BlogCard key={post.id} {...post} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-luxury font-bold text-gray-900 mb-4">No Articles Found</h3>
            <p className="text-gray-600 font-elegant mb-6">
              Try adjusting your search criteria or browse all articles
            </p>
            <button 
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-lg font-elegant font-semibold transition-all duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div 
          className="bg-navy-950 rounded-2xl p-8 lg:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-luxury font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-300 font-elegant mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, market analysis, and exclusive investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold-500 focus:border-transparent font-elegant"
            />
            <button className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-lg font-elegant font-semibold transition-all duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;