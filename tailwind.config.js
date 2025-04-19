/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out',
        slideInRight: 'slideInRight 1s ease-out',
      },
      keyframes: {
        slideInLeft: {
          '0%' : { transform: 'translateX(-100px)', opacity: '0'},
          '100%' : { transform: 'translateX(0)', opacity: '1'},
        },
        slideInRight: {
          '0%' : { transform: 'translateX(-100px)', opacity: '0'},
          '100%' : { transform: 'translateX(0)', opacity: '1'},
        },
      },
      colors: {
        'green-700': '#277e39',
        'green-800': '#1e652d',
      }
    },
  },
  plugins: [],
}

