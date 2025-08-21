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
    },
    10: {
      title: "REITs in Kenya: Your Gateway to Real Estate Investment",
      author: "Catherine Muthoni",
      date: "December 20, 2024",
      readTime: "8 min read",
      category: "REITs",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <p>Real Estate Investment Trusts (REITs) have emerged as a game-changing investment vehicle in Kenya, democratizing access to premium real estate investments that were previously available only to high-net-worth individuals and institutions.</p>

        <h2>What are REITs?</h2>
        <p>REITs are investment vehicles that pool money from multiple investors to purchase, operate, and manage income-generating real estate properties. In Kenya, REITs are regulated by the Capital Markets Authority (CMA) and offer investors the opportunity to earn dividends from real estate investments without directly owning property.</p>

        <h2>Kenya's REIT Landscape</h2>
        <p>Kenya's REIT market has shown impressive growth since the introduction of the first REIT in 2013. Currently, several REITs operate in the market, including:</p>
        <ul>
          <li><strong>Fahari I-REIT:</strong> Kenya's first listed REIT, focusing on commercial properties</li>
          <li><strong>Acorn D-REIT:</strong> Specializing in student accommodation and affordable housing</li>
          <li><strong>Ilam Fahari I-REIT:</strong> Targeting high-quality commercial and residential properties</li>
        </ul>

        <h2>Benefits of REIT Investment</h2>
        <ul>
          <li><strong>Liquidity:</strong> Unlike direct property ownership, REIT units can be easily bought and sold on the stock exchange</li>
          <li><strong>Diversification:</strong> Invest in a portfolio of properties across different sectors and locations</li>
          <li><strong>Professional Management:</strong> Properties are managed by experienced real estate professionals</li>
          <li><strong>Regular Income:</strong> REITs are required to distribute at least 80% of their income as dividends</li>
          <li><strong>Lower Entry Barriers:</strong> Start investing with as little as KSh 5,000</li>
        </ul>

        <h2>REIT Performance Analysis</h2>
        <p>Kenyan REITs have delivered competitive returns, with average dividend yields ranging from 8-12% annually. The total returns, including capital appreciation, have often exceeded 15% per annum, making them attractive compared to traditional fixed-income investments.</p>

        <h2>Investment Considerations</h2>
        <p>While REITs offer numerous advantages, investors should consider:</p>
        <ul>
          <li>Market volatility and liquidity risks</li>
          <li>Interest rate sensitivity</li>
          <li>Property market cycles</li>
          <li>Management quality and fees</li>
        </ul>

        <h2>Future Outlook</h2>
        <p>The Kenyan REIT market is poised for significant growth, driven by increasing investor awareness, regulatory improvements, and the growing need for alternative investment vehicles. The government's focus on affordable housing and infrastructure development creates additional opportunities for REIT expansion.</p>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Ready to Explore REIT Investments?</h3>
          <p style="margin-bottom: 1.5rem;">Discover how REITs can diversify your investment portfolio and provide steady income streams. Our experts can guide you through the best REIT opportunities in Kenya's market.</p>
          <a href="/contact" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Schedule REIT Consultation</a>
        </div>
      `,
      tags: ["REITs", "Real Estate Investment Trusts", "Kenya", "Dividend Income", "Portfolio Diversification"]
    },
    11: {
      title: "Residential Apartment Investment: Building Wealth Through Rental Income",
      author: "Robert Kiprotich",
      date: "December 18, 2024",
      readTime: "9 min read",
      category: "Residential Investment",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <p>Residential apartment investment remains one of the most reliable wealth-building strategies in Kenya's real estate market. With Nairobi's growing population and increasing urbanization, demand for quality residential units continues to outpace supply, creating lucrative opportunities for savvy investors.</p>

        <h2>Market Dynamics</h2>
        <p>Kenya's residential rental market is valued at over KSh 200 billion annually, with Nairobi accounting for approximately 40% of this market. The sector has shown resilience even during economic downturns, with rental yields averaging 6-10% annually across different property types.</p>

        <h2>Investment Categories</h2>
        <h3>Studio and One-Bedroom Apartments</h3>
        <ul>
          <li><strong>Target Market:</strong> Young professionals, students, and single occupants</li>
          <li><strong>Average Yield:</strong> 8-12% annually</li>
          <li><strong>Investment Range:</strong> KSh 2M - 6M</li>
          <li><strong>Best Locations:</strong> Kilimani, Kileleshwa, Lavington</li>
        </ul>

        <h3>Two and Three-Bedroom Units</h3>
        <ul>
          <li><strong>Target Market:</strong> Small families, expatriates, middle-income professionals</li>
          <li><strong>Average Yield:</strong> 6-9% annually</li>
          <li><strong>Investment Range:</strong> KSh 6M - 15M</li>
          <li><strong>Best Locations:</strong> Westlands, Parklands, South B, South C</li>
        </ul>

        <h3>Luxury Apartments and Penthouses</h3>
        <ul>
          <li><strong>Target Market:</strong> High-income earners, expatriates, diplomats</li>
          <li><strong>Average Yield:</strong> 5-8% annually</li>
          <li><strong>Investment Range:</strong> KSh 15M - 50M+</li>
          <li><strong>Best Locations:</strong> Karen, Runda, Muthaiga, Riverside</li>
        </ul>

        <h2>Key Success Factors</h2>
        <h3>Location Analysis</h3>
        <p>The three most important factors in residential investment are location, location, and location. Consider:</p>
        <ul>
          <li>Proximity to business districts and employment centers</li>
          <li>Access to public transportation and major roads</li>
          <li>Availability of amenities (schools, hospitals, shopping centers)</li>
          <li>Security and neighborhood reputation</li>
          <li>Future development plans and infrastructure projects</li>
        </ul>

        <h3>Property Management</h3>
        <p>Successful residential investment requires effective property management:</p>
        <ul>
          <li>Tenant screening and selection processes</li>
          <li>Regular maintenance and upkeep</li>
          <li>Competitive rental pricing strategies</li>
          <li>Legal compliance and documentation</li>
          <li>Emergency response and tenant relations</li>
        </ul>

        <h2>Financial Considerations</h2>
        <h3>Financing Options</h3>
        <ul>
          <li><strong>Mortgage Financing:</strong> 80-90% LTV available from local banks</li>
          <li><strong>Developer Financing:</strong> Flexible payment plans during construction</li>
          <li><strong>SACCO Loans:</strong> Competitive rates for members</li>
          <li><strong>Joint Ventures:</strong> Partnership opportunities with other investors</li>
        </ul>

        <h3>Tax Implications</h3>
        <ul>
          <li>Rental income tax at 10% for residents</li>
          <li>Mortgage interest deductions available</li>
          <li>Depreciation allowances on fixtures and fittings</li>
          <li>Capital gains tax considerations on disposal</li>
        </ul>

        <h2>Market Trends and Opportunities</h2>
        <p>Several trends are shaping the residential investment landscape:</p>
        <ul>
          <li><strong>Affordable Housing:</strong> Government initiatives creating new opportunities</li>
          <li><strong>Student Accommodation:</strong> Growing demand near universities</li>
          <li><strong>Serviced Apartments:</strong> Increasing demand from business travelers</li>
          <li><strong>Green Buildings:</strong> Sustainable properties commanding premium rents</li>
        </ul>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Start Your Residential Investment Journey</h3>
          <p style="margin-bottom: 1.5rem;">Ready to build wealth through residential property investment? Our team can help you identify high-yield opportunities and manage your investment portfolio for maximum returns.</p>
          <a href="/properties" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">View Properties</a>
          <a href="/contact" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Get Investment Advice</a>
        </div>
      `,
      tags: ["Residential Investment", "Apartment Investment", "Rental Income", "Property Management", "Nairobi Real Estate"]
    },
    12: {
      title: "Commercial Property vs Residential: Which Offers Better Returns?",
      author: "Elizabeth Wanjiru",
      date: "December 16, 2024",
      readTime: "7 min read",
      category: "Investment Comparison",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <p>One of the most common questions we receive from investors is whether to focus on commercial or residential properties. Both sectors offer unique advantages and challenges, and the right choice depends on your investment goals, risk tolerance, and available capital.</p>

        <h2>Commercial Property Investment</h2>
        <h3>Advantages</h3>
        <ul>
          <li><strong>Higher Yields:</strong> Commercial properties typically offer 10-18% annual returns</li>
          <li><strong>Longer Lease Terms:</strong> 3-10 year leases provide stable, predictable income</li>
          <li><strong>Professional Tenants:</strong> Businesses are generally more reliable and responsible</li>
          <li><strong>Triple Net Leases:</strong> Tenants often cover maintenance, taxes, and insurance</li>
          <li><strong>Capital Appreciation:</strong> Prime commercial properties appreciate significantly over time</li>
        </ul>

        <h3>Challenges</h3>
        <ul>
          <li><strong>Higher Entry Costs:</strong> Minimum investments typically start at KSh 10M+</li>
          <li><strong>Market Sensitivity:</strong> More susceptible to economic downturns</li>
          <li><strong>Vacancy Risk:</strong> Longer periods to find replacement tenants</li>
          <li><strong>Specialized Knowledge:</strong> Requires understanding of business needs and market dynamics</li>
        </ul>

        <h2>Residential Property Investment</h2>
        <h3>Advantages</h3>
        <ul>
          <li><strong>Lower Entry Barriers:</strong> Can start with as little as KSh 2M</li>
          <li><strong>Stable Demand:</strong> Housing is a basic need with consistent demand</li>
          <li><strong>Easier Management:</strong> Simpler tenant relationships and property management</li>
          <li><strong>Faster Liquidity:</strong> Easier to sell individual units</li>
          <li><strong>Diversification:</strong> Can own multiple smaller units across different areas</li>
        </ul>

        <h3>Challenges</h3>
        <ul>
          <li><strong>Lower Yields:</strong> Typically 6-10% annual returns</li>
          <li><strong>Higher Turnover:</strong> More frequent tenant changes</li>
          <li><strong>Maintenance Intensive:</strong> More hands-on management required</li>
          <li><strong>Emotional Tenants:</strong> Personal situations can affect payment reliability</li>
        </ul>

        <h2>Comparative Analysis</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
          <tr style="background: #f3f4f6;">
            <th style="padding: 1rem; border: 1px solid #d1d5db; text-align: left;">Factor</th>
            <th style="padding: 1rem; border: 1px solid #d1d5db; text-align: left;">Commercial</th>
            <th style="padding: 1rem; border: 1px solid #d1d5db; text-align: left;">Residential</th>
          </tr>
          <tr>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">Average Yield</td>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">10-18%</td>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">6-10%</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 1rem; border: 1px solid #d1d5db;">Minimum Investment</td>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">KSh 10M+</td>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">KSh 2M+</td>
          </tr>
          <tr>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">Lease Duration</td>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">3-10 years</td>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">1-2 years</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 1rem; border: 1px solid #d1d5db;">Management Complexity</td>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">Moderate</td>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">High</td>
          </tr>
          <tr>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">Liquidity</td>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">Lower</td>
            <td style="padding: 1rem; border: 1px solid #d1d5db;">Higher</td>
          </tr>
        </table>

        <h2>Investment Strategy Recommendations</h2>
        <h3>For New Investors</h3>
        <p>Start with residential properties to gain experience and build capital, then gradually move into commercial investments as your portfolio grows.</p>

        <h3>For High-Net-Worth Investors</h3>
        <p>Focus on commercial properties for higher returns and professional management, while maintaining some residential exposure for diversification.</p>

        <h3>For Risk-Averse Investors</h3>
        <p>Consider a balanced portfolio with 60% residential and 40% commercial properties to optimize risk-adjusted returns.</p>

        <h2>Market Outlook</h2>
        <p>Both sectors show strong growth potential in Kenya's expanding economy. Commercial properties benefit from business growth and foreign investment, while residential properties are supported by urbanization and population growth.</p>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Need Help Choosing Your Investment Strategy?</h3>
          <p style="margin-bottom: 1.5rem;">Our investment advisors can help you analyze your goals and create a customized portfolio that balances commercial and residential properties for optimal returns.</p>
          <a href="/contact" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Book Strategy Session</a>
        </div>
      `,
      tags: ["Commercial vs Residential", "Investment Strategy", "Property Comparison", "Real Estate Returns", "Portfolio Diversification"]
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