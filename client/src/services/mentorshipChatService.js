// ═══════════════════════════════════════════════════════════════════════════
// SERVICE: REAL-TIME STUDENT-MENTOR LIVE CHAT (FREE BEU MENTORSHIP)
// Canonical Thread Pairing + Direct Firestore Realtime WebSocket + Local Caching
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
 * Determine API Base URL for backend server endpoints
 */
export function getApiBaseUrl() {
  if (typeof window !== 'undefined') {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return ''; // Handled by Vite dev server proxy
    }
  }
  return 'https://apna-college-bihar-6.onrender.com';
}

/**
 * Canonical mentor key resolver:
 * Guarantees that whether Deepak Mishra is passed by name, ID, or email,
 * the key is ALWAYS 'deepak'. For Subhash, it is ALWAYS 'subhash'.
 */
export function getCanonicalMentorKey(mentor) {
  if (!mentor) return 'deepak';
  const str = (typeof mentor === 'string' ? mentor : `${mentor.name || ''} ${mentor.id || ''} ${mentor.email || ''}`).toLowerCase();
  if (str.includes('subhash') || str.includes('7856030646_1') || str.includes('shk01')) {
    return 'subhash';
  }
  return 'deepak';
}

/**
 * Canonical student key resolver:
 * Strips all non-alphanumeric characters (slashes, dashes, spaces) so that:
 * '26/EEE/46', '26-EEE-46', and '26eee46' ALL produce '26eee46'.
 */
export function getCanonicalStudentKey(student) {
  if (!student) return 'student';
  const raw = typeof student === 'string' 
    ? student 
    : (student.roll || student.whatsapp || student.id || student.name || '');
  const clean = raw.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean || 'student';
}

/**
 * Generate a 100% consistent, canonical Thread ID for a student and mentor.
 * Always produces identical thread keys on both student and mentor devices.
 */
export function getChatThreadId(student, mentor) {
  const sKey = getCanonicalStudentKey(student);
  return `chat_${sKey}`;
}

/**
 * Read cached messages from localStorage for zero-latency initial render
 */
