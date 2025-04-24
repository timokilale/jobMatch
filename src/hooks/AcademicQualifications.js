import { useState } from 'react';

const AcademicQualificationsLogic = () => {
    const [qualifications, setQualifications] = useState([]);
    const [formData, setFormData] = useState({
        educationLevel: '',
        country: 'Tanzania, United Republic of',
        institution: '',
        program: '',
        startDate: '',
        endDate: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const startYear = new Date(formData.startDate).getFullYear();
        const endYear = new Date(formData.endDate).getFullYear();
        const timePeriod = `${startYear} - ${endYear}`;

        const newQualification = {
            educationLevel: formData.educationLevel,
            country: formData.country,
            institution: formData.institution,
            program: formData.program,
            time: timePeriod
        };

        setQualifications([...qualifications, newQualification]);

        setFormData({
            educationLevel: '',
            country: 'Tanzania, United Republic of',
            institution: '',
            program: '',
            startDate: '',
            endDate: ''
        });
    }
    return {
        formData,
        handleChange,
        handleSubmit,
        qualifications,
    }
}
export default AcademicQualificationsLogic;