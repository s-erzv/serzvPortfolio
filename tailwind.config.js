/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ["Poppins", "sans-serif"],
        'body': ["Quicksand", "sans-serif"]
      },
      colors: {
        'primary': '#060932',
      },
      animation: {
        typewriter: 'typewriter 1s steps(40, end) forwards',
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}

