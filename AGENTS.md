# Daxow Automation Website Architecture

## Overview
Daxow.com is a premium Next.js application designed to showcase AI Automation solutions for universities and enterprises.

## Tech Stack
- Framework: Next.js (App Router)
- Language: JavaScript (React)
- Styling: Vanilla CSS (globals.css) with heavy use of CSS variables for theming.
- Animations: Framer Motion
- Icons: Lucide React

## Rules & Constraints
1. **Design System**: Premium dark mode with electric blue/purple/cyan accents. Smooth transitions, glassmorphism, and high-end typography. No generic styling.
2. **Component Structure**: Keep components modular in `src/components/`.
3. **Animations**: Use `framer-motion` for scroll reveals (`whileInView`) and micro-interactions (`whileHover`, `whileTap`).
4. **TailwindCSS**: Do NOT use TailwindCSS. All styling must use vanilla CSS.
5. **Changelog**: All significant updates must be recorded in `CHANGELOG.md`.
