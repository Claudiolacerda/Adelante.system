/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#04060A',
        bg2: '#080C14',
        surface: '#0D1220',
        surface2: '#111827',
        accent: '#00E5A0',
        accent2: '#0066FF',
        accent3: '#7C3AED',
        'text-mid': '#A0AECA',
        'text-muted': '#6B7A99',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
