const CACHE_NAME = 'absensi-v1';
const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  'https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
  'https://www.gstatic.com/firebasejs/9.6.0/firebase-database-compat.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
