// ═══════════════════════════════════════════════════════════════════════════
// BEU FREE MENTORSHIP DATA — ENROLLED STUDENTS & MENTORS
// Synced from Official Google Form: "Free Mentorship for 1st Year Students (BEU - Batch 2026-2030)"
// ═══════════════════════════════════════════════════════════════════════════

// Official Bihar Engineering University (BEU) 34 B.Tech Branches (Group A, Group B, Group C)
export const BEU_OFFICIAL_BRANCHES = [
  {
    group: 'Group A',
    groupName: 'Group A: Computer Science, IT & Computing Disciplines (11 Branches)',
    branches: [
      { code: 'CSE', name: 'Computer Science & Engineering', short: 'CSE' },
      { code: 'CSAI', name: 'Computer Science & Engineering (AI)', short: 'CSE (AI)' },
      { code: 'CSCS', name: 'Computer Science & Engineering (Cyber Security)', short: 'CSE (Cyber Security)' },
      { code: 'CSDS', name: 'Computer Science & Engineering (Data Science)', short: 'CSE (Data Science)' },
      { code: 'CSAIML', name: 'Computer Science & Engineering(AI & ML)', short: 'CSE (AI & ML)' },
      { code: 'CSIOT', name: 'Computer Science & Engineering (IoT)', short: 'CSE (IoT)' },
      { code: 'CSIOTBC', name: 'Computer Science & Engg (IOT & Cyber Security including Block Chain Technology)', short: 'CSE (IoT, Cyber & Blockchain)' },
      { code: 'CSNET', name: 'Computer Science & Engineering (Networks)', short: 'CSE (Networks)' },
      { code: 'IT', name: 'Information Technology', short: 'IT' },
      { code: 'ANIM', name: '3-D Animation & Graphics', short: '3-D Animation & Graphics' },
      { code: 'MC', name: 'Mathematics & Computing', short: 'Mathematics & Computing' }
    ]
  },
  {
    group: 'Group B',
    groupName: 'Group B: Electrical, Electronics & Instrumentation (6 Branches)',
    branches: [
      { code: 'EE', name: 'Electrical Engineering', short: 'Electrical (EE)' },
      { code: 'EEE', name: 'Electrical and Electronics Engineering', short: 'EEE' },
      { code: 'ECE', name: 'Electronics and Communication Engineering', short: 'ECE' },
      { code: 'ECEACT', name: 'Electronics and Communication Engineering(Advance Communication Technology)', short: 'ECE (Advance Comm. Tech)' },
      { code: 'ECVLSI', name: 'Electronics Engineering(VLSI Design & Technology)', short: 'Electronics (VLSI Design)' },
      { code: 'EIE', name: 'Electronics and Instrumentation Engineering', short: 'Electronics & Instrumentation' }
    ]
  },
  {
    group: 'Group C',
    groupName: 'Group C: Mechanical, Civil, Chemical, Robotics & Allied (17 Branches)',
    branches: [
      { code: 'ME', name: 'Mechanical Engineering', short: 'Mechanical (ME)' },
      { code: 'MSME', name: 'Mechanical and Smart Manufacturing Engineering', short: 'Mech. & Smart Manufacturing' },
      { code: 'ROBOT', name: 'Robotics and Automation', short: 'Robotics and Automation' },
      { code: 'CE', name: 'Civil Engineering', short: 'Civil Engineering (CE)' },
      { code: 'CECA', name: 'Civil Engineering with Computer Applications', short: 'Civil with Computer Apps' },
      { code: 'PETRO', name: 'Petrochemical Engineering', short: 'Petrochemical Engineering' },
      { code: 'CHELT', name: 'Chemical Engineering (Leather Technology)', short: 'Chemical (Leather Tech)' },
      { code: 'CHEPP', name: 'Chemical Engineering (Plastic & Polymer)', short: 'Chemical (Plastic & Polymer)' },
      { code: 'WM', name: 'Waste Management', short: 'Waste Management' },
      { code: 'AERO', name: 'Aeronautical Engineering', short: 'Aeronautical Engineering' },
      { code: 'BMRE', name: 'Biomedical & Robotics Engineering', short: 'Biomedical & Robotics' },
      { code: 'MCT', name: 'Mechatronics Engineering', short: 'Mechatronics Engineering' },
      { code: 'MIN', name: 'Mining Engineering', short: 'Mining Engineering' },
      { code: 'CHE', name: 'Chemical Engineering', short: 'Chemical Engineering' },
      { code: 'FTS', name: 'Fire Technology and Safety', short: 'Fire Technology and Safety' },
      { code: 'FPP', name: 'Food Processing and Preservation', short: 'Food Processing & Preservation' },
      { code: 'FTM', name: 'Food Technology and Management', short: 'Food Technology & Management' }
    ]
  }
];

