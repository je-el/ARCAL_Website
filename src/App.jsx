import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TbBrandCashapp, TbBrandPaypal } from "react-icons/tb";
import { FaDonate } from "react-icons/fa";
import { SiKofi } from "react-icons/si";
import Home from './Home';
//import PrivacyPolicy from './PrivacyPolicy';
//import Support from './Support';
//import Donate from './Donate';
import './styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/support">Support Page</Link>
          <Link to="/donate">Donate</Link>
          <button onClick={toggleDarkMode} className="mode-toggle">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <h2>Privacy Policy</h2>
      <p>
        Include your privacy policy details here. Explain how data is collected, used, and protected.
      </p>
    </div>
  );
}

function Support() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your email sending logic (e.g., via EmailJS or a backend API)
    alert('Feedback submitted! Thank you for your input.');
  };

  return (
    <div className="support">
      <h2>Support Page</h2>
      <form onSubmit={handleSubmit} className="support-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message">Feedback, Suggestions, or Issues:</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

function Donate() {
  return (
    <div className="donate">
      <h2>Donate</h2>
      <div className="donate-buttons">
        
        <a href="https://ko-fi.com/yourpage" target="_blank" rel="noopener noreferrer">
          <SiKofi size={32} />
          <span>Ko-fi</span>
        </a>
        <a href="https://cash.app/$yourhandle" target="_blank" rel="noopener noreferrer">
          <TbBrandCashapp size={32} />
          <span>CashApp</span>
        </a>
        <a href="https://www.paypal.com/paypalme/yourpage" target="_blank" rel="noopener noreferrer">
          <TbBrandPaypal size={32} />
          <span>PayPal</span>
        </a>
      </div>
    </div>
  );
}
export default App;