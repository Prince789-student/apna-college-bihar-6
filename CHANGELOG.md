# Changelog & Version History
All notable changes to the Apna College Bihar project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.3] - 2026-11-04

### Fixed
- **Topic Numbering Stripping & Embedded Multi-Topic Separation (`BeuSyllabus.jsx`)**:
  - **Eliminated Dangling Leading Numbers**: Resolved regex alternation precedence bug in `splitIntoTopics` and `parseSyllabusIntoSubjects` where `/(\d+\.|\d+\.\d+)/` matched `1.` first and left dangling numbers (e.g. `1 Elementary transformations...`, `4 Similarity of Matrices...`). Reordered alternation to strictly match multi-part section numbers first (`\d+\.\d+(?:\.\d+)?|\d+\.|\([a-z0-9]+\)|[a-z0-9]\)|\b\d+\b\s+`) so all leading chapter numbering is completely and cleanly stripped.
  - **Pre-Splitting Embedded Sub-Topics**: Solved unseparated run-on topics (e.g. `"Rn space 1.2 Consistency... 1.3 Eigenvalues..."`) by inserting topic delimiters before embedded section markers (`/(?<=\S)\s+(\d+\.\d+(?:\.\d+)?)\b/g`), Roman numerals, and lettered lists.
  - **Protected Academic & Technical Nomenclature**: Whitelisted technical terms such as `0/1 Knapsack`, `32-bit`, `16-bit`, `64-bit`, `8085`, `8086`, `1's and 2's complement` from false-positive number trimming.
  - **Balanced Parenthesis OCR Glitch Handling**: Resolved OCR flaws in unit text where unclosed parentheses prevented sentence splitting across subsequent section numbers; auto-balanced dangling parentheses before section boundaries and clamped nesting depth (`depth >= 0`).
  - **Client Cache Bump**: Updated client localStorage cache key to `beu_syllabus_cache_v4` and rebuilt production bundles to ensure live and local clients immediately load the clean, refined topic lists.

---

## [1.2.2] - 2026-11-04

### Fixed
- **Critical Syllabus Breakage & Zero-Topic Root Cause (`BeuSyllabus.jsx`)**:
  - **Resolved Newline Stripping in Regex**: Fixed `/[:\-]?\s*\d+\s*(?:hrs?|hours?)\b/gi` in `cleanOcrGlitch` where `\s*` consumed `\n` characters immediately preceding hour notations (e.g. `\n8 hrs`), accidentally welding unit headers and entire 500-character topic paragraphs into a single line (`### 📌 Unit 1: Simple Stresses and Strains Concept of stress...`), causing the parser to treat the whole paragraph as the unit title and producing 0 topics.
  - **Preserved Line-Breaks**: Restricted hour notation stripping to horizontal spaces (`[ \t]+`) and line-start boundaries (`/^[ \t]*\d+[ \t]*(?:hrs?|hours?)\b[ \t]*/gmi`), ensuring clean unit titles and distinct topic lines.
  - **Protected Academic Titles**: Added `St.`, `Dr.`, `Prof.`, and `Lt.` to abbreviation protection list in `splitIntoTopics` to prevent fracturing phrases like `"St. Venant's principle"`.
- **Re-engineered BEU Multi-Column PDF Extraction (`acb project/beu syllabus`)**:
  - **1st Sem New Scheme (2026-2030 Batch)**: Rebuilt extraction for `Group-A`, `Group-B`, and `Group-C` using spatial block analysis. Filtered out interleaved `Mapped CO(s)` and `TSO` columns, isolating Column 3 (`Body of Knowledge` at `x0 >= 270`) to extract all 10 core subjects with their authentic 5-unit curricula.
  - **3rd & 4th Semester Curricula**: Reparsed all 14 branch syllabi (Civil, CSE, ECE, EE, EEE, Mech, CSE-IoT, CSE-IoT/Cyber, Civil-CA), extracting authentic unit titles and preventing generic fallback to `Unit 1` or `.`.
- **Automated Public JSON Synchronization & Cache Busting**:
  - **`build-sync.js` Pipeline**: Added automatic file copy of `client/src/data/syllabusData.json` directly to `client/public/data/syllabus.json` and `server/public/data/syllabus.json` during builds, eliminating stale cached public API responses.
  - **Cache Version Bump**: Incremented client localStorage cache key from `beu_syllabus_cache_v2` to `beu_syllabus_cache_v3` so returning visitors immediately fetch the clean, repaired dataset.
  - **Resilient Fallback**: Added graceful branch fallback in `BeuSyllabus.jsx` (e.g. specialized branches falling back to core CSE/Civil) when navigating across semesters.

---

## [1.2.1] - 2026-11-01

### Added
- **BEU B.Tech Official Syllabus Digitization**:
  - Ingested and structured 17 official Bihar Engineering University (BEU) syllabus PDFs from `acb project/beu syllabus` into `client/src/data/syllabusData.json`.
  - Expanded and synchronized 41 complete branch/semester curricula covering:
    - **1st Sem New Scheme**: Group A (EE/EEE/Mech), Group B (Civil), and Group C (CSE/ECE).
    - **3rd Sem (New Syllabus)**: Civil, CSE, ECE, EE, EEE, Mechanical, CSE (IoT & Cyber Security).
    - **4th Sem (New Syllabus)**: CSE (COA, FLAT, DAA, DBMS, ETC, CN), Civil, EE, EEE, Mechanical, Civil with Computer Application.
  - Corrected legacy 4th Sem CSE curriculum mismatch (replaced legacy OS/DM placeholders with official 2026 BEU course matrix).

