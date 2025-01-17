/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        themeblack: '#202020',
        themered: '#f50e32'
      },
      fontFfamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}