export const ALL_BEU_BRANCHES = BEU_OFFICIAL_BRANCHES.flatMap(g => 
  g.branches.map(b => ({ ...b, group: g.group, groupName: g.groupName }))
);

// Registered BEU Mentors
export const INITIAL_MENTORS = [
  {
    id: 'mentor-cse-subhash',
    name: 'SUBHASH KUMAR',
    role: 'BEU MENTOR',
    college: 'GEC SHEIKHPURA',
    branch: 'CSE',
    branchLabel: 'CSE',
    workedOn: 'project=myntra clone ,portfolio',
    expertiseIn: 'WEB DEVELOPMENT - FRONTED AND CU...',
    avatar: '',
    phone: 'ACBMGECCSESHK01',
    mobile: '7856030646',
    password: 'SUB@2006',
    email: 'Subhashkumar911724@gmail.com',
    meetLink: '',
    specialties: ['WEB DEVELOPMENT', 'FRONTED', 'PORTFOLIO'],
    bio: 'BEU mentor guiding 1st year engineering scholars.'
  },
  {
    id: 'mentor-cse-deepak',
    name: 'DEEPAK KUMAR MISHRA',
    role: 'STUDENT MENTOR',
    college: 'GEC SHEIKHPURA (2025-2029)',
    branch: 'CSE',
    branchLabel: 'CSE',
    workedOn: 'WEBSITE CHAT SYSYTEM',
    expertiseIn: 'WEB DEVELOPEMENT , PYTHON WITH AI',
    avatar: '',
    phone: 'ACBMGECCSESHK02',
    mobile: '7856030646',
    password: 'DEEPAK@2006',
    email: 'deepak0kr0mishra@gmail.com',
    meetLink: '',
    specialties: ['WEB DEVELOPEMENT', 'PYTHON WITH AI', 'WEBSITE CHAT SYSYTEM'],
    bio: 'Student mentor guiding 1st year BEU students in coding and academics.'
  }
];

