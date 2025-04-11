import React from "react";

function PrivacyPolicy() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">ArtCalc Privacy Policy</h2>
      <p className="mb-2 font-medium">Last Updated: March 20, 2025</p>

      <p className="mb-4">Welcome to <strong>ArtCalc</strong>! Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information when you use our app.</p>

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
      <ul className="list-disc list-inside mb-4">
        <li>We may update this Privacy Policy from time to time.</li>
        <li>All changes will be reflected in this document and noted with an updated date.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">✉️ 5. Contact Us</h3>
      <p className="mb-4">If you have any questions or concerns, feel free to reach out:</p>
      <p className="font-medium">Email: <a href="mailto:artil.calc@gmail.com" className="text-blue-600">artil.calc@gmail.com</a></p>

      <p className="mt-6">Thank you for using <strong>ARCal</strong>! ✨</p>
    </div>
  );
}

export default PrivacyPolicy;
