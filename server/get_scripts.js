const https = require('https');
https.get('https://beu-bih.ac.in/main.eeb096a537fbf725.js', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const urls = data.match(/(?:['"`])\/?(?:backend|api)\/[a-zA-Z0-9_\-\/]+(?:['"`])/g) || [];
    const endpoints = data.match(/(?:['"`])(?:notice|notification|circular|announcement|board)[s]?(?:['"`])/gi) || [];
    console.log("Paths:", Array.from(new Set(urls)));
    console.log("Endpoints:", Array.from(new Set(endpoints)));
  });
});
