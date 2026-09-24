"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingDown, Clock, Activity } from 'lucide-react';

const metrics = [
  { label: "Cost Reduction", value: "62%", icon: <TrendingDown size={20} color="#10b981" /> },
  { label: "Processing Speed", value: "100x", icon: <ArrowUpRight size={20} color="var(--accent-blue)" /> },
  { label: "Uptime", value: "99.99%", icon: <Activity size={20} color="var(--accent-blue)" /> },
  { label: "Time Saved", value: "8M hrs", icon: <Clock size={20} color="var(--accent-purple)" /> }
];

export default function MetricsDashboard() {
  return (
    <section className="section" id="analytics" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        <div className="grid-2">
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Real-time <span className="gradient-text">Analytics</span> & Impact
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem' }}>
              Our clients process over 15 million tasks daily through Daxow's orchestration engine. Watch your overhead shrink and efficiency explode on our executive dashboards.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {metrics.map((m, i) => (
                <motion.div 
                  key={i}
                  style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{m.label}</span>
                    {m.icon}
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                    {m.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            {/* Mock Dashboard UI */}
            <div style={{ background: 'white', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', padding: '2rem', height: '400px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                <div style={{ fontWeight: 600 }}>Daxow Command Center</div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                </div>
              </div>
              
              <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', gap: '1rem', paddingBottom: '1rem' }}>
                {/* Simulated Chart Bars */}
                {[40, 60, 30, 80, 50, 90, 70].map((height, i) => (
                  <motion.div 
                    key={i}
                    style={{ flex: 1, background: 'var(--gradient-primary)', borderRadius: '8px 8px 0 0' }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
