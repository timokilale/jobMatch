import React from 'react';
import Computer from '../../hooks/Computer';

const ComputerSkills = () => {
  const {
    showForm,
    setShowForm,
    currentSkill,
    setCurrentSkill,
    skillLevel,
    setSkillLevel,
    handleSave,
    skills,
    handleDelete,
    setEditingId
  } = Computer();

  const computerSkills = [
    "Excel", "PowerPoint", "Word", "Access", "OneNote", "Publisher", "Other"
  ];


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-800 mb-6 flex justify-center">Computer Skills</h1>
        {showForm ? (
          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-60">
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
                Save
              </button>
            </div>
          </form>
        ) : (
          <>
            {skills.length > 0 && (
              <div className="mb-60 flex justify-center">
                <table className="w-1/2 border-collapse border border-green-200">
                  <thead>
                    <tr className="bg-green-100 text-green-700">
                      <th className="p-2 border border-green-200">Skill</th>
                      <th className="p-2 border border-green-200">Level</th>
                      <th className="p-2 border border-green-200">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skills.map((skill) => (
                      <tr key={skill.id} className="hover:bg-green-50">
                        <td className="p-2 border border-green-200">{skill.skill}</td>
                        <td className="p-2 border border-green-200">{skill.proficiency}</td>
                        <td className="p-2 border border-green-200 text-center">
                         <div className="flex justify-center items-center space-x-4">
                          <button
                            onClick={() => {
                              setCurrentSkill(skill.skill);
                              setSkillLevel(skill.proficiency);
                              setEditingId(skill.id); 
                              setShowForm(true);
                            }}
                             className="text-gray-600 mr-8"
                          >
                            <i className="fas fa-pen"></i>
                          </button>
                          <button
                            onClick={() => handleDelete(skill.id)}
                            className="text-green-600 "
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
            )}
            <button 
              onClick={() => {
                setShowForm(true);
                setEditingId(null);
                setCurrentSkill('');
                setSkillLevel('');
              }
              }
              className="fixed bottom-8 right-8 w-14 h-14 bg-green-600 text-white rounded-full hover:bg-green-700 transition shadow-lg flex items-center justify-center text-2xl"
            >
              <i className="fas fa-plus"></i>
            </button>
          </>
        )}
    </div>
  );
};

export default ComputerSkills;