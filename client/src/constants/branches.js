export const BRANCHES = [
  // Core Branches
  { id: 'CSE', syllabusId: 'cse', label: 'Computer Science', short: 'CSE', color: 'indigo', emoji: '💻', type: 'core' },
  { id: 'CIVIL', syllabusId: 'civil', label: 'Civil Engineering', short: 'CIVIL', color: 'emerald', emoji: '🏗️', type: 'core' },
  { id: 'ME', syllabusId: 'mech', label: 'Mechanical Engg.', short: 'ME', color: 'orange', emoji: '⚙️', type: 'core' },
  { id: 'EE', syllabusId: 'ee', label: 'Electrical Engg.', short: 'EE', color: 'yellow', emoji: '⚡', type: 'core' },
  { id: 'ECE', syllabusId: 'ece', label: 'Electronics & Comm.', short: 'ECE', color: 'violet', emoji: '📡', type: 'core' },
  { id: 'EEE', syllabusId: 'eee', label: 'Electrical & Electronics', short: 'EEE', color: 'pink', emoji: '🔌', type: 'core' },
  { id: 'IT', syllabusId: 'cse', label: 'Information Tech.', short: 'IT', color: 'indigo', emoji: 'ℹ️', type: 'core' },
  { id: 'MINING', syllabusId: 'mining', label: 'Mining Engineering', short: 'MINING', color: 'orange', emoji: '⛏️', type: 'core' },
  { id: 'CHEMICAL', syllabusId: 'chemical', label: 'Chemical Engineering', short: 'CHEMICAL', color: 'emerald', emoji: '🧪', type: 'core' },
  { id: 'BIOMEDICAL', syllabusId: 'biomedical', label: 'Biomedical Engg.', short: 'BIOMEDICAL', color: 'pink', emoji: '🧬', type: 'core' },
  { id: 'FOOD', syllabusId: 'food', label: 'Food Technology', short: 'FOOD', color: 'yellow', emoji: '🍎', type: 'core' },
  { id: 'AERONAUTICAL', syllabusId: 'aeronautical', label: 'Aeronautical Engg.', short: 'AERONAUTICAL', color: 'violet', emoji: '🚀', type: 'core' },
  { id: 'ROBOTICS', syllabusId: 'robotics', label: 'Robotics Engineering', short: 'ROBOTICS', color: 'indigo', emoji: '🤖', type: 'core' },
  { id: 'FIRE', syllabusId: 'fire', label: 'Fire & Safety Engg.', short: 'FIRE', color: 'orange', emoji: '🔥', type: 'core' },
  { id: 'MECHATRONICS', syllabusId: 'mechatronics', label: 'Mechatronics Engg.', short: 'MECHATRONICS', color: 'violet', emoji: '⚙️🤖', type: 'core' },

  // Specialization Branches
  { id: 'CSE_DS', syllabusId: 'cse', label: 'CSE (Data Science)', short: 'CSE DS', color: 'indigo', emoji: '📊', type: 'spec' },
  { id: 'CSE_AIML', syllabusId: 'cse_ai', label: 'CSE (AI & ML)', short: 'CSE AI/ML', color: 'indigo', emoji: '🤖', type: 'spec' },
  { id: 'CSE_AI', syllabusId: 'cse_ai', label: 'CSE (Artificial Intel.)', short: 'CSE AI', color: 'indigo', emoji: '🧠', type: 'spec' },
  { id: 'CSE_CYBER', syllabusId: 'cse_iot_cs', label: 'CSE (Cyber Security)', short: 'CSE Cyber', color: 'indigo', emoji: '🔒', type: 'spec' },
  { id: 'CSE_IOT', syllabusId: 'cse_iot', label: 'CSE (IoT)', short: 'CSE IoT', color: 'indigo', emoji: '🌐', type: 'spec' },
  { id: 'CSE_NETWORKS', syllabusId: 'cse', label: 'CSE (Networks)', short: 'CSE Networks', color: 'indigo', emoji: '🕸️', type: 'spec' },
  { id: 'ECE_VLSI', syllabusId: 'ece', label: 'ECE (VLSI Design)', short: 'ECE VLSI', color: 'violet', emoji: '🎛️', type: 'spec' },
  { id: 'CSE_IOT_CS_BC', syllabusId: 'cse_iot_cs', label: 'CSE (IoT, CS, Blockchain)', short: 'CSE IoT/CS/BC', color: 'indigo', emoji: '⛓️', type: 'spec' },
  { id: 'CIVIL_CA', syllabusId: 'civil_ca', label: 'Civil (Computer Appl.)', short: 'Civil CA', color: 'emerald', emoji: '🏗️💻', type: 'spec' },
];

export const SEMESTERS = [1, 2, 3, 4, 5, 6, 7, 8];

export const BRANCH_COLORS = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', active: 'bg-indigo-600 text-white border-indigo-600', badge: 'bg-indigo-100 text-indigo-600' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', active: 'bg-violet-600 text-white border-violet-600', badge: 'bg-violet-100 text-violet-600' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', active: 'bg-orange-600 text-white border-orange-600', badge: 'bg-orange-100 text-orange-600' },
  emerald:{ bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', active: 'bg-emerald-600 text-white border-emerald-600', badge: 'bg-emerald-100 text-emerald-600' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', active: 'bg-yellow-500 text-white border-yellow-500', badge: 'bg-yellow-100 text-yellow-600' },
  pink:   { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', active: 'bg-pink-600 text-white border-pink-600', badge: 'bg-pink-100 text-pink-600' },
};

const MY_BRANCH_KEY = 'acb_my_branch';

export function getSavedBranch() {
  try {
    const id = localStorage.getItem(MY_BRANCH_KEY);
    if (!id) return null;
    return BRANCHES.find(
      (b) => b.id.toLowerCase() === id.toLowerCase() || (b.syllabusId && b.syllabusId.toLowerCase() === id.toLowerCase())
    ) || null;
  } catch {
    return null;
  }
}

export function setSavedBranch(branchIdOrObj) {
  try {
    const id = typeof branchIdOrObj === 'string' ? branchIdOrObj : branchIdOrObj?.id;
    if (id) {
      localStorage.setItem(MY_BRANCH_KEY, id);
      window.dispatchEvent(new Event('acb-my-branch-changed'));
    }
  } catch {}
}

export function clearSavedBranch() {
  try {
    localStorage.removeItem(MY_BRANCH_KEY);
    window.dispatchEvent(new Event('acb-my-branch-changed'));
  } catch {}
}
