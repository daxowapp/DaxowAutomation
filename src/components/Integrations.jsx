"use client";

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState, useSyncExternalStore } from 'react';

const motionQuery = '(prefers-reduced-motion: reduce)';
const serverMotion = () => false;
const currentMotion = () => window.matchMedia(motionQuery).matches;
function subscribeMotion(onChange) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

const integrations = [
  "Salesforce", "Workday", "Canvas LMS", "Blackboard", "SAP",
  "Oracle", "ServiceNow", "Zendesk", "HubSpot", "Microsoft Dynamics"
];

export default function Integrations() {
  const controls = useAnimationControls();
  const reducedMotion = useSyncExternalStore(subscribeMotion, currentMotion, serverMotion);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      controls.set({ x: 0 });
    } else if (!paused) {
      controls.start({ x: ["0%", "-50%"], transition: { repeat: Infinity, duration: 20, ease: "linear" } });
    }
    return () => controls.stop();
  }, [controls, paused, reducedMotion]);
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>Seamlessly integrates with your existing stack</h3>
      </div>

      {!reducedMotion && <button type="button" className="btn-secondary integration-pause" onClick={() => setPaused((value) => !value)}>
        {paused ? 'Play integrations animation' : 'Pause integrations animation'}
      </button>}
      {/* Marquee effect */}
      <div className="integration-viewport" tabIndex={0} role="region" aria-label="Supported integrations" style={{ overflowX: 'auto' }}>
        <motion.div
          animate={controls}
          style={{ display: 'flex', gap: '4rem' }}
        >
          {/* Double the array for seamless infinite scroll */}
          {(reducedMotion ? integrations : [...integrations, ...integrations]).map((item, idx) => (
            <div key={idx} aria-hidden={idx >= integrations.length ? true : undefined} style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--glass-border)',
              fontFamily: 'var(--font-heading)',
              WebkitTextStroke: '1px var(--text-muted)'
            }}>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
