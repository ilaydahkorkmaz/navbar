import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  // LocalStorage'dan tema bilgisini al
  const current_theme = localStorage.getItem('current_theme') || 'light'; // Varsayılan tema 'light'
  
  // State tanımla
  const [theme, setTheme] = useState(current_theme);
  
  useEffect(()=>{
   localStorage.setItem('current_theme', theme)
  }, [theme])


  

  // Tema değişikliklerini kaydetmek için bir fonksiyon
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('current_theme', newTheme); // Yeni temayı LocalStorage'a kaydet
  };

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={handleThemeChange} />
    </div>
  );
};

export default App;
