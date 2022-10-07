/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-page': "url(./images/desktop/image-header.jpg)",
        'main-page-mobile' :"url(./images/mobile/image-header.jpg)"
      },
      backgroundColor: {
        'green': "hsl(168, 58%, 64%)"
      }
    },
  },
  plugins: [],
}
