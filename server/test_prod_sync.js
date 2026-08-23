const axios = require('axios');
async function test() {
  try {
    const res = await axios.post('https://apna-college-bihar-6.onrender.com/api/admin/sync-beu');
    console.log('SUCCESS JSON:', JSON.stringify(res.data));
  } catch (err) {
    if (err.response) {
      console.log('ERROR RESPONSE HTTP STATUS:', err.response.status);
      console.log('ERROR RESPONSE DATA:', typeof err.response.data === 'string' ? err.response.data.substring(0, 500) : JSON.stringify(err.response.data));
    } else {
      console.log('NETWORK ERROR:', err.message);
    }
  }
}
test();
