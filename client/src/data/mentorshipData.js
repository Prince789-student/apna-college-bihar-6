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
    role: 'Student Mentor',
    college: 'Government Engineering College, Sheikhpura',
    branch: 'CSE',
    branchLabel: 'CSE',
    cgpa: '7.45',
    workedOn: 'web development',
    expertiseIn: 'gate student and fronted dev',
    avatar: '',
    phone: 'ACBMGECCSESHK01',
    username: 'ACBMGECCSESHK01',
    mobile: '9117242808',
    password: 'SUB@2006',
    email: 'subhashkumar911724@gmail.com',
    meetLink: '',
    specialties: ['Web Development', 'Frontend Dev', 'GATE Prep'],
    bio: 'Government Engineering College, Sheikhpura senior mentor.',
    capacity: 10
  },
  {
    id: 'mentor-cse-deepak',
    name: 'DEEPAK KUMAR MISHRA',
    role: 'Student Mentor',
    college: 'GEC Sheikhpura (2025-2029)',
    branch: 'CSE',
    branchLabel: 'CSE',
    cgpa: '7.4',
    workedOn: 'Web development',
    expertiseIn: 'DSA with CPP , C programming , DSA',
    avatar: '',
    phone: 'ACBMGECCSESHK02',
    username: 'ACBMGECCSESHK02',
    mobile: '7856030646',
    password: 'DEEPAK@2006',
    email: 'deepak0kr0mishra@gmail.com',
    meetLink: '',
    specialties: ['Web Development', 'DSA with C++', 'C Programming'],
    bio: 'Not a tutorial guy . Let your hand be dirty in bad code!',
    capacity: 10
  },
  {
    id: 'mentor-cse-shivam',
    name: 'SHIVAM KUMAR',
    role: 'Student Mentor',
    college: 'GEC Sheikhpura (2025-2029)',
    branch: 'CSE',
    branchLabel: 'CSE',
    cgpa: '8.35',
    workedOn: 'Web Dev , DSA',
    expertiseIn: 'Web Dev , DSA',
    avatar: '',
    phone: 'ACBMGECCSESHK03',
    username: 'ACBMGECCSESHK03',
    mobile: '9304742665',
    password: 'SHIVAM@2006',
    email: 'heyshiivam556@gmail.com',
    meetLink: '',
    specialties: ['Web Dev', 'DSA'],
    bio: 'Keep grinding',
    capacity: 6
  },
  {
    id: 'mentor-cse-piyush',
    name: 'PIYUSH',
    role: 'Student Mentor',
    college: 'Government Engineering College, Sheikhpura',
    branch: 'CSE',
    branchLabel: 'CSE',
    cgpa: '8.05',
    workedOn: 'Web development',
    expertiseIn: 'Beu semester',
    avatar: '',
    phone: 'ACBMGECCSESHK04',
    username: 'ACBMGECCSESHK04',
    mobile: '9263026782',
    password: 'PIYUSH@2006',
    email: 'piyushraj2903@gmail.com',
    meetLink: '',
    specialties: ['BEU Semester Guidance', 'Web Development'],
    bio: 'Government Engineering College, Sheikhpura senior mentor.',
    capacity: 5
  }
];

