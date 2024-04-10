module.exports = {
  important: false,
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "kalnia": ['Kalnia', 'sans-serif'] 
      },
      colors: {
        "main" : "#FF6700"
      }
    }
  },
  plugins: [],
}
