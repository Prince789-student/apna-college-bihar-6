const admin = require('./firebaseAdmin');
async function seed() {
  const db = admin.firestore();
  const links = {"ai-unit1": "https://www.youtube.com/watch_videos?video_ids=s-s9ilkMVj8,3qRJfUv7W_Y,D1eL1EnxXXQ,0gv8TtsnzLU,BkedAnQfJ_U,n8z9HNV__OA,u9k2Jy-WqdQ,KZFfbebQPAU,xKxh3fQwU8E,HsdiMkKnNLk,e-egxFtAF_4,LAkscQo_Cak,U4t1qFteDjs", "ai-unit2": "https://www.youtube.com/watch_videos?video_ids=E5jVBqe59EE,E5jVBqe59EE,qul0f79gxGs,f8luGFRtshY,w5Xawyfrf0s,jbw6nWFWxDk,0-vP781wblQ,7ffDUDjwz5E,tvAh0JZF2YE,5F9YzkpnaRw,xz1Nq6cZejI,3SiWtAnUROs,uB3i-qV6VdM,Ntu8nNBL28o,dEs_kbvu_0s,AgyCSmDVk5s,udOfKqeLVSg", "ai-unit3": "https://www.youtube.com/watch_videos?video_ids=9iN3O_oL2ac,6490tKrGEic,wX-8RzW2J7I,pkLcCto83u0,FpGeg27Ffk8,XYfTz5gziBk,Aw3EOSr64j0,62ssjzQdzIs,TD7DilUtUvE,y2HQmvqXON4,5iHBv_74Ces,oaTtOblatKI", "ai-unit4": "https://www.youtube.com/watch_videos?video_ids=MIf5shIfsj8,SktJqrYereQ,oKko3ukFLVc,DVnubVOjZtg,xDyMuT9BliI,vof2vhfqoBo,o-2O4fmIu3E,N0BsxaRkMIU,6eKQnSf7atA", "ai-unit5": "https://www.youtube.com/watch_videos?video_ids=4dwsSz_fNSQ,fM8XdC1EweU,qbCC4B5YsbU,mvveVcbHynE,O1nWXTXcCwI,mvveVcbHynE,5FpsGnkbEpM,EYeF2e2IKEo,rvxd13IHx1Y,bPpwZxasJo0,WRF2NeVwycA,o0GFC6c_k4g,y39OlGrVFD8,C78FeCxVCaY,RfuQ5B1sjfM,fRbIsoHbpy4,72DSH_B2DjE,QskN3ck7b2k"};
  try {
    for (const [id, url] of Object.entries(links)) {
      await db.collection('shortlinks').doc(id).set({ longUrl: url, createdAt: new Date() }, { merge: true });
      console.log('Added ' + id);
    }
    console.log('AI custom playlists seeded!');
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}
seed();
