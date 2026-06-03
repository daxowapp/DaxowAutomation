"use client";

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparison = [
  { feature: "Data Processing Speed", manual: "Days / Weeks", daxow: "Milliseconds" },
  { feature: "Error Rate", manual: "15% Average", daxow: "< 0.01%" },
  { feature: "Scalability", manual: "Requires hiring", daxow: "Infinite instant scaling" },
  { feature: "Availability", manual: "9-to-5, Weekdays", daxow: "24/7/365 Non-stop" },
  { feature: "Compliance & Auditing", manual: "Manual log reviews", daxow: "Real-time AI monitoring" },
];

export default function ValueProposition() {
  return (
    <section className="section" id="comparison">
      <div className="container">
        <div className="section-title">
          <h2>Manual Workflow vs. <span className="gradient-text">Daxow AI</span></h2>
        </div>
        <p className="section-subtitle">
          The data speaks for itself. Relying on human manual entry for repetitive operations limits growth.
        </p>

        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ overflow: 'hidden' }}
        >
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Operational Metric</th>
                <th style={{ width: '30%', color: 'var(--text-secondary)' }}>Traditional Manual Process</th>
                <th style={{ width: '30%', color: 'var(--accent-blue)' }}>Daxow Automated System</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 500 }}>{row.feature}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <X size={16} color="#ef4444" /> {row.manual}
                    </div>
                  </td>
                  <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={16} color="#10b981" /> {row.daxow}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
