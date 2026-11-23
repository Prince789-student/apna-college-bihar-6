import React from 'react';
import {
  Terminal, Building2, Cog, Zap, Cpu, CircuitBoard, Server,
  Mountain, FlaskConical, HeartPulse, Utensils, Plane, Bot, Flame,
  Settings, Database, BrainCircuit, ShieldCheck, Wifi, Network, Layers
} from 'lucide-react';
import { BRANCHES, getSavedBranch, setSavedBranch } from '../constants/branches';

const BRANCH_ICON_MAP = {
  CSE: { Icon: Terminal, bg: 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25' },
  CIVIL: { Icon: Building2, bg: 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/25' },
  ME: { Icon: Cog, bg: 'bg-orange-500 text-white shadow-sm shadow-orange-500/25' },
  EE: { Icon: Zap, bg: 'bg-amber-500 text-white shadow-sm shadow-amber-500/25' },
  ECE: { Icon: Cpu, bg: 'bg-violet-600 text-white shadow-sm shadow-violet-600/25' },
  EEE: { Icon: CircuitBoard, bg: 'bg-pink-600 text-white shadow-sm shadow-pink-600/25' },
  IT: { Icon: Server, bg: 'bg-sky-600 text-white shadow-sm shadow-sky-600/25' },
  MINING: { Icon: Mountain, bg: 'bg-stone-700 text-white shadow-sm shadow-stone-700/25' },
  CHEMICAL: { Icon: FlaskConical, bg: 'bg-teal-600 text-white shadow-sm shadow-teal-600/25' },
  BIOMEDICAL: { Icon: HeartPulse, bg: 'bg-rose-600 text-white shadow-sm shadow-rose-600/25' },
  FOOD: { Icon: Utensils, bg: 'bg-lime-600 text-white shadow-sm shadow-lime-600/25' },
  AERONAUTICAL: { Icon: Plane, bg: 'bg-blue-600 text-white shadow-sm shadow-blue-600/25' },
  ROBOTICS: { Icon: Bot, bg: 'bg-indigo-700 text-white shadow-sm shadow-indigo-700/25' },
  FIRE: { Icon: Flame, bg: 'bg-red-600 text-white shadow-sm shadow-red-600/25' },
  MECHATRONICS: { Icon: Settings, bg: 'bg-purple-600 text-white shadow-sm shadow-purple-600/25' },
  CSE_DS: { Icon: Database, bg: 'bg-cyan-600 text-white shadow-sm shadow-cyan-600/25' },
  CSE_AIML: { Icon: BrainCircuit, bg: 'bg-blue-700 text-white shadow-sm shadow-blue-700/25' },
  CSE_AI: { Icon: BrainCircuit, bg: 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25' },
  CSE_CYBER: { Icon: ShieldCheck, bg: 'bg-slate-800 text-white shadow-sm shadow-slate-800/25' },
  CSE_IOT: { Icon: Wifi, bg: 'bg-teal-600 text-white shadow-sm shadow-teal-600/25' },
  CSE_NETWORKS: { Icon: Network, bg: 'bg-sky-700 text-white shadow-sm shadow-sky-700/25' },
  ECE_VLSI: { Icon: Cpu, bg: 'bg-purple-700 text-white shadow-sm shadow-purple-700/25' },
  CSE_IOT_CS_BC: { Icon: ShieldCheck, bg: 'bg-indigo-800 text-white shadow-sm shadow-indigo-800/25' },
  CIVIL_CA: { Icon: Layers, bg: 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/25' },
};

export default function BranchShortcutGrid({ onSelect }) {
  const savedBranch = getSavedBranch();

  const handlePick = (b) => {
    onSelect(b);
  };

  const handleMyBranchDropdown = (e) => {
    const pickedId = e.target.value;
    if (!pickedId) return;
    const found = BRANCHES.find((b) => b.id === pickedId);
    if (found) {
      setSavedBranch(found);
      onSelect(found);
    }
  };

  const renderSection = (title, items) => (
    <div>
      <div className="flex items-center gap-2 mb-3.5 px-1">
        <span className="text-slate-500 text-[11px] font-black uppercase tracking-[0.2em]">{title}</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
        {items.map((b) => {
          const cfg = BRANCH_ICON_MAP[b.id] || { Icon: Terminal, bg: 'bg-indigo-600 text-white' };
          const IconComp = cfg.Icon;
          const isMyBranch = savedBranch?.id === b.id;
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => handlePick(b)}
              className={`relative min-h-[112px] bg-white hover:bg-slate-50 border rounded-2xl flex flex-col items-center justify-center gap-2 py-3 px-1.5 shadow-2xs cursor-pointer transition-all active:scale-95 ${
                isMyBranch ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-slate-200/80 hover:border-blue-300'
              }`}
            >
              {isMyBranch && (
                <span className="absolute -top-2 right-1.5 px-1.5 py-0.5 rounded-full bg-indigo-600 text-white text-[8px] font-black uppercase tracking-wider shadow-xs">
                  My Branch
                </span>
              )}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center ${cfg.bg}`}>
                <IconComp size={30} strokeWidth={2.2} />
              </div>
              <span className="text-[11px] sm:text-xs font-black text-slate-900 tracking-tight text-center leading-tight line-clamp-1 w-full px-1">
                {b.short}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* My Branch Selector (Synced across Syllabus, Notes & PYQ) */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider shrink-0">
            My Branch
          </span>
          <span className="text-xs sm:text-sm font-bold text-slate-800 truncate">
            {savedBranch ? savedBranch.label : 'Select once for Syllabus, Notes & PYQ'}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <select
            value={savedBranch?.id || ''}
            onChange={handleMyBranchDropdown}
            aria-label="Select My Branch"
            className="px-3 py-2 rounded-xl bg-white border border-indigo-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="">{savedBranch ? 'Change My Branch...' : 'Choose My Branch...'}</option>
            {BRANCHES.map((b) => (
              <option key={b.id} value={b.id}>
                {b.short} — {b.label}
              </option>
            ))}
          </select>
          {savedBranch && (
            <button
              type="button"
              onClick={() => handlePick(savedBranch)}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase tracking-wider cursor-pointer transition-all active:scale-95"
            >
              Open
            </button>
          )}
        </div>
      </div>

      {renderSection('Core Branches', BRANCHES.filter(b => b.type === 'core'))}
      {renderSection('Specialization Branches', BRANCHES.filter(b => b.type === 'spec'))}
    </div>
  );
}
