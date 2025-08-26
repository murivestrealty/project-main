import React, { useState } from 'react';
import { Users, CheckCircle, DollarSign, UserPlus, Download } from 'lucide-react';
import { Customer } from '../types';
import DashboardModals from '../DashboardModals';
import { formatCurrency } from '../utils';

interface CustomerManagementProps {
  customers: Customer[];
}

const CustomerManagement: React.FC<CustomerManagementProps> = ({ customers }) => {
  const [modals, setModals] = useState({ addCustomer: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Customer Management</h2>
          <p className="text-gray-600 mt-1">Comprehensive customer database and portfolio management</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setModals(prev => ({ ...prev, addCustomer: true }))}
            className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <UserPlus className="h-5 w-5 mr-2" />
            Add Customer
          </button>
          <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Customer Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg mr-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Total Customers</h3>
              <p className="text-blue-600 text-2xl font-bold">{customers.length}</p>
            </div>
          </div>
          <div className="text-green-600 text-sm">+12 this month</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg mr-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Verified KYC</h3>
              <p className="text-green-600 text-2xl font-bold">
                {customers.filter(c => c.kycStatus === 'verified').length}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
                {customers.filter(c => c.kycStatus === 'pending').length} pending
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg mr-3">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Total Invested</h3>
              <p className="text-purple-600 text-2xl font-bold">
                {formatCurrency(customers.reduce((sum, c) => sum + c.totalInvestment, 0))}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-sm">Across all properties</div>
        </div>
      </div>
      <DashboardModals modals={modals} setModals={setModals} />
    </div>
  );
};

export default CustomerManagement;