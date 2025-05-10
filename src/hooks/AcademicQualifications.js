import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQualification, fetchQualifications, updateQualification, deleteQualification } from '../redux/slices/qualificationSlice';


const AcademicQualificationsLogic = (setShowForm) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const applicantId = user?.id;
    const qualifications = useSelector((state) => state.qualifications.list);
    const [editingId, setEditingId] = useState(null);

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
        const data = { ...formData, applicantId };

        if (editingId) {
            dispatch(updateQualification({ id: editingId, data })).then(() => {
              setEditingId(null);
              setShowForm(false);
            });
        } else {
          dispatch(addQualification(data)).then(() => {
            setShowForm(false);
          });
        }

        if (!applicantId) {
            return alert("Loggin first");
        }
        
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

    const handleEdit = (qualification) => {
        setFormData({
          educationLevel: qualification.level,
          country: qualification.country,
          institution: qualification.institution,
          program: qualification.fieldOfStudy,
          startDate: qualification.startDate,
          endDate: qualification.endDate,
          certificate: null,
          applicantId,
        });
        setEditingId(qualification.id);
        setShowForm(true);
      };
      
      const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
          dispatch(deleteQualification(id));
        }
      };
      
        
    return {
        formData,
        handleChange,
        handleSubmit,
        qualifications,
        handleDelete,
        handleEdit
        
    }
}
export default AcademicQualificationsLogic;