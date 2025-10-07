self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(app-saudacao-cache).then(cache => {
         return cache.addAll([
            "index.html",
            "manifest.json",
            "images/icon.png",
            "images/sol.png",
            "images/moon.png",
            "images/cup.png",
            "images/wall-moon.jpeg",
            "images/wall-cup.jpg",
            "images/wall-sun.jpg"
         ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
