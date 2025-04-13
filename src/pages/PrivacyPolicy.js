import React from "react";
import { Helmet } from "react-helmet";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – ArtCalc</title>
      </Helmet>
      <nav className="fixed top-24 left-4 w-48 bg-gray-800 text-white p-4 rounded shadow-lg text-sm space-y-2 z-40">
        <p className="font-bold mb-2">On this page</p>
        <a href="#privacy" className="block hover:underline">Privacy Policy</a>
        <a href="#info-we-dont-collect" className="block hover:underline">1. No Data Collection</a>
        <a href="#data-you-provide" className="block hover:underline">2. Data You Provide</a>
        <a href="#security" className="block hover:underline">5. Security</a>
        <a href="#california-rights" className="block hover:underline">8. CA Privacy Rights</a>
        <a href="#terms" className="block hover:underline mt-4">Terms & Conditions</a>
      </nav>
      <div className="p-6 max-w-3xl mx-auto text-white">
        <hr className="border-gray-700 mb-6" />
        <h1 id="privacy" className="text-3xl font-bold mb-4 text-center">ArtCalc Privacy Policy</h1>
        <p className="text-sm italic mb-6 text-center">
          Last Updated: April 11, 2015 | <strong>Effective Date:</strong> April 11, 2025
        </p>
    
        <p id="info-we-dont-collect" className="mb-4"><strong>1. Information We Do Not Collect</strong></p>
        <p className="mb-6">
          ArtCalc does <strong>not</strong> collect, store, or transmit any personally identifiable information (PII) from users. We do not request access to your contacts, location, device identifiers, or usage data.
        </p>
    
        <p id="data-you-provide" className="mb-4"><strong>2. Data You Provide</strong></p>
        <p className="mb-6">
          If you choose to contact us via email (<a className="text-blue-400 underline" href="mailto:artil.calc@gmail.com">artil.calc@gmail.com</a>), we may retain your email address and message content solely for the purpose of responding to your inquiry. We do not share this information with third parties.
        </p>
    
        <p className="mb-4"><strong>3. Analytics and Tracking</strong></p>
        <p className="mb-6">
          ArtCalc does not use analytics tools or third-party tracking services.
        </p>
    
        <p className="mb-4"><strong>4. Children’s Privacy</strong></p>
        <p className="mb-6">
          ArtCalc is not intended for use by children under the age of 13. We do not knowingly collect personal data from children. If you believe we have inadvertently received such information, please contact us so we can delete it.
        </p>
    
        <p id="security" className="mb-4"><strong>5. Security</strong></p>
        <p className="mb-6">
          Although no app can guarantee absolute security, we implement reasonable measures to protect any limited data (such as emails sent to us) from unauthorized access or disclosure.
        </p>
    
        <p className="mb-4"><strong>6. Changes to This Policy</strong></p>
        <p className="mb-6">
          We may update this Privacy Policy occasionally. Any changes will be posted within the app or made available through our contact channels. Continued use of the app after changes constitutes acceptance of the updated policy.
        </p>
    
        <p className="mb-4"><strong>7. Contact Us</strong></p>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, you can contact us at: <br />
          <strong>Email:</strong> <a className="text-blue-400 underline" href="mailto:artil.calc@gmail.com">artil.calc@gmail.com</a>
        </p>
    
        <p id="california-rights" className="mb-4"><strong>8. California Privacy Rights</strong></p>
        <p className="mb-6">
          Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), California residents have the right to know what personal information is collected, used, shared, or sold.
          <br /><br />
          <strong>ArtCalc does not collect or sell any personal information.</strong> <br />
          We do not knowingly track or store user data, and we do not share any data with third parties.
          <br /><br />
          If you are a California resident and have questions or concerns regarding your rights under CCPA/CPRA, you may contact us at <a className="text-blue-400 underline" href="mailto:artil.calc@gmail.com">artil.calc@gmail.com</a>.
        </p>
        
        <hr className="border-gray-700 my-10" />
        <h2 id="terms" className="text-3xl font-bold mb-4 text-center">Terms and Conditions</h2>
        <p className="text-sm italic mb-6 text-center">
          <strong>Effective Date:</strong> April 11, 2025
        </p>

        <p className="mb-6">
          Welcome to ArtCalc! Please read these Terms and Conditions ("Terms") carefully before using the ArtCalc application ("App") operated by Jewel Maldonado ("we," "us," or "our"). By downloading, accessing, or using the App, you agree to be bound by these Terms.
        </p>

        <p className="mb-4"><strong>1. Acceptance of Terms</strong></p>
        <p className="mb-6">
          By accessing or using ArtCalc, you agree to comply with and be bound by these Terms. If you do not agree with any part of the Terms, you may not use the App.
        </p>

        <p className="mb-4"><strong>2. Use of the Application</strong></p>
        <p className="mb-6">
          ArtCalc is intended for informational and general-purpose calculation use only. You are solely responsible for how you choose to use the outputs generated by the App.
          <br /><br />
          ArtCalc may be updated periodically to introduce new features, fix bugs, or improve performance. While we strive to maintain a high-quality experience, we do not guarantee continued support for any specific version or feature.
        </p>

        <p className="mb-4"><strong>3. No Responsibility / Use at Your Own Risk</strong></p>
        <p className="mb-6">
          By using ArtCalc, you acknowledge and agree that your use of the App is entirely at your own risk. ArtCalc is provided "as is" without warranties of any kind, either express or implied.
          <br /><br />
          <strong>Limited Liability:</strong><br />
          We shall not be held liable for any damages, losses, or issues arising from the use or misuse of the App, including but not limited to incorrect calculations, data loss, or compatibility issues.
          <br /><br />
          <strong>Use at Your Own Risk:</strong><br />
          You accept full responsibility for any actions taken based on the outputs or functions of ArtCalc.
          <br /><br />
          <strong>No Guarantees:</strong><br />
          We do not guarantee any specific outcomes, performance levels, or uninterrupted access.
        </p>

        <p className="mb-4"><strong>4. Limitation of Liability</strong></p>
        <p className="mb-6">
          To the maximum extent permitted by applicable law, our total liability for any claims arising out of or relating to the use of ArtCalc shall be limited to the <strong>lesser of (a) the total amount you paid, if any, for access to the App, or (b) $100.</strong>
          <br /><br />
          Under no circumstances shall we be liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits or data.
        </p>

        <p className="mb-4"><strong>5. Dispute Resolution</strong></p>
        <p className="mb-6">
          In the event of any dispute arising from your use of the App, you agree to first attempt to resolve the dispute through informal negotiations by contacting us directly.
          <br /><br />
          If a resolution cannot be reached within 30 days, the dispute will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association (AAA). Arbitration will take place individually and not as part of any class action.
          <br /><br />
          This agreement shall be governed by the laws of the state of Colorado, without regard to its conflict of law rules.
        </p>

        <p className="mb-4"><strong>6. Changes to Terms</strong></p>
        <p className="mb-6">
          We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon posting within the App or through other means of notification.
        </p>

        <p className="mb-4"><strong>7. Contact Us</strong></p>
        <p className="mb-6">
          If you have any questions about these Terms, please contact us at: <br />
          <strong>Email:</strong> <a className="text-blue-400 underline" href="mailto:artil.calc@gmail.com">artil.calc@gmail.com</a>
        </p>
      </div>
    </>
  );
}

export default PrivacyPolicy;
