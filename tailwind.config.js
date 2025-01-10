/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
    },
    extend: {
      transitionProperty: {
        opacity: 'opacity',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1200ms ease-in-out',
        fadeOut: 'fadeOut 1200ms ease-in-out',
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
