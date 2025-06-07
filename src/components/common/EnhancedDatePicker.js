import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const EnhancedDatePicker = ({ 
  value, 
  onChange, 
  name, 
  className = '', 
  required = false, 
  min = '1970-01-01', 
  max,
  placeholder = 'Select date',
  label,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);
  const [viewDate, setViewDate] = useState(value ? new Date(value) : new Date());
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const currentYear = new Date().getFullYear();
  const minYear = min ? new Date(min).getFullYear() : 1970;
  const maxYear = max ? new Date(max).getFullYear() : currentYear;

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowYearPicker(false);
        setShowMonthPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Format date for display
  const formatDisplayDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Format date for input value (YYYY-MM-DD)
  const formatInputDate = (date) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  };

  // Handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const formattedDate = formatInputDate(date);
    
    // Create synthetic event for compatibility
    const syntheticEvent = {
      target: {
        name: name,
        value: formattedDate
      }
    };
    
    onChange(syntheticEvent);
    setIsOpen(false);
    setShowYearPicker(false);
    setShowMonthPicker(false);
  };

  // Handle year selection
  const handleYearSelect = (year) => {
    const newDate = new Date(viewDate);
    newDate.setFullYear(year);
    setViewDate(newDate);
    setShowYearPicker(false);
  };

  // Handle month selection
  const handleMonthSelect = (month) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(month);
    setViewDate(newDate);
    setShowMonthPicker(false);
  };

  // Navigate months
  const navigateMonth = (direction) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(viewDate.getMonth() + direction);
    setViewDate(newDate);
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return days;
  };

  // Check if date is in current month
  const isCurrentMonth = (date) => {
    return date.getMonth() === viewDate.getMonth();
  };

  // Check if date is selected
  const isSelected = (date) => {
    return selectedDate && 
           date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  // Check if date is today
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  // Check if date is disabled
  const isDisabled = (date) => {
    const minDate = min ? new Date(min) : null;
    const maxDate = max ? new Date(max) : null;
    
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="relative" ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-green-800 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      {/* Input Field */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          name={name}
          value={selectedDate ? formatDisplayDate(selectedDate) : ''}
          placeholder={placeholder}
          className={`w-full p-2 pr-10 border border-green-300 rounded-md focus:border-green-500 focus:outline-none cursor-pointer ${className}`}
          onClick={() => setIsOpen(!isOpen)}
          readOnly
          required={required}
          {...props}
        />
        <Calendar 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600 pointer-events-none" 
        />
      </div>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => navigateMonth(-1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setShowMonthPicker(!showMonthPicker)}
                className="px-3 py-1 hover:bg-gray-100 rounded flex items-center space-x-1"
              >
                <span className="font-medium">{months[viewDate.getMonth()]}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <button
                type="button"
                onClick={() => setShowYearPicker(!showYearPicker)}
                className="px-3 py-1 hover:bg-gray-100 rounded flex items-center space-x-1"
              >
                <span className="font-medium">{viewDate.getFullYear()}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            
            <button
              type="button"
              onClick={() => navigateMonth(1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Year Picker */}
          {showYearPicker && (
            <div className="mb-4 max-h-48 overflow-y-auto border rounded p-2">
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i).reverse().map(year => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => handleYearSelect(year)}
                    className={`p-2 text-sm rounded hover:bg-green-100 ${
                      year === viewDate.getFullYear() 
                        ? 'bg-green-600 text-white' 
                        : 'hover:bg-green-50'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Month Picker */}
          {showMonthPicker && (
            <div className="mb-4 border rounded p-2">
              <div className="grid grid-cols-3 gap-1">
                {months.map((month, index) => (
                  <button
                    key={month}
                    type="button"
                    onClick={() => handleMonthSelect(index)}
                    className={`p-2 text-sm rounded hover:bg-green-100 ${
                      index === viewDate.getMonth() 
                        ? 'bg-green-600 text-white' 
                        : 'hover:bg-green-50'
                    }`}
                  >
                    {month.slice(0, 3)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Calendar Grid */}
          {!showYearPicker && !showMonthPicker && (
            <>
              {/* Week Days Header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map(day => (
                  <div key={day} className="p-2 text-xs font-medium text-gray-500 text-center">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays().map((date, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => !isDisabled(date) && handleDateSelect(date)}
                    disabled={isDisabled(date)}
                    className={`p-2 text-sm rounded hover:bg-green-100 ${
                      !isCurrentMonth(date) 
                        ? 'text-gray-400' 
                        : isSelected(date)
                        ? 'bg-green-600 text-white'
                        : isToday(date)
                        ? 'bg-green-100 text-green-800 font-medium'
                        : 'hover:bg-green-50'
                    } ${
                      isDisabled(date) 
                        ? 'cursor-not-allowed opacity-50' 
                        : 'cursor-pointer'
                    }`}
                  >
                    {date.getDate()}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Quick Actions */}
          <div className="mt-4 pt-3 border-t flex justify-between">
            <button
              type="button"
              onClick={() => handleDateSelect(new Date())}
              className="px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedDate(null);
                onChange({ target: { name, value: '' } });
                setIsOpen(false);
              }}
              className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedDatePicker;
