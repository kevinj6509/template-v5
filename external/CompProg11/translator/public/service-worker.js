/* use strict mode in all your programs. It helps you to write cleaner code,
 * like preventing you from using undeclared variables.
 */
/*"use strict";

// files to cache for offline use
const FILES_TO_CACHE = [
  "offline.html",
  "index.html",
  "check.js",
  "install.js",
  "style.css",
  "addserviceworker.js",
  "manifest.json",
  "service-worker.js"
];
*/
/* Providing a cache name, allows us to version files so we can
 * easily update some files w/o affecting others. Change the
 * cache name any time any of the chached files have chaged
 */
/*
const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

/* Adds an install event to the page that caches offline resources */
self.addEventListener("install", evt => {
  console.log("[ServiceWorker] Install");

  // Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("[ServiceWorker] Pre-caching offline page");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

/* Once your service worker is ready to control clients and handle
 * functional events like push and sync, you'll get an active event
 */

self.addEventListener("activate", evt => {
  console.log("[ServiceWorker] Activate");

  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

/* handle
 *
 */
/*
self.addEventListener("fetch", evt => {
  console.log("[Service Worker] Fetch", evt.request.url);
  if (evt.request.url.includes("/")) {
    console.log("[Service Worker] Fetch (data)", evt.request.url);
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(evt.request)
          .then(response => {
            //if the response was good, clone it and store it in cache
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }
            return response;
          })
          .catch(err => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);
          });
      })
    );
    return;
  } // if

  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
});
*/