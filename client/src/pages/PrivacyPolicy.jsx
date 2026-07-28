import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield, Lock, Eye, FileText, Database } from 'lucide-react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] selection:bg-blue-500/30 pb-24">
      <SEO title="Privacy Policy | Apna College Bihar" url={window.location.href} />
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group">
          <div className="p-2 bg-slate-100 group-hover:bg-blue-600/10 border border-slate-200 rounded-xl transition-all">
            <ChevronLeft size={20} className="text-blue-600" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
        <div className="flex items-center gap-3">
          <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-8 h-8 rounded-xl border border-slate-200 shadow-sm object-cover" />
          <span className="text-[10px] font-black tracking-tighter uppercase text-slate-800">ACB Hub</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-12 animate-in fade-in duration-500">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-4 bg-blue-600/10 border border-blue-500/20 text-blue-600 rounded-3xl shadow-sm mb-2">
            <Shield size={36} />
          </div>
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Apna College Bihar</p>
          <h1 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">Privacy Policy</h1>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest max-w-lg mx-auto leading-relaxed pt-2">
            Effective Date: May 2026 • Official Study Engine & Exam Hub
          </p>
        </div>

        {/* Policy Cards */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-blue-600">
              <Database size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">1. Information We Collect</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              When you register or interact with Apna College Bihar (ACB), we collect the minimal necessary information to provide a seamless academic experience:
            </p>
            <ul className="space-y-2 text-xs text-slate-600 pl-4 list-disc font-medium">
              <li><strong className="text-slate-900">Account Data:</strong> Email address, display name, and profile picture provided via Google Authentication (Firebase).</li>
              <li><strong className="text-slate-900">Academic & Study Data:</strong> Study timer durations, subjects selected, CGPA calculations, and task lists stored securely in Firestore.</li>
              <li><strong className="text-slate-900">Device & Usage Metrics:</strong> Basic crash reports and performance analytics to ensure stable app operations.</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-emerald-600">
              <Lock size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">2. How We Use Your Data</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              Your data is strictly utilized for enhancing your educational workflow and maintaining platform integrity:
            </p>
            <ul className="space-y-2 text-xs text-slate-600 pl-4 list-disc font-medium">
              <li>To synchronize your study sessions, streak counts, and notes across web and mobile devices.</li>
              <li>To provide personalized UGEAC counselling predictions and BEU CGPA tracking.</li>
              <li>To ensure secure student authentication and prevent unauthorized access.</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-indigo-600">
              <Shield size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">3. Special Android Permissions & Data Usage</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              Our mobile application includes a "Strict Study Blocker" to prevent distractions. To enable this, the app explicitly requests the following sensitive permissions, subject to your explicit consent:
            </p>
            <ul className="space-y-3 text-xs text-slate-600 pl-4 list-disc font-medium">
              <li><strong className="text-slate-900">Usage Access (PACKAGE_USAGE_STATS):</strong> Used locally on your device to determine which applications you are currently opening. This allows us to instantly block access to restricted apps during a study session. <strong className="text-slate-900">We do NOT transmit your app usage history to our servers or any third parties.</strong></li>
              <li><strong className="text-slate-900">Display Over Other Apps (SYSTEM_ALERT_WINDOW):</strong> Used strictly to draw a "Study Focus" overlay screen on top of distracting applications, preventing you from using them until your study timer is completed.</li>
              <li><strong className="text-slate-900">Device Administrator (BIND_DEVICE_ADMIN):</strong> Used solely to temporarily prevent the uninstallation of the app while a strict focus session is active, helping you maintain self-control. It is never used to modify device passwords or wipe data.</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-orange-600">
              <Eye size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">4. Data Sharing & Security</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              We take your privacy seriously. Apna College Bihar does <strong className="text-slate-900">NOT</strong> sell, rent, or trade student personal information to any commercial third parties.
            </p>
            <p className="text-xs font-medium text-slate-500 leading-relaxed">
              All data is encrypted in transit and at rest using industry-standard Firebase Security infrastructure provided by Google Cloud.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <FileText size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">5. Your Rights & Account Deletion</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              In strict accordance with Google Play Data Safety guidelines, you have total ownership of your account and personal data.
            </p>
            <p className="text-xs font-medium text-slate-500 leading-relaxed">
              You can instantly delete your account, study history, and associated data at any time by visiting our dedicated <Link to="/delete-account" className="text-blue-600 underline hover:text-blue-700 font-bold">Account Deletion Portal</Link> or via the "My Profile" menu inside the mobile application.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-purple-600">
              <Database size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">6. Log Files & Cookies</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              Apna College Bihar follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>
            <p className="text-xs font-medium text-slate-700 leading-relaxed mt-2">
              Like any other website, Apna College Bihar uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-yellow-600">
              <Eye size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">7. Google DoubleClick DART Cookie & AdSense</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads.
            </p>
            <p className="text-xs font-medium text-slate-700 leading-relaxed mt-2">
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Apna College Bihar, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center pt-8 border-t border-slate-200 space-y-3">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">BEU - APNA COLLEGE BIHAR</p>
          <p className="text-[9px] font-bold text-slate-500">For privacy inquiries or support, contact us via our official channels.</p>
        </div>
      </div>
    </div>
  );
}
