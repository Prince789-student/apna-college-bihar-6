import fs from 'fs';
import path from 'path';

const DOMAIN = "https://www.apnacollegebihar.online";

const branches = [
  'cse', 'civil', 'me', 'ee', 'ece', 'eee', 'it', 'mining', 'chemical', 'biomedical', 'food', 'aeronautical', 'robotics', 'fire', 'mechatronics',
  'cse_ds', 'cse_aiml', 'cse_ai', 'cse_cyber', 'cse_iot', 'cse_networks', 'ece_vlsi', 'cse_iot_cs_bc', 'civil_ca'
];

const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

const colleges = [
  'mit-muzaffarpur',
  'bce-bhagalpur',
  'gce-gaya',
  'dce-darbhanga',
  'mce-motihari',
  'lnjpit-chapra',
  'nce-chandi',
  'rce-saharsa',
  'sce-sasaram',
  'pce-purnea',
  'bce-bakhtiyarpur',
  'sit-sitamarhi',
  'rrsdce-begusarai',
  'jmit-jamui',
  'mita-aurangabad',
  'gwc-buxar',
  'bce-buxar',
  'spce-siwan',
  'kmc-katihar',
  'sm-muzaffarpur',
  'mwec-madhepura',
  'sgp-patna',
  'gec-sheikhpura',
  'gec-munger',
  'gec-jamui',
  'gec-banka',
  'gec-nawada',
  'gec-kishanganj',
  'gec-araria',
  'gec-supaul',
  'gec-saharsa',
  'gec-madhubani',
  'gec-samastipur',
  'gec-vaishali',
  'gec-gopalganj',
  'gec-siwan',
  'gec-bhojpur',
  'gec-rohtas',
  'gec-buxar',
  'gec-kaimur',
  'gec-jehanabad',
  'gec-arwal',
  'gec-lakhisarai',
  'gec-khagaria',
  'gec-begusarai'
];

const commonSubjects = [
  'engineering-mathematics-1', 'engineering-mathematics-2', 'engineering-mathematics-3', 
  'engineering-physics', 'engineering-chemistry', 'basic-electrical-engineering', 
  'basic-electronics-engineering', 'programming-for-problem-solving', 'engineering-graphics', 
  'workshop-manufacturing-practices', 'english', 'data-structures-and-algorithms', 
  'object-oriented-programming-using-cpp', 'computer-organization-and-architecture', 
  'database-management-systems', 'operating-systems', 'design-and-analysis-of-algorithms', 
  'formal-language-and-automata-theory', 'computer-networks', 'software-engineering', 
  'compiler-design', 'artificial-intelligence', 'machine-learning', 'internet-of-things', 
  'thermodynamics', 'fluid-mechanics', 'strength-of-materials', 'theory-of-machines', 
  'heat-and-mass-transfer', 'engineering-mechanics', 'surveying', 'building-materials', 
  'concrete-technology', 'structural-analysis', 'geotechnical-engineering', 
  'environmental-engineering', 'transportation-engineering', 'water-resources-engineering', 
  'power-systems', 'control-systems', 'electrical-machines', 'power-electronics', 
  'signals-and-systems', 'digital-electronics', 'analog-electronic-circuits', 
  'electromagnetic-waves', 'microprocessors-and-microcontrollers', 'communication-systems', 
  'vlsi-design', 'data-science', 'cyber-security', 'cloud-computing', 'block-chain', 
  'biology-for-engineers', 'indian-constitution', 'environmental-science'
];

const urls = [];

// Static Pages
urls.push('/');
urls.push('/hub');
urls.push('/hackathons');
urls.push('/ugeac-predictor');
urls.push('/notes');
urls.push('/pyq');
urls.push('/syllabus');

// Dynamic Notes & PYQ Pages
for (const branch of branches) {
  urls.push(`/notes/${branch}`);
  urls.push(`/pyq/${branch}`);
  urls.push(`/syllabus/${branch}`);
  for (const sem of semesters) {
    urls.push(`/notes/${branch}/${sem}`);
    urls.push(`/pyq/${branch}/${sem}`);
  }
}

