Project Structure:
my-react-app/
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── favicon.ico
│   └── Assets/
│       ├── Download_on_App_Store/
│       │   ├── Black_lockup/
│       │   │   └── SVG/
│       │   │       └── Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg
│       │   └── White_lockup/
│       │       └── SVG/
│       │           └── Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg
│       └── Download_on_Mac_App_Store/
│           ├── Black_lockup/
│           │   └── SVG/
│           │       └── Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg
│           └── White_lockup/
│               └── SVG/
│                   └── Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg
└── src/
    ├── index.js
    ├── App.js
    ├── components/
    │   ├── Navbar.js
    │   ├── Navbar.css
    │   └── ThemeToggle.js
    ├── pages/
    │   ├── Home.js
    │   ├── Home.css
    │   ├── PrivacyPolicy.js
    │   ├── PrivacyPolicy.css
    │   ├── Support.js        // New support page
    │   └── Support.css       // New support page CSS
    └── ThemeContext.js