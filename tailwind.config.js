/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        sand: '#E8DDD3',
        warm: '#D4C4B0',
        mocha: '#8B7355',
        espresso: '#5C4A32',
        offwhite: '#FAF8F5',
      },
      fontFamily: {
        'serif-main': ['Cormorant Garamond', 'Georgia', 'serif'],
        'body': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};