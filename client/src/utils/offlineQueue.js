// ═══════════════════════════════════════════════════════
//  Apna College Bihar — Offline Session Queue
//  Purpose: When user is offline, study sessions are saved
//  in localStorage and automatically synced to Firestore
//  when internet connection is restored.
// ═══════════════════════════════════════════════════════

import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';

const QUEUE_KEY = 'acb_offline_sessions';

/**
 * Add a study session to the local offline queue
 * @param {Object} sessionData - Session data to queue
 */
export function queueOfflineSession(sessionData) {
  try {
    const queue = getOfflineQueue();
    queue.push({
      ...sessionData,
      _queuedAt: Date.now(),
      _synced: false
    });
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
    // Console log removed for production
  } catch (err) {
    console.error('[OfflineQueue] Failed to queue session:', err);
  }
}

/**
 * Get all pending sessions from offline queue
 * @returns {Array} Array of queued sessions
 */
export function getOfflineQueue() {
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Get count of pending offline sessions
 * @returns {number}
 */
export function getOfflineQueueCount() {
  return getOfflineQueue().length;
}

/**
 * Flush all queued sessions to Firestore
 * Call this when internet connection is restored
 * @param {Object} db - Firestore db instance
 * @param {string} userId - Current user ID
 * @returns {number} Number of sessions successfully synced
 */
export async function flushOfflineQueue(db, userId) {
  const queue = getOfflineQueue();
  if (!queue.length) return 0;

  // Console log removed for production

  const synced = [];
  const failed = [];

  for (const session of queue) {
    try {
      // Remove internal queue metadata before saving
      const { _queuedAt, _synced, ...sessionData } = session;

      // Save session to Firestore
      await addDoc(collection(db, 'StudySessions'), sessionData);

      // Update user's total study time in Firestore
      try {
        const userRef = doc(db, 'users', userId);
        const uSnap = await getDoc(userRef);
        if (uSnap.exists()) {
          const userData = uSnap.data();
          const todayStr = sessionData.date;
          const isNewDay = userData.lastStudyDate !== todayStr;
          const newTodayTime = isNewDay
            ? sessionData.duration
            : (userData.todayStudyTime || 0) + sessionData.duration;

          await updateDoc(userRef, {
            totalStudyTime: (userData.totalStudyTime || 0) + sessionData.duration,
            todayStudyTime: newTodayTime,
            lastStudyDate: todayStr,
            isStudying: false
          });
        }
      } catch (userUpdateErr) {
        // User doc update failed — not critical, session is saved
        console.warn('[OfflineQueue] User doc update failed:', userUpdateErr);
      }

      synced.push(session);
    } catch (err) {
      console.error('[OfflineQueue] Failed to sync session:', err);
      failed.push(session);
    }
  }

  // Keep only failed sessions in queue (retry next time)
  localStorage.setItem(QUEUE_KEY, JSON.stringify(failed));
  // Console log removed for production
  return synced.length;
}

/**
 * Clear the entire offline queue (use with caution)
 */
export function clearOfflineQueue() {
  localStorage.removeItem(QUEUE_KEY);
}
