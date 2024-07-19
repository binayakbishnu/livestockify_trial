/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#22592A',
        ligthgreen: '#C2FFCB',
        darkgreen: '#0A190C',
        offwhite: '#FAFFFB',
        navbarbackground:'#F1F1F1'
      },
      fontFamily: {
        headingsFont: 'Helvetica Neue',
        bodyFont: 'Inter',
        profileFont: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],


}

