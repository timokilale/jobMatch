import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchLanguages,
  addLanguage,
  updateLanguage,
  deleteLanguage
} from '../redux/slices/languageSlice';

const LanguageProficiencyLogic = (applicantId) => {
  const dispatch = useDispatch();
  const { items: savedLanguages } = useSelector((state) => state.language);

  const [currentLanguage, setCurrentLanguage] = useState('');
  const [proficiencies, setProficiencies] = useState({ speak: '', read: '', write: '' });
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchLanguages(applicantId));
  }, [dispatch, applicantId]);

  const handleProficiencyChange = (skill, value) => {
    setProficiencies((prev) => ({ ...prev, [skill]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!currentLanguage || !proficiencies.speak || !proficiencies.read || !proficiencies.write) {
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
      dispatch(addLanguage({ applicantId, ...data })).then(() => {
        clearForm();
      });
    }
  };

  const handleEdit = (lang) => {
    setCurrentLanguage(lang.language);
    setProficiencies({ speak: lang.speak, read: lang.read, write: lang.write });
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
    setProficiencies({ speak: '', read: '', write: '' });
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

