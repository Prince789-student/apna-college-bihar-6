import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, BookOpen, FileText, Sparkles, LayoutGrid, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function MobileBottomNav({ onOpenMenu }) {
  const location = useLocation();
  const { user, ROLES } = useAuth();
  const isSuper = user?.email === 'prince86944@gmail.com' || user?.email === 'prince86944@gmail.com' || user?.role === ROLES?.SUPER_ADMIN || user?.role === 'SUPER_ADMIN';
  const isAdmin = isSuper || user?.role === ROLES?.ADMIN || user?.role === 'ADMIN';

  // Navigation Items
  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: Home,
      isActive: location.pathname === '/'
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

  return (
    <nav 
      aria-label="Mobile Bottom Navigation" 
      className="fixed bottom-0 inset-x-0 z-[190] md:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200/90 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] px-2 pt-1 pb-[max(env(safe-area-inset-bottom),0.5rem)] transition-all duration-300"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 select-none active:scale-90 ${
                active 
                  ? 'text-blue-600 font-bold' 
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <div className={`relative p-1.5 rounded-xl transition-all duration-200 ${
                active 
                  ? 'bg-blue-50 text-blue-600 shadow-xs' 
                  : 'text-slate-500'
              }`}>
                <Icon size={20} strokeWidth={active ? 2.5 : 2} />
                {active && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white animate-pulse" />
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-0.5 leading-none transition-colors ${
                active ? 'font-black text-blue-600' : 'text-slate-600'
              }`}>
                {item.name}
              </span>
            </NavLink>
          );
        })}

        {/* Menu / Drawer Button (or Admin if admin) */}
        <button
          onClick={onOpenMenu}
          type="button"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 select-none active:scale-90 text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
          aria-label="Open Navigation Menu"
        >
          <div className="relative p-1.5 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors">
            <LayoutGrid size={20} strokeWidth={2} />
            {isAdmin && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white" title="Admin Access Available" />
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 leading-none font-black text-slate-600">
            Menu
          </span>
        </button>
      </div>
    </nav>
  );
}
