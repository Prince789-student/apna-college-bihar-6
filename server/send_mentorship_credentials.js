// ═══════════════════════════════════════════════════════════════════════════
// SCRIPT: SEND FREE BEU MENTORSHIP LOGIN CREDENTIALS TO ENROLLED STUDENTS
// Powered by Nodemailer & Apna College Bihar
// ═══════════════════════════════════════════════════════════════════════════

require('dotenv').config();
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Load students from external private JSON file (if present) instead of hardcoding in source control
const STUDENTS_FILE = process.env.CREDENTIALS_FILE || path.join(__dirname, 'private_students.json');
let STUDENTS = [];

if (fs.existsSync(STUDENTS_FILE)) {
  try {
    STUDENTS = JSON.parse(fs.readFileSync(STUDENTS_FILE, 'utf8'));
  } catch (err) {
    console.error('Failed to parse private students JSON:', err.message);
  }
} else {
  console.log('ℹ️ No private_students.json found. Provide student records via JSON file or CREDENTIALS_FILE env.');
}

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
