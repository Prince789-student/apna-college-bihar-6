// ═══════════════════════════════════════════════════════════════════════════
// SCRIPT: SEND FREE BEU MENTORSHIP LOGIN CREDENTIALS TO ENROLLED STUDENTS
// Powered by Nodemailer & Apna College Bihar
// ═══════════════════════════════════════════════════════════════════════════

require('dotenv').config();
const nodemailer = require('nodemailer');

const STUDENTS = [
  { name: 'Rohit kumar', email: 'shivamraj8002@gmail.com', roll: '26/EEE/46', password: 'SkyHawk#724', college: 'GCE Gaya' },
  { name: 'Nandani Preyashi', email: 'nandanipreyashi3@gmail.com', roll: '26/EEE/10P', password: 'AmberMoon@819', college: 'BCE Bakhtiyarpur' },
  { name: 'Harshit Kumar Sonu Sharma', email: 'harshitkumarsonusingh@gmail.com', roll: '25/CSE/02', password: 'BoldPixel!538', college: 'GCE Gaya' },
  { name: 'KHUSHI ANAND', email: 'khushianand18102005@gmail.com', roll: '26/EEE/50', password: 'SunGlow#293', college: 'GCE Gaya' },
  { name: 'HARSHIT KUMAR SHARMA', email: 'harshitkumarsonusingh@gmail.com', roll: '26/MC/08', password: 'CyberWave!417', college: 'GCE Gaya' },
  { name: 'Aditya Bardhan', email: 'adityavardanraj8264@gmail.com', roll: '26/EEE/44', password: 'ZenithSpark@682', college: 'GCE Gaya' },
  { name: 'Deepak Kumar', email: 'mjpathak65@gmail.com', roll: '26/ECE/21', password: 'NovaPulse#935', college: 'GEC Sheikhpura' },
  { name: 'Aryan Kumar', email: 'kumararyan22309@gmail.com', roll: '26cse47', password: 'IronClad!364', college: 'GEC Sheikhpura' },
  { name: 'Abhishek kumar', email: 'ak5976697@gmail.com', roll: 'Cse07', password: 'SilverCrest@841', college: 'GEC Sheikhpura' },
  { name: 'Sanjana Swaraj', email: 'sanjana.7251@gmail.com', roll: '26cse04', password: 'RubyLotus#527', college: 'GEC Sheikhpura' },
  { name: 'Akash Anand', email: 'akashanand1472@gmail.com', roll: '26EEE11P', password: 'CloudRider!916', college: 'BCE Bakhtiyarpur' },
  { name: 'Patel Ji', email: 'patelpriy199@gmail.com', roll: '26-cse-05', password: 'GoldenOak@473', college: 'GEC Gopalganj' },
  { name: 'Kishan kumar', email: 'krishanandkishan@gmail.com', roll: '26/EE/33', password: 'VividFlame#852', college: 'GEC Jehanabad' },
  { name: 'Prince Raj', email: 'princeraj731@gmail.com', roll: 'W26A33', password: 'ApexFalcon!639', college: 'GEC West Champaran' },
  { name: 'Riya Kumari', email: 'riyakumari0912@gmail.com', roll: '26ece24', password: 'CrystalDrop@714', college: 'GEC Sheikhpura' },
  { name: 'SANDHYA RANI', email: 'sandhyarani082008@gmail.com', roll: '26ECE29', password: 'VelvetDawn#386', college: 'GEC Sheikhpura' },
  { name: 'nandan kumar', email: 'nandankushwahaampur@gmail.com', roll: '26Ece46', password: 'TrueNorth!592', college: 'GEC Sheikhpura' },
  { name: 'Anubhav kumar', email: 'anubhav143@gmail.com', roll: '26ECE20', password: 'AlphaRays@481', college: 'GEC Sheikhpura' },
  { name: 'Golu Raj', email: 'golupratap491@gmail.com', roll: '26Cse112', password: 'BraveKnight#927', college: 'GEC Sheikhpura' },
  { name: 'Ayush kumar', email: 'ayushayush534@gmail.com', roll: '26-CSE-DS-15', password: 'CosmicStar!318', college: 'SEC Saharsa' },
  { name: 'Aniket Kumar', email: 'aak388177@gmail.com', roll: '26eee14p', password: 'UrbanStride@674', college: 'BCE Bakhtiyarpur' },
  { name: 'Khushnuma parween', email: 'khushnumaparween587@gmail.com', roll: '26ECE32', password: 'OceanBreeze#459', college: 'GEC Sheikhpura' },
  { name: 'Saziya Khanam', email: 'saziyakhannum00@gmail.com', roll: '2605001', password: 'PureSilk!823', college: 'GEC Sheikhpura' },
  { name: 'Krishna Raj', email: 'krishna72111@gmail.com', roll: '26105110033', password: 'SwiftArrow@749', college: 'GCE Gaya' },
  { name: 'Ramvir kumar', email: 'ramveerguprajapati@gmail.com', roll: '26-CE-129', password: 'MightyPeak#615', college: 'GEC Jehanabad' },
  { name: 'Raushan raj', email: 'pankajbsp100@gmail.com', roll: '26CSE71', password: 'BrightPrism!284', college: 'GEC Sheikhpura' },
  { name: 'Rohan kumar', email: 'kumarrohanraj321@gmail.com', roll: '26E08', password: 'SolarFlare@963', college: 'BCE Bhagalpur' },
  { name: 'Ayush Singh', email: 'ayushsengarmit@gmail.com', roll: '26ECE44', password: 'ThunderBolt#571', college: 'GEC Sheikhpura' },
  { name: 'Rishav Raushan', email: 'rishavsinghmec123@gmail.com', roll: '26ece11', password: 'BlueVortex!836', college: 'GEC Sheikhpura' },
  { name: 'Pankaj kumar singh', email: 'classmatepks75@gmail.com', roll: '26-IOT-27', password: 'PrimeShield@492', college: 'GEC Vaishali' }
];

