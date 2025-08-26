import React, { useState } from 'react';
import { Plus, Users, Award, DollarSign, Target, Eye, Edit } from 'lucide-react';
import { StaffMember } from '../types';
import DashboardModals from '../DashboardModals';
import { formatCurrency } from '../utils';

interface StaffManagementProps {
  staffData: StaffMember[];
}

const StaffManagement: React.FC<StaffManagementProps> = ({ staffData }) => {
  const [modals, setModals] = useState({ addStaff: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Staff Management</h2>
          <p className="text-gray-600 mt-1">Manage team members, performance, and permissions</p>
        </div>
        <button
          onClick={() => setModals(prev => ({ ...prev, addStaff: true }))}
          className="flex items-center bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Staff Member
        </button>
      </div>

      {/* Staff Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg mr-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Total Staff</h3>
              <p className="text-blue-600 text-2xl font-bold">{staffData.length}</p>
            </div>
          </div>
          <div className="text-green-600 text-sm">All active</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg mr-3">
              <Award className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Top Performers</h3>
              <p className="text-green-600 text-2xl font-bold">
                {staffData.filter(s => s.performance?.rating === 'excellent').length}
              </p>
            </div>
          </div>
          <div className="text-green-600 text-sm">Excellent rating</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg mr-3">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Commissions</h3>
              <p className="text-purple-600 text-2xl font-bold">
                {formatCurrency(staffData.reduce((sum, s) => sum + (s.commission?.earned || 0), 0))}
              </p>
            </div>
          </div>
          <div className="text-purple-600 text-sm">This month</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-3 rounded-lg mr-3">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Target Achievement</h3>
              <p className="text-orange-600 text-2xl font-bold">84%</p>
            </div>
          </div>
          <div className="text-green-600 text-sm">Above average</div>
        </div>
      </div>

      {/* Staff List */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Team Members</h3>
        <div className="space-y-4">
          {staffData.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.displayName?.charAt(0) || 'U'}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{member.displayName}</h4>
                  <p className="text-gray-600">{member.email}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      member.role === 'sales' ? 'bg-blue-100 text-blue-800' :
                      member.role === 'marketing' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {member.department}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      member.performance?.rating === 'excellent' ? 'bg-green-100 text-green-800' :
                      member.performance?.rating === 'good' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {member.performance?.rating}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Sales Target</p>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(member.performance?.salesTarget || 0)}</p>
                  <p className="text-sm text-green-600">{formatCurrency(member.performance?.salesAchieved || 0)} achieved</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Commission</p>
                  <p className="text-lg font-bold text-purple-600">{formatCurrency(member.commission?.earned || 0)}</p>
                  <p className="text-sm text-gray-500">This month</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-3 text-blue-600 hover:bg-blue-100 rounded-xl transition-colors">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button className="p-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                    <Edit className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DashboardModals modals={modals} setModals={setModals} />
    </div>
  );
};

export default StaffManagement;