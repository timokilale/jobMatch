import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import api from '../../api/api';

export const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/employer/analytics/overview');
      setAnalyticsData(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching analytics:', err);
      setError('Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="text-center py-8">
          <i className="fas fa-exclamation-triangle text-4xl text-red-400 mb-4"></i>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Error Loading Analytics</h3>
          <p className="text-sm text-gray-500 mb-4">{error}</p>
          <button
            onClick={fetchAnalyticsData}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <i className="fas fa-sync-alt mr-2"></i>
            Retry
          </button>
        </div>
      </div>
    );
  }

  const { overview, chartData } = analyticsData || {};
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Performance Analytics</h2>
        <button
          onClick={fetchAnalyticsData}
          className="text-green-600 hover:text-green-700 transition-colors"
          title="Refresh data"
        >
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Applications Timeline</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="applications"
                  stroke="#16a34a"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Monthly Applications</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="applications" fill="#86efac" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-600">Total Applications</p>
          <p className="text-2xl font-bold">{overview?.totalApplications || 0}</p>
          <p className="text-xs text-green-500 mt-1">
            {overview?.newApplications || 0} new this month
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-600">Interview Rate</p>
          <p className="text-2xl font-bold">{overview?.interviewRate || 0}%</p>
          <p className="text-xs text-green-500 mt-1">
            {overview?.interviewingApplications || 0} interviewing
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-600">Acceptance Rate</p>
          <p className="text-2xl font-bold">{overview?.acceptanceRate || 0}%</p>
          <p className="text-xs text-green-500 mt-1">
            Based on all applications
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-600">Active Jobs</p>
          <p className="text-2xl font-bold">{overview?.activeJobs || 0}</p>
          <p className="text-xs text-green-500 mt-1">
            {overview?.totalJobs || 0} total posted
          </p>
        </div>
      </div>
    </div>
  );
};
  export default Analytics;