/**
 * APNA COLLEGE BIHAR • BRAND FILM SCROLL-DRIVEN EXPERIENCE
 * Built with GSAP 3.12 + ScrollTrigger + HTML5 High-Performance Canvas Engine
 */

(function () {
  'use strict';

  // 1. CONFIGURATION & STATE
  const TOTAL_FRAMES = 239;
  const FRAME_PATH = (index) => `assets/frames/frame_${String(index).padStart(3, '0')}.webp`;
  
  const state = {
    currentFrame: 0,
    loadedFrames: 0,
    images: [],
    canvas: null,
    ctx: null,
    isAudioPlaying: false,
    audioCtx: null,
    oscillator: null,
    gainNode: null
  };

  // 2. CANVAS RESIZING (COVER FIT FOR ALL DEVICES)
  function resizeCanvas() {
    if (!state.canvas || !state.ctx) return;
    const canvas = state.canvas;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    renderFrame(state.currentFrame);
  }

  // 3. FRAME RENDERING WITH SMOOTH OBJECT-FIT: COVER
  function renderFrame(index) {
    if (!state.ctx || !state.canvas) return;
    const img = state.images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvas = state.canvas;
    const ctx = state.ctx;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const cWidth = canvas.width;
    const cHeight = canvas.height;
    const iWidth = img.naturalWidth;
    const iHeight = img.naturalHeight;

    // Calculate aspect ratio for cover fit
    const imgRatio = iWidth / iHeight;
    const canvasRatio = cWidth / cHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = cWidth;
      drawHeight = cWidth / imgRatio;
      offsetX = 0;
      offsetY = (cHeight - drawHeight) / 2;
    } else {
      drawHeight = cHeight;
      drawWidth = cHeight * imgRatio;
      offsetX = (cWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }

  // 4. PROGRESSIVE FRAME PRELOADER
  function preloadFrames(onProgress, onComplete) {
    let loadedCount = 0;
    const priorityBatchSize = 30; // Fast initial interactive render

    // First load priority frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loadedCount++;
        state.loadedFrames = loadedCount;
        const percent = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));
        onProgress(percent);

        if (loadedCount === 1) {
          renderFrame(0);
        }

        if (loadedCount === priorityBatchSize) {
          // Render initial frame and allow scroll trigger to initialize early
          renderFrame(0);
        }

        if (loadedCount === TOTAL_FRAMES) {
          onComplete();
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) onComplete();
      };
      state.images[i] = img;
    }
  }

  // 5. GSAP SCROLLTRIGGER ORCHESTRATION
  function initScrollytelling() {
    gsap.registerPlugin(ScrollTrigger);

    const filmStage = document.getElementById('film-stage');
    if (!filmStage) return;

    const frameObject = { frame: 0 };
    const timecodeEl = document.getElementById('hud-timecode');
    const actBadgeEl = document.getElementById('hud-act-badge');
    const scrollPercentEl = document.getElementById('hud-percent');
    const progressFillEl = document.getElementById('hud-progress-fill');

    const card1 = document.getElementById('card-act-1');
    const card2 = document.getElementById('card-act-2');
    const card3 = document.getElementById('card-act-3');
    const card4 = document.getElementById('card-act-4');

    // Main Canvas Scrub Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: filmStage,
        start: 'top top',
        end: '+=4500', // 4500px scroll range for cinematic pacing
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * (TOTAL_FRAMES - 1)));
          state.currentFrame = targetFrame;
          renderFrame(targetFrame);

          // Update HUD
          const seconds = (progress * 9.96).toFixed(1);
          if (timecodeEl) timecodeEl.textContent = `00:${String(Math.floor(seconds)).padStart(2, '0')}`;
          if (scrollPercentEl) scrollPercentEl.textContent = `${Math.round(progress * 100)}%`;
          if (progressFillEl) progressFillEl.style.width = `${progress * 100}%`;

          // Dynamic Chapter Badges
          if (actBadgeEl) {
            if (progress < 0.23) {
              actBadgeEl.textContent = 'ACT 01 • THE STRUGGLE';
              actBadgeEl.className = 'px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/10 border border-rose-500/30 text-rose-400';
            } else if (progress < 0.52) {
              actBadgeEl.textContent = 'ACT 02 • THE DISCOVERY';
              actBadgeEl.className = 'px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500/10 border border-blue-500/30 text-blue-400';
            } else if (progress < 0.77) {
              actBadgeEl.textContent = 'ACT 03 • CONFIDENCE';
              actBadgeEl.className = 'px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-400';
            } else {
              actBadgeEl.textContent = 'ACT 04 • THE MOVEMENT';
              actBadgeEl.className = 'px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/30 text-cyan-300';
            }
          }

          // Active Card Toggle
          if (card1) card1.classList.toggle('active', progress >= 0.02 && progress < 0.24);
          if (card2) card2.classList.toggle('active', progress >= 0.26 && progress < 0.53);
          if (card3) card3.classList.toggle('active', progress >= 0.55 && progress < 0.78);
          if (card4) card4.classList.toggle('active', progress >= 0.80);
        }
      }
    });

    // Refresh after DOM layout ready
    ScrollTrigger.refresh();
  }

  // 6. 38 GOVERNMENT ENGINEERING COLLEGES DIRECTORY DATA
  const collegesList = [
    { name: "Muzaffarpur Institute of Technology", short: "MIT Muzaffarpur", dist: "Muzaffarpur", est: 1954, zone: "Tirhut" },
    { name: "Bhagalpur College of Engineering", short: "BCE Bhagalpur", dist: "Bhagalpur", est: 1960, zone: "Bhagalpur" },
    { name: "Gaya College of Engineering", short: "GCE Gaya", dist: "Gaya", est: 2008, zone: "Magadh" },
    { name: "Nalanda College of Engineering", short: "NCE Chandi", dist: "Nalanda", est: 2008, zone: "Patna" },
    { name: "Darbhanga College of Engineering", short: "DCE Darbhanga", dist: "Darbhanga", est: 2008, zone: "Darbhanga" },
    { name: "Motihari College of Engineering", short: "MCE Motihari", dist: "East Champaran", est: 2008, zone: "Tirhut" },
    { name: "LNJPIT Chapra", short: "LNJPIT Chapra", dist: "Saran", est: 2012, zone: "Saran" },
    { name: "Bakhtiyarpur College of Engineering", short: "BCE Bakhtiyarpur", dist: "Patna", est: 2016, zone: "Patna" },
    { name: "Sitamarhi Institute of Technology", short: "SIT Sitamarhi", dist: "Sitamarhi", est: 2016, zone: "Tirhut" },
    { name: "RRSDCE Begusarai", short: "RRSDCE Begusarai", dist: "Begusarai", est: 2016, zone: "Munger" },
    { name: "Purnea College of Engineering", short: "PCE Purnea", dist: "Purnea", est: 2017, zone: "Purnea" },
    { name: "Katihar Engineering College", short: "KEC Katihar", dist: "Katihar", est: 2016, zone: "Purnea" },
    { name: "Saharsa College of Engineering", short: "SCE Saharsa", dist: "Saharsa", est: 2017, zone: "Kosi" },
    { name: "Sershah Engineering College", short: "SPCE Sasaram", dist: "Rohtas", est: 2016, zone: "Patna" },
    { name: "BP Mandal College of Engineering", short: "BPMCE Madhepura", dist: "Madhepura", est: 2016, zone: "Kosi" },
    { name: "Government Engineering College Vaishali", short: "GEC Vaishali", dist: "Vaishali", est: 2018, zone: "Tirhut" },
    { name: "Government Engineering College Jamui", short: "GEC Jamui", dist: "Jamui", est: 2018, zone: "Munger" },
    { name: "Government Engineering College Banka", short: "GEC Banka", dist: "Banka", est: 2018, zone: "Bhagalpur" },
    { name: "Government Engineering College Nawada", short: "GEC Nawada", dist: "Nawada", est: 2019, zone: "Magadh" },
    { name: "Government Engineering College Kishanganj", short: "GEC Kishanganj", dist: "Kishanganj", est: 2019, zone: "Purnea" },
    { name: "Government Engineering College Arwal", short: "GEC Arwal", dist: "Arwal", est: 2019, zone: "Magadh" },
    { name: "Government Engineering College Aurangabad", short: "GEC Aurangabad", dist: "Aurangabad", est: 2019, zone: "Magadh" },
    { name: "Government Engineering College Buxar", short: "GEC Buxar", dist: "Buxar", est: 2019, zone: "Patna" },
    { name: "Government Engineering College Bhojpur", short: "GEC Bhojpur", dist: "Bhojpur", est: 2019, zone: "Patna" },
    { name: "Government Engineering College Sheikhpura", short: "GEC Sheikhpura", dist: "Sheikhpura", est: 2019, zone: "Munger" },
    { name: "Government Engineering College Munger", short: "GEC Munger", dist: "Munger", est: 2019, zone: "Munger" },
    { name: "Government Engineering College Lakhisarai", short: "GEC Lakhisarai", dist: "Lakhisarai", est: 2019, zone: "Munger" },
    { name: "Government Engineering College Khagaria", short: "GEC Khagaria", dist: "Khagaria", est: 2019, zone: "Munger" },
    { name: "Government Engineering College Samastipur", short: "GEC Samastipur", dist: "Samastipur", est: 2019, zone: "Darbhanga" },
    { name: "Government Engineering College Gopalganj", short: "GEC Gopalganj", dist: "Gopalganj", est: 2019, zone: "Saran" },
    { name: "Government Engineering College Madhubani", short: "GEC Madhubani", dist: "Madhubani", est: 2019, zone: "Darbhanga" },
    { name: "Government Engineering College Siwan", short: "GEC Siwan", dist: "Siwan", est: 2019, zone: "Saran" },
    { name: "Government Engineering College Jehanabad", short: "GEC Jehanabad", dist: "Jehanabad", est: 2019, zone: "Magadh" },
    { name: "Government Engineering College Araria", short: "GEC Araria", dist: "Araria", est: 2019, zone: "Purnea" },
    { name: "Government Engineering College West Champaran", short: "GEC Bettiah", dist: "West Champaran", est: 2019, zone: "Tirhut" },
    { name: "Government Engineering College Kaimur", short: "GEC Kaimur", dist: "Kaimur", est: 2019, zone: "Patna" },
    { name: "Government Engineering College Sheohar", short: "GEC Sheohar", dist: "Sheohar", est: 2019, zone: "Tirhut" },
    { name: "Women's Institute of Technology", short: "WIT Darbhanga", dist: "Darbhanga", est: 2005, zone: "Darbhanga" }
  ];

  function renderColleges(filterText = '', filterZone = 'ALL') {
    const grid = document.getElementById('colleges-grid');
    const countEl = document.getElementById('colleges-count');
    if (!grid) return;

    const filtered = collegesList.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(filterText.toLowerCase()) ||
                            c.short.toLowerCase().includes(filterText.toLowerCase()) ||
                            c.dist.toLowerCase().includes(filterText.toLowerCase());
      const matchesZone = filterZone === 'ALL' || c.zone === filterZone;
      return matchesSearch && matchesZone;
    });

    if (countEl) countEl.textContent = `${filtered.length} of 38 Colleges`;

    grid.innerHTML = filtered.map(c => `
      <div class="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-300 group">
        <div class="flex items-start justify-between mb-3">
          <span class="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            ${c.zone} Zone
          </span>
          <span class="text-[11px] font-mono text-slate-500">Est. ${c.est}</span>
        </div>
        <h4 class="text-white font-bold text-base mb-1 group-hover:text-cyan-400 transition-colors">${c.short}</h4>
        <p class="text-xs text-slate-400 font-medium mb-3">${c.name}</p>
        <div class="flex items-center justify-between pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
          <span class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${c.dist}, Bihar
          </span>
          <a href="https://www.apnacollegebihar.online/colleges" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-white font-bold inline-flex items-center gap-1">
            Notes & PYQ &rarr;
          </a>
        </div>
      </div>
    `).join('');
  }

  // 7. ATTENDANCE SAFEGUARD SIMULATOR
  function initAttendanceSimulator() {
    const totalSlider = document.getElementById('att-total');
    const presentSlider = document.getElementById('att-present');
    const totalVal = document.getElementById('att-total-val');
    const presentVal = document.getElementById('att-present-val');
    const percentDisplay = document.getElementById('att-percent-display');
    const statusBadge = document.getElementById('att-status-badge');
    const adviceText = document.getElementById('att-advice-text');

    if (!totalSlider || !presentSlider) return;

    function update() {
      let total = parseInt(totalSlider.value, 10);
      let present = parseInt(presentSlider.value, 10);

      // Present cannot exceed total
      if (present > total) {
        present = total;
        presentSlider.value = total;
      }
      presentSlider.max = total;

      totalVal.textContent = total;
      presentVal.textContent = present;

      const pct = total === 0 ? 0 : Math.round((present / total) * 100);
      percentDisplay.textContent = `${pct}%`;

      if (pct >= 75) {
        // Safe Zone
        const maxBunk = Math.floor((present - 0.75 * total) / 0.75);
        percentDisplay.className = 'text-4xl md:text-5xl font-black text-emerald-400 tracking-tight font-mono';
        statusBadge.className = 'px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 inline-flex items-center gap-1.5';
        statusBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> SAFE ZONE (ELIGIBLE FOR EXAM)';
        adviceText.innerHTML = `Aapka attendance 75% se upar hai! Aap abhi bhi <strong>${Math.max(0, maxBunk)} aur classes</strong> safely skip kar sakte hain bina BEU exam se debar hue.`;
      } else {
        // Danger Zone
        const needed = Math.ceil((0.75 * total - present) / (1 - 0.75));
        percentDisplay.className = 'text-4xl md:text-5xl font-black text-rose-500 tracking-tight font-mono';
        statusBadge.className = 'px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/10 border border-rose-500/30 text-rose-400 inline-flex items-center gap-1.5';
        statusBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span> CRITICAL: SHORTAGE OF ATTENDANCE';
        adviceText.innerHTML = `Danger! BEU 75% rule ke anusaar aap exam se debar ho sakte hain. Agli <strong>${needed} classes lagataar present</strong> hona padega 75% touch karne ke liye!`;
      }
    }

    totalSlider.addEventListener('input', update);
    presentSlider.addEventListener('input', update);
    update();
  }

  // 8. SYNTHESIZED AMBIENT AUDIO TOGGLE
  function initAmbientAudio() {
    const audioBtn = document.getElementById('btn-audio-toggle');
    const audioText = document.getElementById('audio-status-text');
    const audioBars = document.getElementById('audio-bars');
    if (!audioBtn) return;

    audioBtn.addEventListener('click', () => {
      if (!state.isAudioPlaying) {
        // Start synthesized ambient study drone
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (!state.audioCtx) state.audioCtx = new AudioContext();
          if (state.audioCtx.state === 'suspended') state.audioCtx.resume();

          const ctx = state.audioCtx;
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          const gain = ctx.createGain();

          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(110, ctx.currentTime); // A2 drone
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(164.81, ctx.currentTime); // E3 fifth

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(320, ctx.currentTime);

          gain.gain.setValueAtTime(0.01, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 2);

          osc1.connect(filter);
          osc2.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc1.start();
          osc2.start();

          state.oscillator = [osc1, osc2];
          state.gainNode = gain;
          state.isAudioPlaying = true;

          if (audioText) audioText.textContent = 'Audio: On';
          if (audioBars) audioBars.classList.remove('hidden');
          audioBtn.classList.add('border-cyan-500/50', 'bg-cyan-500/10');
        } catch (e) {
          console.warn('Audio context init error:', e);
        }
      } else {
        // Stop audio
        if (state.gainNode && state.audioCtx) {
          state.gainNode.gain.exponentialRampToValueAtTime(0.0001, state.audioCtx.currentTime + 0.5);
          setTimeout(() => {
            if (state.oscillator) {
              state.oscillator.forEach(o => o.stop());
              state.oscillator = null;
            }
          }, 500);
        }
        state.isAudioPlaying = false;
        if (audioText) audioText.textContent = 'Audio: Off';
        if (audioBars) audioBars.classList.add('hidden');
        audioBtn.classList.remove('border-cyan-500/50', 'bg-cyan-500/10');
      }
    });
  }

  // 9. VIDEO MODAL CONTROLS
  function initVideoModal() {
    const openBtns = document.querySelectorAll('.btn-watch-film');
    const modal = document.getElementById('film-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const video = document.getElementById('modal-video');

    if (!modal || !video) return;

    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        video.currentTime = 0;
        video.play().catch(() => {});
      });
    });

    const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      video.pause();
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
  }

  // 10. BOOTSTRAP ON DOM READY
  document.addEventListener('DOMContentLoaded', () => {
    state.canvas = document.getElementById('film-canvas');
    if (state.canvas) {
      state.ctx = state.canvas.getContext('2d', { alpha: false });
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const preloader = document.getElementById('preloader');
    const preloaderPercent = document.getElementById('preloader-percent');
    const preloaderBar = document.getElementById('preloader-bar');

    preloadFrames(
      (percent) => {
        if (preloaderPercent) preloaderPercent.textContent = `${percent}%`;
        if (preloaderBar) preloaderBar.style.width = `${percent}%`;
      },
      () => {
        // Preload complete
        if (preloader) {
          preloader.style.opacity = '0';
          setTimeout(() => preloader.style.display = 'none', 500);
        }
        initScrollytelling();
      }
    );

    // Initial fallback if preloader finishes fast
    setTimeout(() => {
      if (preloader && preloader.style.display !== 'none') {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
        initScrollytelling();
      }
    }, 2500);

    initAttendanceSimulator();
    renderColleges();
    initAmbientAudio();
    initVideoModal();

    // College Search & Filter listeners
    const searchInput = document.getElementById('college-search-input');
    const zonePills = document.querySelectorAll('.zone-filter-pill');
    let currentZone = 'ALL';

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderColleges(e.target.value, currentZone);
      });
    }

    zonePills.forEach(pill => {
      pill.addEventListener('click', () => {
        zonePills.forEach(p => p.classList.remove('active', 'bg-blue-600', 'text-white'));
        zonePills.forEach(p => p.classList.add('bg-slate-800/80', 'text-slate-400'));
        pill.classList.add('active', 'bg-blue-600', 'text-white');
        pill.classList.remove('bg-slate-800/80', 'text-slate-400');
        currentZone = pill.getAttribute('data-zone') || 'ALL';
        renderColleges(searchInput ? searchInput.value : '', currentZone);
      });
    });

    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

})();
