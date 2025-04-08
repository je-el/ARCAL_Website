import React from 'react';
// Import your SVGs for the Mac and iOS App Store buttons
import MacAppStoreWhite from './icons/mac-appstore-white.svg';
import MacAppStoreBlack from './icons/mac-appstore-black.svg';
import IOSAppStoreWhite from './icons/ios-appstore-white.svg';
import IOSAppStoreBlack from './icons/ios-appstore-black.svg';

function Home({ darkMode }) {
  // Choose the appropriate icon based on dark mode
  const macIcon = darkMode ? MacAppStoreWhite : MacAppStoreBlack;
  const iosIcon = darkMode ? IOSAppStoreWhite : IOSAppStoreBlack;

  return (
    <div className="home">
      <h1>Welcome to ArtCalc</h1>
      <p>
        ArtCalc is a calculator designed to streamline complex and iterative US ARMY Artillery Calculations.
      </p>
      <div className="store-links">
        <a href="https://apps.apple.com/mac-app-link" target="_blank" rel="noopener noreferrer">
          <img src={macIcon} alt="Download on the Mac App Store" />
        </a>
        <a href="https://apps.apple.com/ios-app-link" target="_blank" rel="noopener noreferrer">
          <img src={iosIcon} alt="Download on the iOS App Store" />
        </a>
      </div>
    </div>
  );
}

export default Home;