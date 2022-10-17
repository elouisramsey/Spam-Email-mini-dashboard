/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var']
      },
      colors: {
        primary: '#c6b477',
        secondary: '#313335',
        tertiary: '#808080',
        modalBg: 'rgba(0, 0, 0, 0.2)'
      },
      spacing: {
        128: '32rem',
        150: '45rem'
      }
    }
  },
  plugins: []
}