export const INITIAL_ENROLLED_STUDENTS = [
  {
    "id": "26EEE49",
    "timestamp": "04/09/2026 17:25:40",
    "email": "shivamraj8092@gmail.com",
    "name": "Rohit kumar",
    "whatsapp": "6206404658",
    "college": "Gaya College of Engineering (GCE), Gaya",
    "branch": "Electrical & Electronics Engineering",
    "branchCode": "EEE",
    "roll": "26/EEE/49",
    "password": "26ACBEEE01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Notes, lecture, placement information, how to score good cgpa",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26EEE49"
  },
  {
    "id": "26EEE18P",
    "timestamp": "04/09/2026 17:26:51",
    "email": "nandanipreyashi9@gmail.com",
    "name": "Nandani Preyashi",
    "whatsapp": "9241068744",
    "college": "Bakhtiyarpur College of Engineering, Bakhtiyarpur, Patna",
    "branch": "Electrical & Electronics Engineering",
    "branchCode": "EEE",
    "roll": "26EEE18P",
    "password": "26ACBEEE02",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), College aur extra-curricular activities manage karna, Placements/Internships ke liye abhi se tyari karna, cse and core nahin hian lekin coding sikhna hain",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Skills in cse and ai",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26EEE18P"
  },
  {
    "id": "26CSE63",
    "timestamp": "05/09/2026 00:42:20",
    "email": "himanshukumarsingh9931@gmail.com",
    "name": "Himanshu Kumar",
    "whatsapp": "7462982629",
    "college": "Gaya College of Engineering (GCE), Gaya",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26/CSE/63",
    "password": "26ACBCSE01",
    "goals": "Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Haan, mujhe thodi basic knowledge hai.",
    "mentorExpectations": "Placement and Internship",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSE63"
  },
  {
    "id": "26EEE68",
    "timestamp": "05/09/2026 00:44:59",
    "email": "kritianand01012008@gmail.com",
    "name": "KRITI ANAND",
    "whatsapp": "9934240606",
    "college": "Gaya College of Engineering (GCE), Gaya",
    "branch": "Electrical & Electronics Engineering",
    "branchCode": "EEE",
    "roll": "68",
    "password": "26ACBEEE03",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, College aur extra-curricular activities manage karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "CGPA",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26EEE68"
  },
  {
    "id": "26MC48",
    "timestamp": "05/09/2026 00:47:09",
    "email": "harshkumar.sahuka25@gmail.com",
    "name": "HARSH KUMAR SHARMA",
    "whatsapp": "9570437725",
    "college": "Gaya College of Engineering (GCE), Gaya",
    "branch": "Mathematics & Computing",
    "branchCode": "MC",
    "roll": "48",
    "password": "26ACBMC01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "9 cgpa",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26MC48"
  },
  {
    "id": "26CSE45",
    "timestamp": "05/09/2026 07:32:40",
    "email": "adityaraushan943094@gmail.com",
    "name": "Aditya Raushan",
    "whatsapp": "7632941081",
    "college": "Gaya College of Engineering (GCE), Gaya",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26/CSE/45",
    "password": "26ACBCSE02",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "guild",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSE45"
  },
  {
    "id": "26ECE21",
    "timestamp": "05/09/2026 09:10:12",
    "email": "rajpalkr586@gmail.com",
    "name": "Deepak Kumar",
    "whatsapp": "9940050839",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "21",
    "password": "26ACBECE01",
    "goals": "Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), cse and core nahin hian lekin coding sikhna hain",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Coding Sidhant h",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26ECE21"
  },
  {
    "id": "26CSE47",
    "timestamp": "05/09/2026 22:48:09",
    "email": "kumar.aryan22209@gmail.com",
    "name": "Aryan Kumar",
    "whatsapp": "8368352928",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26cse47",
    "password": "26ACBCSE03",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, College aur extra-curricular activities manage karna, Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Haan, mujhe thodi basic knowledge hai.",
    "mentorExpectations": "Just a bit guidance",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSE47"
  },
  {
    "id": "26CSE87",
    "timestamp": "06/09/2026 08:44:27",
    "email": "ak5976987@gmail.com",
    "name": "Abhishek kumar",
    "whatsapp": "9798773944",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "Cse87",
    "password": "26ACBCSE04",
    "goals": "Coding/Programming seekhna (C, C++, Java, Python, etc.)",
    "codingExperience": "Haan, mujhe thodi basic knowledge hai.",
    "mentorExpectations": "Coding aur Class syllabus maintain",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSE87"
  },
  {
    "id": "26CSE04",
    "timestamp": "06/09/2026 16:35:26",
    "email": "sanjana.7354@gmail.com",
    "name": "Sanjana Swaraj",
    "whatsapp": "8271901768",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26cse04",
    "password": "26ACBCSE05",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Haan, mujhe thodi basic knowledge hai.",
    "mentorExpectations": "Coding and cgpa",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSE04"
  },
  {
    "id": "26EEE11P",
    "timestamp": "06/09/2026 20:40:40",
    "email": "akritisarraf721@gmail.com",
    "name": "Akriti Sarraf",
    "whatsapp": "9288180662",
    "college": "Bakhtiyarpur College of Engineering, Bakhtiyarpur, Patna",
    "branch": "Electrical & Electronics Engineering",
    "branchCode": "EEE",
    "roll": "26EEE11P",
    "password": "26ACBEEE04",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), College aur extra-curricular activities manage karna, Placements/Internships ke liye abhi se tyari karna, cse and core nahin hian lekin coding sikhna hain",
    "codingExperience": "Haan, mujhe thodi basic knowledge hai.",
    "mentorExpectations": "Regarding how to get excellent cgpa ,where we can get detail notes ,pyq ,classes all according to requirements of beu .",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26EEE11P"
  },
  {
    "id": "26CSE55",
    "timestamp": "06/09/2026 22:08:35",
    "email": "patelji919961@gmail.com",
    "name": "Patel Ji",
    "whatsapp": "9199612480",
    "college": "Government Engineering College, Gopalganj",
    "branch": "Computer Science & Engineering (IOT & Cyber Security including Block Chain Technology)",
    "branchCode": "CSIOTBC",
    "roll": "26-cse-55",
    "password": "26ACBCSIOTBC01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), College aur extra-curricular activities manage karna, Placements/Internships ke liye abhi se tyari karna, cse and core nahin hian lekin coding sikhna hain",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Study",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSE55"
  },
  {
    "id": "26EE23",
    "timestamp": "06/09/2026 23:34:27",
    "email": "kishankrstroyai@gmail.com",
    "name": "Kishan kumar",
    "whatsapp": "6206324393",
    "college": "Government Engineering College, Jehanabad",
    "branch": "Electrical Engineering",
    "branchCode": "EE",
    "roll": "26/EE/23",
    "password": "26ACBEE01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), College aur extra-curricular activities manage karna, Placements/Internships ke liye abhi se tyari karna, cse and core nahin hian lekin coding sikhna hain",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Electrical engineering",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26EE23"
  },
  {
    "id": "W26503",
    "timestamp": "06/09/2026 23:38:50",
    "email": "princyraj271@gmail.com",
    "name": "Princy Raj",
    "whatsapp": "9931634898",
    "college": "Government Engineering College, West Champaran (Bettiah)",
    "branch": "Computer Science & Engineering (Cyber Security)",
    "branchCode": "CSCS",
    "roll": "W26503",
    "password": "26ACBCSCS01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), College aur extra-curricular activities manage karna, Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Haan, mujhe thodi basic knowledge hai.",
    "mentorExpectations": "Codings, skills, Hackathons, interships,Notes...",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "W26503"
  },
  {
    "id": "26ECE24",
    "timestamp": "07/09/2026 19:16:12",
    "email": "riyaisua1@gmail.com",
    "name": "Riya Kumari",
    "whatsapp": "9142899937",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26ece24",
    "password": "26ACBECE02",
    "goals": "Padhai me guidance (Achha CGPA kaise layein)",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Padhai related suggestions",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26ECE24"
  },
  {
    "id": "26ECE29",
    "timestamp": "07/09/2026 19:53:04",
    "email": "sandhyarani892008@gmail.com",
    "name": "SANDHYA RANI",
    "whatsapp": "9942367962",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26ECE29",
    "password": "26ACBECE03",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Mujhe confidence chahiye jis se main bol sku kisi ke bhi samne conferencey....aur BEE subject kamjor hai mera",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26ECE29"
  },
  {
    "id": "26ECE46",
    "timestamp": "07/09/2026 21:06:38",
    "email": "nandanisubhanpur@gmail.com",
    "name": "Nandani kumari",
    "whatsapp": "9955560243",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering (Advance Communication Technology)",
    "branchCode": "ECEACT",
    "roll": "26Ece46",
    "password": "26ACBECEACT01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Kaha se padhai kare",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26ECE46"
  },
  {
    "id": "26ECE30",
    "timestamp": "08/09/2026 12:18:48",
    "email": "anubhutik37@gmail.com",
    "name": "Anubhuti Kumari",
    "whatsapp": "8709523241",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26ECE30",
    "password": "26ACBECE04",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Communication skills and syllabus",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26ECE30"
  },
  {
    "id": "26CSE113",
    "timestamp": "08/09/2026 15:30:38",
    "email": "golujaykar4@gmail.com",
    "name": "Golu Raj",
    "whatsapp": "9162722680",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26Cse113",
    "password": "26ACBCSE06",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), College aur extra-curricular activities manage karna, Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Coding",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSE113"
  },
  {
    "id": "26CSEDS15",
    "timestamp": "10/09/2026 09:59:37",
    "email": "igodayush@gmail.com",
    "name": "Ayush Kumar",
    "whatsapp": "8252055886",
    "college": "Saharsa Engineering College, Saharsa",
    "branch": "Computer Science & Engineering (Data Science)",
    "branchCode": "CSDS",
    "roll": "26-CSE-DS-15",
    "password": "26ACBCSDS01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), College aur extra-curricular activities manage karna",
    "codingExperience": "Haan, mujhe thodi basic knowledge hai.",
    "mentorExpectations": "Semester prep and skill development.",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSEDS15"
  },
  {
    "id": "26EEE14P",
    "timestamp": "10/09/2026 11:55:05",
    "email": "an6388172@gmail.com",
    "name": "Nishu Kumari",
    "whatsapp": "9241635946",
    "college": "Bakhtiyarpur College of Engineering, Bakhtiyarpur, Patna",
    "branch": "Electrical & Electronics Engineering",
    "branchCode": "EEE",
    "roll": "26eee14p",
    "password": "26ACBEEE05",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Guidance to  become better version of myself",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26EEE14P"
  },
  {
    "id": "26ECE32",
    "timestamp": "11/09/2026 19:27:31",
    "email": "khushnuma0575@gmail.com",
    "name": "Khushnuma perween",
    "whatsapp": "6200613246",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26ECE32",
    "password": "26ACBECE05",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Coding and Gate exam",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26ECE32"
  },
  {
    "id": "26CSE01",
    "timestamp": "14/09/2026 21:54:58",
    "email": "saziyakhanam90@gmail.com",
    "name": "Saziya Khanam",
    "whatsapp": "8521027432",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26CSE01",
    "password": "26ACBCSE07",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), College aur extra-curricular activities manage karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "In academic and also develop skills that can help me get jobs or intership easily",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSE01"
  },
  {
    "id": "26105110083",
    "timestamp": "15/09/2026 00:10:33",
    "email": "krsna72111@gmail.com",
    "name": "Krishna Raj",
    "whatsapp": "9905540052",
    "college": "Gaya College of Engineering (GCE), Gaya",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26105110083",
    "password": "26ACBCSE08",
    "goals": "Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), College aur extra-curricular activities manage karna, Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Haan, mujhe thodi basic knowledge hai.",
    "mentorExpectations": "Managing college syllabus with extra skills and sports",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26105110083"
  },
  {
    "id": "26CE123",
    "timestamp": "15/09/2026 08:53:26",
    "email": "ranveerrajprajapati@gmail.com",
    "name": "Ranvir kumar",
    "whatsapp": "7079212386",
    "college": "Government Engineering College, Jehanabad",
    "branch": "Civil Engineering",
    "branchCode": "CE",
    "roll": "26-CE-123",
    "password": "26ACBCE01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), College aur extra-curricular activities manage karna, Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Mujhe kya kaise taiyari Krna hai iska guidance chayie",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CE123"
  },
  {
    "id": "26CSE71",
    "timestamp": "15/09/2026 10:10:31",
    "email": "parikshitraj3105@gmail.com",
    "name": "Raushan raj",
    "whatsapp": "9006521022",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26CSE71",
    "password": "26ACBCSE09",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), Placements/Internships ke liye abhi se tyari karna, Learn leadership",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Coding and gate",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSE71"
  },
  {
    "id": "26408",
    "timestamp": "15/09/2026 14:05:50",
    "email": "kumari.rupam.rk0@gmail.com",
    "name": "Rupam Kumari",
    "whatsapp": "9229509645",
    "college": "Bhagalpur College of Engineering (BCE), Bhagalpur",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26408",
    "password": "26ACBECE06",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "I'm very uncomfortable to speak something infront of any senior faculty. I want to improve my communication skills. As I said I'm beginner so I have to face a lot of difficulty in bee, pps,ai, etc on other hand I didn't find a proper channel or playlist to study.",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26408"
  },
  {
    "id": "26ECE44",
    "timestamp": "15/09/2026 18:47:30",
    "email": "ayushsangam6@gmail.com",
    "name": "Ayush Singh",
    "whatsapp": "8235051716",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26ECE44",
    "password": "26ACBECE07",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.),",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Skill strong karne me basic to advance",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26ECE44"
  },
  {
    "id": "26ECE11",
    "timestamp": "15/09/2026 22:13:28",
    "email": "kshashiranjan1234@gmail.com",
    "name": "Ritik Raushan",
    "whatsapp": "8540814461",
    "college": "Government Engineering College, Sheikhpura",
    "branch": "Electronics & Communication Engineering",
    "branchCode": "ECE",
    "roll": "26ece11",
    "password": "26ACBECE08",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), College aur extra-curricular activities manage karna, Placements/Internships ke liye abhi se tyari karna, cse and core nahin hian lekin coding sikhna hain",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "How to study to maintain CGPA and from where ?",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26ECE11"
  },
  {
    "id": "26IOT37",
    "timestamp": "15/09/2026 22:17:41",
    "email": "classmateclg78@gmail.com",
    "name": "Dhanraj",
    "whatsapp": "9264568693",
    "college": "Government Engineering College, Vaishali",
    "branch": "Computer Science & Engineering (IoT)",
    "branchCode": "CSIOT",
    "roll": "37",
    "password": "26ACBCSIOT01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT), College aur extra-curricular activities manage karna, Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "About managing and investing my time on right direction",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26IOT37"
  },
  {
    "id": "26CS37",
    "timestamp": "22/09/2026 18:40:59",
    "email": "tanyasakshi04608@gmail.com",
    "name": "TANYA SAKSHI",
    "whatsapp": "6203840915",
    "college": "Nalanda College of Engineering (NCE), Chandi, Nalanda",
    "branch": "Computer Science & Engineering",
    "branchCode": "CSE",
    "roll": "26CS37",
    "password": "26ACBCSE10",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT)",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "First of all I need a brief intro about engineering.What are the filed and options available .And from where to study and also time management and what not to do",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CS37"
  },
  {
    "id": "26CSAI63",
    "timestamp": "22/09/2026 18:44:29",
    "email": "jhas7906@gmail.com",
    "name": "Sudhanshu Kumar Jha",
    "whatsapp": "6205892124",
    "college": "Government Engineering College, Gopalganj",
    "branch": "Computer Science & Engineering (AI)",
    "branchCode": "CSAI",
    "roll": "26-CSAI-63",
    "password": "26ACBCSAI01",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Core Branch skills seekhna (AutoCAD, MATLAB, Circuit Design, etc.), GATE/ESE ya Sarkari Naukri (Govt Jobs) ki abhi se tyari karna, Nayi tech skills explore karna (Web Dev, AI, App Dev, IoT)",
    "codingExperience": "Nahi, main bilkul beginner hoon.",
    "mentorExpectations": "Skills",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSAI63"
  },
  {
    "id": "26CSEIOT43",
    "timestamp": "23/09/2026 19:41:06",
    "email": "er.amankumar@zohomail.in",
    "name": "AMAN KUMAR",
    "whatsapp": "8521294277",
    "college": "Government Engineering College, Vaishali",
    "branch": "Computer Science & Engineering (IoT)",
    "branchCode": "CSIOT",
    "roll": "26CSE(IOT)43",
    "password": "26ACBCSIOT02",
    "goals": "Padhai me guidance (Achha CGPA kaise layein), Coding/Programming seekhna (C, C++, Java, Python, etc.), Placements/Internships ke liye abhi se tyari karna",
    "codingExperience": "Haan, mujhe thodi basic knowledge hai.",
    "mentorExpectations": "Coding guidance chahiye",
    "assignedMentorId": null,
    "status": "Active",
    "studentId": "26CSEIOT43"
  }
];