async function sendAllCredentials() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ EMAIL_USER and EMAIL_PASS environment variables are missing!');
    process.exit(1);
  }

  console.log(`🚀 Initializing Email Dispatcher via ${process.env.EMAIL_USER}...`);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Verify connection
  try {
    await transporter.verify();
    console.log('✅ Gmail SMTP Server Connection Verified!');
  } catch (err) {
    console.error('❌ SMTP Connection Error:', err.message);
    process.exit(1);
  }

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < STUDENTS.length; i++) {
    const student = STUDENTS[i];
    console.log(`[${i + 1}/${STUDENTS.length}] Sending to ${student.name} (${student.email})...`);

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 32px 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 0.5px; text-transform: uppercase;">
            Apna College Bihar
          </h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; font-weight: 500; opacity: 0.9;">
            Free BEU Mentorship Program (Batch 2026-2030)
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 32px 24px; color: #1e293b;">
          <h2 style="font-size: 18px; font-weight: 800; color: #0f172a; margin-top: 0;">
            Namaste ${student.name}! 👋
          </h2>

          <p style="font-size: 14px; line-height: 1.6; color: #475569;">
            Aapne <strong>Free Mentorship for 1st Year Students</strong> ke liye register kiya tha. Aapka mentorship account successfully activate ho gaya hai!
          </p>

          <p style="font-size: 14px; line-height: 1.6; color: #475569;">
            Niche diye gaye credentials se aap apna <strong>Mentorship & Study Tracker Portal</strong> access kar sakte hain:
          </p>

          <!-- Credentials Card -->
          <div style="background-color: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0;">
            <div style="margin-bottom: 12px;">
              <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">BEU Roll / Registration No:</span>
              <div style="font-size: 18px; font-weight: 800; color: #1d4ed8; font-family: monospace; margin-top: 4px;">
                ${student.roll}
              </div>
            </div>

            <div>
              <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">Aapka Login Password:</span>
              <div style="font-size: 20px; font-weight: 900; color: #059669; font-family: monospace; margin-top: 4px; letter-spacing: 1px;">
                ${student.password}
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://www.apnacollegebihar.online/mentorship" style="background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 12px; font-weight: 800; font-size: 14px; display: inline-block; box-shadow: 0 4px 12px rgba(37,99,235,0.3);">
              Login to Mentorship Portal →
            </a>
            <p style="font-size: 11px; color: #94a3b8; margin-top: 10px;">
              Website: <a href="https://www.apnacollegebihar.online/mentorship" style="color: #2563eb;">apnacollegebihar.online/mentorship</a>
            </p>
          </div>

          <!-- Features highlight -->
          <div style="background-color: #eff6ff; border-radius: 12px; padding: 16px; font-size: 13px; color: #1e40af; line-height: 1.5;">
            <strong style="display: block; margin-bottom: 6px;">Portal Me Aapko Kya Milega:</strong>
            • <strong>Assigned Senior Mentor:</strong> Dedicated senior guidance regarding BEU syllabus & high scoring tips.<br/>
            • <strong>Kya Padha Study Tracker:</strong> Roz kya padha log karein aur apna progress track karein.<br/>
            • <strong>Doubt Box & 1-on-1 Sessions:</strong> Exam preparation ke sawal poochein.
          </div>

          <p style="font-size: 12px; color: #64748b; margin-top: 24px; line-height: 1.5;">
            Agar aapko login karne me koi samasya aati hai, toh kripya humein directly contact karein.
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 font-weight: 600;">© 2026 Apna College Bihar · Engineering Academic Platform</p>
          <p style="margin: 4px 0 0 0;">Dedicated to Bihar Engineering University Students</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Apna College Bihar Mentorship" <${process.env.EMAIL_USER}>`,
      to: student.email,
      subject: `🎉 ${student.name}, Aapka Free BEU Mentorship Login ID & Password`,
      html: htmlContent
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ [SUCCESS] Sent to ${student.name} (${student.email})`);
      successCount++;
      // Sleep 300ms to respect Gmail rate limits
      await new Promise(r => setTimeout(r, 300));
    } catch (err) {
      console.error(`❌ [FAILED] Error sending to ${student.email}:`, err.message);
      failCount++;
    }
  }

  console.log('\n═════════════════════════════════════════════════════════════');
  console.log(`📊 DISPATCH COMPLETE: ${successCount} Sent Successfully, ${failCount} Failed.`);
  console.log('═════════════════════════════════════════════════════════════');
}

// Run if called directly
if (require.main === module) {
  sendAllCredentials();
}

module.exports = { sendAllCredentials, STUDENTS };
