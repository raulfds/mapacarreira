/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
 primary: {
    50: '#d0f1f9',
    100: '#a1e4f3',
    200: '#70d3eb',
    300: '#3fc2e3',
    400: '#1ab3dc',
    500: '#0099c4',
    600: '#007ca1',
    700: '#006480',
    800: '#004e60',
    900: '#003743',
},
secondary: {
    50: '#d0f1f9',
    100: '#a1e4f3',
    200: '#70d3eb',
    300: '#3fc2e3',
    400: '#1ab3dc',
    500: '#0099c4',
    600: '#007ca1',
    700: '#006480',
    800: '#004e60',
    900: '#003743',
},

       
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
};
