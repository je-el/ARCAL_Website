// src/pages/Home.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './Home.css';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const appStoreSrc = theme === 'dark'
    ? `${process.env.PUBLIC_URL}/Assets/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg`
    : `${process.env.PUBLIC_URL}/Assets/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg`;

  const macAppStoreSrc = theme === 'dark'
    ? `${process.env.PUBLIC_URL}/Assets/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg`
    : `${process.env.PUBLIC_URL}/Assets/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg`;

  return (
    <div className="home">
      {/* Your logo and other elements */}
      <div className="store-buttons">
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={appStoreSrc} alt="Download on the App Store" />
        </a>
        <a href="https://www.apple.com/mac/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={macAppStoreSrc} alt="Download on the Mac App Store" />
        </a>
      </div>
    </div>
  );
};

export default Home;