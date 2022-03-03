/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        olive: {
          primary: '#99a799',
          secondary: 'rgb(63 98 18)',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffff',
        },
        rose: {
          primary: 'rgb(127 29 29)',
          secondary: 'rgb(248 113 113)',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffff',
        },
      },
      'light',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        primary: ['Work Sans', ...fontFamily.mono],
        sacramento: 'Sacramento',
        reey: 'Reey',
      },
      colors: {
        redrose: '#FB7185',
        oceanblue: '#5388B7',
        olive: '#99a799',
        white: '#ffff',
      },
    },
  },
  plugins: [require('daisyui')],
};
