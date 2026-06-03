"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, GraduationCap, Package, HeartPulse, BadgeDollarSign } from 'lucide-react';

const caseStudiesData = [
  { id: 1, category: "Higher Ed", icon: <GraduationCap size={24} />, title: "State University Admissions", problem: "6-week backlog processing transfer credits manually.", solution: "Daxow OCR instantly normalized 10k+ varied transcripts into Slate CRM.", metrics: "Backlog eliminated. Processing time reduced to 12 minutes.", roi: "412%" },
  { id: 2, category: "Higher Ed", icon: <GraduationCap size={24} />, title: "Global College IT Helpdesk", problem: "Tier-1 agents overwhelmed by password resets and basic LMS questions.", solution: "LLM agent integrated directly into Canvas to intercept tickets.", metrics: "85% deflection rate. Saved $1.2M in support overhead.", roi: "305%" },
  { id: 3, category: "Higher Ed", icon: <GraduationCap size={24} />, title: "Tech Institute Alumni Giving", problem: "Generic email blasts yielding <1% conversion for endowments.", solution: "Predictive model scoring 50,000 alumni and generating hyper-personalized outreach.", metrics: "Annual fund yield increased by 31%.", roi: "520%" },
  
  { id: 4, category: "Logistics", icon: <Package size={24} />, title: "GlobalFreight BOL Extraction", problem: "200 data entry clerks typing Bills of Lading into SAP.", solution: "Multi-lingual document ingestion engine matching BOLs to Purchase Orders automatically.", metrics: "Error rate dropped from 14% to 0.01%.", roi: "840%" },
  { id: 5, category: "Logistics", icon: <Package size={24} />, title: "FastShip Fleet Maintenance", problem: "Truck maintenance scheduled via disjointed emails and spreadsheets.", solution: "Automated parsing of diagnostic emails to trigger Workday service orders.", metrics: "Fleet downtime reduced by 22%.", roi: "190%" },
  
  { id: 6, category: "Finance", icon: <BadgeDollarSign size={24} />, title: "NeoBank Vendor Invoices", problem: "Accounts Payable struggling with multi-page invoices in various currencies.", solution: "3-way matching automated across PDF invoices, POs, and received goods receipts.", metrics: "Invoice processing time cut by 95%.", roi: "610%" },
  { id: 7, category: "Finance", icon: <BadgeDollarSign size={24} />, title: "CapitalCorp Expense Auditing", problem: "Fraudulent or out-of-policy expenses slipping through manual review.", solution: "100% of receipts audited by LLM against complex 40-page corporate policy.", metrics: "Identified $4M in out-of-policy spend.", roi: "900%" },
  
  { id: 8, category: "HR", icon: <Building2 size={24} />, title: "TechSoft Employee Onboarding", problem: "IT taking 4 days to provision software access for new hires.", solution: "Webhook triggers upon Workday status change to auto-provision 12 SaaS accounts.", metrics: "Day-1 readiness increased to 100%.", roi: "215%" },
  { id: 9, category: "HR", icon: <Building2 size={24} />, title: "MedStaff Credential Verification", problem: "Manually checking nursing licenses across 50 state databases.", solution: "Nightly automated web-scraping and cross-referencing of active licenses.", metrics: "Compliance risk reduced to zero.", roi: "340%" },
  
  { id: 10, category: "Retail", icon: <Building2 size={24} />, title: "ShopGlobal Returns Processing", problem: "RMA numbers manually verified against damaged goods photos.", solution: "Vision model assessing damage and automatically issuing refunds via Stripe API.", metrics: "Refund processing speed improved by 8x.", roi: "450%" },
  { id: 11, category: "Retail", icon: <Building2 size={24} />, title: "E-Commerce Inventory Sync", problem: "Shopify and legacy warehouse DB falling out of sync, causing overselling.", solution: "Real-time orchestration layer normalizing API payloads between systems.", metrics: "Oversells reduced by 99%.", roi: "280%" },
  
  { id: 12, category: "Healthcare", icon: <HeartPulse size={24} />, title: "CareClinic Patient Intake", problem: "Front desk manually typing handwritten patient forms into Epic EHR.", solution: "Handwriting-capable OCR digitizing forms with medical context understanding.", metrics: "Patient wait times reduced by 15 minutes.", roi: "310%" },
  { id: 13, category: "Healthcare", icon: <HeartPulse size={24} />, title: "PharmaSupply Compliance", problem: "Auditing cold-chain temperature logs taking weeks.", solution: "Instant ingestion of IoT log files to flag temperature excursions automatically.", metrics: "Audit time reduced from weeks to seconds.", roi: "500%" },
  
  { id: 14, category: "Manufacturing", icon: <Package size={24} />, title: "BuildCo Disruption Alerts", problem: "Supplier emails about delays being buried in buyers' inboxes.", solution: "LLM scanning vendor emails for delay sentiment and updating production schedules.", metrics: "Production line halts decreased by 18%.", roi: "260%" },
  { id: 15, category: "Real Estate", icon: <Building2 size={24} />, title: "PropertyGroup Lease Extraction", problem: "Paralegals spending hours abstracting 100-page commercial leases.", solution: "Legal-tuned model extracting 50 key clauses into structured database format.", metrics: "Abstraction cost dropped from $400 to $12 per lease.", roi: "1200%" }
];

export default function CaseStudiesExpanded() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Higher Ed", "Logistics", "Finance", "HR", "Retail", "Healthcare", "Manufacturing", "Real Estate"];
  
  const filteredData = filter === "All" ? caseStudiesData : caseStudiesData.filter(item => item.category === filter);

  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container">
        
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center' }}>
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '100px',
                border: filter === cat ? 'none' : '1px solid var(--glass-border)',
                background: filter === cat ? 'var(--text-primary)' : 'white',
                color: filter === cat ? 'white' : 'var(--text-secondary)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {filteredData.map((study, idx) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.1 }}
              style={{ 
                background: 'var(--bg-secondary)', 
                padding: '2rem', 
                borderRadius: '16px', 
                border: '1px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent-blue)' }}>
                {study.icon}
                <span style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{study.category}</span>
              </div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>{study.title}</h3>
              
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>The Challenge:</strong>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{study.problem}</p>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>Daxow Solution:</strong>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{study.solution}</p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Impact</strong>
                  <div style={{ fontSize: '0.95rem', fontWeight: 500, color: '#10b981' }}>{study.metrics}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>ROI</strong>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>{study.roi}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
