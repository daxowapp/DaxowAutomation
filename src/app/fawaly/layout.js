import Link from 'next/link';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import './fawaly.css';

// Inter/Outfit have no Arabic glyphs; without this, bold Arabic falls back to system fonts that can render as empty boxes.
const arabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '700'], display: 'swap', variable: '--fw-arabic' });

export const metadata = {
  title: { default: 'Sudo Interns (Fawaly) — Overprompted. Underpaid. | Daxow', template: '%s | Sudo Interns by Daxow' },
  description: 'A native Mac control room for AI coding assistants. Keep planning and review with Claude Code or Codex, and organize lower-cost assistants for suitable implementation tasks.',
  alternates: { canonical: 'https://daxow.com/fawaly' },
  openGraph: { title: 'Sudo Interns (Fawaly) by Daxow', description: 'Overprompted. Underpaid. Your AI coding crew for Mac.', url: 'https://daxow.com/fawaly', images: [{ url: 'https://daxow.com/fawaly-assets/Fawaly-1024.png', width: 1024, height: 1024 }] },
};

export default function FawalyLayout({ children }) {
  return <div className={`fawaly-site ${arabic.variable}`}>
    <a className="fw-skip" href="#fawaly-main">Skip to content</a>
    <header className="fw-nav"><Link href="/fawaly" className="fw-brand"><img src="/fawaly-assets/Fawaly-1024.png" width="42" height="42" alt="" />Sudo Interns <span lang="ar" dir="rtl">الفواعلي</span></Link>
      <nav aria-label="Sudo Interns"><Link href="/fawaly#showcase">Watch the tour</Link><Link href="/fawaly/support">Setup & support</Link><Link href="/fawaly/privacy">Privacy</Link><Link href="/">Daxow ↗</Link></nav>
    </header>
    <main id="fawaly-main">{children}</main>
    <footer className="fw-footer"><p>© 2026 Daxow Automation · Sudo Interns (Fawaly) for macOS, Windows and Linux</p><div><a href="/fawaly/download">Download for Mac</a><Link href="/fawaly/support">Support</Link><Link href="/fawaly/privacy">Privacy</Link><a href="mailto:support@daxow.com?subject=Fawaly%20support">support@daxow.com</a></div><p>Windows & Linux: upcoming. Original idea and name by <a href="https://nagdy.me/">Ahmed Nagdy</a>. Native Mac app developed by Daxow.</p><p>Independent software. Not affiliated with Anthropic, OpenAI or model providers.</p></footer>
  </div>;
}
