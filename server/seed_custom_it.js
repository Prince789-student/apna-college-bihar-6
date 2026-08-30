const admin = require('./firebaseAdmin');
async function seed() {
  const db = admin.firestore();
  const links = {
    "it-unit1": "https://www.youtube.com/watch_videos?video_ids=e_Mhgi0jMzU,p8MjuQHNec8,k5YMLXPy1SE,zwovvWfkuSg,6e6yKtr2VGI,zwovvWfkuSg,e69YYxID1fM,joWVGwnEiYw,Y4UBGVxwMt0,5Y3SjUNXBXc,KUxq0QhzisA,Yr3PtjNR5OY,9UNIK5wIKBU,7ICf62fp_4I,WaDVObXJTxk",
    "it-unit2": "https://www.youtube.com/watch_videos?video_ids=MxjJqq3B6JU,xpy5NXiBFvA,MxjJqq3B6JU,4cjs2GrOf6Y,Qj--DhAw9VQ,_pHTxlvwo24,0UVSPwzGw4U,0UVSPwzGw4U",
    "it-unit3": "https://www.youtube.com/watch_videos?video_ids=5wvsw0yvDlc,jPjimIJ-Mr8,PU9O3shK4wc,KMtaud07YEo,PU9O3shK4wc,WJ-UaAaumNA,Ij71sDmmKpc,7OjxBM7h5Qs,vpdwc8wXk2w,ggnn5O3tC5A",
    "it-unit4": "https://www.youtube.com/watch_videos?video_ids=NbjBRANGs4s,WuQKlGaa9Bg,WuQKlGaa9Bg,seG-aeL3LdA,n0iaPtsnmxQ,ixMDEDo97Mk,nmMaHsXIoEw,zg5_mrc4jH4,6T6eXk2mAx8,gLSn0OvJ-88,AuFD7BHBgcw,EtIAZ6B8LDQ,jPUHSlo121E,HF_znV8x9a0,_szgZM1sDiM,g30J4T5iKCo,NWP5ff2M02I,UTqjnLEb8YE,a5CgfS0Y4Uc",
    "it-unit5": "https://www.youtube.com/watch_videos?video_ids=peNkYXtjtKs,gPUKS480uSE,VBejkJSsHZ0,PR96L-gCQd8,tjpW45fOxp8,qzAHXO-cN5Q,jNJH6uD5LQE,qzAHXO-cN5Q,4dwsSz_fNSQ,cE-Ej1ycXtk,_J0sJmhEcI4,mfSr-c9sAjI,x59Kt7V6Reg,hF4nlOTfKcI,GLN1ntfpPm0,2fkRMGIMbXg",
  };
  try {
    for (const [id, url] of Object.entries(links)) {
      await db.collection('shortlinks').doc(id).set({ longUrl: url, createdAt: new Date() }, { merge: true });
      console.log('Added ' + id);
    }
    console.log('IT custom playlists seeded!');
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data: ", error);
    process.exit(1);
  }
}
seed();
