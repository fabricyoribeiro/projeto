/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        cursiva: 'Dancing Script, cursive',
      }
    },
    'nav-stile':
      'max-md:h-screen max-md:w-screen max-md:overflow-hidden max-md:fixed max-md:bg-[#2d3047]'
  },
  plugins: []
}
