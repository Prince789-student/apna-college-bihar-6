import React, { useState, useEffect } from 'react';
import { 
  Users, UserPlus, GraduationCap, Award, Phone, 
  MessageCircle, Trash2, Search, Filter, Plus, 
  CheckCircle2, ExternalLink, RefreshCw, Star, 
  Calendar, Video, ShieldCheck, Mail, BookOpen, Clock,
  Copy, Download, Send, KeyRound, Eye, EyeOff, Check, Save, Sparkles
} from 'lucide-react';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { 
  getEnrolledStudents, 
  saveEnrolledStudents, 
  getMentorsList, 
  saveMentorsList 
} from '../data/mentorshipData';

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

  // New Mentor Form State
  const [mentorForm, setMentorForm] = useState({
    name: '',
    role: '',
    college: '',
    branch: 'CSE',
    cgpa: '8.80 CGPA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    email: '',
    meetTime: 'Every Saturday · 7:30 PM',
    meetLink: 'https://meet.google.com/new',
    specialties: 'BEU Exams, Coding, Placements',
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
    setMentors(getMentorsList());
  };

  const copyAllCredentials = () => {
    const lines = students.map((s, idx) => 
      `${idx + 1}. ${s.name} | Roll: ${s.roll} | Pass: ${s.password || 'Rohit@2026'} | Email: ${s.email} | WhatsApp: ${s.whatsapp}`
    ).join('\n');
    navigator.clipboard.writeText(lines);
    if (flash) flash(`Sabhi ${students.length} students ke Passwords clipboard me copy ho gaye!`, 'suc');
  };

  const downloadCSV = () => {
    const headers = 'ID,Name,Roll,Password,Email,WhatsApp,College,Branch,Goals\n';
    const rows = students.map(s => 
      `"${s.id}","${s.name}","${s.roll}","${s.password || 'Rohit@2026'}","${s.email}","${s.whatsapp}","${s.college}","${s.branch}","${(s.goals || '').replace(/"/g, '""')}"`
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

    const newMentor = {
      id: `mentor-${mentorForm.branch.toLowerCase()}-${Date.now()}`,
      name: mentorForm.name.trim(),
      role: mentorForm.role.trim() || 'Senior BEU Scholar & Mentor',
      college: mentorForm.college.trim(),
      branch: mentorForm.branch,
      branchLabel: mentorForm.branch,
      cgpa: mentorForm.cgpa.trim(),
      avatar: mentorForm.avatar.trim() || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
      email: mentorForm.email.trim() || `${mentorForm.name.toLowerCase().replace(/[^a-z0-9]/g, '')}@gmail.com`,
      meetTime: mentorForm.meetTime.trim() || 'Every Saturday · 7:30 PM',
      meetLink: mentorForm.meetLink.trim() || 'https://meet.google.com',
      specialties: mentorForm.specialties.split(',').map(s => s.trim()).filter(Boolean),
      bio: mentorForm.bio.trim() || 'Experienced senior guide for Bihar Engineering University students.'
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
      cgpa: '8.80 CGPA',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      email: '',
      meetTime: 'Every Saturday · 7:30 PM',
      meetLink: 'https://meet.google.com/new',
      specialties: 'BEU Exams, Coding, Placements',
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
      assignedMentorId: matchedMentor ? matchedMentor.id : 'mentor-cse-1',
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
    saveEnrolledStudents(updated);
    if (flash) flash('Mentor re-assigned successfully! ✅');
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
            const assignedStudentsCount = students.filter(s => s.assignedMentorId === m.id || (!s.assignedMentorId && s.branchCode === m.branch)).length;

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
                  <img 
                    src={m.avatar} 
                    alt={m.name} 
                    className="w-14 h-14 rounded-xl object-cover border-2 border-blue-500 shadow-sm shrink-0" 
                  />
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

                <div className="pt-1 flex items-center justify-between text-[11px] font-semibold text-slate-600 border-t border-slate-200/60">
                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <Users size={13} /> {assignedStudentsCount} Students
                  </span>
                  <a 
                    href={`mailto:${m.email}`}
                    className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1 font-bold truncate max-w-[160px]"
                    title={m.email}
                  >
                    <Mail size={13} /> {m.email}
                  </a>
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
                          {/* 1-Click Direct Email with pre-filled Roll & Password */}
                          <a 
                            href={`mailto:${stu.email}?subject=${encodeURIComponent('Apna College Bihar: Aapka Free BEU Mentorship Login ID & Password')}&body=${encodeURIComponent(`Namaste ${stu.name} ji,\n\nApna College Bihar ke Free BEU Mentorship Portal me aapka account create ho gaya hai!\n\nAapke Login Credentials:\n• Portal Link: https://www.apnacollegebihar.online/mentorship\n• Roll Number: ${stu.roll}\n• Login Password: ${stu.password}\n\nKripya portal par login karke apna daily study tracker ('Kya Padha') aur roadmap use karein.\n\nBest Wishes,\nApna College Bihar Team`)}`}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-[10px] border border-blue-200 transition-colors"
                            title={`Send Email to ${stu.email}`}
                          >
                            <Mail size={11} /> Email Password
                          </a>

                          {/* 1-Click Direct WhatsApp with pre-filled Roll & Password */}
                          <a 
                            href={`https://wa.me/91${stu.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Namaste ${stu.name}! 👋\nApna College Bihar - Free Mentorship Portal me aapka account ready hai:\n\n🔗 Portal: https://www.apnacollegebihar.online/mentorship\n👤 Roll: ${stu.roll}\n🔑 Password: ${stu.password}\n\nAbhi login karke apna 'Kya Padha' tracker check karein!`)}`}
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

              <div className="grid grid-cols-2 gap-3">
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
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">CGPA / Score</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 8.92 CGPA"
                    value={mentorForm.cgpa}
                    onChange={(e) => setMentorForm({ ...mentorForm, cgpa: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Mentor Email Address</label>
                  <input 
                    type="email" 
                    placeholder="e.g. mentor@gmail.com"
                    value={mentorForm.email}
                    onChange={(e) => setMentorForm({ ...mentorForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Live Meeting Schedule</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Every Saturday · 8:00 PM"
                    value={mentorForm.meetTime}
                    onChange={(e) => setMentorForm({ ...mentorForm, meetTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Telegram / Discussion Group Link (Optional)</label>
                <input 
                  type="text" 
                  placeholder="https://t.me/your_guidance_channel"
                  value={mentorForm.meetLink}
                  onChange={(e) => setMentorForm({ ...mentorForm, meetLink: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">Specialties (comma separated)</label>
                <input 
                  type="text" 
                  placeholder="BEU Exams, C Programming, Backlog Clearance, Placements"
                  value={mentorForm.specialties}
                  onChange={(e) => setMentorForm({ ...mentorForm, specialties: e.target.value })}
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
