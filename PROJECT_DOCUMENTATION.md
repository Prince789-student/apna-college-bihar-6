# Apna College Bihar — System Architecture & Technical Documentation
**Project**: Apna College Bihar (ACB)  
**Root Path**: `c:\Users\princ\OneDrive\Pictures\Desktop\my poject\Apna College Bihar`  
**Classification**: Full-Stack EdTech & Automated Alert Distribution Platform  
**Target Audience**: Students, Faculty, and Aspirants of Bihar Engineering University (BEU) and 38 Government Engineering Colleges  
**Author / Maintainer**: Er. Prince Kumar / Engineering Operations Team  

---

## 1. SYSTEM ARCHITECTURE & HIGH-LEVEL OVERVIEW

Apna College Bihar is engineered to solve the acute information asymmetry and resource scarcity facing engineering scholars across Bihar. The platform combines real-time university circular scraping, multimodal AI document synthesis, direct WhatsApp group broadcasting, a mobile-first notes and PYQ study engine, and a college cutoff predictor.

### Architectural Tiers:
1. **Frontend Presentation Layer (`client/`)**: Single-Page Application (SPA) built with React 18 and Vite, augmented by pre-rendering (SSG) for 60+ static pages. Deployed to Vercel/Netlify and bundled natively via Capacitor for Android.
2. **Backend Services & Cron Daemon (`server/`)**: Express REST API combined with Puppeteer scrapers and background cron schedules. Deployed to Render with auto-reconnect WhatsApp headless daemon.
3. **Multimodal AI Processing Pipeline**: Leverages Google Gemini (`gemini-3.8-flash` / `gemini-2.5-flash`) to parse unformatted university circular PDFs and extract actionable student alerts.
4. **Data Persistence Tier**: Cloud Firestore with multi-tab offline cache persistence for student data and notes catalog; optional MongoDB for background user tasks; local JSON stores for deduplication state.
5. **Desktop Client (`desktop/`)**: Electron 33 wrapper featuring a distraction focus blocker daemon to enhance student concentration during exam prep.

---

## 2. CORE FUNCTIONAL MODULES

### Module 1: BEU Automated Notice Scraper & AI Broadcaster
- **Source**: `server/cron/beuAutoBroadcaster.js`
- **Scraper Pipeline**:
  - Regularly polls the BEU portal endpoint (`https://beu-bih.ac.in/backend/v1/notice/get-notice-board`) using Axios with custom TLS and user-agent bypasses.
  - Headless Puppeteer (`server/services/beuScraper.js`) handles JavaScript-rendered pages and circular attachments.
- **Multimodal AI Synthesis (`server/services/beuAiService.js`)**:
  - Automatically downloads notice PDFs into memory.
  - Passes raw base64 data to Google Gemini models.
  - Prompts Gemini with structured extraction guidelines: Extract Notice Title, Target Batch/Semester, Target Branches, Important Deadlines (Exam form dates, scrutiny dates), and Fee structures.
  - Formats output into high-engagement WhatsApp broadcasts with emoji headers, bulleted key points, and official download links.
- **WhatsApp Bot Integration (`server/services/whatsappBotService.js`)**:
  - Utilizes `@wppconnect-team/wppconnect` to run a headless Chromium WhatsApp Web session.
  - Preserves authentication session tokens under `server/.wpp_session/`.
  - Dispatches notices automatically to registered student community channels.

### Module 2: Academic Repository (Notes, PYQs, Syllabus)
- **Source**: `client/src/pages/Notes.jsx`, `client/src/pages/PYQ.jsx`, `client/src/pages/BeuSyllabus.jsx`
- **Data Model**:
  - Hierarchical Firestore schema organized by Branch (`CSE`, `CIVIL`, `ME`, `EE`, `ECE`), Semester (`1` to `8`), Subject, and Module.
  - Includes direct Google Drive, Firebase Storage, and Cloudflare CDN download mirrors.
  - Features an offline cache mechanism (`client/src/utils/dataCache.js`) so that previously viewed syllabus and note outlines remain accessible without an active internet connection.

### Module 3: UGEAC / BCECE College Predictor Engine
- **Source**: `client/src/pages/UgeacPredictor.jsx` & `counselling-system/`
- **Algorithm**:
  - Utilizes verified historical opening and closing rank matrices from 2023, 2024, and 2025 BCECEB counselling rounds (`real_cutoffs.js`).
  - Inputs: Category (UR, BC, EBC, SC, ST, EWS, RCG, DQ), Sub-category, and JEE Main CRL Rank or BCECE Rank.
  - Outputs: Real-time probability ratings (High, Moderate, Reach) for all 38 government colleges and available engineering branches.

### Module 4: Free Mentorship & Student CRM
- **Source**: `client/src/pages/FreeMentorship.jsx` & `acb mentorship/`
- **Capabilities**:
  - Connects incoming 1st-year students with senior GEC scholars.
  - Dynamic profile registration prompts collect verified scholar details (College, District, Branch, Admission Year, WhatsApp number).
  - Python scripts (`acb mentorship/create_contacts.py`) parse batch registrations into standard VCF contact files for bulk phonebook imports.

