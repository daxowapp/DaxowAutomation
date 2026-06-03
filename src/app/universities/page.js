"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UniversityFocus from '@/components/UniversityFocus';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Banknote, CheckCircle2 } from 'lucide-react';

export default function UniversitiesPage() {
  return (
    <main>
      <Navbar />
      
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--gradient-glow)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '1.5rem', border: '1px solid var(--glass-border)' }}>
              <BookOpen size={16} /> Daxow for Higher Education
            </div>
            <h1>Transform Your <span className="gradient-text">Campus</span></h1>
            <p>
              Automate admissions, student support, and alumni relations with Daxow's proprietary AI engine. Stop wasting resources on manual data entry.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="content-grid">
            <div className="content-sidebar">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>The Daxow Advantage</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Seamless Canvas Integration', 'Slate CRM Sync', 'FERPA Compliant', 'Multi-lingual Support'].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                    <CheckCircle2 color="var(--accent-blue)" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Admissions OCR & Processing</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  During peak seasons, universities receive thousands of disparate transcripts, test scores, and recommendation letters. Daxow's LLM engine ingests these documents instantly, extracts the necessary GPA metrics, verifies accreditation against public databases, and updates your CRM (like Slate) in milliseconds. 
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <Clock color="var(--accent-purple)" size={24} style={{ marginBottom: '1rem' }} />
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>98% Faster</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Application review time</div>
                  </div>
                  <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <Users color="var(--accent-blue)" size={24} style={{ marginBottom: '1rem' }} />
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>Zero</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Seasonal temp hires needed</div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Student IT & Financial Aid Support</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  Students ask the same questions repeatedly. Daxow replaces your tier-1 and tier-2 support with intelligent agents that integrate directly into your SIS (Student Information System). From password resets to explaining complex FAFSA requirements, our agents resolve 85% of queries without human intervention.
                </p>
              </div>
              
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Case Study: State University</h2>
                <div style={{ padding: '2rem', background: 'var(--gradient-glow)', borderRadius: '16px', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    "Daxow completely eliminated our admissions backlog. We used to take 3 weeks to process a transfer student's credits. Now it happens the moment they upload their PDF."
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', background: 'var(--gradient-primary)', borderRadius: '50%' }}></div>
                    <div>
                      <div style={{ fontWeight: 600 }}>Dr. Sarah Jenkins</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>VP of Enrollment, State University</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <UniversityFocus />
      <CallToAction />
      <Footer />
    </main>
  );
}
