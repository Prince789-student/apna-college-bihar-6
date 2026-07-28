const axios = require('axios');

async function testBEU() {
    console.log("Fetching...");
    try {
        const response = await axios.get('https://beu-bih.ac.in/backend/v1/notice/get-notice-board');
        console.log("Success. Total notices:", response.data.length);
        console.log("First notice:", response.data[0]);
    } catch (e) {
        console.error("Error:", e.message);
    }
}
testBEU();
