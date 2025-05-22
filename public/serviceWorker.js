
const CACHE_NAME = 'khizar-luxury-market-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/manifest.json',
  '/pwa-icons/icon-192x192.png',
  '/pwa-icons/icon-512x512.png',
  '/serviceWorker.js'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate and clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[ServiceWorker] Clearing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Ensures that the service worker takes control immediately
  return self.clients.claim();
});

// Fetch from cache first, then network
self.addEventListener('fetch', (event) => {
  console.log('[ServiceWorker] Fetch', event.request.url);
  
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request for the fetch call and cache
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest)
          .then((response) => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response for cache and browser
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                // Don't cache API requests, auth endpoints, or POST requests
                if (!event.request.url.includes('/api/') && 
                    !event.request.url.includes('/auth/') &&
                    event.request.method !== 'POST') {
                  console.log('[ServiceWorker] Caching new resource:', event.request.url);
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          });
      })
      .catch(() => {
        // Fallback for offline HTML pages
        if (event.request.url.indexOf('.html') > -1 || 
            event.request.url.endsWith('/') ||
            event.request.url === self.location.origin) {
          return caches.match('/');
        }
      })
  );
});

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
