import { Switch } from '@nextui-org/react';
import React, { useState, useEffect } from 'react'

import 'boxicons/css/boxicons.min.css'

const ThemeChanger = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleChange = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setDarkMode(true);
      return  document.body.classList.add('dark-mode');
    } else {
      setDarkMode(false);
    }
  },[])
  return (
        <Switch
            checked={darkMode}
            onChange={handleChange}
            size="small"
            
            iconOn={<i className='bx bxs-moon'></i>}
            iconOff={<i className='bx bxs-sun' ></i>}
        />
  )
}

export default ThemeChanger;

