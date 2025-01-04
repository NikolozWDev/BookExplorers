/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '400phone': '400px',
      '450phone': '450px',
      '700phone': '700px',
      '750phone': '750px',
      '800phone': '800px',
      '850phone': '850px',
      '900phone': '900px',
      '1000phone': '1000px',
    },
    extend: {
      fontFamily: {
        'fonta': ['Bree Serif', 'serif'],
      },
            keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}

