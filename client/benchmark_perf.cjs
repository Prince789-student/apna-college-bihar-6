const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const puppeteer = require('puppeteer');

const distDir = path.join(__dirname, 'dist');
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = (req.url || '/').split('?')[0];
      if (urlPath.startsWith('/api/')) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        if (urlPath === '/api/public/home-stats') {
          return res.end(JSON.stringify({ success: true, stats: { notes: 296, pyqs: 340, users: 166, groups: 24 }, donors: [], notices: [] }));
        }
        if (urlPath === '/api/beu/notices') {
          return res.end(JSON.stringify({ success: true, notices: [{ id: '1', title: 'BEU Sample Notice', date: '2026-11-01', link: 'https://beu-bih.ac.in' }] }));
        }
        return res.end(JSON.stringify({ success: true }));
      }
      let filePath = path.join(distDir, urlPath === '/' ? 'index.html' : urlPath);
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        if (fs.existsSync(filePath + '.html')) {
          filePath = filePath + '.html';
        } else {
          filePath = path.join(distDir, 'index.html');
        }
      }
      const ext = path.extname(filePath).toLowerCase();
      const ct = MIME[ext] || 'application/octet-stream';
      const ae = req.headers['accept-encoding'] || '';
      if (['.html', '.js', '.css', '.json', '.svg'].includes(ext) && ae.includes('gzip')) {
        res.writeHead(200, { 'Content-Type': ct, 'Content-Encoding': 'gzip' });
        fs.createReadStream(filePath).pipe(zlib.createGzip()).pipe(res);
      } else {
        res.writeHead(200, { 'Content-Type': ct });
        fs.createReadStream(filePath).pipe(res);
      }
    });
    server.listen(0, '127.0.0.1', () => {
      resolve({ server, port: server.address().port });
    });
  });
}

