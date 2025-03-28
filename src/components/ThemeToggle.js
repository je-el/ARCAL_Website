// src/components/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ? (
        <img src={`${process.env.PUBLIC_URL}/assets/white-icon.svg`} alt="Switch to dark mode" />
      ) : (
        <img src={`${process.env.PUBLIC_URL}/assets/black-icon.svg`} alt="Switch to light mode" />
      )}
    </button>
  );
};

export default ThemeToggle;