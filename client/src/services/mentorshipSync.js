import { db } from '../firebase';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { saveEnrolledStudents, saveMentorsList, INITIAL_ENROLLED_STUDENTS } from '../data/mentorshipData';

// Fetch mentorship data from Firestore or backend server API
export async function fetchCloudMentorshipData() {
  let cloudStudents = null;
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
        if (json.success && Array.isArray(json.students) && json.students.length > 0) {
          cloudStudents = json.students;
          if (Array.isArray(json.mentors) && json.mentors.length > 0) {
            cloudMentors = json.mentors;
          }
        }
      }
    } catch (err) {
      console.warn('[Mentorship Sync] Server API fetch fallback:', err.message);
    }
  }

  // Ensure any newly added or updated INITIAL_ENROLLED_STUDENTS are merged in
  if (cloudStudents) {
    const initialMap = new Map(INITIAL_ENROLLED_STUDENTS.map(s => [s.id, s]));
    
    // Update existing records with verified details (phone, email, roll, status)
    cloudStudents = cloudStudents.map(cs => {
      const init = initialMap.get(cs.id);
      if (init) {
        return {
          ...cs,
          name: init.name,
          email: init.email,
          whatsapp: init.whatsapp,
          college: init.college,
          branch: init.branch,
          branchCode: init.branchCode,
          roll: init.roll,
          status: init.status || cs.status || 'Active'
        };
      }
      return cs;
    });

    const existingIds = new Set(cloudStudents.map(s => s.id));
    const missing = INITIAL_ENROLLED_STUDENTS.filter(s => !existingIds.has(s.id));
    if (missing.length > 0) {
      cloudStudents = [...cloudStudents, ...missing];
      // Sync back to cloud in background
      saveCloudMentorshipData(cloudStudents, cloudMentors);
    }
    saveEnrolledStudents(cloudStudents);
  }
  if (cloudMentors) {
    saveMentorsList(cloudMentors);
  }

  return { students: cloudStudents, mentors: cloudMentors };
}

// Push updated mentorship data to Firestore and Backend Server
export async function saveCloudMentorshipData(students, mentors) {
  // Always update local cache first
  saveEnrolledStudents(students);
  if (mentors) saveMentorsList(mentors);

  const payload = {
    students,
    mentors: mentors || [],
    updatedAt: new Date().toISOString()
  };

  // 1. Push to Firestore
  try {
    const docRef = doc(db, 'mentorship', 'data');
    await setDoc(docRef, payload, { merge: true });
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
        if (Array.isArray(data.students) && data.students.length > 0) {
          const existingIds = new Set(data.students.map(s => s.id));
          const missing = INITIAL_ENROLLED_STUDENTS.filter(s => !existingIds.has(s.id));
          const mergedStudents = missing.length > 0 ? [...data.students, ...missing] : data.students;
          saveEnrolledStudents(mergedStudents);
          if (Array.isArray(data.mentors)) saveMentorsList(data.mentors);
          if (onUpdate) onUpdate({ students: mergedStudents, mentors: data.mentors });
        }
      }
    }, (err) => {
      console.warn('[Mentorship Sync] Listener error:', err.message);
    });
  } catch (e) {
    console.warn('[Mentorship Sync] Could not subscribe:', e.message);
    return () => {};
  }
}
