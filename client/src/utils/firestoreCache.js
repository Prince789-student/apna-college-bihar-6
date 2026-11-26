import { getDocs, getDoc } from 'firebase/firestore';

const CACHE_PREFIX = 'acb_fs_cache_v1_';

/**
 * Fetches a Firestore collection/query with localStorage TTL caching.
 * Returns cached data with 0 Firestore reads while fresh, and falls back
 * to stale cache if Firestore quota is exceeded or offline.
 */
export async function cachedGetDocs(cacheKey, queryOrRef, ttlMs = 30 * 60 * 1000) {
  const fullKey = CACHE_PREFIX + cacheKey;
  let staleData = null;

  try {
    const raw = localStorage.getItem(fullKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.docs)) {
        staleData = parsed.docs;
        if (Date.now() - (parsed.ts || 0) < ttlMs) {
          return parsed.docs;
        }
      }
    }
  } catch {
    // Ignore storage parse errors
  }

  try {
    const snap = await getDocs(queryOrRef);
    const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    try {
      localStorage.setItem(fullKey, JSON.stringify({ ts: Date.now(), docs }));
    } catch {
      // Ignore quota exceeded on localStorage
    }
    return docs;
  } catch (err) {
    if (staleData) return staleData;
    throw err;
  }
}

/**
 * Fetches a single Firestore document with localStorage TTL caching.
 */
export async function cachedGetDoc(cacheKey, docRef, ttlMs = 6 * 60 * 60 * 1000) {
  const fullKey = CACHE_PREFIX + cacheKey;
  let staleData = null;

  try {
    const raw = localStorage.getItem(fullKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.doc !== undefined) {
        staleData = parsed.doc;
        if (Date.now() - (parsed.ts || 0) < ttlMs) {
          return parsed.doc;
        }
      }
    }
  } catch {
    // Ignore storage parse errors
  }

  try {
    const snap = await getDoc(docRef);
    const docData = snap.exists() ? { id: snap.id, ...snap.data() } : null;
    try {
      localStorage.setItem(fullKey, JSON.stringify({ ts: Date.now(), doc: docData }));
    } catch {
      // Ignore localStorage quota
    }
    return docData;
  } catch (err) {
    if (staleData !== null) return staleData;
    throw err;
  }
}

/**
 * Invalidates a cached Firestore entry after a local admin write/delete.
 */
export function invalidateFirestoreCache(cacheKey) {
  try {
    localStorage.removeItem(CACHE_PREFIX + cacheKey);
  } catch {
    // Ignore
  }
}
