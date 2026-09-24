"use client";

import { motion } from 'framer-motion';
import { FileText, Mail, Brain, ArrowDown, Database, Zap, Server, CheckCircle2, AlertTriangle, Clock, Users } from 'lucide-react';

const steps = [
  {
    phase: "Before Daxow",
    color: "#ef4444",
    icon: <AlertTriangle size={28} color="#ef4444" />,
    title: "The Manual Chaos",
    description: "Organizations drown in unstructured data. Emails, PDFs, handwritten forms, and spreadsheets arrive from hundreds of sources in dozens of formats. Human workers spend 80% of their day copy-pasting between systems.",
    stats: [
      { icon: <Clock size={18} />, label: "Average processing time", value: "3-5 days" },
      { icon: <AlertTriangle size={18} />, label: "Human error rate", value: "12-18%" },
      { icon: <Users size={18} />, label: "Staff required", value: "25-40 FTEs" }
    ]
  },
  {
    phase: "Step 1",
    color: "var(--accent-blue)",
    icon: <Mail size={28} color="var(--accent-blue)" />,
    title: "Intelligent Data Ingestion",
    description: "Daxow connects to your email inboxes, FTP servers, API endpoints, and file storage. Our pre-processing layer converts every document — scanned PDFs, images of handwritten forms, Excel files, XML feeds — into a unified semantic representation.",
    stats: [
      { icon: <FileText size={18} />, label: "Formats supported", value: "200+" },
      { icon: <Zap size={18} />, label: "Ingestion speed", value: "<100ms" }
    ]
  },
  {
    phase: "Step 2",
    color: "var(--accent-purple)",
    icon: <Brain size={28} color="var(--accent-purple)" />,
    title: "LLM Orchestration Engine",
    description: "Our proprietary orchestrator routes each document through specialized AI agents. Entity extraction identifies names, dates, amounts, and IDs. Intent classification determines which workflow to trigger. PII detection redacts sensitive data before it leaves your VPC.",
    stats: [
      { icon: <Zap size={18} />, label: "Accuracy", value: "99.97%" },
      { icon: <Database size={18} />, label: "Context window", value: "128K tokens" }
    ]
  },
  {
    phase: "Step 3",
    color: "var(--accent-cyan)",
    icon: <Server size={28} color="var(--accent-cyan)" />,
    title: "Automated Execution",
    description: "Clean, structured data fires directly into your existing systems — Salesforce, SAP, Workday, Canvas LMS, or any REST API. Daxow handles retries, error logging, and human-in-the-loop escalation for edge cases automatically.",
    stats: [
      { icon: <CheckCircle2 size={18} />, label: "Straight-through rate", value: "94%" },
      { icon: <Clock size={18} />, label: "End-to-end time", value: "<2 seconds" }
    ]
  },
  {
    phase: "After Daxow",
    color: "#10b981",
    icon: <CheckCircle2 size={28} color="#10b981" />,
    title: "Operational Excellence",
    description: "Your team is freed from robotic data entry. They focus on strategy, student engagement, and complex decision-making. Costs drop, speed increases, and errors virtually disappear.",
    stats: [
      { icon: <Clock size={18} />, label: "Processing time", value: "<2 seconds" },
      { icon: <AlertTriangle size={18} />, label: "Error rate", value: "<0.01%" },
      { icon: <Users size={18} />, label: "Staff required", value: "2-5 FTEs" }
    ]
  }
];

export default function AutomationDeepDive() {
  return (
    <section className="section" id="platform" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-title">
          <h2>How <span className="gradient-text">Intelligent Automation</span> Works</h2>
        </div>
        <p className="section-subtitle" style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.125rem' }}>
          Traditional RPA breaks when a button moves. Daxow uses Large Language Models that understand intent, context, and meaning — just like a human, but 1000x faster.
        </p>

        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical timeline line */}
          <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, #ef4444, var(--accent-blue), var(--accent-purple), var(--accent-cyan), #10b981)' }} />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ position: 'relative', paddingLeft: '72px', marginBottom: idx < steps.length - 1 ? '3rem' : '0' }}
            >
              {/* Timeline dot */}
              <div style={{ 
                position: 'absolute', 
                left: '8px', 
                top: '1.5rem',
                width: '34px', 
                height: '34px', 
                borderRadius: '50%', 
                background: 'white',
                border: `3px solid ${step.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: step.color }} />
              </div>

              {/* Content Card */}
              <div style={{ 
                background: 'white', 
                borderRadius: '20px', 
                padding: '2.5rem', 
                border: '1px solid var(--glass-border)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ 
                    padding: '10px', 
                    borderRadius: '12px', 
                    background: `${step.color}15`
                  }}>
                    {step.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: step.color, marginBottom: '0.25rem' }}>
                      {step.phase}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{step.title}</h3>
                  </div>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  {step.description}
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {step.stats.map((stat, si) => (
                    <div key={si} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                      <span style={{ color: step.color }}>{stat.icon}</span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{stat.label}:</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
