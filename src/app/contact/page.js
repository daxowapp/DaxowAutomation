"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, MessageCircle, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1>Let's Automate <span className="gradient-text">Together</span></h1>
            <p>
              Ready to see Daxow in action? Reach out to our team to schedule a custom demo tailored to your workflows.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="content-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ background: 'var(--bg-secondary)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--glass-border)' }}
            >
              <h2 style={{ marginBottom: '0.5rem' }}>Contact Sales</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Fill out the form and our team will get back to you within 24 hours.</p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>First Name</label>
                    <input type="text" placeholder="John" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', outline: 'none', fontSize: '1rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', outline: 'none', fontSize: '1rem' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Work Email</label>
                  <input type="email" placeholder="john@company.com" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', outline: 'none', fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone Number</label>
                  <input type="tel" placeholder="+90 5XX XXX XXXX" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', outline: 'none', fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Company / University</label>
                  <input type="text" placeholder="Your organization name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', outline: 'none', fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Company Size</label>
                  <select style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', outline: 'none', fontSize: '1rem' }}>
                    <option>1-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-1000 employees</option>
                    <option>1000+ employees</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>How can we help?</label>
                  <textarea rows="4" placeholder="Tell us about the workflows you want to automate..." style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', outline: 'none', resize: 'vertical', fontSize: '1rem' }}></textarea>
                </div>
                <button type="button" className="btn-primary" style={{ padding: '1rem', fontSize: '1.125rem', width: '100%', border: 'none', cursor: 'pointer' }}>
                  Request Demo
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ padding: '2rem' }}
            >
              <h2 style={{ marginBottom: '2rem' }}>Our Office</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
                    <MapPin size={22} color="var(--accent-blue)" /> Istanbul, Türkiye (HQ)
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Ziya Gökalp Mah. Süleyman Demirel Bulvarı<br/>
                    Mall of İstanbul Floor:14 Office:116<br/>
                    34490 Başakşehir/İstanbul
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <div style={{ width: '48px', height: '48px', background: 'var(--gradient-glow)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={22} color="var(--accent-blue)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Phone</div>
                      <div style={{ color: 'var(--text-secondary)' }}>+90 549 200 6060</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <div style={{ width: '48px', height: '48px', background: 'var(--gradient-glow)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={22} color="var(--accent-blue)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Phone 2</div>
                      <div style={{ color: 'var(--text-secondary)' }}>+90 545 308 1000</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <div style={{ width: '48px', height: '48px', background: 'var(--gradient-glow)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={22} color="var(--accent-blue)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Email</div>
                      <div style={{ color: 'var(--text-secondary)' }}>support@daxow.com</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <div style={{ width: '48px', height: '48px', background: 'var(--gradient-glow)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Clock size={22} color="var(--accent-blue)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Working Hours</div>
                      <div style={{ color: 'var(--text-secondary)' }}>Mon-Fri 9:00AM - 6:00PM</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <div style={{ width: '48px', height: '48px', background: 'var(--gradient-glow)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Globe size={22} color="var(--accent-blue)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Website</div>
                      <div style={{ color: 'var(--text-secondary)' }}>daxow.com</div>
                    </div>
                  </div>
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
