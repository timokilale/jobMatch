import React, { useState, useEffect } from 'react';
import { Plus, X, Edit2, Save, AlertCircle } from 'lucide-react';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: '', proficiency: 'Beginner', category: 'Technical' });
  const [editingId, setEditingId] = useState(null);
  const [editingSkill, setEditingSkill] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const categories = ['Technical', 'Soft Skills', 'Language', 'Creative', 'Management', 'Other'];

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch('/api/skills', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (response.ok) {
        const data = await response.json();
        setSkills(data);
      }
    } catch (error) {
      console.error('Error fetching skills:', error);
      setError('Failed to load skills');
    } finally {
      setLoading(false);
    }
  };

  const addSkill = async () => {
    if (!newSkill.name.trim()) {
      setError('Skill name is required');
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch('/api/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newSkill)
      });

      if (response.ok) {
        const skill = await response.json();
        setSkills([...skills, skill]);
        setNewSkill({ name: '', proficiency: 'Beginner', category: 'Technical' });
        setError('');
      } else {
        setError('Failed to add skill');
      }
    } catch (error) {
      console.error('Error adding skill:', error);
      setError('Failed to add skill');
    } finally {
      setLoading(false);
    }
  };

  const updateSkill = async (id) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/skills/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editingSkill)
      });

      if (response.ok) {
        const updatedSkill = await response.json();
        setSkills(skills.map(skill => skill.id === id ? updatedSkill : skill));
        setEditingId(null);
        setEditingSkill({});
      } else {
        setError('Failed to update skill');
      }
    } catch (error) {
      console.error('Error updating skill:', error);
      setError('Failed to update skill');
    } finally {
      setLoading(false);
    }
  };

  const deleteSkill = async (id) => {
    if (!window.confirm('Are you sure you want to delete this skill?')) return;

    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/skills/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        setSkills(skills.filter(skill => skill.id !== id));
      } else {
        setError('Failed to delete skill');
      }
    } catch (error) {
      console.error('Error deleting skill:', error);
      setError('Failed to delete skill');
    } finally {
      setLoading(false);
    }
  };

  const startEditing = (skill) => {
    setEditingId(skill.id);
    setEditingSkill({ ...skill });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingSkill({});
  };

  const getProficiencyColor = (proficiency) => {
    const colors = {
      'Beginner': 'bg-red-100 text-red-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-blue-100 text-blue-800',
      'Expert': 'bg-green-100 text-green-800'
    };
    return colors[proficiency] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Technical': 'bg-purple-100 text-purple-800',
      'Soft Skills': 'bg-pink-100 text-pink-800',
      'Language': 'bg-indigo-100 text-indigo-800',
      'Creative': 'bg-orange-100 text-orange-800',
      'Management': 'bg-teal-100 text-teal-800',
      'Other': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-6 min-h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Skills</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            {error}
          </div>
        )}

        {/* Add New Skill */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Skill</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Skill Name</label>
              <input
                type="text"
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                placeholder="e.g., JavaScript, Project Management"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Proficiency</label>
              <select
                value={newSkill.proficiency}
                onChange={(e) => setNewSkill({ ...newSkill, proficiency: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {proficiencyLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={newSkill.category}
                onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={addSkill}
                disabled={loading}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </button>
            </div>
          </div>
        </div>

        {/* Skills List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Your Skills ({skills.length})</h3>
          </div>
          
          {loading && skills.length === 0 ? (
            <div className="p-6 text-center text-gray-500">Loading skills...</div>
          ) : skills.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No skills added yet. Add your first skill above!
            </div>
          ) : (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map(skill => (
                  <div key={skill.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    {editingId === skill.id ? (
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={editingSkill.name}
                          onChange={(e) => setEditingSkill({ ...editingSkill, name: e.target.value })}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                        <select
                          value={editingSkill.proficiency}
                          onChange={(e) => setEditingSkill({ ...editingSkill, proficiency: e.target.value })}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                        >
                          {proficiencyLevels.map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                        <select
                          value={editingSkill.category}
                          onChange={(e) => setEditingSkill({ ...editingSkill, category: e.target.value })}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                        >
                          {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateSkill(skill.id)}
                            className="flex-1 bg-green-600 text-white px-2 py-1 rounded text-sm hover:bg-green-700"
                          >
                            <Save className="w-3 h-3 inline mr-1" />
                            Save
                          </button>
                          <button
                            onClick={cancelEditing}
                            className="flex-1 bg-gray-600 text-white px-2 py-1 rounded text-sm hover:bg-gray-700"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-800 text-sm">{skill.name}</h4>
                          <div className="flex space-x-1">
                            <button
                              onClick={() => startEditing(skill)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Edit2 className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => deleteSkill(skill.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
                            {skill.proficiency}
                          </span>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ml-2 ${getCategoryColor(skill.category)}`}>
                            {skill.category}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
