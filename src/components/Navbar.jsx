"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link href="/" className="logo">
          <img src="/Daxow Logo/Daxow-Color-Logo.svg" alt="Daxow" style={{ height: '36px', width: 'auto' }} />
        </Link>
        
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/enterprise" className="nav-link">Enterprise</Link>
          <Link href="/universities" className="nav-link">Universities</Link>
          <Link href="/case-studies" className="nav-link">Case Studies</Link>
          <Link href="/about" className="nav-link">About</Link>
        </div>

        <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem', textDecoration: 'none' }}>
            Get Started
          </Link>
          
          <button 
            className="mobile-menu-btn" 
            style={{ background: 'transparent', border: 'none', color: 'white', display: 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
