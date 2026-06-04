const cron = require('node-cron');
const admin = require('../firebaseAdmin');

// Run every day at 6:00 AM IST
// Since server might run on UTC, 6:00 AM IST is 00:30 AM UTC.
// Node-cron allows timezone configuration.
const startDailyCron = () => {
    if (!admin || admin.apps.length === 0) {
        console.warn('⚠️ Cron not started: Firebase Admin not initialized.');
        return;
    }

    console.log('✅ Daily Notification Cron Scheduled for 6:00 AM IST');

    cron.schedule('0 6 * * *', async () => {
        console.log('⏳ Running daily 6 AM class notification job...');
        try {
            const db = admin.firestore();
            const messaging = admin.messaging();
            
            // Map day index to strings used in timetableV3
            const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
            const currentDay = days[new Date().getDay()];

            const usersSnapshot = await db.collection('users').get();
            let sentCount = 0;

            for (const doc of usersSnapshot.docs) {
                const userData = doc.data();
                if (!userData.fcmToken) continue; // No token, skip

                const timetable = userData.timetableV3;
                if (!timetable || !timetable[currentDay] || timetable[currentDay].length === 0) continue;

                const classesToday = timetable[currentDay];
                
                // Format message
                const subjects = classesToday.map(c => c.subject).join(', ');
                const message = {
                    notification: {
                        title: `📚 Good Morning! You have ${classesToday.length} classes today`,
                        body: `Subjects: ${subjects}. Don't forget to punch-in your attendance on the app!`
                    },
                    token: userData.fcmToken
                };

                try {
                    await messaging.send(message);
                    sentCount++;
                } catch (error) {
                    console.error(`❌ Failed to send notification to ${doc.id}:`, error.message);
                }
            }
            console.log(`✅ Daily notifications sent to ${sentCount} users.`);
        } catch (error) {
            console.error('❌ Error in daily cron job:', error);
        }
    }, {
        scheduled: true,
        timezone: "Asia/Kolkata"
    });
};

module.exports = startDailyCron;
