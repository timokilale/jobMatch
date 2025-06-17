import React, { useState } from 'react';

const JobRequirements = ({ requirements, onChange }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newRequirement, setNewRequirement] = useState({
    skillName: '',
    importance: 'PREFERRED',
    proficiencyLevel: 'INTERMEDIATE',
    yearsRequired: '',
    description: ''
  });

  const handleAddRequirement = () => {
    if (!newRequirement.skillName.trim()) return;

    const requirement = {
      skillName: newRequirement.skillName.trim(),
      importance: newRequirement.importance,
      proficiencyLevel: newRequirement.proficiencyLevel,
      yearsRequired: newRequirement.yearsRequired ? parseInt(newRequirement.yearsRequired) : null,
      description: newRequirement.description || null
    };

    onChange([...requirements, requirement]);

    // Reset form
    setNewRequirement({
      skillName: '',
      importance: 'PREFERRED',
      proficiencyLevel: 'INTERMEDIATE',
      yearsRequired: '',
      description: ''
    });
    setShowAddForm(false);
  };

  const handleRemoveRequirement = (index) => {
    const updatedRequirements = requirements.filter((_, i) => i !== index);
    onChange(updatedRequirements);
  };

  return (
    <div className="space-y-4">
      {/* Existing Requirements */}
      {requirements.length > 0 && (
        <div className="space-y-2">
          {requirements.map((req, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">{req.skillName}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    req.importance === 'REQUIRED' ? 'bg-red-100 text-red-800' :
                    req.importance === 'PREFERRED' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {req.importance}
                  </span>
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    {req.proficiencyLevel}
                  </span>
                  {req.yearsRequired && (
                    <span className="text-xs text-gray-600">
                      {req.yearsRequired} years
                    </span>
                  )}
                </div>
                {req.description && (
                  <p className="text-sm text-gray-600 mt-1">{req.description}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => handleRemoveRequirement(index)}
                className="text-red-600 hover:text-red-800 p-1"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add New Requirement */}
      {!showAddForm ? (
        <button
          type="button"
          onClick={() => setShowAddForm(true)}
          className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
        >
          <i className="fas fa-plus mr-2"></i>
          Add Job Requirement
        </button>
      ) : (
        <div className="border border-gray-300 rounded-lg p-4 space-y-4">
          {/* Skill Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skill Name
            </label>
            <input
              type="text"
              value={newRequirement.skillName}
              onChange={(e) => setNewRequirement({...newRequirement, skillName: e.target.value})}
              placeholder="e.g., JavaScript, Project Management, Adobe Photoshop"
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Requirement Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Importance
              </label>
              <select
                value={newRequirement.importance}
                onChange={(e) => setNewRequirement({...newRequirement, importance: e.target.value})}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="REQUIRED">Required</option>
                <option value="PREFERRED">Preferred</option>
                <option value="NICE_TO_HAVE">Nice to Have</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Proficiency Level
              </label>
              <select
                value={newRequirement.proficiencyLevel}
                onChange={(e) => setNewRequirement({...newRequirement, proficiencyLevel: e.target.value})}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="BEGINNER">Beginner</option>
                <option value="INTERMEDIATE">Intermediate</option>
                <option value="ADVANCED">Advanced</option>
                <option value="EXPERT">Expert</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Years Required (Optional)
              </label>
              <input
                type="number"
                min="0"
                max="20"
                value={newRequirement.yearsRequired}
                onChange={(e) => setNewRequirement({...newRequirement, yearsRequired: e.target.value})}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., 3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description (Optional)
              </label>
              <input
                type="text"
                value={newRequirement.description}
                onChange={(e) => setNewRequirement({...newRequirement, description: e.target.value})}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Specific context for this requirement"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setShowAddForm(false);
                setNewRequirement({
                  skillName: '',
                  importance: 'PREFERRED',
                  proficiencyLevel: 'INTERMEDIATE',
                  yearsRequired: '',
                  description: ''
                });
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAddRequirement}
              disabled={!newRequirement.skillName.trim()}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Add Requirement
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobRequirements;