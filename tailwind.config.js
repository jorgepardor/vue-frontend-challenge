/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#343548',
        secondary: '#4446A6',
        secondary_dark: '#0F2021',
        tertiary: '#FFF',
        tertiary_dark: '#0F2021',
      },
    },
  },
  plugins: [],
}
