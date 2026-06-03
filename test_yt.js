const https = require('https');

https.get('https://www.youtube.com/results?search_query=Newton+Law+in+Hindi', res => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
        const match = d.match(/"videoId":"([^"]+)"/);
        console.log(match ? match[1] : 'Not found');
    });
});
