import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult,
  RecaptchaVerifier, 
  signInWithPhoneNumber,
  signInWithCredential,
  GoogleAuthProvider
} from "firebase/auth";
import { auth, db, googleProvider } from "../firebase";
import { doc, getDoc, setDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

export const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Profile Roles: 'STUDENT', 'ADMIN', 'SUPER_ADMIN'
  const ROLES = { STUDENT: 'STUDENT', ADMIN: 'ADMIN', SUPER_ADMIN: 'SUPER_ADMIN' };


  // Sync profile logic
  const syncProfile = async (u) => {
    try {
      if (!u) { setUser(null); return; }
      const docRef = doc(db, "users", u.uid);
      const userDoc = await getDoc(docRef);
      
      // FOUNDER AUTO-PROMOTION LOGIC
      const isFounder = u.email === 'prince86944@gmail.com';
      
      if (userDoc.exists()) {

        const userData = userDoc.data();
        if (isFounder && userData.role !== ROLES.SUPER_ADMIN) {
           await updateDoc(docRef, { role: ROLES.SUPER_ADMIN });
           setUser({ ...u, ...userData, role: ROLES.SUPER_ADMIN });
        } else {
           setUser({ ...u, ...userData });
        }
      } else {
        const data = {
          uid: u.uid,
          name: u.displayName || 'Scholar',
          email: u.email,
          phone: u.phoneNumber || "",
          createdAt: serverTimestamp(),
          role: isFounder ? ROLES.SUPER_ADMIN : ROLES.STUDENT,
          groupsCreatedToday: 0,
          lastGroupCreateDate: null
        };
        await setDoc(docRef, data);
        setUser({ ...u, ...data });
      }
    } catch (err) {
      console.error("Profile sync failed:", err);
      if (u) setUser({ ...u, role: ROLES.STUDENT }); // Fallback to basic user
    }
  };

  // 1. Email/Password Signup
  async function signup(email, password, name, phone) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const data = {
      uid: res.user.uid,
      name,
      email,
      phone,
      createdAt: serverTimestamp(),
      role: ROLES.STUDENT,
      groupsCreatedToday: 0,
      lastGroupCreateDate: null
    };
    await setDoc(doc(db, "users", res.user.uid), data);
    return res.user;
  }

  // 2. Email/Password Login
  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // 3. Google Signup/Login (Mobile Stable & Native)
  async function googleLogin() {
    try {
      const isNative = window.location.hostname === 'localhost' || window.Capacitor;
      
      if (isNative) {
        console.log("Native environment detected, using Native Google Sign-In Plugin...");
        try {
          const result = await FirebaseAuthentication.signInWithGoogle();
          const credential = GoogleAuthProvider.credential(result.credential?.idToken);
          const res = await signInWithCredential(auth, credential);
          await syncProfile(res.user);
          return res.user;
        } catch (nativeErr) {
          alert("Native Login Error: " + (nativeErr.message || JSON.stringify(nativeErr)));
          throw nativeErr;
        }
      }

      // On normal desktop/mobile browsers, Popups are fine.
      const res = await signInWithPopup(auth, googleProvider);
      await syncProfile(res.user);
      return res.user;
    } catch (err) {
      console.warn("Auth flow interrupted or failed:", err);
      if (window.location.hostname !== 'localhost' && !window.Capacitor) {
         // Only fallback to redirect on actual web browsers
         return await signInWithRedirect(auth, googleProvider);
      }
    }
  }

  // 4. Phone OTP Setup
  function setupRecaptcha(number) {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
      });
    }
    return signInWithPhoneNumber(auth, number, window.recaptchaVerifier);
  }

  // 5. Profile Update
  async function updateProfileData(data) {
    if (!user) return;
    await updateDoc(doc(db, "users", user.uid), data);
    setUser(prev => ({ ...prev, ...data }));
  }

  // 6. Logout
  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    // 1. Handle Redirect Result if coming back from Mobile Login
    getRedirectResult(auth).then(async (res) => {
      if (res?.user) await syncProfile(res.user);
    }).catch(console.error);

    // 2. Main Auth Listener
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setLoading(true);
      try {
        await syncProfile(u);
      } catch (err) {
        console.error("Auth state change error:", err);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    ROLES,
    login,
    signup,
    logout,
    googleLogin,
    setupRecaptcha,
    updateProfileData,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
