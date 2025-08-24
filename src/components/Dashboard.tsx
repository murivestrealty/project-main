import React, { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Home, 
  FileText, 
  Settings, 
  LogOut,
  DollarSign,
  Calendar,
  Download,
  Eye,
  BarChart3,
  PieChart,
  Building,
  Wallet
} from 'lucide-react';
import { useAuth } from './contexts/AuthContext';

const Dashboard = () => {
  const { currentUser, userData, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  // Mock data - in a real app, this would come from Firebase
  const portfolioData = {
    totalInvestment: 45000000,
    currentValue: 52000000,
    totalYield: 15.6,
    monthlyIncome: 468750,
    properties: [
      {
        id: 1,
        name: "Premium CBD Office Complex",
        type: "Commercial",
        investment: 45000000,
        currentValue: 52000000,
        monthlyIncome: 468750,
        yield: 12.5,
        purchaseDate: "2023-06-15",
        documents: ["Purchase Agreement", "Title Deed", "Insurance Policy", "Property Management Agreement"]
      }
    ],
    recentTransactions: [
      { date: "2024-12-01", type: "Rental Income", amount: 468750, property: "Premium CBD Office Complex" },
      { date: "2024-11-01", type: "Rental Income", amount: 468750, property: "Premium CBD Office Complex" },
      { date: "2024-10-01", type: "Rental Income", amount: 468750, property: "Premium CBD Office Complex" }
    ]
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'properties', label: 'My Properties', icon: Building },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'transactions', label: 'Transactions', icon: Wallet },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gold-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-gold-600" />
            </div>
            <span className="text-green-500 text-sm font-elegant font-semibold">+15.6%</span>
          </div>
          <h3 className="text-2xl font-luxury font-bold text-navy-900 mb-1">
            {formatCurrency(portfolioData.totalInvestment)}
          </h3>
          <p className="text-gray-600 font-elegant text-sm">Total Investment</p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-green-500 text-sm font-elegant font-semibold">+12.5%</span>
          </div>
          <h3 className="text-2xl font-luxury font-bold text-navy-900 mb-1">
            {formatCurrency(portfolioData.currentValue)}
          </h3>
          <p className="text-gray-600 font-elegant text-sm">Current Value</p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <PieChart className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-green-500 text-sm font-elegant font-semibold">Excellent</span>
          </div>
          <h3 className="text-2xl font-luxury font-bold text-navy-900 mb-1">
            {portfolioData.totalYield}%
          </h3>
          <p className="text-gray-600 font-elegant text-sm">Annual Yield</p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-green-500 text-sm font-elegant font-semibold">Monthly</span>
          </div>
          <h3 className="text-2xl font-luxury font-bold text-navy-900 mb-1">
            {formatCurrency(portfolioData.monthlyIncome)}
          </h3>
          <p className="text-gray-600 font-elegant text-sm">Monthly Income</p>
        </motion.div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-luxury font-bold text-navy-900 mb-6">Recent Transactions</h3>
        <div className="space-y-4">
          {portfolioData.recentTransactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-elegant font-semibold text-navy-900">{transaction.type}</p>
                  <p className="text-gray-600 font-elegant text-sm">{transaction.property}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-luxury font-bold text-green-600">+{formatCurrency(transaction.amount)}</p>
                <p className="text-gray-500 font-elegant text-sm">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="space-y-6">
      {portfolioData.properties.map((property) => (
        <motion.div
          key={property.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-luxury font-bold text-navy-900 mb-1">{property.name}</h3>
                <p className="text-gray-600 font-elegant">{property.type}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-luxury font-bold text-gold-600">{property.yield}%</p>
                <p className="text-gray-600 font-elegant text-sm">Annual Yield</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-600 font-elegant text-sm mb-1">Investment</p>
                <p className="font-luxury font-bold text-navy-900">{formatCurrency(property.investment)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-600 font-elegant text-sm mb-1">Current Value</p>
                <p className="font-luxury font-bold text-navy-900">{formatCurrency(property.currentValue)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-600 font-elegant text-sm mb-1">Monthly Income</p>
                <p className="font-luxury font-bold text-navy-900">{formatCurrency(property.monthlyIncome)}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-gray-600 font-elegant text-sm">
                Purchased: {new Date(property.purchaseDate).toLocaleDateString()}
              </p>
              <button className="bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg font-elegant font-semibold transition-colors">
                View Details
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderDocuments = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-luxury font-bold text-navy-900 mb-6">Property Documents</h3>
      <div className="space-y-4">
        {portfolioData.properties[0].documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-elegant font-semibold text-navy-900">{doc}</p>
                <p className="text-gray-600 font-elegant text-sm">Premium CBD Office Complex</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
                <Eye className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-2 bg-gold-100 hover:bg-gold-200 rounded-lg transition-colors">
                <Download className="h-4 w-4 text-gold-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'properties':
        return renderProperties();
      case 'documents':
        return renderDocuments();
      case 'transactions':
        return renderOverview(); // Reuse for now
      case 'settings':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-luxury font-bold text-navy-900 mb-6">Account Settings</h3>
            <p className="text-gray-600 font-elegant">Settings panel coming soon...</p>
          </div>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-luxury font-bold text-navy-900 mb-2">
                Welcome back, {userData?.displayName || currentUser?.displayName}
              </h1>
              <p className="text-gray-600 font-elegant text-lg">
                Here's your investment portfolio overview
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-elegant font-semibold transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl font-elegant font-medium transition-all ${
                      activeTab === item.id
                        ? 'bg-gold-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;