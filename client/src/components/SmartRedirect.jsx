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

const COLLEGE_ALIAS_MAP = {
  'sce-sasaram': 'spce-sasaram',
  'gec-rohtas': 'spce-sasaram',
  'kmc-katihar': 'kec-katihar',
  'mwec-madhepura': 'bpmce-madhepura',
  'sm-muzaffarpur': 'mit-muzaffarpur',
  'bce-buxar': 'gec-buxar',
  'gwc-buxar': 'gec-buxar',
  'jmit-jamui': 'gec-jamui',
  'mita-aurangabad': 'gec-aurangabad',
  'spce-siwan': 'gec-siwan',
  'gec-supaul': 'sce-saharsa',
  'gec-saharsa': 'sce-saharsa',
  'rce-saharsa': 'sce-saharsa',
  'gec-begusarai': 'rrsdce-begusarai',
  'sgp-patna': 'gce-gaya'
};

// Sort by longest first so "bce-bakhtiyarpur" matches before "bce-b"
const SORTED_SLUGS = [...COLLEGE_SLUGS].sort((a, b) => b.length - a.length);

export default function SmartRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;

    // Pattern: /college-slug-branch-cutoff-rank-year.html or other old HTML patterns
    if (path.endsWith('.html')) {
      const cleanPath = path.replace(/^\//, '').replace(/\.html$/, '');
      
      // Try to find matching college slug
      for (const rawSlug of SORTED_SLUGS) {
        if (cleanPath.startsWith(rawSlug)) {
          const canonicalSlug = COLLEGE_ALIAS_MAP[rawSlug] || rawSlug;
          navigate(`/college/${canonicalSlug}`, { replace: true });
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
