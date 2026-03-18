const CACHE = 'cerrada-v3';
const FILES = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Para llamadas al Shelly (API externa), siempre usar red
  if (e.request.url.includes('shelly.cloud')) {
    e.respondWith(fetch(e.request));
    return;
  }
  // Para el resto, cache primero
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