### Module 5: Desktop Application with Study Focus Blocker
- **Source**: `desktop/main.js`
- **Features**:
  - Native Windows NSIS installer and portable executables.
  - Integrated Study Timer that, when activated, aggressively monitors running Windows processes and terminates gaming and social messaging applications (Discord, Steam, WhatsApp Desktop, League of Legends, Valorant).
  - Background tray persistence, native Windows notifications, and hardware acceleration switches.

---

## 3. API ENDPOINTS SPECIFICATION

All endpoints are hosted on the Express server (`server/server.js`) on port 5000:

### Public & Student Endpoints
| Method | Route | Description | Rate Limit |
| :--- | :--- | :--- | :--- |
| `GET` | `/_health` | Server uptime and health verification | Public |
| `GET` | `/api/download-apk` | Direct download stream for latest Android APK | Public |
| `GET` | `/api/download-windows` | Direct download stream for Windows Desktop zip | Public |
| `GET` | `/api/public/home-stats` | Public counters (notes count, student community size) | Public |
| `GET` | `/api/beu/notices` | Fetches scraped university notices with pagination | Public |
| `GET` | `/api/documents` | Queries approved study notes and PYQ documents | Public |
| `GET` | `/api/shortlinks/:shortId`| Resolves branded shortlinks (`/p/:shortId`) | Public |
| `POST` | `/api/auth/register` | New student account registration | Auth Limiter |
| `POST` | `/api/auth/login` | Student login returning JWT bearer token | Auth Limiter |

### Administrative Endpoints (Requires `protect` + `adminOnly`)
| Method | Route | Description | Authorization |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/admin/sync-beu` | Manually triggers immediate BEU notice scraping & broadcast | Bearer JWT (Admin) |
| `GET` | `/api/admin/stats` | Aggregated telemetry, user growth & active sessions | Bearer JWT (Admin) |
| `GET` | `/api/admin/users` | Paginated student registry with college & phone metadata | Bearer JWT (Admin) |
| `POST` | `/api/admin/sync-users` | Batch syncs user profiles from Firestore to MongoDB | Bearer JWT (Admin) |

---

## 4. SCHEDULED CRON JOBS & AUTOMATION

Defined in `server/cron/`:
1. **BEU Notice Crawler (`beuAutoBroadcaster.js`)**:
   - Schedule: Runs every hour (`0 * * * *`).
   - Action: Scrapes notice board, compares checksum against `data/beu_notices.json`, triggers Gemini AI caption generation, and dispatches to WhatsApp.
2. **Daily Student Study Reminder (`dailyNotifier.js`)**:
   - Schedule: Runs daily at 07:00 AM IST (`0 7 * * *`).
   - Action: Dispatches study goals and upcoming university exam schedules.
3. **Collegiate Hackathon Crawler (`hackathonFetcher.js`)**:
   - Schedule: Runs daily at 02:00 AM IST (`0 2 * * *`).
   - Action: Crawls national hackathon platforms (Unstop, Devfolio) for hackathons open to Bihar students.

---

## 5. ENVIRONMENT CONFIGURATION REFERENCE

Copy `server/.env.example` to `server/.env` and populate the required parameters:

```env
# Network
PORT=5000
NODE_ENV=production
APP_URL=https://apnacollegebihar.online

# Security
JWT_SECRET=your_32_char_random_jwt_secret
JWT_EXPIRES_IN=30d

# Database
MONGO_URI=mongodb+srv://...

# AI Services
GEMINI_API_KEY=AIzaSy...

# WhatsApp Automation
WHATSAPP_CHANNEL_URL=https://whatsapp.com/channel/...
AUTO_DISPATCH_WHATSAPP=true
AUTO_DISPATCH_COLLEGE_NOTICES=false
ENABLE_WHATSAPP_BOT=true

# Firebase Admin (Base64 string or service account JSON)
# FIREBASE_SERVICE_ACCOUNT=ey...
```

---

## 6. DEPLOYMENT RUNBOOK

### Frontend (Vercel / Netlify)
1. Build script: `npm --prefix client run build`
2. Output directory: `client/dist`
3. Environment variables required in dashboard: None (Firebase client keys are embedded).
4. `vercel.json` provides URL rewrites and `cleanUrls: true` for flat HTML SSG support.

### Backend (Render)
1. Build command: `npm install --prefix server`
2. Start command: `node server/server.js`
3. Build script for Puppeteer dependencies: `bash server/render-build.sh` (installs required Linux Chromium shared libraries: `libnss3`, `libatk-bridge2.0-0`, `libx11-xcb1`).

### Desktop Application Packaging
1. Windows portable: `npm run desktop:pack`
2. Windows NSIS installer: `npm run build:installer --prefix desktop`
3. Artifacts generated in: `desktop/dist/`