// Dedicated List for Removed / Inactive Students (Separate from Enrolled)
export const INITIAL_REMOVED_STUDENTS = [
  {
    "id": "26EEE50_REMOVED",
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
    "assignedMentorId": null,
    "status": "Inactive",
    "studentId": "26EEE50"
  },
  {
    "id": "26EEE44_REMOVED",
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
    "assignedMentorId": null,
    "status": "Inactive",
    "studentId": "26EEE44"
  },
  {
    "id": "26EEE11P_OLD_REMOVED",
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
    "mentorExpectations": "Regarding how to get excellent cgpa",
    "assignedMentorId": null,
    "status": "Inactive",
    "studentId": "26EEE11P_OLD"
  },
  {
    "id": "W26A33_OLD_REMOVED",
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
    "mentorExpectations": "Coding, skills, Hackathons",
    "assignedMentorId": null,
    "status": "Inactive",
    "studentId": "W26A33_OLD"
  },
  {
    "id": "26ECE46_OLD_REMOVED",
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
    "assignedMentorId": null,
    "status": "Inactive",
    "studentId": "26ECE46_OLD"
  },
  {
    "id": "26ECE20_OLD_REMOVED",
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
    "assignedMentorId": null,
    "status": "Inactive",
    "studentId": "26ECE20"
  },
  {
    "id": "26EEE14P_OLD_REMOVED",
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
    "assignedMentorId": null,
    "status": "Inactive",
    "studentId": "26EEE14P_OLD"
  },
  {
    "id": "26ECE08_OLD_REMOVED",
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
    "mentorExpectations": "Communication guidance",
    "assignedMentorId": null,
    "status": "Inactive",
    "studentId": "26ECE08"
  },
  {
    "id": "26IOT27_OLD_REMOVED",
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
    "assignedMentorId": null,
    "status": "Inactive",
    "studentId": "26IOT27"
  }
];

