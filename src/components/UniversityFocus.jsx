"use client";

import { motion } from 'framer-motion';
import { GraduationCap, FileText, MessageSquare, Briefcase, UserCheck } from 'lucide-react';

import Link from 'next/link';

const universityModules = [
  {
    title: "Admissions Processing AI",
    desc: "Ingests applications, normalizes transcripts, and assigns a weighted probability score for candidate success. Connects directly to Slate & Common App.",
    metrics: "Reduced manual review time by 82%",
    icon: <FileText size={24} />
  },
  {
    title: "Intelligent Student Support (CRM)",
    desc: "A contextual LLM agent that integrates with Canvas & Blackboard. Handles financial aid queries, IT tickets, and scheduling instantly.",
    metrics: "95% First-Contact Resolution rate",
    icon: <MessageSquare size={24} />
  },
  {
    title: "Alumni Engagement Prediction",
    desc: "Analyzes historical giving data and engagement metrics to predict donor behavior and automate hyper-personalized outreach campaigns.",
    metrics: "Increased annual fund yields by 31%",
    icon: <UserCheck size={24} />
  },
  {
    title: "Faculty Admin Automation",
    desc: "Automates syllabus compliance checking, grade syncing, and resource allocation across departments.",
    metrics: "Saves 15 hours/week per faculty member",
    icon: <Briefcase size={24} />
  }
];

export default function UniversityFocus() {
  return (
    <section className="section" id="universities" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div className="grid-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent-blue)', borderRadius: '30px', fontWeight: 600, marginBottom: '1.5rem' }}>
              Higher Education Sector
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Comprehensive <br/><span className="gradient-text">Campus</span> Automation
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem' }}>
              Universities generate petabytes of administrative data. Daxow's proprietary models clean, route, and execute actions based on this data seamlessly, integrating deeply with existing SIS and LMS platforms.
            </p>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>System Integrations</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ padding: '6px 12px', background: '#f3f4f6', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 500 }}>Canvas LMS</span>
                <span style={{ padding: '6px 12px', background: '#f3f4f6', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 500 }}>Blackboard</span>
                <span style={{ padding: '6px 12px', background: '#f3f4f6', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 500 }}>Workday Student</span>
                <span style={{ padding: '6px 12px', background: '#f3f4f6', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 500 }}>Slate</span>
              </div>
            </div>
            <Link href="/universities" className="btn-secondary" style={{ display: 'inline-block', padding: '12px 24px', textDecoration: 'none' }}>
              View All University Solutions
            </Link>
          </motion.div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {universityModules.map((module, idx) => (
              <motion.div 
                key={idx}
                className="glass-panel"
                style={{ padding: '2rem' }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: '12px', color: 'var(--accent-blue)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    {module.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{module.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>{module.desc}</p>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                      Metric: {module.metrics}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
