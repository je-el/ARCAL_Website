import React from "react";

function Home({ isDarkMode }) {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to ArtCalc</h1>
      <p className="text-lg mb-6 max-w-xl">
        ArtCalc is a precision-focused calculator for macOS and iOS, designed to streamline complex computations with ease.
      </p>
      <div className="flex gap-4">
        <a
          href="https://apps.apple.com/app/idYOUR_IOS_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={isDarkMode ? "public/assets/ios-appstore-white.svg" : "public/assets/ios-appstore-black.svg"}
            alt="Download on the App Store"
            className="h-12"
          />
        </a>
        <a
          href="https://apps.apple.com/us/app/artilcalc/id6743814007?mt=12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={isDarkMode ? "public/assets/mac-appstore-white.svg" : "public/assets/mac-appstore-black.svg"}
            alt="Download on the Mac App Store"
            className="h-12"
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
