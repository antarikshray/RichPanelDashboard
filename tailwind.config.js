module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbar: '#004e96',
        graychat: '#f6f6f7',
        grayuser: '#eff2f6',
        graydefault: '#edeeef'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