async function benchRoute(browser, url, opts) {
  const page = await browser.newPage();
  await page.setViewport(opts.viewport);
  if (opts.mobile) {
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1');
  }
  const cdp = await page.target().createCDPSession();
  await cdp.send('Network.enable');
  await cdp.send('Performance.enable');
  if (opts.cpuThrottle) {
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: opts.cpuThrottle });
  }

  let totalEncodedBytes = 0;
  let totalDecodedBytes = 0;
  let reqCount = 0;
  const byType = {};

  cdp.on('Network.responseReceived', (e) => {
    // skip external tracking to measure app's own requests cleanly OR count all
    if (!e.response.url.startsWith('http://127.0.0.1')) return;
    reqCount++;
    const t = e.type || 'Other';
    byType[t] = byType[t] || { count: 0, encodedKB: 0 };
    byType[t].count++;
  });
  cdp.on('Network.loadingFinished', (e) => {
    totalEncodedBytes += e.encodedDataLength || 0;
  });

  // Block external third-party hosts (fonts/ads/gtag/firestore) OR let offline fast-fail so benchmark measures deterministic app speed cleanly?
  // Let's abort third-party ads/gtag so local timing isn't skewed by external internet jitter, keep fonts or stub? Better: track local app requests vs external!
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const u = req.url();
    if (u.startsWith('http://127.0.0.1')) {
      req.continue();
    } else {
      req.abort();
    }
  });

  await page.evaluateOnNewDocument(() => {
    window.__perf = { fcp: null, lcp: null, longTasks: [], cls: 0 };
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') window.__perf.fcp = entry.startTime;
      }
    }).observe({ type: 'paint', buffered: true });
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      if (entries.length) window.__perf.lcp = entries[entries.length - 1].startTime;
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          window.__perf.longTasks.push({ start: entry.startTime, dur: entry.duration });
        }
      }).observe({ type: 'longtask', buffered: true });
    } catch (e) {}
  });

  const t0 = Date.now();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  // Wait for React root render + initial lazy frame batch settle (3.5s)
  await new Promise((r) => setTimeout(r, 3500));

  const resources = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const res = performance.getEntriesByType('resource').filter(r => r.name.includes('127.0.0.1'));
    const scripts = res.filter(r => r.name.endsWith('.js')).map(r => ({
      name: r.name.split('/').pop(),
      transferKB: +(r.transferSize / 1024).toFixed(1),
      decodedKB: +(r.decodedBodySize / 1024).toFixed(1),
      dur: +r.duration.toFixed(1)
    }));
    const imgs = res.filter(r => r.name.includes('/brand-film/') || r.initiatorType === 'img');
    const loaderGone = !document.getElementById('app-init-loader');
    return {
      dcl: nav ? +nav.domContentLoadedEventEnd.toFixed(1) : null,
      loadEvent: nav ? +nav.loadEventEnd.toFixed(1) : null,
      fcp: window.__perf.fcp ? +window.__perf.fcp.toFixed(1) : null,
      lcp: window.__perf.lcp ? +window.__perf.lcp.toFixed(1) : null,
      longTaskCount: window.__perf.longTasks.length,
      totalBlockingMs: +window.__perf.longTasks.reduce((a, b) => a + Math.max(0, b.dur - 50), 0).toFixed(1),
      totalLongTaskMs: +window.__perf.longTasks.reduce((a, b) => a + b.dur, 0).toFixed(1),
      localRequests: res.length + 1,
      jsTransferKB: +scripts.reduce((a, b) => a + b.transferKB, 0).toFixed(1),
      jsDecodedKB: +scripts.reduce((a, b) => a + b.decodedKB, 0).toFixed(1),
      imgCount: imgs.length,
      imgTransferKB: +imgs.reduce((a, b) => a + rSize(b), 0).toFixed(1),
      scripts,
      loaderGone
    };
    function rSize(r) { return (r.transferSize || 0) / 1024; }
  });

  // Measure scroll & idle RAF frame stability over 1.5s
  const fpsStats = await page.evaluate(async () => {
    const scroller = document.getElementById('main-scroll-container') || window;
    const frames = [];
    let last = performance.now();
    let scrolling = true;
    const start = performance.now();
    const maxY = scroller === window ? (document.documentElement.scrollHeight - window.innerHeight) : (scroller.scrollHeight - scroller.clientHeight);
    let step = 0;

    return await new Promise((resolve) => {
      function tick(now) {
        frames.push(now - last);
        last = now;
        step++;
        if (now - start < 1500) {
          const y = Math.min(maxY, (step / 60) * maxY);
          if (scroller === window) window.scrollTo(0, y);
          else scroller.scrollTop = y;
          requestAnimationFrame(tick);
        } else {
          const valid = frames.slice(1);
          const avgMs = valid.reduce((a, b) => a + b, 0) / Math.max(1, valid.length);
          const maxMs = Math.max(...valid, 0);
          const dropped = valid.filter(d => d > 22).length;
          resolve({
            samples: valid.length,
            avgFrameMs: +avgMs.toFixed(1),
            approxFps: +(1000 / Math.max(1, avgMs)).toFixed(1),
            worstFrameMs: +maxMs.toFixed(1),
            jankFrames: dropped
          });
        }
      }
      requestAnimationFrame(tick);
    });
  });

  const perfMetrics = await cdp.send('Performance.getMetrics');
  const getM = (n) => {
    const f = perfMetrics.metrics.find(m => m.name === n);
    return f ? f.value : 0;
  };

  await page.close();
  return {
    route: url,
    mobile: !!opts.mobile,
    ...resources,
    fpsStats,
    scriptDurationMs: +(getM('ScriptDuration') * 1000).toFixed(1),
    recalcStyleCount: getM('RecalcStyleCount'),
    recalcStyleMs: +(getM('RecalcStyleDuration') * 1000).toFixed(1),
    layoutMs: +(getM('LayoutDuration') * 1000).toFixed(1),
    jsHeapMB: +(getM('JSHeapUsedSize') / (1024 * 1024)).toFixed(1)
  };
}

(async () => {
  const { server, port } = await startServer();
  const base = `http://127.0.0.1:${port}`;
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  try {
    const desktopHome = await benchRoute(browser, `${base}/`, { viewport: { width: 1280, height: 800 }, mobile: false, cpuThrottle: 4 });
    const desktopNotes = await benchRoute(browser, `${base}/notes`, { viewport: { width: 1280, height: 800 }, mobile: false, cpuThrottle: 4 });
    const mobileHome = await benchRoute(browser, `${base}/`, { viewport: { width: 390, height: 844 }, mobile: true, cpuThrottle: 4 });
    console.log(JSON.stringify({ desktopHome, desktopNotes, mobileHome }, null, 2));
  } finally {
    await browser.close();
    server.close();
  }
})();
