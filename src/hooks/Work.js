import { useState } from 'react';

const Work = () => {
    const [showForm, setShowForm] = useState(true); 
    const [savedWorkExperience, setSavedWorkExperience] = useState([]);
    const [formData, setFormData] = useState({
        institution: '',
        jobTitle: '',
        supervisorName: '',
        supervisorTel: '',
        supervisorAddress: '',
        institutionAddress: '',
        duties: '',
        startDate: '',
        endDate: ''
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSave = (e) => {
        e.preventDefault();
        if (Object.values(formData).every(value => value.trim() !== '')) {
            setSavedWorkExperience(prev => [...prev, formData]);
            setFormData({
                institution: '',
                jobTitle: '',
                supervisorName: '',
                supervisorTel: '',
                supervisorAddress: '',
                institutionAddress: '',
                duties: '',
                startDate: '',
                endDate: ''
            });
            setShowForm(false);
        } else {
            alert('Please fill in all required fields');
        }
    };
  
    return {
        showForm,
        setShowForm,
        formData,
        handleChange,
        handleSave,
        savedWorkExperience
    };
}


export default Work;
