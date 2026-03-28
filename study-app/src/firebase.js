import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase config from apna-college-bihar project
const firebaseConfig = {
  apiKey: "AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",
  authDomain: "apna-college-bihar.firebaseapp.com",
  projectId: "apna-college-bihar",
  storageBucket: "apna-college-bihar.firebasestorage.app",
  messagingSenderId: "818059891079",
  appId: "1:818059891079:web:395df6af749da04ae80322",
  measurementId: "G-BXF7KW1XQS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