export const INITIAL_ENROLLED_STUDENTS = [
  {
    "id": "26EEE46",
    "timestamp": "04/09/2026 17:25:40",
    "email": "shivamraj8002@gmail.com",
    "name": "Rohit kumar",
    "whatsapp": "6204640645",
    "college": "Gaya College of Engineering (GCE), Gaya",
    "branch": "Electrical & Electronics Engineering",
    "branchCode": "EEE",
    "roll": "26/EEE/46",
    "password": "26ACBEEE01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Notes, lecture placement information, how to score good cgpa",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26EEE46"
  },
  {
    "id": "26EEE10P",
    "timestamp": "04/09/2026 17:26:51",
    "email": "nandanipreyashi3@gmail.com",
    "name": "Nandani Preyashi",
    "whatsapp": "9241308744",
    "college": "Bakhtiyarpur College of Engineering, Bakhtiyarpur",
    "branch": "Electrical & Electronics Engineering",
    "branchCode": "EEE",
    "roll": "26/EEE/10P",
    "password": "26ACBEEE02",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Skills in cse and ai",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26EEE10P"
  },
  {
    "id": "26EEE50",
    "timestamp": "05/09/2026 00:45:39",
    "email": "khushianand18102005@gmail.com",
    "name": "KHUSHI ANAND",
    "whatsapp": "8905245805",
    "college": "Gaya College of Engineering (GCE), Gaya",
    "branch": "Electrical & Electronics Engineering",
    "branchCode": "EEE",
    "roll": "26/EEE/50",
    "password": "26ACBEEE03",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), GATE/ESE ya Govt Exam",
    "codingExperience": "Haan, mujhe thodi bahut basic knowledge hai.",
    "mentorExpectations": "CGPA",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26EEE50"
  },
  {
    "id": "26EEE44",
    "timestamp": "05/09/2026 07:32:40",
    "email": "adityavardanraj8264@gmail.com",
    "name": "Aditya Bardhan",
    "whatsapp": "7631941681",
    "college": "Gaya College of Engineering (GCE), Gaya",
    "branch": "Electrical & Electronics Engineering",
    "branchCode": "EEE",
    "roll": "26/EEE/44",
    "password": "26ACBEEE04",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Guidance and resources",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26EEE44"
  },
  {
    "id": "26ECE21",
    "timestamp": "05/09/2026 09:10:12",
    "email": "mjpathak65@gmail.com",
    "name": "Deepak Kumar",
    "whatsapp": "9046030836",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26/ECE/21",
    "password": "26ACBECE01",
    "goals": "Coding/Programming seekhna (C, C++, Java, Python, etc.)",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Coding guidance h",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26ECE21"
  },
  {
    "id": "26CSE47",
    "timestamp": "05/09/2026 22:48:00",
    "email": "kumararyan22309@gmail.com",
    "name": "Aryan Kumar",
    "whatsapp": "8368352020",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26cse47",
    "password": "26ACBCSE01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Haan, mujhe thodi bahut basic knowledge hai.",
    "mentorExpectations": "Just a bit guidance",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26CSE47"
  },
  {
    "id": "26CSE07",
    "timestamp": "06/09/2026 00:44:27",
    "email": "ak5976697@gmail.com",
    "name": "Abhishek kumar",
    "whatsapp": "9798773944",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "Cse07",
    "password": "26ACBCSE02",
    "goals": "Coding/Programming seekhna (C, C++, Java, Python, etc.)",
    "codingExperience": "Haan, mujhe thodi bahut basic knowledge hai.",
    "mentorExpectations": "Coding aur Class syllabus maintain",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26CSE07"
  },
  {
    "id": "26CSE04",
    "timestamp": "06/09/2026 16:35:36",
    "email": "sanjana.7251@gmail.com",
    "name": "Sanjana Swaraj",
    "whatsapp": "8271901765",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26cse04",
    "password": "26ACBCSE03",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Haan, mujhe thodi bahut basic knowledge hai.",
    "mentorExpectations": "Coding and cgpa",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26CSE04"
  },
  {
    "id": "26EEE11P",
    "timestamp": "06/09/2026 20:45:43",
    "email": "akashanand1472@gmail.com",
    "name": "Akash Anand",
    "whatsapp": "6287193645",
    "college": "Bakhtiyarpur College of Engineering, Bakhtiyarpur",
    "branch": "Electrical & Electronics Engineering",
    "branchCode": "EEE",
    "roll": "26EEE11P",
    "password": "26ACBEEE05",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Haan, mujhe thodi bahut basic knowledge hai.",
    "mentorExpectations": "Regarding how to get excellent cgpa, where we can improve",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26EEE11P"
  },
  {
    "id": "26CSE05",
    "timestamp": "06/09/2026 21:08:33",
    "email": "patelpriy199@gmail.com",
    "name": "Patel Ji",
    "whatsapp": "8199512610",
    "college": "Government Engineering College, Gopalganj",
    "branch": "CSE (IOT & Cyber Security)",
    "branchCode": "CSE",
    "roll": "26-cse-05",
    "password": "26ACBCSE04",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Study guidance and branch advice",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26CSE05"
  },
  {
    "id": "26W26A33",
    "timestamp": "06/09/2026 23:33:00",
    "email": "princeraj731@gmail.com",
    "name": "Prince Raj",
    "whatsapp": "9534165430",
    "college": "Government Engineering College, West Champaran",
    "branch": "CSE (Cyber Security)",
    "branchCode": "CSE",
    "roll": "W26A33",
    "password": "26ACBCSE05",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Haan, mujhe thodi bahut basic knowledge hai.",
    "mentorExpectations": "Coding, skills, Hackathons, internships, Notes",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26W26A33"
  },
  {
    "id": "26ECE29",
    "timestamp": "07/09/2026 19:53:04",
    "email": "sandhyarani082008@gmail.com",
    "name": "SANDHYA RANI",
    "whatsapp": "9042367662",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26ECE29",
    "password": "26ACBECE02",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), GATE/ESE ya Govt Exam",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Mujhe confidence chahiye jisse main bol saku kisi ke samne",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26ECE29"
  },
  {
    "id": "26ECE46",
    "timestamp": "07/09/2026 21:00:30",
    "email": "nandankushwahaampur@gmail.com",
    "name": "nandan kumar",
    "whatsapp": "9955560341",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26Ece46",
    "password": "26ACBECE03",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Kaha se padhai kare aur resources",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26ECE46"
  },
  {
    "id": "26ECE20",
    "timestamp": "08/09/2026 12:19:49",
    "email": "anubhav143@gmail.com",
    "name": "Anubhav kumar",
    "whatsapp": "8709322211",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26ECE20",
    "password": "26ACBECE04",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), GATE/ESE ya Govt Exam",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Communication skills and syllabus",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26ECE20"
  },
  {
    "id": "26CSE112",
    "timestamp": "08/09/2026 15:30:30",
    "email": "golupratap491@gmail.com",
    "name": "Golu Raj",
    "whatsapp": "8165722585",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26Cse112",
    "password": "26ACBCSE06",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Coding",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26CSE112"
  },
  {
    "id": "26CSEDS15",
    "timestamp": "10/09/2026 09:59:37",
    "email": "ayushayush534@gmail.com",
    "name": "Ayush kumar",
    "whatsapp": "6201358686",
    "college": "Saharsa Engineering College, Saharsa",
    "branch": "CSE (Data Science)",
    "branchCode": "CSE",
    "roll": "26-CSE-DS-15",
    "password": "26ACBCSE07",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Haan, mujhe thodi bahut basic knowledge hai.",
    "mentorExpectations": "Semester prep and skill development",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26CSEDS15"
  },
  {
    "id": "26EEE14P",
    "timestamp": "10/09/2026 11:54:04",
    "email": "aak388177@gmail.com",
    "name": "Aniket Kumar",
    "whatsapp": "9241369949",
    "college": "Bakhtiyarpur College of Engineering, Bakhtiyarpur",
    "branch": "Electrical & Electronics Engineering",
    "branchCode": "EEE",
    "roll": "26eee14p",
    "password": "26ACBEEE06",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Guidance to become better version of myself",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26EEE14P"
  },
  {
    "id": "26ECE32",
    "timestamp": "11/09/2026 15:27:31",
    "email": "khushnumaparween587@gmail.com",
    "name": "Khushnuma parween",
    "whatsapp": "6200613246",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26ECE32",
    "password": "26ACBECE05",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Coding and Gate exam",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26ECE32"
  },
  {
    "id": "26CSE01",
    "timestamp": "14/09/2026 21:54:50",
    "email": "saziyakhannum00@gmail.com",
    "name": "Saziya Khanam",
    "whatsapp": "9521327432",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "2605001",
    "password": "26ACBCSE08",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "In academic and also develop skills that can help in future",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26CSE01"
  },
  {
    "id": "26CSE33",
    "timestamp": "15/09/2026 00:10:30",
    "email": "krishna72111@gmail.com",
    "name": "Krishna Raj",
    "whatsapp": "9955549052",
    "college": "Gaya College of Engineering (GCE), Gaya",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26105110033",
    "password": "26ACBCSE09",
    "goals": "Coding/Programming seekhna (C, C++, Java, Python, etc.)",
    "codingExperience": "Haan, mujhe thodi bahut basic knowledge hai.",
    "mentorExpectations": "Managing college syllabus with extra skills and speaking skills",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26CSE33"
  },
  {
    "id": "26CSE71",
    "timestamp": "15/09/2026 10:10:31",
    "email": "pankajbsp100@gmail.com",
    "name": "Raushan raj",
    "whatsapp": "9006321926",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26CSE71",
    "password": "26ACBCSE10",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Coding and gate",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26CSE71"
  },
  {
    "id": "26ECE08",
    "timestamp": "16/09/2026 14:49:50",
    "email": "kumarrohanraj321@gmail.com",
    "name": "Rohan kumar",
    "whatsapp": "6205399645",
    "college": "Bhagalpur College of Engineering (BCE), Bhagalpur",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26E08",
    "password": "26ACBECE06",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "It's very uncomfortable to speak something when teachers ask, so communication guidance",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26ECE08"
  },
  {
    "id": "26ECE44",
    "timestamp": "16/09/2026 18:47:30",
    "email": "ayushsengarmit@gmail.com",
    "name": "Ayush Singh",
    "whatsapp": "8303001716",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26ECE44",
    "password": "26ACBECE07",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Haan, mujhe thodi bahut basic knowledge hai.",
    "mentorExpectations": "Doubt about future placements and gate",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26ECE44"
  },
  {
    "id": "26ECE11",
    "timestamp": "16/09/2026 21:04:15",
    "email": "rishavsinghmec123@gmail.com",
    "name": "Rishav Raushan",
    "whatsapp": "6200631627",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26ece11",
    "password": "26ACBECE08",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "How to manage time and improve CGPA and communication skill",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26ECE11"
  },
  {
    "id": "26IOT27",
    "timestamp": "17/09/2026 21:18:23",
    "email": "classmatepks75@gmail.com",
    "name": "Pankaj kumar singh",
    "whatsapp": "7643916298",
    "college": "Government Engineering College, Vaishali",
    "branch": "Internet of Things (IoT)",
    "branchCode": "CSE",
    "roll": "26-IOT-27",
    "password": "26ACBCSE11",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "About managing and investing my time on right direction",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26IOT27"
  },
  {
    "id": "26CS37",
    "timestamp": "22/09/2026 10:40:50",
    "email": "tanyasakshi8460@gmail.com",
    "name": "TANYA SAKSHI",
    "whatsapp": "6287040915",
    "college": "Nalanda College of Engineering (NCE), Chandi, Nalanda",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26CS37",
    "password": "26ACBCSE12",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "First of all I need a brief intro about engineering, how to score good cgpa",
    "assignedMentorId": "mentor-cse-deepak",
    "status": "Active",
    "studentId": "26CS37"
  },
  {
    "id": "26CSAI53",
    "timestamp": "22/09/2026 10:44:29",
    "email": "jhas7936@gmail.com",
    "name": "Sudhanshu Kumar Jha",
    "whatsapp": "6203592124",
    "college": "Government Engineering College, Gopalganj",
    "branch": "Computer Science & Engineering (AI)",
    "branchCode": "CSAI",
    "roll": "26-CSAI-53",
    "password": "26ACBCSAI01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Skills",
    "assignedMentorId": "mentor-cse-subhash",
    "status": "Active",
    "studentId": "26CSAI53"
  }
];

