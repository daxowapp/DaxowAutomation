import Link from 'next/link';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import './fawaly.css';

// Inter/Outfit have no Arabic glyphs; without this, bold Arabic falls back to system fonts that can render as empty boxes.
const arabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '700'], display: 'swap', variable: '--fw-arabic' });

export const metadata = {
  title: { default: 'Fawaly — Your agent reviews. The crew implements. | Daxow', template: '%s | Fawaly by Daxow' },
  description: 'A native Mac control room for AI coding assistants. Keep planning and review with Claude Code or Codex, and organize lower-cost assistants for suitable implementation tasks.',
  alternates: { canonical: 'https://daxow.com/fawaly' },
  openGraph: { title: 'Fawaly by Daxow', description: 'Your agent reviews. The crew implements.', url: 'https://daxow.com/fawaly', images: [{ url: 'https://daxow.com/fawaly-assets/Fawaly-1024.png', width: 1024, height: 1024 }] },
};

export default function FawalyLayout({ children }) {
  return <div className={`fawaly-site ${arabic.variable}`}>
    <a className="fw-skip" href="#fawaly-main">Skip to content</a>
    <header className="fw-nav"><Link href="/fawaly" className="fw-brand"><img src="/fawaly-assets/Fawaly-1024.png" width="42" height="42" alt="" />Fawaly <span>by Daxow</span></Link>
      <nav aria-label="Fawaly"><Link href="/fawaly#showcase">Watch the tour</Link><Link href="/fawaly/support">Setup & support</Link><Link href="/fawaly/privacy">Privacy</Link><Link href="/">Daxow ↗</Link></nav>
    </header>
    <main id="fawaly-main">{children}</main>
    <footer className="fw-footer"><p>© 2026 Daxow Automation · Fawaly for macOS 14+ · Coming soon to the Mac App Store</p><div><Link href="/fawaly/support">Support</Link><Link href="/fawaly/privacy">Privacy</Link><a href="mailto:support@daxow.com?subject=Fawaly%20support">support@daxow.com</a></div><p>Windows & Linux: upcoming. Original idea and name by <a href="https://nagdy.me/">Ahmed Nagdy</a>. Native Mac app developed by Daxow.</p><p>Independent software. Not affiliated with Anthropic, OpenAI or model providers.</p></footer>
  </div>;
}
