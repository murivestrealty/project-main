import React, { useState } from 'react';
import DashboardShell from './DashboardShell';
import StaffManagement from './sections/StaffManagement';
import ReportsAndAnalytics from './sections/ReportsAndAnalytics';
import SystemSettings from './sections/SystemSettings';
import MarketingCenter from './sections/MarketingCenter';
import CustomerManagement from './sections/CustomerManagement';
import { dashboardData, menuItems } from './data';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'staff':
        return <StaffManagement staffData={dashboardData.staff} />;
      case 'reports':
        return <ReportsAndAnalytics />;
      case 'settings':
        return <SystemSettings />;
      case 'marketing':
        return <MarketingCenter campaigns={dashboardData.campaigns} />;
      case 'customers':
        return <CustomerManagement customers={dashboardData.customers} />;
      default:
        // You can create a dedicated Overview component here
        return <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="text-gray-600 mt-2">Welcome to your Admin Dashboard. Select a tab from the sidebar to begin.</p>
        </div>;
    }
  };

  return (
    <DashboardShell
      menuItems={menuItems}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      notifications={dashboardData.notifications}
    >
      {renderContent()}
    </DashboardShell>
  );
};

export default AdminDashboard;