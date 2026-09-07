export const getClientOS = () => {
  if (typeof window === 'undefined') return 'unknown';
  const ua = window.navigator.userAgent || '';
  const platform = window.navigator.platform || '';

  if (/android/i.test(ua)) return 'android';
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios';
  if (/Win/i.test(platform) || /Windows/i.test(ua)) return 'windows';
  if (/Mac/i.test(platform) || /Macintosh/i.test(ua)) return 'mac';
  if (/Linux/i.test(platform) || /Linux/i.test(ua)) return 'linux';

  return 'other';
};
