
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/serviceWorker.js')
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
  return window.matchMedia('(display-mode: browser)').matches && 
         'BeforeInstallPromptEvent' in window;
}
