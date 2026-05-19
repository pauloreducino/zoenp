'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          scrolled
            ? 'bg-brand-darker/95 backdrop-blur-md border-b border-white/5 py-3 shadow-dark'
            : 'bg-transparent py-5'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="ZOENP Solutions — Home" className="flex items-center gap-3 group">
            <Image
              src="/logo-zoenp.png"
              alt="ZOENP Solutions"
              width={180}
              height={120}
              priority
              className="h-12 w-auto group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Nav */}
          <nav role="navigation" aria-label="Main navigation">
            <ul className="hidden md:flex items-center gap-1" role="list">
              {NAV_LINKS.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                        active
                          ? 'text-brand-blue bg-brand-blue-dim'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      )}
                      aria-current={active ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-light hover:shadow-blue transition-all duration-200 active:scale-[0.97]"
              aria-label="Get a free quote"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 bg-brand-darker/98 backdrop-blur-lg md:hidden flex flex-col justify-center items-center gap-3 px-8"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'w-full max-w-xs py-4 text-xl font-display font-semibold text-center border-b border-white/5 transition-colors',
                pathname === href ? 'text-brand-blue' : 'text-white hover:text-brand-blue-light'
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 w-full max-w-xs flex justify-center px-8 py-4 rounded-full bg-brand-blue text-white font-bold text-lg hover:bg-brand-blue-light transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </>
  );
}
