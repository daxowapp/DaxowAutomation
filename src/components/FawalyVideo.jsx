'use client';

import { useState } from 'react';

export default function FawalyVideo({ label, error, link }) {
  const [failed, setFailed] = useState(false);
  return <div className="fw-video-frame">
    <video controls playsInline preload="none" poster="/fawaly-assets/showcase-poster.jpg"
      width="1920" height="1080" aria-label={label} onError={() => setFailed(true)}>
      <source src="/fawaly-assets/fawaly-showcase.mp4" type="video/mp4" />
      <a href="/fawaly-assets/fawaly-showcase.mp4">{link}</a>
    </video>
    {failed && <p className="fw-video-error" role="status">{error} <a href="/fawaly-assets/fawaly-showcase.mp4">{link} →</a></p>}
  </div>;
}