// Helper to get strictly Enrolled Students (localStorage persistent)
export function getEnrolledStudents() {
  try {
    // Purge old keys once to clear mixed state
    if (typeof window !== 'undefined' && window.localStorage) {
      ['beu_enrolled_students', 'beu_enrolled_students_v2', 'beu_enrolled_students_v3', 'beu_enrolled_students_v4', 'beu_enrolled_students_v5', 'beu_enrolled_students_v6', 'beu_enrolled_students_v7', 'beu_enrolled_students_v8', 'beu_enrolled_students_v9', 'beu_enrolled_students_v10', 'beu_enrolled_students_v11'].forEach(k => {
        try { localStorage.removeItem(k); } catch(e) {}
      });
    }
    const saved = localStorage.getItem('beu_enrolled_students_v12');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Exclude any removed or inactive student
        const clean = parsed.filter(s => s.status !== 'Removed' && s.status !== 'Inactive' && !s.removed && !s.id.includes('_REMOVED'));
        const existingIds = new Set(clean.map(s => s.id));
        const missing = INITIAL_ENROLLED_STUDENTS.filter(s => !existingIds.has(s.id));
        const combined = [...clean, ...missing];
        return combined.map(s => {
          let assigned = s.assignedMentorId;
          if (assigned === 'mentor-cse-1789726326697' || (assigned && assigned.toLowerCase().includes('deepak'))) {
            assigned = 'mentor-cse-deepak';
          } else if (assigned === 'mentor-cse-1789731436566' || (assigned && assigned.toLowerCase().includes('subhash'))) {
            assigned = 'mentor-cse-subhash';
          } else if (assigned && assigned.toLowerCase().includes('shivam')) {
            assigned = 'mentor-cse-shivam';
          } else if (assigned && assigned.toLowerCase().includes('piyush')) {
            assigned = 'mentor-cse-piyush';
          }
          return { ...s, assignedMentorId: assigned, status: 'Active' };
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
    const cleanActive = (students || []).filter(s => s.status !== 'Removed' && s.status !== 'Inactive' && !s.removed && !s.id.includes('_REMOVED'));
    localStorage.setItem('beu_enrolled_students_v12', JSON.stringify(cleanActive));
  } catch (e) {
    console.error('Error saving enrolled students:', e);
  }
}

// Helper to get strictly Inactive / Removed Students
export function getRemovedStudents() {
  try {
    const saved = localStorage.getItem('beu_removed_students_v12');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const existingIds = new Set(parsed.map(s => s.id));
        const missing = INITIAL_REMOVED_STUDENTS.filter(s => !existingIds.has(s.id));
        return [...parsed, ...missing].map(s => ({ ...s, status: 'Inactive' }));
      }
    }
  } catch (e) {
    console.error('Error reading removed/inactive students:', e);
  }
  return INITIAL_REMOVED_STUDENTS.map(s => ({ ...s, status: 'Inactive' }));
}

