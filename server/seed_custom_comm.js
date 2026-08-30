const admin = require('./firebaseAdmin');
const db = admin.firestore();

const playlists = {
  'comm-unit1': {
    title: "Communication Skills Unit 1: Vocabulary Enrichment",
    videos: [
      { title: "Technical Vocabulary Development", url: "https://www.youtube.com/watch?v=VmaGwXFK2zY" },
      { title: "Nature of Word Formation", url: "https://www.youtube.com/watch?v=fPVW-VQOnCk" },
      { title: "Root Word and Morpheme", url: "https://www.youtube.com/watch?v=uW7upnbrA30" },
      { title: "Prefix and Suffix", url: "https://www.youtube.com/watch?v=IFIGx166u0Q" },
      { title: "Foreign Expressions in English", url: "https://www.youtube.com/watch?v=srn5jgr9TZo" },
      { title: "Synonyms and Antonyms", url: "https://www.youtube.com/watch?v=O77Wlyh-lGs" },
      { title: "Homophones and Homographs", url: "https://www.youtube.com/watch?v=FUYWt0k4OQw" },
      { title: "Abbreviations and Acronyms", url: "https://www.youtube.com/watch?v=xM7vgPy9n_A" },
    ]
  },
  'comm-unit2': {
    title: "Communication Skills Unit 2: Basics of English Grammar",
    videos: [
      { title: "Parts of Speech", url: "https://www.youtube.com/watch?v=zAIt3VbkL6g" },
      { title: "Articles", url: "https://www.youtube.com/watch?v=36ruBmX65Ho" },
      { title: "Prepositions", url: "https://www.youtube.com/watch?v=nO3Bj3sUPQU" },
      { title: "Subject Verb Agreement", url: "https://www.youtube.com/watch?v=zfbUzWqsH74" },
      { title: "Phrase and Clause", url: "https://www.youtube.com/watch?v=RqjWuIercGw" },
      { title: "Formation of Questions using Primary Auxiliaries", url: "https://www.youtube.com/watch?v=2kOBaf9VmVE" },
      { title: "Formation of Questions using Modals", url: "https://www.youtube.com/watch?v=ebVMsfWGWJc" },
      { title: "Formation of Questions using Wh-Words", url: "https://www.youtube.com/watch?v=AFdlaFSjjDQ" },
      { title: "Tenses", url: "https://www.youtube.com/watch?v=EhjoBikn-jQ" },
      { title: "Active and Passive Voice", url: "https://www.youtube.com/watch?v=1rHi6HGYjQc" },
      { title: "Redundancies and Clichés", url: "https://www.youtube.com/watch?v=afDVm0LvFTM" },
    ]
  },
  'comm-unit3': {
    title: "Communication Skills Unit 3: Technical Communication",
    videos: [
      { title: "Communication: Role and Relevance", url: "https://www.youtube.com/watch?v=ykTuooKDVRU" },
      { title: "Communication Process and Steps", url: "https://www.youtube.com/watch?v=ykTuooKDVRU" },
      { title: "Formal and informal communication", url: "https://www.youtube.com/watch?v=Z1IyazuG0ag" },
      { title: "Verbal and non-verbal communication", url: "https://www.youtube.com/watch?v=cFIMZBCf7QE" },
      { title: "Kinesics, Chronemics, Proxemics, Haptics, Vocalics/Paralanguage", url: "https://www.youtube.com/watch?v=i7og-Xripf0" },
      { title: "Barriers to Communication", url: "https://www.youtube.com/watch?v=FxIwXNmijJw" },
      { title: "Pattern and channels of communication", url: "https://www.youtube.com/watch?v=ykTuooKDVRU" },
      { title: "7C's for effective communication", url: "https://www.youtube.com/watch?v=cgfvMWq8WV8" },
    ]
  },
  'comm-unit4': {
    title: "Communication Skills Unit 4: Techniques of Professional Writing",
    videos: [
      { title: "Formal and informal Letter Writing", url: "https://www.youtube.com/watch?v=Z1IyazuG0ag" },
      { title: "Cover letter and application writing", url: "https://www.youtube.com/watch?v=UABAwZ21_bc" },
      { title: "Report Writing", url: "https://www.youtube.com/watch?v=eX5RQEmXO_U" },
      { title: "Proposal Writing", url: "https://www.youtube.com/watch?v=4l_ZPmw1zKU" },
      { title: "Notice Writing", url: "https://www.youtube.com/watch?v=IxgnF2wEx14" },
      { title: "Agenda and Minutes of Meeting", url: "https://www.youtube.com/watch?v=Q6o4fCzNt7Q" },
      { title: "Memorandum", url: "https://www.youtube.com/watch?v=Enzb62OOsKA" },
      { title: "Bio-Data, Resume, Curriculum Vitae", url: "https://www.youtube.com/watch?v=YXUpmDMbbUQ" },
      { title: "Essay Writing", url: "https://www.youtube.com/watch?v=ykTuooKDVRU" },
      { title: "Email Writing", url: "https://www.youtube.com/watch?v=rGrH-IGHS9w" },
    ]
  },
  'comm-unit5': {
    title: "Communication Skills Unit 5: Comprehension and Interpretation Skills",
    videos: [
      { title: "If (Poem) by Rudyard Kipling", url: "https://www.youtube.com/watch?v=yTEzMktUyYQ" },
      { title: "Of Studies (Essay) by Sir Francis Bacon", url: "https://www.youtube.com/watch?v=1YArDoFhaf4" },
      { title: "India: Our Motherland (Essay) by Swami Vivekananda", url: "https://www.youtube.com/watch?v=zfSycao_dBQ" },
      { title: "A Devoted Son (Story) by Anita Desai", url: "https://www.youtube.com/watch?v=MIkdmvk2WUE" },
      { title: "Unseen/Untaught passage", url: "https://www.youtube.com/watch?v=loZMBgfs5xU" },
    ]
  },
};

async function seedPlaylists() {
  for (const [id, data] of Object.entries(playlists)) {
    await db.collection('custom_playlists').doc(id).set(data);
    console.log(`Added ${id}`);
  }
  console.log('Communication Skills custom playlists seeded!');
}

seedPlaylists().catch(console.error);
