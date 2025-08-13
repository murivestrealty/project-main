import React from 'react';
import { Target, Eye, Award, Users, Briefcase, Home, Shield, Crown } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Expertise",
      description: "Research-led, data-driven approach providing intelligence for informed decision-making."
    },
    {
      icon: Shield,
      title: "Integrity", 
      description: "Operating with the highest moral and professional standards, building trust through transparency."
    },
    {
      icon: Crown,
      title: "Exclusivity",
      description: "Curated portfolio of prime properties, focusing on quality over quantity for discerning clients."
    },
    {
      icon: Briefcase,
      title: "Sophistication",
      description: "Embodying elegance and professionalism that reflects the luxury market we serve."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Strategic partners in your investment journey, providing continuous support and advisory services."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Murivest Realty Group</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A premier real estate investment firm transcending traditional brokerage through comprehensive, 
            consultative services for discerning clientele.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Based in Nairobi, Kenya, Murivest Realty Group serves as a strategic partner and asset manager 
              for high-net-worth individuals and institutional investors. Our expertise is built on deep, 
              data-driven market insights and a commitment to transparency.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We ensure our clients achieve superior returns and a truly passive income experience through 
              our sophisticated approach to real estate investment and management.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Nairobi Skyline" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-600 text-center italic">
              "Setting the standard for professional service and market intelligence across Africa"
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and authoritative luxury real estate investment group in Nairobi, 
              setting the standard for professional service, market intelligence, and curated investment 
              opportunities across Africa.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To empower our clients to build long-term wealth through strategic real estate investments 
              by offering hand-selected portfolios, expert advisory services, and world-class property 
              management that protects and enhances asset value.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <value.icon className="h-8 w-8 text-amber-600 mr-3" />
                  <h4 className="text-xl font-bold text-gray-900">{value.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;