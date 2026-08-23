const axios = require('axios');
const fs = require('fs');
async function testAPI() {
  try {
    const res = await axios.get('https://beu-bih.ac.in/backend/v1/notice/get-notice-board');
    console.log('GET response:', JSON.stringify(res.data).substring(0, 500));
  } catch(e) {
    console.log('GET error:', e.message);
  }
}
testAPI();
