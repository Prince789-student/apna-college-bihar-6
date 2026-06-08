/* src/components/LoadingOverlay.jsx */
import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Full‑screen loading overlay with glassmorphism effect.
 * Used to indicate background operations such as file uploads.
 */
export default function LoadingOverlay({ visible, message = 'Processing…' }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-lg z-50">
      <div className="flex flex-col items-center gap-4 p-6 bg-white/80 rounded-2xl shadow-xl">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
        <span className="text-sm font-medium text-slate-800">{message}</span>
      </div>
    </div>
  );
}
