
const content = document.getElementById("content");
const themeToggle = document.getElementById("themeToggle");

let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

function toggleTheme() {
  isDarkMode = !isDarkMode;
  renderPage(window.location.hash || "#home");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = isDarkMode ? "🌙" : "🌞";
  toggleTheme();
});

window.addEventListener("hashchange", () => {
  renderPage(window.location.hash || "#home");
});

function renderPage(route) {
  document.body.classList.toggle("dark", isDarkMode);
  themeToggle.textContent = isDarkMode ? "🌙" : "🌞";

  if (route === "#privacy-policy") {
    content.innerHTML = `
      <div class="p-6 max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Privacy Policy</h2>
        <p class="mb-2 font-medium">Last Updated: March 20, 2025</p>
        <p class="mb-4">Welcome to <strong>ARCal</strong>! Your privacy matters to us...</p>
        <ul class="list-disc list-inside mb-4">
          <li><strong>✨</strong> We don’t collect personally identifiable data</li>
          <li><strong>📈</strong> Data stays local on your device</li>
          <li><strong>🔒</strong> No data sharing</li>
          <li><strong>♻️</strong> We’ll update this policy if anything changes</li>
          <li><strong>✉️</strong> Contact: <a href="mailto:artil.calc@gmail.com">artil.calc@gmail.com</a></li>
        </ul>
      </div>`;
  } else if (route === "#support") {
    content.innerHTML = `
      <div class="p-6 max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Support</h2>
        <p class="mb-2">Email us at <a href="mailto:artil.calc@gmail.com">artil.calc@gmail.com</a></p>
        <ul class="list-disc list-inside mt-4">
          <li>Does ARCal store my data? – No, all data is stored locally.</li>
          <li>What platforms are supported? – macOS and iOS. Android and Windows coming soon!</li>
        </ul>
      </div>`;
  } else {
    content.innerHTML = `
      <div class="min-h-screen p-6 flex flex-col items-center justify-center text-center">
        <h1 class="text-4xl mb-4">Welcome to ARCal</h1>
        <p class="text-lg mb-6 max-w-xl">
          ARCal is a precision-focused calculator for macOS and iOS, designed to streamline complex computations with ease.
        </p>
        <div class="flex gap-4">
          <a href="https://apps.apple.com/app/idYOUR_IOS_APP_ID" target="_blank" rel="noopener noreferrer">
            <img class="h-12" src="${isDarkMode ? 
              'ARCal_Static_Visual_Clone/Assets/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg' : 
              'ARCal_Static_Visual_Clone/Assets/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'}" alt="Download on the App Store">
          </a>
          <a href="https://apps.apple.com/app/idYOUR_MAC_APP_ID?platform=mac" target="_blank" rel="noopener noreferrer">
            <img class="h-12" src="${isDarkMode ? 
              'ARCal_Static_Visual_Clone/Assets/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg' : 
              'ARCal_Static_Visual_Clone/Assets/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg'}" alt="Download on the Mac App Store">
          </a>
        </div>
      </div>`;
  }
}

// Initial render
window.addEventListener("DOMContentLoaded", () => {
  renderPage(window.location.hash || "#home");
});
