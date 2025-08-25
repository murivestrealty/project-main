import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './app/layout';
import HomePage from './app/home/page';
import InvestmentCalculator from './app/calculator/page';
import AboutPage from './components/About';
import PropertiesPage from './components/Properties';
import ContactPage from './components/Contact';
import BlogPage from './components/Blog';
import BlogPost from './components/BlogPost';
import Dashboard from './components/Dashboard';
import PropertyDetail from './components/PropertyDetail';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './app/not-found';
import ExecutiveLeadership from './app/leeadership/page';
import MarketIntelligence from './app/market/page';
import InvestmentProcess from './components/sections/InvestmentProcess';
import InvestorLogin from './app/investor/page';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/calculator" element={<InvestmentCalculator />} />
          <Route path="/leadership" element={<ExecutiveLeadership />} />
          <Route path="/market" element={<MarketIntelligence />} />
          <Route path="/process" element={<InvestmentProcess />} />
          <Route path="/investor" element={<InvestorLogin />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;