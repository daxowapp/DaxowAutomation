"use client";

import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <Link href="/" className="logo" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/Daxow Logo/Daxow-Color-Logo.svg" alt="Daxow" style={{ height: '32px', width: 'auto' }} />
            </Link>
            <p className="footer-desc">
              Pioneering the future of automated operations for universities and enterprises globally.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href="https://www.google.com/maps/search/?api=1&query=Mall+of+Istanbul+Ba%C5%9Fak%C5%9Fehir+Istanbul" target="_blank" rel="noopener noreferrer" aria-label="Office location on Google Maps" style={{ color: 'var(--text-secondary)' }}><MapPin size={20} /></a>
              <a href="mailto:support@daxow.com" aria-label="Email Daxow" style={{ color: 'var(--text-secondary)' }}><Mail size={20} /></a>
              <a href="tel:+905492006060" aria-label="Call Daxow" style={{ color: 'var(--text-secondary)' }}><Phone size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">Solutions</h4>
            <ul className="footer-links">
              <li><Link href="/universities">University Admissions</Link></li>
              <li><Link href="/universities">Student Support AI</Link></li>
              <li><Link href="/enterprise">Enterprise Automation</Link></li>
              <li><Link href="/enterprise">Logistics AI</Link></li>
              <li><Link href="/ai-website-development">AI Website Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/contact?topic=careers#contact-form">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li style={{ marginBottom: '0.75rem' }}>Mall of Istanbul, Floor 14, Office 116<br/>34490 Başakşehir/İstanbul</li>
              <li><a href="tel:+905492006060">+90 549 200 6060</a></li>
              <li><a href="tel:+905453081000">+90 545 308 1000</a></li>
              <li><a href="mailto:support@daxow.com">support@daxow.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Daxow Automation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
