/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          teal: '#14b8a6',
          purple: '#a78bfa',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(ellipse 90% 60% at 50% -25%, rgba(99, 102, 241, 0.28), transparent 55%)',
        'mesh-light':
          'radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.14) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(20, 184, 166, 0.12) 0px, transparent 45%), radial-gradient(at 0% 50%, rgba(167, 139, 250, 0.1) 0px, transparent 50%)',
        'mesh-dark':
          'radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(20, 184, 166, 0.12) 0px, transparent 45%), radial-gradient(at 10% 80%, rgba(167, 139, 250, 0.12) 0px, transparent 45%)',
        'grid-fade':
          'linear-gradient(to right, rgb(148 163 184 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 8px 28px -6px rgba(15, 23, 42, 0.08)',
        glow: '0 0 0 1px rgba(99, 102, 241, 0.08), 0 12px 48px -12px rgba(79, 70, 229, 0.35)',
        card: '0 0 0 1px rgba(15, 23, 42, 0.05), 0 16px 48px -16px rgba(15, 23, 42, 0.14)',
        'card-dark': '0 0 0 1px rgba(148, 163, 184, 0.08), 0 16px 48px -16px rgba(0, 0, 0, 0.45)',
        nav: '0 0 0 1px rgba(15, 23, 42, 0.05), 0 8px 32px -8px rgba(15, 23, 42, 0.12)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 50%' },
          '100%': { backgroundPosition: '-200% 50%' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
}
