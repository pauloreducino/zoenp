import type { Metadata } from 'next';
import Link from 'next/link';
import { Monitor, Wrench, Network, Server, Wifi, HardDrive, ArrowRight, Clock } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'ZOENP Solutions services, including technology solutions, IT support, network infrastructure, computer repair and more in Pompano Beach, FL.',
};

const MAIN_SERVICES = [
  {
    icon:  Monitor,
    title: 'Technology Solutions',
    desc:  'End-to-end technology solutions tailored for businesses of all sizes, from hardware procurement to full infrastructure setup and consultation.',
    items: ['Hardware Procurement', 'Software Licensing', 'System Integration', 'Tech Consulting'],
    coming: true,
  },
  {
    icon:  Wrench,
    title: 'IT Support & Repair',
    desc:  'Professional IT support and maintenance services. Computer repairs, notebook servicing, and printer troubleshooting by certified technicians.',
    items: ['Computer Repair', 'Notebook Servicing', 'Printer Repair', 'Preventive Maintenance'],
    coming: true,
  },
  {
    icon:  Network,
    title: 'Network Solutions',
    desc:  'Structured cabling, Wi-Fi deployment, and network infrastructure design for homes and commercial spaces of any size.',
    items: ['Structured Cabling', 'Wi-Fi Deployment', 'Network Design', 'Infrastructure Setup'],
    coming: true,
  },
  {
    icon:  Server,
    title: 'Server & Infrastructure',
    desc:  'Server setup, configuration and ongoing management for small and medium-sized businesses that need reliable, always-on infrastructure.',
    items: ['Server Setup', 'Cloud Migration', 'Data Backup', 'Remote Management'],
    coming: true,
  },
  {
    icon:  Wifi,
    title: 'Connectivity & ISP',
    desc:  'Reliable connectivity solutions for homes and businesses, from ISP selection guidance to complete Wi-Fi coverage optimization.',
    items: ['ISP Consulting', 'Coverage Analysis', 'Signal Optimization', 'Mesh Networks'],
    coming: true,
  },
  {
    icon:  HardDrive,
    title: 'Hardware Sales',
    desc:  'Quality-certified computers, laptops, peripherals and components, sourced from trusted suppliers and sold with full technical support.',
    items: ['Desktops & Laptops', 'Peripherals', 'Components', 'Certified Refurbished'],
    coming: true,
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="What We Offer"
          title="Our"
          highlight="Services"
          description="Comprehensive technology solutions backed by 27 years of expertise. From hardware sales to full network infrastructure, we've got you covered."
        />

        {/* ─── Coming Soon Banner ───────────────────────────────────────── */}
        <section className="py-10 border-y border-brand-blue/15" style={{ background: 'rgba(30,144,255,0.05)' }} aria-label="Service availability notice">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue-dim border border-brand-blue/25 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-brand-blue" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-semibold">We are expanding our portfolio.</p>
              <p className="text-gray-400 text-sm">
                Stay tuned for updates, or{' '}
                <Link href="/contact" className="text-brand-blue hover:text-brand-blue-light transition-colors font-medium">
                  contact us now
                </Link>{' '}
                for custom solutions tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Services Grid ────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-brand-dark" aria-label="Service offerings">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MAIN_SERVICES.map(({ icon: Icon, title, desc, items, coming }) => (
                <article
                  key={title}
                  className="card-hover relative flex flex-col gap-6 p-7 rounded-2xl border border-white/6"
                  style={{ background: 'rgba(19,35,56,0.7)' }}
                  aria-label={title}
                >
                  {/* Top glow line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px"
                    style={{ background: 'linear-gradient(90deg,transparent,rgba(30,144,255,0.2),transparent)' }}
                    aria-hidden="true"
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-13 h-13 rounded-xl bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center w-[52px] h-[52px]">
                      <Icon className="w-6 h-6 text-brand-blue" aria-hidden="true" />
                    </div>
                    {coming && (
                      <span className="coming-soon" aria-label="Coming soon">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" aria-hidden="true" />
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-white mb-3">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>

                    {/* Feature list */}
                    <ul className="flex flex-col gap-2" aria-label={`${title} includes`}>
                      {items.map(item => (
                        <li key={item} className="flex items-center gap-2.5 text-gray-400 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="pt-5 border-t border-white/5">
                    <Link
                      href="/contact"
                      className="text-brand-blue text-sm font-semibold hover:text-brand-blue-light transition-colors inline-flex items-center gap-1.5 group"
                      aria-label={`Inquire about ${title}`}
                    >
                      Request a Quote
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────────────── */}
        <section
          className="py-24 border-t border-white/5"
          style={{ background: 'linear-gradient(135deg, #132338 0%, #0D1B2A 100%)' }}
          aria-label="Contact us"
        >
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-4xl text-white mb-5">
              Need a Custom <span className="text-blue-gradient">Solution?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Don&apos;t see exactly what you&apos;re looking for? Our team is ready to build a custom technology solution for your specific needs. Reach out. We love a good challenge.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-brand-blue text-white font-bold text-lg hover:bg-brand-blue-light hover:shadow-blue-lg transition-all duration-300 active:scale-[0.97]"
              aria-label="Contact ZOENP Solutions"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
