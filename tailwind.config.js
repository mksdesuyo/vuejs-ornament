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
        coffee: '#65532f',
        light: {
          bg: "url('/src/assets/crossword.png')",
          text: '#262c3c',
          beyond: {
            color1: '#262c3c',
            color2: '#fafafa',
          },
        },
        warm: {
          bg: "url('/src/assets/crossmeteor.png')",
          text: '#65532f',
          beyond: {
            color1: '#65532f',
            color2: '#f4e8d8',
          },
        },
        dark: {
          bg: "url('/src/assets/blackorchid.png')",
          text: '#fafafa',
          beyond: {
            color1: '#fafafa',
            color2: '#262c3c',
          },
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