export function saveRemovedStudents(removed) {
  try {
    const cleanInactive = (removed || []).map(s => ({ ...s, status: 'Inactive' }));
    localStorage.setItem('beu_removed_students_v12', JSON.stringify(cleanInactive));
  } catch (e) {
    console.error('Error saving removed/inactive students:', e);
  }
}


// Helper to get mentors (localStorage persistent, deduplicated)
export function getMentorsList() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      ['beu_mentors_list', 'beu_mentors_list_v2', 'beu_mentors_list_v3', 'beu_mentors_list_v4', 'beu_mentors_list_v5'].forEach(k => {
        try { localStorage.removeItem(k); } catch(e) {}
      });
    }
    const saved = localStorage.getItem('beu_mentors_list_v6');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const unique = new Map();
        parsed.forEach(m => {
          const isDeepak = (m.name || '').toLowerCase().includes('deepak');
          const isSubhash = (m.name || '').toLowerCase().includes('subhash') || (m.name || '').toLowerCase().includes('golu');
          const isShivam = (m.name || '').toLowerCase().includes('shivam');
          const isPiyush = (m.name || '').toLowerCase().includes('piyush');
          const key = isDeepak ? 'deepak' : (isSubhash ? 'subhash' : (isShivam ? 'shivam' : (isPiyush ? 'piyush' : m.id)));
          const canonicalId = isDeepak ? 'mentor-cse-deepak' : (isSubhash ? 'mentor-cse-subhash' : (isShivam ? 'mentor-cse-shivam' : (isPiyush ? 'mentor-cse-piyush' : m.id)));
          const avatarClean = (m.avatar && !m.avatar.includes('unsplash')) ? m.avatar : '';
          const cleaned = {
            ...m,
            id: canonicalId,
            name: isSubhash ? 'SUBHASH KUMAR' : (isShivam ? 'SHIVAM KUMAR' : (isPiyush ? 'PIYUSH' : (isDeepak ? 'DEEPAK KUMAR MISHRA' : m.name))),
            avatar: avatarClean,
            username: m.username || m.phone || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : (isShivam ? 'ACBMGECCSESHK03' : (isPiyush ? 'ACBMGECCSESHK04' : '')))),
            phone: m.phone || m.username || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : (isShivam ? 'ACBMGECCSESHK03' : (isPiyush ? 'ACBMGECCSESHK04' : '')))),
            mobile: m.mobile !== undefined && m.mobile !== '' ? m.mobile : (isDeepak ? '7856030646' : (isSubhash ? '9117242808' : (isShivam ? '9304742665' : (isPiyush ? '9263026782' : '')))),
            password: m.password || (isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : (isShivam ? 'SHIVAM@2006' : (isPiyush ? 'PIYUSH@2006' : 'Mentor@123')))),
            email: m.email || (isDeepak ? 'deepak0kr0mishra@gmail.com' : (isSubhash ? 'subhashkumar911724@gmail.com' : (isShivam ? 'heyshiivam556@gmail.com' : (isPiyush ? 'piyushraj2903@gmail.com' : ''))))
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
    localStorage.setItem('beu_mentors_list_v6', JSON.stringify(mentors));
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

