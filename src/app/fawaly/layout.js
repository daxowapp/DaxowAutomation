import Link from 'next/link';
import './fawaly.css';

export const metadata = {
  title: { default: 'Fawaly — Your agent reviews. The crew implements. | Daxow', template: '%s | Fawaly by Daxow' },
  description: 'A native Mac control room for AI coding assistants. Keep planning and review with Claude Code or Codex, and organize lower-cost assistants for suitable implementation tasks.',
  alternates: { canonical: 'https://daxow.com/fawaly' },
  openGraph: { title: 'Fawaly by Daxow', description: 'Your agent reviews. The crew implements.', url: 'https://daxow.com/fawaly', images: [{ url: 'https://daxow.com/fawaly-assets/Fawaly-1024.png', width: 1024, height: 1024 }] },
};

export default function FawalyLayout({ children }) {
  return <div className="fawaly-site">
    <a className="fw-skip" href="#fawaly-main">Skip to content</a>
    <header className="fw-nav"><Link href="/fawaly" className="fw-brand"><img src="/fawaly-assets/Fawaly-1024.png" width="42" height="42" alt="" />Fawaly <span>by Daxow</span></Link>
      <nav aria-label="Fawaly"><Link href="/fawaly/support">Setup & support</Link><Link href="/fawaly/privacy">Privacy</Link><Link href="/">Daxow ↗</Link></nav>
    </header>
    <main id="fawaly-main">{children}</main>
    <footer className="fw-footer"><p>© 2026 Daxow Automation · Fawaly for macOS14+</p><div><Link href="/fawaly/support">Support</Link><Link href="/fawaly/privacy">Privacy</Link><a href="mailto:support@daxow.com?subject=Fawaly%20support">support@daxow.com</a></div><p>Independent software. Not affiliated with Anthropic, OpenAI or model providers.</p></footer>
  </div>;
}
