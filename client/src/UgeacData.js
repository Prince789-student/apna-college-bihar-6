
import { cutoffs2024, cutoffs2025 } from './real_cutoffs';

export const colleges = [
  // Tier 1: Top Tier
  { id: 101, name: "M.I.T. Muzaffarpur", short: "MIT Muzaffarpur", tier: 1, location: "Muzaffarpur", estd: 1954, website: "https://www.mitmuzaffarpur.org", placement: { avg: "6.5 LPA", highest: "22 LPA" }, labs: "Advanced R&D Labs", wifi: "Fully WiFi Enabled" },
  { id: 102, name: "B.C.E. Bhagalpur", short: "BCE Bhagalpur", tier: 1, location: "Bhagalpur", estd: 1960, website: "https://bcebhagalpur.ac.in", placement: { avg: "6.0 LPA", highest: "18 LPA" }, labs: "Standard Labs", wifi: "Yes" },
  
  // Tier 2: Strong Colleges
  { id: 103, name: "G.C.E. Gaya", short: "GCE Gaya", tier: 2, location: "Gaya", estd: 2008, website: "https://gcegaya.ac.in", placement: { avg: "5.5 LPA", highest: "12 LPA" }, labs: "Modern Equipment", wifi: "Yes" },
  { id: 104, name: "D.C.E. Darbhanga", short: "DCE Darbhanga", tier: 2, location: "Darbhanga", estd: 2008, website: "https://dcedarbhanga.ac.in", placement: { avg: "5.0 LPA", highest: "10 LPA" }, labs: "Standard", wifi: "Yes" },
  { id: 105, name: "Nalanda College of Engineering, Chandi", short: "NCE Chandi", tier: 2, location: "Nalanda", estd: 2008, website: "https://ncechandi.ac.in", placement: { avg: "5.0 LPA", highest: "9 LPA" }, labs: "New Infra", wifi: "Yes" },
  { id: 114, name: "Purnea College of Engineering", short: "PCE Purnea", tier: 2, location: "Purnea", estd: 2017, website: "https://pcepurnea.ac.in", placement: { avg: "4.5 LPA", highest: "8 LPA" }, labs: "Modern", wifi: "Yes" },
  
  // Tier 3: Decent / Safe
  { id: 107, name: "L.N.J.P.I.T. Chapra", short: "LNJPIT Chapra", tier: 3, location: "Chapra", estd: 2012, website: "https://lnjpit.ac.in", placement: { avg: "4.6 LPA", highest: "9 LPA" }, labs: "Growing", wifi: "Yes" },
  { id: 108, name: "B.C.E. Bakhtiyarpur", short: "BCE Bakhtiyarpur", tier: 3, location: "Patna", estd: 2016, website: "https://bcepatna.ac.in", placement: { avg: "5.5 LPA", highest: "14 LPA" }, labs: "Smart Labs", wifi: "Yes" },
  { id: 109, name: "S.I.T. Sitamarhi", short: "SIT Sitamarhi", tier: 3, location: "Sitamarhi", estd: 2016, website: "https://sitsitamarhi.ac.in", placement: { avg: "4.2 LPA", highest: "7 LPA" }, labs: "Standard", wifi: "Yes" },
  { id: 110, name: "R.R.S.D.C.E. Begusarai", short: "RRSDCE Begusarai", tier: 3, location: "Begusarai", estd: 2016, website: "https://rrsdce.ac.in", placement: { avg: "4.5 LPA", highest: "10 LPA" }, labs: "Standard", wifi: "Yes" },
  { id: 113, name: "K.C.E. Katihar", short: "KCE Katihar", tier: 3, location: "Katihar", estd: 2016, website: "https://kcekatihar.ac.in", placement: { avg: "4.4 LPA", highest: "8 LPA" }, labs: "ICT Labs", wifi: "Yes" },
  { id: 111, name: "S.C.E. Sasaram", short: "SCE Sasaram", tier: 3, location: "Rohtas", estd: 2016, website: "https://scesasaram.ac.in", placement: { avg: "4.0 LPA", highest: "6 LPA" }, labs: "Standard", wifi: "Partial" },
  
  // Tier 4: Average / Backup
  { id: 106, name: "M.C.E. Motihari", short: "MCE Motihari", tier: 4, location: "Motihari", estd: 1980, website: "https://mcemotihari.ac.in", placement: { avg: "4.5 LPA", highest: "8 LPA" }, labs: "Renovated", wifi: "Yes" },
  { id: 112, name: "B.P.M.C.E. Madhepura", short: "BPMCE Madhepura", tier: 4, location: "Madhepura", estd: 2016, website: "https://bpmcemadhepura.ac.in", placement: { avg: "3.8 LPA", highest: "6 LPA" }, labs: "Basic", wifi: "Yes" },
  { id: 115, name: "Saharsa College of Engineering", short: "SCE Saharsa", tier: 4, location: "Saharsa", estd: 2017, website: "https://scesaharsa.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 116, name: "Supaul College of Engineering", short: "SCE Supaul", tier: 4, location: "Supaul", estd: 2017, website: "https://scesupaul.ac.in", placement: { avg: "3.6 LPA", highest: "6 LPA" }, labs: "Maintained", wifi: "Yes" },
  { id: 118, name: "GEC Vaishali", short: "GEC Vaishali", tier: 4, location: "Vaishali", estd: 2018, website: "https://gecvaishali.ac.in", placement: { avg: "3.8 LPA", highest: "7 LPA" }, labs: "Growing", wifi: "Yes" },
  { id: 117, name: "GEC Banka", short: "GEC Banka", tier: 4, location: "Banka", estd: 2018, website: "https://gecbanka.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Basic", wifi: "No" },
  
  // Tier 5: Low Tier
  { id: 119, name: "GEC Jamui", short: "GEC Jamui", tier: 5, location: "Jamui", estd: 2018, website: "https://gecjamui.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 120, name: "GEC Nawada", short: "GEC Nawada", tier: 5, location: "Nawada", estd: 2018, website: "https://gecnawada.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 121, name: "GEC Kishanganj", short: "GEC Kishanganj", tier: 5, location: "Kishanganj", estd: 2018, website: "https://geckishanganj.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Basic", wifi: "No" },
  { id: 122, name: "GEC Munger", short: "GEC Munger", tier: 5, location: "Munger", estd: 2018, website: "https://gecmunger.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Basic", wifi: "No" },
  { id: 123, name: "GEC Sheohar", short: "GEC Sheohar", tier: 5, location: "Sheohar", estd: 2018, website: "https://gecsheohar.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Basic", wifi: "No" },
  
  // Tier 6: Very New
  { id: 124, name: "GEC West Champaran", short: "GEC Bettiah", tier: 6, location: "Bettiah", estd: 2018, website: "https://gecwc.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 125, name: "GEC Aurangabad", short: "GEC Aurangabad", tier: 6, location: "Aurangabad", estd: 2019, website: "https://gecaurangabad.ac.in", placement: { avg: "3.5 LPA", highest: "6 LPA" }, labs: "New", wifi: "Yes" },
  { id: 126, name: "GEC Kaimur", short: "GEC Kaimur", tier: 6, location: "Kaimur", estd: 2019, website: "https://geckaimur.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 132, name: "GEC Gopalganj", short: "GEC Gopalganj", tier: 6, location: "Gopalganj", estd: 2019, website: "https://gecgopalganj.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 134, name: "GEC Madhubani", short: "GEC Madhubani", tier: 6, location: "Madhubani", estd: 2019, website: "https://gecmadhubani.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 137, name: "GEC Siwan", short: "GEC Siwan", tier: 6, location: "Siwan", estd: 2019, website: "https://gecsiwan.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 133, name: "GEC Jehanabad", short: "GEC Jehanabad", tier: 6, location: "Jehanabad", estd: 2019, website: "https://gecjehanabad.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 129, name: "GEC Arwal", short: "GEC Arwal", tier: 6, location: "Arwal", estd: 2019, website: "https://gecarwal.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 127, name: "GEC Khagaria", short: "GEC Khagaria", tier: 6, location: "Khagaria", estd: 2019, website: "https://geckhagaria.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "New", wifi: "No" },
  { id: 131, name: "GEC Buxar", short: "GEC Buxar", tier: 6, location: "Buxar", estd: 2019, website: "https://gecbuxar.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 130, name: "GEC Bhojpur", short: "GEC Bhojpur", tier: 6, location: "Ara", estd: 2019, website: "https://gecbhojpur.ac.in", placement: { avg: "3.8 LPA", highest: "6 LPA" }, labs: "Standard", wifi: "Yes" },
  { id: 136, name: "GEC Sheikhpura", short: "GEC Sheikhpura", tier: 6, location: "Sheikhpura", estd: 2019, website: "https://gecsheikhpura.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 138, name: "GEC Lakhisarai", short: "GEC Lakhisarai", tier: 6, location: "Lakhisarai", estd: 2019, website: "https://geclakhisarai.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 135, name: "GEC Samastipur", short: "GEC Samastipur", tier: 6, location: "Samastipur", estd: 2019, website: "https://gecsamastipur.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 128, name: "GEC Araria", short: "GEC Araria", tier: 6, location: "Araria", estd: 2019, website: "https://gecararia.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" }
];

const processCutoffs = (raw) => {
  return raw.map(c => {
    const col = colleges.find(co => co.short === c.collegeShort);
    return { ...c, collegeId: col ? col.id : null };
  }).filter(c => c.collegeId !== null);
};

export const data2024 = processCutoffs(cutoffs2024);
export const data2025 = processCutoffs(cutoffs2025);

// Master list of ALL branches from the raw data
export const allUgeacBranches = Array.from(new Set([
  ...cutoffs2024.map(c => c.branch.trim()),
  ...cutoffs2025.map(c => c.branch.trim())
])).sort();
