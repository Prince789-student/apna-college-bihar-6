const express = require('express');
const router = express.Router();
const https = require('https');
const http = require('http');

// Helper: Fetch a URL server-side (bypasses CORS)
function fetchUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.request(url, {
      method: options.method || 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Referer': 'https://beu-bih.ac.in/',
        ...(options.headers || {})
      },
      timeout: 15000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Request timed out')); });
    if (options.body) req.write(options.body);
    req.end();
  });
}

// POST /api/beu-result
// Body: { regno: "XXXXXXXX", course: "B.Tech", semester: "3" }
router.post('/fetch', async (req, res) => {
  const { regno, course, semester } = req.body;

  if (!regno) {
    return res.status(400).json({ error: 'Registration number required' });
  }

  try {
    // Step 1: First GET the result page to get any session/token
    const baseUrl = 'https://beu-bih.ac.in/result-one';
    const initRes = await fetchUrl(baseUrl);
    
    // Extract any hidden fields / CSRF tokens from the HTML
    const html = initRes.data;
    
    // Try to find form action and input fields
    const actionMatch = html.match(/action=['"](.*?)['"]/i);
    const formAction = actionMatch ? actionMatch[1] : baseUrl;
    
    // Get cookies from init response
    const cookies = initRes.headers['set-cookie'] 
      ? initRes.headers['set-cookie'].map(c => c.split(';')[0]).join('; ')
      : '';
    
    // Extract hidden inputs
    const hiddenInputs = {};
    const hiddenMatches = html.matchAll(/type=['"](hidden)['"]\s+name=['"](.*?)['"]\s+value=['"](.*?)['"]/gi);
    for (const match of hiddenMatches) {
      hiddenInputs[match[2]] = match[3];
    }

    // Step 2: Submit form with registration number
    const fullAction = formAction.startsWith('http') ? formAction : `https://beu-bih.ac.in/${formAction.replace(/^\//, '')}`;
    
    const formData = new URLSearchParams({
      ...hiddenInputs,
      regno: regno,
      ...(course ? { course } : {}),
      ...(semester ? { semester } : {}),
      submit: 'Get Result'
    }).toString();

    const resultRes = await fetchUrl(fullAction, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': cookies,
        'Origin': 'https://beu-bih.ac.in',
        'Referer': baseUrl
      },
      body: formData
    });

    // Clean and rewrite the HTML so relative URLs work
    let resultHtml = resultRes.data;
    
    // Inject base tag so relative resources load from BEU
    resultHtml = resultHtml.replace(
      /<head>/i, 
      '<head><base href="https://beu-bih.ac.in/">'
    );

    // Check if result was found
    const hasResult = resultHtml.toLowerCase().includes('result') && 
                     (resultHtml.includes(regno) || resultHtml.toLowerCase().includes('marks') || resultHtml.toLowerCase().includes('grade'));
    
    const hasError = resultHtml.toLowerCase().includes('no record') || 
                    resultHtml.toLowerCase().includes('invalid') ||
                    resultHtml.toLowerCase().includes('not found');

    res.json({
      success: true,
      hasResult,
      hasError,
      html: resultHtml,
      regno
    });

  } catch (err) {
    console.error('BEU Result fetch error:', err.message);
    res.status(500).json({ 
      error: 'BEU server se result fetch nahi ho paya. Thodi der baad try karein.',
      details: err.message 
    });
  }
});

// GET /api/beu-result/check - Proxy for BEU result page assets
router.get('/proxy', async (req, res) => {
  const { url } = req.query;
  if (!url || !url.startsWith('https://beu-bih.ac.in')) {
    return res.status(400).json({ error: 'Invalid URL' });
  }
  try {
    const result = await fetchUrl(url);
    const contentType = result.headers['content-type'] || 'text/html';
    res.setHeader('Content-Type', contentType);
    res.send(result.data);
  } catch (err) {
    res.status(500).send('Proxy error: ' + err.message);
  }
});

module.exports = router;
