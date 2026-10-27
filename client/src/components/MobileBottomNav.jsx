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
      className="fixed bottom-0 inset-x-0 z-[190] md:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200/80 shadow-[0_-4px_25px_rgba(15,23,42,0.06)] px-1 pt-1.5 pb-[max(env(safe-area-inset-bottom,0px),0.625rem)] transition-all duration-300"
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

        {/* Menu / Drawer Button */}
        <button
          onClick={onOpenMenu}
          type="button"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-2xl transition-all duration-200 select-none active:scale-95 text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
          aria-label="Open Navigation Menu"
        >
          <div className="relative px-3 py-1 rounded-xl text-slate-600 bg-slate-100/80 hover:bg-slate-200 transition-colors flex items-center justify-center">
            <LayoutGrid size={19} strokeWidth={2} />
            {isAdmin && (
              <span className="absolute -top-0.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white" title="Admin Access Available" />
            )}
          </div>
          <span className="text-[10.5px] tracking-tight mt-0.5 leading-none font-bold text-slate-600">
            Menu
          </span>
        </button>
      </div>
    </nav>
  );
}
