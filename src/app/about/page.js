"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1>Building the <span className="gradient-text">Future of Work</span></h1>
            <p>
              Daxow was founded with a singular mission: to eliminate the mundane, repetitive tasks that drain human potential and corporate resources.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Story</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              We realized that legacy RPA (Robotic Process Automation) was broken. It relied on brittle screen-scraping and static rules. When a button moved, the automation broke. 
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '4rem' }}>
              Daxow was built differently. By leveraging state-of-the-art Large Language Models orchestrating semantic workflows, our agents don't just follow rules—they understand intent. They can read a messy email, extract the necessary data, query an internal database, and execute an API call, all securely and autonomously.
            </p>

            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Values</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
              <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Security First</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We operate on zero-retention policies. Your data is yours. We never train global models on your proprietary information.</p>
              </div>
              <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Human Empowerment</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We build AI not to replace humans, but to free them from being robots. We let software do the software work, so humans can do the human work.</p>
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
