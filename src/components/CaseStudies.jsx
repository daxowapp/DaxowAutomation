"use client";

import { motion } from 'framer-motion';

const cases = [
  {
    institution: "State University",
    title: "Admissions Processing Time Slashed",
    desc: "By implementing Daxow's Document Intelligence AI, State University automated the extraction and verification of high school transcripts and standardized test scores.",
    statValue: "80%",
    statLabel: "Reduction in Processing Time"
  },
  {
    institution: "Global Logistics Corp",
    title: "Supply Chain Communication Automated",
    desc: "Daxow deployed autonomous agents to handle vendor communications, invoice processing, and shipment tracking updates across multiple time zones.",
    statValue: "$2.4M",
    statLabel: "Saved in Operational Costs (Year 1)"
  }
];

export default function CaseStudies() {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className="section-title">
          <h2>Proven <span className="gradient-text">Impact</span></h2>
        </div>
        <p className="section-subtitle">
          Real numbers. Real transformations. See how our automation architectures are redefining operational efficiency.
        </p>

        <div className="grid-2">
          {cases.map((c, idx) => (
            <motion.div 
              key={idx}
              className="case-study"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="case-study-img">
                <div style={{ position: 'absolute', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
                  <h3 style={{ color: 'white', fontSize: '1.5rem', opacity: 0.5 }}>{c.institution}</h3>
                </div>
              </div>
              <div className="case-study-content">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{c.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{c.desc}</p>
                <div className="stat-group">
                  <div>
                    <div className="stat-value">{c.statValue}</div>
                    <div className="stat-label">{c.statLabel}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