// College Pages & Sub-pages
for (const col of colleges) {
  urls.push(`/college/${col}`);
  urls.push(`/college/${col}/fees`);
  urls.push(`/college/${col}/placement`);
  urls.push(`/college/${col}/cutoff`);
  urls.push(`/college/${col}/hostel`);
  urls.push(`/college/${col}/review`);
  urls.push(`/college/${col}/branches`);
}

// Branch Hub Pages & Sub-pages
for (const branch of branches) {
  urls.push(`/branch/${branch}`);
  urls.push(`/branch/${branch}/career`);
  urls.push(`/branch/${branch}/salary`);
  urls.push(`/branch/${branch}/skills`);
  urls.push(`/branch/${branch}/placement`);
  urls.push(`/branch/${branch}/internship`);
}

// UGEAC Deep Pages
const ugeacPages = [
  'cutoff-2025',
  'choice-filling-guide',
  'seat-allotment',
  'merit-list',
  'counselling-process',
  'document-verification'
];
for (const page of ugeacPages) {
  urls.push(`/ugeac/${page}`);
}

// Subject Pages
for (const subject of commonSubjects) {
  urls.push(`/subject/${subject}`);
  urls.push(`/subject/${subject}/notes`);
  urls.push(`/subject/${subject}/pyq`);
  urls.push(`/subject/${subject}/syllabus`);
}

// Programmatic SEO Keywords (Search routes)
for (const subject of commonSubjects) {
  urls.push(`/search/${subject}`);
  urls.push(`/search/${subject}-notes`);
  urls.push(`/search/${subject}-pyq`);
}

// ── BEU Tool SEO Keywords ──────────────────────────────────────────

// Static Tool Pages
urls.push('/beu/attendance');
urls.push('/beu/timetable');
urls.push('/beu/cgpa');
urls.push('/beu/result');

// Attendance Keywords
const attendanceKeywords = [
  'beu-attendance-calculator',
  'attendance-percentage-calculator',
  'bihar-engineering-attendance',
  '75-percent-attendance-calculator',
  'attendance-shortfall-calculator',
  'engineering-attendance-calculator',
  'beu-attendance-tracker',
  'minimum-attendance-beu',
  'how-to-calculate-attendance-beu',
  'beu-attendance-rules',
  'cse-attendance-calculator',
  'civil-attendance-calculator',
  'mechanical-attendance-calculator',
  'electrical-attendance-calculator',
  'ece-attendance-calculator',
  'it-attendance-calculator-beu',
  'ece-vlsi-attendance-beu',
  'cse-aiml-attendance-beu',
  'cse-ds-attendance-beu',
  'cse-cyber-attendance-beu',
  'beu-attendance-sem1', 'beu-attendance-sem2', 'beu-attendance-sem3',
  'beu-attendance-sem4', 'beu-attendance-sem5', 'beu-attendance-sem6',
  'beu-attendance-sem7', 'beu-attendance-sem8',
  'attendance-calculator-2025',
  'beu-attendance-shortage-calculator',
  'mit-muzaffarpur-attendance-calculator',
  'bce-bhagalpur-attendance-calculator',
  'gce-gaya-attendance-calculator',
];

// Timetable Keywords
const timetableKeywords = [
  'beu-timetable-2026',
  'beu-exam-schedule-2026',
  'beu-class-timetable',
  'bihar-engineering-timetable',
  'beu-semester-schedule',
  'beu-timetable-cse',
  'beu-timetable-civil',
  'beu-timetable-mechanical',
  'beu-timetable-electrical',
  'beu-timetable-ece',
  'beu-sem1-timetable', 'beu-sem2-timetable', 'beu-sem3-timetable',
  'beu-sem4-timetable', 'beu-sem5-timetable', 'beu-sem6-timetable',
  'beu-sem7-timetable', 'beu-sem8-timetable',
  'beu-exam-date-sheet-2026',
  'beu-practical-schedule',
  'beu-internal-exam-timetable',
  'bihar-engineering-university-exam-schedule',
  'beu-back-exam-schedule',
];

