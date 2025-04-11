import React from "react";

function DonatePage() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Support ArtCalc</h2>
      <p className="mb-6 text-lg">
        ArtCalc is developed and maintained with love. If you find it helpful and would like to support future updates and development, consider making a donation!
      </p>

      <div className="flex flex-col items-center space-y-4">
        <a
          href="https://www.buymeacoffee.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded shadow-md"
        >
          ☕ Buy Me a Coffee
        </a>

        <a
          href="https://paypal.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-md"
        >
          💸 Donate via PayPal
        </a>

        <a
          href="https://cash.app/$yourcashtag"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded shadow-md"
        >
          💚 Donate via CashApp
        </a>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Thank you for supporting ARCal and helping us grow. Every bit counts! 💙
      </p>
    </div>
  );
}

export default DonatePage;