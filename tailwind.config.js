/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'text-brand': '#A7A3FF',
      },
      backgroundColor:{
        'brand-yellow': '#A36A4F',
        'brand-gray':  '#EDEDEDA8',
      }
    },
  },
  plugins: [],
}

