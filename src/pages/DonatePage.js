import React from "react";

function DonatePage() {
  return (
    <section className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Support ArtCalc</h2>
      <p className="mb-6 text-lg">
        ArtCalc is developed and maintained with love. If you find it helpful and would like to support future updates and development, consider making a donation!
      </p>

      <div className="flex flex-col items-center space-y-4">
        <iframe
          id="kofiframe"
          src="https://ko-fi.com/jyule/?hidefeed=true&widget=true&embed=true&preview=true"
          style={{ border: 'none', width: '100%', padding: '4px', background: '#f9f9f9' }}
          height="712"
          title="Ko-fi donation widget"
        />

        <a
          href="https://paypal.me/maldojewel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-md transition-colors duration-200"
          aria-label="Donate via PayPal"
        >
          <img
            src="./public/assets/paypal.svg"
            alt="PayPal Logo"
            className="h-10 mx-auto mb-2"
          />
          💸 Donate via PayPal
        </a>

        <a
          href="https://cash.app/$noje"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Donate via CashApp QR"
        >
          <img
            src="./public/assets/cashapp.svg"
            alt="CashApp Logo"
            className="w-40 h-auto mx-auto transition-transform duration-200 hover:scale-105"
          />
        </a>

        <a
          href="https://cash.app/$noje"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded shadow-md transition-colors duration-200"
          aria-label="Donate via CashApp"
        >
          💚 Donate via CashApp
        </a>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Thank you for supporting ArtCalc and helping us grow. Every bit counts! 💙
      </p>
    </section>
  );
}

export default DonatePage;