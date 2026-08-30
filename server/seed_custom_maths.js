const admin = require('./firebaseAdmin');
async function seed() {
  const db = admin.firestore();
  const links = {"math-unit1": "https://www.youtube.com/watch_videos?video_ids=ac7SWT8eNA8,zAsSkYhDxGM,iggxjHSQiOI,qBBhTkIdToY,I6DmFmLclLg,gXveJraU7hc,B4h6OkQ0ZJ8,89OS_fErDG4,mQ379T1r0Cg,V_IPrITzNbY,IJM3Js4Ry7Q,ToMFyAeHzIQ,_rgEiQfsKP0", "math-unit2": "https://www.youtube.com/watch_videos?video_ids=KijGLjxKlsY,EGnI8WyYb3o,IFtjDDB8fzo,_rLizW7giT4,d2N_-Hpj6cs,c-IW-oSFUr0,BP9nyA2HXik,qW9slRb9Fic", "math-unit3": "https://www.youtube.com/watch_videos?video_ids=g-7VjUQiFwc,nhty8kOpRn4,gAxRqkB9VcA,gnh8QJFMa2Y,ZUdyoYxwMpM,HMYfMIVdpdc,nhp2UYrCNtM,EtpM22U5bGg", "math-unit4": "https://www.youtube.com/watch_videos?video_ids=FS-6am1Z3_E,6yMaL859Hp8,W6Q2QeL_1Ok,id85YIuirKM,ODwLL8S0qkg,yXNKtjBbcBc,M2KnFTKjB74,WuqYW3dePR0,pVJhO86ZhHk,JY283iTPeRs,LLX0UjUGL5w,r_P-_6WtPqs", "math-unit5": "https://www.youtube.com/watch_videos?video_ids=QmMLgdxyWdQ,-66K7dKzH0c,VgY5jeCvwWE,CN2wg5aQUuE,yrgSlCLZlsE,ApcgoQO2UG4,ThUyxzG8V5o,0EOWY8HyURE,oCwfpkgf-RU"};
  try {
    for (const [id, url] of Object.entries(links)) {
      await db.collection('shortlinks').doc(id).set({ longUrl: url, createdAt: new Date() }, { merge: true });
      console.log('Added ' + id);
    }
    console.log('Maths custom playlists seeded!');
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}
seed();
