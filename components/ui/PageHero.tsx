import { cn } from '@/lib/utils';

interface PageHeroProps {
  badge?:       string;
  title:        string;
  highlight?:   string;
  description?: string;
  className?:   string;
}

export function PageHero({ badge, title, highlight, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative pt-36 pb-20 overflow-hidden page-hero',
        className
      )}
      aria-label="Page header"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-tech opacity-30" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] glow-orb pointer-events-none"
        style={{ background: 'rgba(30,144,255,0.06)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(30,144,255,0.3),transparent)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative">
        {badge && (
          <div className="badge mb-6 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" aria-hidden="true" />
            {badge}
          </div>
        )}
        <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-5">
          {highlight ? (
            <>
              {title}{' '}
              <span className="text-blue-gradient">{highlight}</span>
            </>
          ) : title}
        </h1>
        {description && (
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
