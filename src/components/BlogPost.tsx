import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, ThumbsUp } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Nairobi's commercial real estate market continues to show remarkable resilience and growth potential as we head into 2024. With a growing economy, increasing foreign investment, and strategic infrastructure developments, the capital city presents compelling opportunities for discerning investors seeking superior returns in East Africa's financial hub.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Market Overview</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">The commercial real estate sector in Nairobi has demonstrated consistent growth over the past five years, with average annual returns of 12-18% across different property types. This performance significantly outpaces traditional investment vehicles and reflects the underlying strength of Kenya's economy.</p>
        
        <div class="market-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; text-align: center; border: 1px solid #e0f2fe;">
            <div style="font-size: 2rem; font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">15.2%</div>
            <div style="color: #64748b; font-size: 0.875rem;">Average Annual Returns</div>
          </div>
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; text-align: center; border: 1px solid #dcfce7;">
            <div style="font-size: 2rem; font-weight: bold; color: #166534; margin-bottom: 0.5rem;">5.2%</div>
            <div style="color: #64748b; font-size: 0.875rem;">GDP Growth 2023</div>
          </div>
          <div style="background: #fefce8; padding: 1.5rem; border-radius: 0.75rem; text-align: center; border: 1px solid #fef3c7;">
            <div style="font-size: 2rem; font-weight: bold; color: #a16207; margin-bottom: 0.5rem;">KSh 2.5B</div>
            <div style="color: #64748b; font-size: 0.875rem;">Market Value</div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Key Growth Drivers</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Several factors are driving the continued expansion of Nairobi's commercial property market:</p>
        <ul>
          <li><strong>Economic Growth:</strong> Kenya's GDP growth of 5.2% in 2023 has created increased demand for commercial spaces</li>
          <li><strong>Infrastructure Development:</strong> Major projects like the Nairobi Expressway have improved connectivity and accessibility</li>
          <li><strong>Foreign Investment:</strong> Increased FDI has led to higher demand for Grade A office spaces</li>
          <li><strong>Urbanization:</strong> Rapid urban growth continues to drive demand for commercial properties</li>
        </ul>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Investment Opportunities</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">The most promising sectors for 2024 include:</p>
        <ul>
          <li><strong>Office Spaces:</strong> Particularly in Westlands, Upper Hill, and CBD areas</li>
          <li><strong>Retail Properties:</strong> Shopping centers and mixed-use developments</li>
          <li><strong>Industrial Properties:</strong> Warehouses and logistics facilities</li>
          <li><strong>Hospitality:</strong> Hotels and serviced apartments</li>
        </ul>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Market Outlook</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Looking ahead, we expect continued growth in commercial property values, driven by sustained economic expansion and increasing demand from both local and international businesses. Investors who position themselves strategically in high-growth areas can expect superior returns over the medium to long term.</p>

        <div class="conclusion" style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <p style="margin: 0; font-size: 1.125rem; line-height: 1.8;">At Murivest Realty Group, we continue to identify and curate the most promising investment opportunities for our clients, ensuring they benefit from Nairobi's dynamic commercial real estate market.</p>
        </div>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Ready to Invest in Nairobi's Growing Market?</h3>
          <p style="margin-bottom: 1.5rem;">Don't miss out on the exceptional opportunities in Nairobi's commercial real estate market. Our expert team can help you identify high-yield properties and develop a winning investment strategy.</p>
          <a href="/properties" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">Explore Properties</a>
          <a href="/contact" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Schedule Consultation</a>
        </div>
      `,
      tags: ["Commercial Real Estate", "Nairobi", "Investment", "Market Analysis", "2024 Outlook"]
    },
    2: {
      title: "Top 5 Commercial Property Investment Strategies for High Returns",
      author: "James Mwangi",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Investment Tips",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Maximize your commercial property investment returns with these five proven strategies used by successful investors in Kenya's thriving real estate market. Learn how to identify high-yield opportunities and optimize your investment portfolio for superior performance.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Strategy 1: Location-Based Value Investing</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Focus on emerging business districts and areas with planned infrastructure development. Properties in Westlands, Upper Hill, and along the Nairobi Expressway corridor offer exceptional growth potential.</p>
        
        <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0; border-left: 4px solid #0369a1;">
          <h4 style="color: #0369a1; margin-bottom: 0.5rem;">Key Locations to Watch:</h4>
          <ul style="margin: 0; color: #374151;">
            <li>Westlands Business District - 18% average appreciation</li>
            <li>Upper Hill Financial District - 15% rental yield potential</li>
            <li>Nairobi Expressway Corridor - 22% growth projection</li>
          </ul>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Strategy 2: Mixed-Use Development Investment</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Invest in properties that combine retail, office, and residential spaces. These developments offer multiple income streams and reduced vacancy risks.</p>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Strategy 3: Technology-Enhanced Properties</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Modern tenants demand smart building features, high-speed internet, and flexible workspace solutions. Properties with these amenities command premium rents.</p>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Strategy 4: Long-Term Lease Agreements</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Secure stable income through 5-10 year lease agreements with reputable tenants. This strategy provides predictable cash flow and reduces management overhead.</p>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Strategy 5: Value-Add Renovations</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Purchase underperforming properties and enhance their value through strategic renovations and improved management. This can increase rental income by 25-40%.</p>

        <div class="roi-calculator" style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1rem;">Expected Returns by Strategy</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div style="text-align: center; padding: 1rem; background: white; border-radius: 0.5rem;">
              <div style="font-size: 1.5rem; font-weight: bold; color: #059669;">12-18%</div>
              <div style="color: #6b7280; font-size: 0.875rem;">Location-Based</div>
            </div>
            <div style="text-align: center; padding: 1rem; background: white; border-radius: 0.5rem;">
              <div style="font-size: 1.5rem; font-weight: bold; color: #059669;">15-22%</div>
              <div style="color: #6b7280; font-size: 0.875rem;">Mixed-Use</div>
            </div>
            <div style="text-align: center; padding: 1rem; background: white; border-radius: 0.5rem;">
              <div style="font-size: 1.5rem; font-weight: bold; color: #059669;">20-35%</div>
              <div style="color: #6b7280; font-size: 0.875rem;">Value-Add</div>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Ready to Implement These Strategies?</h3>
          <p style="margin-bottom: 1.5rem;">Our investment experts can help you identify the best opportunities and implement these proven strategies for maximum returns in Kenya's commercial real estate market.</p>
          <a href="/contact" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">Get Investment Strategy</a>
          <a href="/properties" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">View Properties</a>
        </div>
      `,
      tags: ["Investment Strategies", "Commercial Property", "High Returns", "Real Estate Investment", "Kenya"]
    },
    3: {
      title: "Westlands District: The New Hub for Premium Office Spaces",
      author: "Grace Wanjiku",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Property News",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Westlands has emerged as Nairobi's premier business district, attracting multinational corporations and premium office developments. Discover why this area offers exceptional investment opportunities for commercial real estate investors.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">The Westlands Transformation</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Over the past decade, Westlands has transformed from a residential suburb into Nairobi's most dynamic business district. The area now hosts over 200 multinational companies and continues to attract premium office developments.</p>

        <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0; border-left: 4px solid #0369a1;">
          <h4 style="color: #0369a1; margin-bottom: 0.5rem;">Key Statistics:</h4>
          <ul style="margin: 0; color: #374151;">
            <li>200+ multinational companies headquartered</li>
            <li>85% average occupancy rate</li>
            <li>KSh 120-180 per sq ft rental rates</li>
            <li>15% annual rental growth</li>
          </ul>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Why Multinational Corporations Choose Westlands</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Several factors make Westlands the preferred location for international businesses:</p>
        <ul>
          <li><strong>Strategic Location:</strong> Central position with easy access to CBD and residential areas</li>
          <li><strong>Modern Infrastructure:</strong> Grade A office buildings with international standards</li>
          <li><strong>Connectivity:</strong> Excellent road networks and public transportation</li>
          <li><strong>Amenities:</strong> Shopping centers, restaurants, and business services</li>
        </ul>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Investment Opportunities</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Westlands offers diverse investment opportunities for commercial real estate investors:</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 0.5rem;">Grade A Offices</h4>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">Premium office spaces with international tenants, offering 12-15% annual returns.</p>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a;">
            <h4 style="color: #a16207; margin-bottom: 0.5rem;">Mixed-Use Developments</h4>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">Combined office and retail spaces providing diversified income streams.</p>
          </div>
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin-bottom: 0.5rem;">Serviced Offices</h4>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">Flexible workspace solutions for growing businesses and startups.</p>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Future Development Plans</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">The Westlands area continues to evolve with several major developments planned, including new office towers, improved transportation links, and enhanced infrastructure that will further increase property values.</p>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Invest in Westlands Premium Office Spaces</h3>
          <p style="margin-bottom: 1.5rem;">Don't miss the opportunity to invest in Nairobi's most dynamic business district. Our portfolio includes prime office spaces in Westlands with guaranteed high-quality tenants.</p>
          <a href="/properties" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">View Westlands Properties</a>
          <a href="/contact" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Schedule Site Visit</a>
        </div>
      `,
      tags: ["Westlands", "Office Spaces", "Commercial Property", "Nairobi", "Investment Opportunity"]
    },
    4: {
      title: "Understanding Commercial Property Yields in Nairobi",
      author: "David Ochieng",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Investment Tips",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Master the fundamentals of commercial property yields in Nairobi. Learn how to calculate, analyze, and maximize returns on your commercial real estate investments in Kenya's capital city.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">What Are Property Yields?</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Property yield is the annual rental income expressed as a percentage of the property's value. It's the primary metric for evaluating commercial real estate investment performance and comparing different opportunities.</p>

        <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1rem;">Yield Calculation Formula</h3>
          <div style="background: #1e293b; color: white; padding: 1.5rem; border-radius: 0.5rem; font-family: monospace; text-align: center; font-size: 1.125rem;">
            Gross Yield = (Annual Rental Income ÷ Property Value) × 100
          </div>
          <p style="color: #6b7280; margin-top: 1rem; font-size: 0.875rem;">Example: KSh 2.4M annual rent ÷ KSh 20M property value = 12% gross yield</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Types of Yields</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin-bottom: 1rem;">Gross Yield</h4>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 1rem;">Total rental income before expenses</p>
            <div style="font-weight: bold; color: #0369a1;">Nairobi Average: 10-15%</div>
          </div>
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 1rem;">Net Yield</h4>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 1rem;">Rental income after all expenses</p>
            <div style="font-weight: bold; color: #166534;">Nairobi Average: 8-12%</div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Nairobi Yield Benchmarks by Property Type</h2>
        
        <div style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 2rem 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #1e293b; color: white;">
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Property Type</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Gross Yield</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Net Yield</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Grade A Offices</td>
                <td style="padding: 1rem; color: #059669; font-weight: bold;">12-15%</td>
                <td style="padding: 1rem; color: #059669; font-weight: bold;">10-12%</td>
                <td style="padding: 1rem;"><span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Low</span></td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Retail Spaces</td>
                <td style="padding: 1rem; color: #059669; font-weight: bold;">10-14%</td>
                <td style="padding: 1rem; color: #059669; font-weight: bold;">8-11%</td>
                <td style="padding: 1rem;"><span style="background: #fef3c7; color: #a16207; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Medium</span></td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Industrial</td>
                <td style="padding: 1rem; color: #059669; font-weight: bold;">14-18%</td>
                <td style="padding: 1rem; color: #059669; font-weight: bold;">12-15%</td>
                <td style="padding: 1rem;"><span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Low</span></td>
              </tr>
              <tr>
                <td style="padding: 1rem; font-weight: 500;">Hotels</td>
                <td style="padding: 1rem; color: #059669; font-weight: bold;">15-20%</td>
                <td style="padding: 1rem; color: #059669; font-weight: bold;">12-16%</td>
                <td style="padding: 1rem;"><span style="background: #fee2e2; color: #dc2626; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">High</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Factors Affecting Yields</h2>
        <ul style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
          <li><strong>Location:</strong> CBD properties typically offer lower yields but higher capital appreciation</li>
          <li><strong>Property Quality:</strong> Grade A buildings command premium rents and stable tenants</li>
          <li><strong>Tenant Quality:</strong> Multinational corporations provide stable, long-term income</li>
          <li><strong>Market Conditions:</strong> Supply and demand dynamics affect rental rates</li>
          <li><strong>Property Management:</strong> Professional management can increase yields by 2-3%</li>
        </ul>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Maximizing Your Property Yields</h2>
        <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0; border-left: 4px solid #0369a1;">
          <h4 style="color: #0369a1; margin-bottom: 1rem;">Proven Strategies:</h4>
          <ul style="margin: 0; color: #374151;">
            <li>Regular property maintenance and upgrades</li>
            <li>Strategic tenant selection and retention</li>
            <li>Market-rate rent reviews and adjustments</li>
            <li>Value-add improvements and amenities</li>
            <li>Professional property management services</li>
          </ul>
        </div>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Maximize Your Commercial Property Yields</h3>
          <p style="margin-bottom: 1.5rem;">Our property management experts can help you optimize your commercial property yields through strategic tenant placement, professional management, and value-enhancement strategies.</p>
          <a href="/contact" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">Get Yield Analysis</a>
          <a href="/properties" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">View High-Yield Properties</a>
        </div>
      `,
      tags: ["Property Yields", "Commercial Real Estate", "Investment Analysis", "Nairobi", "ROI"]
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
    },
    5: {
      title: "The Rise of Mixed-Use Developments in Nairobi",
      author: "Mary Njeri",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Commercial Trends",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Mixed-use developments are transforming Nairobi's urban landscape, combining residential, commercial, and retail spaces in innovative ways. Discover why these developments represent the future of real estate investment in Kenya's capital.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">The Mixed-Use Revolution</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Mixed-use developments are reshaping Nairobi's skyline and urban planning approach. These integrated communities combine residential apartments, office spaces, retail outlets, and recreational facilities in single developments, creating vibrant, self-contained ecosystems.</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #166534; margin-bottom: 0.5rem;">65%</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Higher Occupancy Rates</div>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #a16207; margin-bottom: 0.5rem;">18%</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Average Annual Returns</div>
          </div>
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">3</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Income Streams</div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Investment Advantages</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Mixed-use developments offer unique advantages for real estate investors:</p>

        <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1.5rem;">Key Benefits</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
            <div>
              <h4 style="color: #059669; margin-bottom: 0.5rem;">🏢 Diversified Income</h4>
              <p style="color: #374151; font-size: 0.875rem; margin: 0;">Multiple revenue streams from residential, commercial, and retail tenants reduce vacancy risks.</p>
            </div>
            <div>
              <h4 style="color: #059669; margin-bottom: 0.5rem;">📈 Higher Valuations</h4>
              <p style="color: #374151; font-size: 0.875rem; margin: 0;">Integrated developments command premium valuations due to convenience and amenities.</p>
            </div>
            <div>
              <h4 style="color: #059669; margin-bottom: 0.5rem;">🎯 Stable Tenancy</h4>
              <p style="color: #374151; font-size: 0.875rem; margin: 0;">Residents and businesses benefit from proximity, creating stable, long-term tenancies.</p>
            </div>
            <div>
              <h4 style="color: #059669; margin-bottom: 0.5rem;">🚀 Future-Proof</h4>
              <p style="color: #374151; font-size: 0.875rem; margin: 0;">Aligned with urban planning trends and sustainable development goals.</p>
            </div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Notable Nairobi Developments</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">Several successful mixed-use projects in Nairobi demonstrate the potential of this development model:</p>

        <ul style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
          <li><strong>Two Rivers Mall & Residences:</strong> Integrated shopping, dining, and residential complex</li>
          <li><strong>Garden City Mall:</strong> Mixed retail, office, and residential development</li>
          <li><strong>Westgate Shopping Mall:</strong> Retail and office space combination</li>
          <li><strong>The Hub Karen:</strong> Shopping, dining, and entertainment complex</li>
        </ul>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Investment Considerations</h2>
        <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0; border-left: 4px solid #f59e0b;">
          <h4 style="color: #a16207; margin-bottom: 1rem;">Key Factors to Evaluate:</h4>
          <ul style="margin: 0; color: #374151;">
            <li>Location and accessibility</li>
            <li>Developer track record and financial stability</li>
            <li>Tenant mix and anchor tenants</li>
            <li>Parking and infrastructure adequacy</li>
            <li>Management and maintenance capabilities</li>
          </ul>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Future Outlook</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">The trend toward mixed-use developments is expected to accelerate, driven by urbanization, changing lifestyle preferences, and the need for sustainable urban planning. Investors who position themselves early in quality mixed-use projects can expect superior long-term returns.</p>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Invest in the Future of Urban Development</h3>
          <p style="margin-bottom: 1.5rem;">Mixed-use developments represent the future of urban real estate. Our portfolio includes carefully selected mixed-use projects that offer diversified income streams and exceptional growth potential.</p>
          <a href="/properties" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">Explore Mixed-Use Properties</a>
          <a href="/contact" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Schedule Consultation</a>
        </div>
      `,
      tags: ["Mixed-Use Development", "Urban Planning", "Commercial Trends", "Nairobi", "Real Estate Investment"]
    },
    6: {
      title: "New Property Laws: What Investors Need to Know",
      author: "Peter Kamau",
      date: "December 3, 2024",
      readTime: "9 min read",
      category: "Legal Updates",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Recent amendments to Kenya's property laws introduce significant changes affecting real estate investors. Stay compliant and protect your investments by understanding these new regulations and their implications for commercial property ownership and management.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Key Legislative Changes</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">The Land Laws (Amendment) Act 2024 introduces several important changes that affect commercial real estate investors:</p>

        <div style="background: #fee2e2; padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
          <h4 style="color: #dc2626; margin-bottom: 1rem;">⚠️ Critical Changes:</h4>
          <ul style="margin: 0; color: #374151;">
            <li>Enhanced due diligence requirements for property transactions</li>
            <li>New disclosure obligations for property sellers</li>
            <li>Revised stamp duty calculations and payment procedures</li>
            <li>Updated land registration and title transfer processes</li>
            <li>Strengthened tenant protection measures</li>
          </ul>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Impact on Commercial Property Investors</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin-bottom: 1rem;">📋 Due Diligence</h4>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">Enhanced search requirements and verification processes for property purchases, increasing transaction timelines by 2-3 weeks.</p>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a;">
            <h4 style="color: #a16207; margin-bottom: 1rem;">💰 Tax Implications</h4>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">Revised stamp duty rates and new capital gains tax provisions affecting property disposal strategies.</p>
          </div>
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 1rem;">🏢 Tenant Relations</h4>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">New tenant protection measures requiring updated lease agreements and eviction procedures.</p>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Compliance Requirements</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">To ensure compliance with the new regulations, commercial property investors must:</p>

        <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1.5rem;">Compliance Checklist</h3>
          <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
            <div style="display: flex; align-items: start; padding: 1rem; background: white; border-radius: 0.5rem;">
              <div style="background: #dcfce7; color: #166534; padding: 0.25rem; border-radius: 50%; margin-right: 1rem; min-width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem;">✓</div>
              <div>
                <h4 style="color: #1e293b; margin-bottom: 0.5rem;">Update Legal Documentation</h4>
                <p style="color: #6b7280; font-size: 0.875rem; margin: 0;">Review and update all property-related contracts, leases, and agreements to comply with new requirements.</p>
              </div>
            </div>
            <div style="display: flex; align-items: start; padding: 1rem; background: white; border-radius: 0.5rem;">
              <div style="background: #dcfce7; color: #166534; padding: 0.25rem; border-radius: 50%; margin-right: 1rem; min-width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem;">✓</div>
              <div>
                <h4 style="color: #1e293b; margin-bottom: 0.5rem;">Enhanced Record Keeping</h4>
                <p style="color: #6b7280; font-size: 0.875rem; margin: 0;">Implement comprehensive record-keeping systems for all property transactions and tenant interactions.</p>
              </div>
            </div>
            <div style="display: flex; align-items: start; padding: 1rem; background: white; border-radius: 0.5rem;">
              <div style="background: #dcfce7; color: #166534; padding: 0.25rem; border-radius: 50%; margin-right: 1rem; min-width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem;">✓</div>
              <div>
                <h4 style="color: #1e293b; margin-bottom: 0.5rem;">Professional Legal Review</h4>
                <p style="color: #6b7280; font-size: 0.875rem; margin: 0;">Engage qualified legal counsel to review existing portfolios and ensure full compliance.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Opportunities and Challenges</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">While the new laws introduce compliance challenges, they also create opportunities for professional investors:</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 1rem;">🎯 Opportunities</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Increased market transparency</li>
              <li>Better protection for legitimate investors</li>
              <li>Reduced competition from non-compliant operators</li>
              <li>Enhanced property value stability</li>
            </ul>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a;">
            <h4 style="color: #a16207; margin-bottom: 1rem;">⚠️ Challenges</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Increased transaction costs and timelines</li>
              <li>More complex compliance requirements</li>
              <li>Need for enhanced legal and professional support</li>
              <li>Potential short-term market adjustment period</li>
            </ul>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Implementation Timeline</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">The new regulations are being implemented in phases:</p>

        <div style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 2rem 0;">
          <div style="background: #1e293b; color: white; padding: 1rem;">
            <h4 style="margin: 0;">Implementation Schedule</h4>
          </div>
          <div style="padding: 1.5rem;">
            <div style="border-left: 4px solid #fbbf24; padding-left: 1rem; margin-bottom: 1.5rem;">
              <h5 style="color: #1e293b; margin-bottom: 0.5rem;">Phase 1 (January 2024)</h5>
              <p style="color: #6b7280; font-size: 0.875rem; margin: 0;">Enhanced due diligence and disclosure requirements</p>
            </div>
            <div style="border-left: 4px solid #fbbf24; padding-left: 1rem; margin-bottom: 1.5rem;">
              <h5 style="color: #1e293b; margin-bottom: 0.5rem;">Phase 2 (March 2024)</h5>
              <p style="color: #6b7280; font-size: 0.875rem; margin: 0;">Revised stamp duty and tax provisions</p>
            </div>
            <div style="border-left: 4px solid #fbbf24; padding-left: 1rem;">
              <h5 style="color: #1e293b; margin-bottom: 0.5rem;">Phase 3 (June 2024)</h5>
              <p style="color: #6b7280; font-size: 0.875rem; margin: 0;">Full implementation of tenant protection measures</p>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Ensure Legal Compliance for Your Property Portfolio</h3>
          <p style="margin-bottom: 1.5rem;">Don't let new regulations catch you off-guard. Our legal experts can help you navigate the changing landscape and ensure your property investments remain compliant and profitable.</p>
          <a href="/contact" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">Get Legal Consultation</a>
          <a href="/properties" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">View Compliant Properties</a>
        </div>
      `,
      tags: ["Property Laws", "Legal Updates", "Compliance", "Real Estate Regulation", "Kenya"]
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