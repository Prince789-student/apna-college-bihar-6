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

  // Filter out any obsolete dummy removed IDs so removed list is clean
  const DUMMY_REMOVED_IDS = new Set([
    '26EEE50_REMOVED', '26EEE44_REMOVED', '26EEE11P_OLD_REMOVED', 
    'W26A33_OLD_REMOVED', '26ECE46_OLD_REMOVED', '26ECE20_OLD_REMOVED', 
    '26EEE14P_OLD_REMOVED', '26ECE08_OLD_REMOVED', '26IOT27_OLD_REMOVED',
    '26EEE11P_REMOVED', '26ECE46_REMOVED', '26EEE14P_REMOVED'
  ]);

  const cleanActive = [];
  const cleanRemovedMap = new Map();
  (cloudRemoved || INITIAL_REMOVED_STUDENTS).forEach(s => {
    if (!DUMMY_REMOVED_IDS.has(s.id)) {
      cleanRemovedMap.set(s.id, { ...s, status: 'Inactive' });
    }
  });

  INITIAL_REMOVED_STUDENTS.forEach(init => {
    if (!DUMMY_REMOVED_IDS.has(init.id) && !cleanRemovedMap.has(init.id)) {
      cleanRemovedMap.set(init.id, { ...init, status: 'Inactive' });
    }
  });

  (cloudStudents || INITIAL_ENROLLED_STUDENTS).forEach(s => {
    const isRemoved = s.status === 'Removed' || s.status === 'Inactive' || s.removed || 
                      cleanRemovedMap.has(s.id) ||
                      (s.id && s.id.includes('_REMOVED') && !DUMMY_REMOVED_IDS.has(s.id));
    if (isRemoved) {
      if (!cleanRemovedMap.has(s.id)) {
        cleanRemovedMap.set(s.id, { ...s, status: 'Inactive' });
      } else {
        const existing = cleanRemovedMap.get(s.id);
        cleanRemovedMap.set(s.id, { ...existing, ...s, status: 'Inactive' });
      }
    } else {
      cleanActive.push({ ...s, status: 'Active' });
    }
  });

  // Strict active list (strictly active enrolled students)
  const strictlyActive = cleanActive.filter(s => {
    return !DUMMY_REMOVED_IDS.has(s.id) && !cleanRemovedMap.has(s.id);
  });

  // Ensure all INITIAL_ENROLLED_STUDENTS are in strictlyActive
  const activeIds = new Set(strictlyActive.map(s => s.id));
  INITIAL_ENROLLED_STUDENTS.forEach(init => {
    if (!activeIds.has(init.id) && !cleanRemovedMap.has(init.id)) {
      strictlyActive.push(init);
    }
  });

  const finalRemoved = Array.from(cleanRemovedMap.values()).map(s => ({ ...s, status: 'Inactive' }));

  // Save to separate local caches
  saveEnrolledStudents(strictlyActive);
  saveRemovedStudents(finalRemoved);
  if (cloudMentors) {
    saveMentorsList(cloudMentors);
  }

  return { students: strictlyActive, removedStudents: finalRemoved, mentors: cloudMentors };
}

// Push updated mentorship data to Firestore and Backend Server
export async function saveCloudMentorshipData(students, mentors, removedStudents) {
  const cleanActive = (students || []).filter(s => s.status !== 'Removed' && s.status !== 'Inactive' && !s.removed && !s.id.includes('_REMOVED'));
  const cleanRemoved = (removedStudents || getRemovedStudents()).map(s => ({ ...s, status: 'Inactive' }));

  // Always update local caches
  saveEnrolledStudents(cleanActive);
  saveRemovedStudents(cleanRemoved);
  if (mentors) saveMentorsList(mentors);

  const payload = {
    students: cleanActive, // STRICTLY 33 Active Enrolled Students!
    removedStudents: cleanRemoved, // STRICTLY 9 Inactive Students!
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
        const DUMMY_REMOVED_IDS = new Set([
          '26EEE50_REMOVED', '26EEE44_REMOVED', '26EEE11P_OLD_REMOVED', 
          'W26A33_OLD_REMOVED', '26ECE46_OLD_REMOVED', '26ECE20_OLD_REMOVED', 
          '26EEE14P_OLD_REMOVED', '26ECE08_OLD_REMOVED', '26IOT27_OLD_REMOVED',
          '26EEE11P_REMOVED', '26ECE46_REMOVED', '26EEE14P_REMOVED'
        ]);
        const rawStudents = Array.isArray(data.students) ? data.students : [];
        const cleanActive = rawStudents.filter(s => s.status !== 'Removed' && s.status !== 'Inactive' && !s.removed && !DUMMY_REMOVED_IDS.has(s.id) && !s.id.includes('_REMOVED'));
        
        const rawRemoved = (Array.isArray(data.removedStudents) ? data.removedStudents : [])
          .filter(s => !DUMMY_REMOVED_IDS.has(s.id))
          .map(s => ({ ...s, status: 'Inactive' }));
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

