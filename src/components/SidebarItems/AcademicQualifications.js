import React from 'react';

const AcademicQualifications = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold text-green-800 mb-6">Add New Academic Qualification</h1>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Level */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Education Level *</label>
            <select 
              className="w-full p-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">--Select--</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>PhD</option>
            </select>
          </div>

          {/* Country */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Country *</label>
            <select 
              className="w-full p-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">Tanzania, United Republic of</option>
            </select>
          </div>

          {/* Institution Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Institution Name *</label>
            <select 
              className="w-full p-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">--Select--</option>
              <option>University of Dar es Salaam</option>
              <option>Nelson Mandela African Institution of Science and Technology</option>
            </select>
          </div>
        </div>

        {/* Programme Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Programme Category *</label>
            <select 
              className="w-full p-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">--Select--</option>
              <option>Science & Technology</option>
              <option>Business & Economics</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Programme Name *</label>
            <input
              type="text"
              className="w-full p-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
        </div>

        {/* Date Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Date From *</label>
            <input
              type="date"
              className="w-full p-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Date To *</label>
            <input
              type="date"
              className="w-full p-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-green-800">
            Attach your certificate (max size 2MB) *
          </label>
          <div className="relative">
            <input 
              type="file"
              className="absolute opacity-0 w-full h-full cursor-pointer"
              id="certificate-upload"
              accept=".pdf,.doc,.docx"
              required
            />
            <div className="flex items-center gap-2 p-2 border border-green-300 rounded-md">
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-md">
                Choose File
              </span>
              <span className="text-gray-500">No file chosen</span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcademicQualifications;