/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
      // colors: {
      //   lightBackground: '#f5f1f1',
      //   lightText: '#323336',
      //   darkBackground: '#1a202c',
      //   darkText: '#edf2f7',
      //   warmBackground: '#d7b59e',
      //   warmText: '#4e2a19',
      // },
    },
  },
  plugins: [],
};