// CGPA Keywords
const cgpaKeywords = [
  'beu-cgpa-calculator',
  'beu-sgpa-calculator',
  'sgpa-to-cgpa-converter',
  'beu-grade-calculator',
  'beu-marks-to-cgpa',
  'bihar-engineering-cgpa',
  'beu-gpa-calculator',
  'beu-cgpa-cse',
  'beu-cgpa-civil',
  'beu-cgpa-mechanical',
  'beu-cgpa-electrical',
  'beu-cgpa-ece',
  'beu-sem1-cgpa', 'beu-sem2-cgpa', 'beu-sem3-cgpa',
  'beu-sem4-cgpa', 'beu-sem5-cgpa', 'beu-sem6-cgpa',
  'beu-sem7-cgpa', 'beu-sem8-cgpa',
  'beu-cgpa-2026',
  'beu-sgpa-2026',
  'how-to-calculate-cgpa-beu',
  'beu-grade-point-average',
  'beu-percentage-to-cgpa',
  'beu-cgpa-to-percentage',
  'bihar-engineering-grading-system',
  'beu-distinction-cgpa',
  'beu-first-division-cgpa',
];

// Result Keywords
const resultKeywords = [
  'beu-result-2026',
  'bihar-engineering-result',
  'beu-exam-result',
  'beu-result-marksheet',
  'beu-result-sem1', 'beu-result-sem2', 'beu-result-sem3',
  'beu-result-sem4', 'beu-result-sem5', 'beu-result-sem6',
  'beu-result-sem7', 'beu-result-sem8',
  'beu-result-cse', 'beu-result-civil', 'beu-result-mechanical',
  'beu-result-electrical', 'beu-result-ece',
  'bihar-engineering-university-result-2026',
  'beu-back-result-2026',
  'beu-supplementary-result',
  'beu-result-link-2026',
  'beu-marksheet-download',
  'mit-muzaffarpur-result-2026',
  'bce-bhagalpur-result-2026',
  'gce-gaya-result-2026',
  'beu-rank-list-2026',
  'beu-merit-list-2026',
];

for (const kw of attendanceKeywords) urls.push(`/beu/attendance/${kw}`);
for (const kw of timetableKeywords) urls.push(`/beu/timetable/${kw}`);
for (const kw of cgpaKeywords) urls.push(`/beu/cgpa/${kw}`);
for (const kw of resultKeywords) urls.push(`/beu/result/${kw}`);

// ── Feature SEO Keywords ────────────────────────────────────────────

// Static Feature Pages
urls.push('/feature/focus-timer');
urls.push('/feature/study-groups');
urls.push('/feature/study-resources');
urls.push('/feature/calculator');
urls.push('/feature/personal-manager');

// Focus Timer / Pomodoro / Study Timer Keywords
const focusTimerKeywords = [
  'pomodoro-timer-for-students',
  'study-timer-online',
  'focus-mode-for-students',
  '25-minute-study-timer',
  'engineering-student-study-timer',
  'study-streak-tracker',
  'daily-study-goal-tracker',
  'deep-work-timer-students',
  'beu-focus-mode',
  'study-session-tracker',
  'focus-timer-online-free',
  'pomodoro-technique-beu-students',
  'study-hours-tracker-engineering',
  'concentration-timer-students',
  'exam-preparation-timer',
  'beu-study-session-tracker',
  'engineering-focus-session',
  'productivity-timer-students',
  'best-pomodoro-timer-for-engineering-students',
  'free-online-study-timer-with-breaks',
  'how-to-focus-on-studies-for-long-hours',
  'pomodoro-50-10-timer',
  'beu-exam-preparation-tracker',
  'bihar-engineering-study-planner-timer',
  'btech-semester-exam-study-timer',
  'gate-exam-preparation-timer-online',
  'study-timer-app-for-pc-free',
  'pomodoro-tracker-for-btech-students',
  'online-stopwatch-for-studying',
  'aesthetic-study-timer-online',
  'deep-focus-timer-for-coding',
  'programming-session-focus-timer'
];

