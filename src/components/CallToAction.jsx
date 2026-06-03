"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="section" style={{ padding: '0 2rem' }}>
      <motion.div 
        className="container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ 
          background: 'var(--bg-secondary)', 
          borderRadius: '32px', 
          padding: '6rem 2rem', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--glass-border)'
        }}>
          {/* Decorative glowing orbs */}
          <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: 'var(--accent-purple)', filter: 'blur(150px)', opacity: 0.2 }}></div>
          <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--accent-cyan)', filter: 'blur(150px)', opacity: 0.2 }}></div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Ready to <span className="gradient-text">Automate?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Stop wasting human potential on robotic tasks. Schedule a free AI architecture audit and discover exactly how much time and money Daxow can save you.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
                Schedule Free Audit <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
