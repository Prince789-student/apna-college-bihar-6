import React, { useState } from 'react';
import { CalendarRange, ChevronLeft, ChevronRight, Bell } from 'lucide-react';
import SEO from '../components/SEO';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const holidays = [
    { date: '2026-01-26', name: 'Republic Day' },
    { date: '2026-03-26', name: 'Holi' },
    { date: '2026-08-15', name: 'Independence Day' },
    { date: '2026-10-02', name: 'Gandhi Jayanti' },
    { date: '2026-11-06', name: 'Chhath Puja' },
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const renderDays = () => {
    const totalDays = daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    const startDay = firstDayOfMonth(currentDate.getMonth(), currentDate.getFullYear());
    const days = [];

    // Fill empty slots
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-4 border border-slate-50/50 opacity-0"></div>);
    }

    // Fill actual days
    for (let day = 1; day <= totalDays; day++) {
      const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const holiday = holidays.find(h => h.date === dateString);
      const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear();

      days.push(
        <div key={day} className={`p-4 border border-slate-100 min-h-[100px] flex flex-col justify-between transition-all hover:bg-blue-50/30 ${isToday ? 'bg-blue-600/10' : ''}`}>
          <span className={`text-xs font-black ${isToday ? 'text-blue-600' : 'text-slate-400'}`}>{day}</span>
          {holiday && (
            <div className="bg-red-50 text-red-600 p-1.5 rounded-lg text-[7px] font-black uppercase tracking-tighter text-center">
              {holiday.name}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <SEO title="Calendar | Apna College Bihar" url={window.location.href} />
      <div className="flex items-center justify-between bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-orange-600/10 text-orange-600 rounded-3xl">
            <CalendarRange size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-[1000] text-slate-900 uppercase tracking-tighter">Academic Calendar</h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1">BEU 2026 Holidays & Exam Cycles</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={prevMonth} className="p-3 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-2xl transition-all"><ChevronLeft size={20}/></button>
          <span className="text-sm font-black uppercase tracking-widest text-slate-900 w-32 text-center">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
          <button onClick={nextMonth} className="p-3 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-2xl transition-all"><ChevronRight size={20}/></button>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden">
        <div className="grid grid-cols-7 bg-slate-950 text-white py-4 text-center">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <span key={day} className="text-[10px] font-black uppercase tracking-widest">{day}</span>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {renderDays()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 p-8 rounded-[3rem] shadow-sm">
           <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
             <Bell size={14} className="text-orange-500" />
             Upcoming Events
           </h3>
           <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between border border-slate-100">
                <span className="text-[10px] font-black uppercase text-slate-900">UGEAC Counselling 2025</span>
                <span className="text-[8px] font-bold px-3 py-1 bg-blue-600 text-white rounded-full">Coming Soon</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between border border-slate-100">
                <span className="text-[10px] font-black uppercase text-slate-900">BEU Sem 2nd Exam</span>
                <span className="text-[8px] font-bold px-3 py-1 bg-orange-600 text-white rounded-full">July 2026</span>
              </div>
           </div>
        </div>
        
        <div className="bg-slate-900 p-8 rounded-[3rem] shadow-2xl flex flex-col justify-center">
           <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Sync with Device</h3>
           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">Add academic events to your personal calendar</p>
           <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">Download .ICS File</button>
        </div>
      </div>
    </div>
  );
}
