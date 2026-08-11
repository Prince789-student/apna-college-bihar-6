import React, { useEffect } from 'react';
import { Shield, Mail, FileWarning, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function DMCAPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-20 pb-20">
      <SEO title="D M C A Policy | Apna College Bihar" />
      <div className="container mx-auto max-w-4xl px-6">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 font-bold text-sm mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 p-8 md:p-12">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
            <Shield size={32} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-[1000] tracking-tighter text-slate-900 mb-4">DMCA Takedown Policy</h1>
          <p className="text-slate-500 font-medium mb-10 text-lg">
            Apna College Bihar respects the intellectual property rights of others. This policy outlines our procedures for handling copyright infringement claims.
          </p>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileWarning size={20} className="text-blue-600" /> Educational Fair Use
              </h2>
              <p>
                The materials provided on Apna College Bihar (including Previous Year Questions and study notes) are shared exclusively for non-commercial, educational purposes under the doctrine of Fair Use. We do not claim ownership of official university syllabi, examination papers, or independently authored textbooks.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Filing a Takedown Notice</h2>
              <p className="mb-4">
                If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible via this platform, please notify us immediately.
              </p>
              <p className="mb-4">Your takedown notice must include the following information:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner.</li>
                <li>Identification of the copyrighted work claimed to have been infringed.</li>
                <li>Identification of the material that is claimed to be infringing, including the exact URL or location within the app.</li>
                <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and email address.</li>
                <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
              </ul>
            </section>

            <section className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Mail size={18} className="text-blue-600" /> Contact Information
              </h2>
              <p className="mb-2">Please send your formal DMCA takedown notices to:</p>
              <a href="mailto:contact@apnacollegebihar.online" className="text-blue-600 font-bold hover:underline">
                contact@apnacollegebihar.online
              </a>
              <p className="mt-4 text-sm text-slate-500">
                We will process valid takedown requests within 48-72 hours of receipt and promptly remove or disable access to the allegedly infringing material.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
