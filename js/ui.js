// Dropdown Toggle
const dropdownBtn = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

if (dropdownBtn && dropdownMenu) {
  dropdownBtn.addEventListener('click', () => {
    console.log('Dropdown button clicked'); // ✅ Logs when button is clicked
    dropdownMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    setTimeout(() => {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        console.log('Clicked outside dropdown'); // ✅ Logs when clicked elsewhere
        dropdownMenu.classList.add('hidden');
      }
    }, 10);
  });
}


// Dark Mode Toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;

toggleBtn.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");

    if (htmlElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
    }
});



// App installation
let deferredPrompt;
const installBtn = document.getElementById("install-button");


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
        .register("./service-worker.js")
        .then((reg) => console.log("Service worker registered:", reg.scope))
        .catch((err) => console.error("Service worker registration failed:", err));
    });
}


// Initially hide the install button
installBtn?.classList.add("hidden");

// Listen for beforeinstallprompt event
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault(); // Prevent automatic prompt
    deferredPrompt = e;
    console.log("🔥 beforeinstallprompt fired");

    // Show the install button
    installBtn?.classList.remove("hidden");
});

// Handle install button click
installBtn?.addEventListener("click", async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user's response
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User choice:", outcome);

    // Reset the deferred prompt variable & hide button
    deferredPrompt = null;
    installBtn?.classList.add("hidden");
});

// Listen for appinstalled event
window.addEventListener("appinstalled", () => {
    console.log("✅ App installed");
    deferredPrompt = null;
    installBtn?.classList.add("hidden");
});
