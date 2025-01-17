/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        crossword: "url('/src/assets/crossword.png')",
        blackorchid: "url('/src/assets/blackorchid.png')",
      },
      colors: {
        gunmetal: '#262c3c',
        lotion: '#fafafa',
        warm: {
          bg: '#FDF6E3',
          text: '#654321',
        },
        light: {
          bg: '#FFFFFF',
          text: '#000000',
        },
        dark: {
          bg: '#121212',
          text: '#F5F5F5',
        },
      },
      screens: {
        xs: '360px',
      },
      transitionProperty: {
        opacity: 'opacity',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)', transformOrigin: 'top left' },
          '100%': { opacity: '1', transform: 'scale(1)', transformOrigin: 'top left' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)', transformOrigin: 'top left' },
          '100%': { opacity: '0', transform: 'scale(0.95)', transformOrigin: 'top left' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 750ms ease-in-out',
        fadeOut: 'fadeOut 750ms ease-in-out',
      },
    },
  },
  plugins: [],
};