// App Blocker Keywords
const appBlockerKeywords = [
  'app-blocker-for-students',
  'study-app-blocker-android',
  'distraction-blocker-students',
  'block-social-media-studying',
  'android-app-blocker-engineering',
  'apna-college-bihar-app',
  'apna-college-bihar-apk-download',
  'focus-app-for-bihar-engineering',
  'block-apps-while-studying',
  'student-productivity-app-android',
  'apna-college-bihar-app-download-2026',
  'free-study-app-engineering-students',
  'beu-student-app-android',
  'best-app-blocker-for-studying-free',
  'how-to-block-instagram-while-studying',
  'distraction-free-study-app-for-android',
  'beu-btech-app-download',
  'apna-college-bihar-official-app',
  'bihar-engineering-notes-app-download',
  'pomodoro-app-blocker-combined',
  'digital-wellbeing-for-students',
  'screen-time-tracker-for-students'
];

// Study Groups / Network Keywords
const studyGroupKeywords = [
  'online-study-group-engineers',
  'beu-student-study-group',
  'engineering-study-network-bihar',
  'study-discussion-group-bihar',
  'online-study-partner-beu',
  'study-community-engineering',
  'group-study-app-students',
  'online-study-group-cse-bihar',
  'study-buddy-engineering-bihar',
  'beu-student-network-online',
  'engineering-peer-learning-group',
  'study-group-chat-engineering',
  'btech-students-whatsapp-group-link-bihar',
  'beu-telegram-group-link-2026',
  'bihar-engineering-students-community',
  'how-to-find-study-partner-for-gate',
  'online-collaboration-tool-for-engineering-projects',
  'beu-cse-students-group',
  'bcece-engineering-discussion-forum',
  'apna-college-bihar-student-community'
];

// Scientific Calculator Keywords
const calculatorKeywords = [
  'scientific-calculator-engineering',
  'matrix-calculator-online',
  'trigonometry-calculator-engineering',
  'engineering-mathematics-calculator',
  'free-scientific-calculator-online',
  'complex-number-calculator-engineering',
  'log-antilog-calculator-engineering',
  'integration-calculator-engineering',
  'beu-engineering-calculator-online',
  'statistical-calculator-engineering',
  'vector-calculator-online-engineering',
  'physics-formula-calculator-engineering',
  'fourier-series-calculator',
  'laplace-transform-calculator',
  'btech-maths-3-calculator',
  'eigen-value-and-eigen-vector-calculator',
  'partial-fraction-calculator-with-steps',
  'differential-equation-solver-for-engineering',
  'unit-converter-for-engineering-students',
  'cgpa-to-percentage-calculator-beu-online'
];

// Personal Manager / Study Planner Keywords
const plannerKeywords = [
  'study-planner-engineering',
  'semester-study-plan-beu',
  'engineering-study-schedule',
  'beu-student-planner',
  'exam-preparation-planner',
  'personal-task-manager-students',
  'study-todo-list-app',
  'exam-countdown-tracker',
  'assignment-tracker-engineering',
  'study-habit-tracker-beu',
  'engineering-goal-tracker',
  'semester-goal-planner-beu',
  'how-to-manage-time-in-engineering',
  'btech-daily-routine-planner',
  'beu-mid-sem-exam-planner',
  'digital-planner-for-btech-students-free',
  'task-management-for-engineering-assignments',
  'study-timetable-maker-online',
  'apna-college-bihar-personal-manager'
];

// Study Resources Keywords
const studyResourceKeywords = [
  'free-beu-study-material',
  'engineering-notes-free-download',
  'beu-youtube-resources',
  'free-engineering-pdf-notes',
  'beu-study-links-collection',
  'bihar-engineering-free-resources',
  'engineering-study-material-links',
  'beu-student-resource-hub',
  'engineering-exam-resources-free',
  'best-youtube-channels-for-btech-1st-year',
  'beu-btech-notes-pdf-download-2026',
  'where-to-download-engineering-books-for-free',
  'beu-pyq-with-solutions-pdf',
  'bihar-engineering-university-study-material',
  'apna-college-bihar-notes-download',
  'beu-organizer-pdf-download-free',
  'btech-cse-study-material-free'
];

