import Link from 'next/link';
import FawalyReveal from './FawalyReveal';
import styles from './FawalyTeaser.module.css';

export default function FawalyTeaser() {
  return <section className="section" id="fawaly"><div className="container"><FawalyReveal>
    <div className={styles.card}>
      <div><p className={styles.eyebrow}>A NATIVE MAC APP BY DAXOW</p><h2>Your agent thinks.<br /><span>Your crew implements.</span></h2>
        <p>Meet Sudo Interns (Fawaly), a free Mac app for your AI coding crew. Claude Code or Codex plans and reviews while your crew tackles implementation. You choose the assistants, models and order.</p>
        <p className={styles.soon}>Overprompted. Underpaid. Available for macOS.</p>
        <Link className={styles.link} href="/fawaly/download">Download for Mac (ZIP) ↓</Link>
        <Link className={styles.link} href="/fawaly">Explore Sudo Interns & watch the tour →</Link>
      </div>
      <Link href="/fawaly#showcase" className={styles.preview} aria-label="Watch the Fawaly product tour"><img src="/fawaly-assets/showcase-poster.jpg" width="1920" height="1080" alt="Fawaly's assistant order shown in the product showcase" loading="lazy" /><span>▶ 47-second showcase · with sound</span></Link>
    </div>
  </FawalyReveal></div></section>;
}
