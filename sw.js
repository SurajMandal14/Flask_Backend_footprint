const CACHE_NAME = 'water-footprint-app-v1';

const urlsToCache = [
    '/',                        // Root directory
    'template/index.html',       // Make sure the path is correct
    '/static/css/bootstrap.min.css',
    '/static/js/jquery.min.js',
    '/upload',                   // Ensure this endpoint can be cached if it's a static resource
    '/static/images/default.jpg' // Placeholder image
];

// Install event: Cache resources
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache).catch(function(err) {
                    console.error('Error caching resources: ', err);
                });
            })
    );
});


// Fetch event: Serve cached content when offline
self.addEventListener('fetch', function(event) {
    if (event.request.url.includes('/upload')) {
        event.respondWith(
            caches.open(CACHE_NAME)
                .then(function(cache) {
                    return fetch(event.request)
                        .then(function(response) {
                            cache.put(event.request.url, response.clone());
                            return response;
                        });
                })
        );
    } else {
        event.respondWith(
            caches.match(event.request)
                .then(function(response) {
                    return response || fetch(event.request);
                })
        );
    }
});


// Activate event: Clean up old caches
self.addEventListener('activate', function(event) {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