// UGEAC / College Predictor Keywords
const ugeacKeywords = [
  'ugeac-2026-college-predictor',
  'ugeac-rank-predictor-2026',
  'ugeac-cutoff-rank-2026',
  'bihar-engineering-college-predictor',
  'bcece-college-predictor-2026',
  'ugeac-seat-allotment-2026',
  'ugeac-choice-filling-guide-2026',
  'ugeac-counselling-process-2026',
  'ugeac-2026-application-form',
  'ugeac-merit-list-2026',
  'ugeac-rank-vs-college-2026',
  'best-engineering-college-bihar-ugeac',
  'mit-muzaffarpur-cutoff-2026',
  'bce-bhagalpur-cutoff-2026',
  'gce-gaya-cutoff-2026',
  'how-to-apply-for-ugeac-2026',
  'ugeac-registration-date-2026',
  'bceceb-ugeac-counselling-dates-2026',
  'documents-required-for-ugeac-counselling-2026',
  'top-10-engineering-colleges-in-bihar-under-ugeac',
  'ugeac-mock-allotment-result-2026',
  'can-i-get-cse-in-mit-muzaffarpur',
  'ugeac-fee-structure-2026',
  'bihar-engineering-admission-through-jee-main-2026'
];

for (const kw of focusTimerKeywords) urls.push(`/feature/focus-timer/${kw}`);
for (const kw of appBlockerKeywords) urls.push(`/feature/focus-timer/${kw}`);
for (const kw of studyGroupKeywords) urls.push(`/feature/study-groups/${kw}`);
for (const kw of calculatorKeywords) urls.push(`/feature/calculator/${kw}`);
for (const kw of plannerKeywords) urls.push(`/feature/personal-manager/${kw}`);
for (const kw of studyResourceKeywords) urls.push(`/feature/study-resources/${kw}`);
for (const kw of ugeacKeywords) urls.push(`/search/${kw}`);

// ── Syllabus SEO Keywords (Maximized) ───────────────────────────────
for (const branch of branches) {
  // General Branch Syllabus
  urls.push(`/search/beu-${branch}-syllabus`);
  urls.push(`/search/beu-btech-${branch}-syllabus`);
  urls.push(`/search/bihar-engineering-${branch}-syllabus`);
  urls.push(`/search/beu-${branch}-syllabus-pdf-download`);
  urls.push(`/search/apna-college-bihar-${branch}-syllabus`);

  // Semester Specific Branch Syllabus
  for (const sem of semesters) {
    urls.push(`/search/beu-${sem}-sem-${branch}-syllabus`);
    urls.push(`/search/beu-btech-${sem}-sem-${branch}-syllabus`);
    urls.push(`/search/bihar-engineering-${sem}-sem-${branch}-syllabus`);
    urls.push(`/search/beu-${sem}-semester-${branch}-syllabus-pdf`);
  }
}

// Global Syllabus Keywords
const globalSyllabusKeywords = [
  'beu-syllabus',
  'beu-btech-syllabus',
  'bihar-engineering-university-syllabus',
  'beu-syllabus-pdf-download',
  'beu-syllabus-2026',
  'beu-new-syllabus-2026',
  'beu-btech-1st-year-syllabus',
  'bcece-engineering-syllabus',
  'aku-to-beu-syllabus-change'
];

for (const kw of globalSyllabusKeywords) {
  urls.push(`/search/${kw}`);
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const url of urls) {
  let changefreq = 'weekly';
  let priority = '0.6';

  if (url === '/') {
    changefreq = 'daily';
    priority = '1.0';
  } else if (url.startsWith('/hub') || url.startsWith('/hackathons') || url.startsWith('/ugeac-predictor')) {
    changefreq = 'daily';
    priority = '0.9';
  } else if (url.startsWith('/college/')) {
    changefreq = 'weekly';
    priority = '0.8';
  } else if (url.startsWith('/subject/') || url.startsWith('/notes/') || url.startsWith('/pyq/') || url.startsWith('/syllabus/')) {
    changefreq = 'monthly';
    priority = '0.7';
  } else if (url.startsWith('/search/')) {
    changefreq = 'monthly';
    priority = '0.4'; // Low priority for programmatic long-tail keywords
  }

  xml += `  <url>
    <loc>${DOMAIN}${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}

xml += `</urlset>`;

const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(filePath, xml, 'utf8');

console.log(`Generated sitemap.xml with ${urls.length} URLs at ${filePath}`);
