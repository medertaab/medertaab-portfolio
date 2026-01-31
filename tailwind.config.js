/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0A0A0A',
        'brand-blue': '#002BFE',
        'brand-cream': '#FAF9F6',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['EB Garamond', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
}
