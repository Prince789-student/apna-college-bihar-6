export default async function handler(req, res) {
  try {
    const backendRes = await fetch('https://apna-college-bihar-6-i1fb.onrender.com/_health');
    const data = await backendRes.json();
    return res.status(200).json({ success: true, message: 'Backend pinged successfully', backend: data });
  } catch (error) {
    return res.status(200).json({ success: false, message: 'Backend ping error', error: error.message });
  }
}
