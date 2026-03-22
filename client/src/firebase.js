import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, browserLocalPersistence, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",
  authDomain: "apna-college-bihar.firebaseapp.com",
  projectId: "apna-college-bihar",
  storageBucket: "apna-college-bihar.firebasestorage.app",
  messagingSenderId: "818059891079",
  appId: "1:818059891079:web:395df6af749da04ae80322",
  measurementId: "G-BXF7KW1XQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Enable local persistence for mobile login stability
setPersistence(auth, browserLocalPersistence);

export { auth };
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

export { RecaptchaVerifier, signInWithPhoneNumber };
