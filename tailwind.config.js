/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lobster: ['var(--font-lobster)'],
      roboto: ['var(--font-roboto)']
    },
    extend: {},
  },
  plugins: [],
}
