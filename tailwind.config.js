module.exports = {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'false'
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  // To enable dark mode for all classes:
  variants: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd']
}
