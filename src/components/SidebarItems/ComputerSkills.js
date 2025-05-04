import React, { useState } from 'react';

const ComputerSkills = () => {
  const computerSkills = [
    "Excel", "PowerPoint", "Word", "Access", "OneNote", "Publisher", "Other"
  ];

  const [showForm, setShowForm] = useState(true);
  const [currentSkill, setCurrentSkill] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [savedSkills, setSavedSkills] = useState([]);

  const handleSave = (e) => {
    e.preventDefault();
    if (currentSkill && skillLevel) {
      setSavedSkills(prev => [...prev, { skill: currentSkill, level: skillLevel }]);
      setCurrentSkill('');
      setSkillLevel('');
      setShowForm(false);
    } else {
      alert('Please select both a skill and rating');
    }
  };

  return (
    <div className="p-6">
      <div className="p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-green-800 mb-6">Computer Skills</h1>

        {showForm ? (
          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Skill Dropdown */}
            <div className="flex flex-col">
              <label className="text-green-800 font-semibold mb-2">Skill</label>
              <select 
                className="p-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                required
              >
                <option value="">Select Skill</option>
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
                    <input 
                      type="radio" 
                      name="skillLevel"
                      value={level}
                      checked={skillLevel === level}
                      onChange={() => setSkillLevel(level)} 
                      className="h-4 w-4"
                      required 
                    />
                    <span>{level}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors"
              >
                Save Skill
              </button>
            </div>
          </form>
        ) : (
          <>
            {savedSkills.length > 0 && (
              <div className="mt-6">
                <table className="w-full border-collapse border border-green-200">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="p-2 border border-green-200">Skill</th>
                      <th className="p-2 border border-green-200">Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedSkills.map((skill, index) => (
                      <tr key={index} className="hover:bg-green-50">
                        <td className="p-2 border border-green-200">{skill.skill}</td>
                        <td className="p-2 border border-green-200">{skill.level}</td>
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

export default ComputerSkills;