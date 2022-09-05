/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
      },
    },
  },
  plugins: [require('daisyui')],
}