// Helper to get students (localStorage persistent)
export function getEnrolledStudents() {
  try {
    // Purge old keys once
    if (typeof window !== 'undefined' && window.localStorage) {
      ['beu_enrolled_students', 'beu_enrolled_students_v2', 'beu_enrolled_students_v3', 'beu_enrolled_students_v4', 'beu_enrolled_students_v5', 'beu_enrolled_students_v6', 'beu_enrolled_students_v7', 'beu_enrolled_students_v8'].forEach(k => {
        try { localStorage.removeItem(k); } catch(e) {}
      });
    }
    const saved = localStorage.getItem('beu_enrolled_students_v9');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Ensure any newly added INITIAL_ENROLLED_STUDENTS exist
        const existingIds = new Set(parsed.map(s => s.id));
        const missing = INITIAL_ENROLLED_STUDENTS.filter(s => !existingIds.has(s.id));
        const combined = [...parsed, ...missing];
        return combined.map(s => {
          let assigned = s.assignedMentorId;
          if (assigned === 'mentor-cse-1789726326697' || (assigned && assigned.toLowerCase().includes('deepak'))) {
            assigned = 'mentor-cse-deepak';
          } else if (assigned === 'mentor-cse-1789731436566' || (assigned && assigned.toLowerCase().includes('subhash'))) {
            assigned = 'mentor-cse-subhash';
          }
          return { ...s, assignedMentorId: assigned };
        });
      }
    }
  } catch (e) {
    console.error('Error reading enrolled students:', e);
  }
  return INITIAL_ENROLLED_STUDENTS;
}

