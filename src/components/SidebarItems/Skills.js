import React, { useState, useEffect } from 'react';
import { Plus, X, Edit2, Save, AlertCircle, Monitor, User, Globe, Palette, Users, MoreHorizontal, Calendar, Award, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkills, createSkill, updateSkill, deleteSkill, clearError, clearSuccess, searchSkills, fetchSkillCategories } from '../../redux/slices/skillsSlice';
import EnhancedDatePicker from '../common/EnhancedDatePicker';

const Skills = () => {
  const dispatch = useDispatch();
  const { skills, searchResults, categories, loading, searchLoading, error, success } = useSelector(state => state.skills);

  const [newSkill, setNewSkill] = useState({
    name: '',
    proficiency: 'Beginner',
    category: 'Technical',
    yearsExperience: '',
    lastUsed: '',
    isCertified: false,
    certificationName: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [editingSkill, setEditingSkill] = useState({});
  const [activeTab, setActiveTab] = useState('all');
  const [validationError, setValidationError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvancedFields, setShowAdvancedFields] = useState(false);

  const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const skillCategories = [
    'Technical',
    'Computer Skills',
    'Soft Skills',
    'Language',
    'Creative',
    'Management',
    'Other'
  ];

  // Predefined computer skills for quick selection
  const computerSkillsOptions = [
    'Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Microsoft Access',
    'Google Sheets', 'Google Docs', 'Adobe Photoshop', 'Adobe Illustrator',
    'AutoCAD', 'QuickBooks', 'SAP', 'Salesforce', 'Typing', 'Data Entry'
  ];

  useEffect(() => {
    dispatch(fetchSkills());
    dispatch(fetchSkillCategories());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setTimeout(() => dispatch(clearSuccess()), 3000);
    }
  }, [success, dispatch]);

  // Update category when tab changes
  useEffect(() => {
    if (activeTab !== 'all') {
      const categoryMap = {
        'computer': 'Computer Skills',
        'technical': 'Technical',
        'soft': 'Soft Skills'
      };
      setNewSkill(prev => ({
        ...prev,
        category: categoryMap[activeTab]
      }));
    }
  }, [activeTab]);

  const handleAddSkill = async () => {
    const trimmedName = newSkill.name.trim();

    // Clear previous validation errors
    setValidationError('');

    // Frontend validation
    if (!trimmedName) {
      setValidationError('Skill name is required');
      return;
    }

    if (trimmedName.length < 2) {
      setValidationError('Skill name must be at least 2 characters long');
      return;
    }

    if (trimmedName.length > 100) {
      setValidationError('Skill name must be less than 100 characters');
      return;
    }

    // Check for duplicates in current skills list
    const isDuplicate = skills.some(
      skill => skill.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (isDuplicate) {
      setValidationError('This skill already exists');
      return;
    }

    try {
      await dispatch(createSkill({
        skill: trimmedName,
        proficiency: newSkill.proficiency,
        description: newSkill.category,
        yearsExperience: newSkill.yearsExperience || null,
        lastUsed: newSkill.lastUsed || null,
        isCertified: newSkill.isCertified,
        certificationName: newSkill.certificationName || null
      })).unwrap();
      setNewSkill({
        name: '',
        proficiency: 'Beginner',
        category: 'Technical',
        yearsExperience: '',
        lastUsed: '',
        isCertified: false,
        certificationName: ''
      });
      setValidationError('');
    } catch (error) {
      // Error is handled by Redux
    }
  };

  const handleQuickAddComputerSkill = async (skillName) => {
    // Check for duplicates in current skills list
    const isDuplicate = skills.some(
      skill => skill.skill && skill.skill.toLowerCase() === skillName.toLowerCase()
    );

    if (isDuplicate) {
      return;
    }

    const computerSkill = {
      skill: skillName,
      proficiency: 'Beginner',
      description: 'Computer Skills'
    };

    try {
      await dispatch(createSkill(computerSkill)).unwrap();
    } catch (error) {
      // Error is handled by Redux
    }
  };

  const handleUpdateSkill = async (id) => {
    try {
      await dispatch(updateSkill({
        id,
        skill: editingSkill.name,
        proficiency: editingSkill.proficiency,
        description: editingSkill.category,
        yearsExperience: editingSkill.yearsExperience || null,
        lastUsed: editingSkill.lastUsed || null,
        isCertified: editingSkill.isCertified || false,
        certificationName: editingSkill.certificationName || null
      })).unwrap();
      setEditingId(null);
      setEditingSkill({});
    } catch (error) {
      // Error is handled by Redux
    }
  };

  const handleDeleteSkill = async (id) => {
    if (!window.confirm('Are you sure you want to delete this skill?')) return;

    try {
      await dispatch(deleteSkill(id)).unwrap();
    } catch (error) {
      // Error is handled by Redux
    }
  };

  const startEditing = (skill) => {
    setEditingId(skill.id);
    setEditingSkill({
      name: skill.skill,
      proficiency: skill.proficiency,
      category: skill.description,
      yearsExperience: skill.yearsExperience || '',
      lastUsed: skill.lastUsed ? skill.lastUsed.split('T')[0] : '', // Format date for input
      isCertified: skill.isCertified || false,
      certificationName: skill.certificationName || ''
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingSkill({});
  };

  // Filter skills based on active tab
  const filteredSkills = skills.filter(skill => {
    if (activeTab === 'all') return true;
    if (activeTab === 'computer') return skill.description === 'Computer Skills';
    if (activeTab === 'technical') return skill.description === 'Technical';
    if (activeTab === 'soft') return skill.description === 'Soft Skills';
    return true;
  });

  const getProficiencyColor = (proficiency) => {
    const colors = {
      'Beginner': 'bg-red-100 text-red-800',
      'BEGINNER': 'bg-red-100 text-red-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'INTERMEDIATE': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-blue-100 text-blue-800',
      'ADVANCED': 'bg-blue-100 text-blue-800',
      'Expert': 'bg-green-100 text-green-800',
      'EXPERT': 'bg-green-100 text-green-800'
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
    return colors[category];
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Computer Skills': return <Monitor className="w-4 h-4" />;
      case 'Technical': return <Monitor className="w-4 h-4" />;
      case 'Soft Skills': return <User className="w-4 h-4" />;
      case 'Language': return <Globe className="w-4 h-4" />;
      case 'Creative': return <Palette className="w-4 h-4" />;
      case 'Management': return <Users className="w-4 h-4" />;
      default: return <MoreHorizontal className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 min-h-screen overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Skills</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            {error}
            <button
              onClick={() => dispatch(clearError())}
              className="ml-auto text-red-600 hover:text-red-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded flex items-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            {success}
            <button
              onClick={() => dispatch(clearSuccess())}
              className="ml-auto text-green-600 hover:text-green-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Skill Category Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'all', label: 'All Skills', icon: <MoreHorizontal className="w-4 h-4" /> },
                { key: 'computer', label: 'Computer Skills', icon: <Monitor className="w-4 h-4" /> },
                { key: 'technical', label: 'Technical', icon: <Monitor className="w-4 h-4" /> },
                { key: 'soft', label: 'Soft Skills', icon: <User className="w-4 h-4" /> }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.key
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Quick Add Computer Skills */}
        {activeTab === 'computer' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Add Computer Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {computerSkillsOptions.map(skill => (
                <button
                  key={skill}
                  onClick={() => handleQuickAddComputerSkill(skill)}
                  disabled={loading || skills.some(s => s.skill === skill)}
                  className="p-3 text-left border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Monitor className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add New Skill - Only show when not on "All Skills" tab */}
        {activeTab !== 'all' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Add New {activeTab === 'computer' ? 'Computer Skill' :
                       activeTab === 'technical' ? 'Technical Skill' :
                       activeTab === 'soft' ? 'Soft Skill' : 'Skill'}
            </h3>

            {validationError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                {validationError}
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Skill Name</label>
                  <input
                    type="text"
                    value={newSkill.name}
                    onChange={(e) => {
                      setNewSkill({ ...newSkill, name: e.target.value });
                      if (validationError) setValidationError('');
                    }}
                    placeholder={`e.g., ${
                      activeTab === 'computer' ? 'Microsoft Excel, Photoshop' :
                      activeTab === 'technical' ? 'JavaScript, Python' :
                      activeTab === 'soft' ? 'Leadership, Communication' :
                      'Enter skill name'
                    }`}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Proficiency</label>
                  <select
                    value={newSkill.proficiency}
                    onChange={(e) => setNewSkill({ ...newSkill, proficiency: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {proficiencyLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={handleAddSkill}
                    disabled={loading || !newSkill.name.trim()}
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50 flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add {activeTab === 'computer' ? 'Computer Skill' :
                         activeTab === 'technical' ? 'Technical Skill' :
                         activeTab === 'soft' ? 'Soft Skill' : 'Skill'}
                  </button>
                </div>
              </div>

              {/* Advanced Fields Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAdvancedFields(!showAdvancedFields)}
                  className="text-sm text-green-600 hover:text-green-700 flex items-center space-x-1"
                >
                  <span>{showAdvancedFields ? 'Hide' : 'Show'} Advanced Options</span>
                  <span className={`transform transition-transform ${showAdvancedFields ? 'rotate-180' : ''}`}>▼</span>
                </button>
              </div>

              {/* Advanced Fields */}
              {showAdvancedFields && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={newSkill.yearsExperience}
                      onChange={(e) => setNewSkill({ ...newSkill, yearsExperience: e.target.value })}
                      placeholder="e.g., 3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <EnhancedDatePicker
                      name="lastUsed"
                      value={newSkill.lastUsed}
                      onChange={(e) => setNewSkill({ ...newSkill, lastUsed: e.target.value })}
                      label="Last Used"
                      required={false}
                      min="1970-01-01"
                      max={new Date().toISOString().split('T')[0]}
                      placeholder="Select when you last used this skill"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="isCertified"
                        checked={newSkill.isCertified}
                        onChange={(e) => setNewSkill({ ...newSkill, isCertified: e.target.checked })}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor="isCertified" className="text-sm font-medium text-gray-700">
                        I have a certification for this skill
                      </label>
                    </div>
                  </div>
                  {newSkill.isCertified && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Certification Name</label>
                      <input
                        type="text"
                        value={newSkill.certificationName}
                        onChange={(e) => setNewSkill({ ...newSkill, certificationName: e.target.value })}
                        placeholder="e.g., Microsoft Office Specialist, AWS Certified Developer"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Information message for "All Skills" tab */}
        {activeTab === 'all' && skills.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              <div>
                <h3 className="text-sm font-medium text-blue-800">Add New Skills</h3>
                <p className="text-sm text-blue-700 mt-1">
                  To add new skills, navigate to a specific category tab (Computer Skills, Technical, or Soft Skills) above.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Skills List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              {activeTab === 'all' ? 'All Skills' :
               activeTab === 'computer' ? 'Computer Skills' :
               activeTab === 'technical' ? 'Technical Skills' :
               activeTab === 'soft' ? 'Soft Skills' : 'Skills'}
              ({filteredSkills.length})
            </h3>
          </div>

          {loading && skills.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-700"></div>
              <p className="text-gray-500">Loading skills...</p>
            </div>
          ) : filteredSkills.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <img
                src="assets/logo.png"
                alt="Job Match"
                className="w-16 h-auto opacity-60"
              />
              <h3 className="text-lg font-semibold text-gray-600">
                {activeTab === 'all' ? 'No skills added yet' :
                 `No ${activeTab === 'computer' ? 'computer' : activeTab} skills added yet`}
              </h3>
              <p className="text-gray-500 text-center max-w-md">
                {activeTab === 'computer'
                  ? 'Use the quick add buttons above or add a custom computer skill!'
                  : 'Add your first skill above to showcase your abilities to potential employers!'
                }
              </p>
            </div>
          ) : (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSkills.map(skill => (
                  <div key={skill.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    {editingId === skill.id ? (
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={editingSkill.name}
                          onChange={(e) => setEditingSkill({ ...editingSkill, name: e.target.value })}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                          placeholder="Skill name"
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
                          {skillCategories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>

                        {/* Advanced editing fields */}
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="number"
                            min="0"
                            max="50"
                            value={editingSkill.yearsExperience || ''}
                            onChange={(e) => setEditingSkill({ ...editingSkill, yearsExperience: e.target.value })}
                            placeholder="Years exp."
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                          <EnhancedDatePicker
                            name="lastUsed"
                            value={editingSkill.lastUsed || ''}
                            onChange={(e) => setEditingSkill({ ...editingSkill, lastUsed: e.target.value })}
                            required={false}
                            min="1970-01-01"
                            max={new Date().toISOString().split('T')[0]}
                            placeholder="Last used"
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`certified-${skill.id}`}
                            checked={editingSkill.isCertified || false}
                            onChange={(e) => setEditingSkill({ ...editingSkill, isCertified: e.target.checked })}
                            className="h-3 w-3 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`certified-${skill.id}`} className="text-xs text-gray-700">
                            Certified
                          </label>
                        </div>

                        {editingSkill.isCertified && (
                          <input
                            type="text"
                            value={editingSkill.certificationName || ''}
                            onChange={(e) => setEditingSkill({ ...editingSkill, certificationName: e.target.value })}
                            placeholder="Certification name"
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                        )}

                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleUpdateSkill(skill.id)}
                            disabled={loading}
                            className="flex-1 bg-green-600 text-white px-2 py-1 rounded text-sm hover:bg-green-700 disabled:opacity-50"
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
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center space-x-2">
                            {getCategoryIcon(skill.description)}
                            <h4 className="font-medium text-gray-800 text-sm">{skill.skill}</h4>
                          </div>
                          <div className="flex space-x-1">
                            <button
                              onClick={() => startEditing(skill)}
                              className="text-green-600 hover:text-green-800"
                            >
                              <Edit2 className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => handleDeleteSkill(skill.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-1">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
                              {skill.proficiency}
                            </span>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(skill.description)}`}>
                              {skill.description}
                            </span>
                            {skill.isCertified && (
                              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                <Award className="w-3 h-3 inline mr-1" />
                                Certified
                              </span>
                            )}
                          </div>

                          {/* Additional info */}
                          <div className="text-xs text-gray-500 space-y-1">
                            {skill.yearsExperience && (
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{skill.yearsExperience} years experience</span>
                              </div>
                            )}
                            {skill.lastUsed && (
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>Last used: {new Date(skill.lastUsed).toLocaleDateString()}</span>
                              </div>
                            )}
                            {skill.certificationName && (
                              <div className="flex items-center space-x-1">
                                <Award className="w-3 h-3" />
                                <span>{skill.certificationName}</span>
                              </div>
                            )}
                          </div>
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
