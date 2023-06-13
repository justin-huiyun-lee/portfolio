/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'background-image-forest': "url('/src/assets/background.png')",
      }
    },
  },
  plugins: [],
}

