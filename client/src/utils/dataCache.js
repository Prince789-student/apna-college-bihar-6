// ═════════════════════════════════════════════════════════════
// Apna College Bihar — Smart Data Cache for Minimal Reads & Offline Mode
// ═════════════════════════════════════════════════════════════

export const CACHE_KEYS = {
  NOTES: 'acb_cache_notes_v1',
  PYQ: 'acb_cache_pyq_v1',
  ANNOUNCEMENTS: 'acb_cache_announcements_v1',
  RESOURCES: 'acb_cache_resources_v1',
  BEU_NOTICES: 'acb_cache_notices_v1',
};

// Default TTL: 30 minutes (1800000 ms)
const DEFAULT_TTL = 30 * 60 * 1000;

/**
 * Get cached data from localStorage
 * @param {string} key - Cache key name
 * @param {number} ttlMs - Time to live in ms (default 30 mins)
 * @returns {{ data: any, isExpired: boolean, timestamp: number } | null}
 */
export function getCachedData(key, ttlMs = DEFAULT_TTL) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.timestamp) return null;

    const age = Date.now() - parsed.timestamp;
    const isExpired = age > ttlMs;

    return {
      data: parsed.data,
      isExpired,
      timestamp: parsed.timestamp,
      ageMinutes: Math.round(age / 60000)
    };
  } catch (err) {
    console.warn('[DataCache] Read error for key:', key, err);
    return null;
  }
}

/**
 * Save data to localStorage cache
 * @param {string} key - Cache key name
 * @param {any} data - Data to store
 */
export function setCachedData(key, data) {
  try {
    const payload = {
      timestamp: Date.now(),
      data
    };
    localStorage.setItem(key, JSON.stringify(payload));
  } catch (err) {
    // If quota exceeded, attempt to clear old cache entries
    console.warn('[DataCache] Write error for key:', key, err);
    try {
      // Clear non-critical caches if full
      localStorage.removeItem(CACHE_KEYS.RESOURCES);
      localStorage.removeItem(CACHE_KEYS.BEU_NOTICES);
      localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data }));
    } catch {
      // Silently ignore if localStorage is totally full
    }
  }
}

/**
 * Remove a specific cache item
 * @param {string} key
 */
export function invalidateCache(key) {
  try {
    if (key) {
      localStorage.removeItem(key);
    } else {
      Object.values(CACHE_KEYS).forEach(k => localStorage.removeItem(k));
    }
  } catch (err) {
    console.warn('[DataCache] Invalidate error:', err);
  }
}
