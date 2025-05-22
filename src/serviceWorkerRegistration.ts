
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${window.location.origin}/serviceWorker.js`;
      navigator.serviceWorker.register(swUrl)
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
}

// Helper function to check if the app can be installed
export function isPWAInstallable(): boolean {
  // Check if the app is running in browser mode (not already installed)
  // and if the browser supports beforeinstallprompt event
  return window.matchMedia('(display-mode: browser)').matches && 
         typeof window !== 'undefined';
}

// Check if the app is running as an installed PWA
export function isRunningAsPWA(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches || 
         window.navigator.standalone === true;
}
