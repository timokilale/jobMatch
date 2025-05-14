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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-left focus:outline-none"
      >
        <span>
        {selected && selected.length > 0
          ? `Selected (${selected.length})`
          : 'Select categories'}
        </span>
        <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
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