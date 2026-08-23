const https = require('https');
https.get('https://beu-bih.ac.in/main.eeb096a537fbf725.js', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const urls = data.match(/https?:\/\/[^\s"']+/g);
    if(urls) {
      console.log(Array.from(new Set(urls)).filter(u => u.includes('beu') || u.includes('api')));
    }
  })
});
