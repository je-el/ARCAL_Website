import React from "react";

function SupportPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Support</h2>
      <p className="mb-2">Need help? Contact us at <a href="mailto:artil.calc@gmail.com" className="text-blue-600">artil.calc@gmail.com</a></p>

      <p className="mt-4 font-semibold">FAQs</p>
      <ul className="list-disc list-inside mb-6">
        <li>Does ArtCalc store my data? - No, all data is stored locally.</li>
        <li>What platforms are supported? - Currently macOS and iOS. Android and Windows versions are planned for future release.</li>
      </ul>

      <h3 className="text-2xl font-bold mb-2">Send Us Feedback</h3>
      <p className="mb-4">Use the form below to share your thoughts, suggestions, or any issues you’ve encountered.</p>
      <div className="w-full aspect-[4/3]">
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfYJsmNGXGX1j3T20nz16VPrRMd21P0n4ih1H_XS-02QOuykg/viewform?embedded=true" 
            width="640" 
            height="779" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">Loading…
        </iframe>
        
          Loading…
      </div>
    </div>
  );
}

export default SupportPage;
