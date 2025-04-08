import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
//import { Card, CardContent } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

function Home({ isDarkMode }) {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to ArtCalc</h1>
      <p className="text-lg mb-6 max-w-xl">
        ArtCalc is a precision-focused calculator for soldiers, designed to streamline complex computations with ease.
      </p>
      <div className="flex gap-4">
        <a
          href="https://apps.apple.com/app/idYOUR_IOS_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            // TODO: Replace with path to iOS App Store badge (black or white based on theme)
            src={isDarkMode ? "src/icons/ios-appstore-white.svg" : "src/icons/ios-appstore-black.svg"}
            alt="Download on the App Store"
            className="h-12"
          />
        </a>
        <a
          href="https://apps.apple.com/app/idYOUR_MAC_APP_ID?platform=mac"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            // TODO: Replace with path to Mac App Store badge (black or white based on theme)
            src={isDarkMode ? "src/icons/mac-appstore-white.svg" : "src/icons/mac-appstore-black.svg"}
            alt="Download on the Mac App Store"
            className="h-12"
          />
        </a>
      </div>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
      <p className="mb-2 font-medium">Last Updated: March 20, 2025</p>
      <p className="mb-4">Welcome to <strong>ARCal</strong>! Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information when you use our app.</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✨ 1. Information We Collect</h3>
      <ul className="list-disc list-inside mb-4">
        <li>We do <strong>not</strong> collect any personally identifiable information.</li>
        <li>The app may store user preferences and calculation history <strong>locally</strong> on your device.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">📈 2. How We Use Your Information</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Your data is only used to <strong>improve your experience</strong> within the app.</li>
        <li>We <strong>do not</strong> sell, rent, or share your data with third parties.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">🔒 3. Data Security</h3>
      <ul className="list-disc list-inside mb-4">
        <li>All data is stored <strong>locally</strong> on your device.</li>
        <li>We take reasonable measures to protect your information from unauthorized access.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">♻️ 4. Changes to This Policy</h3>
      <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be reflected in this document and noted with an updated date.</p>

      <h3 className="text-xl font-semibold mb-2">✉️ 5. Contact Us</h3>
      <p>If you have any questions or concerns, feel free to reach out:</p>
      <p className="mt-2 font-medium">Email: <a href="mailto:artil.calc@gmail.com" className="text-blue-600">artil.calc@gmail.com</a></p>

      <p className="mt-6">Thank you for using <strong>ARCal</strong>! ✨</p>
    </div>
  );
}

function Support() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Support</h2>
      <p className="mb-2">Need help? Contact us at <a href="mailto:artil.calc@gmail.com" className="text-blue-600">artil.calc@gmail.com</a></p>
      <p className="mt-4 font-semibold">FAQs</p>
      <ul className="list-disc list-inside">
        <li>Does ARCal store my data? - No, all data is stored locally.</li>
        <li>What platforms are supported? - Currently macOS and iOS. Android and Windows versions are planned for future release.</li>
      </ul>
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', (e) => setIsDarkMode(e.matches));
    return () => mediaQuery.removeEventListener('change', (e) => setIsDarkMode(e.matches));
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
      <Router>
        <div className="flex justify-end p-4">
          <Link to="/" className="mr-4 text-blue-600">Home</Link>
          <Link to="/privacy-policy" className="mr-4 text-blue-600">Privacy Policy</Link>
          <Link to="/support" className="text-blue-600">Support</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <button onClick={toggleTheme} className="p-2 rounded-full shadow-md">
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
      </Router>
    </div>
  );
}

export default App;
