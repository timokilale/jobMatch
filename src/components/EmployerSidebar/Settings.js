import React, { useState } from 'react';

export const Settings = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    website: '',
    notifications: true
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Company Settings</h2>
      
      <div className="max-w-3xl space-y-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Company Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">Company Logo</label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="fas fa-building text-green-600 text-xl"></i>
                </div>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Upload New Logo
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">Company Name</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">Website</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Security</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">Change Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
  export default Settings;