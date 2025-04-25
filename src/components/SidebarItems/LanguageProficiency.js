import React from 'react';

const LanguageProficiency = () => {
  const languages = [
    "English", "Spanish", "French", "German", "Chinese", "Japanese",
    "Korean", "Arabic", "Portuguese", "Russian", "Hindi", "Bengali",
    "Italian", "Dutch", "Swedish", "Greek", "Turkish", "Polish",
    "Vietnamese", "Thai", "Hebrew", "Malay", "Swahili"
  ];


  return (
    <div className="p-6">
      <div className=" p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-green-800 mb-6">Language Proficiency</h1>

        {/* Form Grid */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Language Dropdown */}
          <div className="flex flex-col">
            <label className="text-green-800 font-semibold mb-2">Language</label>
            <select className="p-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500">
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          {/* Speak, Read, Write Sections */}
          <div className="flex flex-col space-y-4">
            {['Speak', 'Read', 'Write'].map((skill) => (
              <div key={skill}>
                <h3 className="font-semibold text-green-800 mb-2">Speak</h3>
                <div className="flex space-x-6">
                {['Very Good', 'Good', 'Fair'].map((level) => (
                  <label key={`${skill}-${level}`} className="flex items-center space-x-1">
                    <input type="radio" name={skill.toLowerCase()} className="h-4 w-4" />
                    <span>{level}</span>
                  </label>
                ))}
              </div>
            </div>
            ))}
          </div>
        </form>

        {/* Save Button */}
        <div className="mt-6">
          <button 
            type="submit" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageProficiency;
