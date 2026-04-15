import React, { useState, useEffect } from 'react';
import { 
  FolderPlus, FilePlus, Folder, FileText, 
  ChevronRight, ArrowLeft, Trash2, Save,
  MoreVertical, Search, Clock, Shield
} from 'lucide-react';
import { db } from '../firebase';
import { 
  collection, query, where, onSnapshot, 
  addDoc, deleteDoc, doc, updateDoc, serverTimestamp 
} from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function PersonalManager() {
  const { user } = useAuth();
  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null); // null = root
  const [selectedNote, setSelectedNote] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  
  const [search, setSearch] = useState('');

  // Fetch Data
  useEffect(() => {
    if (!user) return;

    const fQuery = query(collection(db, 'user_folders'), where('userId', '==', user.uid));
    const nQuery = query(collection(db, 'user_notes'), where('userId', '==', user.uid));

    const unsubF = onSnapshot(fQuery, (snap) => {
      setFolders(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    const unsubN = onSnapshot(nQuery, (snap) => {
      setNotes(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });

    return () => { unsubF(); unsubN(); };
  }, [user]);

  const createFolder = async (e) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;
    try {
      await addDoc(collection(db, 'user_folders'), {
        name: newFolderName,
        userId: user.uid,
        createdAt: serverTimestamp()
      });
      setNewFolderName('');
      setIsFolderModalOpen(false);
      toast.success('Folder created successfully!');
    } catch (err) { toast.error('Failed to create folder'); }
  };

  const createNote = async () => {
    if (!currentFolder) {
        toast.error('Bhai, folder ke andar hi file bana sakte ho!');
        return;
    }
    const title = prompt('Enter note title:');
    if (!title) return;

    try {
      const docRef = await addDoc(collection(db, 'user_notes'), {
        title,
        content: '',
        folderId: currentFolder.id,
        userId: user.uid,
        updatedAt: serverTimestamp(),
        createdAt: serverTimestamp()
      });
      setSelectedNote({ id: docRef.id, title, content: '', folderId: currentFolder.id });
    } catch (err) { toast.error('Failed to create note'); }
  };

  const saveNote = async () => {
    if (!selectedNote) return;
    try {
      await updateDoc(doc(db, 'user_notes', selectedNote.id), {
        content: selectedNote.content,
        updatedAt: serverTimestamp()
      });
      toast.success('Saved to ACB Vault');
    } catch (err) { toast.error('Failed to save'); }
  };

  const deleteItem = async (id, type) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;
    try {
      await deleteDoc(doc(db, type === 'folder' ? 'user_folders' : 'user_notes', id));
      if (type === 'folder') {
          // deleting folder should ideally delete its notes or set them to root, 
          // but for simplicity we just clear view
          if (currentFolder?.id === id) setCurrentFolder(null);
      } else {
          if (selectedNote?.id === id) setSelectedNote(null);
      }
      toast.success('Deleted successfully');
    } catch (err) { toast.error('Delete failed'); }
  };

  const filteredFolders = folders.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));
  const folderNotes = notes.filter(n => n.folderId === currentFolder?.id);

  if (loading) return <div className="flex items-center justify-center min-h-[60vh]"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* Header Area */}
      <div className="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[4rem] border border-slate-200/80 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-600/10 text-blue-600 rounded-3xl shadow-lg border border-blue-100">
                <Shield size={36} />
              </div>
              <div>
                <h1 className="text-4xl font-[1000] text-slate-800 tracking-tighter uppercase leading-none">Personal Vault</h1>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-3">Private Cloud Storage • Encrypted Notes</p>
              </div>
           </div>
           
           <div className="flex items-center gap-3">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600" size={16} />
                <input 
                  value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Seach files..."
                  className="bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-2xl p-4 pl-12 text-xs font-bold outline-none transition-all w-[200px] shadow-inner"
                />
              </div>
              <button onClick={() => setIsFolderModalOpen(true)} className="p-4 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
                <FolderPlus size={18} />
              </button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SIDEBAR: FOLDERS */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 shadow-sm min-h-[400px]">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-2 flex items-center justify-between">
              Directories {currentFolder && <button onClick={() => setCurrentFolder(null)} className="text-blue-600 hover:underline">Root</button>}
            </h3>
            
            <div className="space-y-2">
              {filteredFolders.length === 0 ? (
                <div className="text-center py-10 opacity-30"><Folder size={40} className="mx-auto mb-2" /><p className="text-[10px] font-bold uppercase">No folders yet</p></div>
              ) : (
                filteredFolders.map(f => (
                  <div key={f.id} 
                    className={`group flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer ${currentFolder?.id === f.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-transparent hover:border-slate-200'}`}
                    onClick={() => { setCurrentFolder(f); setSelectedNote(null); }}
                  >
                    <div className="flex items-center gap-4">
                      <Folder size={20} className={currentFolder?.id === f.id ? 'text-white' : 'text-blue-600'} />
                      <span className="text-xs font-black uppercase tracking-tight">{f.name}</span>
                    </div>
                    <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={(e) => { e.stopPropagation(); deleteItem(f.id, 'folder'); }} className="p-2 hover:bg-red-500 hover:text-white rounded-lg transition-colors">
                        <Trash2 size={14} />
                      </button>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="lg:col-span-8 space-y-6">
          {!currentFolder ? (
            <div className="bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-[3rem] p-20 text-center flex flex-col items-center justify-center space-y-4">
               <div className="w-20 h-20 bg-white shadow-xl rounded-[2rem] flex items-center justify-center text-slate-200"><Folder size={40}/></div>
               <h3 className="text-xl font-black text-slate-300 uppercase">Select a folder to begin</h3>
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest max-w-[200px]">Organize your personal documents in secure directories.</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-500">
               
               {/* Note Editor / Note List Switch */}
               {selectedNote ? (
                 <div className="bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="bg-slate-900 p-6 flex items-center justify-between">
                       <button onClick={() => setSelectedNote(null)} className="text-slate-400 hover:text-white flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all">
                          <ArrowLeft size={16}/> Back
                       </button>
                       <h4 className="text-white text-sm font-black uppercase tracking-tight">{selectedNote.title}</h4>
                       <button onClick={saveNote} className="px-6 py-2 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-105 transition-all flex items-center gap-2">
                          <Save size={14} /> Save
                       </button>
                    </div>
                    <textarea 
                      value={selectedNote.content}
                      onChange={e => setSelectedNote({...selectedNote, content: e.target.value})}
                      placeholder="Start writing your note here..."
                      className="w-full h-[500px] p-10 outline-none text-slate-800 font-medium text-lg resize-none placeholder:text-slate-100 bg-slate-50/10"
                    />
                    <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[8px] font-black text-slate-400 uppercase tracking-widest px-8">
                       <span>Draft saved locally</span>
                       <div className="flex items-center gap-4">
                          <span className="flex items-center gap-2"><Clock size={10}/> Last modified: just now</span>
                       </div>
                    </div>
                 </div>
               ) : (
                 <div className="space-y-6">
                    <div className="flex items-center justify-between bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-5"><FileText size={40}/></div>
                       <div>
                          <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">{currentFolder.name}</h3>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{folderNotes.length} Files found</p>
                       </div>
                       <button onClick={createNote} className="px-8 py-4 bg-slate-950 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all">
                          <FilePlus size={18} /> New Note
                       </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {folderNotes.length === 0 ? (
                         <div className="col-span-full py-20 bg-slate-50 border border-dashed border-slate-200 rounded-[2.5rem] text-center italic text-slate-400 text-xs">This folder is empty. Created a note to get started.</div>
                       ) : (
                         folderNotes.map(n => (
                           <div key={n.id} onClick={() => setSelectedNote(n)} className="group bg-white border border-slate-200 p-6 rounded-[2rem] hover:border-blue-500 shadow-sm hover:shadow-xl transition-all cursor-pointer flex items-center justify-between relative overflow-hidden">
                              <div className="flex items-center gap-4 relative z-10">
                                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <FileText size={24} />
                                 </div>
                                 <div className="min-w-0">
                                    <h4 className="font-black text-slate-900 uppercase tracking-tight text-sm truncate">{n.title}</h4>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase mt-1 truncate max-w-[150px]">{n.content.substring(0, 30) || 'No content yet...'}</p>
                                 </div>
                              </div>
                              <button onClick={(e) => { e.stopPropagation(); deleteItem(n.id, 'note'); }} className="p-2 opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all">
                                 <Trash2 size={16} />
                              </button>
                           </div>
                         ))
                       )}
                    </div>
                 </div>
               )}
            </div>
          )}
        </div>
      </div>

      {/* MODAL: NEW FOLDER */}
      {isFolderModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-md">
           <form onSubmit={createFolder} className="bg-white w-full max-w-sm rounded-[3rem] p-10 space-y-8 animate-in zoom-in-95 duration-300 border border-slate-200">
              <div className="text-center space-y-2">
                 <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4"><FolderPlus size={32}/></div>
                 <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">New Directory</h2>
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Create a unique space for your records</p>
              </div>
              <input 
                autoFocus required
                value={newFolderName} onChange={e => setNewFolderName(e.target.value)}
                placeholder="Folder Name (e.g. Unit 1 Math)"
                className="w-full bg-slate-50 border-2 border-slate-100 focus:border-blue-500 rounded-2xl p-4 text-xs font-black outline-none transition-all placeholder:text-slate-300"
              />
              <div className="flex gap-4">
                 <button onClick={() => setIsFolderModalOpen(false)} type="button" className="flex-1 py-4 text-slate-500 font-black text-xs uppercase tracking-widest">Cancel</button>
                 <button type="submit" className="flex-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20 active:scale-95">Create Folder</button>
              </div>
           </form>
        </div>
      )}

    </div>
  );
}
