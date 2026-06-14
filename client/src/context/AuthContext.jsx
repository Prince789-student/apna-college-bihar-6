import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  signInWithPopup,
  RecaptchaVerifier, 
  signInWithPhoneNumber,
  signInWithCredential,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult
} from "firebase/auth";
import { auth, db, googleProvider } from "../firebase";
import { doc, getDoc, setDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { Capacitor } from '@capacitor/core';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isSyncing = useRef(false);

  // Profile Roles: 'STUDENT', 'ADMIN', 'SUPER_ADMIN'
  const ROLES = { STUDENT: 'STUDENT', ADMIN: 'ADMIN', SUPER_ADMIN: 'SUPER_ADMIN' };

  // Sync profile logic
  const syncProfile = async (u) => {
    if (!u) { 
      console.log("[AUTH] No user to sync.");
      setUser(null); 
      return; 
    }
    
    // Prevent double sync
    if (isSyncing.current) return;
    isSyncing.current = true;

    console.log("[AUTH] Syncing profile for:", u.email);

    try {
      const docRef = doc(db, "users", u.uid);
      const userDoc = await getDoc(docRef);
      
      const isFounder = u.email === 'prince8694@gmail.com' || u.email === 'prince86944@gmail.com';
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("[AUTH] Existing user data found:", userData.role);
        
        if (isFounder && userData.role !== ROLES.SUPER_ADMIN) {
           await updateDoc(docRef, { role: ROLES.SUPER_ADMIN });
           setUser({ ...u, ...userData, role: ROLES.SUPER_ADMIN });
        } else {
           setUser({ ...u, ...userData });
        }
      } else {
        console.log("[AUTH] No existing profile. Creating new entry...");
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
      console.error("[AUTH] Profile sync critical failure:", err);
      // Fallback: set basic user info even if firestore fails
      setUser({
        uid: u.uid,
        email: u.email,
        name: u.displayName || 'Scholar',
        role: u.email === 'prince8694@gmail.com' || u.email === 'prince86944@gmail.com' ? ROLES.SUPER_ADMIN : ROLES.STUDENT
      });
    } finally {
      isSyncing.current = false;
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

  // 3. Google Login — Native bottom sheet on Android, popup on Web
  async function googleLogin() {
    const isNative = Capacitor.isNativePlatform();
    
    if (isNative) {
      try {
        const result = await FirebaseAuthentication.signInWithGoogle();
        if (result?.credential?.idToken) {
          const credential = GoogleAuthProvider.credential(result.credential.idToken);
          const res = await signInWithCredential(auth, credential);
          await syncProfile(res.user);
          return res.user;
        }
        throw new Error('Native Google Login failed');
      } catch (err) {
        console.error("Native Google Login Error:", err);
        const res = await signInWithPopup(auth, googleProvider);
        await syncProfile(res.user);
        return res.user;
      }
    } else {
      try {
        // ALWAYS try Popup first. It's much more stable for state management.
        const res = await signInWithPopup(auth, googleProvider);
        await syncProfile(res.user);
        return res.user;
      } catch (err) {
        console.warn("Popup failed or blocked, falling back to Redirect...", err);
        // Fallback to redirect only if popup is blocked or fails
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
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      // Don't set loading to true if we already have a user and it's just a refresh
      if (!user) setLoading(true);
      
      try {
        if (u) {
          await syncProfile(u);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Auth sync error:", err);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  // Handle Redirect Results (for mobile web stability)
  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        if (result?.user) {
          console.log("[AUTH] Redirect result success:", result.user.email);
          await syncProfile(result.user);
        }
      })
      .catch((error) => {
        console.error("[AUTH] Redirect result error:", error);
      });
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
