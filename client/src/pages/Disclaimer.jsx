import React, { useEffect } from 'react';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-20 pb-20">
      <SEO title="Disclaimer | Apna College Bihar" />
      <div className="container mx-auto max-w-4xl px-6">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 font-bold text-sm mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 p-8 md:p-12">
          <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8">
            <AlertCircle size={32} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-[1000] tracking-tighter text-slate-900 mb-4">Legal Disclaimer</h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed mt-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
              <h2 className="text-lg font-bold text-amber-900 mb-2">Non-Affiliation Declaration</h2>
              <p className="text-amber-800 font-medium">
                Apna College Bihar is an independent educational platform created by and for the students. We are NOT officially affiliated, associated, authorized, endorsed by, or in any way officially connected with Bihar Engineering University (BEU) Patna, the Government of Bihar, or any specific engineering college.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information Accuracy</h2>
              <p>
                All information, study materials, notes, and previous year question papers provided on this platform are for educational and informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Third-Party Content</h2>
              <p>
                Through this app/website, you may be able to link to other websites or download third-party PDF files. We have no control over the nature, content, and availability of those sites or files. The inclusion of any links or files does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. App Focus/Blocker Features</h2>
              <p>
                The Study Mode/App Blocker functionality uses local device permissions (Usage Access) to help students maintain focus. We do not guarantee improved academic performance or changes in behavior. We are not responsible for any missed notifications, alarms, or urgent messages resulting from the use of our Focus Mode.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Limitation of Liability</h2>
              <p>
                In no event will Apna College Bihar, its creators, or contributors be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this application.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
