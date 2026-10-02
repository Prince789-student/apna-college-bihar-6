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

// Cache key for storing user profile data locally
const USER_CACHE_KEY = 'acb_user_cache';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const cached = localStorage.getItem(USER_CACHE_KEY);
      return cached ? JSON.parse(cached) : null;
    } catch (e) {
      return null;
    }
  });
  const [loading, setLoading] = useState(() => {
    try {
      const cached = localStorage.getItem(USER_CACHE_KEY);
      return !cached;
    } catch (e) {
      return true;
    }
  });
  const isSyncing = useRef(false);

  // Profile Roles: 'STUDENT', 'ADMIN', 'SUPER_ADMIN'
  const ROLES = { STUDENT: 'STUDENT', ADMIN: 'ADMIN', SUPER_ADMIN: 'SUPER_ADMIN' };

  // Sync profile logic
  const syncProfile = async (u) => {
    if (!u) { 
      setUser(null); 
      return; 
    }
    
    // Prevent double sync
    if (isSyncing.current) return;
    isSyncing.current = true;

    // Step 1: Try localStorage cache immediately (works offline, instant)
    let hasCacheForUser = false;
    try {
      const cachedRaw = localStorage.getItem(USER_CACHE_KEY);
      if (cachedRaw) {
        const cachedData = JSON.parse(cachedRaw);
        if (cachedData.uid === u.uid) {
          // Instantly set user from cache — no network needed
          setUser({ ...u, ...cachedData });
          hasCacheForUser = true;
        }
      }
    } catch (cacheErr) {
      // Cache read failed — not critical, continue
    }

    // Step 1.5: If NO cache, immediately set a basic user so the UI doesn't wait for Firestore (which can take 10s on slow networks)
    if (!hasCacheForUser) {
      const isFounder = u.email === 'prince8694@gmail.com' || u.email === 'prince86944@gmail.com';
      setUser({
        uid: u.uid,
        email: u.email,
        name: u.displayName || 'Scholar',
        role: isFounder ? ROLES.SUPER_ADMIN : ROLES.STUDENT
      });
    }

    // Set loading to false now that we have at least a basic user or cached user
    setLoading(false);

    const docRef = doc(db, "users", u.uid);
    const isFounder = u.email === 'prince8694@gmail.com' || u.email === 'prince86944@gmail.com';

    // Step 2A: Guaranteed Firestore Write (Always write/merge user into Firestore immediately)
    // Uses setDoc with merge: true which NEVER fails due to read quota exhaustion!
    try {
      const basePayload = {
        uid: u.uid,
        email: u.email || '',
        phone: u.phoneNumber || '',
        lastLogin: serverTimestamp()
      };
      // Only set founder super admin role; do NOT overwrite existing ADMIN or custom roles with STUDENT
      if (isFounder) {
        basePayload.role = ROLES.SUPER_ADMIN;
      }
      const cachedRaw = localStorage.getItem(USER_CACHE_KEY);
      if (!cachedRaw) {
        basePayload.name = u.displayName || 'Scholar';
      }
      await setDoc(docRef, basePayload, { merge: true });
    } catch (writeErr) {
      console.warn("[AUTH] Base profile write warning:", writeErr?.code || writeErr?.message);
    }

    // Step 2B: Try reading full user profile if read quota is available
    try {
      const userDoc = await getDoc(docRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        let finalData;
        if (isFounder && userData.role !== ROLES.SUPER_ADMIN) {
           await setDoc(docRef, { role: ROLES.SUPER_ADMIN }, { merge: true });
           finalData = { ...u, ...userData, role: ROLES.SUPER_ADMIN };
        } else {
           if (!userData.role) {
             userData.role = ROLES.STUDENT;
             await setDoc(docRef, { role: ROLES.STUDENT }, { merge: true });
           }
           finalData = { ...u, ...userData };
        }
        setUser(finalData);
        localStorage.setItem(USER_CACHE_KEY, JSON.stringify({ ...userData, uid: u.uid }));
      } else {
        // Complete brand new user document
        const newUserData = {
          uid: u.uid,
          name: u.displayName || 'Scholar',
          email: u.email || '',
          phone: u.phoneNumber || '',
          role: isFounder ? ROLES.SUPER_ADMIN : ROLES.STUDENT,
          createdAt: serverTimestamp(),
          groupsCreatedToday: 0,
          lastGroupCreateDate: null
        };
        await setDoc(docRef, newUserData, { merge: true });
        setUser({ ...u, ...newUserData });
        localStorage.setItem(USER_CACHE_KEY, JSON.stringify({ ...newUserData, uid: u.uid }));
      }
    } catch (readErr) {
      console.warn("[AUTH] Firestore profile read failed (quota or offline):", readErr?.code || readErr?.message);
      const cachedRaw = localStorage.getItem(USER_CACHE_KEY);
      const hasCacheForUser = cachedRaw && JSON.parse(cachedRaw).uid === u.uid;
      if (!hasCacheForUser) {
        setUser({
          uid: u.uid,
          email: u.email,
          name: u.displayName || 'Scholar',
          role: isFounder ? ROLES.SUPER_ADMIN : ROLES.STUDENT
        });
      }
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

  // 3. Google Login — Smart strategy:
  //    Native Android App   → FirebaseAuthentication plugin (native bottom sheet)
  //    Electron Desktop App → signInWithRedirect (Google blocks popup in Electron)
  //    Web Browser          → signInWithPopup first, fallback to redirect if blocked
  async function googleLogin() {
    const isNative = Capacitor.isNativePlatform();
    
    if (isNative) {
      // Native Android app — use native Google Sign-In bottom sheet
      try {
        const result = await FirebaseAuthentication.signInWithGoogle();
        if (result?.credential?.idToken) {
          const credential = GoogleAuthProvider.credential(result.credential.idToken);
          const res = await signInWithCredential(auth, credential);
          await syncProfile(res.user);
          return res.user;
        }
        throw new Error('Native Google Login failed — no idToken');
      } catch (err) {
        console.error("Native Google Login Error:", err);
        throw new Error("Native Google Sign-In failed or was cancelled.");
      }
    }

    // Electron Desktop App — Use secure Desktop Bridge loopback login (browser-assisted)
    // with popup fallback so user is never blocked or left stranded in Chrome
    const isElectron = typeof window !== 'undefined' && window.desktopBridge?.isDesktop;
    if (isElectron) {
      if (window.desktopBridge?.startGoogleLogin) {
        try {
          const res = await window.desktopBridge.startGoogleLogin();
          return res;
        } catch (bridgeErr) {
          console.warn("[AUTH] Desktop bridge Google login error:", bridgeErr);
        }
      }
      try {
        const res = await signInWithPopup(auth, googleProvider);
        await syncProfile(res.user);
        return res.user;
      } catch (err) {
        console.error("[AUTH] Electron popup login failed:", err);
        throw err;
      }
    }

    // Web browser — try popup first (best UX, stays in app)
    try {
      const res = await signInWithPopup(auth, googleProvider);
      await syncProfile(res.user);
      return res.user;
    } catch (err) {
      if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
        console.warn("[AUTH] Popup blocked, falling back to redirect...");
        setLoading(true);
        googleProvider.setCustomParameters({ prompt: 'select_account' });
        return await signInWithRedirect(auth, googleProvider);
      }
      throw err; // Re-throw other errors
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
    
    const updatedUser = { ...user, ...data };
    
    try {
      // Use setDoc with merge: true so it creates or updates safely without failing on missing doc
      await setDoc(doc(db, "users", user.uid), data, { merge: true });
    } catch (err) {
      console.warn("Error updating profile in firestore:", err);
    }
    
    setUser(updatedUser);
    // CRITICAL FIX: Update cache so it doesn't revert when offline
    localStorage.setItem(USER_CACHE_KEY, JSON.stringify({ ...updatedUser, uid: user.uid }));
  }

  // 6. Logout — clears localStorage cache too
  function logout() {
    localStorage.removeItem(USER_CACHE_KEY);
    return signOut(auth);
  }

  useEffect(() => {
    window.__acb_login_with_credential = async (idToken, accessToken, fallbackUser) => {
      try {
        if (idToken) {
          const cred = GoogleAuthProvider.credential(idToken, accessToken || null);
          const res = await signInWithCredential(auth, cred);
          await syncProfile(res.user);
          return res.user;
        }
      } catch (err) {
        console.warn('Credential sign in failed, using fallback:', err);
      }
      if (fallbackUser && fallbackUser.uid) {
        localStorage.setItem(USER_CACHE_KEY, JSON.stringify(fallbackUser));
        setUser(fallbackUser);
        setLoading(false);
      }
    };
  }, []);

  useEffect(() => {
    if (window.__PRERENDER_INJECTED && !window.Capacitor?.isNativePlatform?.()) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      try {
        if (u) {
          await syncProfile(u);
        } else {
          // If on Desktop or has valid cached profile, do NOT wipe it!
          const cachedRaw = localStorage.getItem(USER_CACHE_KEY);
          if (cachedRaw) {
            try {
              const cachedData = JSON.parse(cachedRaw);
              if (cachedData && cachedData.uid) {
                setUser(cachedData);
                setLoading(false);
                return;
              }
            } catch (_) {}
          }
          // User is genuinely signed out — clear cache
          localStorage.removeItem(USER_CACHE_KEY);
          setUser(null);
        }
      } catch (err) {
        console.error("Auth sync error:", err);
      }
      if (!u) {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  // Handle Redirect Results (for mobile/tablet web login)
  // This runs on EVERY page load — if user came back from Google login, this handles it
  useEffect(() => {
    if (window.__PRERENDER_INJECTED && !window.Capacitor?.isNativePlatform?.()) {
      setLoading(false);
      return;
    }
    const handleRedirectResult = async () => {
      try {
        setLoading(true);
        const result = await getRedirectResult(auth);
        if (result?.user) {
          await syncProfile(result.user);
          // Clear any stored redirect path
          const lastPath = localStorage.getItem('lastPath');
          if (lastPath) {
            localStorage.removeItem('lastPath');
            // Navigate to saved path
            window.location.replace(lastPath);
          }
        }
      } catch (error) {
        console.error("[AUTH] Redirect result error:", error.code, error.message);
        // Common errors:
        // auth/account-exists-with-different-credential — user has another login method
        // auth/web-storage-unsupported — browser blocks storage
      } finally {
        setLoading(false);
      }
    };
    handleRedirectResult();
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
