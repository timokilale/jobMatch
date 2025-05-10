import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchWorkExperience,
    addWorkExperience,
    updateWorkExperience,
    deleteWorkExperience,
} from '../redux/slices/workSlice';


const Work = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const applicantId = user?.id;
    const experiences = useSelector((state) => state.experience.list);

    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);

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

      useEffect(() => {
        if (applicantId) {
          dispatch(fetchWorkExperience(applicantId));
        }
      }, [dispatch, applicantId]);

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSave = (e) => {
        e.preventDefault();
        const data = { ...formData, applicantId};

        if (editingId) {
            dispatch(updateWorkExperience({
                id: editingId, data
            })).then(() => {
                setEditingId(null);
                setShowForm(false);
            });
        } else {
          dispatch(addWorkExperience(data)).then(() => {  
            setShowForm(false);
          });
        } 
        setFormData({
            institution: '',
            jobTitle: '',
            supervisorName: '',
            supervisorTel: '',
            supervisorAddress: '',
            institutionAddress: '',
            duties: '',
            startDate: '',
            endDate: '',
        });
    };

    const handleEdit = (exp) => {
        setFormData({
          institution: exp.institution,
          jobTitle: exp.jobTitle,
          supervisorName: exp.supervisorName,
          supervisorTel: exp.supervisorTel,
          supervisorAddress: exp.supervisorAddress,
          institutionAddress: exp.institutionAddress,
          duties: exp.duties,
          startDate: exp.startDate,
          endDate: exp.endDate,
        });
        setEditingId(exp.id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
      if (window.confirm('Are you sure you want to delete this experience?')) {
        dispatch(deleteWorkExperience(id));
      }
    };
  
    return {
        showForm,
        setShowForm,
        formData,
        handleChange,
        handleSave,
        handleEdit,
        handleDelete,
        savedWorkExperience: experiences,
    };
}


export default Work;
