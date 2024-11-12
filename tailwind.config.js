/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
primary: {
    50: '#e3edf7',
    100: '#c8daf0',
    200: '#9dbce2',
    300: '#719ed3',
    400: '#4a82c2',
    500: '#2957a4',  // cor principal fornecida
    600: '#23498d',
    700: '#1d3a72',  // cor principal fornecida
    800: '#162b58',
    900: '#101f3f',
},
secondary: {
    50: '#e0f0f8',
    100: '#b3dff1',
    200: '#85cfe9',
    300: '#57bfe2',
    400: '#2faedc',
    500: '#0177bd',  // cor principal fornecida
    600: '#0164a0',
    700: '#015185',
    800: '#013d69',
    900: '#01294e',
},


       
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
};
