import { useState } from 'react';

const Computer = () => {
    const [showForm, setShowForm] = useState(true);
    const [currentSkill, setCurrentSkill] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [savedSkills, setSavedSkills] = useState([]);

    const handleSave = (e) => {
        e.preventDefault();
        if (currentSkill && skillLevel) {
            setSavedSkills(prev => [
                ...prev,
                {
                    skill: currentSkill,
                    level: skillLevel
                }
            ]);
            setCurrentSkill('');
            setSkillLevel('');
            setShowForm(false);
        } else {
            alert('Please fill in all fields');
        }
    };

    return {
        showForm,
        setShowForm,
        currentSkill,
        setCurrentSkill,
        skillLevel,
        setSkillLevel,
        handleSave,
        savedSkills
    };
}
            
export default Computer;