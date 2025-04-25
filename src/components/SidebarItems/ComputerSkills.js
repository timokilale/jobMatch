import React from 'react';

const ComputerSkills = () => {
  const computerSkills = [
    "Excel", "PowerPoint", "Word", "Access", "OneNote", "Publisher", "Other"
  ];

  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-green-800 mb-6">Computer Skills</h1>

        {/* Form Grid */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Skill Dropdown */}
          <div className="flex flex-col">
            <label className="text-green-800 font-semibold mb-2">Skill</label>
            <select className="p-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500">
              {computerSkills.map((skill) => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          {/* Rating Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-green-800 mb-2">Rate Your Skill</h3>
            <div className="flex space-x-6">
              {['Very Good', 'Good', 'Fair'].map((level) => (
                <label key={level} className="flex items-center space-x-1">
                  <input type="radio" name="skillLevel" className="h-4 w-4" />
                  <span>{level}</span>
                </label>
              ))}
            </div>
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
  );
};

export default ComputerSkills;
