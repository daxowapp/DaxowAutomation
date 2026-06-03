"use client";

import { motion } from 'framer-motion';

const integrations = [
  "Salesforce", "Workday", "Canvas LMS", "Blackboard", "SAP", 
  "Oracle", "ServiceNow", "Zendesk", "HubSpot", "Microsoft Dynamics"
];

export default function Integrations() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>Seamlessly integrates with your existing stack</h3>
      </div>
      
      {/* Marquee effect */}
      <div style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap' }}>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ display: 'flex', gap: '4rem' }}
        >
          {/* Double the array for seamless infinite scroll */}
          {[...integrations, ...integrations].map((item, idx) => (
            <div key={idx} style={{ 
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
