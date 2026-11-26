import React from 'react';

/**
 * Clean real-photo app icon tile (no AI neon gradients).
 */
export default function AppIconTile({ image, alt = '', icon, gradient = 'bg-white', shadow = 'shadow-slate-900/10', badge, size = 'md' }) {
  const sizeClasses = size === 'lg'
    ? 'w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[20px]'
    : 'w-14 h-14 rounded-[18px]';

  if (image) {
    return (
      <div
        className={`relative ${sizeClasses} bg-white ${shadow} shadow-sm flex items-center justify-center shrink-0 overflow-hidden border border-slate-200/90 group-hover:scale-105 transition-transform duration-200`}
      >
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-contain p-1"
        />
        {badge && (
          <span className="absolute bottom-1 right-1 z-20 px-1 py-0.2 rounded-md bg-slate-900/80 text-[7px] font-black uppercase tracking-wider text-white leading-tight">
            {badge}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative ${sizeClasses} ${gradient} ${shadow} shadow-sm flex items-center justify-center text-white shrink-0 overflow-hidden ring-1 ring-inset ring-white/25 group-hover:scale-105 transition-transform duration-200`}
    >
      <div className="relative z-10">{icon}</div>
      {badge && (
        <span className="absolute bottom-1 right-1 z-20 px-1 py-0.2 rounded-md bg-black/50 text-[7px] font-black uppercase tracking-wider text-white leading-tight">
          {badge}
        </span>
      )}
    </div>
  );
}
