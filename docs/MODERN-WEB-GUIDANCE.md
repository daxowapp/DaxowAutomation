# Modern web review - 2026-11-15

Reference: https://github.com/GoogleChrome/modern-web-guidance, skill version
2026_11_09-5bcc021b. Reviewed accessibility, HTML, CSS, performance, motion,
forms, responsive-design, security and dark-mode guidance.

Static marketing content now renders in its final visible state, including
headings and links, before hydration or when scripting is unavailable. Framer
Motion remains the interaction library, per AGENTS.md, and its shared config
respects the visitor's reduced-motion setting. CSS smooth scrolling, hero glow
and button lift have explicit reduced-motion handling. Interactive disclosure
and form-status entrance states remain local to their controls.

Outfit/Inter are downloaded at build time by next/font and served from this
origin with swap and framework fallback metrics. Browser-side Google Fonts
CSS import and its sequential third-party requests are removed.

Native controls use the current application's light color scheme in CSS and
viewport metadata. The scan's dark-mode finding is in the unused Next starter
page.module.css; it is not imported by the application and is not a reason to
redesign the live palette. Forced-colors users receive outline focus indicators
and visible gradient text; mobile form text retains a 16px minimum.

The deterministic scan covers 33 guides (~20% of the corpus), not all runtime
behavior. Third-party integrations and strict CSP require separate operational
validation. No new AI APIs, WebMCP, service worker or dependencies were added.

The integration marquee now has a keyboard-accessible pause/play control and a scrollable fallback. Reduced motion displays a static list, and duplicated marquee labels are hidden from assistive technology. Decorative glow/rotation effects finish within four seconds.
