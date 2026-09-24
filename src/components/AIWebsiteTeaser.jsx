"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, PhoneCall, ArrowRight, PenTool, Image as ImageIcon, Video, Search } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: <PenTool size={20} color="#60a5fa" />, label: 'AI-written marketing copy' },
  { icon: <ImageIcon size={20} color="#a78bfa" />, label: 'AI-generated visuals' },
  { icon: <Video size={20} color="#22d3ee" />, label: 'AI promo videos' },
  { icon: <Search size={20} color="#34d399" />, label: 'SEO built in from day one' },
];

export default function AIWebsiteTeaser() {
  return (
    <section className="section" id="ai-websites">
      <div className="container">
        <motion.div
          className="ai-web-teaser"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ position: 'absolute', top: '-120px', left: '-120px', width: '320px', height: '320px', background: 'var(--accent-purple)', filter: 'blur(140px)', opacity: 0.45 }}></div>
          <div style={{ position: 'absolute', bottom: '-120px', right: '-120px', width: '320px', height: '320px', background: 'var(--accent-cyan)', filter: 'blur(140px)', opacity: 0.35 }}></div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="service-badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#93c5fd', borderColor: 'rgba(255,255,255,0.15)' }}>
              <Sparkles size={16} /> New Service
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.25rem', color: 'white' }}>
              AI Website <span className="gradient-text">Development</span>
            </h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Want a website built with the latest AI technology? We design and launch premium, high-converting websites with amazing AI-created marketing content that attracts and converts your customers.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact?topic=website#contact-form" className="btn-primary">
                  Request a Call <PhoneCall size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/ai-website-development" className="btn-secondary">
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gap: '0.75rem' }}>
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.label}
                className="ai-web-chip"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                {h.icon} {h.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
