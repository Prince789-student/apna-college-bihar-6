import { useState, useEffect } from 'react';
import { doc, getDoc, collection, query, where, getDocs, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Dashboard({ user }) {
  const [userData, setUserData] = useState(null);
  const [myGroups, setMyGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groupCode, setGroupCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData();
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      // Get User Document
      const userRef = doc(db, 'Users', user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setUserData(userSnap.data());
      }

      // Get User's Groups
      const q = query(collection(db, 'Groups'), where('members', 'array-contains', user.uid));
      const groupSnaps = await getDocs(q);
      const groups = groupSnaps.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMyGroups(groups);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateGroup = async () => {
    if (!groupName) return;
    setError('');
    
    // Generate unique 6-character group code
    const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const groupId = `group_${Date.now()}`;

    const newGroup = {
      groupId,
      groupName,
      groupCode: newCode,
      createdBy: user.uid,
      members: [user.uid],
      memberCount: 1,
      maxMembers: 50,
      createdAt: new Date().toISOString()
    };

    try {
      await setDoc(doc(db, 'Groups', groupId), newGroup);
      setShowCreate(false);
      setGroupName('');
      fetchDashboardData();
    } catch (err) {
      console.error(err);
      setError('Failed to create group');
    }
  };

  const handleJoinGroup = async () => {
    if (!groupCode) return;
    setError('');

    try {
      // Find group by code
      const q = query(collection(db, 'Groups'), where('groupCode', '==', groupCode.toUpperCase()));
      const snap = await getDocs(q);
      
      if (snap.empty) {
        setError('Group not found. Invalid code.');
        return;
      }

      const groupDoc = snap.docs[0];
      const groupData = groupDoc.data();

      // Validate member count and if already in group
      if (groupData.members.includes(user.uid)) {
        setError('You are already in this group.');
        return;
      }
      if (groupData.memberCount >= groupData.maxMembers) {
        setError('Group is full (max 50 members).');
        return;
      }

      // Add user to group
      await updateDoc(doc(db, 'Groups', groupDoc.id), {
        members: arrayUnion(user.uid),
        memberCount: groupData.memberCount + 1
      });

      setShowJoin(false);
      setGroupCode('');
      fetchDashboardData();
    } catch (err) {
      console.error(err);
      setError('Failed to join group');
    }
  };

  const formatMins = (totalSeconds) => Math.floor((totalSeconds || 0) / 60);
  const formatHrs = (totalSeconds) => ((totalSeconds || 0) / 3600).toFixed(1);

  if (loading) return <div className="loader mt-8"></div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 style={{ fontSize: '2rem' }}>Welcome back, {userData?.name || 'User'}!</h2>
        <button onClick={() => navigate('/timer')} className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', borderRadius: '12px' }}>
          + Start Study Session
        </button>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="text-muted text-sm uppercase tracking-wider">Today's Study Time</div>
          <div className="stat-value">{formatMins(userData?.todayStudyTime)} mins</div>
        </div>
        <div className="card stat-card">
          <div className="text-muted text-sm uppercase tracking-wider">Total Study Time</div>
          <div className="stat-value">{formatHrs(userData?.totalStudyTime)} hours</div>
        </div>
      </div>

      <div className="actions-grid mb-8">
        <button onClick={() => setShowCreate(true)} className="card btn" style={{ padding: '2rem', border: '1px dashed var(--primary)', background: 'transparent', width: '100%' }}>
          + Create Group
        </button>
        <button onClick={() => setShowJoin(true)} className="card btn" style={{ padding: '2rem', border: '1px dashed var(--success)', background: 'transparent', width: '100%', color: 'var(--success)' }}>
          + Join Group
        </button>
      </div>

      <h3>Your Groups</h3>
      {myGroups.length === 0 ? (
        <p className="text-muted">You haven't joined any groups yet.</p>
      ) : (
        <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {myGroups.map(grp => (
            <div key={grp.id} className="list-item">
              <div>
                <div className="list-item-title">{grp.groupName}</div>
                <div className="text-sm text-muted">Code: {grp.groupCode} &bull; {grp.memberCount}/{grp.maxMembers} members</div>
              </div>
              <button onClick={() => navigate(`/group/${grp.id}`)} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                Go to Group
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Create Group Modal */}
      {showCreate && (
        <div className="modal-overlay" onClick={() => setShowCreate(false)}>
          <div className="card modal" onClick={e => e.stopPropagation()}>
            <h3 className="mb-4">Create New Group</h3>
            <label className="text-sm mb-2 block">Group Name</label>
            <input 
              className="input" 
              placeholder="E.g. Engineering 101" 
              value={groupName}
              onChange={e => setGroupName(e.target.value)}
              autoFocus
            />
            {error && <div className="text-danger mb-4 text-sm">{error}</div>}
            <div className="flex gap-4 justify-end">
              <button className="btn btn-secondary" onClick={() => setShowCreate(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleCreateGroup}>Create Code</button>
            </div>
          </div>
        </div>
      )}

      {/* Join Group Modal */}
      {showJoin && (
        <div className="modal-overlay" onClick={() => setShowJoin(false)}>
          <div className="card modal" onClick={e => e.stopPropagation()}>
            <h3 className="mb-4">Join Group</h3>
            <label className="text-sm mb-2 block">Enter 6-Character Code</label>
            <input 
              className="input" 
              placeholder="XXXXXX" 
              value={groupCode}
              onChange={e => setGroupCode(e.target.value.toUpperCase())}
              maxLength={6}
              autoFocus
            />
            {error && <div className="text-danger mb-4 text-sm">{error}</div>}
            <div className="flex gap-4 justify-end">
              <button className="btn btn-secondary" onClick={() => setShowJoin(false)}>Cancel</button>
              <button className="btn btn-primary" style={{ background: 'var(--success)', color: 'white' }} onClick={handleJoinGroup}>Join Group</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
