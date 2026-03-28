import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Group({ user }) {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchGroup();
  }, [groupId]);

  const fetchGroup = async () => {
    try {
      const groupRef = doc(db, 'Groups', groupId);
      const groupSnap = await getDoc(groupRef);

      if (!groupSnap.exists()) {
        setError('Group not found');
        return;
      }

      const grpData = groupSnap.data();
      setGroup(grpData);

      // Verify user is in group
      if (!grpData.members.includes(user.uid)) {
        navigate('/dashboard');
        return;
      }

      // Fetch user names and stats for the members
      const memberPromises = grpData.members.map(memberId => getDoc(doc(db, 'Users', memberId)));
      const memberDocs = await Promise.all(memberPromises);
      const membersData = memberDocs.map(userDoc => {
        if (userDoc.exists()) {
          return { id: userDoc.id, ...userDoc.data() };
        }
        return { id: userDoc.id, name: 'Unknown User', todayStudyTime: 0 };
      });

      // Sort by todayStudyTime descending
      membersData.sort((a, b) => (b.todayStudyTime || 0) - (a.todayStudyTime || 0));

      setMembers(membersData);
    } catch (err) {
      console.error(err);
      setError('Error loading group');
    } finally {
      setLoading(false);
    }
  };

  const formatMins = (totalSeconds) => Math.floor((totalSeconds || 0) / 60);

  if (loading) return <div className="loader mt-8"></div>;
  if (error) return <div className="text-danger p-8">{error}</div>;
  if (!group) return null;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2>{group.groupName}</h2>
          <div className="text-muted text-sm">Create Date: {new Date(group.createdAt).toLocaleDateString()}</div>
        </div>
        <div className="card text-center" style={{ padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid var(--primary)' }}>
          <div className="text-xs uppercase text-muted tracking-wider">Group Capacity</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>
            {group.memberCount} / {group.maxMembers}
          </div>
        </div>
      </div>

      <div className="actions-grid mb-8">
        <div className="flex gap-4 items-center card" style={{ padding: '1rem', flex: 1 }}>
          <div className="text-sm font-semibold">Group Code:</div>
          <div className="badge flex items-center" style={{ fontSize: '1.2rem', letterSpacing: '0.1em' }}>
            {group.groupCode}
          </div>
          <div className="text-xs text-muted ml-auto">Share this code to invite others</div>
        </div>
        
        <button onClick={() => navigate('/timer')} className="btn btn-primary" style={{ padding: '1rem', borderRadius: '12px' }}>
          🚀 Start Group Study Session
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Member List */}
        <div>
          <h3 className="mb-4">Member Directory</h3>
          <div className="card" style={{ padding: '0.5rem' }}>
            {members.map(member => (
              <div key={member.id} className="list-item" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex items-center gap-4">
                  <div 
                    style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)', color: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 'bold', fontSize: '0.8rem'
                    }}
                  >
                    {member.name ? member.name.charAt(0).toUpperCase() : '?'}
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    {member.name} {member.id === user.uid && <span className="text-muted text-xs font-normal ml-1">(You)</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h3 className="mb-4">🏆 Daily Leaderboard</h3>
          <div className="card" style={{ padding: '1rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            {members.length === 0 ? (
              <p className="text-muted">No members found.</p>
            ) : (
              members.map((member, index) => (
                <div key={member.id} className="list-item" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center gap-4">
                    <div style={{ width: '25px', color: index < 3 ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 700 }}>#{index + 1}</div>
                    <div style={{ fontWeight: 600, flex: 1 }}>{member.name}</div>
                    <div style={{ color: 'var(--success)', fontWeight: 700 }}>{formatMins(member.todayStudyTime)} min</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
