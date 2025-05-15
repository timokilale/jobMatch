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
    <div className="p-6">
      <div className=" p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-green-800 mb-6">Language Proficiency</h1>

        {showForm ? (
        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-32">
          
          {/* Language Dropdown */}
          <div className="flex flex-col">
            <label className="text-green-800 font-semibold mb-2">Language</label>
            <select 
              className="p-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500"
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

          {/* Speak, Read, Write Sections */}
          <div className="flex flex-col space-y-4">
            {['Speak', 'Read', 'Write'].map((lang) => (
              <div key={lang}>
                <h3 className="font-semibold text-green-800 mb-2">{lang}</h3>
                <div className="flex space-x-6">
                {['Very Good', 'Good', 'Fair'].map((level) => (
                  <label key={`${lang}-${level}`} className="flex items-center space-x-1">
                    <input 
                      type="radio"
                      name={lang.toLowerCase()}
                      value={level}
                      checked={proficiencies[lang.toLowerCase()] === level}
                      onChange={() => handleProficiencyChange(lang.toLowerCase(), level)}
                      required
                      className="h-4 w-4" />
                    <span>{level}</span>
                  </label>
                ))}
              </div>
            </div>
            ))}
          </div>

          <div className="md:col-span-2 flex space-x-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              {editId ? 'Update' : 'Add Language'}
            </button>
            <button
              type="button"
              onClick={clearForm}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md transition-colors"
            >
              cancel
            </button>
          </div>
        </form>
      ) : (
        <>
        {savedLanguages.length > 0 && (
          <div className="mt-4">
            <table className="w-full border-collapse border border-green-200">
              <thead>
                <tr className="bg-green-100 text-green-800">
                  <th className="p-2 border border-green-200">Language</th>
                  <th className="p-2 border border-green-200">Speak</th>
                  <th className="p-2 border border-green-200">Read</th>
                  <th className="p-2 border border-green-200">Write</th>
                  <th className="p-2 border border-green-200">Actions</th>
                </tr>
              </thead>
              <tbody>
              {savedLanguages.map((lang, index) => (
                  <tr key={index} className="even:bg-green-50">
                    <td className="p-2 border border-green-200">{lang.language}</td>
                    <td className="p-2 border border-green-200">{lang.speak}</td>
                    <td className="p-2 border border-green-200">{lang.read}</td>
                    <td className="p-2 border border-green-200">{lang.write}</td>
                    <td className="p-2 border border-green-200 min-w-[120px] space-x-2">
                      <button 
                        onClick={() => handleEdit(lang)} 
                        className="text-gray-600 mr-4"
                      >
                        <i className="fas fa-pen"></i>
                      </button>
                      <button 
                        onClick={() => handleDelete(lang.id)} 
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
    </div>
  );
};

export default LanguageProficiency;
