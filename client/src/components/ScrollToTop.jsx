import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window for safety
    window.scrollTo(0, 0);
    
    // Scroll the main content area inside DashboardLayout
    setTimeout(() => {
      const mainContainer = document.getElementById('main-scroll-container');
      if (mainContainer) {
        mainContainer.scrollTop = 0;
      }
    }, 10);
  }, [pathname]);

  return null;
}
