/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '370px',
    },
    extend: {
      colors: {
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        black: '#000',
      },
      backgroundImage: {
        haircut: "url('./public/images/haircut9.jpg')",
      },
    },
  },
  plugins: [require('daisyui')],
}
