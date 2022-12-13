/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'light-blue': 'rgb(206, 226, 233)',
        'gray-blue': 'rgb(49, 58, 73)',
        'dark-blue': 'rgb(32, 38, 50)',
      },
      colors: {
        'light-blue': 'rgb(206, 226, 233)',
        'light-green': 'rgb(83, 255, 171)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
