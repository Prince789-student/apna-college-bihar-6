import React, { useState, useEffect } from 'react';
import { 
  Users, UserPlus, GraduationCap, Award, Phone, 
  MessageCircle, Trash2, Search, Filter, Plus, 
  CheckCircle2, ExternalLink, RefreshCw, Star, 
  Calendar, Video, ShieldCheck, Mail, BookOpen, Clock,
  Copy, Download, Send, KeyRound, Eye, EyeOff, Check, Save, Sparkles, Camera
} from 'lucide-react';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { 
  getEnrolledStudents, 
  saveEnrolledStudents, 
  getMentorsList, 
  saveMentorsList 
} from '../data/mentorshipData';
import { 
  fetchCloudMentorshipData, 
  saveCloudMentorshipData, 
  subscribeMentorshipUpdates 
} from '../services/mentorshipSync';

export default function AdminMentorship({ flash }) {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [selectedCollege, setSelectedCollege] = useState('ALL');
  const [showAddMentorModal, setShowAddMentorModal] = useState(false);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);

  // Password Management State
  const [editingPasswords, setEditingPasswords] = useState({});
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [isCloudSaving, setIsCloudSaving] = useState(false);

  // Mentor Password & Phone Management State
  const [editingMentorPhones, setEditingMentorPhones] = useState({});
  const [editingMentorPasswords, setEditingMentorPasswords] = useState({});
  const [editingMentorEmails, setEditingMentorEmails] = useState({});
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
    phone: '',
    password: 'DEEPAK@123',
    email: '',
    meetLink: '',
    bio: ''
  });

  // New Student Form State
  const [studentForm, setStudentForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    college: 'Gaya College of Engineering (GCE), Gaya',
    branch: 'Computer Science & Engineering',
    branchCode: 'CSE',
    roll: '',
    password: 'beu@2026',
    goals: 'Padhai me guidance (Achha CGPA kaise layein)',
    codingExperience: 'Nahi, main bilkul beginner hoon.',
    mentorExpectations: 'Exam guidance and study roadmap'
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setStudents(getEnrolledStudents());
    const rawMentors = getMentorsList();
    const unique = new Map();
    (rawMentors || []).forEach(m => {
      const isDeepak = (m.name || '').toLowerCase().includes('deepak');
      const isSubhash = (m.name || '').toLowerCase().includes('subhash');
      const key = isDeepak ? 'deepak' : (isSubhash ? 'subhash' : m.id);
      const canonicalId = isDeepak ? 'mentor-cse-deepak' : (isSubhash ? 'mentor-cse-subhash' : m.id);
      const cleanAvatar = (m.avatar && !m.avatar.includes('unsplash')) ? m.avatar : '';
      const cleanMentor = {
        ...m,
        id: canonicalId,
        avatar: cleanAvatar,
        phone: m.phone || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : '')),
        mobile: m.mobile || '7856030646',
        password: m.password || (isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : 'Mentor@123')),
        email: m.email || (isDeepak ? 'deepak0kr0mishra@gmail.com' : (isSubhash ? 'Subhashkumar911724@gmail.com' : ''))
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
      if (cloud && cloud.mentors && cloud.mentors.length > 0) {
        setMentors(cloud.mentors);
      }
    }).catch(() => {});
  };

  const handleManualCloudSync = async () => {
    setIsCloudSaving(true);
    await saveCloudMentorshipData(students, mentors);
    setIsCloudSaving(false);
    if (flash) flash('Mentorship Data successfully Cloud Sync ho gaya! Ab laptop aur mobile phone dono pe same dikhega. ☁️✅', 'suc');
  };

  const copyAllCredentials = () => {
    const lines = students.map((s, idx) => 
      `${idx + 1}. ${s.name} | Username (Phone): ${s.whatsapp} | Roll: ${s.roll} | Branch: ${s.branchCode || s.branch} | Pass: ${s.password} | College: ${s.college}`
    ).join('\n');
    navigator.clipboard.writeText(lines);
    if (flash) flash(`Sabhi ${students.length} students ke Passwords clipboard me copy ho gaye!`, 'suc');
  };

  const downloadCSV = () => {
    const headers = 'ID,Name,Username_Phone,Roll,Password,Branch,College,Email\n';
    const rows = students.map(s => 
      `"${s.id}","${s.name}","${s.whatsapp}","${s.roll}","${s.password}","${s.branchCode || s.branch}","${s.college}","${s.email}"`
    ).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BEU_Mentorship_Student_Credentials_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    if (flash) flash('Credentials CSV file successfully download ho gayi!', 'suc');
  };

  // Add Mentor Handler
  const handleAddMentor = (e) => {
    e.preventDefault();
    if (!mentorForm.name.trim() || !mentorForm.college.trim()) {
      if (flash) flash('Mentor Name aur College zaroori hai!', 'err');
      return;
    }

    const specialtiesList = [
      ...(mentorForm.expertiseIn ? mentorForm.expertiseIn.split(',').map(s => s.trim()) : []),
      ...(mentorForm.workedOn ? mentorForm.workedOn.split(',').map(s => s.trim()) : [])
    ].filter(Boolean);

    const newMentor = {
      id: `mentor-${mentorForm.branch.toLowerCase()}-${Date.now()}`,
      name: mentorForm.name.trim(),
      role: mentorForm.role.trim() || 'Senior BEU Scholar & Mentor',
      college: mentorForm.college.trim(),
      branch: mentorForm.branch,
      branchLabel: mentorForm.branch,
      workedOn: mentorForm.workedOn.trim(),
      expertiseIn: mentorForm.expertiseIn.trim(),
      avatar: mentorForm.avatar.trim() || '',
      phone: mentorForm.phone.trim(),
      password: mentorForm.password.trim() || 'Mentor@123',
      email: mentorForm.email.trim() || `${mentorForm.name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'mentor'}@beu.in`,
      meetLink: '',
      specialties: specialtiesList.length > 0 ? specialtiesList : ['Academic Guidance', 'BEU Prep'],
      bio: mentorForm.bio.trim() || (mentorForm.workedOn ? `Worked on: ${mentorForm.workedOn}` : 'Experienced senior mentor.')
    };

    const updated = [newMentor, ...mentors];
    setMentors(updated);
    saveMentorsList(updated);
    setShowAddMentorModal(false);
    setMentorForm({
      name: '',
      role: '',
      college: '',
      branch: 'CSE',
      workedOn: '',
      expertiseIn: '',
      avatar: '',
      phone: '',
      password: '',
      email: '',
      meetLink: '',
      bio: ''
    });

    if (flash) flash(`Naya Mentor "${newMentor.name}" add ho gaya! 🚀`);
  };

  // Delete Mentor Handler
  const handleDeleteMentor = (id) => {
    if (!window.confirm('Kya aap sach me is mentor ko remove karna chahte hain?')) return;
    const updated = mentors.filter(m => m.id !== id);
    setMentors(updated);
    saveMentorsList(updated);
    if (flash) flash('Mentor remove ho gaya.');
  };

  // Update or Clear Google Meet Link dynamically
  const handleUpdateMentorMeetLink = (mentorId, newLink) => {
    const updated = mentors.map(m => m.id === mentorId ? { ...m, meetLink: (newLink || '').trim() } : m);
    setMentors(updated);
    saveMentorsList(updated);
    if (newLink && newLink.trim()) {
      if (flash) flash('Google Meet link lag gaya! Students ko live join dikhega. 🔴', 'suc');
    } else {
      if (flash) flash('Google Meet link hata diya gaya! Meeting closed. ✅', 'suc');
    }
  };

  // Save Mentor Credentials (Phone, Password & Email)
  const handleSaveMentorCredentials = (mentorId) => {
    const currentMentor = mentors.find(m => m.id === mentorId);
    if (!currentMentor) return;

    const isDeepak = (currentMentor.name || '').toLowerCase().includes('deepak');
    const isSubhash = (currentMentor.name || '').toLowerCase().includes('subhash');
    const newPhone = editingMentorPhones[mentorId] !== undefined ? editingMentorPhones[mentorId].trim() : (currentMentor.phone || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : '')));
    const newPassword = editingMentorPasswords[mentorId] !== undefined ? editingMentorPasswords[mentorId].trim() : (currentMentor.password || (isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : 'Mentor@123')));
    const newEmail = editingMentorEmails[mentorId] !== undefined ? editingMentorEmails[mentorId].trim() : (currentMentor.email || (isDeepak ? 'deepak0kr0mishra@gmail.com' : (isSubhash ? 'Subhashkumar911724@gmail.com' : '')));

    if (!newPassword) {
      if (flash) flash('Password khali nahi ho sakta!', 'err');
      return;
    }

    const updated = mentors.map(m => m.id === mentorId ? { ...m, phone: newPhone, password: newPassword, email: newEmail } : m);
    setMentors(updated);
    saveCloudMentorshipData(students, updated);

    setEditingMentorPhones(prev => ({ ...prev, [mentorId]: undefined }));
    setEditingMentorPasswords(prev => ({ ...prev, [mentorId]: undefined }));
    setEditingMentorEmails(prev => ({ ...prev, [mentorId]: undefined }));

    if (flash) flash(`Mentor "${currentMentor.name}" ke Credentials & Email save ho gaye! ✅`, 'suc');
  };

  // Upload Mentor Photo
  const handleUploadMentorPhoto = (mentorId, file) => {
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      if (flash) flash('Photo size 2MB se kam honi chahiye!', 'err');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target.result;
      const updated = mentors.map(m => m.id === mentorId ? { ...m, avatar: base64 } : m);
      setMentors(updated);
      saveMentorsList(updated);
      if (flash) flash('Mentor photo successfully update ho gayi! 📸', 'suc');
    };
    reader.readAsDataURL(file);
  };

  // Remove Mentor Photo (Nothing / Initials instead)
  const handleRemoveMentorPhoto = (mentorId) => {
    const updated = mentors.map(m => m.id === mentorId ? { ...m, avatar: '' } : m);
    setMentors(updated);
    saveMentorsList(updated);
    if (flash) flash('Photo hata di gayi! Ab koi stock photo nahi dikhegi. ✅', 'suc');
  };

  // 1-Click Copy Mentor Credentials
  const copyMentorCredentials = (m) => {
    const isDeepak = (m.name || '').toLowerCase().includes('deepak');
    const isSubhash = (m.name || '').toLowerCase().includes('subhash');
    const username = editingMentorPhones[m.id] !== undefined ? editingMentorPhones[m.id] : (m.phone || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : '')));
    const pass = editingMentorPasswords[m.id] !== undefined ? editingMentorPasswords[m.id] : (m.password || (isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : 'Mentor@123')));
    const targetEmail = editingMentorEmails[m.id] !== undefined ? editingMentorEmails[m.id] : (m.email || (isDeepak ? 'deepak0kr0mishra@gmail.com' : (isSubhash ? 'Subhashkumar911724@gmail.com' : '')));
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.apnacollegebihar.online';
    const text = `Mentor: ${m.name}\nPortal: ${origin}/mentorship\nUsername: ${username}\nEmail: ${targetEmail}\nMobile: 7856030646\nPassword: ${pass}`;
    navigator.clipboard.writeText(text);
    if (flash) flash(`Mentor "${m.name}" ke credentials & email copy ho gaye! 📋`, 'suc');
  };

  // Generate WhatsApp Share Link for Mentor
  const getMentorWhatsAppUrl = (m) => {
    const isDeepak = (m.name || '').toLowerCase().includes('deepak');
    const isSubhash = (m.name || '').toLowerCase().includes('subhash');
    const rawUsername = editingMentorPhones[m.id] !== undefined ? editingMentorPhones[m.id] : (m.phone || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : '')));
    const targetMobile = (rawUsername.replace(/\D/g, '').length >= 10)
      ? rawUsername.replace(/\D/g, '')
      : (m.mobile || '7856030646').replace(/\D/g, '');

    const pass = editingMentorPasswords[m.id] !== undefined ? editingMentorPasswords[m.id] : (m.password || (isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : 'Mentor@123')));
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.apnacollegebihar.online';
    const portalUrl = `${origin}/mentorship`;

    const message = `Namaste ${m.name} ji! 👋\n\nApna College Bihar ke *Free BEU Mentorship Portal* me aapka Mentor Account successfully set ho gaya hai.\n\n🔗 *Portal Login Link:* ${portalUrl}\n👤 *Username:* ${rawUsername || 'ACBMGECCSESHK01'}\n📱 *Mobile:* ${targetMobile}\n🔑 *Login Password:* ${pass}\n\n*Portal me aap:*\n1️⃣ Apne assigned 1st-year students ki list check kar sakte hain.\n2️⃣ Google Meet link add/remove karke live guidance sessions le sakte hain.\n\nAap abhi login karke check kar lijiye!\n\nShukriya,\nApna College Bihar Team`;

    return `https://wa.me/91${targetMobile}?text=${encodeURIComponent(message)}`;
  };

  // Generate Direct Gmail Link for Mentor
  const getMentorGmailUrl = (m) => {
    const isDeepak = (m.name || '').toLowerCase().includes('deepak');
    const isSubhash = (m.name || '').toLowerCase().includes('subhash');
    const defaultEmail = isDeepak ? 'deepak0kr0mishra@gmail.com' : (isSubhash ? 'Subhashkumar911724@gmail.com' : (m.email || ''));
    const targetEmail = editingMentorEmails[m.id] !== undefined ? editingMentorEmails[m.id].trim() : (m.email || defaultEmail);

    const rawUsername = editingMentorPhones[m.id] !== undefined ? editingMentorPhones[m.id] : (m.phone || (isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : '')));
    const pass = editingMentorPasswords[m.id] !== undefined ? editingMentorPasswords[m.id] : (m.password || (isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : 'Mentor@123')));
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.apnacollegebihar.online';
    const portalUrl = `${origin}/mentorship`;

    const subject = `🎓 ${m.name} Ji, Aapka Free BEU Mentor Portal Login ID & Password | Apna College Bihar`;
    const body = `Namaste ${m.name} Ji! 👋\n\nApna College Bihar ke official Free BEU Mentorship Portal me aapka Mentor Account successfully activate ho gaya hai.\n\nAapke Mentor Login Credentials:\n🔗 Portal Login Link: ${portalUrl}\n👤 Username (Login ID): ${rawUsername}\n📱 Mobile: 7856030646\n🔑 Login Password: ${pass}\n📧 Registered Email: ${targetEmail}\n\nMentor Portal me aap:\n1️⃣ Apne assigned 1st-year students ki list check kar sakte hain.\n2️⃣ Har student ka "Kya Padha, Kitna Padha" live study tracker record dekh sakte hain.\n3️⃣ Google Meet link add/remove karke live guidance sessions le sakte hain.\n\nAap abhi login karke check kar lijiye!\n\nWebsite: ${portalUrl} (Tab: "Mentor Login")\n\nShukriya,\nApna College Bihar Team`;

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Generate Direct Gmail & Email Link for Student (Professional English, No Phone Number)
  const getStudentEmailUrl = (stu) => {
    const assignedMentor = mentors.find(m => m.id === stu.assignedMentorId);
    const mentorName = assignedMentor ? assignedMentor.name : 'Senior BEU Academic Mentor';

    const subject = 'Welcome to Free BEU Mentorship | Your Login Credentials - Apna College Bihar';
    const body = `Dear ${stu.name},

Welcome to the Free BEU Mentorship Program (Batch 2026-2030) by Apna College Bihar. 
Your mentorship account has been successfully activated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔐 YOUR LOGIN CREDENTIALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 Portal Link: https://www.apnacollegebihar.online/mentorship
👤 Roll Number:        ${stu.roll}
🔑 Password:           ${stu.password}
👨‍🏫 Assigned Mentor:    ${mentorName}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!studentForm.name.trim() || !studentForm.roll.trim()) {
      if (flash) flash('Student Name aur Roll Number zaroori hai!', 'err');
      return;
    }

    const matchedMentor = mentors.find(m => m.branch === studentForm.branchCode) || mentors[0];

    const newStudent = {
      id: `beu-stu-${Date.now()}`,
      timestamp: new Date().toLocaleString('en-IN'),
      email: studentForm.email.trim(),
      name: studentForm.name.trim(),
      whatsapp: studentForm.whatsapp.trim(),
      college: studentForm.college.trim(),
      branch: studentForm.branch.trim(),
      branchCode: studentForm.branchCode,
      roll: studentForm.roll.trim(),
      password: studentForm.password.trim() || 'beu@2026',
      goals: studentForm.goals.trim(),
      codingExperience: studentForm.codingExperience,
      mentorExpectations: studentForm.mentorExpectations.trim(),
      assignedMentorId: null,
      status: 'Active'
    };

    const updated = [newStudent, ...students];
    setStudents(updated);
    saveEnrolledStudents(updated);
    setShowAddStudentModal(false);
    setStudentForm({
      name: '',
      email: '',
      whatsapp: '',
      college: 'Gaya College of Engineering (GCE), Gaya',
      branch: 'Computer Science & Engineering',
      branchCode: 'CSE',
      roll: '',
      goals: 'Padhai me guidance (Achha CGPA kaise layein)',
      codingExperience: 'Nahi, main bilkul beginner hoon.',
      mentorExpectations: 'Exam guidance and study roadmap'
    });

    if (flash) flash(`Student "${newStudent.name}" enroll ho gaya! 🎓`);
  };

  // Delete Student Handler
  const handleDeleteStudent = (id) => {
    if (!window.confirm('Kya aap is student ko enrollment list se hatana chahte hain?')) return;
    const updated = students.filter(s => s.id !== id);
    setStudents(updated);
    saveEnrolledStudents(updated);
    if (flash) flash('Student enrollment list se hata diya gaya.');
  };

  // Assign Mentor to a student
  const handleAssignMentor = (studentId, mentorId) => {
    const updated = students.map(s => s.id === studentId ? { ...s, assignedMentorId: mentorId } : s);
    setStudents(updated);
    saveCloudMentorshipData(updated, mentors);
    if (flash) flash('Mentor assigned! Cloud pe sync ho gaya (Laptop & Mobile dono me update). ✅', 'suc');
  };

  // Save edited password for a student
  const handleSavePassword = (studentId) => {
    const newPass = editingPasswords[studentId];
    if (!newPass || newPass.trim() === '') {
      if (flash) flash('Password khali nahi ho sakta!', 'err');
      return;
    }
    const updated = students.map(s => s.id === studentId ? { ...s, password: newPass.trim() } : s);
    setStudents(updated);
    saveEnrolledStudents(updated);
    setEditingPasswords(prev => ({ ...prev, [studentId]: undefined }));
    if (flash) flash('Password successfully save ho gaya! ✅', 'suc');
  };

  // Unique Colleges for Filter
  const collegesList = Array.from(new Set(students.map(s => s.college))).filter(Boolean);

  // Filtered Students
  const filteredStudents = students.filter(s => {
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery = !q || 
      (s.name || '').toLowerCase().includes(q) ||
      (s.roll || '').toLowerCase().includes(q) ||
      (s.college || '').toLowerCase().includes(q) ||
      (s.branch || '').toLowerCase().includes(q) ||
      (s.whatsapp || '').includes(q) ||
      (s.email || '').toLowerCase().includes(q);

    const matchesBranch = selectedBranch === 'ALL' || s.branchCode === selectedBranch;
    const matchesCollege = selectedCollege === 'ALL' || s.college === selectedCollege;

    return matchesQuery && matchesBranch && matchesCollege;
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
            onClick={() => setShowAddMentorModal(true)}
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
                  const defaultUsername = isDeepak ? 'ACBMGECCSESHK02' : (isSubhash ? 'ACBMGECCSESHK01' : (m.phone || 'ACBMGECCSE01'));
                  const defaultPass = isDeepak ? 'DEEPAK@2006' : (isSubhash ? 'SUB@2006' : (m.password || 'Mentor@123'));
                  const defaultEmail = isDeepak ? 'deepak0kr0mishra@gmail.com' : (isSubhash ? 'Subhashkumar911724@gmail.com' : (m.email || ''));

                  const currentPhone = editingMentorPhones[m.id] !== undefined ? editingMentorPhones[m.id] : (m.phone || defaultUsername);
                  const currentEmail = editingMentorEmails[m.id] !== undefined ? editingMentorEmails[m.id] : (m.email || defaultEmail);
                  const currentPass = editingMentorPasswords[m.id] !== undefined ? editingMentorPasswords[m.id] : (m.password || defaultPass);
                  const isPassVisible = visibleMentorPasswords[m.id];
                  const hasCredChanges = (editingMentorPhones[m.id] !== undefined && editingMentorPhones[m.id] !== (m.phone || defaultUsername)) ||
                                         (editingMentorEmails[m.id] !== undefined && editingMentorEmails[m.id] !== (m.email || defaultEmail)) ||
                                         (editingMentorPasswords[m.id] !== undefined && editingMentorPasswords[m.id] !== (m.password || defaultPass));
                  const targetMobile = (currentPhone.replace(/\D/g, '').length >= 10) ? currentPhone.replace(/\D/g, '') : '7856030646';
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
                          title="Copy credentials & email"
                        >
                          <Copy size={11} /> Copy
                        </button>
                      </div>

                      {/* Username (Login ID) */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-wider">
                          <span className="flex items-center gap-1"><Phone size={10} className="text-indigo-500" /> Username (Login ID / Phone):</span>
                          <span className="text-[9px] text-indigo-600 font-bold lowercase">portal username</span>
                        </div>
                        <input
                          type="text"
                          value={currentPhone}
                          onChange={(e) => setEditingMentorPhones(prev => ({ ...prev, [m.id]: e.target.value }))}
                          placeholder="e.g. ACBMGECCSESHK01 ya 7856030646"
                          className="w-full px-2.5 py-1.5 text-xs font-mono font-black text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-600 shadow-2xs"
                        />
                      </div>

                      {/* Registered Email */}
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

                      {/* Password with Show/Hide toggle */}
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
                              title="Save Credentials & Email"
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
                          title={`Send WhatsApp credentials to ${targetMobile}`}
                        >
                          <MessageCircle size={14} /> WhatsApp Share ({targetMobile})
                        </a>
                      </div>
                    </div>
                  );
                })()}

                <div className="pt-1 flex items-center justify-between text-[11px] font-semibold text-slate-600 border-t border-slate-200/60">
                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <Users size={13} /> {assignedStudentsCount} Students
                  </span>
                  <span className="flex items-center gap-1 text-slate-600 font-bold">
                    <Phone size={12} className="text-emerald-600" /> 78560 30646
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
              <GraduationCap className="text-indigo-600" size={24} /> Enrolled Students Directory ({filteredStudents.length})
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Google Form se registered sabhi 1st year students ka complete database. Direct WhatsApp / Email credentials bhejein.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
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
              title="Sabhi students ke password clipboard me copy karein"
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
              onClick={() => setShowAddStudentModal(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all"
            >
              <UserPlus size={15} /> + Enroll Student
            </button>
          </div>
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
              <option value="ALL">All Branches</option>
              <option value="CSE">Computer Science & Engg. (CSE)</option>
              <option value="ECE">Electronics & Communication (ECE)</option>
              <option value="EEE">Electrical & Electronics (EEE)</option>
              <option value="EE">Electrical Engg. (EE)</option>
              <option value="CE">Civil Engineering (CE)</option>
              <option value="ME">Mechanical Engineering (ME)</option>
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
                <th className="p-3.5">Roll No</th>
                <th className="p-3.5">Password</th>
                <th className="p-3.5">College & Branch</th>
                <th className="p-3.5">Send Credentials</th>
                <th className="p-3.5">Assigned Mentor</th>
                <th className="p-3.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-slate-400 text-xs">
                    Koi student match nahi hua. Search filter check karein!
                  </td>
                </tr>
              ) : (
                filteredStudents.map((stu, index) => {
                  const assignedMentor = mentors.find(m => m.id === stu.assignedMentorId);

                  return (
                    <tr key={stu.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-3.5 text-slate-400 font-bold">{index + 1}</td>
                      <td className="p-3.5">
                        <p className="font-black text-slate-900 text-xs">{stu.name}</p>
                        <p className="text-[10px] text-slate-400 font-mono">{stu.email}</p>
                        <span className="inline-block mt-0.5 text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">
                          {stu.codingExperience?.includes('beginner') ? '🌱 Beginner' : '💻 Has Knowledge'}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <span className="font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100 font-mono">
                          {stu.roll}
                        </span>
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
                            href={`https://wa.me/91${(stu.whatsapp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Namaste ${stu.name}! 👋\nApna College Bihar - Free Mentorship Portal me aapka account ready hai:\n\n🔗 Portal: https://www.apnacollegebihar.online/mentorship\n📱 Username (Phone): ${stu.whatsapp}\n👤 Roll: ${stu.roll}\n🔑 Password: ${stu.password}\n\nAbhi login karke apna 'Kya Padha' tracker check karein!`)}`}
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
                          onClick={() => handleDeleteStudent(stu.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Remove from enrollment"
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
                  onChange={(e) => setMentorForm({ ...mentorForm, branch: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                >
                  <option value="CSE">Computer Science (CSE)</option>
                  <option value="ECE">Electronics (ECE)</option>
                  <option value="EEE">Electrical & Electronics (EEE)</option>
                  <option value="EE">Electrical (EE)</option>
                  <option value="CE">Civil Engineering (CE)</option>
                  <option value="ME">Mechanical Engineering (ME)</option>
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
                        const reader = new FileReader();
                        reader.onload = (ev) => setMentorForm({ ...mentorForm, avatar: ev.target.result });
                        reader.readAsDataURL(file);
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
                  <KeyRound size={13} /> Mentor Login Credentials (Mentor ise use karega portal me)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Phone Number (Username)</label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={mentorForm.phone}
                      onChange={(e) => setMentorForm({ ...mentorForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-indigo-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                    />
                    <p className="text-[10px] text-slate-400 mt-0.5">Mentor is phone se login karega</p>
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
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Roll / Registration No.</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 26/CSE/55"
                    value={studentForm.roll}
                    onChange={(e) => setStudentForm({ ...studentForm, roll: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">WhatsApp Number</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 9876543210"
                    value={studentForm.whatsapp}
                    onChange={(e) => setStudentForm({ ...studentForm, whatsapp: e.target.value })}
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
                    onChange={(e) => setStudentForm({ ...studentForm, branchCode: e.target.value, branch: e.target.value === 'CSE' ? 'Computer Science & Engineering' : e.target.value === 'ECE' ? 'Electronics & Communication' : e.target.value === 'EEE' ? 'Electrical & Electronics' : e.target.value === 'CE' ? 'Civil Engineering' : 'Mechanical Engineering' })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  >
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="EE">EE</option>
                    <option value="CE">Civil</option>
                    <option value="ME">Mechanical</option>
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