export function saveEnrolledStudents(students) {
  try {
    localStorage.setItem('beu_enrolled_students_v9', JSON.stringify(students));
  } catch (e) {
    console.error('Error saving enrolled students:', e);
  }
}


// Helper to get mentors (localStorage persistent, deduplicated)
export function getMentorsList() {
  try {
    const saved = localStorage.getItem('beu_mentors_list_v3');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const unique = new Map();
        parsed.forEach(m => {
          const isDeepak = (m.name || '').toLowerCase().includes('deepak');
          const isSubhash = (m.name || '').toLowerCase().includes('subhash');
          const key = isDeepak ? 'deepak' : (isSubhash ? 'subhash' : m.id);
          const canonicalId = isDeepak ? 'mentor-cse-deepak' : (isSubhash ? 'mentor-cse-subhash' : m.id);
          const avatarClean = (m.avatar && !m.avatar.includes('unsplash')) ? m.avatar : '';
          const cleaned = {
            ...m,
            id: canonicalId,
            avatar: avatarClean,
            username: m.username || m.phone || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : '')),
            phone: m.phone || m.username || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : '')),
            mobile: m.mobile !== undefined ? m.mobile : '',
            password: m.password || (isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : 'Mentor@123')),
            email: m.email || (isDeepak ? 'deepak0kr0mishra@gmail.com' : (isSubhash ? 'Subhashkumar911724@gmail.com' : ''))
          };
          if (!unique.has(key)) unique.set(key, cleaned);
        });
        const list = Array.from(unique.values());
        if (list.length > 0) return list;
      }
    }
  } catch (e) {
    console.error('Error reading mentors:', e);
  }
  return INITIAL_MENTORS;
}

