import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, PieChart, BarChart3, Download } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const CalculatorPage = () => {
  const [investment, setInvestment] = useState(50000000); // KSh 50M default
  const [yield_, setYield] = useState(15); // 15% default
  const [period, setPeriod] = useState(5); // 5 years default
  const [results, setResults] = useState({
    monthlyIncome: 0,
    annualIncome: 0,
    totalReturn: 0,
    totalValue: 0
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const annualIncome = (investment * yield_) / 100;
    const monthlyIncome = annualIncome / 12;
    const totalReturn = annualIncome * period;
    const totalValue = investment + totalReturn;

    setResults({
      monthlyIncome,
      annualIncome,
      totalReturn,
      totalValue
    });
  }, [investment, yield_, period]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatUSD = (amount: number) => {
    const usdAmount = amount / 130; // Approximate KSh to USD conversion
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(usdAmount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      <SEOHead
        title="Investment Calculator - Real Estate ROI Calculator | Murivest Realty Group"
        description="Calculate your potential returns on commercial real estate investments in Kenya. Professional investment calculator for property yields, monthly income, and total returns."
        keywords="real estate investment calculator Kenya, property ROI calculator, commercial real estate returns, investment yield calculator, property income calculator Kenya"
        url="https://murivest.co.ke/calculator"
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-900/5 rounded-full text-slate-700 text-sm font-medium mb-6">
            <Calculator className="h-4 w-4 mr-2" />
            Investment Analysis Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Investment
            <span className="block font-extralight italic text-slate-600">
              Calculator
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Calculate your potential returns on premium commercial real estate investments in Kenya's growing market.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200/50"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-light text-slate-900 mb-8">Investment Parameters</h2>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Investment Amount (KSh)
                </label>
                <input
                  type="range"
                  min="5000000"
                  max="500000000"
                  step="1000000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>KSh 5M</span>
                  <span className="font-medium text-slate-900">{formatCurrency(investment)}</span>
                  <span>KSh 500M</span>
                </div>
                <div className="text-center text-slate-600 mt-1">
                  ≈ {formatUSD(investment)}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Expected Annual Yield (%)
                </label>
                <input
                  type="range"
                  min="8"
                  max="25"
                  step="0.5"
                  value={yield_}
                  onChange={(e) => setYield(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>8%</span>
                  <span className="font-medium text-slate-900">{yield_}%</span>
                  <span>25%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Investment Period (Years)
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={period}
                  onChange={(e) => setPeriod(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>1 Year</span>
                  <span className="font-medium text-slate-900">{period} Years</span>
                  <span>15 Years</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200/50">
              <h2 className="text-2xl font-light text-slate-900 mb-8">Projected Returns</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                  <DollarSign className="h-8 w-8 text-slate-600 mx-auto mb-3" />
                  <div className="text-2xl font-light text-slate-900 mb-1">
                    {formatCurrency(results.monthlyIncome)}
                  </div>
                  <div className="text-sm text-slate-600">Monthly Income</div>
                  <div className="text-xs text-slate-500 mt-1">
                    ≈ {formatUSD(results.monthlyIncome)}
                  </div>
                </div>

                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                  <TrendingUp className="h-8 w-8 text-slate-600 mx-auto mb-3" />
                  <div className="text-2xl font-light text-slate-900 mb-1">
                    {formatCurrency(results.annualIncome)}
                  </div>
                  <div className="text-sm text-slate-600">Annual Income</div>
                  <div className="text-xs text-slate-500 mt-1">
                    ≈ {formatUSD(results.annualIncome)}
                  </div>
                </div>

                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                  <PieChart className="h-8 w-8 text-slate-600 mx-auto mb-3" />
                  <div className="text-2xl font-light text-slate-900 mb-1">
                    {formatCurrency(results.totalReturn)}
                  </div>
                  <div className="text-sm text-slate-600">Total Returns</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Over {period} years
                  </div>
                </div>

                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                  <BarChart3 className="h-8 w-8 text-slate-600 mx-auto mb-3" />
                  <div className="text-2xl font-light text-slate-900 mb-1">
                    {formatCurrency(results.totalValue)}
                  </div>
                  <div className="text-sm text-slate-600">Total Value</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Investment + Returns
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-light mb-4">Ready to Invest?</h3>
              <p className="text-slate-300 mb-6 font-light">
                These projections are based on current market conditions. Contact our investment team for personalized analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-white text-slate-900 py-3 px-6 rounded-2xl font-medium hover:bg-slate-100 transition-colors">
                  Schedule Consultation
                </button>
                <button className="flex items-center justify-center border border-slate-600 text-white py-3 px-6 rounded-2xl font-medium hover:bg-slate-800 transition-colors">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;