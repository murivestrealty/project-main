import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, TrendingUp } from 'lucide-react';

const ExclusiveOpportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: "Westlands Executive Towers",
      location: "Nairobi CBD, Kenya",
      type: "Commercial Real Estate",
      investment: "$2.5M - $15M",
      returns: "32% IRR",
      timeline: "Q2 2025",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Limited Availability",
      description: "Prime commercial development in Nairobi's most prestigious business district."
    },
    {
      id: 2,
      title: "Karen Luxury Residences",
      location: "Karen, Nairobi",
      type: "Luxury Residential",
      investment: "$800K - $3.2M",
      returns: "24% IRR",
      timeline: "Q3 2025",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Pre-Launch",
      description: "Exclusive residential enclave for the discerning international buyer."
    },
    {
      id: 3,
      title: "Mombasa Waterfront Resort",
      location: "Diani Beach, Kenya",
      type: "Hospitality Investment",
      investment: "$5M - $25M",
      returns: "28% IRR",
      timeline: "Q4 2025",
      image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "By Invitation Only",
      description: "Luxury beachfront resort development with guaranteed returns."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-900/5 rounded-full text-slate-700 text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Exclusive Access Required
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Curated Investment
            <span className="block font-extralight italic text-slate-600">
              Opportunities
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            These exceptional opportunities are reserved for qualified investors 
            who appreciate the value of exclusivity and superior returns.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64">
                <img
                  src={opportunity.image}
                  alt={opportunity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/90 text-white px-3 py-2 rounded-full text-xs font-medium">
                    {opportunity.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-slate-700 px-3 py-2 rounded-full text-xs font-medium">
                    {opportunity.returns}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                    {opportunity.type}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-slate-900 mb-3">
                  {opportunity.title}
                </h3>

                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">{opportunity.location}</span>
                </div>

                <p className="text-slate-600 mb-6 font-light leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-sm">Investment Range</span>
                    <span className="text-slate-900 font-medium">{opportunity.investment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-sm">Expected Timeline</span>
                    <span className="text-slate-900 font-medium">{opportunity.timeline}</span>
                  </div>
                </div>

                <motion.button
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-medium hover:bg-slate-800 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Private Briefing
                  <ArrowRight className="h-4 w-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 mb-6 font-light">
            Access to our complete portfolio requires qualification and invitation.
          </p>
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-medium hover:bg-slate-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Private Consultation
            <ArrowRight className="h-4 w-4 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveOpportunities;