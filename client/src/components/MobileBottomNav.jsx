import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, FileText, Sparkles, User, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function MobileBottomNav({ onOpenMenu, onOpenProfile }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, ROLES } = useAuth();
  const isSuper = user?.email === 'prince86944@gmail.com' || user?.email === 'prince8694@gmail.com' || user?.role === ROLES?.SUPER_ADMIN || user?.role === 'SUPER_ADMIN';
  const isAdmin = isSuper || user?.role === ROLES?.ADMIN || user?.role === 'ADMIN';

  const isStandalone = typeof window !== 'undefined' && Boolean(
    new URLSearchParams(window.location.search).get('standalone') === 'true' ||
    sessionStorage.getItem('standalone') === 'true'
  );

  // Navigation Items
  const navItems = [
    {
      name: 'Home',
      path: isStandalone ? '/hub' : '/',
      icon: Home,
      isActive: location.pathname === '/' || location.pathname === '/hub'
    },
    {
      name: 'Notes',
      path: '/notes',
      icon: BookOpen,
      isActive: location.pathname.startsWith('/notes')
    },
    {
      name: 'PYQ',
      path: '/pyq',
      icon: FileText,
      isActive: location.pathname.startsWith('/pyq')
    },
    {
      name: 'Predictor',
      path: '/ugeac-predictor',
      icon: Sparkles,
      isActive: location.pathname.startsWith('/ugeac-predictor')
    }
  ];

  const isProfileActive = location.pathname.startsWith('/extras') || location.pathname === '/login' || location.pathname === '/signup';

  return (
    <nav 
      aria-label="Mobile Bottom Navigation" 
      className="fixed bottom-0 inset-x-0 z-[190] md:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(15,23,42,0.06)] px-1 pt-1.5 pb-[max(env(safe-area-inset-bottom,0px),0.625rem)] transition-all duration-300"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-center justify-around gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-2xl transition-all duration-200 select-none active:scale-95 cursor-pointer ${
                active 
                  ? 'text-blue-600 font-extrabold' 
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <div className={`relative px-3 py-1 rounded-xl transition-all duration-200 flex items-center justify-center ${
                active 
                  ? 'bg-blue-50 text-blue-600 shadow-2xs scale-105' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}>
                <Icon size={19} strokeWidth={active ? 2.5 : 2} />
                {active && (
                  <span className="absolute -top-0.5 right-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 ring-2 ring-white" />
                )}
              </div>
              <span className={`text-[10.5px] tracking-tight mt-0.5 leading-none transition-colors ${
                active ? 'font-black text-blue-600' : 'text-slate-600'
              }`}>
                {item.name}
              </span>
            </NavLink>
          );
        })}

        {/* Profile / Account Button */}
        <button
          onClick={() => {
            if (user) {
              if (onOpenProfile) onOpenProfile();
              else navigate('/extras');
            } else {
              navigate('/login');
            }
          }}
          type="button"
          className={`flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-2xl transition-all duration-200 select-none active:scale-95 cursor-pointer ${
            isProfileActive ? 'text-blue-600 font-extrabold' : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
          aria-label="My Profile"
        >
          <div className={`relative px-3 py-1 rounded-xl transition-all duration-200 flex items-center justify-center ${
            isProfileActive ? 'bg-blue-50 text-blue-600 shadow-2xs scale-105' : 'text-slate-600 bg-slate-100/80 hover:bg-slate-200'
          }`}>
            {user ? <User size={19} strokeWidth={2.2} /> : <LogIn size={19} strokeWidth={2.2} />}
            {isAdmin && (
              <span className="absolute -top-0.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white" title="Admin Access Available" />
            )}
          </div>
          <span className={`text-[10.5px] tracking-tight mt-0.5 leading-none transition-colors ${
            isProfileActive ? 'font-black text-blue-600' : 'font-bold text-slate-600'
          }`}>
            {user ? 'My Profile' : 'Login'}
          </span>
        </button>
      </div>
    </nav>
  );
}
