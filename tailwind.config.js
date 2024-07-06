/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define tus colores personalizados aquí
        primary: '#008F8C',
        secondary: '#00FF00',
        accent: '#0000FF',
        span: "#008F8C",
        // Añade más colores según sea necesario
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Añade Poppins como la fuente sans-serif predeterminada
      },
    },
  },
  plugins: [],
}

