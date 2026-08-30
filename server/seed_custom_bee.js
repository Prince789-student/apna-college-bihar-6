const admin = require('./firebaseAdmin');
const db = admin.firestore();

const playlists = {
  'bee-unit1': {
    title: "BEE Unit 1: Electrical fundamentals and DC Circuits",
    videos: [
      { title: "Concept of Charge, Current, Voltage, Resistance, EMF", url: "https://www.youtube.com/watch?v=-BSQajenJbc" },
      { title: "Inductance", url: "https://www.youtube.com/watch?v=KuaIZKazsYY" },
      { title: "Capacitance", url: "https://www.youtube.com/watch?v=jeFmM9eUxh4" },
      { title: "Ohm's Law", url: "https://www.youtube.com/watch?v=oN90ELdJ5Uo" },
      { title: "Kirchhoff's Current Law (KCL)", url: "https://www.youtube.com/watch?v=TaqJ4OYqv3A" },
      { title: "Kirchhoff's Voltage Law (KVL)", url: "https://www.youtube.com/watch?v=uZADT4tuwQw" },
      { title: "Effect of Temperature on Resistance", url: "https://www.youtube.com/watch?v=zl5vzWRthfk" },
      { title: "Resistor Properties and Applications", url: "https://www.youtube.com/watch?v=TiLnjRbzWu4" },
      { title: "Inductor Properties and Applications", url: "https://www.youtube.com/watch?v=In6tOaTCihY" },
      { title: "Capacitor Properties and Applications", url: "https://www.youtube.com/watch?v=vRqmES4910s" },
      { title: "Series and parallel resistor circuits", url: "https://www.youtube.com/watch?v=YHX3RdmmKn8" },
      { title: "Current and Voltage Divider Rules", url: "https://www.youtube.com/watch?v=F_KscHqF8no" },
      { title: "Star to Delta transformation", url: "https://www.youtube.com/watch?v=PxEGBVqjKU8" },
      { title: "Delta to Star transformation", url: "https://www.youtube.com/watch?v=YrOY03eqWgw" },
    ]
  },
  'bee-unit2': {
    title: "BEE Unit 2: AC Circuits",
    videos: [
      { title: "Generation of sinusoidal EMF", url: "https://www.youtube.com/watch?v=fM_odoc1LNI" },
      { title: "Peak, RMS, average values", url: "https://www.youtube.com/watch?v=ckajfi4IpGs" },
      { title: "Form factor, Wave and phasor representation", url: "https://www.youtube.com/watch?v=Xtt_H9Afasw" },
      { title: "Impedance of R, L, C circuits", url: "https://www.youtube.com/watch?v=CHMKLnBLWk0" },
      { title: "RL series and parallel circuits", url: "https://www.youtube.com/watch?v=--aaGK7evPI" },
      { title: "RC series and parallel circuits", url: "https://www.youtube.com/watch?v=Q_ak6TdoRMo" },
      { title: "RLC series and parallel circuits", url: "https://www.youtube.com/watch?v=CHMKLnBLWk0" },
      { title: "Series and parallel resonance", url: "https://www.youtube.com/watch?v=Lot8QRB_ZNY" },
      { title: "Power in AC circuits: Active, reactive, apparent power", url: "https://www.youtube.com/watch?v=EmJys_5W8Ao" },
      { title: "Power factor - Unity, lag, lead, Power factor improvement, advantages", url: "https://www.youtube.com/watch?v=a19fPCU9SOA" },
      { title: "Harmonics, source and its impact", url: "https://www.youtube.com/watch?v=6zmuht4UOh0" },
      { title: "Three-phase systems, concept need and advantages", url: "https://www.youtube.com/watch?v=ivP_8w4FegE" },
      { title: "Single Phase vs Three Phase System (Advantages), Phase sequence", url: "https://www.youtube.com/watch?v=ivP_8w4FegE" },
      { title: "Balanced and unbalanced supply and load and line-phase relationships", url: "https://www.youtube.com/watch?v=yuXqq3QLODw" },
      { title: "Voltage, Current relationship and power in Star connections", url: "https://www.youtube.com/watch?v=UM6g-S0IlYc" },
      { title: "Voltage, Current relationship and power in Delta connections", url: "https://www.youtube.com/watch?v=3tZqGIZ8tu4" },
      { title: "Power in balanced three phase circuits (One, Two, Three Wattmeter method)", url: "https://www.youtube.com/watch?v=afHvLr1PSjM" },
    ]
  },
  'bee-unit3': {
    title: "BEE Unit 3: Magnetic Circuits and Electromagnetic Induction",
    videos: [
      { title: "Magnetic circuits - Magnetic Flux, Magnetic intensity, Flux Density(B), Magnetomotive Force (MMF)", url: "https://www.youtube.com/watch?v=UdaDs-zKfsA" },
      { title: "Reluctance, Permeability, simple numerical", url: "https://www.youtube.com/watch?v=mKnKlDMcT8U" },
      { title: "Analogy between Electric and Magnetic circuits", url: "https://www.youtube.com/watch?v=3JGYgbmQw6M" },
      { title: "Basic Properties of Magnetic materials", url: "https://www.youtube.com/watch?v=cIETHpKzBoQ" },
      { title: "Magnetic Circuits with DC Excitation", url: "https://www.youtube.com/watch?v=-V87ANqaHD4" },
      { title: "Magnetic Leakage", url: "https://www.youtube.com/watch?v=cw9f33jLkd4" },
      { title: "B-H Curve", url: "https://www.youtube.com/watch?v=My42ub3HXIc" },
      { title: "Hysteresis and Eddy Current Losses", url: "https://www.youtube.com/watch?v=G1baI4t8GLs" },
      { title: "Magnetic Circuit Calculations", url: "https://www.youtube.com/watch?v=VNFhVAFmwRA" },
      { title: "Electromagnetic induction - Faradays Laws", url: "https://www.youtube.com/watch?v=IcCpIhd2cFc" },
      { title: "Fleming's right hand and left-hand Rules", url: "https://www.youtube.com/watch?v=MsrjT8vqimA" },
      { title: "Statically and dynamically induced EMF", url: "https://www.youtube.com/watch?v=lpzkQ3lrSn4" },
      { title: "Concepts of self-inductance, mutual inductance and coefficient of coupling", url: "https://www.youtube.com/watch?v=hoTInTKij0o" },
      { title: "Energy stored in magnetic fields", url: "https://www.youtube.com/watch?v=sv55hKzTe2E" },
    ]
  },
  'bee-unit4': {
    title: "BEE Unit 4: Transformer",
    videos: [
      { title: "Transformer - Construction, principle of operation", url: "https://www.youtube.com/watch?v=5XP8W3nRdJo" },
      { title: "Single phase v/s three phase transformer", url: "https://www.youtube.com/watch?v=NXHtt0pYww8" },
      { title: "EMF equation of Transformer", url: "https://www.youtube.com/watch?v=uC1MijwO-TE" },
      { title: "Transformer performance - Voltage regulation, losses and efficiency", url: "https://www.youtube.com/watch?v=wccZlXhyhhg" },
      { title: "Transformer Load test", url: "https://www.youtube.com/watch?v=Bzj2Ebq4O_g" },
      { title: "Audio transformer, Radio Frequency (RF) Transformer", url: "https://www.youtube.com/watch?v=pyINwm3koc8" },
      { title: "Intermediate Frequency (IF) transformer, Pulse transformer", url: "https://www.youtube.com/watch?v=3BO0wHX5tqc" },
      { title: "Isolation transformer, Impedance matching transformer", url: "https://www.youtube.com/watch?v=Rq0Q5u3dJD4" },
    ]
  },
  'bee-unit5': {
    title: "BEE Unit 5: Electrical and Special Purpose Machines",
    videos: [
      { title: "DC machines: construction, EMF equation", url: "https://www.youtube.com/watch?v=Jfg4egSEu0U" },
      { title: "Types of DC Motor and applications", url: "https://www.youtube.com/watch?v=y4SiF9QSDs0" },
      { title: "Need of DC motor starter", url: "https://www.youtube.com/watch?v=bdWDN-7TcfA" },
      { title: "AC machines: Three-phase induction motor construction, working, types", url: "https://www.youtube.com/watch?v=gClhE2AQL4Q" },
      { title: "Slip in 3 phase induction motor", url: "https://www.youtube.com/watch?v=rPtqmIAe93Y" },
      { title: "Need of starter, DOL, star-delta starter", url: "https://www.youtube.com/watch?v=d2BHXBho7Xk" },
      { title: "Construction, working principle of single-phase induction motors", url: "https://www.youtube.com/watch?v=A8IyYPACdsU" },
      { title: "Starting methods of single phase induction motor", url: "https://www.youtube.com/watch?v=A8IyYPACdsU" },
      { title: "Construction, working and applications of BLDC motor", url: "https://www.youtube.com/watch?v=lcvDixHYA10" },
      { title: "Construction, working and applications of Servo motor", url: "https://www.youtube.com/watch?v=0eIzndKQnVY" },
      { title: "Construction, working and applications of Stepper motor", url: "https://www.youtube.com/watch?v=UOEC8FijUFQ" },
      { title: "Construction, working and applications of Switched Reluctance motor", url: "https://www.youtube.com/watch?v=vodf0G0sYhM" },
      { title: "Construction, working and applications of Universal motor", url: "https://www.youtube.com/watch?v=qW8LWPg8zq4" },
      { title: "Construction, working and applications of Coreless motor", url: "https://www.youtube.com/watch?v=htbWLNL2GQ4" },
    ]
  },
};

async function seedPlaylists() {
  for (const [id, data] of Object.entries(playlists)) {
    await db.collection('custom_playlists').doc(id).set(data);
    console.log(`Added ${id}`);
  }
  console.log('BEE custom playlists seeded!');
}

seedPlaylists().catch(console.error);
