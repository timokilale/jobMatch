import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchLanguages,
  addLanguage,
  updateLanguage,
  deleteLanguage
} from '../redux/slices/languageSlice';

const LanguageProficiencyLogic = () => {
  const dispatch = useDispatch();
  const savedLanguages = useSelector((state) => state.language?.items || []);
  const applicantId = useSelector((state) => state.auth?.user?.id);

  const [currentLanguage, setCurrentLanguage] = useState('');
  const [proficiencies, setProficiencies] = useState({ speakLevel: '', readLevel: '', writeLevel: '' });
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (applicantId) {
      dispatch(fetchLanguages(applicantId));
    }
  }, [dispatch, applicantId]);

  const handleProficiencyChange = (skill, value) => {
    setProficiencies((prev) => ({ ...prev, [skill]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!applicantId) {
      alert ('Applicant ID missing');
      return;
    }
    if (!currentLanguage || !proficiencies.speakLevel || !proficiencies.readLevel || !proficiencies.writeLevel) {
      alert('All fields are required');
      return;
    }

    const data = {
      language: currentLanguage,
      ...proficiencies,
    }

    if (editId) {
      dispatch(updateLanguage({ id: editId, data })).then(() => {
        clearForm();
      });
    } else {
      console.log('Submitting with applicantId:', applicantId);
      dispatch(addLanguage({ applicantId, ...data })).then(() => {
        clearForm();
      });
    }
  };

  const handleEdit = (lang) => {
    setCurrentLanguage(lang.language);
    setProficiencies({
      speakLevel: lang.speakLevel,
      readLevel: lang.readLevel,
      writeLevel: lang.writeLevel
    });
    setEditId(lang.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteLanguage(id));
    }
  };

  const clearForm = () => {
    setCurrentLanguage('');
    setProficiencies({ speakLevel: '', readLevel: '', writeLevel: '' });
    setEditId(null);
    setShowForm(false);
  };
  

  return {
    currentLanguage,
    setCurrentLanguage,
    proficiencies,
    handleProficiencyChange,
    handleSave,
    savedLanguages,
    handleEdit,
    handleDelete,
    showForm,
    setShowForm,
    clearForm,
    editId,
  };

}
export default LanguageProficiencyLogic;

