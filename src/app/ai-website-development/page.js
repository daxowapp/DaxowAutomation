"use client";

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  Sparkles, PhoneCall, ArrowRight, PenTool, Image as ImageIcon, Video, Search,
  Bot, Gauge, Languages, BarChart3, CheckCircle2, MessageSquare, Rocket, Wand2,
} from 'lucide-react';

const REQUEST_CALL_HREF = '/contact?topic=website#contact-form';

const FEATURES = [
  { icon: <PenTool size={26} />, color: 'var(--accent-blue)', title: 'AI Marketing Copy', text: 'Headlines, landing pages, product descriptions and blog posts written by AI and refined by our team to match your brand voice and convert visitors into leads.' },
  { icon: <ImageIcon size={26} />, color: 'var(--accent-purple)', title: 'AI-Generated Visuals', text: 'Unique, on-brand hero images, illustrations and product shots created with the latest image models. No generic stock photos.' },
  { icon: <Video size={26} />, color: 'var(--accent-cyan)', title: 'AI Video & Motion', text: 'Short promo videos, animated explainers and social clips that bring your offer to life and keep visitors on the page longer.' },
  { icon: <Search size={26} />, color: '#10b981', title: 'Built-in SEO & AEO', text: 'Keyword-researched structure, schema markup and content optimized for Google and for AI answer engines like ChatGPT and Perplexity.' },
  { icon: <Bot size={26} />, color: 'var(--accent-blue)', title: 'AI Chat Assistant', text: 'A 24/7 assistant trained on your services that answers questions, qualifies leads and books meetings straight into your calendar.' },
  { icon: <Languages size={26} />, color: 'var(--accent-purple)', title: 'Multilingual by Default', text: 'Reach global audiences with natural, AI-translated pages in English, Turkish, Arabic and more, all kept in sync automatically.' },
  { icon: <Gauge size={26} />, color: 'var(--accent-cyan)', title: 'Lightning Fast', text: 'Built on modern frameworks like Next.js for near-instant load times, top Core Web Vitals scores and flawless mobile experiences.' },
  { icon: <BarChart3 size={26} />, color: '#10b981', title: 'Conversion Analytics', text: 'Track every click, form and call. AI insights tell you which pages and messages convert best, so the site keeps improving.' },
];

const STEPS = [
  { icon: <PhoneCall size={22} />, title: 'Discovery Call', text: 'A free 30-minute call to understand your business, audience and goals.' },
  { icon: <Wand2 size={22} />, title: 'AI Strategy & Content', text: 'We research your market and generate copy, visuals and video tailored to your brand.' },
  { icon: <Sparkles size={22} />, title: 'Design & Build', text: 'A premium, custom design built with the latest AI-powered web technology.' },
  { icon: <Rocket size={22} />, title: 'Launch & Grow', text: 'We launch, connect analytics and keep optimizing content to bring you more leads.' },
];

const INCLUDED = [
  'Custom premium design (no templates)',
  'AI-written marketing copy for every page',
  'AI-generated images & promo video',
  'SEO setup, schema & Google indexing',
  'AI chat assistant & lead capture forms',
  'Mobile-first, fast & secure hosting',
  'Analytics & conversion tracking',
  'Training so your team can update content',
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AIWebsiteDevelopmentPage() {
  return (
    <main>
      <Navbar />

      <header className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="service-badge">
              <Sparkles size={16} /> New Service · AI Website Development
            </div>
            <h1>Websites Built With <span className="gradient-text">Next-Gen AI</span></h1>
            <p>
              We design and build stunning, high-converting websites using the latest AI technology, complete with AI-generated marketing copy, visuals and video that turn visitors into customers.
            </p>
            <div className="hero-buttons" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href={REQUEST_CALL_HREF} className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
                  Request a Call <PhoneCall size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="#features" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
                  See What&apos;s Included <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stats strip */}
      <section style={{ background: 'white', borderBottom: '1px solid var(--glass-border)', padding: '3rem 0' }}>
        <div className="container">
          <div className="service-stats">
            {[
              { value: '2–4 wks', label: 'From call to launch' },
              { value: '3x', label: 'Faster content production' },
              { value: '95+', label: 'Google PageSpeed score' },
              { value: '24/7', label: 'AI assistant capturing leads' },
            ].map((s, i) => (
              <motion.div key={s.label} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="service-stat">
                <div className="service-stat-value gradient-text">{s.value}</div>
                <div className="service-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" id="features" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="section-title">Amazing Marketing Content, <span className="gradient-text">Powered by AI</span></h2>
            <p className="section-subtitle" style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '760px', margin: '0 auto 4rem', fontSize: '1.125rem' }}>
              Your website is your best salesperson. We combine creative strategy with the newest AI models to produce content that ranks, engages and sells.
            </p>
          </motion.div>

          <div className="service-grid">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="card"
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="card-icon" style={{ color: f.color }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="section-title">From First Call to <span className="gradient-text">Launch</span></h2>
            <p className="section-subtitle" style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.125rem' }}>
              A simple, transparent process. You focus on your business, and we handle everything else.
            </p>
          </motion.div>

          <div className="service-steps">
            {STEPS.map((s, i) => (
              <motion.div key={s.title} className="service-step" {...fadeUp} transition={{ duration: 0.5, delay: i * 0.12 }}>
                <div className="service-step-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="card-icon" style={{ background: 'var(--gradient-glow)' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included + call CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="grid-2">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem' }}>
                Everything You Need to <span className="gradient-text">Win Online</span>
              </h2>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
                {INCLUDED.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                    <CheckCircle2 color="var(--accent-blue)" size={20} style={{ flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="glass-panel"
              style={{ padding: '3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '220px', height: '220px', background: 'var(--accent-purple)', filter: 'blur(120px)', opacity: 0.2 }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="card-icon" style={{ margin: '0 auto 1.5rem', background: 'var(--gradient-glow)' }}>
                  <MessageSquare size={26} />
                </div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Let&apos;s Talk About Your Website</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
                  Book a free, no-obligation call. We&apos;ll review your current site, share AI content ideas and give you a clear plan and quote.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'stretch' }}>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href={REQUEST_CALL_HREF} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px 32px', fontSize: '1.125rem' }}>
                      Request a Call <PhoneCall size={20} />
                    </Link>
                  </motion.div>
                  <a href="tel:+905492006060" className="btn-secondary" style={{ justifyContent: 'center' }}>
                    Or call us now: +90 549 200 6060
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
