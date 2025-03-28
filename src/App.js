import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/support';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;