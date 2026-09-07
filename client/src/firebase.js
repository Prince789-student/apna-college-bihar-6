import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, browserLocalPersistence, setPersistence } from "firebase/auth";
import { Capacitor } from "@capacitor/core";
import { initializeFirestore, getFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, isSupported } from "firebase/messaging";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

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

// Initialize App Check (ReCaptcha V3) ONLY on Web to prevent breaking native Android/Capacitor
if (typeof window !== "undefined" && !Capacitor.isNativePlatform()) {
  try {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'), // Public test key for now
      isTokenAutoRefreshEnabled: true
    });
  } catch (e) {
    console.warn("App Check initialization failed", e);
  }
}

// Enable local persistence for mobile login stability
setPersistence(auth, browserLocalPersistence);

export { auth };

// Initialize Firestore with Multi-tab Persistent Local Cache for offline support & minimum reads
let dbInstance;
try {
  dbInstance = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager()
    })
  });
} catch (e) {
  // Fallback to standard getFirestore if already initialized or unsupported
  dbInstance = getFirestore(app);
}

export const db = dbInstance;
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
// Add basic profile scope (required for name/email)
googleProvider.addScope('profile');
googleProvider.addScope('email');
// Force account selection every time (important for shared devices)
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export { RecaptchaVerifier, signInWithPhoneNumber };

export let messaging = null;
export const VAPID_KEY = "BH6y12rFJXEQn3t8FqmAbbpueil73WUVRBhbrsG6ETst3G4gQAwAmonzB6-ybjIMH55L91LYSw4XEBKM7jnt8Pw";

isSupported().then((supported) => {
  if (supported) {
    messaging = getMessaging(app);
  }
}).catch(err => {/* console.log removed */});
