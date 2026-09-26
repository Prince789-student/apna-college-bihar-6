import React, { useState, useEffect } from 'react';
import { 
  Users, UserPlus, GraduationCap, Award, Phone, 
  MessageCircle, Trash2, Search, Filter, Plus, 
  CheckCircle2, ExternalLink, RefreshCw, Star, 
  Calendar, Video, ShieldCheck, Mail, BookOpen, Clock,
  Copy, Download, Send, KeyRound, Eye, EyeOff, Check, Save, Sparkles, Camera, RotateCcw, Archive
} from 'lucide-react';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { 
  getEnrolledStudents, 
  saveEnrolledStudents, 
  getRemovedStudents,
  saveRemovedStudents,
  getMentorsList, 
  saveMentorsList,
  BEU_OFFICIAL_BRANCHES,
  ALL_BEU_BRANCHES
} from '../data/mentorshipData';
import { 
  fetchCloudMentorshipData, 
  saveCloudMentorshipData, 
  subscribeMentorshipUpdates 
} from '../services/mentorshipSync';

export default function AdminMentorship({ flash }) {
  const [students, setStudents] = useState([]); // Strictly Active Enrolled Students (33)
  const [removedStudents, setRemovedStudents] = useState([]); // Strictly Inactive Students (9)
  const [mentors, setMentors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [selectedCollege, setSelectedCollege] = useState('ALL');
  const [removedSearchQuery, setRemovedSearchQuery] = useState('');
  const [editingPhones, setEditingPhones] = useState({});
  const [editingRemovedPhones, setEditingRemovedPhones] = useState({});
  const [showAddMentorModal, setShowAddMentorModal] = useState(false);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);

  // Password Management State
  const [editingPasswords, setEditingPasswords] = useState({});
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [isCloudSaving, setIsCloudSaving] = useState(false);

  // Mentor Credentials Management State (Username, Mobile, Email, Password)
  const [editingMentorUsernames, setEditingMentorUsernames] = useState({});
  const [editingMentorMobiles, setEditingMentorMobiles] = useState({});
  const [editingMentorEmails, setEditingMentorEmails] = useState({});
  const [editingMentorPasswords, setEditingMentorPasswords] = useState({});
  const [visibleMentorPasswords, setVisibleMentorPasswords] = useState({});

  // New Mentor Form State
  const [mentorForm, setMentorForm] = useState({
    name: '',
    role: '',
    college: '',
    branch: 'CSE',
    workedOn: '',
    expertiseIn: '',
    avatar: '',
    username: '',
    phone: '',
    mobile: '',
    password: 'Mentor@123',
    email: '',
    meetLink: '',
    bio: ''
  });

  // Helper to compress uploaded mentor images to avoid Firestore doc size limit
  const compressImage = (file, callback) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = 256;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        callback(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  // Helper to auto-generate next password in format: 26ACB + BRANCH + 01, 02, 03...
  const getNextStudentPassword = (branchCode = 'CSE') => {
    const b = (branchCode || 'CSE').toUpperCase().trim();
    const branchStudents = (students || []).filter(s => {
      const sb = (s.branchCode || '').toUpperCase().trim();
      const sBranch = (s.branch || '').toUpperCase().trim();
      const sPass = (s.password || '').toUpperCase().trim();

      // Direct branch code match or password pattern match
      if (sb === b) return true;
      if (sPass.includes(`26ACB${b}`)) return true;

      // Group/Name match based on code
      if (b === 'CSE' && (sb === 'CSE' || sBranch === 'COMPUTER SCIENCE & ENGINEERING' || sBranch === 'COMPUTER SCIENCE AND ENGINEERING' || sBranch.includes('CSE'))) return true;
      if (b === 'CSAI' && (sBranch.includes('AI') && !sBranch.includes('AI & ML') && !sBranch.includes('AIML'))) return true;
      if (b === 'CSCS' && sBranch.includes('CYBER')) return true;
      if (b === 'CSDS' && sBranch.includes('DATA SCIENCE')) return true;
      if (b === 'CSAIML' && (sBranch.includes('AI & ML') || sBranch.includes('AIML'))) return true;
      if (b === 'CSIOT' && (sBranch.includes('IOT') && !sBranch.includes('CYBER'))) return true;
      if (b === 'CSIOTBC' && (sBranch.includes('BLOCK') || (sBranch.includes('IOT') && sBranch.includes('CYBER')))) return true;
      if (b === 'CSNET' && sBranch.includes('NETWORK')) return true;
      if (b === 'IT' && (sb === 'IT' || sBranch.includes('INFORMATION TECHNOLOGY'))) return true;
      if (b === 'ANIM' && (sBranch.includes('ANIMATION') || sBranch.includes('GRAPHIC'))) return true;
      if (b === 'MC' && (sBranch.includes('MATHEMATIC') || sBranch.includes('COMPUTING'))) return true;

      if (b === 'ECE' && (sb === 'ECE' || ((sBranch.includes('ELECTRONIC') || sBranch.includes('ECE')) && !sBranch.includes('ELECTRICAL') && !sBranch.includes('VLSI') && !sBranch.includes('INSTRUMENTATION') && !sBranch.includes('ADVANCE')))) return true;
      if (b === 'ECEACT' && (sBranch.includes('ADVANCE') || sBranch.includes('COMMUNICATION TECHNOLOGY'))) return true;
      if (b === 'ECVLSI' && sBranch.includes('VLSI')) return true;
      if (b === 'EIE' && (sBranch.includes('INSTRUMENTATION') || sb === 'EIE')) return true;
      if (b === 'EEE' && (sb === 'EEE' || sBranch.includes('ELECTRICAL & ELECTRONIC') || sBranch.includes('ELECTRICAL AND ELECTRONIC'))) return true;
      if (b === 'EE' && (sb === 'EE' || (sBranch.includes('ELECTRICAL') && !sBranch.includes('ELECTRONIC')))) return true;

      if (b === 'ME' && (sb === 'ME' || (sBranch.includes('MECHANICAL') && !sBranch.includes('SMART')))) return true;
      if (b === 'MSME' && (sBranch.includes('SMART') || sBranch.includes('MANUFACTURING'))) return true;
      if (b === 'ROBOT' && (sBranch.includes('ROBOT') && !sBranch.includes('BIOMEDICAL'))) return true;
      if (b === 'CE' && (sb === 'CE' || (sBranch.includes('CIVIL') && !sBranch.includes('COMPUTER')))) return true;
      if (b === 'CECA' && (sBranch.includes('CIVIL') && sBranch.includes('COMPUTER'))) return true;
      if (b === 'PETRO' && sBranch.includes('PETRO')) return true;
      if (b === 'CHELT' && sBranch.includes('LEATHER')) return true;
      if (b === 'CHEPP' && (sBranch.includes('PLASTIC') || sBranch.includes('POLYMER'))) return true;
      if (b === 'WM' && sBranch.includes('WASTE')) return true;
      if (b === 'AERO' && sBranch.includes('AERO')) return true;
      if (b === 'BMRE' && (sBranch.includes('BIOMEDICAL') || (sBranch.includes('BIO') && sBranch.includes('ROBOT')))) return true;
      if (b === 'MCT' && (sb === 'MCT' || sBranch.includes('MECHATRONIC'))) return true;
      if (b === 'MIN' && (sb === 'MIN' || sBranch.includes('MINING'))) return true;
      if (b === 'CHE' && (sb === 'CHE' || (sBranch.includes('CHEMICAL') && !sBranch.includes('LEATHER') && !sBranch.includes('PLASTIC') && !sBranch.includes('POLYMER')))) return true;
      if (b === 'FTS' && (sBranch.includes('FIRE') || sBranch.includes('SAFETY'))) return true;
      if (b === 'FPP' && (sBranch.includes('FOOD') && sBranch.includes('PRESERVATION'))) return true;
      if (b === 'FTM' && (sBranch.includes('FOOD') && sBranch.includes('MANAGEMENT'))) return true;

      return false;
    });

    let maxSeq = branchStudents.length;
    branchStudents.forEach(s => {
      const match = (s.password || '').toUpperCase().match(new RegExp(`26ACB${b}(\\d+)`));
      if (match) {
        const num = parseInt(match[1], 10);
        if (!isNaN(num) && num > maxSeq) {
          maxSeq = num;
        }
      }
    });

    const nextSeq = String(maxSeq + 1).padStart(2, '0');
    return `26ACB${b}${nextSeq}`;
  };

  // Helper to auto-detect branch code from roll number or text
  const detectBranchFromRoll = (rollText = '') => {
    const raw = (rollText || '').toUpperCase();
    if (!raw) return null;
    
    const priorityChecks = [
      { code: 'CSIOTBC', test: /CSIOTBC|BLOCK\s*CHAIN|IOT.*CYBER/i },
      { code: 'CSAIML', test: /CSAIML|AI\s*&?\s*ML|AIML/i },
      { code: 'ECEACT', test: /ECEACT|ADV.*COMM/i },
      { code: 'ECVLSI', test: /ECVLSI|VLSI/i },
      { code: 'CHELT', test: /CHELT|LEATHER/i },
      { code: 'CHEPP', test: /CHEPP|PLASTIC|POLYMER/i },
      { code: 'BMRE', test: /BMRE|BIOMED/i },
      { code: 'MSME', test: /MSME|SMART/i },
      { code: 'CECA', test: /CECA|CIVIL.*COMP/i },
      { code: 'ROBOT', test: /ROBOT/i },
      { code: 'PETRO', test: /PETRO/i },
      { code: 'CSCS', test: /CSCS|CYBER/i },
      { code: 'CSDS', test: /CSDS|DATA\s*SC/i },
      { code: 'CSAI', test: /CSAI|CSE.*AI\b/i },
      { code: 'CSIOT', test: /CSIOT|IOT/i },
      { code: 'CSNET', test: /CSNET|NETWORK/i },
      { code: 'ANIM', test: /ANIM|GRAPHIC/i },
      { code: 'AERO', test: /AERO/i },
      { code: 'EEE', test: /EEE|ELECTRICAL.*ELECTRONIC/i },
      { code: 'ECE', test: /ECE|ELECTRONIC/i },
      { code: 'EIE', test: /EIE|INSTRUMENT/i },
      { code: 'MCT', test: /MCT|MECHATRONIC/i },
      { code: 'MIN', test: /MIN|MINING/i },
      { code: 'FTS', test: /FTS|FIRE/i },
      { code: 'FPP', test: /FPP|FOOD.*PRES/i },
      { code: 'FTM', test: /FTM|FOOD.*MGT|FOOD.*MAN/i },
      { code: 'CHE', test: /CHE|CHEMICAL/i },
      { code: 'CSE', test: /CSE|COMP/i },
      { code: 'EE', test: /EE\b|ELECTRICAL/i },
      { code: 'CE', test: /CE\b|CIVIL/i },
      { code: 'ME', test: /ME\b|MECH/i },
      { code: 'IT', test: /IT\b|INFO/i },
      { code: 'MC', test: /\bMC\b|MATH/i },
      { code: 'WM', test: /\bWM\b|WASTE/i }
    ];

    for (const item of priorityChecks) {
      if (item.test.test(raw)) {
        return item.code;
      }
    }
    return null;
  };

  const getNextMentorUsername = (branch = 'CSE') => {
    const b = (branch || 'CSE').toUpperCase();
    const branchMentorsCount = (mentors || []).filter(m => (m.branch || '').toUpperCase() === b).length;
    const seq = String(branchMentorsCount + 1).padStart(2, '0');
    return `ACBM${b}${seq}`;
  };

  // New Student Form State
  const [studentForm, setStudentForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    college: 'Gaya College of Engineering (GCE), Gaya',
    branch: 'Computer Science & Engineering',
    branchCode: 'CSE',
    roll: '',
    studentId: '',
    password: '',
    goals: 'Padhai me guidance (Achha CGPA kaise layein)',
    codingExperience: 'Nahi, main bilkul beginner hoon.',
    mentorExpectations: 'Exam guidance and study roadmap'
  });

  useEffect(() => {
    loadData();
    const unsub = subscribeMentorshipUpdates(({ students: updatedStudents, removedStudents: updatedRemoved, mentors: updatedMentors }) => {
      if (updatedStudents && updatedStudents.length > 0) setStudents(updatedStudents);
      if (updatedRemoved && updatedRemoved.length > 0) setRemovedStudents(updatedRemoved);
      if (updatedMentors && updatedMentors.length > 0) setMentors(updatedMentors);
    });
    return () => unsub();
  }, []);

  const loadData = () => {
    setStudents(getEnrolledStudents());
    setRemovedStudents(getRemovedStudents());
    const rawMentors = getMentorsList();
    const unique = new Map();
    (rawMentors || []).forEach(m => {
      const isDeepak = (m.name || '').toLowerCase().includes('deepak');
      const isSubhash = (m.name || '').toLowerCase().includes('subhash') || (m.name || '').toLowerCase().includes('golu');
      const isShivam = (m.name || '').toLowerCase().includes('shivam');
      const isPiyush = (m.name || '').toLowerCase().includes('piyush');
      const key = isDeepak ? 'deepak' : (isSubhash ? 'subhash' : (isShivam ? 'shivam' : (isPiyush ? 'piyush' : m.id)));
      const canonicalId = isDeepak ? 'mentor-cse-deepak' : (isSubhash ? 'mentor-cse-subhash' : (isShivam ? 'mentor-cse-shivam' : (isPiyush ? 'mentor-cse-piyush' : m.id)));
      const cleanAvatar = (m.avatar && !m.avatar.includes('unsplash')) ? m.avatar : '';
      const cleanMentor = {
        ...m,
        id: canonicalId,
        name: isSubhash ? 'SUBHASH KUMAR' : (isShivam ? 'SHIVAM KUMAR' : (isPiyush ? 'PIYUSH' : (isDeepak ? 'DEEPAK KUMAR MISHRA' : m.name))),
        avatar: cleanAvatar,
        username: m.username || m.phone || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : (isShivam ? 'ACBMGECCSESHK03' : (isPiyush ? 'ACBMGECCSESHK04' : '')))),
        phone: m.phone || m.username || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : (isShivam ? 'ACBMGECCSESHK03' : (isPiyush ? 'ACBMGECCSESHK04' : '')))),
        mobile: m.mobile !== undefined && m.mobile !== '' ? m.mobile : (isDeepak ? '7856030646' : (isSubhash ? '9117242808' : (isShivam ? '9304742665' : (isPiyush ? '9263026782' : '')))),
        password: m.password || (isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : (isShivam ? 'SHIVAM@2006' : (isPiyush ? 'PIYUSH@2006' : 'Mentor@123')))),
        email: m.email || (isDeepak ? 'deepak0kr0mishra@gmail.com' : (isSubhash ? 'subhashkumar911724@gmail.com' : (isShivam ? 'heyshiivam556@gmail.com' : (isPiyush ? 'piyushraj2903@gmail.com' : ''))))
      };
      if (!unique.has(key)) unique.set(key, cleanMentor);
    });
    const sanitized = Array.from(unique.values());
    setMentors(sanitized);
    saveMentorsList(sanitized);

    // Also fetch latest cloud data
    fetchCloudMentorshipData().then(cloud => {
      if (cloud && cloud.students && cloud.students.length > 0) {
        setStudents(cloud.students);
      }
      if (cloud && cloud.removedStudents && cloud.removedStudents.length > 0) {
        setRemovedStudents(cloud.removedStudents);
      }
      if (cloud && cloud.mentors && cloud.mentors.length > 0) {
        const cloudUnique = new Map();
        (cloud.mentors || []).forEach(m => {
          const isDeepak = (m.name || '').toLowerCase().includes('deepak');
          const isSubhash = (m.name || '').toLowerCase().includes('subhash') || (m.name || '').toLowerCase().includes('golu');
          const isShivam = (m.name || '').toLowerCase().includes('shivam');
          const isPiyush = (m.name || '').toLowerCase().includes('piyush');
          const key = isDeepak ? 'deepak' : (isSubhash ? 'subhash' : (isShivam ? 'shivam' : (isPiyush ? 'piyush' : m.id)));
          const canonicalId = isDeepak ? 'mentor-cse-deepak' : (isSubhash ? 'mentor-cse-subhash' : (isShivam ? 'mentor-cse-shivam' : (isPiyush ? 'mentor-cse-piyush' : m.id)));
          const cleanAvatar = (m.avatar && !m.avatar.includes('unsplash')) ? m.avatar : '';
          const cleaned = {
            ...m,
            id: canonicalId,
            name: isSubhash ? 'SUBHASH KUMAR' : (isShivam ? 'SHIVAM KUMAR' : (isPiyush ? 'PIYUSH' : (isDeepak ? 'DEEPAK KUMAR MISHRA' : m.name))),
            avatar: cleanAvatar,
            username: m.username || m.phone || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : (isShivam ? 'ACBMGECCSESHK03' : (isPiyush ? 'ACBMGECCSESHK04' : '')))),
            phone: m.phone || m.username || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : (isShivam ? 'ACBMGECCSESHK03' : (isPiyush ? 'ACBMGECCSESHK04' : '')))),
            mobile: m.mobile !== undefined && m.mobile !== '' ? m.mobile : (isDeepak ? '7856030646' : (isSubhash ? '9117242808' : (isShivam ? '9304742665' : (isPiyush ? '9263026782' : '')))),
            email: m.email || (isDeepak ? 'deepak0kr0mishra@gmail.com' : (isSubhash ? 'subhashkumar911724@gmail.com' : (isShivam ? 'heyshiivam556@gmail.com' : (isPiyush ? 'piyushraj2903@gmail.com' : '')))),
            password: m.password || (isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : (isShivam ? 'SHIVAM@2006' : (isPiyush ? 'PIYUSH@2006' : 'Mentor@123'))))
          };
          if (!cloudUnique.has(key)) cloudUnique.set(key, cleaned);
        });
        const cloudSanitized = Array.from(cloudUnique.values());
        setMentors(cloudSanitized);
        saveMentorsList(cloudSanitized);
      }
    }).catch(() => {});
  };

  const handleManualCloudSync = async () => {
    setIsCloudSaving(true);
    await saveCloudMentorshipData(students, mentors, removedStudents);
    setIsCloudSaving(false);
    if (flash) flash('Mentorship Data successfully Cloud Sync ho gaya! Ab laptop aur mobile phone dono pe same dikhega. ☁️✅', 'suc');
  };

  const copyAllCredentials = () => {
    const targetList = students || [];
    const lines = targetList.map((s, idx) => 
      `${idx + 1}. ${s.name} | Username (Phone): ${s.whatsapp} | Roll: ${s.roll} | Branch: ${s.branchCode || s.branch} | Pass: ${s.password} | College: ${s.college}`
    ).join('\n');
    navigator.clipboard.writeText(lines);
    if (flash) flash(`Sabhi ${targetList.length} Active students ke Passwords clipboard me copy ho gaye!`, 'suc');
  };

  const downloadCSV = () => {
    const targetList = students || [];
    const headers = 'ID,Name,Username_Phone,Roll,Password,Branch,College,Email\n';
    const rows = targetList.map(s => 
      `"${s.id}","${s.name}","${s.whatsapp}","${s.roll}","${s.password}","${s.branchCode || s.branch}","${s.college}","${s.email}"`
    ).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BEU_Mentorship_Student_Credentials_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    if (flash) flash(`Credentials CSV file (${targetList.length} Active students) successfully download ho gayi!`, 'suc');
  };

  // Add Mentor Handler
  const handleAddMentor = async (e) => {
    e.preventDefault();
    if (!mentorForm.name.trim() || !mentorForm.college.trim()) {
      if (flash) flash('Mentor Name aur College zaroori hai!', 'err');
      return;
    }

    const specialtiesList = [
      ...(mentorForm.expertiseIn ? mentorForm.expertiseIn.split(',').map(s => s.trim()) : []),
      ...(mentorForm.workedOn ? mentorForm.workedOn.split(',').map(s => s.trim()) : [])
    ].filter(Boolean);

    const branch = (mentorForm.branch || 'CSE').toUpperCase();
    const branchMentorsCount = (mentors || []).filter(m => (m.branch || '').toUpperCase() === branch).length;
    const mentorSeq = String(branchMentorsCount + 1).padStart(2, '0');
    const autoMentorUsername = `ACBM${branch}${mentorSeq}`;

    const generatedUsername = (mentorForm.username || mentorForm.phone || autoMentorUsername).trim();
    const newMentor = {
      id: `mentor-${branch.toLowerCase()}-${Date.now()}`,
      name: mentorForm.name.trim(),
      role: mentorForm.role.trim() || 'Senior BEU Scholar & Mentor',
      college: mentorForm.college.trim(),
      branch: branch,
      branchLabel: branch,
      workedOn: mentorForm.workedOn.trim(),
      expertiseIn: mentorForm.expertiseIn.trim(),
      avatar: mentorForm.avatar.trim() || '',
      username: generatedUsername,
      phone: generatedUsername,
      mobile: (mentorForm.mobile || '').trim(),
      password: mentorForm.password.trim() || 'Mentor@123',
      email: mentorForm.email.trim() || `${mentorForm.name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'mentor'}@beu.in`,
      meetLink: '',
      specialties: specialtiesList.length > 0 ? specialtiesList : ['Academic Guidance', 'BEU Prep'],
      bio: mentorForm.bio.trim() || (mentorForm.workedOn ? `Worked on: ${mentorForm.workedOn}` : 'Experienced senior mentor.')
    };

    const updated = [newMentor, ...mentors];
    setMentors(updated);
    saveMentorsList(updated);
    await saveCloudMentorshipData(students, updated);
    setShowAddMentorModal(false);
    setMentorForm({
      name: '',
      role: '',
      college: '',
      branch: 'CSE',
      workedOn: '',
      expertiseIn: '',
      avatar: '',
      username: '',
      phone: '',
      mobile: '',
      password: 'Mentor@123',
      email: '',
      meetLink: '',
      bio: ''
    });

    if (flash) flash(`✅ Naya Mentor "${newMentor.name}" add ho gaya aur Cloud Sync ho gaya! 🚀`, 'suc');
  };

  // Delete Mentor Handler
  const handleDeleteMentor = (id) => {
    if (!window.confirm('Kya aap sach me is mentor ko remove karna chahte hain?')) return;
    const updated = mentors.filter(m => m.id !== id);
    setMentors(updated);
    saveMentorsList(updated);
    saveCloudMentorshipData(students, updated);
    if (flash) flash('Mentor remove ho gaya.');
  };

  // Update or Clear Google Meet Link dynamically
  const handleUpdateMentorMeetLink = (mentorId, newLink) => {
    const updated = mentors.map(m => m.id === mentorId ? { ...m, meetLink: (newLink || '').trim() } : m);
    setMentors(updated);
    saveMentorsList(updated);
    saveCloudMentorshipData(students, updated);
    if (newLink && newLink.trim()) {
      if (flash) flash('Google Meet link lag gaya! Students ko live join dikhega. 🔴', 'suc');
    } else {
      if (flash) flash('Google Meet link hata diya gaya! Meeting closed. ✅', 'suc');
    }
  };

  // Save Mentor Credentials (Username, Mobile, Email & Password)
  const handleSaveMentorCredentials = (mentorId) => {
    const currentMentor = mentors.find(m => m.id === mentorId);
    if (!currentMentor) return;

    const newUsername = editingMentorUsernames[mentorId] !== undefined ? editingMentorUsernames[mentorId].trim() : (currentMentor.username || currentMentor.phone || '');
    const newMobile = editingMentorMobiles[mentorId] !== undefined ? editingMentorMobiles[mentorId].trim() : (currentMentor.mobile || '');
    const newEmail = editingMentorEmails[mentorId] !== undefined ? editingMentorEmails[mentorId].trim() : (currentMentor.email || '');
    const newPassword = editingMentorPasswords[mentorId] !== undefined ? editingMentorPasswords[mentorId].trim() : (currentMentor.password || '');

    if (!newPassword) {
      if (flash) flash('Password khali nahi ho sakta!', 'err');
      return;
    }

    const updated = mentors.map(m => {
      if (m.id === mentorId) {
        return {
          ...m,
          username: newUsername,
          phone: newUsername, // keep in sync
          mobile: newMobile,
          email: newEmail,
          password: newPassword
        };
      }
      return m;
    });

    setMentors(updated);
    saveMentorsList(updated);
    saveCloudMentorshipData(students, updated);

    // Clear editing states for this mentor so view shows newly saved values
    setEditingMentorUsernames(prev => { const next = { ...prev }; delete next[mentorId]; return next; });
    setEditingMentorMobiles(prev => { const next = { ...prev }; delete next[mentorId]; return next; });
    setEditingMentorEmails(prev => { const next = { ...prev }; delete next[mentorId]; return next; });
    setEditingMentorPasswords(prev => { const next = { ...prev }; delete next[mentorId]; return next; });

    if (flash) flash(`Mentor "${currentMentor.name}" ki sabhi details (Username, Phone, Email, Password) successfully save ho gayi! ✅`, 'suc');
  };

  // Upload Mentor Photo
  const handleUploadMentorPhoto = (mentorId, file) => {
    if (!file) return;
    compressImage(file, (base64) => {
      const updated = mentors.map(m => m.id === mentorId ? { ...m, avatar: base64 } : m);
      setMentors(updated);
      saveMentorsList(updated);
      saveCloudMentorshipData(students, updated);
      if (flash) flash('Mentor photo successfully update ho gayi! 📸', 'suc');
    });
  };

  // Remove Mentor Photo (Nothing / Initials instead)
  const handleRemoveMentorPhoto = (mentorId) => {
    const updated = mentors.map(m => m.id === mentorId ? { ...m, avatar: '' } : m);
    setMentors(updated);
    saveMentorsList(updated);
    saveCloudMentorshipData(students, updated);
    if (flash) flash('Photo hata di gayi! Ab koi stock photo nahi dikhega. ✅', 'suc');
  };

  // 1-Click Copy Mentor Credentials
  const copyMentorCredentials = (m) => {
    const username = editingMentorUsernames[m.id] !== undefined ? editingMentorUsernames[m.id] : (m.username || m.phone || '');
    const mobile = editingMentorMobiles[m.id] !== undefined ? editingMentorMobiles[m.id] : (m.mobile || '');
    const email = editingMentorEmails[m.id] !== undefined ? editingMentorEmails[m.id] : (m.email || '');
    const pass = editingMentorPasswords[m.id] !== undefined ? editingMentorPasswords[m.id] : (m.password || '');
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.apnacollegebihar.online';
    const text = `Mentor: ${m.name}\nPortal: ${origin}/mentorship\nUsername: ${username}\nMobile: ${mobile || 'N/A'}\nEmail: ${email}\nPassword: ${pass}`;
    navigator.clipboard.writeText(text);
    if (flash) flash(`Mentor "${m.name}" ke credentials & phone copy ho gaye! 📋`, 'suc');
  };

  // Generate WhatsApp Share Link for Mentor
  const getMentorWhatsAppUrl = (m) => {
    const rawUsername = editingMentorUsernames[m.id] !== undefined ? editingMentorUsernames[m.id] : (m.username || m.phone || 'ACBMGECCSE01');
    const rawMobile = editingMentorMobiles[m.id] !== undefined ? editingMentorMobiles[m.id] : (m.mobile || '');
    const cleanMobile = rawMobile.replace(/\D/g, '');
    const pass = editingMentorPasswords[m.id] !== undefined ? editingMentorPasswords[m.id] : (m.password || 'Mentor@123');
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.apnacollegebihar.online';
    const portalUrl = `${origin}/mentorship`;

    const message = `Namaste ${m.name} ji! 👋\n\nApna College Bihar ke *Free BEU Mentorship Portal* me aapka Mentor Account successfully set ho gaya hai.\n\n🔗 *Portal Login Link:* ${portalUrl}\n👤 *Username:* ${rawUsername}\n📱 *Mobile:* ${rawMobile || 'Apna Registered Mobile'}\n🔑 *Login Password:* ${pass}\n\n*Portal me aap:*\n1️⃣ Apne assigned 1st-year students ki list check kar sakte hain.\n2️⃣ Google Meet link add/remove karke live guidance sessions le sakte hain.\n\nAap abhi login karke check kar lijiye!\n\nShukriya,\nApna College Bihar Team`;

    if (cleanMobile.length >= 10) {
      return `https://wa.me/91${cleanMobile.slice(-10)}?text=${encodeURIComponent(message)}`;
    }
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  };

  // Generate Direct Gmail Link for Mentor
  const getMentorGmailUrl = (m) => {
    const targetEmail = editingMentorEmails[m.id] !== undefined ? editingMentorEmails[m.id].trim() : (m.email || '');
    const rawUsername = editingMentorUsernames[m.id] !== undefined ? editingMentorUsernames[m.id] : (m.username || m.phone || '');
    const rawMobile = editingMentorMobiles[m.id] !== undefined ? editingMentorMobiles[m.id] : (m.mobile || '');
    const pass = editingMentorPasswords[m.id] !== undefined ? editingMentorPasswords[m.id] : (m.password || '');
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.apnacollegebihar.online';
    const portalUrl = `${origin}/mentorship`;

    const mobileLine = rawMobile ? `📱 Mobile: ${rawMobile}\n` : '';

    const subject = `🎓 ${m.name} Ji, Aapka Free BEU Mentor Portal Login ID & Password | Apna College Bihar`;
    const body = `Namaste ${m.name} Ji! 👋\n\nApna College Bihar ke official Free BEU Mentorship Portal me aapka Mentor Account successfully activate ho gaya hai.\n\nAapke Mentor Login Credentials:\n🔗 Portal Login Link: ${portalUrl}\n👤 Username (Login ID): ${rawUsername}\n${mobileLine}🔑 Login Password: ${pass}\n📧 Registered Email: ${targetEmail || 'Aapka Email'}\n\nMentor Portal me aap:\n1️⃣ Apne assigned 1st-year students ki list check kar sakte hain.\n2️⃣ Har student ka "Kya Padha, Kitna Padha" live study tracker record dekh sakte hain.\n3️⃣ Google Meet link add/remove karke live guidance sessions le sakte hain.\n\nAap abhi login karke check kar lijiye!\n\nWebsite: ${portalUrl} (Tab: "Mentor Login")\n\nShukriya,\nApna College Bihar Team`;

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Generate Direct Gmail & Email Link for Student (Professional English)
  const getStudentEmailUrl = (stu) => {
    let mentorName = 'Senior BEU Academic Mentor';
    const assignedId = (stu.assignedMentorId || '').toLowerCase();
    const assignedMentor = mentors.find(m => m.id === stu.assignedMentorId);

    if (assignedMentor) {
      mentorName = assignedMentor.name;
    } else if (assignedId.includes('deepak')) {
      mentorName = 'Deepak Kumar Mishra';
    } else if (assignedId.includes('subhash')) {
      mentorName = 'Subhash Kumar';
    } else if (stu.branchCode === 'CSE' || (stu.branch || '').toLowerCase().includes('computer') || (stu.branch || '').toLowerCase().includes('cse')) {
      mentorName = 'Deepak Kumar Mishra / Subhash Kumar';
    }

    const phoneLine = stu.whatsapp 
      ? `📱 Registered Phone:   ${stu.whatsapp} (Can also be used as Username)\n` 
      : '';

    const subject = 'Welcome to Free BEU Mentorship | Your Login Credentials - Apna College Bihar';
    const body = `Dear ${stu.name},

Welcome to the Free BEU Mentorship Program (Batch 2026-2030) by Apna College Bihar. 
Your mentorship account has been successfully activated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔐 YOUR LOGIN CREDENTIALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 Portal Link: https://www.apnacollegebihar.online/mentorship
🆔 Student ID:          ${stu.id || stu.studentId}
👤 Roll Number:        ${stu.roll}
${phoneLine}🔑 Password:           ${stu.password}
👨‍🏫 Assigned Mentor:    ${mentorName}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*(Note: You can log in using your Student ID, Roll Number, or registered Phone Number)*

What you get on the portal:
• Senior Academic Guidance: Direct roadmap to score 9+ CGPA in BEU semester exams.
• Daily Study Tracker: Log your daily study hours and topics to maintain consistency.
• Verified Study Resources: Free access to semester syllabus, curated notes, and PYQs.

Please log in using the link above to get started with your mentorship journey.

Warm regards,
Team Apna College Bihar
🌐 Website: https://www.apnacollegebihar.online`;

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(stu.email || '')}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Add Student Handler
  const handleAddStudent = async (e) => {
    e.preventDefault();
    const cleanRoll = (studentForm.roll || '').replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    const cleanPhone = (studentForm.whatsapp || '').replace(/\D/g, '');

    if (!studentForm.name.trim()) {
      if (flash) flash('Student Name bharna zaroori hai!', 'err');
      return;
    }
    if (!cleanRoll && !cleanPhone) {
      if (flash) flash('Roll Number ya Phone Number me se kam se kam ek zaroori hai! (Yehi unka Login ID banega)', 'err');
      return;
    }

    try {
      const branch = (studentForm.branchCode || 'CSE').toUpperCase();
      const autoPass = getNextStudentPassword(branch);
      // Student ID: roll number if provided, otherwise phone number
      const finalId = cleanRoll || cleanPhone;
      const finalPassword = (studentForm.password || '').trim() || autoPass;
      const branchObj = ALL_BEU_BRANCHES.find(b => b.code === branch);
      const branchFullName = studentForm.branch || (branchObj ? branchObj.name : branch);

      const matchedMentor = mentors.find(m => (m.branch || '').toUpperCase() === branch) || mentors[0];

      const newStudent = {
        id: finalId,
        studentId: finalId,
        timestamp: new Date().toLocaleString('en-IN'),
        email: (studentForm.email || '').trim(),
        name: studentForm.name.trim(),
        whatsapp: (studentForm.whatsapp || '').trim(),
        college: (studentForm.college || '').trim() || 'Bihar Engineering University College',
        branch: branchFullName,
        branchCode: branch,
        roll: (studentForm.roll || '').trim() || finalId,
        password: finalPassword,
        goals: (studentForm.goals || '').trim() || 'Padhai me guidance (Achha CGPA kaise layein)',
        codingExperience: studentForm.codingExperience || 'Nahi, main bilkul beginner hoon.',
        mentorExpectations: (studentForm.mentorExpectations || '').trim() || 'Exam guidance and study roadmap',
        assignedMentorId: studentForm.assignedMentorId || (matchedMentor ? matchedMentor.id : null),
        status: 'Active'
      };

      const updated = [newStudent, ...students.filter(s => s.id !== finalId)];
      setStudents(updated);
      saveEnrolledStudents(updated);
      await saveCloudMentorshipData(updated, mentors, removedStudents);
      setShowAddStudentModal(false);
      setStudentForm({
        name: '',
        email: '',
        whatsapp: '',
        college: 'Gaya College of Engineering (GCE), Gaya',
        branch: 'Computer Science & Engineering',
        branchCode: 'CSE',
        roll: '',
        studentId: '',
        password: '',
        goals: 'Padhai me guidance (Achha CGPA kaise layein)',
        codingExperience: 'Nahi, main bilkul beginner hoon.',
        mentorExpectations: 'Exam guidance and study roadmap',
        assignedMentorId: null
      });

      if (flash) flash(`✅ Naya Mentee "${newStudent.name}" jud gaya! ID: ${newStudent.id} | Password: ${newStudent.password} 🎓`, 'suc');
    } catch (err) {
      console.error('Error adding student:', err);
      if (flash) flash(`Student add karne me problem aayi: ${err.message}`, 'err');
    }
  };

  // Move Student to Inactive list (Mentorship Admin me safe rahega)
  const handleMoveToRemoved = async (id) => {
    if (!window.confirm('Kya aap is student ko "Inactive" me daalna chahte hain? (Data Mentorship Admin ke Inactive list me safe rahega)')) return;
    const target = students.find(s => s.id === id);
    if (!target) return;
    const updatedActive = students.filter(s => s.id !== id);
    const updatedRemoved = [{ ...target, status: 'Inactive' }, ...removedStudents.filter(s => s.id !== id)];
    setStudents(updatedActive);
    setRemovedStudents(updatedRemoved);
    saveEnrolledStudents(updatedActive);
    saveRemovedStudents(updatedRemoved);
    await saveCloudMentorshipData(updatedActive, mentors, updatedRemoved);
    if (flash) flash(`Student "${target.name}" ko Inactive section me daal diya gaya. Ye Mentorship Admin me hamesha safe rahega. ✅`, 'suc');
  };

  // Restore Student back to Active
  const handleRestoreStudent = async (id) => {
    const target = removedStudents.find(s => s.id === id);
    if (!target) return;
    const updatedRemoved = removedStudents.filter(s => s.id !== id);
    const updatedActive = [{ ...target, status: 'Active' }, ...students.filter(s => s.id !== id)];
    setStudents(updatedActive);
    setRemovedStudents(updatedRemoved);
    saveEnrolledStudents(updatedActive);
    saveRemovedStudents(updatedRemoved);
    await saveCloudMentorshipData(updatedActive, mentors, updatedRemoved);
    if (flash) flash(`Student "${target.name}" successfully Active list me restore ho gaya! 🚀`, 'suc');
  };

  // Permanent Delete Student (Admin only)
  const handlePermanentDelete = async (id) => {
    if (!window.confirm('WARNING: Kya aap is student ko permanently delete karna chahte hain?')) return;
    const updatedRemoved = removedStudents.filter(s => s.id !== id);
    setRemovedStudents(updatedRemoved);
    saveRemovedStudents(updatedRemoved);
    await saveCloudMentorshipData(students, mentors, updatedRemoved);
    if (flash) flash('Student permanently delete ho gaya.');
  };

  // Save phone number for removed or active student
  const handleSaveStudentPhone = async (studentId) => {
    const newPhone = editingPhones[studentId] !== undefined ? editingPhones[studentId] : editingRemovedPhones[studentId];
    if (!newPhone || !newPhone.trim()) {
      if (flash) flash('Phone number khali nahi ho sakta!', 'err');
      return;
    }
    const cleanPhone = newPhone.replace(/\D/g, '');
    
    let updatedActive = students;
    let updatedRemoved = removedStudents;

    if (students.some(s => s.id === studentId)) {
      updatedActive = students.map(s => s.id === studentId ? { ...s, whatsapp: cleanPhone } : s);
      setStudents(updatedActive);
    }
    if (removedStudents.some(s => s.id === studentId)) {
      updatedRemoved = removedStudents.map(s => s.id === studentId ? { ...s, whatsapp: cleanPhone } : s);
      setRemovedStudents(updatedRemoved);
    }

    saveEnrolledStudents(updatedActive);
    saveRemovedStudents(updatedRemoved);
    await saveCloudMentorshipData(updatedActive, mentors, updatedRemoved);
    setEditingPhones(prev => { const n = { ...prev }; delete n[studentId]; return n; });
    setEditingRemovedPhones(prev => { const n = { ...prev }; delete n[studentId]; return n; });
    if (flash) flash('Phone number successfully update ho gaya aur Cloud Sync ho gaya! 📱✅', 'suc');
  };

  // Assign Mentor to a student (Admin Controlled)
  const handleAssignMentor = async (studentId, mentorId) => {
    const updated = students.map(s => s.id === studentId ? { ...s, assignedMentorId: mentorId || null } : s);
    setStudents(updated);
    saveEnrolledStudents(updated);
    await saveCloudMentorshipData(updated, mentors, removedStudents);
    const assigned = mentors.find(m => m.id === mentorId);
    if (flash) {
      if (assigned) {
        flash(`Mentor "${assigned.name}" successfully assign ho gaye! Cloud pe update ho gaya. ✅`, 'suc');
      } else {
        flash('Student ka mentor assignment hata diya gaya (Pending). ✅', 'ok');
      }
    }
  };

  // Save edited password for a student
  const handleSavePassword = async (studentId) => {
    const newPass = editingPasswords[studentId];
    if (!newPass || newPass.trim() === '') {
      if (flash) flash('Password khali nahi ho sakta!', 'err');
      return;
    }
    const updated = students.map(s => s.id === studentId ? { ...s, password: newPass.trim() } : s);
    setStudents(updated);
    saveEnrolledStudents(updated);
    setEditingPasswords(prev => ({ ...prev, [studentId]: undefined }));
    await saveCloudMentorshipData(updated, mentors, removedStudents);
    if (flash) flash('Password successfully save ho gaya aur Cloud Sync ho gaya! ✅', 'suc');
  };

  // Unique Colleges for Active Students
  const collegesList = Array.from(new Set(students.map(s => s.college))).filter(Boolean);

  // Filtered Active Students for Section 2
  const filteredActiveStudents = students.filter(s => {
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery = !q || 
      (s.name || '').toLowerCase().includes(q) ||
      (s.roll || '').toLowerCase().includes(q) ||
      (s.college || '').toLowerCase().includes(q) ||
      (s.branch || '').toLowerCase().includes(q) ||
      (s.whatsapp || '').includes(q) ||
      (s.email || '').toLowerCase().includes(q);

    const matchesBranch = selectedBranch === 'ALL' || 
      s.branchCode === selectedBranch || 
      (s.branch || '').toUpperCase() === selectedBranch ||
      (s.branch || '').toUpperCase().includes(selectedBranch) ||
      (s.password || '').toUpperCase().includes(`26ACB${selectedBranch}`);
    const matchesCollege = selectedCollege === 'ALL' || s.college === selectedCollege;

    return matchesQuery && matchesBranch && matchesCollege;
  });

  // Filtered Removed Students for Section 3
  const filteredRemovedStudents = removedStudents.filter(s => {
    const q = removedSearchQuery.trim().toLowerCase();
    if (!q) return true;
    return (s.name || '').toLowerCase().includes(q) ||
      (s.roll || '').toLowerCase().includes(q) ||
      (s.college || '').toLowerCase().includes(q) ||
      (s.branch || '').toLowerCase().includes(q) ||
      (s.whatsapp || '').includes(q) ||
      (s.email || '').toLowerCase().includes(q);
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* ── Top Overview Stats ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
            <GraduationCap size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Enrolled</p>
            <p className="text-2xl font-[1000] text-slate-900">{students.length} Students</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Active Mentors</p>
            <p className="text-2xl font-[1000] text-slate-900">{mentors.length} Mentors</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Colleges Covered</p>
            <p className="text-2xl font-[1000] text-slate-900">{collegesList.length} Engineering Colleges</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Batch</p>
            <p className="text-xl font-[1000] text-slate-900">1st Year (2026-30)</p>
          </div>
        </div>
      </div>

      {/* ── Section 1: Mentors Management ── */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <ShieldCheck className="text-blue-600" size={22} /> BEU Mentors Management ({mentors.length})
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Yahan se aap naye mentors add kar sakte hain, existing mentors edit/delete kar sakte hain.
            </p>
          </div>

          <button 
            onClick={() => {
              setMentorForm({
                name: '',
                role: 'Senior BEU Scholar & Mentor',
                college: '',
                branch: 'CSE',
                workedOn: '',
                expertiseIn: '',
                avatar: '',
                username: getNextMentorUsername('CSE'),
                phone: '',
                mobile: '',
                password: 'Mentor@123',
                email: '',
                meetLink: '',
                bio: ''
              });
              setShowAddMentorModal(true);
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all self-start sm:self-auto"
          >
            <Plus size={16} /> Add New Mentor
          </button>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentors.map((m) => {
            const assignedStudentsCount = students.filter(s => s.assignedMentorId === m.id).length;

            return (
              <div key={m.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-blue-300 transition-all space-y-3 relative group">
                <button 
                  onClick={() => handleDeleteMentor(m.id)}
                  className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                  title="Remove mentor"
                >
                  <Trash2 size={16} />
                </button>

                <div className="flex items-center gap-3.5">
                  <div className="relative group/avatar shrink-0">
                    {m.avatar && !m.avatar.includes('unsplash') ? (
                      <img 
                        src={m.avatar} 
                        alt={m.name} 
                        className="w-14 h-14 rounded-xl object-cover border-2 border-blue-500 shadow-sm" 
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-base flex items-center justify-center border-2 border-blue-400 shadow-sm uppercase">
                        {m.name.split(' ').map(w => w[0]).join('').slice(0, 2) || 'BM'}
                      </div>
                    )}

                    {/* Change / Upload Photo Input */}
                    <input 
                      type="file" 
                      accept="image/*" 
                      id={`mentor-photo-input-${m.id}`}
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) handleUploadMentorPhoto(m.id, e.target.files[0]);
                      }}
                    />
                    <label 
                      htmlFor={`mentor-photo-input-${m.id}`}
                      className="absolute -bottom-1 -right-1 bg-white hover:bg-slate-100 text-slate-700 p-1 rounded-md border border-slate-300 shadow-xs cursor-pointer transition-all"
                      title="Photo upload ya change karein"
                    >
                      <Camera size={11} />
                    </label>

                    {/* Remove Photo if exists */}
                    {m.avatar && !m.avatar.includes('unsplash') && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMentorPhoto(m.id)}
                        className="absolute -top-1.5 -left-1.5 bg-rose-600 hover:bg-rose-700 text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px] shadow-xs"
                        title="Photo hatao (kuch nahi dikhega)"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="text-sm font-black text-slate-900">{m.name}</h3>
                      <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 font-black text-[9px] rounded uppercase">
                        {m.branch}
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-blue-600 line-clamp-1">{m.role}</p>
                    <p className="text-[10px] text-slate-500">{m.college}</p>
                  </div>
                </div>

                {/* Worked on & Expertise */}
                {(m.workedOn || m.expertiseIn || (m.specialties && m.specialties.length > 0)) && (
                  <div className="text-[11px] space-y-1 bg-white p-2.5 rounded-xl border border-slate-200/60">
                    {m.workedOn && (
                      <p className="text-slate-700 font-semibold truncate" title={m.workedOn}>
                        🛠️ <strong className="text-slate-900">Worked On:</strong> {m.workedOn}
                      </p>
                    )}
                    {m.expertiseIn && (
                      <p className="text-blue-700 font-semibold truncate" title={m.expertiseIn}>
                        💡 <strong className="text-blue-900">Expertise:</strong> {m.expertiseIn}
                      </p>
                    )}
                  </div>
                )}

                {/* Dynamic Google Meet Session Link (Add or Remove) */}
                {m.meetLink ? (
                  <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-black text-rose-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span> Live Meet Active
                      </span>
                      <button
                        type="button"
                        onClick={() => handleUpdateMentorMeetLink(m.id, '')}
                        className="text-[10px] font-black text-rose-600 hover:text-white hover:bg-rose-600 bg-white px-2 py-0.5 rounded border border-rose-300 transition-colors"
                        title="Live meeting link hatao"
                      >
                        Meet Link Hatao ✕
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] text-slate-600 font-mono truncate max-w-[170px]" title={m.meetLink}>
                        {m.meetLink}
                      </span>
                      <a
                        href={m.meetLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-0.5 bg-rose-600 hover:bg-rose-700 text-white rounded text-[10px] font-bold shrink-0 flex items-center gap-1"
                      >
                        <ExternalLink size={10} /> Open
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="p-2 bg-slate-100/80 rounded-xl flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1"><Video size={13} className="text-slate-400" /> No Meet Active</span>
                    <button
                      type="button"
                      onClick={() => {
                        const link = window.prompt(`Mentor "${m.name}" ke liye Google Meet Link daalein:`, 'https://meet.google.com/new');
                        if (link) handleUpdateMentorMeetLink(m.id, link);
                      }}
                      className="text-[10px] font-black text-indigo-700 hover:text-white hover:bg-indigo-600 bg-white px-2 py-0.5 rounded border border-slate-200 transition-colors"
                    >
                      + Lagao Meet Link
                    </button>
                  </div>
                )}

                {/* ── Mentor Login Credentials & 1-Click WhatsApp + Gmail Share ── */}
                {(() => {
                  const isDeepak = (m.name || '').toLowerCase().includes('deepak');
                  const isSubhash = (m.name || '').toLowerCase().includes('subhash');
                  const defaultUsername = isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : (m.username || m.phone || 'ACBMGECCSE01'));
                  const defaultPass = isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : (m.password || 'Mentor@123'));
                  const defaultEmail = isDeepak ? 'deepak0kr0mishra@gmail.com' : (isSubhash ? 'Subhashkumar911724@gmail.com' : (m.email || ''));
                  const defaultMobile = m.mobile || (isDeepak || isSubhash ? '7856030646' : '');

                  const currentUsername = editingMentorUsernames[m.id] !== undefined ? editingMentorUsernames[m.id] : (m.username || m.phone || defaultUsername);
                  const currentMobile = editingMentorMobiles[m.id] !== undefined ? editingMentorMobiles[m.id] : defaultMobile;
                  const currentEmail = editingMentorEmails[m.id] !== undefined ? editingMentorEmails[m.id] : (m.email || defaultEmail);
                  const currentPass = editingMentorPasswords[m.id] !== undefined ? editingMentorPasswords[m.id] : (m.password || defaultPass);
                  const isPassVisible = visibleMentorPasswords[m.id];

                  const hasCredChanges = 
                    (editingMentorUsernames[m.id] !== undefined && editingMentorUsernames[m.id] !== (m.username || m.phone || defaultUsername)) ||
                    (editingMentorMobiles[m.id] !== undefined && editingMentorMobiles[m.id] !== defaultMobile) ||
                    (editingMentorEmails[m.id] !== undefined && editingMentorEmails[m.id] !== (m.email || defaultEmail)) ||
                    (editingMentorPasswords[m.id] !== undefined && editingMentorPasswords[m.id] !== (m.password || defaultPass));

                  const cleanMobileDigits = currentMobile.replace(/\D/g, '');
                  const targetMobile = cleanMobileDigits.length >= 10 ? cleanMobileDigits.slice(-10) : cleanMobileDigits;
                  const targetEmail = currentEmail.trim();

                  return (
                    <div className="p-3.5 bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/60 rounded-xl border border-indigo-200/80 space-y-2.5 shadow-2xs">
                      <div className="flex items-center justify-between pb-1.5 border-b border-indigo-100">
                        <span className="text-[11px] font-black uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
                          <KeyRound size={13} className="text-indigo-600" /> Mentor Login Credentials
                        </span>
                        <button
                          type="button"
                          onClick={() => copyMentorCredentials(m)}
                          className="text-[10px] font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 bg-white hover:bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200 transition-all shadow-2xs"
                          title="Copy credentials & contact info"
                        >
                          <Copy size={11} /> Copy
                        </button>
                      </div>

                      {/* 1. Username (Login ID) */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-wider">
                          <span className="flex items-center gap-1"><KeyRound size={10} className="text-indigo-500" /> Username (Login ID):</span>
                          <span className="text-[9px] text-indigo-600 font-bold lowercase">portal login id</span>
                        </div>
                        <input
                          type="text"
                          value={currentUsername}
                          onChange={(e) => setEditingMentorUsernames(prev => ({ ...prev, [m.id]: e.target.value }))}
                          placeholder="e.g. ACBMGECCSESHK01"
                          className="w-full px-2.5 py-1.5 text-xs font-mono font-black text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-600 shadow-2xs"
                        />
                      </div>

                      {/* 2. Phone Number (Mobile / WhatsApp) — Dedicated Field */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-wider">
                          <span className="flex items-center gap-1"><Phone size={10} className="text-emerald-600" /> Phone Number (Mobile / WhatsApp):</span>
                          <span className="text-[9px] text-emerald-600 font-bold lowercase">contact / calling</span>
                        </div>
                        <input
                          type="tel"
                          value={currentMobile}
                          onChange={(e) => setEditingMentorMobiles(prev => ({ ...prev, [m.id]: e.target.value }))}
                          placeholder="e.g. 9117240000 ya 10-digit number"
                          className="w-full px-2.5 py-1.5 text-xs font-mono font-black text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 shadow-2xs"
                        />
                      </div>

                      {/* 3. Registered Email */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-wider">
                          <span className="flex items-center gap-1"><Mail size={10} className="text-rose-500" /> Mentor Email:</span>
                          <span className="text-[9px] text-rose-600 font-bold lowercase">gmail id</span>
                        </div>
                        <input
                          type="email"
                          value={currentEmail}
                          onChange={(e) => setEditingMentorEmails(prev => ({ ...prev, [m.id]: e.target.value }))}
                          placeholder="e.g. mentor@gmail.com"
                          className="w-full px-2.5 py-1.5 text-xs font-mono font-black text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-rose-500 shadow-2xs"
                        />
                      </div>

                      {/* 4. Password with Show/Hide toggle */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-wider">
                          <span className="flex items-center gap-1"><KeyRound size={10} className="text-indigo-500" /> Password:</span>
                          {hasCredChanges && (
                            <span className="text-[9px] text-amber-600 font-bold">Unsaved changes!</span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="relative flex-1">
                            <input
                              type={isPassVisible ? 'text' : 'password'}
                              value={currentPass}
                              onChange={(e) => setEditingMentorPasswords(prev => ({ ...prev, [m.id]: e.target.value }))}
                              placeholder="Password..."
                              className="w-full px-2.5 py-1.5 pr-7 text-xs font-mono font-black text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-600 shadow-2xs"
                            />
                            <button
                              type="button"
                              onClick={() => setVisibleMentorPasswords(prev => ({ ...prev, [m.id]: !prev[m.id] }))}
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                              title={isPassVisible ? 'Hide password' : 'Show password'}
                            >
                              {isPassVisible ? <EyeOff size={13} /> : <Eye size={13} />}
                            </button>
                          </div>

                          {hasCredChanges && (
                            <button
                              type="button"
                              onClick={() => handleSaveMentorCredentials(m.id)}
                              className="px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shrink-0 flex items-center gap-1 shadow-sm transition-all animate-pulse"
                              title="Save All Changes (Username, Phone, Email, Password)"
                            >
                              <Save size={12} /> Save
                            </button>
                          )}
                        </div>
                      </div>

                      {/* 1-Click Action Buttons: Gmail & WhatsApp */}
                      <div className="pt-1.5 space-y-1.5">
                        <a
                          href={getMentorGmailUrl(m)}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2 px-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-md shadow-red-500/20 transition-all hover:scale-[1.01]"
                          title={`Send Login ID & Password directly via Gmail to ${targetEmail || 'Mentor'}`}
                        >
                          <Mail size={14} /> Gmail Pe Bhejo ({targetEmail.split('@')[0] || 'Email'})
                        </a>

                        <a
                          href={getMentorWhatsAppUrl(m)}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01]"
                          title={`Send WhatsApp credentials to ${targetMobile || 'Mentor'}`}
                        >
                          <MessageCircle size={14} /> WhatsApp Share ({targetMobile || 'Mobile'})
                        </a>
                      </div>
                    </div>
                  );
                })()}

                <div className="pt-1 flex items-center justify-between text-[11px] font-semibold text-slate-600 border-t border-slate-200/60">
                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <Users size={13} /> {assignedStudentsCount} Students
                  </span>
                  <span className="flex items-center gap-1 text-slate-600 font-bold" title="Mentor Phone Number">
                    <Phone size={12} className="text-emerald-600" /> {m.mobile || m.phone || 'No phone set'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Section 2: Enrolled Students Directory ── */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <GraduationCap className="text-indigo-600" size={24} /> Active Enrolled Students Directory ({filteredActiveStudents.length})
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Google Form se registered sabhi 1st year active students ka complete database. Direct WhatsApp / Email credentials bhejein.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a 
              href="#removed-students-section"
              className="px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-xl text-xs font-black flex items-center gap-1.5 border border-amber-200 transition-all shadow-xs"
              title="Inactive students list par jump karein"
            >
              <Trash2 size={14} /> Inactive Section ({removedStudents.length})
            </a>

            <button 
              onClick={handleManualCloudSync}
              disabled={isCloudSaving}
              className="px-3.5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all disabled:opacity-50"
              title="Laptop aur Mobile dono me same mentees dikhane ke liye Cloud Sync karein"
            >
              <RefreshCw size={14} className={isCloudSaving ? "animate-spin" : ""} /> 
              {isCloudSaving ? 'Syncing...' : 'Sync Cloud (Laptop & Mobile)'}
            </button>

            <button 
              onClick={copyAllCredentials}
              className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-indigo-200 transition-all"
              title="Sabhi active students ke password clipboard me copy karein"
            >
              <Copy size={14} /> Copy All Passwords
            </button>

            <button 
              onClick={downloadCSV}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-slate-200 transition-all"
              title="Credentials CSV download karein"
            >
              <Download size={14} /> Download CSV
            </button>

            <button 
              onClick={() => {
                const defaultBranch = 'CSE';
                const nextPass = getNextStudentPassword(defaultBranch);
                setStudentForm({
                  name: '',
                  email: '',
                  whatsapp: '',
                  college: 'Gaya College of Engineering (GCE), Gaya',
                  branch: 'Computer Science & Engineering',
                  branchCode: defaultBranch,
                  roll: '',
                  studentId: '',
                  password: nextPass,
                  goals: 'Padhai me guidance (Achha CGPA kaise layein)',
                  codingExperience: 'Nahi, main bilkul beginner hoon.',
                  mentorExpectations: 'Exam guidance and study roadmap',
                  assignedMentorId: null
                });
                setShowAddStudentModal(true);
              }}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all"
            >
              <UserPlus size={15} /> + Enroll Student
            </button>
          </div>
        </div>

        {/* Active Students Counter Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-200/80 rounded-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-700">
              Showing <strong className="text-slate-900">{filteredActiveStudents.length} Active Mentees</strong> enrolled in BEU Mentorship.
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">
            Kisi ko remove karne ke liye Action column ke <Trash2 size={12} className="inline text-rose-500" /> icon par click karein.
          </span>
        </div>

        {/* Search & Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative sm:col-span-1">
            <input 
              type="text"
              placeholder="Search by Name, Roll, College, Phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 placeholder:font-normal placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          <div>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
            >
              <option value="ALL">All Branches ({ALL_BEU_BRANCHES.length} BEU Branches)</option>
              {BEU_OFFICIAL_BRANCHES.map(group => (
                <optgroup key={group.group} label={group.groupName}>
                  {group.branches.map(b => (
                    <option key={b.code} value={b.code}>
                      {b.code} - {b.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div>
            <select
              value={selectedCollege}
              onChange={(e) => setSelectedCollege(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600 truncate"
            >
              <option value="ALL">All Colleges ({collegesList.length})</option>
              {collegesList.map((col) => (
                <option key={col} value={col}>{col}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Students Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-2xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-wider text-slate-500">
              <tr>
                <th className="p-3.5">#</th>
                <th className="p-3.5">Student Details</th>
                <th className="p-3.5">Phone / WhatsApp Number (Accurate)</th>
                <th className="p-3.5">Roll No</th>
                <th className="p-3.5">Password</th>
                <th className="p-3.5">College & Branch</th>
                <th className="p-3.5">Send Credentials</th>
                <th className="p-3.5">Assigned Mentor</th>
                <th className="p-3.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredActiveStudents.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-8 text-center text-slate-400 text-xs">
                    Koi active student match nahi hua. Search filter check karein!
                  </td>
                </tr>
              ) : (
                filteredActiveStudents.map((stu, index) => {
                  const assignedMentor = mentors.find(m => m.id === stu.assignedMentorId);

                  return (
                    <tr key={stu.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-3.5 text-slate-400 font-bold">{index + 1}</td>
                      <td className="p-3.5">
                        <p className="font-black text-slate-900 text-xs">{stu.name}</p>
                        <p className="text-[10px] text-slate-400 font-mono">{stu.email}</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">
                            {stu.codingExperience?.includes('beginner') ? '🌱 Beginner' : '💻 Has Knowledge'}
                          </span>
                          <span className="inline-block text-[9px] px-1.5 py-0.5 rounded font-black bg-emerald-100 text-emerald-700">
                            ✅ Active
                          </span>
                        </div>
                      </td>
                      <td className="p-3.5">
                        <div className="flex items-center gap-1.5 min-w-[190px]">
                          <div className="relative flex-1">
                            <input
                              type="text"
                              value={editingPhones[stu.id] !== undefined ? editingPhones[stu.id] : (stu.whatsapp || '')}
                              onChange={(e) => setEditingPhones(prev => ({ ...prev, [stu.id]: e.target.value }))}
                              placeholder="Phone number..."
                              className="w-full px-2.5 py-1 text-xs font-mono font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                            />
                          </div>

                          {editingPhones[stu.id] !== undefined && editingPhones[stu.id] !== (stu.whatsapp || '') && (
                            <button
                              type="button"
                              onClick={() => handleSaveStudentPhone(stu.id)}
                              className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-[10px] font-bold shrink-0 shadow-xs transition-all animate-pulse flex items-center gap-1"
                              title="Save Phone Number"
                            >
                              <Save size={11} /> Save
                            </button>
                          )}

                          {stu.whatsapp && (
                            <a
                              href={`https://wa.me/91${stu.whatsapp.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors shrink-0 border border-emerald-200"
                              title={`Direct WhatsApp to ${stu.whatsapp}`}
                            >
                              <MessageCircle size={13} />
                            </a>
                          )}
                          {stu.whatsapp && (
                            <a
                              href={`tel:${stu.whatsapp.replace(/\D/g, '')}`}
                              className="p-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors shrink-0 border border-blue-200"
                              title={`Direct Call to ${stu.whatsapp}`}
                            >
                              <Phone size={13} />
                            </a>
                          )}
                        </div>
                      </td>
                      <td className="p-3.5">
                        <div className="space-y-1">
                          <span className="inline-block font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100 font-mono text-[11px]">
                            {stu.roll}
                          </span>
                          {(stu.id || stu.studentId) && (
                            <span className="block text-[10px] font-bold text-slate-500 font-mono">
                              ID: <strong className="text-slate-700">{stu.id || stu.studentId}</strong>
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-3.5">
                        <div className="flex items-center gap-1 min-w-[140px]">
                          <div className="relative flex-1">
                            <input
                              type={visiblePasswords[stu.id] ? 'text' : 'password'}
                              value={editingPasswords[stu.id] !== undefined ? editingPasswords[stu.id] : (stu.password || '')}
                              onChange={(e) => setEditingPasswords(prev => ({ ...prev, [stu.id]: e.target.value }))}
                              className="w-full px-2 py-1 pr-6 text-[11px] font-mono font-bold rounded-md border border-emerald-200 bg-emerald-50 text-emerald-800 focus:outline-none focus:border-blue-400 focus:bg-white transition-colors"
                              placeholder="New password..."
                            />
                            <button
                              type="button"
                              onClick={() => setVisiblePasswords(prev => ({ ...prev, [stu.id]: !prev[stu.id] }))}
                              className="absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                              title={visiblePasswords[stu.id] ? 'Hide' : 'Show'}
                            >
                              {visiblePasswords[stu.id] ? <EyeOff size={11} /> : <Eye size={11} />}
                            </button>
                          </div>
                          {editingPasswords[stu.id] !== undefined && editingPasswords[stu.id] !== (stu.password || '') && (
                            <button
                              type="button"
                              onClick={() => handleSavePassword(stu.id)}
                              className="flex-shrink-0 p-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                              title="Save Password"
                            >
                              <Save size={11} />
                            </button>
                          )}
                        </div>
                      </td>
                      <td className="p-3.5 max-w-[200px]">
                        <p className="font-bold text-slate-800 text-[11px] truncate" title={stu.college}>{stu.college}</p>
                        <p className="text-[10px] text-slate-500 font-medium truncate" title={stu.branch}>{stu.branch}</p>
                      </td>
                      <td className="p-3.5">
                        <div className="flex flex-col gap-1.5 min-w-[130px]">
                          {/* 1-Click Direct Email with pre-filled English Credentials Template */}
                          <a 
                            href={getStudentEmailUrl(stu)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-[10px] border border-blue-200 transition-colors shadow-2xs hover:scale-[1.02]"
                            title={`Send Email to ${stu.email}`}
                          >
                            <Mail size={11} /> Email Password
                          </a>

                          {/* 1-Click Direct WhatsApp with pre-filled Username, Roll & Password */}
                          <a 
                            href={`https://wa.me/91${(stu.whatsapp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Namaste ${stu.name}! 👋\nApna College Bihar - Free Mentorship Portal me aapka account ready hai:\n\n🔗 Portal: https://www.apnacollegebihar.online/mentorship\n🆔 Student ID: ${stu.id || stu.studentId}\n📱 Phone: ${stu.whatsapp}\n👤 Roll: ${stu.roll}\n🔑 Password: ${stu.password}\n\nAbhi login karke apna 'Kya Padha' tracker check karein!`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-[10px] border border-emerald-200 transition-colors"
                            title={`Send WhatsApp to ${stu.whatsapp}`}
                          >
                            <MessageCircle size={11} /> WhatsApp Pass
                          </a>
                        </div>
                      </td>
                      <td className="p-3.5">
                        <select 
                          value={stu.assignedMentorId || ''}
                          onChange={(e) => handleAssignMentor(stu.id, e.target.value)}
                          className="px-2 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                        >
                          <option value="">-- Mentor Pending --</option>
                          {mentors.map(m => (
                            <option key={m.id} value={m.id}>
                              {m.name} ({m.branch})
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-3.5 text-center">
                        <button 
                          type="button"
                          onClick={() => handleMoveToRemoved(stu.id)}
                          className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                          title="Inactive Section me move karein (Mentorship Admin me safe rahega)"
                        >
                          <Trash2 size={15} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Section 3: Dedicated Inactive Students Section ── */}
      <div id="removed-students-section" className="bg-white rounded-3xl border-2 border-amber-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-100">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">
                <Trash2 size={20} />
              </div>
              <h2 className="text-xl font-black text-amber-950 uppercase tracking-tight">
                Inactive Students Section ({removedStudents.length})
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-1.5">
              Yeh wo students hain jinhe active mentorship list se inactive kiya gaya hai. Sabhi students ke Phone Numbers aur details yahan safe hain. Kisi bhi student ko wapas active karne ke liye <strong className="text-emerald-700">"Restore"</strong> button dabayein.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-amber-100 text-amber-900 font-black text-xs rounded-xl border border-amber-300 flex items-center gap-1.5">
              <Archive size={14} /> Total {removedStudents.length} Inactive Records
            </span>
          </div>
        </div>

        {/* Inactive Students Search */}
        <div className="max-w-md">
          <div className="relative">
            <input 
              type="text"
              placeholder="Search in inactive (Name, Phone, Roll, College)..."
              value={removedSearchQuery}
              onChange={(e) => setRemovedSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-amber-50/50 border border-amber-200 rounded-xl text-xs font-bold text-slate-800 placeholder:font-normal placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500" />
          </div>
        </div>

        {/* Inactive Students Table */}
        <div className="overflow-x-auto border border-amber-200 rounded-2xl bg-white shadow-xs">
          <table className="w-full text-left text-xs">
            <thead className="bg-amber-50 border-b border-amber-200 text-[10px] font-black uppercase tracking-wider text-amber-950">
              <tr>
                <th className="p-3.5">#</th>
                <th className="p-3.5">Student Details</th>
                <th className="p-3.5">Phone / WhatsApp Number (Accurate)</th>
                <th className="p-3.5">Roll No</th>
                <th className="p-3.5">College & Branch</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100 font-medium text-slate-700">
              {filteredRemovedStudents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400 text-xs">
                    Koi inactive student match nahi hua.
                  </td>
                </tr>
              ) : (
                filteredRemovedStudents.map((stu, index) => {
                  const isEditingPhone = editingRemovedPhones[stu.id] !== undefined;
                  const currentPhone = isEditingPhone ? editingRemovedPhones[stu.id] : (stu.whatsapp || '');

                  return (
                    <tr key={stu.id} className="hover:bg-amber-50/40 transition-colors">
                      <td className="p-3.5 text-slate-400 font-bold">{index + 1}</td>
                      <td className="p-3.5">
                        <p className="font-black text-slate-900 text-xs">{stu.name}</p>
                        <p className="text-[10px] text-slate-400 font-mono">{stu.email || 'No Email'}</p>
                        {stu.codingExperience && (
                          <span className="inline-block mt-0.5 text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">
                            {stu.codingExperience.includes('beginner') ? '🌱 Beginner' : '💻 Has Knowledge'}
                          </span>
                        )}
                      </td>
                      <td className="p-3.5">
                        <div className="flex items-center gap-1.5 min-w-[190px]">
                          <div className="relative flex-1">
                            <input
                              type="text"
                              value={currentPhone}
                              onChange={(e) => setEditingRemovedPhones(prev => ({ ...prev, [stu.id]: e.target.value }))}
                              placeholder="Phone number..."
                              className="w-full px-2.5 py-1 text-xs font-mono font-bold rounded-lg border border-amber-200 bg-amber-50/40 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                            />
                          </div>

                          {isEditingPhone && editingRemovedPhones[stu.id] !== (stu.whatsapp || '') && (
                            <button
                              type="button"
                              onClick={() => handleSaveStudentPhone(stu.id)}
                              className="px-2 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-md text-[10px] font-bold shrink-0 shadow-xs transition-all animate-pulse"
                              title="Save Phone Number"
                            >
                              <Save size={12} /> Save
                            </button>
                          )}

                          {stu.whatsapp && (
                            <a
                              href={`https://wa.me/91${stu.whatsapp.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors shrink-0 border border-emerald-200"
                              title={`Direct WhatsApp to ${stu.whatsapp}`}
                            >
                              <MessageCircle size={13} />
                            </a>
                          )}
                        </div>
                      </td>
                      <td className="p-3.5">
                        <span className="inline-block font-black text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 font-mono text-[11px]">
                          {stu.roll}
                        </span>
                      </td>
                      <td className="p-3.5 max-w-[200px]">
                        <p className="font-bold text-slate-800 text-[11px] truncate" title={stu.college}>{stu.college}</p>
                        <p className="text-[10px] text-slate-500 font-medium truncate" title={stu.branch}>{stu.branch}</p>
                      </td>
                      <td className="p-3.5">
                        <span className="inline-block text-[10px] px-2.5 py-1 rounded-full font-black bg-amber-100 text-amber-800 border border-amber-300">
                          ⏸ Inactive
                        </span>
                      </td>
                      <td className="p-3.5 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button 
                            type="button"
                            onClick={() => handleRestoreStudent(stu.id)}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-xs transition-all hover:scale-105"
                            title="Active list me wapas Restore karein"
                          >
                            <RotateCcw size={12} /> Restore
                          </button>
                          <button 
                            type="button"
                            onClick={() => handlePermanentDelete(stu.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                            title="Permanently Delete karein"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Modal: Add New Mentor ── */}
      {showAddMentorModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <ShieldCheck size={20} className="text-blue-600" /> Naya BEU Mentor Add Karein
              </h3>
              <button 
                onClick={() => setShowAddMentorModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddMentor} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Mentor Ka Pura Naam</label>
                <input 
                  type="text" 
                  placeholder="e.g. Er. Saurabh Verma"
                  value={mentorForm.name}
                  onChange={(e) => setMentorForm({ ...mentorForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Role / Job Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Software Engineer @ TCS"
                    value={mentorForm.role}
                    onChange={(e) => setMentorForm({ ...mentorForm, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">College / Passout</label>
                  <input 
                    type="text" 
                    placeholder="e.g. BCE Bhagalpur (2020-24)"
                    value={mentorForm.college}
                    onChange={(e) => setMentorForm({ ...mentorForm, college: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Branch Domain</label>
                <select 
                  value={mentorForm.branch}
                  onChange={(e) => {
                    const newB = e.target.value;
                    const newAutoUser = getNextMentorUsername(newB);
                    setMentorForm({
                      ...mentorForm,
                      branch: newB,
                      username: (!mentorForm.username || mentorForm.username.startsWith('ACBM')) ? newAutoUser : mentorForm.username
                    });
                  }}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                >
                  {BEU_OFFICIAL_BRANCHES.map(group => (
                    <optgroup key={group.group} label={group.groupName}>
                      {group.branches.map(b => (
                        <option key={b.code} value={b.code}>
                          {b.code} - {b.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Mentor Photo (Optional)</label>
                <div className="flex items-center gap-3">
                  {mentorForm.avatar ? (
                    <div className="relative">
                      <img src={mentorForm.avatar} alt="Preview" className="w-12 h-12 rounded-xl object-cover border border-blue-400" />
                      <button
                        type="button"
                        onClick={() => setMentorForm({ ...mentorForm, avatar: '' })}
                        className="absolute -top-1.5 -right-1.5 bg-rose-600 hover:bg-rose-700 text-white w-5 h-5 rounded-full text-[11px] flex items-center justify-center"
                        title="Remove photo"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-400 font-bold text-xs">
                      No Photo
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    id="new-mentor-photo-input"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        compressImage(file, (base64) => {
                          setMentorForm(prev => ({ ...prev, avatar: base64 }));
                        });
                      }
                    }}
                  />
                  <label
                    htmlFor="new-mentor-photo-input"
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer border border-slate-200 flex items-center gap-1.5 transition-colors"
                  >
                    <Camera size={13} /> Choose Photo File
                  </label>
                  <span className="text-[10px] text-slate-400 font-medium">Khali chhodne par initials dikhega.</span>
                </div>
              </div>

              {/* Login Credentials Box */}
              <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 space-y-3">
                <p className="text-[11px] font-black uppercase text-indigo-600 flex items-center gap-1.5">
                  <KeyRound size={13} /> Mentor Login Credentials (Portal Login aur Contact ke liye)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Username (Login ID)</label>
                    <input
                      type="text"
                      placeholder="e.g. ACBMGECCSESHK04"
                      value={mentorForm.username}
                      onChange={(e) => setMentorForm({ ...mentorForm, username: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-indigo-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                    />
                    <p className="text-[10px] text-slate-400 mt-0.5">Portal username</p>
                  </div>
                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Phone Number (Mobile / WhatsApp)</label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={mentorForm.mobile}
                      onChange={(e) => setMentorForm({ ...mentorForm, mobile: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-indigo-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                    />
                    <p className="text-[10px] text-slate-400 mt-0.5">Calling / WhatsApp number</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Mentor Email</label>
                    <input
                      type="email"
                      placeholder="e.g. mentor@gmail.com"
                      value={mentorForm.email}
                      onChange={(e) => setMentorForm({ ...mentorForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-indigo-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                    />
                    <p className="text-[10px] text-slate-400 mt-0.5">Credentials bhejne ke liye</p>
                  </div>
                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Password</label>
                    <input
                      type="text"
                      placeholder="Default: Mentor@123"
                      value={mentorForm.password}
                      onChange={(e) => setMentorForm({ ...mentorForm, password: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-indigo-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                    />
                    <p className="text-[10px] text-slate-400 mt-0.5">Default: Mentor@123</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Worked On</label>
                <input 
                  type="text" 
                  placeholder="e.g. Web Development, AI/ML Projects, Core Electronics, Robotics"
                  value={mentorForm.workedOn}
                  onChange={(e) => setMentorForm({ ...mentorForm, workedOn: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Expertise In</label>
                <input 
                  type="text" 
                  placeholder="e.g. BEU Semester Exams, C++, DSA, GATE Prep, Placement Guidance"
                  value={mentorForm.expertiseIn}
                  onChange={(e) => setMentorForm({ ...mentorForm, expertiseIn: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Mentor Bio / Guidance Message</label>
                <textarea 
                  rows={2}
                  placeholder="Brief advice or bio for students..."
                  value={mentorForm.bio}
                  onChange={(e) => setMentorForm({ ...mentorForm, bio: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setShowAddMentorModal(false)}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md shadow-blue-500/20"
                >
                  Save & Publish Mentor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Modal: Add New Student Manually ── */}
      {showAddStudentModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <UserPlus size={20} className="text-emerald-600" /> Student Manually Enroll Karein
              </h3>
              <button 
                onClick={() => setShowAddStudentModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Student Ka Pura Naam</label>
                <input 
                  type="text" 
                  placeholder="e.g. Vikas Kumar"
                  value={studentForm.name}
                  onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1 flex items-center justify-between">
                    <span>Roll No.</span>
                    <span className="text-[9px] text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-bold font-mono">Student ID banega</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 26/CSE/55 ya 26CSE55"
                    value={studentForm.roll}
                    onChange={(e) => {
                      const newRoll = e.target.value;
                      const cleanId = newRoll.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
                      
                      // Auto-detect branch from roll
                      const detected = detectBranchFromRoll(newRoll);
                      const targetBranch = detected || studentForm.branchCode || 'CSE';
                      const targetObj = ALL_BEU_BRANCHES.find(b => b.code === targetBranch);
                      const targetBranchName = targetObj ? targetObj.name : studentForm.branch;

                      const nextPass = (detected && detected !== studentForm.branchCode) 
                        ? getNextStudentPassword(targetBranch) 
                        : (studentForm.password || getNextStudentPassword(targetBranch));

                      setStudentForm(prev => ({
                        ...prev,
                        roll: newRoll,
                        studentId: cleanId || prev.studentId,
                        branchCode: targetBranch,
                        branch: targetBranchName,
                        password: nextPass
                      }));
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600 font-mono"
                  />
                  <p className="text-[10px] text-slate-400 mt-0.5 font-bold">
                    Login ID: <strong className="text-blue-600 font-mono">{studentForm.roll ? studentForm.roll.replace(/[^a-zA-Z0-9]/g, '').toUpperCase() : (studentForm.whatsapp ? studentForm.whatsapp.replace(/\D/g, '') : 'Roll No. ya Phone No.')}</strong>
                  </p>
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1 flex items-center justify-between">
                    <span>Login Password</span>
                    <span className="text-[9px] text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded font-bold font-mono">⚡ Auto</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 26ACBCSE12"
                    value={studentForm.password || getNextStudentPassword(studentForm.branchCode)}
                    onChange={(e) => setStudentForm({ ...studentForm, password: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-emerald-50/60 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-900 focus:outline-none focus:border-blue-600 font-mono"
                  />
                  <p className="text-[10px] text-emerald-700 mt-0.5 font-bold">
                    Auto Pass: 26ACB + {studentForm.branchCode || 'CSE'} + Student No. ({studentForm.password || getNextStudentPassword(studentForm.branchCode)})
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1 flex items-center justify-between">
                    <span>Phone / WhatsApp</span>
                    <span className="text-[9px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded font-bold font-mono">Roll na ho toh ID</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="e.g. 9876543210"
                    value={studentForm.whatsapp}
                    onChange={(e) => setStudentForm({ ...studentForm, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Email ID (Optional)</label>
                  <input 
                    type="email" 
                    placeholder="e.g. student@gmail.com"
                    value={studentForm.email}
                    onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">College Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Muzaffarpur Institute of Technology"
                  value={studentForm.college}
                  onChange={(e) => setStudentForm({ ...studentForm, college: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Branch Code</label>
                  <select 
                    value={studentForm.branchCode}
                    onChange={(e) => {
                      const newBranch = e.target.value;
                      const branchObj = ALL_BEU_BRANCHES.find(b => b.code === newBranch);
                      const nextPass = getNextStudentPassword(newBranch);
                      setStudentForm(prev => ({
                        ...prev,
                        branchCode: newBranch,
                        branch: branchObj ? branchObj.name : newBranch,
                        password: nextPass
                      }));
                    }}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600 font-bold"
                  >
                    {BEU_OFFICIAL_BRANCHES.map(group => (
                      <optgroup key={group.group} label={group.groupName}>
                        {group.branches.map(b => (
                          <option key={b.code} value={b.code}>
                            {b.code} - {b.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Prior Coding</label>
                  <select 
                    value={studentForm.codingExperience}
                    onChange={(e) => setStudentForm({ ...studentForm, codingExperience: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  >
                    <option value="Nahi, main bilkul beginner hoon.">Beginner</option>
                    <option value="Haan, mujhe thodi bahut basic knowledge hai.">Basic Knowledge</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Assign Senior Mentor (Optional)</label>
                <select 
                  value={studentForm.assignedMentorId || ''}
                  onChange={(e) => setStudentForm({ ...studentForm, assignedMentorId: e.target.value || null })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                >
                  <option value="">-- Mentor Pending (Baad me assign karein) --</option>
                  {mentors.map(m => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.branch || m.branchLabel || 'BEU'})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Main Goals</label>
                <input 
                  type="text" 
                  placeholder="e.g. Achha CGPA, Coding seekhna"
                  value={studentForm.goals}
                  onChange={(e) => setStudentForm({ ...studentForm, goals: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setShowAddStudentModal(false)}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md shadow-emerald-500/20"
                >
                  Enroll Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
