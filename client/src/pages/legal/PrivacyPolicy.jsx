import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 text-slate-300 space-y-8 animate-in fade-in duration-500">
      <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Privacy Policy</h1>
      <p className="text-sm font-bold text-slate-500 italic">Last Updated: March 22, 2026</p>

      <section className="space-y-4">
        <h2 className="text-xl font-black text-blue-400">1. Information We Collect</h2>
        <p>Hum aapki basic details collect karte hain jaise <strong>Name, Email, aur Phone Number</strong> jab aap signup karte hain. Ye details sirf aapki identity verify karne ke liye li jati hain.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-black text-blue-400">2. How We Use Data</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>Aapke study progress ko track karne ke liye.</li>
          <li>Aapko personalized notes aur notifications provide karne ke liye.</li>
          <li>Security aur authentication ke liye (Google Login).</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-black text-blue-400">3. Google AdSense & Cookies</h2>
        <p>Hum **Google AdSense** use karte hain ads dikhane ke liye. Google 'cookies' use kar sakta hai aapke interests ke hisab se ads dikhane ke liye. Aap apne browser settings se cookies disable kar sakte hain.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-black text-blue-400">4. Third-Party Links</h2>
        <p>Hamari website par external links ho sakte hain (Jaise PDF download links). Un websites ki privacy policy hamari website se alag ho sakti hai.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-black text-blue-400">5. Contact Us</h2>
        <p>Agar aapko koi sawaal hai toh humein contact karein: <strong>apnacollegebihar@gmail.com</strong></p>
      </section>
    </div>
  );
}
