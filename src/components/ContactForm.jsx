"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';

const FALLBACK_EMAIL = 'ahmed@daxow.com';

const TOPICS = [
  { value: 'demo', label: 'Request a demo' },
  { value: 'audit', label: 'Free AI architecture audit' },
  { value: 'website', label: 'AI website development (request a call)' },
  { value: 'sales', label: 'Talk to sales' },
  { value: 'careers', label: 'Careers' },
  { value: 'other', label: 'Something else' },
];

const INITIAL = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  companySize: '1-50 employees',
  topic: 'demo',
  message: '',
  website: '',
};

const buildMailto = (form) => {
  const topic = TOPICS.find((t) => t.value === form.topic)?.label || 'Inquiry';
  const subject = `[Daxow] ${topic} — ${form.firstName} ${form.lastName}`.trim();
  const body = [
    `Name: ${form.firstName} ${form.lastName}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Company / University: ${form.company}`,
    `Company size: ${form.companySize}`,
    '',
    form.message,
  ].join('\n');
  return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [mailtoHref, setMailtoHref] = useState('');

  // Pre-select the topic from links like /contact?topic=audit
  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get('topic');
    if (topic && TOPICS.some((t) => t.value === topic)) {
      setForm((f) => ({ ...f, topic }));
    }
  }, []);

  const callRequested = form.topic === 'website';

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    setMailtoHref('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        setForm({ ...INITIAL, topic: form.topic });
        return;
      }

      setStatus('error');
      if (data.fallback === 'mailto') {
        const href = buildMailto(form);
        setMailtoHref(href);
        setErrorMessage('We couldn’t send your message automatically. Your email app will open with everything pre-filled — just press send.');
        window.location.href = href;
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      const href = buildMailto(form);
      setStatus('error');
      setMailtoHref(href);
      setErrorMessage('Network error. You can email us directly instead.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
      <div className="form-field">
        <label htmlFor="topic">What can we help with?</label>
        <select id="topic" name="topic" value={form.topic} onChange={update}>
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="firstName">First Name *</label>
          <input id="firstName" name="firstName" type="text" placeholder="John" autoComplete="given-name" required value={form.firstName} onChange={update} />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" placeholder="Doe" autoComplete="family-name" value={form.lastName} onChange={update} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="email">Work Email *</label>
        <input id="email" name="email" type="email" placeholder="john@company.com" autoComplete="email" required value={form.email} onChange={update} />
      </div>
      <div className="form-field">
        <label htmlFor="phone">Phone Number{callRequested ? ' *' : ''}</label>
        <input id="phone" name="phone" type="tel" placeholder="+90 5XX XXX XXXX" autoComplete="tel" required={callRequested} value={form.phone} onChange={update} />
      </div>
      <div className="form-field">
        <label htmlFor="company">Company / University</label>
        <input id="company" name="company" type="text" placeholder="Your organization name" autoComplete="organization" value={form.company} onChange={update} />
      </div>
      <div className="form-field">
        <label htmlFor="companySize">Company Size</label>
        <select id="companySize" name="companySize" value={form.companySize} onChange={update}>
          <option>1-50 employees</option>
          <option>51-200 employees</option>
          <option>201-1000 employees</option>
          <option>1000+ employees</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">How can we help? *</label>
        <textarea id="message" name="message" rows="4" placeholder={callRequested ? 'Tell us about your business and the website you want to build...' : 'Tell us about the workflows you want to automate...'} required value={form.message} onChange={update}></textarea>
      </div>

      {/* Honeypot field for bots */}
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} />
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div key="success" className="form-status success" role="status" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <CheckCircle2 size={20} style={{ flexShrink: 0 }} />
            <span>Thank you! Your message has been sent. Our team will get back to you within 24 hours.</span>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div key="error" className="form-status error" role="alert" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <AlertCircle size={20} style={{ flexShrink: 0 }} />
            <span>
              {errorMessage}{' '}
              {mailtoHref && <a href={mailtoHref}>Email {FALLBACK_EMAIL}</a>}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        className="btn-primary"
        disabled={status === 'sending'}
        whileTap={{ scale: 0.98 }}
        style={{ padding: '1rem', fontSize: '1.125rem', width: '100%', justifyContent: 'center' }}
      >
        {status === 'sending' ? (
          <>Sending <Loader2 size={20} className="spin" /></>
        ) : (
          <>{callRequested ? 'Request a Call' : 'Send Request'} <Send size={18} /></>
        )}
      </motion.button>
    </form>
  );
}
