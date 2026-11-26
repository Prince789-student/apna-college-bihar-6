import React from 'react';
import { BRANCHES, getSavedBranch, setSavedBranch } from '../constants/branches';
import AppIconTile from './AppIconTile';

const BRANCH_IMAGE_MAP = {
  CSE: '/branch-icons/cse.png',
  CIVIL: '/branch-icons/civil.png',
  ME: '/branch-icons/me.png',
  EE: '/branch-icons/ee.png',
  ECE: '/branch-icons/ece.png',
  EEE: '/branch-icons/eee.png',
  IT: '/branch-icons/it.png',
  MINING: '/branch-icons/mining.png',
  CHEMICAL: '/branch-icons/chemical.png',
  BIOMEDICAL: '/branch-icons/biomedical.png',
  FOOD: '/branch-icons/food.png',
  AERONAUTICAL: '/branch-icons/aeronautical.png',
  ROBOTICS: '/branch-icons/robotics.png',
  FIRE: '/branch-icons/fire.png',
  MECHATRONICS: '/branch-icons/mechatronics.png',
  CSE_DS: '/branch-icons/cse_ds.png',
  CSE_AIML: '/branch-icons/cse_aiml.png',
  CSE_AI: '/branch-icons/cse_ai.png',
  CSE_CYBER: '/branch-icons/cse_cyber.png',
  CSE_IOT: '/branch-icons/cse_iot.png',
  CSE_NETWORKS: '/branch-icons/cse_networks.png',
  ECE_VLSI: '/branch-icons/ece_vlsi.png',
  CSE_IOT_CS_BC: '/branch-icons/cse_iot_cs_bc.png',
  CIVIL_CA: '/branch-icons/civil_ca.png',
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
          const imgSrc = BRANCH_IMAGE_MAP[b.id] || '/branch-icons/cse.png';
          const isMyBranch = savedBranch?.id === b.id;
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => handlePick(b)}
              className={`relative min-h-[112px] bg-white hover:bg-slate-50 border rounded-2xl flex flex-col items-center justify-center gap-2 py-3 px-1.5 shadow-2xs cursor-pointer transition-all active:scale-95 group ${
                isMyBranch ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-slate-200/80 hover:border-blue-300'
              }`}
            >
              {isMyBranch && (
                <span className="absolute -top-2 right-1.5 z-20 px-1.5 py-0.5 rounded-full bg-indigo-600 text-white text-[8px] font-black uppercase tracking-wider shadow-xs">
                  My Branch
                </span>
              )}
              <AppIconTile image={imgSrc} alt={b.short} size="lg" />
              <span className="text-[9.5px] sm:text-xs font-black text-slate-900 tracking-tight text-center leading-tight break-words w-full px-0.5">
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
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={savedBranch?.id || ''}
            onChange={handleMyBranchDropdown}
            aria-label="Select My Branch"
            className="flex-1 min-w-0 px-3 py-2 rounded-xl bg-white border border-indigo-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="">{savedBranch ? 'Change My Branch...' : 'Choose My Branch...'}</option>
            {BRANCHES.map((b) => (
              <option key={b.id} value={b.id}>
                {b.short} · {b.label}
              </option>
            ))}
          </select>
          {savedBranch && (
            <button
              type="button"
              onClick={() => handlePick(savedBranch)}
              className="shrink-0 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase tracking-wider cursor-pointer transition-all active:scale-95"
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
