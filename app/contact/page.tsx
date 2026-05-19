'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Globe, ArrowRight, CheckCircle2, ExternalLink, Send } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';
import { SITE } from '@/lib/constants';

const SUBJECTS = [
  'General Inquiry',
  'IT Support Request',
  'Network Solutions',
  'Hardware / Equipment',
  'Get a Free Quote',
  'Partnership',
  'Other',
] as const;

interface FormState {
  name:    string;
  email:   string;
  phone:   string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form,    setForm]    = useState<FormState>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputCls =
    'form-input w-full';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulated submit — replace with real API / EmailJS / Resend
    await new Promise(r => setTimeout(r, 1500));
    const text = encodeURIComponent(
      `New Contact from ZOENP Website\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/${SITE.phone.replace(/\D/g, '')}?text=${text}`, '_blank');
    setLoading(false);
    setSuccess(true);
  };

  const CONTACT_INFO = [
    { icon: MapPin,    label: 'Address',   val: SITE.address,   href: 'https://maps.google.com/?q=2335+E+Atlantic+BLVD+Pompano+Beach+FL', external: true  },
    { icon: Phone,     label: 'Phone',     val: SITE.phone,     href: `tel:${SITE.phone}`,                                                   external: false },
    { icon: Mail,      label: 'Email',     val: SITE.email,     href: `mailto:${SITE.email}`,                                                external: false },
    { icon: Instagram, label: 'Instagram', val: SITE.instagram, href: SITE.igUrl,                                                            external: true  },
  ] as const;

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Get in Touch"
          title="Contact"
          highlight="Us"
          description="Have a question or ready to get started? We're here to help. Reach out and our team will get back to you promptly."
        />

        {/* ─── Contact Section ──────────────────────────────────────────── */}
        <section className="py-24 bg-brand-dark" aria-label="Contact form and information">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Left: Info */}
              <div className="flex flex-col gap-10">
                <div>
                  <div className="badge mb-4 w-fit">Let&apos;s Talk</div>
                  <h2 className="font-display font-bold text-4xl text-white mb-4">
                    We&apos;re Ready to
                    <br />
                    <span className="text-blue-gradient">Help You.</span>
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    Whether you need immediate IT support, want to discuss a network project, or simply want to learn more about our services, reach out. We respond promptly.
                  </p>
                </div>

                {/* Contact details */}
                <ul className="flex flex-col gap-4" role="list" aria-label="Contact information">
                  {CONTACT_INFO.map(({ icon: Icon, label, val, href, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 hover:border-brand-blue/25 hover:bg-brand-blue-dim transition-all duration-200 group"
                        aria-label={`${label}: ${val}`}
                      >
                        <div className="w-11 h-11 rounded-xl bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-brand-blue" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-0.5">{label}</p>
                          <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors">{val}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Hours */}
                <div
                  className="p-6 rounded-2xl border border-white/6"
                  style={{ background: 'rgba(19,35,56,0.6)' }}
                >
                  <h3 className="text-white font-semibold mb-4 font-display">Business Hours</h3>
                  <ul className="flex flex-col gap-2.5" role="list" aria-label="Business hours">
                    {[
                      { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM EST' },
                      { day: 'Saturday',        hours: '10:00 AM – 2:00 PM EST' },
                      { day: 'Sunday',          hours: 'Closed' },
                    ].map(({ day, hours }) => (
                      <li key={day} className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{day}</span>
                        <span className={hours === 'Closed' ? 'text-gray-600' : 'text-brand-blue font-medium'}>{hours}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-500 text-xs mt-4">
                    For urgent IT support, please call or message us directly on WhatsApp.
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div>
                {success ? (
                  <div
                    className="flex flex-col items-center justify-center gap-6 p-12 rounded-3xl border border-brand-blue/20 text-center h-full"
                    style={{ background: 'rgba(19,35,56,0.8)' }}
                    role="alert"
                    aria-live="assertive"
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-blue-dim border border-brand-blue/30 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-brand-blue" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Thank you for reaching out. You&apos;ve been redirected to WhatsApp. Our team will respond shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => { setSuccess(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }); }}
                      className="px-6 py-3 rounded-full border border-brand-blue/30 text-brand-blue text-sm font-semibold hover:bg-brand-blue-dim transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 p-8 rounded-3xl border border-white/6 shadow-dark-lg"
                    style={{ background: 'rgba(19,35,56,0.8)' }}
                    aria-label="Contact form"
                    noValidate
                  >
                    <div className="pb-4 border-b border-white/6">
                      <h2 className="font-display font-bold text-xl text-white">Send Us a Message</h2>
                      <p className="text-gray-500 text-sm mt-1">We&apos;ll get back to you within 24 hours.</p>
                    </div>

                    {/* Name + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="c-name" className="text-sm font-semibold text-gray-300">
                          Full Name <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="John Smith"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className={inputCls}
                          aria-required="true"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="c-phone" className="text-sm font-semibold text-gray-300">
                          Phone Number
                        </label>
                        <input
                          id="c-phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="(555) 000-0000"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-email" className="text-sm font-semibold text-gray-300">
                        Email Address <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className={inputCls}
                        aria-required="true"
                      />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-subject" className="text-sm font-semibold text-gray-300">
                        Subject <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="c-subject"
                        required
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        className={inputCls}
                        aria-required="true"
                        style={{ background: 'rgba(255,255,255,0.04)', color: form.subject ? '#F1F5F9' : '#64748B' }}
                      >
                        <option value="" disabled>Select a subject</option>
                        {SUBJECTS.map(s => (
                          <option key={s} value={s} style={{ background: '#0D1B2A', color: '#F1F5F9' }}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-message" className="text-sm font-semibold text-gray-300">
                        Message <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="c-message"
                        required
                        rows={4}
                        placeholder="Tell us about your project or how we can help…"
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className={`${inputCls} resize-none`}
                        aria-required="true"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-blue text-white font-bold text-base hover:bg-brand-blue-light hover:shadow-blue transition-all duration-300 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none mt-1"
                      aria-label="Send message"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5" aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-600 text-xs">
                      By submitting, you agree to our{' '}
                      <Link href="/about" className="text-brand-blue/70 hover:text-brand-blue transition-colors">Privacy Policy</Link>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Map placeholder ──────────────────────────────────────────── */}
        <section className="border-t border-white/5" aria-label="Location">
          <div
            className="h-64 flex items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #132338 0%, #0D1B2A 100%)' }}
          >
            <div className="absolute inset-0 bg-grid-tech opacity-30" aria-hidden="true" />
            <div className="relative text-center flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-brand-blue" aria-hidden="true" />
              </div>
              <div>
                <p className="text-white font-semibold">2335 E Atlantic BLVD 300-20</p>
                <p className="text-gray-400 text-sm">Pompano Beach, FL 33062</p>
              </div>
              <a
                href="https://maps.google.com/?q=2335+E+Atlantic+BLVD+Pompano+Beach+FL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-medium hover:text-brand-blue-light transition-colors"
                aria-label="View on Google Maps (opens in new tab)"
              >
                View on Google Maps
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* ─── Parent Company (highlighted at bottom) ───────────────────── */}
        <section
          className="py-20 border-t border-white/5"
          style={{ background: 'rgba(19,35,56,0.5)' }}
          aria-label="Parent company information"
        >
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">Our Parent Company</p>
            </div>
            <div
              className="rounded-3xl border border-brand-blue/20 p-8 flex flex-col sm:flex-row gap-6 items-start"
              style={{ background: 'rgba(30,144,255,0.04)' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center flex-shrink-0 shadow-blue">
                <Globe className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-white mb-1">{SITE.parent.name}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" aria-hidden="true" />
                  {SITE.parent.address}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  With over 27 years of experience in the Brazilian technology market, Suporte Informática is the foundation of everything we do at ZOENP Solutions. Visit their website to learn more about our shared legacy of excellence.
                </p>
                <a
                  href={SITE.parent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-light transition-colors text-sm"
                  aria-label="Visit Suporte Informática website (opens in new tab)"
                >
                  {SITE.parent.url.replace('https://', '')}
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
