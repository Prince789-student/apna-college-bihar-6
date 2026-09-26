/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          DEFAULT: '#3b82f6',
        },
        navy: {
          950: '#060a12',
          900: '#0b1120',
          850: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        darkbg: '#060a12',
        cardbg: '#0e1726',
        surface: 'rgba(15, 23, 42, 0.75)',
        gold: '#f59e0b',
        neon: '#06b6d4',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(56, 189, 248, 0.25)',
        'glow-md': '0 0 30px rgba(56, 189, 248, 0.35)',
        'glow-lg': '0 0 50px rgba(99, 102, 241, 0.3)',
        'glow-amber': '0 0 30px rgba(245, 158, 11, 0.35)',
        'glass': '0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
