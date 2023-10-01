/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2b5054",
        "secondary": "#f2f2f2"
      },
    },
  },
  plugins: [],
}

