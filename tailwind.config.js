/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Work Sans', ...fontFamily.mono],
        sacramento: 'Sacramento',
      },
      colors: {
        redrose: '#FB7185',
        oceanblue: '#5388B7',
        olive: '#ADC2A9',
        white: '#ffff',
      },
    },
  },
  plugins: [],
};
