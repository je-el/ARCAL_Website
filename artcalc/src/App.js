import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;