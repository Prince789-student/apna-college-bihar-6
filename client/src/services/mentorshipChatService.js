// ═══════════════════════════════════════════════════════════════════════════
// SERVICE: REAL-TIME STUDENT-MENTOR LIVE CHAT (FREE BEU MENTORSHIP)
// Powered by Firebase Firestore with offline-first localStorage caching
// ═══════════════════════════════════════════════════════════════════════════

import { db } from '../firebase';
import { 
  collection, 
  query, 
  where, 
  onSnapshot, 
  addDoc, 
  serverTimestamp,
  updateDoc,
  doc,
  getDocs
} from 'firebase/firestore';

/**
 * Generate a consistent, sanitized deterministic Thread ID for a student and mentor.
 */
export function getChatThreadId(studentRoll, mentorId) {
  const sKey = (studentRoll || 'student').toLowerCase().replace(/[^a-z0-9]/g, '_');
  const mKey = (mentorId || 'mentor').toLowerCase().replace(/[^a-z0-9]/g, '_');
  return `thread_${sKey}__${mKey}`;
}

/**
 * Read cached messages from localStorage for zero-latency initial render
 */
export function getCachedMessages(threadId) {
  if (!threadId || typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`beu_chat_${threadId}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.warn('[Mentorship Chat] Error reading local cache:', e);
  }
  return [];
}

/**
 * Save messages to localStorage cache
 */
export function setCachedMessages(threadId, messages) {
  if (!threadId || typeof window === 'undefined') return;
  try {
    localStorage.setItem(`beu_chat_${threadId}`, JSON.stringify(messages));
  } catch (e) {
    console.warn('[Mentorship Chat] Error saving local cache:', e);
  }
}

/**
 * Real-time listener for a chat thread.
 * Returns an unsubscribe function.
 */
export function subscribeThreadMessages(threadId, onUpdate) {
  if (!threadId) return () => {};

  // 1. Immediately emit cached messages for instant display
  const cached = getCachedMessages(threadId);
  if (cached.length > 0 && onUpdate) {
    onUpdate(cached);
  }

  // 2. Subscribe to Firestore collection
  try {
    const messagesCol = collection(db, 'MentorshipMessages');
    const q = query(messagesCol, where('threadId', '==', threadId));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        msgs.push({
          id: docSnap.id,
          ...data,
          // Normalize timestamp
          timestamp: data.timestamp || (data.createdAt?.toMillis ? data.createdAt.toMillis() : Date.now())
        });
      });

      // Sort messages chronologically
      msgs.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

      // Cache locally
      setCachedMessages(threadId, msgs);

      if (onUpdate) {
        onUpdate(msgs);
      }
    }, (err) => {
      console.warn('[Mentorship Chat] Firestore onSnapshot warning:', err.message);
    });

    return unsubscribe;
  } catch (err) {
    console.warn('[Mentorship Chat] Could not initialize Firestore listener:', err.message);
    return () => {};
  }
}

/**
 * Send a chat message (Optimistic update + Firestore persistence)
 */
export async function sendChatMessage({
  threadId,
  studentRoll,
  studentName,
  mentorId,
  mentorName,
  senderRole, // 'student' | 'mentor'
  senderName,
  text
}) {
  if (!threadId || !text || !text.trim()) return null;

  const cleanText = text.trim();
  const now = Date.now();

  const messageData = {
    threadId,
    studentRoll: studentRoll || '',
    studentName: studentName || 'Student',
    mentorId: mentorId || '',
    mentorName: mentorName || 'Senior Mentor',
    senderRole: senderRole || 'student',
    senderName: senderName || (senderRole === 'student' ? studentName : mentorName),
    text: cleanText,
    timestamp: now,
    read: false,
    createdAt: serverTimestamp()
  };

  // Optimistically append to local cache immediately
  const existing = getCachedMessages(threadId);
  const optimisticMsg = {
    id: `local_${now}_${Math.random().toString(36).substr(2, 6)}`,
    ...messageData,
    createdAt: new Date().toISOString()
  };
  const updatedCache = [...existing, optimisticMsg];
  setCachedMessages(threadId, updatedCache);

  // Send to Firestore
  try {
    const messagesCol = collection(db, 'MentorshipMessages');
    const docRef = await addDoc(messagesCol, messageData);
    return docRef.id;
  } catch (err) {
    console.error('[Mentorship Chat] Firestore save error, cached locally:', err);
    return optimisticMsg.id;
  }
}

/**
 * Mark all incoming messages in a thread as read by the current user role.
 */
export async function markThreadAsRead(threadId, currentRole) {
  if (!threadId) return;
  try {
    const oppositeRole = currentRole === 'student' ? 'mentor' : 'student';
    const messagesCol = collection(db, 'MentorshipMessages');
    const q = query(
      messagesCol, 
      where('threadId', '==', threadId),
      where('senderRole', '==', oppositeRole),
      where('read', '==', false)
    );
    const snap = await getDocs(q);
    const updates = snap.docs.map(d => updateDoc(doc(db, 'MentorshipMessages', d.id), { read: true }));
    await Promise.all(updates);
  } catch (e) {
    // Non-blocking
  }
}

/**
 * Subscribe to unread messages count for a mentor or student
 */
export function subscribeUnreadCount(role, identifier, callback) {
  if (!identifier) return () => {};
  try {
    const messagesCol = collection(db, 'MentorshipMessages');
    const field = role === 'mentor' ? 'mentorId' : 'studentRoll';
    const oppositeRole = role === 'mentor' ? 'student' : 'mentor';

    const q = query(
      messagesCol,
      where(field, '==', identifier),
      where('senderRole', '==', oppositeRole),
      where('read', '==', false)
    );

    return onSnapshot(q, (snap) => {
      if (callback) callback(snap.size);
    }, () => {});
  } catch (e) {
    return () => {};
  }
}
