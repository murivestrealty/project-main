import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, ThumbsUp } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would come from Firebase
  const blogData = {
    1: {
      title: "Nairobi's Commercial Real Estate Market: 2024 Investment Outlook",
      author: "Sarah Kimani",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Market Analysis",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <p>Nairobi's commercial real estate market continues to show remarkable resilience and growth potential as we head into 2024. With a growing economy, increasing foreign investment, and strategic infrastructure developments, the capital city presents compelling opportunities for discerning investors.</p>

        <h2>Market Overview</h2>
        <p>The commercial real estate sector in Nairobi has demonstrated consistent growth over the past five years, with average annual returns of 12-18% across different property types. This performance significantly outpaces traditional investment vehicles and reflects the underlying strength of Kenya's economy.</p>

        <h2>Key Growth Drivers</h2>
        <p>Several factors are driving the continued expansion of Nairobi's commercial property market:</p>
        <ul>
          <li><strong>Economic Growth:</strong> Kenya's GDP growth of 5.2% in 2023 has created increased demand for commercial spaces</li>
          <li><strong>Infrastructure Development:</strong> Major projects like the Nairobi Expressway have improved connectivity and accessibility</li>
          <li><strong>Foreign Investment:</strong> Increased FDI has led to higher demand for Grade A office spaces</li>
          <li><strong>Urbanization:</strong> Rapid urban growth continues to drive demand for commercial properties</li>
        </ul>

        <h2>Investment Opportunities</h2>
        <p>The most promising sectors for 2024 include:</p>
        <ul>
          <li><strong>Office Spaces:</strong> Particularly in Westlands, Upper Hill, and CBD areas</li>
          <li><strong>Retail Properties:</strong> Shopping centers and mixed-use developments</li>
          <li><strong>Industrial Properties:</strong> Warehouses and logistics facilities</li>
          <li><strong>Hospitality:</strong> Hotels and serviced apartments</li>
        </ul>

        <h2>Market Outlook</h2>
        <p>Looking ahead, we expect continued growth in commercial property values, driven by sustained economic expansion and increasing demand from both local and international businesses. Investors who position themselves strategically in high-growth areas can expect superior returns over the medium to long term.</p>

        <p>At Murivest Realty Group, we continue to identify and curate the most promising investment opportunities for our clients, ensuring they benefit from Nairobi's dynamic commercial real estate market.</p>
      `,
      tags: ["Commercial Real Estate", "Nairobi", "Investment", "Market Analysis", "2024 Outlook"]
    }
  };

  const post = blogData[id as keyof typeof blogData];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-luxury font-bold text-gray-900 mb-4">Article Not Found</h2>
          <Link to="/blog" className="text-gold-600 hover:text-gold-700 font-elegant">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/blog"
            className="inline-flex items-center text-gold-600 hover:text-gold-700 font-elegant font-medium mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-elegant font-semibold">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-luxury font-bold text-navy-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="flex items-center text-gray-600 mb-4 sm:mb-0">
              <User className="h-5 w-5 mr-2" />
              <span className="font-elegant mr-4">By {post.author}</span>
              <Calendar className="h-5 w-5 mr-2" />
              <span className="font-elegant mr-4">{post.date}</span>
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-elegant">{post.readTime}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-gold-600 transition-colors">
                <Share2 className="h-5 w-5 mr-1" />
                <span className="font-elegant text-sm">Share</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-gold-600 transition-colors">
                <Bookmark className="h-5 w-5 mr-1" />
                <span className="font-elegant text-sm">Save</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-gold-600 transition-colors">
                <ThumbsUp className="h-5 w-5 mr-1" />
                <span className="font-elegant text-sm">Like</span>
              </button>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div 
          className="prose prose-lg max-w-none mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div 
            className="font-elegant text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75'
            }}
          />
        </motion.div>

        {/* Tags */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-luxury font-bold text-navy-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-elegant"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Author Bio */}
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-start">
            <img 
              src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-luxury font-bold text-navy-900 mb-2">{post.author}</h4>
              <p className="text-gray-600 font-elegant">
                Senior Market Analyst at Murivest Realty Group with over 10 years of experience in 
                commercial real estate investment and market research. Sarah specializes in identifying 
                emerging market trends and investment opportunities in Nairobi's commercial property sector.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div 
          className="bg-navy-950 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl font-luxury font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/2" className="group">
              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors">
                <h4 className="font-luxury font-bold mb-2 group-hover:text-gold-400 transition-colors">
                  Top 5 Commercial Property Investment Strategies
                </h4>
                <p className="text-gray-300 font-elegant text-sm">
                  Expert insights on maximizing returns through strategic investments...
                </p>
              </div>
            </Link>
            <Link to="/blog/3" className="group">
              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors">
                <h4 className="font-luxury font-bold mb-2 group-hover:text-gold-400 transition-colors">
                  Westlands District: The New Hub for Premium Offices
                </h4>
                <p className="text-gray-300 font-elegant text-sm">
                  Why Westlands has become the preferred location for corporations...
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;