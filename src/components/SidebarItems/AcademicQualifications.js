import React, { useState } from 'react';
import AcademicQualificationsLogic from '../../hooks/AcademicQualifications';


const AcademicQualifications = () => {
  const { formData, handleChange, handleSubmit, qualifications } = AcademicQualificationsLogic();
  const [showForm, setShowForm] = useState(qualifications.length === 0);

  const handleSave = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setShowForm(false);
  };

  return (
    <div className="p-8">

      {showForm && (
        <h1 className="text-xl font-bold text-green-800 mb-6">Add New Academic Qualification</h1>
      )}
      {!showForm && qualifications.length > 0 && (
        <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          <i className="fas fa-plus"></i>
          Add New Qualification
        </button>
        </div>
      )}

      {showForm && (
      <form onSubmit={handleSave} className="space-y-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Education Level */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Education Level *</label>
            <select 
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md  focus:border-green-600 focus:outline-none"
              required
            >
              <option value="">--Select--</option>
              <option>PhD</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>Post Graduate Diploma</option>
              <option>Advanced Diploma</option>
              <option>Diploma</option>
              <option>Full Technician certificate</option>
              <option>Higher Diploma</option>
              <option>Basic Technician Diploma</option>
              <option>Ordinary Diploma</option>
              <option>Certificate</option>
              <option>Advanced certificate</option>
              <option>Advanced Level (ACSE)</option>
              <option>Ordinary Level (CSE)</option>
            </select>
          </div>

          {/* Country */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Country *</label>
            <input
              type="text" 
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md  focus:border-green-500 focus:outline-none"
              defaultValue="Tanzania, United Republic of"
              required
            />    
          </div>


        {/* Programme Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Institution Name *</label>
            <input
              type="text" 
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md  focus:border-green-500 focus:outline-none"
              required
            />    
         </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Programme Name *</label>
            <input
              type="text"
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md  focus:border-green-500 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Date Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">Start date *</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md   focus:border-green-500 focus:outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">End date *</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
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
            />
            <div className="flex items-center gap-2 p-2 border border-green-300 rounded-md">
              <span className="px-4 py-2  bg-green-100 text-green-800 rounded-md">
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
        </div>
      </form>
      )}

       {/* Qualifications Table */}
       {qualifications.length > 0 && (
        <div className=" mt-8">
          <h2 className="text-lg font-bold text-green-800 mb-4">Academic Qualifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-green-300 rounded-md shadow-md">
              <thead className="bg-green-50">
                <tr>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Education Level</th>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Country</th>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Institution</th>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Program</th>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Time Period</th>
                </tr>
              </thead>
              <tbody>
                {qualifications.map((qualification, index) => (
                  <tr key={index} className="hover:bg-green-50">
                    <td className="p-3 text-sm text-green-800 border border-green-200">{qualification.educationLevel}</td>
                    <td className="p-3 text-sm text-green-800 border border-green-200">{qualification.country}</td>
                    <td className="p-3 text-sm text-green-800 border border-green-200">{qualification.institution}</td>
                    <td className="p-3 text-sm text-green-800 border border-green-200">{qualification.program}</td>
                    <td className="p-3 text-sm text-green-800 border border-green-200">{qualification.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicQualifications;