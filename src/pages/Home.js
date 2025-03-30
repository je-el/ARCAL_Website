// src/pages/Home.js
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./Home.css";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const appStoreSrc =
    theme === "dark"
      ? "/Assets/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
      : "/Assets/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";

  const macAppStoreSrc =
    theme === "dark"
      ? "/Assets/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg"
      : "/Assets/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg";

  return (
    <div className="home">
      <h1>Welcome to ARCal</h1>
      <p>Your ultimate app for augmented reality experiences.</p>
      <div className="store-buttons">
        <a
          href="https://apps.apple.com/app/idYOUR_IOS_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appStoreSrc} alt="Download on the App Store" />
        </a>
        <a
          href="https://apps.apple.com/app/idYOUR_MAC_APP_ID?platform=mac"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={macAppStoreSrc} alt="Download on the Mac App Store" />
        </a>
      </div>
    </div>
  );
};

export default Home;