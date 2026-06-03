"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How long does Daxow take to implement?",
    a: "Unlike traditional legacy software that takes months to deploy, Daxow's AI agents can be integrated into your existing APIs and workflows in under 3 weeks on average."
  },
  {
    q: "Is our data secure and compliant?",
    a: "Absolutely. Daxow is SOC2 Type II, HIPAA, and GDPR compliant. We use zero-retention policies on our LLMs, meaning your proprietary university or enterprise data is never used to train global models."
  },
  {
    q: "Do we need to rip out our existing software?",
    a: "No. Daxow acts as an intelligent orchestration layer on top of your existing stack (Workday, Salesforce, Canvas, etc.). We automate the manual tasks between these systems."
  },
  {
    q: "What is the typical ROI?",
    a: "Most university partners see a 400% ROI within the first 6 months, primarily driven by the reduction in manual data processing and a 60% decrease in temporary staffing costs during peak seasons."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ 
              marginBottom: '1rem', 
              border: '1px solid var(--glass-border)', 
              borderRadius: '12px', 
              background: 'white',
              overflow: 'hidden'
            }}>
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{ 
                  width: '100%', 
                  padding: '1.5rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  color: 'var(--text-primary)'
                }}
              >
                {faq.q}
                <motion.div animate={{ rotate: openIndex === idx ? 180 : 0 }}>
                  <ChevronDown size={20} color="var(--accent-blue)" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--text-secondary)' }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
