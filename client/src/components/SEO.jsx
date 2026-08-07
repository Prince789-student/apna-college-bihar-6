import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Apna College Bihar ✅ | UGEAC Counselling 2026, B.Tech Notes, PYQ & College Predictor",
  description = "Bihar Engineering Counselling 2026 - UGEAC College Predictor, Cutoff Ranks, B.Tech Notes, PYQ Papers & CGPA Calculator. Official resource for Bihar Engineering students.",
  keywords = "UGEAC 2026, Bihar Engineering Counselling, BCECE counselling 2026, Bihar college predictor, B.Tech Notes PDF, Engineering Study Material Bihar",
  url = "https://www.apnacollegebihar.online/",
  image = "https://www.apnacollegebihar.online/acb_brand_final.png",
  schema = null,
  noindex = false
}) {
  const fullTitle = title.includes("Apna College Bihar") ? title : `${title} | Apna College Bihar`;

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="author" content="Apna College Bihar" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Social Media Meta */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Apna College Bihar" />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Dynamic Schema Injection (if provided) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
