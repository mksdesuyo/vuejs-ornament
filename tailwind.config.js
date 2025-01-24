/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        light: {
          bg: "url('/src/assets/fabric.png')",
          text: '#262c3c',
          beyond: {
            color1: '#262c3c',
            color2: '#dcdcdb',
          },
        },
        warm: {
          bg: "url('/src/assets/crossmeteor.png')",
          text: '#51401F',
          beyond: {
            color1: '#51401F',
            color2: '#f4e8d8',
          },
        },
        dark: {
          bg: "url('/src/assets/denim.png')",
          text: '#EBE6E6',
          beyond: {
            color1: '#EBE6E6',
            color2: '#444851',
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
