import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to ARCal</h1>
        <p>Your ultimate app for augmented reality experiences.</p>
        <div className="store-buttons">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Download_on_App_Store.svg`}
              alt="Download on the App Store"
            />
          </a>
          <a href="https://www.apple.com/mac/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Download_on_Mac_App_Store.svg`}
              alt="Download on the Mac App Store"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;