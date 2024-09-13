/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'primary-500': '#877EFF',
        'primary-600': '#5D5FEF',
        'secondary-500': '#FFB620',
        'off-white': '#D0DFFF',
        'red': '#FF5A5A',
        'dark-1': '#FFFFFF',
        'dark-2': '#EFEFEF',
        'dark-3': '#F7F7F7',
        'dark-4': '#E8E8E8',
        'light-1': '#000000',
        'light-2': '#09090A',
        'light-3': '#101012',
        'light-4': '#1F1F22',
        'light-5': 'blue',

      },
      screens: {
        'xs': '480px',
      },
      width: {
        '420': '420px',
        '465': '465px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundColor: {
        'primary-500': 'rgba(33, 55, 203, 0.6)',
        'primary-600': '#5D5FEF',
        'secondary-500': '#FFB620',
        'off-white': '#D0DFFF',
        'red': '#FF5A5A',
        'dark-1': '#FFFFFF',
        'dark-2': '#EFEFEF',
        'dark-3': '#F7F7F7',
        'dark-4': '#E8E8E8',
        'light-1': '#000000',
        'light-2': '#09090A',
        'light-3': '#101012',
        'light-4': '#1F1F22',
      },
      textColor: {
        'primary-500': '#877EFF',
        'primary-600': '#5D5FEF',
        'secondary-500': '#FFB620',
        'off-white': '#D0DFFF',
        'red': '#FF5A5A',
        'dark-1': '#FFFFFF',
        'dark-2': '#EFEFEF',
        'dark-3': '#F7F7F7',
        'dark-4': '#E8E8E8',
        'light-1': '#000000',
        'light-2': '#09090A',
        'light-3': '#101012',
        'light-4': '#1F1F22',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};