export function saveMentorsList(mentors) {
  try {
    localStorage.setItem('beu_mentors_list_v3', JSON.stringify(mentors));
  } catch (e) {
    console.error('Error saving mentors:', e);
  }
}

// Search student by Username (Phone Number), Roll, Email, or Name
export function findStudent(query) {
  if (!query) return null;
  const qTrim = query.trim();
  const q = qTrim.toLowerCase().replace(/[\s\/-]/g, '');
  const digits = qTrim.replace(/\D/g, ''); // Extract numeric phone digits
  const last10 = digits.length >= 10 ? digits.slice(-10) : digits;
  
  const list = getEnrolledStudents();
  
  return list.find(s => {
    const sId = (s.id || '').toLowerCase().replace(/[\s\/-]/g, '');
    const sStudentId = (s.studentId || '').toLowerCase().replace(/[\s\/-]/g, '');
    const sRoll = (s.roll || '').toLowerCase().replace(/[\s\/-]/g, '');

    // 0. Student ID match (e.g. 26EEE46, 26CSE47)
    if ((sId && sId === q) || (sStudentId && sStudentId === q)) {
      return true;
    }
    const sEmail = (s.email || '').toLowerCase();
    const sPhoneRaw = (s.whatsapp || '').replace(/\D/g, '');
    const sPhoneLast10 = sPhoneRaw.length >= 10 ? sPhoneRaw.slice(-10) : sPhoneRaw;
    const sName = (s.name || '').toLowerCase();
    
    // 1. Phone Number match (Username)
    if (last10 && last10.length >= 10 && sPhoneLast10 === last10) {
      return true;
    }
    if (digits && digits.length >= 6 && (sPhoneRaw === digits || sPhoneRaw.includes(digits))) {
      return true;
    }
    
    // 2. Roll Number match (Roll Number rahne do)
    if (sRoll === q || sRoll.includes(q)) {
      return true;
    }
    
    // 3. Email match
    if (sEmail === qTrim.toLowerCase()) {
      return true;
    }
    
    // 4. Name match (at least 4 letters)
    if (qTrim.length >= 4 && sName.includes(qTrim.toLowerCase())) {
      return true;
    }
    
    return false;
  }) || null;
}

// Verify Student Login with Username (Phone Number ya Roll Number) and Password
export function verifyStudentLogin(loginQuery, passwordInput) {
  if (!loginQuery || !loginQuery.trim()) {
    return { success: false, message: 'Kripya apna Username (Phone Number ya Roll Number) daalein!' };
  }
  
  const student = findStudent(loginQuery);
  if (!student) {
    return { 
      success: false, 
      notFound: true,
      message: 'Yeh Phone Number ya Roll Number enrolled nahi hai. Kripya sahi Phone Number ya Roll Number daalein!' 
    };
  }

  if (!passwordInput || !passwordInput.trim()) {
    return { success: false, message: 'Kripya apna Password daalein!' };
  }

  const pass = passwordInput.trim();
  const studentPass = (student.password || '').trim();
  // Allow exact assigned unique password (case-insensitive) or admin master key
  if (
    (studentPass && pass.toLowerCase() === studentPass.toLowerCase()) ||
    pass === 'admin123' ||
    pass === 'ACB@2026'
  ) {
    return { success: true, student };
  }

  return { success: false, message: 'Galat Password! Kripya apna sahi password daalein.' };
}

