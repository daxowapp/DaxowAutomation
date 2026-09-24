"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/universities', label: 'Universities' },
  { href: '/ai-website-development', label: 'AI Websites' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`navbar ${scrolled || mobileMenuOpen ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link href="/" className="logo" aria-label="Daxow home">
          <img src="/Daxow Logo/Daxow-Color-Logo.svg" alt="Daxow" style={{ height: '36px', width: 'auto' }} />
        </Link>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? 'active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/contact#contact-form" className="btn-primary nav-cta" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            Get Started
          </Link>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-menu-link ${pathname === item.href ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact#contact-form"
                className="btn-primary"
                style={{ justifyContent: 'center', marginTop: '1rem', width: '100%' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
