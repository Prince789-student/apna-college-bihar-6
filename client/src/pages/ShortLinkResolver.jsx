import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function ShortLinkResolver() {
  const { shortId } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function resolveLink() {
      try {
        const docRef = doc(db, 'shortlinks', shortId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().longUrl) {
          window.location.replace(docSnap.data().longUrl);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error resolving shortlink:", err);
        setError(true);
      }
    }
    
    if (shortId) {
      resolveLink();
    }
  }, [shortId]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-center p-4">
        <div className="text-6xl mb-4">🔗</div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Link Not Found</h1>
        <p className="text-slate-600 max-w-md">The shortlink you are trying to access does not exist or has been removed.</p>
        <a href="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Go to Home</a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-semibold text-slate-700 animate-pulse">Redirecting you...</p>
    </div>
  );
}
