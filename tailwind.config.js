/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(240, 38%, 20%)',
        grayishBlue: 'hsl(240, 18%, 77%)'
      },
      // backgroundImage: {
      //   "imgBg": "url('./images/pattern-bg.svg')",
      //   "contentBg": "url('./images/pattern-quotes.svg')"
      // }
    },
  },
  plugins: [],
}