import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Home',
  description: 'ZOENP Solutions — technology solutions in Pompano Beach, FL.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ─── Minimal Home — logo-first, per client brief ──────────────── */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2035 50%, #0D1B2A 100%)' }}
          aria-label="ZOENP Solutions"
        >
          {/* Subtle background */}
          <div className="absolute inset-0 bg-grid-tech opacity-30" aria-hidden="true" />
          <div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(circle, rgba(30,144,255,0.10) 0%, transparent 60%)',
              filter: 'blur(60px)',
            }}
          />

          <div
            className="relative flex flex-col items-center gap-8"
            style={{ animation: 'fadeUp 0.7s ease-out forwards' }}
          >
            {/* Logo — the centerpiece */}
            <Image
              src="/logo-zoenp.png"
              alt="ZOENP Solutions"
              width={1536}
              height={1024}
              priority
              className="w-[360px] sm:w-[480px] lg:w-[580px] h-auto"
            />

            {/* SEO heading — visually hidden since the name lives in the logo */}
            <h1 className="sr-only">ZOENP Solutions — {SITE.tagline}</h1>

            {/* Short tagline */}
            <p className="text-gray-300 text-lg sm:text-xl max-w-md">
              {SITE.tagline}
            </p>

            {/* Single call to action */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-blue text-white font-bold text-base hover:bg-brand-blue-light hover:shadow-blue-lg transition-all duration-300 active:scale-[0.97]"
              aria-label="Contact ZOENP Solutions"
            >
              Contact Us
              <ArrowRight className="w-4.5 h-4.5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
