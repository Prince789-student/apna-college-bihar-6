/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { brand: '#3b82f6', darkbg: '#0f172a', cardbg: '#1e293b' }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
