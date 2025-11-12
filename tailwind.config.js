/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'logo': ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#0F0F0F', 
      }
    },
  },
  plugins: [],
}

