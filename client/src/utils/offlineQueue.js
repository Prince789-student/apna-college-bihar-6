// ═══════════════════════════════════════════════════════
//  Apna College Bihar — Offline Session & Task Queue
//  Purpose: When user is offline, study sessions and daily
//  targets are saved in localStorage and automatically
//  synced to Firestore when internet connection is restored.
// ═══════════════════════════════════════════════════════

import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';

const QUEUE_KEY = 'acb_offline_sessions';
const TASK_QUEUE_KEY = 'acb_offline_tasks';
const TASK_UPDATES_KEY = 'acb_offline_task_updates';

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
 * Add a task/target to the offline queue
 * @param {Object} taskData - Task data
 */
export function queueOfflineTask(taskData) {
  try {
    const raw = localStorage.getItem(TASK_QUEUE_KEY);
    const queue = raw ? JSON.parse(raw) : [];
    queue.push({
      ...taskData,
      _queuedAt: Date.now()
    });
    localStorage.setItem(TASK_QUEUE_KEY, JSON.stringify(queue));
  } catch (err) {
    console.error('[OfflineQueue] Failed to queue task:', err);
  }
}

/**
 * Queue a task status update (e.g., mark as done) while offline
 * @param {string} taskId
 * @param {Object} updates
 */
export function queueOfflineTaskUpdate(taskId, updates) {
  try {
    const raw = localStorage.getItem(TASK_UPDATES_KEY);
    const queue = raw ? JSON.parse(raw) : [];
    queue.push({
      taskId,
      updates,
      _queuedAt: Date.now()
    });
    localStorage.setItem(TASK_UPDATES_KEY, JSON.stringify(queue));
  } catch (err) {
    console.error('[OfflineQueue] Failed to queue task update:', err);
  }
}

/**
 * Get count of pending offline items
 * @returns {number}
 */
export function getOfflineQueueCount() {
  return getOfflineQueue().length;
}

/**
 * Flush all queued sessions and tasks to Firestore
 * Call this when internet connection is restored
 * @param {Object} db - Firestore db instance
 * @param {string} userId - Current user ID
 * @returns {Promise<{ syncedSessions: number, syncedTasks: number }>}
 */
export async function flushOfflineQueue(db, userId) {
  if (!db || !userId) return { syncedSessions: 0, syncedTasks: 0 };

  let syncedSessions = 0;
  let syncedTasks = 0;

  // 1. Sync Study Sessions
  const sessions = getOfflineQueue();
  if (sessions.length > 0) {
    const failedSessions = [];
    for (const session of sessions) {
      try {
        const { _queuedAt, _synced, ...sessionData } = session;
        await addDoc(collection(db, 'StudySessions'), sessionData);

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
          console.warn('[OfflineQueue] User doc update failed:', userUpdateErr);
        }

        syncedSessions++;
      } catch (err) {
        console.error('[OfflineQueue] Failed to sync session:', err);
        failedSessions.push(session);
      }
    }
    localStorage.setItem(QUEUE_KEY, JSON.stringify(failedSessions));
  }

  // 2. Sync Offline Tasks (Daily Targets)
  try {
    const rawTasks = localStorage.getItem(TASK_QUEUE_KEY);
    const tasks = rawTasks ? JSON.parse(rawTasks) : [];
    if (tasks.length > 0) {
      const failedTasks = [];
      for (const task of tasks) {
        try {
          const { _queuedAt, tempId, ...taskData } = task;
          await addDoc(collection(db, 'Tasks'), taskData);
          syncedTasks++;
        } catch (taskErr) {
          console.error('[OfflineQueue] Failed to sync task:', taskErr);
          failedTasks.push(task);
        }
      }
      localStorage.setItem(TASK_QUEUE_KEY, JSON.stringify(failedTasks));
    }
  } catch (err) {
    console.error('[OfflineQueue] Task sync failed:', err);
  }

  // 3. Sync Task Updates
  try {
    const rawUpdates = localStorage.getItem(TASK_UPDATES_KEY);
    const updates = rawUpdates ? JSON.parse(rawUpdates) : [];
    if (updates.length > 0) {
      const failedUpdates = [];
      for (const item of updates) {
        try {
          if (item.taskId && !item.taskId.startsWith('temp_')) {
            await updateDoc(doc(db, 'Tasks', item.taskId), item.updates);
          }
        } catch (upErr) {
          failedUpdates.push(item);
        }
      }
      localStorage.setItem(TASK_UPDATES_KEY, JSON.stringify(failedUpdates));
    }
  } catch (err) {
    console.error('[OfflineQueue] Task updates sync failed:', err);
  }

  return { syncedSessions, syncedTasks };
}

/**
 * Clear all offline queues
 */
export function clearOfflineQueue() {
  localStorage.removeItem(QUEUE_KEY);
  localStorage.removeItem(TASK_QUEUE_KEY);
  localStorage.removeItem(TASK_UPDATES_KEY);
}
