import { useState } from 'react';

const LanguageProficiencyLogic = () => {
    const [currentLanguage, setCurrentLanguage] = useState('');
    const [proficiencies, setProficiencies] = useState({
        speak: '',
        read: '',
        write: ''
      });
    const [savedLanguages, setSavedLanguages] = useState([]);

    const handleProficiencyChange = (lang, value) => {
        setProficiencies(prev => ({ ...prev, [lang]: value }));
    };

    const handleSave = (e) => {
      e.preventDefault();
      if (currentLanguage && proficiencies.speak && proficiencies.read && proficiencies.write) {
          setSavedLanguages(prev => [
            ...prev,
            {
              language: currentLanguage,
              ...proficiencies
            }
          ]); 
          setCurrentLanguage('');
          setProficiencies({ speak: '', read: '', write: '' });
          return true;
        } else {
          alert('Please fill in all fields');
          return false;
        }
      };

      return {
        currentLanguage,
        setCurrentLanguage,
        proficiencies,
        handleProficiencyChange,
        handleSave,
        savedLanguages
    };
}
export default LanguageProficiencyLogic;

