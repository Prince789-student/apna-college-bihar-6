import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window for safety
    window.scrollTo(0, 0);
    
    // Scroll the main content area inside DashboardLayout
    const scrollUp = () => {
      const mainContainer = document.getElementById('main-scroll-container');
      if (mainContainer) {
        mainContainer.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        mainContainer.scrollTop = 0;
      }
    };
    
    scrollUp();
    setTimeout(scrollUp, 50);
    setTimeout(scrollUp, 150);
    setTimeout(scrollUp, 300);
  }, [pathname]);

  return null;
}
