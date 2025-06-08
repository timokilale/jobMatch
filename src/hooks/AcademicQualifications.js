import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addQualification,
  fetchQualifications,
  updateQualification,
  deleteQualification,
  clearErrors
} from '../redux/slices/qualificationSlice';
import { validateAcademicDateRange } from '../utils/dateValidation';

const AcademicQualificationsLogic = (setShowForm) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const applicantId = user?.id;
  const { list: qualifications, loading, error } = useSelector((state) => state.qualifications);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    educationLevel: '',
    country: '',
    institution: '',
    program: '',
    startDate: '',
    endDate: '',
    certificate: null,
    applicantId: applicantId || null
  });
  
  // Clear errors when unmounting
  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch]);

  // Fetch qualifications on mount
  useEffect(() => {
    if (applicantId) {
      dispatch(fetchQualifications(applicantId));
    }
  }, [dispatch, applicantId]);

  // Reset form to initial state
  const resetForm = () => {
    setFormData({
      educationLevel: '',
      country: '',
      institution: '',
      program: '',
      startDate: '',
      endDate: '',
      certificate: null,
      applicantId: applicantId || null
    });
    setEditingId(null);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, type, files, value } = e.target;

    // For file inputs
    if (type === 'file' && files && files.length > 0) {
      // Check file size (max 2MB)
      if (files[0].size > 2 * 1024 * 1024) {
        alert('File size exceeds 2MB limit');
        return;
      }
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      // For all other inputs, trim whitespace for text inputs
      const processedValue = (type === 'text' || name === 'country' || name === 'institution' || name === 'program')
        ? value.trim()
        : value;

      setFormData({
        ...formData,
        [name]: processedValue
      });
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ensure we have an applicantId
    if (!applicantId) {
      alert("You must be logged in to add qualifications");
      return false;
    }
    
    // Ensure required fields are filled and not just whitespace
    const requiredFields = {
      educationLevel: 'Education Level',
      country: 'Country',
      institution: 'Institution Name',
      program: 'Programme Name',
      startDate: 'Start Date',
      endDate: 'End Date'
    };

    for (const [field, label] of Object.entries(requiredFields)) {
      if (!formData[field] || formData[field].toString().trim() === '') {
        alert(`${label} is required and cannot be empty`);
        return false;
      }
    }

    // Check for certificate requirement (required for all submissions)
    if (!formData.certificate) {
      alert("Please attach your certificate");
      return false;
    }
    
    // Validate dates using utility function
    const dateValidation = validateAcademicDateRange(formData.startDate, formData.endDate);
    if (!dateValidation.isValid) {
      alert(dateValidation.error);
      return false;
    }
    
    // Create a submission object with the applicantId
    const submissionData = {
      ...formData,
      applicantId
    };
    
    try {
      if (editingId) {
        // Update existing qualification
        await dispatch(updateQualification({ 
          id: editingId, 
          data: submissionData 
        })).unwrap();
        resetForm();
        return true;
      } else {
        // Add new qualification
        await dispatch(addQualification(submissionData)).unwrap();
        resetForm();
        return true;
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert(`Failed to save: ${err.message || 'Unknown error'}`);
      return false;
    }
  };

  // Edit existing qualification
  const handleEdit = (qualification) => {
    // Format dates for form inputs (YYYY-MM-DD)
    const formatDate = (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    };
    
    setFormData({
      educationLevel: qualification.level || '',
      country: qualification.country?.name || qualification.country || '',
      institution: qualification.institution || '',
      program: qualification.fieldOfStudy || '',
      startDate: formatDate(qualification.startDate),
      endDate: formatDate(qualification.endDate),
      certificate: null, // Can't pre-fill file inputs
      applicantId
    });
    
    setEditingId(qualification.id);
    setShowForm(true);
  };
  
  // Delete qualification
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this qualification?')) {
      try {
        await dispatch(deleteQualification(id)).unwrap();
      } catch (err) {
        alert(`Failed to delete: ${err.message || 'Unknown error'}`);
      }
    }
  };
  
  return {
    formData,
    handleChange,
    handleSubmit,
    qualifications,
    handleDelete,
    handleEdit,
    loading,
    error,
    resetForm,
    isEditing: !!editingId
  };
};

export default AcademicQualificationsLogic;