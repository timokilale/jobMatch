import { useState, useRef, useEffect } from 'react';

const MultiSelectDropdown = ({ options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Ensure options is always an array
  const safeOptions = Array.isArray(options) ? options : [];
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleCheckboxChange = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };
  
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Get names of selected categories
  const getSelectedCategoryNames = () => {
    const selectedNames = safeOptions
      .filter(option => selected.includes(option.id))
      .map(option => option.name);
    
    if (selectedNames.length === 0) {
      return 'Select categories';
    } else if (selectedNames.length <= 2) {
      return selectedNames.join(', ');
    } else {
      return `${selectedNames[0]}, ${selectedNames[1]}, +${selectedNames.length - 2}`;
    }
  };
  
  // Custom scrollbar styles using CSS-in-JS
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 1px;
      height: 1px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #9ca3af;
      border-radius: 20px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #6b7280;
    }
    
    /* Hide scrollbar when not hovering */
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
    }
    
    /* Show scrollbar on hover */
    .custom-scrollbar:hover {
      scrollbar-width: thin;
      scrollbar-color: #9ca3af transparent;
    }
  `;
  
  return (
    <div className="relative text-green-700" ref={dropdownRef}>
      <style>{scrollbarStyles}</style>
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full border border-green-700 rounded-md px-4 py-2 text-left focus:outline-none"
      >
        <span className="block truncate">
          {getSelectedCategoryNames()}
        </span>
        <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-green-700 pointer-events-none"></i>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto custom-scrollbar">
          {safeOptions.map((option) => (
            <label key={option.id} className="flex items-center p-2 hover:bg-gray-50">
              <input
                type="checkbox"
                checked={selected && selected.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
                className="mr-2"
              />
              {option.name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;