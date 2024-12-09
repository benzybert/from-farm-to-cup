/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#3D1D0F',
        secondary: '#E75A97',
        background: '#FDF6F0',
        text: '#4A4A4A',
      }
    },
  },
  plugins: [],
}