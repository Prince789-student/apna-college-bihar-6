import { cutoffs2025, cutoffs2024 } from './real_cutoffs';

export const colleges = [
  { id: 101, name: "MIT Muzaffarpur", short: "MIT Muzaffarpur", tier: 1, location: "Muzaffarpur", estd: 1954, website: "https://www.mitmuzaffarpur.org", placement: { avg: "6.5 LPA", highest: "22 LPA" }, labs: "High Tech Labs", wifi: "Campus WiFi Available" },
  { id: 102, name: "BCE Bhagalpur", short: "BCE Bhagalpur", tier: 1, location: "Bhagalpur", estd: 1960, website: "https://bcebhagalpur.ac.in", placement: { avg: "6.2 LPA", highest: "18 LPA" }, labs: "Advanced R&D Labs", wifi: "Fully WiFi Enabled" },
  { id: 103, name: "GCE Gaya", short: "GCE Gaya", tier: 2, location: "Gaya", estd: 2008, website: "https://gcegaya.ac.in", placement: { avg: "5.5 LPA", highest: "12 LPA" }, labs: "Modern Equipment", wifi: "WiFi in Hostels" },
  { id: 104, name: "DCE Darbhanga", short: "DCE Darbhanga", tier: 2, location: "Darbhanga", estd: 2008, website: "https://dcedarbhanga.ac.in", placement: { avg: "5.2 LPA", highest: "10 LPA" }, labs: "Standard Engineering Labs", wifi: "Available" },
  { id: 105, name: "NCE Chandi", short: "NCE Chandi", tier: 2, location: "Nalanda", estd: 2008, website: "https://ncechandi.ac.in", placement: { avg: "5.0 LPA", highest: "9 LPA" }, labs: "New Infrastructure", wifi: "Available" },
  { id: 106, name: "MCE Motihari", short: "MCE Motihari", tier: 2, location: "Motihari", estd: 1980, website: "https://mcemotihari.ac.in", placement: { avg: "4.8 LPA", highest: "8 LPA" }, labs: "Renovated Labs", wifi: "Available" },
  { id: 107, name: "LNJPIT Chapra", short: "LNJPIT Chapra", tier: 2, location: "Chapra", estd: 2012, website: "https://lnjpit.ac.in", placement: { avg: "4.7 LPA", highest: "8 LPA" }, labs: "Growth Labs", wifi: "Limited" },
  { id: 108, name: "BCE Bakhtiyarpur", short: "BCE Bakhtiyarpur", tier: 1, location: "Patna", estd: 2016, website: "https://bcepatna.ac.in", placement: { avg: "5.8 LPA", highest: "14 LPA" }, labs: "Corporate Interaction Center", wifi: "High Speed WiFi" },
  { id: 109, name: "SIT Sitamarhi", short: "SIT Sitamarhi", tier: 3, location: "Sitamarhi", estd: 2016, website: "https://sitsitamarhi.ac.in", placement: { avg: "4.2 LPA", highest: "7 LPA" }, labs: "Basic Labs", wifi: "Common Area" },
  { id: 110, name: "RRSDCE Begusarai", short: "RRSDCE Begusarai", tier: 2, location: "Begusarai", estd: 2016, website: "https://rrsdce.ac.in", placement: { avg: "4.5 LPA", highest: "9 LPA" }, labs: "Industrial Labs", wifi: "Available" },
  { id: 111, name: "SCE Sasaram", short: "SCE Sasaram", tier: 3, location: "Rohtas", estd: 2016, website: "https://scesasaram.ac.in", placement: { avg: "4.0 LPA", highest: "6 LPA" }, labs: "Standard", wifi: "Partial" },
  { id: 112, name: "BPMCE Madhepura", short: "BPMCE Madhepura", tier: 3, location: "Madhepura", estd: 2016, website: "https://bpmcemadhepura.ac.in", placement: { avg: "3.8 LPA", highest: "6 LPA" }, labs: "Developing", wifi: "No" },
  { id: 113, name: "KCE Katihar", short: "KCE Katihar", tier: 2, location: "Katihar", estd: 2016, website: "https://kcekatihar.ac.in", placement: { avg: "4.4 LPA", highest: "8 LPA" }, labs: "ICT Enabled Labs", wifi: "Yes" },
  { id: 114, name: "PCE Purnea", short: "PCE Purnea", tier: 2, location: "Purnea", estd: 2017, website: "https://pcepurnea.ac.in", placement: { avg: "4.3 LPA", highest: "8 LPA" }, labs: "Modern Labs", wifi: "Yes" },
  { id: 115, name: "SCE Saharsa", short: "SCE Saharsa", tier: 3, location: "Saharsa", estd: 2017, website: "https://scesaharsa.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 116, name: "SCE Supaul", short: "SCE Supaul", tier: 3, location: "Supaul", estd: 2017, website: "https://scesupaul.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Well Maintained", wifi: "Yes" },
  { id: 117, name: "GEC Banka", short: "GEC Banka", tier: 3, location: "Banka", estd: 2018, website: "https://gecbanka.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 118, name: "GEC Vaishali", short: "GEC Vaishali", tier: 3, location: "Vaishali", estd: 2018, website: "https://gecvaishali.ac.in", placement: { avg: "3.8 LPA", highest: "6 LPA" }, labs: "Growing Infra", wifi: "Yes" },
  { id: 119, name: "GEC Jamui", short: "GEC Jamui", tier: 3, location: "Jamui", estd: 2018, website: "https://gecjamui.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Basic", wifi: "No" },
  { id: 120, name: "GEC Nawada", short: "GEC Nawada", tier: 3, location: "Nawada", estd: 2018, website: "https://gecnawada.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 121, name: "GEC Kishanganj", short: "GEC Kishanganj", tier: 3, location: "Kishanganj", estd: 2018, website: "https://geckishanganj.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Basic", wifi: "No" },
  { id: 122, name: "GEC Munger", short: "GEC Munger", tier: 3, location: "Munger", estd: 2018, website: "https://gecmunger.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 123, name: "GEC Sheohar", short: "GEC Sheohar", tier: 3, location: "Sheohar", estd: 2018, website: "https://gecsheohar.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Basic", wifi: "No" },
  { id: 124, name: "GEC West Champaran", short: "GEC Bettiah", tier: 3, location: "Bettiah", estd: 2018, website: "https://gecwc.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 125, name: "GEC Aurangabad", short: "GEC Aurangabad", tier: 3, location: "Aurangabad", estd: 2019, website: "https://gecaurangabad.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "New", wifi: "No" },
  { id: 126, name: "GEC Kaimur", short: "GEC Kaimur", tier: 3, location: "Kaimur", estd: 2019, website: "https://geckaimur.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 127, name: "GEC Khagaria", short: "GEC Khagaria", tier: 3, location: "Khagaria", estd: 2019, website: "https://geckhagaria.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "New", wifi: "No" },
  { id: 128, name: "GEC Araria", short: "GEC Araria", tier: 3, location: "Araria", estd: 2019, website: "https://gecararia.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 129, name: "GEC Arwal", short: "GEC Arwal", tier: 3, location: "Arwal", estd: 2019, website: "https://gecarwal.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 130, name: "GEC Bhojpur", short: "GEC Bhojpur", tier: 3, location: "Ara", estd: 2019, website: "https://gecbhojpur.ac.in", placement: { avg: "3.8 LPA", highest: "6 LPA" }, labs: "Standard", wifi: "Yes" },
  { id: 131, name: "GEC Buxar", short: "GEC Buxar", tier: 3, location: "Buxar", estd: 2019, website: "https://gecbuxar.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 132, name: "GEC Gopalganj", short: "GEC Gopalganj", tier: 3, location: "Gopalganj", estd: 2019, website: "https://gecgopalganj.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 133, name: "GEC Jehanabad", short: "GEC Jehanabad", tier: 3, location: "Jehanabad", estd: 2019, website: "https://gecjehanabad.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 134, name: "GEC Madhubani", short: "GEC Madhubani", tier: 3, location: "Madhubani", estd: 2019, website: "https://gecmadhubani.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 135, name: "GEC Samastipur", short: "GEC Samastipur", tier: 3, location: "Samastipur", estd: 2019, website: "https://gecsamastipur.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 136, name: "GEC Sheikhpura", short: "GEC Sheikhpura", tier: 3, location: "Sheikhpura", estd: 2019, website: "https://gecsheikhpura.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 137, short: "GEC Siwan", name: "GEC Siwan", tier: 3, location: "Siwan", estd: 2019, website: "https://gecsiwan.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" },
  { id: 138, name: "GEC Lakhisarai", short: "GEC Lakhisarai", tier: 3, location: "Lakhisarai", estd: 2019, website: "https://geclakhisarai.ac.in", placement: { avg: "3.5 LPA", highest: "5 LPA" }, labs: "Standard", wifi: "No" }
];

const processCutoffs = (raw) => {
  return raw.map(c => {
    const col = colleges.find(co => co.short === c.collegeShort);
    return { ...c, collegeId: col ? col.id : null };
  }).filter(c => c.collegeId !== null);
};

export const data2024 = processCutoffs(cutoffs2024);
export const data2025 = processCutoffs(cutoffs2025);
