import Link from 'next/link';
import FawalyReveal from './FawalyReveal';
import styles from './FawalyTeaser.module.css';

export default function FawalyTeaser() {
  return <section className="section" id="fawaly"><div className="container"><FawalyReveal>
    <div className={styles.card}>
      <div><p className={styles.eyebrow}>A NATIVE MAC APP BY DAXOW</p><h2>Your agent thinks.<br /><span>Your crew implements.</span></h2>
        <p>Meet Fawaly: keep planning and review with Claude Code or Codex, and connect lower-cost assistants for suitable implementation tasks. Choose the plans, models and team order from one Mac app.</p>
        <p className={styles.soon}>Coming soon to the Mac App Store</p>
        <Link className={styles.link} href="/fawaly">Explore Fawaly & watch the tour →</Link>
      </div>
      <Link href="/fawaly#showcase" className={styles.preview} aria-label="Watch the Fawaly product tour"><img src="/fawaly-assets/showcase-poster.jpg" width="1920" height="1080" alt="Fawaly's assistant order shown in the product showcase" loading="lazy" /><span>▶ 47-second showcase · with sound</span></Link>
    </div>
  </FawalyReveal></div></section>;
}
