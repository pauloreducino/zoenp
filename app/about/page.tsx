import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about ZOENP Solutions — backed by Suporte Informática, a 27-year-old tech company from Brazil, now expanding excellence to Pompano Beach, FL.',
};

const TIMELINE = [
  { year: '1997', event: 'Suporte Informática founded in Itajaí, Santa Catarina, Brazil', highlight: false },
  { year: '2000s', event: 'Grew to serve hundreds of clients across Santa Catarina', highlight: false },
  { year: '2010s', event: 'Expanded operations to São Paulo and Paraná', highlight: false },
  { year: '2020+', event: 'Recognized as a reference in tech solutions across multiple Brazilian states', highlight: false },
  { year: '2024', event: 'ZOENP Solutions established in Pompano Beach, FL — USA expansion begins', highlight: true },
] as const;

const STATS = [
  { val: '27+', label: 'Years in Business' },
  { val: '3',   label: 'Brazilian States Served' },
  { val: '100s',label: 'Happy Clients' },
  { val: '1',   label: 'US Location (and growing)' },
] as const;

const SPECIALTIES = [
  'Computer Equipment Sales',
  'Computer Maintenance & Repair',
  'Notebook & Printer Repair',
  'Network Infrastructure',
  'Structured Cabling',
  'Wi-Fi Deployment & Support',
  'IT Consulting',
  'Technical Support',
] as const;

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Our Story"
          title="About"
          highlight="ZOENP Solutions"
          description="From the success of Brazil to the shores of South Florida — bringing world-class technology expertise to American businesses."
        />

        {/* ─── Main Story ───────────────────────────────────────────────── */}
        <section className="py-24 bg-brand-dark" aria-label="Company story">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left: Visual */}
              <div className="relative" aria-hidden="true">
                {/* Main card */}
                <div
                  className="rounded-3xl border border-white/8 p-8 shadow-dark-lg"
                  style={{ background: 'rgba(19,35,56,0.8)' }}
                >
                  {/* Map placeholder with location */}
                  <div
                    className="rounded-2xl h-48 mb-6 flex items-center justify-center relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #0D1B2A, #132338)' }}
                  >
                    <div className="absolute inset-0 bg-grid-tech opacity-50" />
                    {/* SVG world map simplified */}
                    <svg viewBox="0 0 200 120" className="w-full h-full opacity-20" fill="none">
                      <path d="M20 60 Q40 40 60 50 Q80 60 100 45 Q120 30 140 50 Q160 60 180 55" stroke="#1E90FF" strokeWidth="1"/>
                      <path d="M10 70 Q30 80 50 70 Q70 60 90 70 Q110 75 130 65 Q150 55 170 65 Q185 72 195 68" stroke="#1E90FF" strokeWidth="0.8"/>
                    </svg>
                    <div className="relative flex flex-col items-center gap-1 z-10">
                      <MapPin className="w-8 h-8 text-brand-blue" />
                      <span className="text-white text-sm font-semibold">Pompano Beach, FL</span>
                      <span className="text-gray-400 text-xs">United States</span>
                    </div>
                  </div>

                  {/* Location cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-white/4 border border-white/6">
                      <p className="text-brand-blue text-xs font-semibold uppercase tracking-wide mb-1">US HQ</p>
                      <p className="text-white text-sm font-medium">Pompano Beach</p>
                      <p className="text-gray-500 text-xs">Florida, USA</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/4 border border-white/6">
                      <p className="text-brand-blue text-xs font-semibold uppercase tracking-wide mb-1">Origin</p>
                      <p className="text-white text-sm font-medium">Itajaí</p>
                      <p className="text-gray-500 text-xs">Santa Catarina, Brazil</p>
                    </div>
                    <div className="col-span-2 p-4 rounded-xl bg-brand-blue-dim border border-brand-blue/20">
                      <p className="text-brand-blue-light text-sm font-semibold text-center">
                        27 Years of Proven Excellence
                      </p>
                    </div>
                  </div>
                </div>

                {/* Specialties card */}
                <div
                  className="mt-5 rounded-2xl border border-white/8 p-6"
                  style={{ background: 'rgba(19,35,56,0.6)' }}
                >
                  <h3 className="text-white font-display font-semibold mb-4">Our Specialties</h3>
                  <ul className="grid grid-cols-2 gap-2" role="list">
                    {SPECIALTIES.map(s => (
                      <li key={s} className="flex items-center gap-2 text-gray-400 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Story */}
              <div className="flex flex-col gap-8">
                <div>
                  <div className="badge mb-4 w-fit">Our Journey</div>
                  <h2 className="font-display font-bold text-4xl text-white mb-6">
                    Excellence Traveling
                    <br />
                    <span className="text-blue-gradient">Across Borders.</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-5 text-gray-400 leading-relaxed">
                  <p>
                    <strong className="text-white font-semibold">ZOENP Solutions</strong> is arriving in the USA through the success our parent company conquered in Brazil. Located in Itajaí, Santa Catarina, our parent company — Suporte Informática — is a reference in technological solutions with{' '}
                    <strong className="text-brand-blue font-semibold">27 years in the market.</strong>
                  </p>
                  <p>
                    We specialize in computer equipment sales, computer maintenance, notebook and printer repair, and network infrastructure support — including structured cabling and Wi-Fi deployments. Every service is backed by nearly three decades of hands-on technical expertise.
                  </p>
                  <p>
                    Our journey of success took us beyond Santa Catarina&apos;s borders, earning the trust of clients across <strong className="text-white font-semibold">São Paulo, Paraná,</strong> and now the United States. With an experienced team passionate about technology, we are ready to meet your tech needs — offering quality products and expert technical support.
                  </p>
                  <p>
                    We understand that every client is unique. Whether you&apos;re a small business owner in need of reliable IT support, or a growing company requiring full network infrastructure, <strong className="text-white font-semibold">ZOENP Solutions</strong> is your trusted partner.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-blue-light hover:shadow-blue transition-all duration-300 w-fit active:scale-[0.97]"
                  aria-label="Contact ZOENP Solutions"
                >
                  Work With Us
                  <ArrowRight className="w-4.5 h-4.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Stats ────────────────────────────────────────────────────── */}
        <section
          className="py-16 border-y border-white/5"
          style={{ background: 'rgba(19,35,56,0.6)' }}
          aria-label="Company statistics"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {STATS.map(({ val, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5">
                  <span className="stat-num text-4xl" aria-label={val}>{val}</span>
                  <span className="text-gray-400 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Timeline ─────────────────────────────────────────────────── */}
        <section className="py-24 bg-brand-dark" aria-label="Company timeline">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="badge mx-auto w-fit mb-4">Our History</div>
              <h2 className="font-display font-bold text-4xl text-white">
                From Brazil to the <span className="text-blue-gradient">United States</span>
              </h2>
            </div>

            <ol className="relative" aria-label="Company timeline">
              {/* Vertical line */}
              <div
                className="absolute left-8 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(180deg, transparent, rgba(30,144,255,0.4) 10%, rgba(30,144,255,0.4) 90%, transparent)' }}
                aria-hidden="true"
              />

              {TIMELINE.map(({ year, event, highlight }, i) => (
                <li
                  key={year}
                  className="relative flex items-start gap-8 pb-10 last:pb-0"
                  aria-label={`${year}: ${event}`}
                >
                  {/* Dot */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border ${
                      highlight
                        ? 'bg-brand-blue border-brand-blue shadow-blue'
                        : 'bg-brand-mid border-white/10'
                    }`}
                  >
                    <span className={`font-display font-bold text-xs text-center leading-tight ${highlight ? 'text-white' : 'text-brand-blue'}`}>
                      {year}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 mt-3 p-5 rounded-2xl border ${
                      highlight
                        ? 'bg-brand-blue-dim border-brand-blue/30'
                        : 'bg-white/2 border-white/5'
                    }`}
                  >
                    <p className={`text-sm leading-relaxed ${highlight ? 'text-white font-semibold' : 'text-gray-400'}`}>
                      {event}
                    </p>
                    {highlight && (
                      <span className="inline-flex mt-2 px-2.5 py-1 rounded-full bg-brand-blue text-white text-[10px] font-bold uppercase tracking-wider">
                        Now Open in Florida
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── Parent Company ───────────────────────────────────────────── */}
        <section
          className="py-24"
          style={{ background: 'linear-gradient(135deg, #132338 0%, #0D1B2A 100%)' }}
          aria-label="Our parent company"
        >
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="badge mx-auto w-fit mb-4">Our Roots</div>
              <h2 className="font-display font-bold text-3xl text-white">Parent Company</h2>
            </div>

            <div
              className="rounded-3xl border border-brand-blue/20 p-8 lg:p-10"
              style={{ background: 'rgba(30,144,255,0.05)' }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center flex-shrink-0 shadow-blue">
                  <Globe className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-2xl text-white mb-2">{SITE.parent.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
                    <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0" aria-hidden="true" />
                    {SITE.parent.address}
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Founded in 1997 in Itajaí, Santa Catarina, Suporte Informática is the parent company of ZOENP Solutions.
                    With over 27 years in the technology market, they established themselves as a regional leader in computer sales, maintenance, and IT infrastructure — serving clients across multiple Brazilian states and now expanding their proven model internationally through ZOENP Solutions.
                  </p>
                  <a
                    href={SITE.parent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-light transition-colors"
                    aria-label="Visit Suporte Informática website (opens in new tab)"
                  >
                    Visit {SITE.parent.name}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
