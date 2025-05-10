import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQualification, fetchQualifications } from '../redux/slices/qualificationSlice';


const AcademicQualificationsLogic = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const applicantId = user?.id;
    
    const qualifications = useSelector((state) => state.qualifications.list);
    
   
    const [formData, setFormData] = useState({
        educationLevel: '',
        country: '',
        institution: '',
        program: '',
        startDate: '',
        endDate: '',
        certificate: null,
    });

    useEffect(() => {
        if (applicantId) {
            dispatch(fetchQualifications(applicantId));
        }
    }, [dispatch, applicantId]);

    const handleChange = (e) => {
        const value = e.target.type === 'file'
            ? e.target.files[0]
            : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!applicantId) {
            return alert("Loggin first");
        }

        dispatch(addQualification({
          ...formData,
          applicantId
        }));
        setFormData({
            educationLevel: '',
            country: '',
            institution: '',
            program: '',
            startDate: '',
            endDate: '',
            certificate: null,
        });
        console.log("User from Redux:", user);
    };
        
    return {
        formData,
        handleChange,
        handleSubmit,
        qualifications,
        
    }
}
export default AcademicQualificationsLogic;