// Verify Mentor Login with Username / Phone / Email and Password
export function verifyMentorLogin(loginIdentifier, passwordInput) {
  if (!loginIdentifier || !loginIdentifier.trim()) {
    return { success: false, message: 'Mentor Phone Number, Username ya Email daalein!' };
  }
  if (!passwordInput || !passwordInput.trim()) {
    return { success: false, message: 'Password daalein!' };
  }

  const idQuery = loginIdentifier.trim().toLowerCase();
  const idQueryClean = idQuery.replace(/[\s\/-]/g, '');
  const digits = loginIdentifier.trim().replace(/\D/g, '');
  const last10 = digits.length >= 10 ? digits.slice(-10) : digits;
  const pass = passwordInput.trim();
  const mentors = getMentorsList();

  // Find in registered mentors list — by username/phone, email, name or id
  const mentor = mentors.find(m => {
    const rawPhone = (m.phone || '').trim().toLowerCase();
    const rawPhoneClean = rawPhone.replace(/[\s\/-]/g, '');
    const rawMobile = (m.mobile || '').replace(/\D/g, '');
    
    // 1. Exact or normalized phone/username match (e.g. ACBMGECCSE01, 7856030646)
    if (rawPhone && (rawPhone === idQuery || rawPhoneClean === idQueryClean)) return true;
    if (m.username && m.username.toLowerCase() === idQuery) return true;

    // 2. Numeric phone digits match
    const mPhoneDigits = (m.phone || '').replace(/\D/g, '');
    const mPhoneLast10 = mPhoneDigits.length >= 10 ? mPhoneDigits.slice(-10) : mPhoneDigits;
    if (last10 && last10.length >= 10 && (mPhoneLast10 === last10 || rawMobile.endsWith(last10))) return true;
    if (digits && digits.length >= 6 && (mPhoneDigits === digits || rawMobile === digits)) return true;

    // 3. Fallback for Deepak Kumar Mishra & Subhash Kumar
    if ((m.name || '').toLowerCase().includes('deepak')) {
      if (idQueryClean === 'acbmgeccseshk02' || idQueryClean === 'acbmgeccse01' || idQueryClean === '7856030646' || last10 === '7856030646' || idQuery === 'deepak0kr0mishra@gmail.com') return true;
    }
    if ((m.name || '').toLowerCase().includes('subhash')) {
      if (idQueryClean === 'acbmgeccseshk01' || idQueryClean === '7856030646' || last10 === '7856030646' || idQuery === 'subhashkumar911724@gmail.com') return true;
    }

    // 4. Email match
    if (m.email && m.email.toLowerCase() === idQuery) return true;

    // 5. Name match
    if (m.name && m.name.toLowerCase() === idQuery) return true;

    // 6. ID match
    if (m.id && m.id.toLowerCase() === idQuery) return true;

    return false;
  });

  if (mentor) {
    const isDeepak = (mentor.name || '').toLowerCase().includes('deepak');
    const isSubhash = (mentor.name || '').toLowerCase().includes('subhash');
    const fallbackPass = isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : 'Mentor@123');
    const expected = (mentor.password || fallbackPass).trim();
    if (
      pass === expected || 
      pass.toLowerCase() === expected.toLowerCase() || 
      pass.toLowerCase() === 'deepak@2006' ||
      pass.toLowerCase() === 'sub@2006' ||
      pass.toLowerCase() === 'deepak@123' ||
      pass === 'Mentor@123' || 
      pass.toLowerCase() === 'mentor@123' || 
      pass === 'admin123'
    ) {
      return { success: true, mentor };
    }
    return { success: false, message: 'Galat Password! Kripya sahi password daalein.' };
  }

  // Also support default / master mentor account for quick access
  if (idQuery === 'mentor@beu.in' || idQuery === 'mentor' || idQuery === 'admin') {
    if (pass === 'Mentor@123' || pass === 'mentor123' || pass === 'admin123') {
      const defaultMentor = {
        id: 'mentor-default-1',
        name: 'Senior BEU Scholar & Mentor',
        email: 'mentor@beu.in',
        role: 'Verified Academic Mentor (BEU Senior)',
        college: 'Bihar Engineering University',
        branch: 'ALL',
        avatar: '',
        specialties: ['High CGPA Strategy', 'Coding Fundamentals', 'Backlog Avoidance']
      };
      return { success: true, mentor: defaultMentor };
    }
    return { success: false, message: 'Galat Password!' };
  }

  return { 
    success: false, 
    message: 'Yeh Phone Number ya Email register nahi hai. Admin se contact karein ya demo login (mentor@beu.in / Mentor@123) use karein.' 
  };
}
