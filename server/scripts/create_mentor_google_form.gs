/**
 * ══════════════════════════════════════════════════════════════════════════════
 * APNA COLLEGE BIHAR — MENTOR APPLICATION FORM SCRIPT (SINGLE PAGE / CLEAN ENGLISH)
 * ══════════════════════════════════════════════════════════════════════════════
 * 
 * Includes only:
 * 1. Modal questions (Name, Phone, Email, Role, College/Passout, Branch, Photo, 
 *    Username, Password, Worked On, Expertise In, Mentor Bio)
 * 2. Current CGPA
 * 3. Student Capacity
 * 4. Last 2 Agreement Checkboxes
 * 
 * Everything in ONE single section (no page breaks) & simple, clean English.
 * ══════════════════════════════════════════════════════════════════════════════
 */

function createMentorRegistrationForm() {
  const formTitle = "Apna College Bihar | Mentor Application Form";
  
  // 1. Create Google Form
  const form = FormApp.create(formTitle);
  
  // 2. Simple, Professional English Description
  const formDescription = 
    "Welcome to Apna College Bihar Mentorship Program!\n\n" +
    "Please fill in your details below to join our core mentorship network for Bihar Engineering University (BEU) students. " +
    "These details will be used to set up your official Mentor Profile on our portal.\n\n" +
    "Note: This is a 100% voluntary (unpaid) community initiative to empower engineering students across Bihar.";
  
  form.setDescription(formDescription);
  form.setAllowResponseEdits(false);
  form.setCollectEmail(true);
  form.setProgressBar(false);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage(
    "Thank you! Your mentor application has been submitted successfully.\n\n" +
    "Our team will review your profile and activate your mentor account shortly. We will reach out on your WhatsApp number.\n\n" +
    "Website: https://apnacollegebihar.online\n" +
    "— Team Apna College Bihar"
  );

  // ═════════════════════════════════════════════════════════════════════════════
  // ALL QUESTIONS ON A SINGLE PAGE (NO PAGE BREAKS)
  // ═════════════════════════════════════════════════════════════════════════════

  // 1. Full Name
  form.addTextItem()
    .setTitle("1. Full Name")
    .setHelpText("e.g. Saurabh Verma or Subhash Kumar")
    .setRequired(true);

  // 2. Phone Number (WhatsApp / Calling)
  const phoneItem = form.addTextItem()
    .setTitle("2. Phone Number (WhatsApp / Calling)")
    .setHelpText("10-digit mobile number for contact")
    .setRequired(true);
  const phoneValidation = FormApp.createTextValidation()
    .requireTextMatchesPattern("^[6-9][0-9]{9}$")
    .setHelpText("Please enter a valid 10-digit Indian mobile number.")
    .build();
  phoneItem.setValidation(phoneValidation);

  // 3. Email Address
  const emailItem = form.addTextItem()
    .setTitle("3. Email Address")
    .setHelpText("Your active Gmail address to receive login credentials")
    .setRequired(true);
  const emailValidation = FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText("Please enter a valid email address.")
    .build();
  emailItem.setValidation(emailValidation);

  // 4. Role / Job Title
  form.addTextItem()
    .setTitle("4. Role / Job Title")
    .setHelpText("e.g. Senior BEU Scholar & Mentor, Student Mentor, Software Engineer, Web Developer")
    .setRequired(true);

  // 5. College & Passout Batch
  form.addTextItem()
    .setTitle("5. College Name & Passout Batch")
    .setHelpText("e.g. BCE Bhagalpur (2020-24), GEC Sheikhpura (2022-26), MIT Muzaffarpur (2021-25)")
    .setRequired(true);

  // 6. Branch / Domain
  form.addTextItem()
    .setTitle("6. Branch / Domain")
    .setHelpText("e.g. Computer Science & Engineering (CSE), ECE, EEE, EE, ME, CE, AI/ML")
    .setRequired(true);

  // 7. Current CGPA / Percentage
  form.addTextItem()
    .setTitle("7. Current CGPA or Percentage")
    .setHelpText("e.g. 8.45 CGPA or 82%")
    .setRequired(true);

  // 8. Preferred Username / Login ID (Optional)
  form.addTextItem()
    .setTitle("8. Preferred Username / Login ID (Optional)")
    .setHelpText("e.g. ACBMGECCSE01 or your custom username (leave blank to auto-generate)")
    .setRequired(false);

  // 9. Preferred Password (Optional)
  form.addTextItem()
    .setTitle("9. Preferred Portal Password (Optional)")
    .setHelpText("Your portal login password (leave blank for Default: Mentor@123)")
    .setRequired(false);

  // 10. Worked On
  form.addParagraphTextItem()
    .setTitle("10. Worked On")
    .setHelpText("Projects, technologies, or stacks you have worked on (e.g. Web Development, AI/ML Projects, Core Electronics, Robotics, Chat Apps)")
    .setRequired(true);

  // 11. Expertise In
  form.addTextItem()
    .setTitle("11. Expertise In")
    .setHelpText("Subjects or domains you can guide students in (e.g. BEU Semester Exams, C++, DSA, Python, Web Dev, GATE Prep, Placement Guidance)")
    .setRequired(true);

  // 12. Mentor Bio / Guidance Message
  form.addParagraphTextItem()
    .setTitle("12. Mentor Bio / Guidance Message")
    .setHelpText("Brief advice or bio for students (displayed on your official profile card on the website)")
    .setRequired(true);

  // 13. Student Mentorship Capacity
  form.addTextItem()
    .setTitle("13. How many students can you comfortably mentor without affecting your time?")
    .setHelpText("Even if you mentor only 5 students, quality guidance is what matters. Write the number of students you can comfortably handle (e.g. 5, 10, 25, etc.)")
    .setRequired(true);

  // 14. Voluntary Role Confirmation (Checkbox 1)
  form.addCheckboxItem()
    .setTitle("14. Voluntary Role Confirmation")
    .setChoiceValues([
      "I understand and agree that this is a 100% voluntary (unpaid) mentorship role to support Bihar engineering students."
    ])
    .setRequired(true);

  // 15. Mentorship Commitment (Checkbox 2)
  form.addCheckboxItem()
    .setTitle("15. Mentorship Commitment")
    .setChoiceValues([
      "I will mentor students genuinely and properly."
    ])
    .setRequired(true);

  // ═════════════════════════════════════════════════════════════════════════════
  // LINK TO GOOGLE SHEET FOR RESPONSES
  // ═════════════════════════════════════════════════════════════════════════════
  const sheetName = "Apna College Bihar - Mentor Applications (Responses)";
  const spreadsheet = SpreadsheetApp.create(sheetName);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());

  // ═════════════════════════════════════════════════════════════════════════════
  // SUMMARY & OUTPUT LOGS
  // ═════════════════════════════════════════════════════════════════════════════
  const editUrl = form.getEditUrl();
  const publishedUrl = form.getPublishedUrl();
  const sheetUrl = spreadsheet.getUrl();

  Logger.log("==================================================================");
  Logger.log("🎉 SUCCESS: Apna College Bihar Mentor Google Form Created!");
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
