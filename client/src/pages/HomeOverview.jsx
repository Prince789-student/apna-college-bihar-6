import { TrendingUp, Clock, BookOpen, Calculator, GraduationCap, Timer, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeOverview() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Welcome back, {userInfo.name || 'Student'}! 👋
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/dashboard/notes" className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg hover:border-blue-500 transition group">
            <div className="p-3 bg-slate-900 rounded-xl w-12 h-12 mb-4 flex items-center justify-center group-hover:bg-blue-600 transition">
              <BookOpen className="text-blue-400 group-hover:text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">Notes & PYQ</h2>
            <p className="text-slate-400">Access previous year question papers, lab manuals, and chapter notes here.</p>
          </Link>
          
          <Link to="/dashboard/sgpa" className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg hover:border-green-500 transition group">
            <div className="p-3 bg-slate-900 rounded-xl w-12 h-12 mb-4 flex items-center justify-center group-hover:bg-green-600 transition">
              <GraduationCap className="text-green-400 group-hover:text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">SGPA Calculator</h2>
            <p className="text-slate-400">Instantly calculate your semester results using our official CGPA/SGPA tool.</p>
          </Link>

          <Link to="/dashboard/calculator" className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg hover:border-purple-500 transition group">
            <div className="p-3 bg-slate-900 rounded-xl w-12 h-12 mb-4 flex items-center justify-center group-hover:bg-purple-600 transition">
              <Calculator className="text-purple-400 group-hover:text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">Scientific Calc</h2>
            <p className="text-slate-400">Advanced calculator for complex engineering and math problems.</p>
          </Link>

          <Link to="/dashboard/matrix" className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg hover:border-amber-500 transition group">
            <div className="p-3 bg-slate-900 rounded-xl w-12 h-12 mb-4 flex items-center justify-center group-hover:bg-amber-600 transition">
              <Grid className="text-amber-400 group-hover:text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">Matrix Calc</h2>
            <p className="text-slate-400">Solve 4x4 matrices with our premium Casio-style solver tool.</p>
          </Link>

          <Link to="/dashboard/study" className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg hover:border-orange-500 transition group">
            <div className="p-3 bg-slate-900 rounded-xl w-12 h-12 mb-4 flex items-center justify-center group-hover:bg-orange-600 transition mx-auto">
              <Timer className="text-orange-400 group-hover:text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">Study Tracker</h2>
            <p className="text-slate-400">Focus on your subjects with our Study Timer and live group tracking.</p>
          </Link>
      </div>
    </div>
  );
}
