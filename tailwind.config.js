/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
        color:{
            black: '#060606',
        },
        fontFamily: {
            "hanken-grotesk": ['Hanken Grotesk', 'sans-serif'],
        },
        fontSize: {
            '2xs': '0.625rem', // 10px
            '3xs': '0.5rem', // 8px
        },
    },
  },
  plugins: [],
}

