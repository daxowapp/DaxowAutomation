"use client";

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Bot, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-glow"></div>
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: 'white', 
              border: '1px solid var(--glass-border)', 
              padding: '6px 16px', 
              borderRadius: '30px', 
              marginBottom: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
              <Zap size={16} color="var(--accent-blue)" />
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-blue)' }}>Next-Gen AI Orchestration</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Data-Driven <span className="gradient-text">Automation</span> for the Enterprise
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Daxow seamlessly integrates with your existing infrastructure to automate complex data pipelines, reducing human error by 99.8% and cutting operational overhead by up to 60%.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <button className="btn-primary">
              View Analytics <BarChart3 size={18} />
            </button>
            <button className="btn-secondary">
              Explore Platform <Bot size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
