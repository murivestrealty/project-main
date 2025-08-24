import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, Linkedin, Mail } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const LeadershipPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const leaders = [
    {
      name: "James Mwangi",
      title: "Chief Executive Officer & Founder",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former Goldman Sachs investment banker with 15+ years in international real estate markets. Led $2B+ in commercial property transactions across emerging markets.",
      credentials: ["MBA Harvard Business School", "CFA Charterholder", "RICS Fellow"],
      linkedin: "#",
      email: "james@murivest.com"
    },
    {
      name: "Sarah Kimani",
      title: "Chief Investment Officer",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "20+ years in institutional real estate investment. Former Managing Director at Blackstone Real Estate. Expertise in African market analysis and portfolio optimization.",
      credentials: ["MSc Real Estate Finance", "CPA Kenya", "CCIM Designation"],
      linkedin: "#",
      email: "sarah@murivest.com"
    },
    {
      name: "David Ochieng",
      title: "Head of Acquisitions",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in commercial property acquisition and due diligence. Former Knight Frank director with deep knowledge of East African real estate markets.",
      credentials: ["BSc Valuation & Estate Management", "RICS Registered Valuer", "MAK Certified"],
      linkedin: "#",
      email: "david@murivest.com"
    },
    {
      name: "Grace Wanjiku",
      title: "Head of Client Relations",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Specialized in high-net-worth client management and international investor relations. Former UBS Private Banking relationship manager.",
      credentials: ["MBA Finance", "CFP Certification", "CAIA Charter"],
      linkedin: "#",
      email: "grace@murivest.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      <SEOHead
        title="Leadership Team - Real Estate Investment Experts | Murivest Realty Group"
        description="Meet the experienced leadership team at Murivest Realty Group. Former investment bankers and real estate professionals with decades of international experience."
        keywords="Murivest leadership team, real estate investment experts Kenya, commercial property professionals, investment banking experience, real estate management team"
        url="https://murivest.co.ke/leadership"
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-900/5 rounded-full text-slate-700 text-sm font-medium mb-6">
            <Users className="h-4 w-4 mr-2" />
            Executive Leadership
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Leadership
            <span className="block font-extralight italic text-slate-600">
              Team
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Our leadership team combines decades of international investment banking experience 
            with deep expertise in African real estate markets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-slate-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-slate-600 font-medium mb-4">
                      {leader.title}
                    </p>
                    <div className="flex space-x-3">
                      <a
                        href={leader.linkedin}
                        className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-slate-600" />
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                      >
                        <Mail className="h-4 w-4 text-slate-600" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 font-light leading-relaxed mt-6 mb-6">
                  {leader.bio}
                </p>
                
                <div>
                  <h4 className="text-sm font-medium text-slate-900 mb-3">Credentials</h4>
                  <div className="space-y-2">
                    {leader.credentials.map((credential, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <Award className="h-3 w-3 text-slate-400 mr-2" />
                        {credential}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Stats */}
        <motion.div
          className="bg-slate-900 rounded-3xl shadow-xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-light mb-8">Leadership Excellence</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-light text-white mb-2">60+</div>
              <div className="text-slate-300 text-sm">Combined Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white mb-2">$5B+</div>
              <div className="text-slate-300 text-sm">Transactions Led</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white mb-2">15</div>
              <div className="text-slate-300 text-sm">Countries Operated</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white mb-2">100%</div>
              <div className="text-slate-300 text-sm">Client Retention</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeadershipPage;