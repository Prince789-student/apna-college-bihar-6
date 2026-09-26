import React from 'react';

/**
 * BEUNoticeReel - Remotion-compatible React component
 * Generates automated 9:16 mobile video reels for breaking BEU Notices & Results
 */
export const BEUNoticeReel = ({
  title = "BEU B.Tech 7th Sem Examination Schedule Announced",
  date = "September 2026",
  category = "URGENT EXAM NOTICE",
  collegeName = "Bihar Engineering University, Patna"
}) => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '420px',
      aspectRatio: '9/16',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '32px 24px',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      fontFamily: 'Inter, system-ui, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '260px',
        height: '260px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          background: 'rgba(239, 68, 68, 0.2)',
          border: '1px solid rgba(239, 68, 68, 0.5)',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 700,
          color: '#f87171',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          {category}
        </div>
        <p style={{ marginTop: '12px', color: '#94a3b8', fontSize: '14px' }}>
          {collegeName}
        </p>
      </div>

      {/* Main Notice Title */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 800,
          lineHeight: 1.3,
          letterSpacing: '-0.5px',
          background: 'linear-gradient(to right, #ffffff, #e2e8f0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '16px'
        }}>
          {title}
        </h1>
        <div style={{
          height: '4px',
          width: '60px',
          background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
          borderRadius: '2px'
        }} />
      </div>

      {/* Footer Branding */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        paddingTop: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div>
          <span style={{ fontSize: '16px', fontWeight: 800, color: '#38bdf8' }}>
            Apna College Bihar
          </span>
          <p style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
            apnacollegebihar.com &bull; {date}
          </p>
        </div>
        <div style={{
          background: 'rgba(56, 189, 248, 0.15)',
          padding: '8px 12px',
          borderRadius: '12px',
          fontSize: '11px',
          fontWeight: 600,
          color: '#38bdf8'
        }}>
          WhatsApp Alert
        </div>
      </div>
    </div>
  );
};

export default BEUNoticeReel;
