"use client";

import { motion } from 'framer-motion';
import { Database, FileDigit, Mail, Server, ArrowRight, Zap, Network, ShieldCheck } from 'lucide-react';

export default function AutomationFlow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section" id="how-it-works" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-title">
          <h2>The <span className="gradient-text">Daxow Engine</span> in Action</h2>
        </div>
        <p className="section-subtitle">
          See how our architecture intercepts chaotic manual data, standardizes it, and triggers automated workflows instantly.
        </p>

        <div style={{ background: 'white', padding: '4rem', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)' }}>
          <motion.div 
            className="flow-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}
          >
            {/* Step 1: Messy Inputs */}
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '200px', textAlign: 'right', fontWeight: 600 }}>1. Data Ingestion</div>
              <div style={{ flex: 1, display: 'flex', gap: '1rem', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '16px' }}>
                <Mail size={32} color="var(--text-secondary)" />
                <FileDigit size={32} color="var(--text-secondary)" />
                <Database size={32} color="var(--text-secondary)" />
                <span style={{ color: 'var(--text-secondary)', marginLeft: '1rem', alignSelf: 'center' }}>Unstructured PDFs, Emails, Spreadsheets</span>
              </div>
            </motion.div>

            {/* Step 2: Daxow AI Processing */}
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '200px', textAlign: 'right', fontWeight: 600 }}>2. AI Processing</div>
              <div style={{ flex: 1, padding: '2rem', background: 'var(--gradient-glow)', borderRadius: '16px', border: '1px solid rgba(37, 99, 235, 0.2)', position: 'relative' }}>
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  style={{ position: 'absolute', right: '2rem', top: '2rem', opacity: 0.1 }}
                >
                  <Network size={100} color="var(--accent-blue)" />
                </motion.div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Zap size={24} color="var(--accent-blue)" />
                  <h3 style={{ margin: 0 }}>Daxow LLM Orchestrator</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontWeight: 500 }}>
                  <li>✓ Entity Extraction & Normalization</li>
                  <li>✓ Contextual Intent Recognition</li>
                  <li>✓ Security & PII Redaction</li>
                </ul>
              </div>
            </motion.div>

            {/* Step 3: Automated Actions */}
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '200px', textAlign: 'right', fontWeight: 600 }}>3. Execution</div>
              <div style={{ flex: 1, display: 'flex', gap: '1rem', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '16px' }}>
                <Server size={32} color="#10b981" />
                <ShieldCheck size={32} color="#10b981" />
                <span style={{ color: '#10b981', marginLeft: '1rem', alignSelf: 'center', fontWeight: 600 }}>Instant API Triggers, Database Updates, Auto-Replies</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
