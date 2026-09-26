import { db } from '../firebase';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { 
  saveEnrolledStudents, 
  saveMentorsList, 
  saveRemovedStudents,
  getRemovedStudents,
  INITIAL_ENROLLED_STUDENTS,
  INITIAL_REMOVED_STUDENTS
} from '../data/mentorshipData';

// Fetch mentorship data from Firestore or backend server API
export async function fetchCloudMentorshipData() {
  let cloudStudents = null;
  let cloudRemoved = null;
  let cloudMentors = null;

  // 1. Try Firebase Firestore
  try {
    const docRef = doc(db, 'mentorship', 'data');
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const data = snap.data();
      if (Array.isArray(data.students) && data.students.length > 0) {
        cloudStudents = data.students;
      }
      if (Array.isArray(data.removedStudents) && data.removedStudents.length > 0) {
        cloudRemoved = data.removedStudents;
      }
      if (Array.isArray(data.mentors) && data.mentors.length > 0) {
        cloudMentors = data.mentors;
      }
    }
  } catch (err) {
    console.warn('[Mentorship Sync] Firestore fetch fallback:', err.message);
  }

  // 2. Fallback to Server API if Firestore was empty or failed
  if (!cloudStudents) {
    try {
      const res = await fetch('/api/mentorship/data');
      if (res.ok) {
        const json = await res.json();
        if (json.success) {
          if (Array.isArray(json.students) && json.students.length > 0) {
            cloudStudents = json.students;
          }
          if (Array.isArray(json.removedStudents) && json.removedStudents.length > 0) {
            cloudRemoved = json.removedStudents;
          }
          if (Array.isArray(json.mentors) && json.mentors.length > 0) {
            cloudMentors = json.mentors;
          }
        }
      }
    } catch (err) {
      console.warn('[Mentorship Sync] Server API fetch fallback:', err.message);
    }
  }

  // Segregate active enrolled students vs removed students strictly
  const removedIdSet = new Set(INITIAL_REMOVED_STUDENTS.map(s => s.id));
  const removedRollSet = new Set(INITIAL_REMOVED_STUDENTS.map(s => (s.roll || '').toLowerCase().trim()));

  const cleanActive = [];
  const cleanRemovedMap = new Map((cloudRemoved || INITIAL_REMOVED_STUDENTS).map(s => [s.id, s]));

  (cloudStudents || INITIAL_ENROLLED_STUDENTS).forEach(s => {
    const isRemoved = s.status === 'Removed' || s.removed || removedIdSet.has(s.id) || (s.id && s.id.includes('_REMOVED')) || removedRollSet.has((s.roll || '').toLowerCase().trim());
    if (isRemoved) {
      if (!cleanRemovedMap.has(s.id)) {
        cleanRemovedMap.set(s.id, { ...s, status: 'Removed' });
      }
    } else {
      cleanActive.push({ ...s, status: 'Active' });
    }
  });

  // Ensure all INITIAL_ENROLLED_STUDENTS are in cleanActive
  const activeIds = new Set(cleanActive.map(s => s.id));
  INITIAL_ENROLLED_STUDENTS.forEach(init => {
    if (!activeIds.has(init.id)) {
      cleanActive.push(init);
    }
  });

  // Ensure all INITIAL_REMOVED_STUDENTS are in cleanRemoved
  INITIAL_REMOVED_STUDENTS.forEach(init => {
    if (!cleanRemovedMap.has(init.id)) {
      cleanRemovedMap.set(init.id, init);
    }
  });

  const finalRemoved = Array.from(cleanRemovedMap.values());

  // Save to separate local caches
  saveEnrolledStudents(cleanActive);
  saveRemovedStudents(finalRemoved);
  if (cloudMentors) {
    saveMentorsList(cloudMentors);
  }

  return { students: cleanActive, removedStudents: finalRemoved, mentors: cloudMentors };
}

// Push updated mentorship data to Firestore and Backend Server
export async function saveCloudMentorshipData(students, mentors, removedStudents) {
  const cleanActive = (students || []).filter(s => s.status !== 'Removed' && !s.removed && !s.id.includes('_REMOVED'));
  const cleanRemoved = removedStudents || getRemovedStudents();

  // Always update local caches
  saveEnrolledStudents(cleanActive);
  saveRemovedStudents(cleanRemoved);
  if (mentors) saveMentorsList(mentors);

  const payload = {
    students: cleanActive, // STRICTLY 33 Active Enrolled Students!
    removedStudents: cleanRemoved, // STRICTLY 9 Removed Students!
    mentors: mentors || [],
    updatedAt: new Date().toISOString()
  };

  // 1. Push to Firestore
  try {
    const docRef = doc(db, 'mentorship', 'data');
    await setDoc(docRef, payload, { merge: false });
  } catch (err) {
    console.warn('[Mentorship Sync] Firestore push error:', err.message);
  }

  // 2. Push to Server API
  try {
    await fetch('/api/mentorship/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.warn('[Mentorship Sync] Server push error:', err.message);
  }
}

// Real-time listener for multi-device live sync (Mobile <-> Laptop)
export function subscribeMentorshipUpdates(onUpdate) {
  try {
    const docRef = doc(db, 'mentorship', 'data');
    return onSnapshot(docRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        const removedIdSet = new Set(INITIAL_REMOVED_STUDENTS.map(s => s.id));
        const rawStudents = Array.isArray(data.students) ? data.students : [];
        const cleanActive = rawStudents.filter(s => s.status !== 'Removed' && !s.removed && !removedIdSet.has(s.id) && !s.id.includes('_REMOVED'));
        
        const rawRemoved = Array.isArray(data.removedStudents) ? data.removedStudents : INITIAL_REMOVED_STUDENTS;
        saveEnrolledStudents(cleanActive);
        saveRemovedStudents(rawRemoved);
        if (Array.isArray(data.mentors)) saveMentorsList(data.mentors);
        if (onUpdate) onUpdate({ students: cleanActive, removedStudents: rawRemoved, mentors: data.mentors });
      }
    }, (err) => {
      console.warn('[Mentorship Sync] Listener error:', err.message);
    });
  } catch (e) {
    console.warn('[Mentorship Sync] Could not subscribe:', e.message);
    return () => {};
  }
}

