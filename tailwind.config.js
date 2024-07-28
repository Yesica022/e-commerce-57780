/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008F8C',
        secondary: '#00FF00',
        accent: '#0000FF',
        span: "#008F8C",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}
