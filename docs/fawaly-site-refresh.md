# Fawaly website refresh — 28 October 2026

## Scope

Update the Fawaly product, setup, engine and privacy pages together, and add
a product teaser to the Daxow homepage. The main
page switches between English and Arabic/RTL and explains the primary agent's
planning/review role, assistant ordering and availability, guided connections,
the four-step first run, task/review evidence, permissions and background work.
Credit Ahmed Nagdy for the original project idea and name; Daxow developed the
native app. Preserve Mac App Store coming-soon messaging, upcoming Windows/Linux
and relative redirects for the paused app-download routes. No public app release
or measured savings percentage is claimed.

## Media

- User-supplied `Showcase 16x9 (1920x1080, 47s, with sound).mp4`.
- Self-hosted as `/fawaly-assets/fawaly-showcase.mp4`; 1920×1080, 30 fps,
  46.6 seconds, H.264 + AAC, 12,791,765 bytes.
- File SHA-256: `ce84e1d910b33c713d26378007b190b575467d01614d10fad140e54fc820fb8e`.
- Remux with stream copy and fast start produced a byte-identical file. Both
  encoded video and audio stream hashes also match the supplied original.
- Poster extracted at 14 seconds. No autoplay, `preload="none"`, inline playback,
  native keyboard-accessible controls, localized load-error fallback and a
  written walkthrough. No third-party player, tracking or external media host.
- Showcase imagery is illustrative, not evidence of a visitor's account,
  balance or successful task. The interface in the video is English.

## Local verification

- `npm ci --no-audit --no-fund`: passed.
- `npm run build`: passed, all 17 routes generated.
- `git diff --check`: passed.
- `python3 scripts/verify_fawaly_site.py http://localhost:3487`: passed;
  checks page responses, paused download redirects, poster, media range serving,
  no autoplay and fast-start media header.
- Native browser: English/Arabic switching, four-step content and links,
  walkthrough/FAQ expanders; video play/pause, duration 46.6 seconds, audio
  unmuted, no media error. Network-blocked video displayed the recovery link.
- Main-page text/control overflow checks passed at 320, 390, 768 and 1280px in
  English, and 320, 768 and 1280px in Arabic (390px also checked separately).
- Support, engine and privacy text/link overflow checks passed at 320px; the
  Daxow homepage product teaser also passed at 320px.
- React review: static copy outside render; stable list keys; only locale and
  video-error state; no effects or fetch waterfalls; no new dependency; semantic
  controls and details; Framer Motion respects reduced motion; no Tailwind.

## Public verification

Pending deployment. Do not treat local acceptance as a public-site update.

## Documentation impact

Public setup/support/engine and privacy guidance and CHANGELOG updated in this
change. No SIT Connect workflow or admin manual is affected.