// Search inactive/removed student by Username (Phone Number), Roll, Email, or Name
export function findInactiveStudent(query) {
  if (!query) return null;
  const qTrim = query.trim();
  const q = qTrim.toLowerCase().replace(/[\s\/-]/g, '');
  const digits = qTrim.replace(/\D/g, '');
  const last10 = digits.length >= 10 ? digits.slice(-10) : digits;
  
  const list = getRemovedStudents();
  
  return list.find(s => {
    const sId = (s.id || '').toLowerCase().replace(/[\s\/-]/g, '');
    const sStudentId = (s.studentId || '').toLowerCase().replace(/[\s\/-]/g, '');
    const sRoll = (s.roll || '').toLowerCase().replace(/[\s\/-]/g, '');

    if ((sId && sId === q) || (sStudentId && sStudentId === q)) return true;
    const sEmail = (s.email || '').toLowerCase();
    const sPhoneRaw = (s.whatsapp || '').replace(/\D/g, '');
    const sPhoneLast10 = sPhoneRaw.length >= 10 ? sPhoneRaw.slice(-10) : sPhoneRaw;
    const sName = (s.name || '').toLowerCase();
    
    if (last10 && last10.length >= 10 && sPhoneLast10 === last10) return true;
    if (digits && digits.length >= 6 && (sPhoneRaw === digits || sPhoneRaw.includes(digits))) return true;
    if (sRoll === q || sRoll.includes(q)) return true;
    if (sEmail === qTrim.toLowerCase()) return true;
    if (qTrim.length >= 4 && sName.includes(qTrim.toLowerCase())) return true;
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
    const inactiveStudent = findInactiveStudent(loginQuery);
    if (inactiveStudent) {
      return { 
        success: false, 
        isInactive: true,
        message: `Aapka mentorship account (${inactiveStudent.name}) filhal Inactive hai. Guidance access ke liye Admin se sampark karein.` 
      };
    }
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

    // 3. Fallback for Deepak Kumar Mishra, Subhash Kumar & Shivam Kumar
    if ((m.name || '').toLowerCase().includes('deepak')) {
      if (idQueryClean === 'acbmgeccseshk02' || idQueryClean === 'acbmgeccse02' || idQueryClean === '7856030646' || last10 === '7856030646' || idQuery === 'deepak0kr0mishra@gmail.com') return true;
    }
    if ((m.name || '').toLowerCase().includes('subhash') || (m.name || '').toLowerCase().includes('golu')) {
      if (idQueryClean === 'acbmgeccseshk01' || idQueryClean === 'acbmgeccse01' || idQueryClean === '9117242808' || last10 === '9117242808' || idQuery === 'subhashkumar911724@gmail.com') return true;
    }
    if ((m.name || '').toLowerCase().includes('shivam')) {
      if (idQueryClean === 'acbmgeccseshk03' || idQueryClean === 'acbmgeccse03' || idQueryClean === 'ugotshiivam' || idQueryClean === '9304742665' || last10 === '9304742665' || idQuery === 'heyshiivam556@gmail.com') return true;
    }
    if ((m.name || '').toLowerCase().includes('piyush')) {
      if (idQueryClean === 'acbmgeccseshk04' || idQueryClean === 'acbmgeccse04' || idQueryClean === '9263026782' || last10 === '9263026782' || idQuery === 'piyushraj2903@gmail.com') return true;
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
    const isSubhash = (mentor.name || '').toLowerCase().includes('subhash') || (mentor.name || '').toLowerCase().includes('golu');
    const isShivam = (mentor.name || '').toLowerCase().includes('shivam');
    const isPiyush = (mentor.name || '').toLowerCase().includes('piyush');
    const fallbackPass = isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : (isShivam ? 'SHIVAM@2006' : (isPiyush ? 'PIYUSH@2006' : 'Mentor@123')));
    const expected = (mentor.password || fallbackPass).trim();
    if (
      pass === expected || 
      pass.toLowerCase() === expected.toLowerCase() || 
      pass.toLowerCase() === 'deepak@2006' ||
      pass.toLowerCase() === 'sub@2006' ||
      pass.toLowerCase() === 'shivam@2006' ||
      pass.toLowerCase() === 'piyush@2006' ||
      pass === 'UGotShiivam' ||
      pass.toLowerCase() === 'ugotshiivam' ||
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
