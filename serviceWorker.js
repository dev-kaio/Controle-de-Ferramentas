const cache = "controle-ferramentas-cache";
const assets = [
    "/",
    "aiklica.github.io/Controle-de-Ferramentas",
    "style.css",
    "icon1.png",
    "icon2.png"
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cache)
            .then((cache) => {
                return cache.addAll(assets);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [cache];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