### Fixed
- **Topic-Wise Excessive Fragmentation & Breakage (`BeuSyllabus.jsx`)**:
  - **Eliminated Indiscriminate Comma Splitting**: Replaced aggressive comma splitting that broke single concepts into fragmented single-word cards (e.g. `"AND"`, `"OR"`, `"sludge"`, `"and scale formation"`).
  - **Abbreviation Protection**: Preserved multi-word academic phrases and abbreviations (`i.e.`, `e.g.`, `etc.`, `vs.`, `Fig.`, `IC#`, `p.f.`, `R.M.S.`, `d.c.`, `a.c.`) to prevent premature topic splitting.
  - **OCR Glitch Normalization**: Automated cleanup of PDF OCR artifact glitches (`ra diations` → `radiations`, `additi on` → `addition`, `pro cess` → `process`, `one?s` → `1's`, `D?Alembert` → `D'Alembert`, `K?map` → `K-map`, `lCs` → `ICs`).
  - **Unit & Module Recognition**: Added parser support for `**Module \d+:`, `UNIT \d+`, and Practical Experiment sections (`### 📌 Practical Experiments`) ensuring lab experiments (`#### 1. ...`) parse into dedicated, searchable topic items.
  - **Grammar & Leading Conjunction Strip**: Sanitized topic tokens to strip dangling conjunctions (`and `, `or `, `as well as `), bullets, numbers, and credit/hour notations.
- **Production Build & Asset Synchronization**:
  - Verified Vite production build (`✓ 2026 modules transformed`), SSG generation of 93 pages, and multi-tier distribution sync across client, server, and Capacitor mobile assets.

---

## [1.2.0] - 2026-11-01

### Added
- **Permanent AI Governance & Editable User Task Area (`AGENTS.md`)**:
  - Expanded `AGENTS.md` with Section 2 containing the editable **User Task Assignment template**, active user instructions, 9-step task execution protocol, and task execution modes A through E.
  - Incorporated honest reporting guidelines and pre-emit quality gates.
- **Living Project Health Matrix (`PROJECT_STATUS.md`)**:
  - Created central status dashboard tracking sub-system operational states, known vulnerabilities, verified bug fixes, and prioritized roadmap.
- **Deep Multi-Platform Audits**:
  - **Desktop (`desktop/`)**: Evaluated `contextIsolation`, `nodeIntegration`, and identified hardcoded admin roles and renderer code injection.
  - **Android (`client/android/`)**: Evaluated Capacitor configuration, device admin receivers, usage statistics permissions, and AdMob test ID alignment.
  - **Counselling System (`counselling-system/`)**: Analyzed cutoff algorithm and identified dataset divergence between counselling and client portals.
  - **Backend Security**: Discovered critical header-based auth bypass in `authMiddleware.js` (SEC-02) and OTP hash exposure in `authRoutes.js` (SEC-04).

---

## [1.1.0] - 2026-11-01

### Added
- **Permanent AI Instruction System (`AGENTS.md`)**:
  - Established Rules 1 through 10 governing all future AI interactions, agentic coding tasks, and preventing scope creep.
  - Integrated Hallmark Anti-AI-Slop and UI/UX design token constraints into repository directives.
- **Master Project Documentation**:
  - `AUDIT_REPORT.md`: Comprehensive technical audit covering Frontend, Backend, Database, Security, Performance, and SEO.
  - `PROJECT_STRUCTURE.md`: Recursive repository file tree, module dependency relationships, and data flow architecture.
  - `PROJECT_DOCUMENTATION.md`: System specifications, API endpoints, scheduled cron jobs, and multi-tier deployment runbooks.
- **Vector Grid Background Asset**:
  - Deployed `grid.svg` in `client/public/grid.svg` and `server/public/grid.svg` to eliminate 404 network fetches and Vite build warnings across `Blog.jsx`, `CollegeDirectory.jsx`, and `CollegeProfile.jsx`.
- **Root-Level SEO File Sync**:
  - Updated `client/generate-sitemap.js` to automatically synchronize the 93-URL canonical `sitemap.xml` directly to the project root directory during production builds.
  - Placed `robots.txt` in the repository root alongside client and server distributions.

### Fixed
- **Runtime Crash on Viewport Resize (`client/src/App.jsx`)**:
  - Fixed an uncaught `ReferenceError: setIsMobile is not defined` triggered whenever a mobile device was rotated or a desktop window was resized.
  - Declared `const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);`.
- **Undeclared Identifier in Crash Error Boundary (`client/src/App.jsx`)**:
  - Fixed line 792 where the error fallback button referenced `setLoading(true)`, which was undeclared in the component scope.
  - Updated action to `window.location.reload()` to properly restore application state.
- **Vite Asset Resolution Warnings**:
  - Resolved build-time warning `/grid.svg referenced in client/src/index.css didn't resolve at build time`. Client build now compiles with zero warnings.

### Security
- **Firestore Rules Audit**:
  - Conducted vulnerability assessment on `firestore.rules`.
  - Identified overly permissive `allow read, write: if true;` on `/MentorshipMessages/` and public read access on `/users/{userId}`.
  - Formulated a hardened security rules policy documented in `AUDIT_REPORT.md` for zero-downtime deployment.

### Verified
- Executed full production build: `npm --prefix client run build`.
- 2,026 modules transformed cleanly in 23.06s.
- Verified generation of 22 static blog pages, 38 college profile pages, and root homepage semantic enrichment.
- Verified 93 valid public URLs in `sitemap.xml` with zero private admin or authenticated paths.

---

## [1.0.0] - 2026-10-30
### Initial Baseline
- React 18 frontend with Vite and Tailwind CSS.
- Express backend with BEU notice scraper and WhatsApp auto-broadcaster.
- Electron desktop build pipeline.
- Capacitor 8 Android integration.
