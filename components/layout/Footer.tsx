import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, ExternalLink } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="relative border-t border-white/5 bg-brand-darker pt-16 pb-8 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-tech opacity-30" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 w-fit" aria-label="ZOENP Solutions home">
              <Image
                src="/logo-zoenp.png"
                alt="ZOENP Solutions"
                width={180}
                height={120}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Technology solutions backed by 27 years of expertise. Serving Pompano Beach, FL and beyond.
            </p>
            <a
              href={SITE.igUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow ZOENP Solutions on Instagram"
              className="flex items-center gap-2 text-gray-400 text-sm hover:text-brand-blue transition-colors w-fit"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
              {SITE.instagram}
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">Navigation</h3>
            <ul className="flex flex-col gap-3" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 text-sm hover:text-brand-blue transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">Services</h3>
            <ul className="flex flex-col gap-3" role="list">
              {['Technology Solutions','IT Support','Network Solutions'].map(s => (
                <li key={s}>
                  <Link href="/services" className="text-gray-400 text-sm hover:text-brand-blue transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic flex flex-col gap-5">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Contact</h3>
            <ul className="flex flex-col gap-3.5" role="list">
              <li>
                <a
                  href="https://maps.google.com/?q=2335+E+Atlantic+BLVD+Pompano+Beach+FL"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-gray-400 text-sm hover:text-brand-blue transition-colors group"
                  aria-label="View our location on Google Maps"
                >
                  <MapPin className="w-4 h-4 text-brand-blue/60 mt-0.5 flex-shrink-0 group-hover:text-brand-blue transition-colors" aria-hidden="true" />
                  {SITE.address}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-gray-400 text-sm hover:text-brand-blue transition-colors group" aria-label="Call us">
                  <Phone className="w-4 h-4 text-brand-blue/60 flex-shrink-0 group-hover:text-brand-blue transition-colors" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-gray-400 text-sm hover:text-brand-blue transition-colors group" aria-label="Send us an email">
                  <Mail className="w-4 h-4 text-brand-blue/60 flex-shrink-0 group-hover:text-brand-blue transition-colors" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {year} ZOENP Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-gray-500 text-xs hover:text-brand-blue transition-colors">Privacy Policy</Link>
            <Link href="/about" className="text-gray-500 text-xs hover:text-brand-blue transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Parent company note */}
        <div className="mt-8 pt-8 border-t border-white/4 text-center">
          <p className="text-gray-600 text-xs" aria-label="Parent company information">
            A subsidiary of{' '}
            <a
              href={SITE.parent.url}
              target="_blank" rel="noopener noreferrer"
              className="text-brand-blue/60 hover:text-brand-blue transition-colors inline-flex items-center gap-1"
              aria-label="Visit Suporte Informática website"
            >
              {SITE.parent.name}
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            {' '}— Itajaí, SC, Brazil · Founded 1997
          </p>
        </div>
      </div>
    </footer>
  );
}
