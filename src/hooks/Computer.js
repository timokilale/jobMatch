import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createSkill,
    fetchSkills,
    deleteSkill,
    updateSkill
} from '../redux/slices/computerSlice';

const Computer = () => {
    const dispatch = useDispatch();
    const { skills } = useSelector((state) => state.computerSkill);
    const applicantId = useSelector((state) => state.auth.user?.id);

    const [showForm, setShowForm] = useState(false);
    const [currentSkill, setCurrentSkill] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [editingId, setEditingId] = useState(null);
 

    useEffect(() => {
        if (applicantId) {
            dispatch(fetchSkills(applicantId));
        }
    }, [applicantId, dispatch]);

    useEffect(() => {
        if (skills.length === 0) {
          setShowForm(true);
        } else {
          setShowForm(false);
        }
      }, [skills]);


    const handleSave = async (e) => {
        e.preventDefault();
        if (!currentSkill || !skillLevel) {
            alert('Please fill in all fields');
            return;
        }

        const payload = {
          applicantId,
          skill: currentSkill,
          proficiency: skillLevel,
        };

        try {
          setCurrentSkill('');
          setSkillLevel('');
          setEditingId(null);


          if (editingId) {
            await dispatch(updateSkill({
                id: editingId,
                ...payload
            })).unwrap();
        } else {
          await dispatch(createSkill(payload)).unwrap();
        }  

        dispatch(fetchSkills(applicantId));
        setShowForm(false);
      } catch (error) {
        console.error("failed to save skill:", error);
      }
      };

    const handleDelete = (id) => {
        dispatch(deleteSkill(id));
      };

    return {
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
    };
}
            
export default Computer;