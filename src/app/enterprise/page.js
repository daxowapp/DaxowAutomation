"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';
import { Building2, Package, UserPlus, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

export default function EnterprisePage() {
  return (
    <main>
      <Navbar />
      
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--gradient-glow)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '1.5rem', border: '1px solid var(--glass-border)' }}>
              <Building2 size={16} /> Daxow for Enterprise
            </div>
            <h1>Unleash <span className="gradient-text">Operational Scale</span></h1>
            <p>
              Replace brittle RPA scripts with intelligent LLM orchestration. Daxow automates complex supply chain, HR, and financial workflows securely.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="content-grid">
            <div className="content-sidebar">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Enterprise Standards</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['SOC2 Type II Certified', 'GDPR Compliant', 'Zero Data Retention', 'SSO & SAML 2.0', 'Dedicated VPC Deployments'].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                    <CheckCircle2 color="var(--accent-blue)" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <Package color="var(--accent-purple)" size={32} />
                  <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Logistics & Supply Chain</h2>
                </div>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  Supply chains run on PDFs, Bills of Lading, and unstructured emails. Daxow's extraction engine instantly digitizes shipping manifests, checks them against your ERP (SAP, Oracle) for discrepancies, and flags exceptions before they cause delays.
                </p>
              </div>

              <div style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <FileSpreadsheet color="#10b981" size={32} />
                  <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Vendor Invoice Automation</h2>
                </div>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  Stop manually keying in invoices. Daxow processes multi-page, multi-line invoices in any language, performs 3-way matching with Purchase Orders, and pushes the data directly to your accounting software for approval.
                </p>
              </div>

              <div style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <UserPlus color="var(--accent-blue)" size={32} />
                  <h2 style={{ fontSize: '2.5rem', margin: 0 }}>HR Onboarding at Scale</h2>
                </div>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  Coordinate background checks, IT provisioning, and document signing across 10 different systems automatically. When a new hire is added to Workday, Daxow instantly triggers the entire IT setup process, saving hours per employee.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}
