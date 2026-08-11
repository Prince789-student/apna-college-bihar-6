import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Known college slugs from generate-sitemap.js
const COLLEGE_SLUGS = [
  'mit-muzaffarpur', 'bce-bhagalpur', 'gce-gaya', 'dce-darbhanga',
  'mce-motihari', 'lnjpit-chapra', 'nce-chandi', 'rce-saharsa',
  'sce-sasaram', 'pce-purnea', 'bce-bakhtiyarpur', 'sit-sitamarhi',
  'rrsdce-begusarai', 'jmit-jamui', 'mita-aurangabad', 'gwc-buxar',
  'bce-buxar', 'spce-siwan', 'kmc-katihar', 'sm-muzaffarpur',
  'mwec-madhepura', 'sgp-patna', 'gec-sheikhpura', 'gec-munger',
  'gec-jamui', 'gec-banka', 'gec-nawada', 'gec-kishanganj',
  'gec-araria', 'gec-supaul', 'gec-saharsa', 'gec-madhubani',
  'gec-samastipur', 'gec-vaishali', 'gec-gopalganj', 'gec-siwan',
  'gec-bhojpur', 'gec-rohtas', 'gec-buxar', 'gec-kaimur',
  'gec-jehanabad', 'gec-arwal', 'gec-lakhisarai', 'gec-khagaria',
  'gec-begusarai'
];

// Sort by longest first so "bce-bakhtiyarpur" matches before "bce-b"
const SORTED_SLUGS = [...COLLEGE_SLUGS].sort((a, b) => b.length - a.length);

export default function SmartRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;

    // Pattern: /college-slug-branch-cutoff-rank-year.html
    if (path.endsWith('.html') && path.includes('cutoff-rank')) {
      const cleanPath = path.replace(/^\//, '').replace(/\.html$/, '');
      
      // Try to find matching college slug
      for (const slug of SORTED_SLUGS) {
        if (cleanPath.startsWith(slug)) {
          navigate(`/college/${slug}/cutoff`, { replace: true });
          return;
        }
      }
    }

    // Pattern: /college-slug-fees-year.html or /college-slug-placement.html etc.
    if (path.endsWith('.html')) {
      const cleanPath = path.replace(/^\//, '').replace(/\.html$/, '');
      
      for (const slug of SORTED_SLUGS) {
        if (cleanPath.startsWith(slug)) {
          // Try to detect section from remaining path
          const rest = cleanPath.slice(slug.length + 1); // +1 for the dash
          if (rest.includes('fees') || rest.includes('fee')) {
            navigate(`/college/${slug}/fees`, { replace: true });
            return;
          }
          if (rest.includes('placement')) {
            navigate(`/college/${slug}/placement`, { replace: true });
            return;
          }
          if (rest.includes('hostel')) {
            navigate(`/college/${slug}/hostel`, { replace: true });
            return;
          }
          if (rest.includes('review')) {
            navigate(`/college/${slug}/review`, { replace: true });
            return;
          }
          if (rest.includes('cutoff') || rest.includes('cut-off')) {
            navigate(`/college/${slug}/cutoff`, { replace: true });
            return;
          }
          // Default: go to college main page
          navigate(`/college/${slug}`, { replace: true });
          return;
        }
      }
    }

    // Pattern: /dashboard/anything → redirect to /anything (remove dashboard prefix)
    if (path.startsWith('/dashboard/') && path !== '/dashboard/admin') {
      const newPath = path.replace('/dashboard', '');
      navigate(newPath, { replace: true });
      return;
    }

    // Default fallback: do nothing, let NotFound component handle it
  }, [location.pathname, navigate]);

  return null;
}
