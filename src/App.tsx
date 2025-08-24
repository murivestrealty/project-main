import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './app/layout';
import HomePage from './app/home/page';
import AboutPage from './components/About';
import PropertiesPage from './components/Properties';
import ContactPage from './components/Contact';
import BlogPage from './components/Blog';
import BlogPost from './components/BlogPost';
import Dashboard from './components/Dashboard';
import PropertyDetail from './components/PropertyDetail';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './app/not-found';

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