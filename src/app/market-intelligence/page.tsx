import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Globe, Building, Download, Eye } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const MarketIntelligencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reports = [
    {
      title: "Kenya Commercial Real Estate Market Report Q4 2024",
      description: "Comprehensive analysis of commercial property trends, pricing, and investment opportunities across major Kenyan cities.",
      date: "December 2024",
      pages: "45 pages",
      type: "Market Analysis",
      downloadUrl: "#"
    },
    {
      title: "East Africa Industrial Property Investment Guide",
      description: "Strategic insights into industrial real estate opportunities across Kenya, Uganda, and Tanzania with ROI projections.",
      date: "November 2024",
      pages: "32 pages",
      type: "Investment Guide",
      downloadUrl: "#"
    },
    {
      title: "Nairobi Office Space Demand Forecast 2025-2027",
      description: "Forward-looking analysis of office space demand patterns and rental yield projections in Nairobi's key business districts.",
      date: "October 2024",
      pages: "28 pages",
      type: "Forecast Report",
      downloadUrl: "#"
    }
  ];

  const marketData = [
    {
      metric: "Average Commercial Yield",
      value: "15.2%",
      change: "+2.1%",
      trend: "up"
    },
    {
      metric: "Office Occupancy Rate",
      value: "87%",
      change: "+5.3%",
      trend: "up"
    },
    {
      metric: "Industrial Property Demand",
      value: "High",
      change: "+18%",
      trend: "up"
    },
    {
      metric: "Retail Space Absorption",
      value: "2.1M sqft",
      change: "+12%",
      trend: "up"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      <SEOHead
        title="Market Intelligence - Real Estate Market Analysis | Murivest Realty Group"
        description="Access comprehensive market intelligence and analysis for Kenya's commercial real estate market. Professional reports, forecasts, and investment insights."
        keywords="Kenya real estate market analysis, commercial property market intelligence, real estate investment reports, property market forecasts Kenya, commercial real estate data"
        url="https://murivest.co.ke/market-intelligence"
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-900/5 rounded-full text-slate-700 text-sm font-medium mb-6">
            <BarChart3 className="h-4 w-4 mr-2" />
            Market Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Market
            <span className="block font-extralight italic text-slate-600">
              Intelligence
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Access comprehensive market analysis, investment insights, and strategic intelligence 
            to make informed real estate investment decisions in Kenya's dynamic market.
          </p>
        </motion.div>

        {/* Market Metrics */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {marketData.map((data, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200/50">
              <div className="flex items-center justify-between mb-3">
                <TrendingUp className="h-5 w-5 text-slate-600" />
                <span className={`text-sm font-medium ${
                  data.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {data.change}
                </span>
              </div>
              <div className="text-2xl font-light text-slate-900 mb-1">
                {data.value}
              </div>
              <div className="text-sm text-slate-600">
                {data.metric}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Research Reports */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            Latest Research Reports
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200/50">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full mb-4">
                    {report.type}
                  </span>
                  <h3 className="text-xl font-light text-slate-900 mb-3">
                    {report.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    {report.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <span>{report.date}</span>
                    <span>{report.pages}</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-slate-900 text-white py-3 px-4 rounded-2xl font-medium hover:bg-slate-800 transition-colors flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                  <button className="p-3 border border-slate-300 rounded-2xl hover:bg-slate-50 transition-colors">
                    <Eye className="h-4 w-4 text-slate-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Market Insights */}
        <motion.div
          className="bg-slate-900 rounded-3xl shadow-xl p-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-6">
              Exclusive Market Insights
            </h2>
            <p className="text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              Our research team provides institutional-grade market intelligence to help you 
              identify opportunities and mitigate risks in Kenya's evolving real estate landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Building className="h-8 w-8 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-light mb-3">Property Analysis</h3>
              <p className="text-slate-400 font-light text-sm">
                Detailed analysis of individual properties and market segments
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-light mb-3">Regional Trends</h3>
              <p className="text-slate-400 font-light text-sm">
                Cross-border analysis of East African real estate markets
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-light mb-3">Investment Forecasts</h3>
              <p className="text-slate-400 font-light text-sm">
                Forward-looking projections and investment recommendations
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-slate-900 py-4 px-8 rounded-2xl font-medium hover:bg-slate-100 transition-colors">
              Subscribe to Intelligence Reports
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketIntelligencePage;