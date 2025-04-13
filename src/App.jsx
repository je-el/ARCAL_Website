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
              <div className="privacybody">
                <h2 className="privacy-heading">ArtCalc Privacy Policy</h2>
                <p className="privacy-update"><em>Last Updated: April 11, 2025</em></p>
                
                <p><strong>Effective Date:</strong> April 11, 2025</p>
                <p>ArtCalc ("App") is developed and operated by Jewel Maldonado ("we," "us," or "our"). This Privacy Policy explains how we collect, use, and protect your information when you use our app.</p>

                <p>1. Information We Collect</p>
                <p>ArtCalc does <strong>not</strong> collect, store, or transmit any personally identifiable information (PII) from users.</p>

                <p>2. Data You Provide</p>
                <p>If you contact us via email (artil.calc@gmail.com), we retain your email solely to respond. We do not share it.</p>

                <p>3. Analytics and Tracking</p>
                <p>ArtCalc does not use analytics or third-party tracking tools.</p>

                <p>4. Children’s Privacy</p>
                <p>The app is not intended for children under 13. We do not knowingly collect data from children.</p>

                <p>5. Security</p>
                <p>We use reasonable safeguards to protect limited data (e.g., email correspondence).</p>

                <h3 className="underbullet">6. Changes to This Policy</h3>
                <p>We may update this Privacy Policy occasionally. Changes will be posted and noted by date.</p>

                <h3 className="underbullet">7. Contact Us</h3>
                <p>Email: <a href="mailto:artil.calc@gmail.com" className="text-blue-400">artil.calc@gmail.com</a></p>

                <h3 className="underbullet">8. California Privacy Rights</h3>
                <p>Under the CCPA and CPRA, California users have the right to know how their info is used.</p>
                <p><strong>ArtCalc does not collect or sell any personal information.</strong></p>
              
                <h2 className="privacy-heading">ArtCalc Terms and Conditions</h2>
                <p className="privacy-update"><em>Effective Date: April 11, 2025</em></p>

                <h3 className="underbullet">1. Acceptance of Terms</h3>
                <p>By using ArtCalc, you agree to comply with these Terms. If not, do not use the App.</p>

                <h3 className="underbullet">2. Use of the Application</h3>
                <p>ArtCalc is intended for informational/general-purpose calculation use only. You are solely responsible for how you use the app’s outputs.</p>
                <p>ArtCalc may be updated periodically. We do not guarantee continued support for any specific version or feature.</p>

                <h3 className="underbullet">3. No Responsibility / Use at Your Own Risk</h3>
                <p>ArtCalc is provided “as is.” You use the app at your own risk. We make no guarantees and are not liable for damages.</p>

                <h3 className="underbullet">4. Limitation of Liability</h3>
                <p>Our liability is limited to the lesser of the amount paid by you or $100.</p>

                <h3 className="underbullet">5. Dispute Resolution</h3>
                <p>Disputes should first be resolved informally. If unresolved, they will be handled by binding arbitration under Colorado law.</p>

                <h3 className="underbullet">6. Changes to Terms</h3>
                <p>We may update these Terms at any time. Continued use implies acceptance.</p>

                <h3 className="underbullet">7. Contact Us</h3>
                <p>Email: <a href="mailto:artil.calc@gmail.com" className="text-blue-400">artil.calc@gmail.com</a></p>
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
                <p className="donationtext">
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
                <p className="donationtext">
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