import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:    '#0D1B2A',
          darker:  '#081320',
          mid:     '#132338',
          blue:    '#1E90FF',
          'blue-light': '#4DAEFF',
          'blue-dim':   'rgba(30,144,255,0.12)',
          'blue-glow':  'rgba(30,144,255,0.25)',
        },
        gray: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':  'linear-gradient(135deg, #0D1B2A 0%, #132338 50%, #0D1B2A 100%)',
        'blue-gradient':  'linear-gradient(135deg, #1E90FF 0%, #0066CC 100%)',
        'card-gradient':  'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        'mesh-dark':      'radial-gradient(at 20% 50%, rgba(30,144,255,0.08) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(30,144,255,0.05) 0%, transparent 50%)',
        'cta-gradient':   'linear-gradient(135deg, #0D1B2A 0%, #132338 100%)',
        'circuit-pattern':'url("/circuit-bg.svg")',
      },
      animation: {
        'fade-up':       'fadeUp 0.7s ease-out forwards',
        'fade-in':       'fadeIn 0.5s ease-out forwards',
        'slide-left':    'slideLeft 0.6s ease-out forwards',
        'float':         'float 6s ease-in-out infinite',
        'pulse-blue':    'pulseBlue 2s ease-in-out infinite',
        'scan-line':     'scanLine 3s linear infinite',
        'glow':          'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'none' } },
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideLeft: { '0%': { opacity: '0', transform: 'translateX(-24px)' }, '100%': { opacity: '1', transform: 'none' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseBlue: { '0%,100%': { boxShadow: '0 0 0 0 rgba(30,144,255,0.4)' }, '50%': { boxShadow: '0 0 0 12px rgba(30,144,255,0)' } },
        scanLine:  { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
        glowPulse: { '0%,100%': { opacity: '0.5' }, '50%': { opacity: '1' } },
      },
      boxShadow: {
        'blue':    '0 4px 24px rgba(30,144,255,0.25)',
        'blue-lg': '0 8px 48px rgba(30,144,255,0.30)',
        'dark':    '0 4px 32px rgba(0,0,0,0.4)',
        'dark-lg': '0 8px 64px rgba(0,0,0,0.6)',
        'card':    '0 1px 0 rgba(255,255,255,0.06) inset, 0 4px 24px rgba(0,0,0,0.3)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
