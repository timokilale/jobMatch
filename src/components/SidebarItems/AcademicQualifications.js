import React, { useState, useEffect } from 'react';
import AcademicQualificationsLogic from '../../hooks/AcademicQualifications';


const AcademicQualifications = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    formData,
    handleChange,
    handleSubmit,
    qualifications,
    handleEdit,
    handleDelete,
  } = AcademicQualificationsLogic(setShowForm)


  const handleSave = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setShowForm(false);
  };

  useEffect(() => {
    if (qualifications.length === 0) {
      setShowForm(true);
    }
  }, [qualifications]);

  return (
    <div className="p-8 min-h-screen flex flex-col overflow-y-auto">
      {showForm ? (
        <>
        <h1 className="text-xl font-bold text-green-800 mt-12">Add New Academic Qualification</h1>

        <form onSubmit={handleSave} className="space-y-6 flex-1 mt-16">
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
              max={new Date().toISOString().split('T')[0]}
              className="w-full p-2 border border-green-300 rounded-md   focus:border-green-500 focus:outline-none"
              required
            />
            <p className="text-xs text-gray-500">Start date cannot be in the future</p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-800">End date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              min={formData.startDate}
              max={new Date().toISOString().split('T')[0]}
              className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
            />
            <p className="text-xs text-gray-500">End date cannot be in the future or before start date</p>
          </div>
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-green-800">
            Attach your certificate (optional, max size 2MB) *
          </label>
          <div className="relative">
            <input 
              type="file"
              className="absolute opacity-0 w-full h-full cursor-pointer"
              id="certificate-upload"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              name="certificate"
            />
            <div className="flex items-center gap-2 p-2 border border-green-300 rounded-md">
              <span className="px-4 py-2  bg-green-100 text-green-800 rounded-md">
                Choose File
              </span>
              <span className="text-gray-500">
                {formData.certificate?.name || " No file chosen"}</span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 mr-6 text-white rounded-md hover:bg-green-800 transition-colors"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="px-6 py-2 border border-green-700 ml-4 text-green-700 rounded-md hover:bg-green-50 transition-colors mr-4"
          >
            Cancel
          </button>
        </div>
        </div>
      </form>
    </>
      ) : (
        <>
      {qualifications.length > 0 && (
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-green-800 mt-8">Academic Qualifications</h2>
          </div>
          
          <div className="overflow-x-auto h-full">
            <table className="w-full bg-transparent shadow-md">
              <thead className="bg-green-50">
                <tr>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Education Level</th>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Country</th>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Institution</th>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Program</th>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Time Period</th>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Certificate</th>
                  <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {qualifications.map((qualification, index) => (
                  <tr key={index} className="hover:bg-green-50">
                    <td className="p-3 text-sm text-green-800 border border-green-200">{qualification.level}</td>
                    <td className="p-3 text-sm text-green-800 border border-green-200">{qualification.country}</td>
                    <td className="p-3 text-sm text-green-800 border border-green-200">{qualification.institution}</td>
                    <td className="p-3 text-sm text-green-800 border border-green-200">{qualification.fieldOfStudy}</td>
                    <td className="p-3 text-sm text-green-800 border border-green-200 whitespace-nowrap">
                      {new Date(qualification.startDate).toLocaleDateString()} - 
                      {qualification.endDate ? new Date(qualification.endDate).toDateString() : 'Present'}
                    </td>
                    <td className="p-3 text-sm text-green-800 border border-green-200" >
                      <a 
                        href={qualification.certificate} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-green-600 hover:underline"
                      >
                        View Certificate
                      </a>
                    </td>
                    <td className="p-3 text-sm text-green-800 border border-green-200">
                      <button 
                        onClick={() => handleEdit(qualification)}
                        className="text-gray-600 mr-4"
                      >
                          <i className="fas fa-pen"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(qualification.id)}
                        className="text-green-600 "
                      >
                        <i className="fas fa-trash"></i>
                      </button>               
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
         <button
            onClick={() => setShowForm(true)}
            className="fixed bottom-8 right-8 w-14 h-14 bg-green-600 text-white rounded-full hover:bg-green-700 transition shadow-lg flex items-center justify-center text-2xl"
          >
            <i className="fas fa-plus"></i>
          </button>
          </>
      )}
    </div>
  );
};

export default AcademicQualifications;