import { registerPlugin } from '@capacitor/core';

// Safe Plugin Registration with Web Fallback
let AppBlocker = null;
try {
  if (typeof window !== 'undefined' && window.Capacitor) {
    AppBlocker = registerPlugin('AppBlocker');
  }
} catch (error) {
  console.warn("AppBlocker native plugin skip: Not a native platform.");
}

export const getInstalledApps = async () => {
  try {
    if (AppBlocker && AppBlocker.getInstalledApps) {
      const result = await AppBlocker.getInstalledApps();
      return result.apps || [];
    }
  } catch (error) {
    // Suppress promise rejections on web
    console.debug("fetching apps skipped on web");
  }
  return [];
};

export const startFocusSession = async (minutes, allowedPackages = []) => {
  try {
    if (AppBlocker && AppBlocker.startCountdown) {
      await AppBlocker.startCountdown({ minutes, allowedPackages });
    } else {
      // console.log removed
    }
  } catch (error) {
    console.debug("Focus session start skipped on web");
  }
};

export const stopFocusSession = async () => {
  try {
    if (AppBlocker && AppBlocker.stopBlocker) {
      await AppBlocker.stopBlocker();
    }
  } catch (error) {
    console.debug("Focus session stop skipped on web");
  }
};

export const checkAccessibility = async () => {
  try {
    if (AppBlocker && AppBlocker.checkAccessibility) {
      const { enabled } = await AppBlocker.checkAccessibility();
      return enabled;
    }
  } catch (e) {}
  return true; 
};

export const openSettings = async () => {
  try {
    if (AppBlocker && AppBlocker.openAccessibilitySettings) {
      await AppBlocker.openAccessibilitySettings();
    }
  } catch (e) {}
};

export default AppBlocker || { disabled: true };
