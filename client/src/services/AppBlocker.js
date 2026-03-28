import { registerPlugin } from '@capacitor/core';

const AppBlocker = registerPlugin('AppBlocker');

export const getInstalledApps = async () => {
  try {
    if (window.Capacitor) {
      const result = await AppBlocker.getInstalledApps();
      return result.apps;
    }
  } catch (error) {
    console.error("Error fetching apps:", error);
  }
  return [];
};

export const startFocusSession = async (minutes, allowedPackages = []) => {
  try {
    if (window.Capacitor) {
      await AppBlocker.startCountdown({ minutes, allowedPackages });
      console.log(`Hardcore Focus Session started for ${minutes} mins`);
    } else {
      console.log("Not on native device. Focus session simulated.");
    }
  } catch (error) {
    console.error("Error starting focus session:", error);
  }
};

export const stopFocusSession = async () => {
  try {
    if (window.Capacitor) {
      await AppBlocker.stopBlocker();
      console.log("Focus session manual stop called.");
    }
  } catch (error) {
    console.error("Error stopping focus session:", error);
  }
};

export const checkAccessibility = async () => {
  if (window.Capacitor) {
    const { enabled } = await AppBlocker.checkAccessibility();
    return enabled;
  }
  return true; // Assume true on web for testing
};

export const openSettings = async () => {
  if (window.Capacitor) {
    await AppBlocker.openAccessibilitySettings();
  }
};

export default AppBlocker;
