const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

const serviceAccountPath = path.join(__dirname, 'firebase-service-account.json');

let serviceAccount;

try {
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        let rawStr = process.env.FIREBASE_SERVICE_ACCOUNT;
        // Try parsing, it might be base64 or plain string
        try {
            // Check if base64 (doesn't start with { )
            if (!rawStr.trim().startsWith('{')) {
                rawStr = Buffer.from(rawStr, 'base64').toString('utf8');
            }
            serviceAccount = JSON.parse(rawStr);
            // Fix private key newlines if they were escaped
            if (serviceAccount.private_key) {
                serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
            }
        } catch (parseError) {
            console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT:', parseError.message);
        }
    } else if (fs.existsSync(serviceAccountPath)) {
        serviceAccount = require(serviceAccountPath);
    }

    if (serviceAccount) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        console.log('✅ Firebase Admin SDK Initialized');
    } else {
        console.warn('⚠️ Firebase Admin SDK not initialized: No config found in Env or file.');
    }
} catch (e) {
    console.warn('⚠️ Firebase Admin SDK initialization failed:', e.message);
}

module.exports = admin;
