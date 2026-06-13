// ═══════════════════════════════════════════════════════════════
//  Apna College Bihar — Service Worker v4.0
//  Strategy:
//    - STATIC SHELL  → Cache-First  (app shell, fonts, icons)
//    - DATA FILES    → Stale-While-Revalidate  (json data)
//    - NAVIGATION    → Network-First with offline fallback
//    - EVERYTHING ELSE → Network-First
// ═══════════════════════════════════════════════════════════════

const CACHE_VERSION = 'acb-v22';
const STATIC_CACHE  = `${CACHE_VERSION}-static`;
const DATA_CACHE    = `${CACHE_VERSION}-data`;
const OFFLINE_URL   = '/offline.html';

// Static shell assets — pre-cached on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/logo-acb.png',
  '/logo-192.png',
  '/logo-512.png',
];

// ─── Install: pre-cache the shell ──────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      // Use individual try-catch so one bad asset doesn't fail all
      return Promise.allSettled(
        STATIC_ASSETS.map(url =>
          cache.add(url).catch(() => console.warn('[SW] Failed to pre-cache:', url))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// ─── Activate: clean up old caches ─────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith('acb-') && k !== STATIC_CACHE && k !== DATA_CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ─── Fetch: smart routing ───────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // 1. Skip non-GET and cross-origin (AdSense, Firebase, etc.)
  if (request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  // 2. Skip AdSense / Analytics / GTM
  if (url.hostname.includes('google') || url.hostname.includes('gstatic')) return;

  // 3. DATA FILES → Stale-While-Revalidate
  if (url.pathname.startsWith('/data/') && url.pathname.endsWith('.json')) {
    event.respondWith(staleWhileRevalidate(request, DATA_CACHE));
    return;
  }

  // 4. STATIC ASSETS (js, css, images, fonts) → Cache-First
  if (
    url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|ico|woff2?|ttf|eot)$/)
  ) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // 5. NAVIGATION (HTML page requests) → Network-First + offline fallback
  if (request.mode === 'navigate') {
    event.respondWith(networkFirstWithOfflineFallback(request));
    return;
  }

  // 6. Everything else → Network-First (no offline fallback)
  event.respondWith(networkFirst(request));
});

// ─── Strategy: Cache-First ─────────────────────────────────────
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request, { cacheName });
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

// ─── Strategy: Stale-While-Revalidate ──────────────────────────
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  // Kick off network fetch in background
  const networkFetch = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);

  // Return cached immediately if available, else wait for network
  return cached || networkFetch || new Response('{}', {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

// ─── Strategy: Network-First ───────────────────────────────────
async function networkFirst(request) {
  try {
    return await fetch(request);
  } catch {
    const cached = await caches.match(request);
    return cached || new Response('Offline', { status: 503 });
  }
}

// ─── Strategy: Network-First + Offline HTML Fallback ───────────
async function networkFirstWithOfflineFallback(request) {
  try {
    const response = await fetch(request);
    // Cache successful navigations for SPA shell
    if (response.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Try exact URL match first, then fall back to SPA root, then offline page
    const cached =
      (await caches.match(request)) ||
      (await caches.match('/')) ||
      (await caches.match(OFFLINE_URL));
    return cached || new Response('<h1>Offline</h1>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

// ─── Message: force update ─────────────────────────────────────
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
