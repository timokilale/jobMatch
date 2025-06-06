import React from 'react';
import { useEffect } from 'react';
import useWork from '../../hooks/Work';

const WorkExperience = () => {
const {
        showForm,
        setShowForm,
        formData,
        setFormData,
        handleChange,
        handleSave,
        handleEdit,
        handleDelete,
        savedWorkExperience
} = useWork();

useEffect(() => {
  if (savedWorkExperience.length === 0) {
    setShowForm(true);
  }
}, [savedWorkExperience, setShowForm]);


const formatDate = (isoDate) => {
  if (!isoDate) return '';
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};


  return (
    <div className="p-8 min-h-screen flex flex-col overflow-y-auto">
      <h1 className="text-xl font-bold text-green-800 mt-14">Work Experience</h1>

      {showForm ? (
      <form onSubmit={handleSave} className="space-y-6 flex-1">
        {/* Institution Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Institution/Organization */}
          <div className="space-y-4">
          <label className="block text-sm font-medium text-green-800">Institution/ Organization*</label>
            <input
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              type="text"
              className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
              required
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-800">Job Title *</label>
              <input
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                type="text"
                className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-800">Supervisor Name *</label>
              <input
                name="supervisorName"
                value={formData.supervisorName}
                onChange={handleChange}
                type="text"
                className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-800">Supervisor Telephone Number *</label>
              <input
                name="supervisorTel"
                value={formData.supervisorTel}
                onChange={handleChange}
                type="text"
                className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-800">Supervisor Address *</label>
              <textarea
                name="supervisorAddress"
                value={formData.supervisorAddress}
                onChange={handleChange}
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
              name="institutionAddress"
              value={formData.institutionAddress}
              onChange={handleChange}
              rows="2"
              className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
              required
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-800">Duties Responsibilities *</label>
              <textarea
                name="duties"
                value={formData.duties}
                onChange={handleChange}
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
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  type="date"
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                  required
                />
                <p className="text-xs text-gray-500">Start date cannot be in the future</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-green-800">End Date</label>
                <input
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  type="date"
                  min={formData.startDate}
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full p-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
                />
                <p className="text-xs text-gray-500">Leave empty if current job. End date cannot be in the future or before start date</p>
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
          <button
            type="button"
            onClick={() => {
            setShowForm(false);
            setFormData({
              institution: '',
              jobTitle: '',
              supervisorName: '',
              supervisorTel: '',
              supervisorAddress: '',
              institutionAddress: '',
              duties: '',
              startDate: '',
              endDate: '',
            });
          }}
           className="ml-4 bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
          >
           Cancel
         </button>
        </div>
      </form>
      ) : (
        <>
          {savedWorkExperience.length > 0 && (
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
              </div>
              <div className="overflow-x-auto">
                <table className="w-full bg-transparent shadow-md">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Institution</th>
                      <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Address</th>
                      <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Job Title</th>
                      <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Duties</th>
                      <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Duration</th>
                      <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Supervisor</th>
                      <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Supervisor Contact</th>
                      <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Supervisor Adress</th>
                      <th className="p-3 text-sm font-semibold text-green-800 border border-green-200">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedWorkExperience.map((exp, index) => (
                      <tr key={index} className="hover:bg-green-50">
                        <td className="p-3 text-sm text-green-800 border border-green-200">{exp.institution}</td>
                        <td className="p-3 text-sm text-green-800 border border-green-200">{exp.institutionAddress}</td>
                        <td className="p-3 text-sm text-green-800 border border-green-200">{exp.jobTitle}</td>
                        <td className="p-3 text-sm text-green-800 border border-green-200">{exp.duties}</td>
                        <td className="p-3 text-sm text-green-800 border border-green-200">
                            {`${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`}
                        </td>
                        <td className="p-3 text-sm text-green-800 border border-green-200">{exp.supervisorName}</td>
                        <td className="p-3 text-sm text-green-800 border border-green-200">{exp.supervisorTel}</td>
                        <td className="p-3 text-sm text-green-800 border border-green-200">{exp.supervisorAddress}</td>
                        <td className="p-3 text-sm text-green-800 border border-green-200 text-center">
                          <button
                            onClick={() => handleEdit(exp)}
                            className="text-gray-600 mr-4"
                          >
                            <i className="fas fa-pen"></i>
                          </button>
                          <button
                            onClick={() => handleDelete(exp.id)}
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

export default WorkExperience;