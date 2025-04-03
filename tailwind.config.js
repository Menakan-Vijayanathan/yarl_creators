/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        regular:[]
      },
      colors: {
        primary: '#fdee36',
        secondary: '#424023',
        background: '#16181f',
      },
    },
  },
  plugins: [],
};
