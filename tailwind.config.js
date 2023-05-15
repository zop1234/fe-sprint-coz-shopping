/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 10px 1px rgba(0, 0, 0, 0.2)',
        'blur': '0 0 35px 0 rgba(0, 0, 0, 0.5)',
        'back': '0 0 0 9999px rgba(0,0,0,0.5), 0 0 35px 0 rgba(0, 0, 0, 0.5);'
      },
      spacing: {
        '264': '264px',
        '480': '480px',
        '554': '554px',
        '744': '744px',
        '1128': '1128px',
        '9999': '9999px',
      },
      colors: {
        'bgModal': 'rgba(0, 0, 0, 0.5)'
      },
        'opacityWhite': 'rgba(256, 256, 256, 0.5)',
      },
    },
  },
  plugins: [],
}

