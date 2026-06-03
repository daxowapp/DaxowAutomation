# Changelog

All notable changes to this project will be documented in this file.

## [2026-06-03] - V4.1 Real Contact Data & Improved Animations
### Changed
- Completely redesigned `AutomationDeepDive.jsx` from a flashing chaos animation to a polished vertical timeline with scroll-triggered reveals.
- Updated Contact page (`/contact`) with real office address (Mall of Istanbul), phone numbers (+90 549 200 6060, +90 545 308 1000), and working hours from studyinturkiye.com.
- Updated `Footer.jsx` to display real contact info (address, phones, email) instead of placeholder legal links.

## [2026-06-03] - V4 Data & Deep Animations Expansion
### Changed
- Added "Home" link to `Navbar.jsx` for ease of navigation.
- Replaced the simple `AutomationFlow.jsx` with an advanced, multi-step `framer-motion` sequence in `AutomationDeepDive.jsx` on the homepage.
- Upgraded the `/case-studies` page to use `CaseStudiesExpanded.jsx`, featuring 15 highly detailed, vertically categorized case studies with specific ROI metrics.

## [2026-06-03] - V3 Massive Multi-Page Expansion
### Changed
- Refactored `Navbar.jsx` and `Footer.jsx` to use Next.js client-side `<Link>` routing.
- Updated `globals.css` with dedicated `.page-header` and `.content-grid` styles.
- Updated `UniversityFocus.jsx` to serve as a teaser linking to the main universities page.

### Added
- Dedicated `/universities` page with specific higher education case studies and solution breakdowns.
- Dedicated `/enterprise` page with logistics, vendor invoice, and HR onboarding content.
- Dedicated `/case-studies` hub for ROI analytics.
- Dedicated `/about` page detailing the company mission and zero-retention AI values.
- Dedicated `/contact` page with sales forms and global office locations.

## [2026-06-03] - V2 Data-Rich Light Theme Overhaul
### Changed
- Converted entire application to a premium Light Theme (`globals.css`).
- Expanded `UniversityFocus` and `ValueProposition` with significantly more data.

### Added
- Added `AutomationFlow.jsx` to visually explain the AI engine.
- Added `MetricsDashboard.jsx` for simulated data analytics.
- Added `Integrations.jsx` marquee.
- Added `FAQ.jsx` accordion section.

## [2026-06-03] - Initial Project Setup - Next.js App Router and Premium CSS
### Added
- Initial project setup with Next.js App Router.
- Added Framer Motion and Lucide React.
- Set up AGENTS.md for global rules and architecture.
- Created premium dark mode UI with Vanilla CSS (`globals.css`).
