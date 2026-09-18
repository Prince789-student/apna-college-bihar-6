// ═══════════════════════════════════════════════════════════════════════════
// SCRIPT: SEND FREE BEU MENTORSHIP LOGIN CREDENTIALS TO ENROLLED STUDENTS
// Powered by Nodemailer & Apna College Bihar
// ═══════════════════════════════════════════════════════════════════════════

require('dotenv').config();
const nodemailer = require('nodemailer');

const STUDENTS = [
  { name: 'Rohit kumar', email: 'shivamraj8002@gmail.com', phone: '6204640645', roll: '26/EEE/46', branch: 'EEE', password: '26EEEACB01', college: 'GCE Gaya', mentor: 'Deepak Kumar Mishra' },
  { name: 'Nandani Preyashi', email: 'nandanipreyashi3@gmail.com', phone: '9241308744', roll: '26/EEE/10P', branch: 'EEE', password: '26EEEACB01', college: 'BCE Bakhtiyarpur', mentor: 'Senior BEU Academic Mentor' },
  { name: 'KHUSHI ANAND', email: 'khushianand18102005@gmail.com', phone: '8905245805', roll: '26/EEE/50', branch: 'EEE', password: '26EEEACB01', college: 'GCE Gaya', mentor: 'Senior BEU Academic Mentor' },
  { name: 'Aditya Bardhan', email: 'adityavardanraj8264@gmail.com', phone: '7631941681', roll: '26/EEE/44', branch: 'EEE', password: '26EEEACB01', college: 'GCE Gaya', mentor: 'Senior BEU Academic Mentor' },
  { name: 'Deepak Kumar', email: 'mjpathak65@gmail.com', phone: '9046030836', roll: '26/ECE/21', branch: 'ECE', password: '26ECEACB01', college: 'GEC Sheikhpura', mentor: 'Senior BEU Academic Mentor' },
  { name: 'Aryan Kumar', email: 'kumararyan22309@gmail.com', phone: '8368352020', roll: '26cse47', branch: 'CSE', password: '26CSEACB01', college: 'GEC Sheikhpura', mentor: 'Deepak Kumar Mishra' },
  { name: 'Abhishek kumar', email: 'ak5976697@gmail.com', phone: '9798773944', roll: 'Cse07', branch: 'CSE', password: '26CSEACB01', college: 'GEC Sheikhpura', mentor: 'Deepak Kumar Mishra' },
  { name: 'Sanjana Swaraj', email: 'sanjana.7251@gmail.com', phone: '8271901765', roll: '26cse04', branch: 'CSE', password: '26CSEACB01', college: 'GEC Sheikhpura', mentor: 'Deepak Kumar Mishra' },
  { name: 'Akash Anand', email: 'akashanand1472@gmail.com', phone: '6287193645', roll: '26EEE11P', branch: 'EEE', password: '26EEEACB01', college: 'BCE Bakhtiyarpur', mentor: 'Senior BEU Academic Mentor' },
  { name: 'Patel Ji', email: 'patelpriy199@gmail.com', phone: '8199512610', roll: '26-cse-05', branch: 'CSE', password: '26CSEACB01', college: 'GEC Gopalganj', mentor: 'Subhash Kumar' },
  { name: 'Prince Raj', email: 'princeraj731@gmail.com', phone: '9534165430', roll: 'W26A33', branch: 'CSE', password: '26CSEACB01', college: 'GEC West Champaran', mentor: 'Deepak Kumar Mishra' },
  { name: 'SANDHYA RANI', email: 'sandhyarani082008@gmail.com', phone: '9042367662', roll: '26ECE29', branch: 'ECE', password: '26ECEACB01', college: 'GEC Sheikhpura', mentor: 'Senior BEU Academic Mentor' },
  { name: 'nandan kumar', email: 'nandankushwahaampur@gmail.com', phone: '9955560341', roll: '26Ece46', branch: 'ECE', password: '26ECEACB01', college: 'GEC Sheikhpura', mentor: 'Senior BEU Academic Mentor' },
  { name: 'Anubhav kumar', email: 'anubhav143@gmail.com', phone: '8709322211', roll: '26ECE20', branch: 'ECE', password: '26ECEACB01', college: 'GEC Sheikhpura', mentor: 'Senior BEU Academic Mentor' },
  { name: 'Golu Raj', email: 'golupratap491@gmail.com', phone: '8165722585', roll: '26Cse112', branch: 'CSE', password: '26CSEACB01', college: 'GEC Sheikhpura', mentor: 'Deepak Kumar Mishra' },
  { name: 'Ayush kumar', email: 'ayushayush534@gmail.com', phone: '6201358686', roll: '26-CSE-DS-15', branch: 'CSE', password: '26CSEACB01', college: 'SEC Saharsa', mentor: 'Subhash Kumar' },
  { name: 'Aniket Kumar', email: 'aak388177@gmail.com', phone: '9241369949', roll: '26eee14p', branch: 'EEE', password: '26EEEACB01', college: 'BCE Bakhtiyarpur', mentor: 'Senior BEU Academic Mentor' },
  { name: 'Khushnuma parween', email: 'khushnumaparween587@gmail.com', phone: '6200613246', roll: '26ECE32', branch: 'ECE', password: '26ECEACB01', college: 'GEC Sheikhpura', mentor: 'Senior BEU Academic Mentor' },
  { name: 'Saziya Khanam', email: 'saziyakhannum00@gmail.com', phone: '9521327432', roll: '2605001', branch: 'CSE', password: '26CSEACB01', college: 'GEC Sheikhpura', mentor: 'Subhash Kumar' },
  { name: 'Krishna Raj', email: 'krishna72111@gmail.com', phone: '9955549052', roll: '26105110033', branch: 'CSE', password: '26CSEACB01', college: 'GCE Gaya', mentor: 'Subhash Kumar' },
  { name: 'Raushan raj', email: 'pankajbsp100@gmail.com', phone: '9006321926', roll: '26CSE71', branch: 'CSE', password: '26CSEACB01', college: 'GEC Sheikhpura', mentor: 'Subhash Kumar' },
  { name: 'Rohan kumar', email: 'kumarrohanraj321@gmail.com', phone: '6205399645', roll: '26E08', branch: 'ECE', password: '26ECEACB01', college: 'BCE Bhagalpur', mentor: 'Senior BEU Academic Mentor' },
  { name: 'Ayush Singh', email: 'ayushsengarmit@gmail.com', phone: '8303001716', roll: '26ECE44', branch: 'ECE', password: '26ECEACB01', college: 'GEC Sheikhpura', mentor: 'Senior BEU Academic Mentor' },
  { name: 'Rishav Raushan', email: 'rishavsinghmec123@gmail.com', phone: '6200631627', roll: '26ece11', branch: 'ECE', password: '26ECEACB01', college: 'GEC Sheikhpura', mentor: 'Senior BEU Academic Mentor' },
  { name: 'Pankaj kumar singh', email: 'classmatepks75@gmail.com', phone: '7643916298', roll: '26-IOT-27', branch: 'CSE', password: '26CSEACB01', college: 'GEC Vaishali', mentor: 'Deepak Kumar Mishra / Subhash Kumar' }
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
            Dear ${student.name},
          </h2>

          <p style="font-size: 14px; line-height: 1.6; color: #475569;">
            Welcome to the <strong>Free BEU Mentorship Program (Batch 2026-2030)</strong> by Apna College Bihar. 
            Your mentorship account has been successfully activated.
          </p>

          <!-- Credentials Card -->
          <div style="background-color: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0;">
            <div style="margin-bottom: 12px;">
              <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">Portal Link:</span>
              <div style="font-size: 14px; font-weight: 700; color: #1d4ed8; margin-top: 4px;">
                <a href="https://www.apnacollegebihar.online/mentorship" style="color: #2563eb; text-decoration: none;">https://www.apnacollegebihar.online/mentorship</a>
              </div>
            </div>

            <div style="margin-bottom: 12px;">
              <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">Roll Number:</span>
              <div style="font-size: 18px; font-weight: 800; color: #0f172a; font-family: monospace; margin-top: 4px;">
                ${student.roll}
              </div>
            </div>

            ${student.phone ? `
            <div style="margin-bottom: 12px;">
              <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">Registered Phone (Username):</span>
              <div style="font-size: 16px; font-weight: 800; color: #0f172a; font-family: monospace; margin-top: 4px;">
                ${student.phone}
              </div>
            </div>
            ` : ''}

            <div style="margin-bottom: 12px;">
              <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">Password:</span>
              <div style="font-size: 20px; font-weight: 900; color: #059669; font-family: monospace; margin-top: 4px; letter-spacing: 1px;">
                ${student.password}
              </div>
            </div>

            <div>
              <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">Assigned Mentor:</span>
              <div style="font-size: 16px; font-weight: 800; color: #4338ca; margin-top: 4px;">
                ${student.mentor || (student.branch === 'CSE' ? 'Deepak Kumar Mishra / Subhash Kumar' : 'Senior BEU Academic Mentor')}
              </div>
            </div>
          </div>

          <p style="font-size: 12px; color: #64748b; font-style: italic; margin-top: -10px; margin-bottom: 20px;">
            *(Note: You can log in using either your Roll Number or your registered Phone Number as your Username)*
          </p>

          <!-- CTA Button -->
          <div style="text-align: center; margin: 28px 0;">
            <a href="https://www.apnacollegebihar.online/mentorship" style="background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 12px; font-weight: 800; font-size: 14px; display: inline-block; box-shadow: 0 4px 12px rgba(37,99,235,0.3);">
              Login to Mentorship Portal →
            </a>
          </div>

          <!-- Features highlight -->
          <div style="background-color: #eff6ff; border-radius: 12px; padding: 18px; font-size: 13px; color: #1e40af; line-height: 1.6;">
            <strong style="display: block; margin-bottom: 8px; font-size: 14px;">What you get on the portal:</strong>
            • <strong>Senior Academic Guidance:</strong> Direct roadmap to score 9+ CGPA in BEU semester exams.<br/>
            • <strong>Daily Study Tracker:</strong> Log your daily study hours and topics to maintain consistency.<br/>
            • <strong>Verified Study Resources:</strong> Free access to semester syllabus, curated notes, and PYQs.
          </div>

          <p style="font-size: 13px; color: #64748b; margin-top: 24px; line-height: 1.5;">
            Please log in using the link above to get started with your mentorship journey.
          </p>

          <p style="font-size: 13px; color: #334155; margin-top: 20px; line-height: 1.5;">
            Warm regards,<br/>
            <strong>Team Apna College Bihar</strong><br/>
            🌐 <a href="https://www.apnacollegebihar.online" style="color: #2563eb; text-decoration: none;">www.apnacollegebihar.online</a>
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; font-weight: 600;">© 2026 Apna College Bihar · Engineering Academic Platform</p>
          <p style="margin: 4px 0 0 0;">Dedicated to Bihar Engineering University Students</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Apna College Bihar Mentorship" <${process.env.EMAIL_USER}>`,
      to: student.email,
      subject: 'Welcome to Free BEU Mentorship | Your Login Credentials - Apna College Bihar',
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