export function getCachedMessages(threadId) {
  if (!threadId || typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`beu_chat_${threadId}`);
    const msgs = raw ? JSON.parse(raw) : [];

    // Also check legacy thread keys to ensure zero message loss across past versions
    const deepakRaw = localStorage.getItem(`beu_chat_${threadId}__deepak`);
    const subhashRaw = localStorage.getItem(`beu_chat_${threadId}__subhash`);
    const legacyDeepak = deepakRaw ? JSON.parse(deepakRaw) : [];
    const legacySubhash = subhashRaw ? JSON.parse(subhashRaw) : [];

    return mergeMessages(
      Array.isArray(msgs) ? msgs : [],
      [
        ...(Array.isArray(legacyDeepak) ? legacyDeepak : []),
        ...(Array.isArray(legacySubhash) ? legacySubhash : [])
      ]
    );
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
 * Merge new messages into existing array without duplicates
 */
export function mergeMessages(existing, incoming) {
  const map = new Map();
  existing.forEach(m => {
    const key = m.id || `${m.timestamp}_${m.text}`;
    map.set(key, m);
  });
  incoming.forEach(m => {
    let foundKey = null;
    for (const [k, v] of map.entries()) {
      if (v.text === m.text && Math.abs((v.timestamp || 0) - (m.timestamp || 0)) < 4000 && v.senderRole === m.senderRole) {
        foundKey = k;
        break;
      }
    }
    if (foundKey) {
      map.set(foundKey, { ...map.get(foundKey), ...m, id: m.id || map.get(foundKey).id });
    } else {
      const key = m.id || `${m.timestamp}_${m.text}`;
      map.set(key, m);
    }
  });

  return Array.from(map.values()).sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
}

/**
 * Real-time listener for a chat thread.
 * 1. Emits cached messages immediately.
 * 2. Connects to direct Firestore onSnapshot (real-time websocket).
 * 3. Connects to BroadcastChannel + window.storage for multi-tab sync.
 * 4. Fallback server polling when available.
 */
export function subscribeThreadMessages(threadId, onUpdate) {
  if (!threadId) return () => {};

  let active = true;

  // 1. Immediately emit cached messages for zero latency
  const cached = getCachedMessages(threadId);
  if (cached.length > 0 && onUpdate) {
    onUpdate(cached);
  }

  // 2. Multi-tab event listeners
  const handleStorage = (e) => {
    if (e.key === `beu_chat_${threadId}`) {
      const latest = getCachedMessages(threadId);
      if (onUpdate && active) onUpdate(latest);
    }
  };

  const handleCustomEvent = (e) => {
    if (e.detail?.threadId === threadId) {
      const current = getCachedMessages(threadId);
      const merged = mergeMessages(current, [e.detail]);
      setCachedMessages(threadId, merged);
      if (onUpdate && active) onUpdate(merged);
    }
  };

  window.addEventListener('storage', handleStorage);
  window.addEventListener('beu_mentorship_chat_event', handleCustomEvent);

  let channel = null;
  try {
    if (typeof BroadcastChannel !== 'undefined') {
      channel = new BroadcastChannel(`bc_${threadId}`);
      channel.onmessage = (event) => {
        if (event.data && active) {
          const current = getCachedMessages(threadId);
          const merged = mergeMessages(current, [event.data]);
          setCachedMessages(threadId, merged);
          if (onUpdate) onUpdate(merged);
        }
      };
    }
  } catch (e) {}

  // 3. Direct Firestore Real-time Listener (Real-Time WebSocket)
  let firestoreUnsub = null;
  try {
    const messagesCol = collection(db, 'MentorshipMessages');
    const baseThread = threadId.replace(/__deepak|__subhash/g, '');
    const candidateIds = Array.from(new Set([
      threadId,
      baseThread,
      `${baseThread}__deepak`,
      `${baseThread}__subhash`
    ]));
    const q = query(messagesCol, where('threadId', 'in', candidateIds));

    firestoreUnsub = onSnapshot(q, (snapshot) => {
      if (!active) return;
      const msgs = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        msgs.push({
          id: docSnap.id,
          ...data,
          timestamp: data.timestamp || (data.createdAt?.toMillis ? data.createdAt.toMillis() : Date.now())
        });
      });

      msgs.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

      const current = getCachedMessages(threadId);
      const merged = mergeMessages(current, msgs);
      setCachedMessages(threadId, merged);
      if (onUpdate) onUpdate(merged);
    }, (err) => {
      console.warn('[Mentorship Chat] Firestore listener note:', err.message);
    });
  } catch (err) {
    console.warn('[Mentorship Chat] Firestore subscribe error:', err.message);
  }

  // 4. Server API Polling fallback (only in production or when server is up)
  const fetchFromServer = async () => {
    if (!active) return;
    try {
      const baseUrl = getApiBaseUrl();
      if (!baseUrl) return;
      const res = await fetch(`${baseUrl}/api/mentorship/chat/messages?threadId=${encodeURIComponent(threadId)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.messages) && active) {
          const current = getCachedMessages(threadId);
          const merged = mergeMessages(current, data.messages);
          setCachedMessages(threadId, merged);
          if (onUpdate) onUpdate(merged);
        }
      }
    } catch (e) {}
  };

  const pollInterval = setInterval(fetchFromServer, 4000);

  return () => {
    active = false;
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener('beu_mentorship_chat_event', handleCustomEvent);
    if (channel) channel.close();
    if (firestoreUnsub) firestoreUnsub();
    clearInterval(pollInterval);
  };
}

/**
 * Send a chat message
 * 1. Optimistically appends to local cache & UI.
 * 2. Broadcasts locally across tabs.
 * 3. Saves to Firestore cloud via direct client addDoc (Rules are deployed!).
 * 4. Also pushes to backend server API if available.
 */
export async function sendChatMessage({
  threadId,
  studentRoll,
  studentName,
  mentorId,
  mentorName,
  senderRole,
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
    read: false
  };

  const optimisticMsg = {
    id: `local_${now}_${Math.random().toString(36).substr(2, 6)}`,
    ...messageData,
    createdAt: new Date().toISOString()
  };

  // 1. Save to local cache
  const existing = getCachedMessages(threadId);
  const updatedCache = [...existing, optimisticMsg];
  setCachedMessages(threadId, updatedCache);

  // 2. Dispatch cross-tab events
  try {
    window.dispatchEvent(new CustomEvent('beu_mentorship_chat_event', { detail: optimisticMsg }));
    if (typeof BroadcastChannel !== 'undefined') {
      const channel = new BroadcastChannel(`bc_${threadId}`);
      channel.postMessage(optimisticMsg);
      setTimeout(() => channel.close(), 100);
    }
  } catch (e) {}

  // 3. Save to Firestore (Real-time cloud database)
  let savedId = optimisticMsg.id;
  try {
    const messagesCol = collection(db, 'MentorshipMessages');
    const docRef = await addDoc(messagesCol, {
      ...messageData,
      createdAt: serverTimestamp()
    });
    savedId = docRef.id;
  } catch (err) {
    console.warn('[Mentorship Chat] Direct Firestore write note:', err.message);
  }

  // 4. Also push to backend server API if reachable
  try {
    const baseUrl = getApiBaseUrl();
    if (baseUrl) {
      fetch(`${baseUrl}/api/mentorship/chat/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messageData)
      }).catch(() => {});
    }
  } catch (e) {}

  return { ...optimisticMsg, id: savedId };
}

/**
 * Mark all incoming messages in a thread as read by the current user role.
 */
export async function markThreadAsRead(threadId, currentRole) {
  if (!threadId) return;

  const oppositeRole = currentRole === 'student' ? 'mentor' : 'student';
  const cached = getCachedMessages(threadId);
  let changed = false;
  cached.forEach(m => {
    if (m.senderRole === oppositeRole && !m.read) {
      m.read = true;
      changed = true;
    }
  });
  if (changed) {
    setCachedMessages(threadId, cached);
  }

  try {
    const messagesCol = collection(db, 'MentorshipMessages');
    const q = query(
      messagesCol, 
      where('threadId', '==', threadId),
      where('senderRole', '==', oppositeRole),
      where('read', '==', false)
    );
    getDocs(q).then(snap => {
      snap.docs.forEach(d => updateDoc(doc(db, 'MentorshipMessages', d.id), { read: true }));
    }).catch(() => {});
  } catch (e) {}
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
