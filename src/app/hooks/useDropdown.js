import { useState, useEffect, useRef } from 'react';

const useDropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  }

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return { dropdownRef, isVisible, toggleDropdown }
}

export default useDropdown;