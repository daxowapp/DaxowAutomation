import { NextResponse } from 'next/server';

// Leads from the contact form are delivered here. Override with CONTACT_TO_EMAIL.
const DEFAULT_TO_EMAIL = 'ahmed@daxow.com';

const TOPIC_LABELS = {
  demo: 'Demo request',
  audit: 'Free AI audit',
  sales: 'Sales inquiry',
  careers: 'Careers',
  other: 'General inquiry',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    firstName: clean(body.firstName, 100),
    lastName: clean(body.lastName, 100),
    email: clean(body.email, 200),
    phone: clean(body.phone, 50),
    company: clean(body.company, 200),
    companySize: clean(body.companySize, 50),
    topic: TOPIC_LABELS[body.topic] ? body.topic : 'demo',
    message: clean(body.message, 5000),
  };

  if (!lead.firstName || !lead.email || !lead.message) {
    return NextResponse.json({ error: 'Please fill in your name, email and message.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(lead.email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set; lead was not emailed.');
    return NextResponse.json({ error: 'Email delivery is not configured.', fallback: 'mailto' }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'Daxow Website <onboarding@resend.dev>';
  const topicLabel = TOPIC_LABELS[lead.topic];
  const fullName = `${lead.firstName} ${lead.lastName}`.trim();

  const rows = [
    ['Topic', topicLabel],
    ['Name', fullName],
    ['Email', lead.email],
    ['Phone', lead.phone || '—'],
    ['Company / University', lead.company || '—'],
    ['Company size', lead.companySize || '—'],
  ];

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nMessage:\n${lead.message}`;
  const html = `
    <h2>New ${escapeHtml(topicLabel)} from daxow.com</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`).join('')}
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${escapeHtml(lead.message)}</p>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email,
        subject: `[Daxow] ${topicLabel} — ${fullName}${lead.company ? ` (${lead.company})` : ''}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      console.error('[contact] Resend error', res.status, await res.text());
      return NextResponse.json({ error: 'Could not send your message.', fallback: 'mailto' }, { status: 502 });
    }
  } catch (err) {
    console.error('[contact] Failed to reach Resend', err);
    return NextResponse.json({ error: 'Could not send your message.', fallback: 'mailto' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
