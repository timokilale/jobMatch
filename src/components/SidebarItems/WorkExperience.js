import React from 'react';

const WorkExperience = () => {
  return (
    <div className="p-8 min-h-screen flex flex-col">
      <h1 className="text-xl font-bold text-green-800 mb-6">Work Experience</h1>

      <form className="space-y-6 flex-1">
        {/* Institution Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Institution/Organization */}
          <div className="space-y-4">
          <label className="block text-sm font-medium text-green-800">Institution/ Organization*</label>
            <input
              type="text"
              className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
              required
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-800">Job Title *</label>
              <input
                type="text"
                className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-800">Supervisor Name *</label>
              <input
                type="text"
                className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-800">Supervisor Telephone Number *</label>
              <input
                type="text"
                className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-800">Supervisor Address *</label>
              <textarea
                rows="2"
                className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Institution Address */}
          <div className="space-y-4">
          <label className="block text-sm font-medium text-green-800">Institution Address *</label>
            <textarea
              rows="2"
              className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
              required
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-800">Duties Responsibilities *</label>
              <textarea
                rows="4"
                className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            
            {/* Date Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-green-800">Start Date *</label>
                <input
                  type="date"
                  className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-green-800">End Date *</label>
                <input
                  type="date"
                  className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkExperience;