my-artcalc-app/
├── node_modules/
│   └── [All installed npm packages. Generally do not modify anything here directly.]
│
├── public/
│   ├── index.html      [Main HTML entry point for your React app.]
│   └── favicon.ico     [Your site’s favicon.]
│
├── src/
│   ├── components/
│   │   ├── Home.jsx          [Home page component code.]
│   │   ├── PrivacyPolicy.jsx [Privacy policy page code.]
│   │   ├── Support.jsx       [Support page component code.]
│   │   └── Donate.jsx        [Donate page component code.]
│   │
│   ├── icons/
│   │   ├── mac-appstore-black.svg
│   │   ├── mac-appstore-white.svg
│   │   ├── ios-appstore-black.svg
│   │   └── ios-appstore-white.svg
│   │       [SVG files for App Store buttons, both dark & light variants.]
│   │
│   ├── App.jsx         [Main root component that handles routing and layout (navbar, dark/light mode).]
│   ├── index.js        [Your React entry point, rendering <App/> to the DOM.]
│   └── styles.css      [Global or shared CSS styles for your app.]
│
├── package.json        [Lists dependencies and scripts; used by npm or yarn.]
└── README.md           [Project documentation and instructions.]