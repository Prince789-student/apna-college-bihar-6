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
import { Capacitor } from '@capacitor/core';

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
    const isNative = Capacitor.isNativePlatform();
      
    if (isNative) {
      console.log("DEBUG: Initiating Native Google Login...");
      try {
        const result = await FirebaseAuthentication.signInWithGoogle();
        console.log("DEBUG: Native Result:", result);

        let idToken = result.credential?.idToken;
        
        // Fallback: If credential is missing but user exists, try to get token manually
        if (!idToken && result.user) {
           const tokenResult = await FirebaseAuthentication.getIdToken();
           idToken = tokenResult.token;
        }

        if (idToken) {
          const credential = GoogleAuthProvider.credential(idToken);
          const res = await signInWithCredential(auth, credential);
          await syncProfile(res.user);
          return res.user;
        } else {
          throw new Error("Native login failed to provide a security token.");
        }
      } catch (err) {
        console.error("DEBUG: Native Google Login Failed, attempting web fallback...", err);
        
        // If it's a cancellation, don't fallback to redirect automatically as it might be annoying
        if (err.message?.includes('cancel') || err.code === 'cancelled') {
           throw new Error("Login cancelled by user.");
        }

        try {
          // Force a small delay to ensure the UI is ready for redirect
          await new Promise(resolve => setTimeout(resolve, 500));
          await signInWithRedirect(auth, googleProvider);
          return null; // Redirecting...
        } catch (redirectErr) {
          console.error("DEBUG: All login methods failed:", redirectErr);
          throw redirectErr;
        }
      }
    } else {
      // On normal desktop/mobile browsers
      try {
        const res = await signInWithPopup(auth, googleProvider);
        await syncProfile(res.user);
        return res.user;
      } catch (err) {
        console.warn("Auth flow interrupted or failed:", err);
        if (err.code === 'auth/popup-closed-by-user') throw new Error("Login window closed.");
        
        try {
          await signInWithRedirect(auth, googleProvider);
          return null;
        } catch (redirectErr) {
          console.error("Redirect Fallback Failed:", redirectErr);
          throw redirectErr;
        }
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
    const handleRedirect = async () => {
      try {
        const res = await getRedirectResult(auth);
        if (res?.user) {
          console.log("DEBUG: Redirect login success:", res.user.email);
          await syncProfile(res.user);
        }
      } catch (err) {
        console.error("Redirect result error:", err);
      }
    };
    handleRedirect();

    // 2. Main Auth Listener
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (u) {
        // If we have a firebase user but haven't synced profile yet
        if (!user || user.uid !== u.uid) {
           setLoading(true);
           await syncProfile(u);
           setLoading(false);
        }
      } else {
        setUser(null);
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
