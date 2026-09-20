/**
 * ══════════════════════════════════════════════════════════════════════════════
 * APNA COLLEGE BIHAR — CORE MENTORSHIP TEAM APPLICATION GOOGLE FORM SCRIPT
 * ══════════════════════════════════════════════════════════════════════════════
 * 
 * Yeh Google Apps Script automatically create karega:
 * 1. Streamlined Google Form for "Apna College Bihar Core Mentorship Team"
 * 2. Connected Google Sheet (jahan saare responses auto-save honge)
 * 3. Execution Log me Form ka Edit link, Public shareable link aur Sheet link
 * 
 * KAISE RUN KAREIN:
 * 1. https://script.google.com open karein.
 * 2. "+ New project" par click karein aur yeh script paste karein.
 * 3. Dropdown se "createMentorRegistrationForm" chunein aur "Run" (▶) click karein.
 * 4. Execution log se public link copy karke share karein!
 * ══════════════════════════════════════════════════════════════════════════════
 */

function createMentorRegistrationForm() {
  const formTitle = "Apna College Bihar | Core Mentorship Team Application";
  
  // 1. Create Google Form
  const form = FormApp.create(formTitle);
  
  // 2. Inspiring Description — Core Team & Ecosystem
  const formDescription = 
    "🔥 Welcome to the Core Mentorship Team of Apna College Bihar!\n\n" +
    "You are NOT just a mentor; you are the CORE PILLAR of this movement.\n\n" +
    "Yahan aap poore Bihar Engineering University (BEU) ke students aur ambitious peers ke saath personalize connect karenge. " +
    "Hum milkar ek aisa powerful tech ecosystem build kar rahe hain jo Bihar ke har engineering college ke student ko elevate kare, " +
    "unka confidence badhaye, aur pure state me ek solid network create kare.\n\n" +
    "🌟 What You Will Do as Core Mentorship Team:\n" +
    "• Direct & Personalized Connect: 1-on-1 aur group sessions me juniors ko guide karein.\n" +
    "• Build a Thriving Ecosystem: Bihar ke 38+ engineering colleges ke students ke sath strong network banayein.\n" +
    "• Elevate Bihar's Tech Culture: Coding, BEU exams aur placement guidance me unhe aage layein.\n" +
    "• Core Team Recognition: Aapka profile Apna College Bihar ke official portal par Core Mentor ke roop me feature hoga.\n\n" +
    "🤝 NOTE (100% VOLUNTARY & UNPAID ROLE):\n" +
    "Yeh role puri tarah se VOLUNTARY (स्वैच्छिक / Pro-Bono) hai. Isme koi salary ya monetary payment nahi hai. " +
    "Yeh community upliftment aur Bihar ke juniors ki niswarth madad ke liye ek mission hai.";
  
  form.setDescription(formDescription);
  form.setAllowResponseEdits(false);
  form.setCollectEmail(true); // Verified email collection
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage(
    "🎉 Welcome to the Core Mentorship Team of Apna College Bihar!\n\n" +
    "Aapka application successfully receive ho gaya hai. Hum aapse jald hi direct WhatsApp par connect karenge taaki milkar poore BEU ka sabse powerful tech & mentorship ecosystem build kar sakein! 🚀\n\n" +
    "🌐 Website: https://apnacollegebihar.online\n" +
    "— Team Apna College Bihar"
  );

  // ═════════════════════════════════════════════════════════════════════════════
  // SECTION 1: PERSONAL & CONTACT INFORMATION
  // ═════════════════════════════════════════════════════════════════════════════
  
  // 1. Full Name
  form.addTextItem()
    .setTitle("1. Full Name (पूरा नाम)")
    .setHelpText("Apna pura official naam likhein.")
    .setRequired(true);

  // 2. Email Address
  const emailItem = form.addTextItem()
    .setTitle("2. Email Address (ईमेल आईडी)")
    .setHelpText("Active Gmail address enter karein jahan core team aapse communicate kar sake.")
    .setRequired(true);
  const emailValidation = FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText("Kripya ek valid email address enter karein.")
    .build();
  emailItem.setValidation(emailValidation);

  // 3. WhatsApp Mobile Number
  const whatsappItem = form.addTextItem()
    .setTitle("3. WhatsApp Number (व्हाट्सएप नंबर)")
    .setHelpText("10-digit ka active WhatsApp number (bina +91 ya 0 ke).")
    .setRequired(true);
  const phoneValidation = FormApp.createTextValidation()
    .requireTextMatchesPattern("^[6-9][0-9]{9}$")
    .setHelpText("Kripya 10-digit ka valid mobile number enter karein.")
    .build();
  whatsappItem.setValidation(phoneValidation);

  // 4. Gender
  form.addMultipleChoiceItem()
    .setTitle("4. Gender (लिंग)")
    .setChoiceValues(["Male (पुरुष)", "Female (महिला)", "Prefer not to say"])
    .setRequired(true);

  // ═════════════════════════════════════════════════════════════════════════════
  // SECTION 2: COLLEGE & BRANCH DETAILS (Direct Typing)
  // ═════════════════════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("Section 2: College & Academic Background (कॉलेज एवं ब्रांच)")
    .setHelpText("Aapke college aur branch ki jaankari.");

  // 5. College Name (Direct Input)
  form.addTextItem()
    .setTitle("5. Engineering College Name (कॉलेज का नाम)")
    .setHelpText("Apne Engineering College ka naam likhein (e.g. GEC Sheikhpura, BCE Bhagalpur, MIT Muzaffarpur, GCE Gaya, BCE Bakhtiyarpur, etc.)")
    .setRequired(true);

  // 6. Branch / Stream (Direct Input)
  form.addTextItem()
    .setTitle("6. Branch / Specialization (इंजीनियरिंग ब्रांच)")
    .setHelpText("Apni Branch likhein (e.g. CSE, CSE-AIML, CSE-DS, ECE, EEE, EE, ME, CE, etc.)")
    .setRequired(true);

  // 7. Current CGPA / Percentage
  form.addTextItem()
    .setTitle("7. Current CGPA or Percentage (CGPA या प्रतिशत)")
    .setHelpText("e.g. 8.45 CGPA ya 80%")
    .setRequired(true);

  // ═════════════════════════════════════════════════════════════════════════════
  // SECTION 3: SKILLS, TECH STACK & PROJECTS
  // ═════════════════════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("Section 3: Skills & Domain Expertise (कौशल एवं अनुभव)")
    .setHelpText("Aap kin technologies ya subjects me juniors ko guide kar sakte hain.");

  // 8. Areas of Expertise / Tech Stack
  form.addCheckboxItem()
    .setTitle("8. Areas of Expertise / Tech Stack (Aap kin vishayo me mentor kar sakte hain?)")
    .setHelpText("Ek se zyada options select kar sakte hain.")
    .setChoiceValues([
      "Frontend Web Development (HTML, CSS, JavaScript, React, Tailwind)",
      "Backend & Full Stack Development (Node.js, Express, MongoDB, SQL, Next.js)",
      "Data Structures & Algorithms (DSA in C++ / Java / Python)",
      "Python, AI & Machine Learning / Data Science",
      "Mobile App Development (Flutter, React Native, Android)",
      "BEU Semester Exam Guidance & Subject Strategy",
      "BEU Core Branch Subjects (Electrical, Civil, Mechanical, Electronics)",
      "Competitive Programming (LeetCode / CodeChef / Codeforces)",
      "Git, GitHub & Open Source",
      "Placement Strategy & Resume Guidance",
      "GATE / ESE Exam Strategy"
    ])
    .showOtherOption(true)
    .setRequired(true);

  // 9. Key Projects
  form.addParagraphTextItem()
    .setTitle("9. Projects You Have Built or Worked On (प्रोजेक्ट्स का विवरण)")
    .setHelpText("Aapne jin projects par kaam kiya hai unke naam aur brief details likhein (e.g., Portfolio, Chat App, E-Commerce, ML model, etc.).")
    .setRequired(true);

  // 10. GitHub / Project Link (Optional)
  form.addTextItem()
    .setTitle("10. GitHub Profile / Live Project Link (गिटहब या प्रोजेक्ट लिंक - Optional)")
    .setHelpText("e.g. https://github.com/yourusername ya live project link")
    .setRequired(false);

  // ═════════════════════════════════════════════════════════════════════════════
  // SECTION 4: STUDENT HANDLING CAPACITY (Without Time Wastage)
  // ═════════════════════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("Section 4: Student Mentorship Capacity (स्टूडेंट क्षमता)")
    .setHelpText("Bina apna time waste kiye aap kitne students ko smoothly handle kar sakte hain.");

  // 11. Student Capacity (Direct Text Input - No predefined options)
  form.addTextItem()
    .setTitle("11. How many students can you comfortably handle & guide without wastage of your time?")
    .setHelpText("Aap chahe 5 ko mentor karein lekin acche se karein, isliye aap apni ichha anusaar jitne students ko chunna chahte hain utna hi chunein aur likhein.")
    .setRequired(true);

  // ═════════════════════════════════════════════════════════════════════════════
  // SECTION 5: VISION & VOLUNTARY CONFIRMATION
  // ═════════════════════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("Section 5: Vision & Voluntary Agreement (उद्देश्य एवं सहमति)")
    .setHelpText("Ecosystem ko elevate karne ke liye aapka sankalp.");

  // 12. Why Join Core Team
  form.addParagraphTextItem()
    .setTitle("12. Why do you want to join the Core Mentorship Team of Apna College Bihar?")
    .setHelpText("Aap Bihar ke engineering ecosystem ko personalize connect karke kaise elevate karenge?")
    .setRequired(true);

  // 13. Voluntary & Unpaid Confirmation
  form.addCheckboxItem()
    .setTitle("13. Voluntary & Unpaid Role Confirmation (स्वैच्छिक एवं अवैतनिक सहमति)")
    .setHelpText("Kripya confirm karein ki aap samajhte hain ki yeh ek 100% voluntary seva hai.")
    .setChoiceValues([
      "Main spasht roop se samajhta/samajhti hoon ki yeh role 100% VOLUNTARY (स्वैच्छिक / Unpaid) hai. Isme koi salary ya monetary payment nahi hai. Main poore BEU ke sath ek strong network banane aur Bihar ke students ko elevate karne ke liye Core Mentorship Team se jud raha/rahi hoon."
    ])
    .setRequired(true);

  // 14. Mentorship Commitment
  form.addCheckboxItem()
    .setTitle("14. Mentorship Commitment (मेंटरशिप संकल्प)")
    .setHelpText("Kripya apna commitment confirm karein.")
    .setChoiceValues([
      "Main acche se mentor karunga ya karungi"
    ])
    .setRequired(true);

  // ═════════════════════════════════════════════════════════════════════════════
  // LINK TO GOOGLE SHEET FOR RESPONSES
  // ═════════════════════════════════════════════════════════════════════════════
  const sheetName = "Apna College Bihar - Core Mentor Applications (Responses)";
  const spreadsheet = SpreadsheetApp.create(sheetName);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());

  // ═════════════════════════════════════════════════════════════════════════════
  // SUMMARY & OUTPUT LOGS
  // ═════════════════════════════════════════════════════════════════════════════
  const editUrl = form.getEditUrl();
  const publishedUrl = form.getPublishedUrl();
  const sheetUrl = spreadsheet.getUrl();

  Logger.log("==================================================================");
  Logger.log("🔥 SUCCESS: Apna College Bihar Core Mentorship Form Created!");
  Logger.log("==================================================================");
  Logger.log("📝 FORM EDIT URL: \n" + editUrl);
  Logger.log("------------------------------------------------------------------");
  Logger.log("🔗 PUBLIC SHAREABLE FORM LINK: \n" + publishedUrl);
  Logger.log("------------------------------------------------------------------");
  Logger.log("📊 CONNECTED GOOGLE SHEET: \n" + sheetUrl);
  Logger.log("==================================================================");

  return {
    formTitle: formTitle,
    editUrl: editUrl,
    publishedUrl: publishedUrl,
    sheetUrl: sheetUrl
  };
}
