/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 10px 1px rgba(0, 0, 0, 0.2)',
      },
      spacing: {
        '264': '264px',
      }
    },
  },
  plugins: [],
}

