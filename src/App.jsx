import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const navClasses = "px-4 py-2 rounded hover:underline cursor-pointer";

  return (
    <div className="min-h-screen bg-black text-white font-sans transition-colors duration-500">
      <header className="w-full shadow-md sticky top-0 bg-black z-50">
        <nav className="flex justify-center gap-4 p-6 max-w-6xl mx-auto">
          <button className={navClasses} onClick={() => setActiveTab("home")}>Home</button>
          <button className={navClasses} onClick={() => setActiveTab("privacy")}>Privacy Policy</button>
          <button className={navClasses} onClick={() => setActiveTab("support")}>Support</button>
          <button className={navClasses} onClick={() => setActiveTab("donate")}>Donate</button>
        </nav>
      </header>

      <main className="flex justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          {activeTab === "home" && (
            <div className="p-6 flex flex-col items-center justify-center text-center">
            <img src="assets/favicon.png" alt="ArtCalc Logo" className="logoimg"/>
              <h1 className="hero-heading">Welcome to ArtCalc</h1>
              <p className="text-lg mb-6 max-w-xl">
                ArtCalc is a precision-focused calculator for macOS and iOS, designed to streamline complex computations with ease.
              </p>
              <div className="app-store-buttons">
                <a href="https://apps.apple.com/app/idYOUR_IOS_APP_ID" target="_blank" rel="noopener noreferrer">
                  <img
                    src="assets/ios-appstore-black.svg"
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>
                <a href="https://apps.apple.com/us/app/artilcalc/id6743814007?mt=12" target="_blank" rel="noopener noreferrer">
                  <img
                    src="assets/mac-appstore-black.svg"
                    alt="Download on the Mac App Store"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="p-6 text-center">
              <h2 className="privacy-heading">ArtCalc Privacy Policy</h2>
              <p className="privacy-update"><em>Last Updated: March 20, 2025</em></p>
              <p className="mb-4">Welcome to <strong>ArtCalc</strong>! Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information when you use our app.</p>
              <h3 className="underbullet">✨ <strong>Information We Collect</strong></h3>
              <ul className="infobullet">
                <li>We do <strong>not</strong> collect any personally identifiable information.</li>
                <li>The app may store user preferences and calculation history <strong>locally</strong> on your device.</li>
              </ul>
              <h3 className="underbullet">📈<strong> How We Use Your Information</strong></h3>
              <ul className="infobullet">
                <li>Your data is only used to <strong>improve your experience</strong> within the app.</li>
                <li>We <strong>do not</strong> sell, rent, or share your data with third parties.</li>
              </ul>
              <h3 className="underbullet">🔒 <strong>Data Security</strong></h3>
              <ul className="infobullet">
                <li>All data is stored <strong>locally</strong> on your device.</li>
                <li>We take reasonable measures to protect your information from unauthorized access.</li>
              </ul>
              <h3 className="underbullet">♻️ <strong>Changes to This Policy</strong></h3>
              <ul className="infobullet">
                <li>We may update this Privacy Policy from time to time.</li>
                <li>All changes will be reflected in this document and noted with an updated date.</li>
              </ul>
              <h3 className="underbullet">✉️ <strong>Contact Us</strong></h3>
              <p className="infobullet">If you have any questions or concerns, feel free to reach out:</p>
              <p className="infobullet">Email: <a href="mailto:artil.calc@gmail.com" className="text-blue-400">artil.calc@gmail.com</a></p>
              <p className="infobullet">Thank you for using <strong>ArtCalc</strong>! ✨</p>
            </div>
          )}

          {activeTab === "support" && (
            <div className="p-6 text-center">
              <h1 className="privacy-heading"><strong>Support</strong></h1>
              <p className="infobullet">Need help? Contact us at <a href="mailto:artil.calc@gmail.com" className="text-blue-400">artil.calc@gmail.com</a></p>
              <p classname="infobullet">-</p>

              <p className="underbullet"><strong>FAQs</strong></p>
              <ul className="infobullet">
                <li><strong>Does ArtCalc store my data?</strong> <li>No, all data is stored locally.</li></li>

                <li><strong>What platforms are supported?</strong><li>Currently macOS and iOS. Android and Windows versions are planned for future release.</li></li>
              </ul>
              <p classname="underbullet">-</p>
              <h3 className="underbullet"><strong>Send Us Feedback</strong></h3>
              <p className="infobullet">Use the form below to share your thoughts, suggestions, or any issues you’ve encountered.</p>
              <div className="w-full aspect-[4/3]">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfYJsmNGXGX1j3T20nz16VPrRMd21P0n4ih1H_XS-02QOuykg/viewform?embedded=true" 
                  width="640" 
                  height="779" 
                  frameborder="0" 
                  marginheight="0" 
                  marginwidth="0">
                    Loading…
                </iframe>
              </div>
            </div>
          )}

          {activeTab === "donate" && (
            <div className="p-6 text-center">
              <h2 className="privacy-heading">Support ArtCalc</h2>
              <p className="underbullet">
                ArtCalc is developed and maintained with love. If you find it helpful and would like to support future updates and development, consider making a donation!
              </p>
              <div className="donationlinks">
                <a
                  href="https://www.ko-fi.com/jyule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donationlink"
                >
                  ☕ Buy Me a Coffee
                </a>
                <a
                  href="https://paypal.me/maldojewel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donationlink"
                >
                  💸 Donate via PayPal
                </a>
                <a
                  href="https://cash.app/$noje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donationlink"
                >
                  💚 Donate via CashApp
                </a>
              </div>
              <p className="underbullet">
                Thank you for supporting ArtCalc and helping us grow. Every bit counts! 💙
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
