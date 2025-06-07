import React, { useState, useEffect } from 'react';
import LanguageProficiencyLogic from '../../hooks/Language';

const LanguageProficiency = () => {
  const languages = [
    "English", "Spanish", "French", "German", "Chinese", "Japanese",
    "Korean", "Arabic", "Portuguese", "Russian", "Hindi", "Bengali",
    "Italian", "Dutch", "Swedish", "Greek", "Turkish", "Polish",
    "Vietnamese", "Thai", "Hebrew", "Malay", "Swahili"
  ];

  const {
    currentLanguage,
    setCurrentLanguage,
    proficiencies,
    handleProficiencyChange,
    handleSave,
    savedLanguages,
    handleEdit,
    handleDelete,
    showForm,
    setShowForm,
    clearForm,
    editId,
  } = LanguageProficiencyLogic();

  useEffect(() => {
    if (savedLanguages.length === 0) {
      setShowForm(true);
    }
  }, [savedLanguages, setShowForm]);

  
  return (
    <div className="p-6 flex flex-col min-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-green-800">Language Proficiency</h1>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
            >
              <i className="fas fa-plus"></i>
              Add Language
            </button>
          )}
        </div>

        {showForm ? (
        <div className="bg-white border border-green-200 rounded-lg p-6 mb-6">
          <form onSubmit={handleSave} className="space-y-6">

            {/* Language Dropdown */}
            <div className="flex flex-col">
              <label className="text-green-800 font-semibold mb-2">Language</label>
              <select
                className="p-3 border border-green-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                required
                >
                <option value="">Select Language</option>
                {languages.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Proficiency Levels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Speak', 'Read', 'Write'].map((skill) => (
                <div key={skill} className="space-y-3">
                  <h3 className="font-semibold text-green-800">{skill}</h3>
                  <div className="space-y-2">
                    {['Native', 'Fluent', 'Conversational', 'Basic'].map((level) => (
                      <label key={`${skill}-${level}`} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name={skill.toLowerCase()}
                          value={level}
                          checked={proficiencies[skill.toLowerCase()] === level}
                          onChange={() => handleProficiencyChange(skill.toLowerCase(), level)}
                          required
                          className="h-4 w-4 text-green-600 focus:ring-green-500" />
                        <span className="text-sm text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 pt-4 border-t border-gray-200">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors flex items-center gap-2"
              >
                <i className="fas fa-save"></i>
                {editId ? 'Update Language' : 'Add Language'}
              </button>
              <button
                type="button"
                onClick={clearForm}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md transition-colors flex items-center gap-2"
              >
                <i className="fas fa-times"></i>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
        {savedLanguages.length > 0 ? (
          <div className="mb-6">
            <table className="w-full border-collapse border border-green-200">
              <thead>
                <tr className="bg-green-100 text-green-800">
                  <th className="p-3 border border-green-200 text-left">Language</th>
                  <th className="p-3 border border-green-200 text-left">Speak</th>
                  <th className="p-3 border border-green-200 text-left">Read</th>
                  <th className="p-3 border border-green-200 text-left">Write</th>
                  <th className="p-3 border border-green-200 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
              {savedLanguages.map((lang, index) => (
                  <tr key={index} className="even:bg-green-50 hover:bg-green-100">
                    <td className="p-3 border border-green-200 font-medium">{lang.language}</td>
                    <td className="p-3 border border-green-200">{lang.speakLevel || lang.speak}</td>
                    <td className="p-3 border border-green-200">{lang.readLevel || lang.read}</td>
                    <td className="p-3 border border-green-200">{lang.writeLevel || lang.write}</td>
                    <td className="p-3 border border-green-200 text-center">
                      <div className="flex justify-center items-center space-x-3">
                        <button
                          onClick={() => handleEdit(lang)}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          title="Edit"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={() => handleDelete(lang.id)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                          title="Delete"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-4">
              <img src="/logo.png" alt="Job Match" className="mx-auto h-16 w-16 opacity-50" />
            </div>
            <p className="text-gray-500 text-lg">No language proficiencies added yet</p>
            <p className="text-gray-400 text-sm mt-2">Click "Add Language" to get started</p>
          </div>
        )}
         </>
      )}
    </div>
  );
};

export default LanguageProficiency;
