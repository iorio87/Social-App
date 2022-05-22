module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ef4444'
      }
    }
  },
  variants: {
    extend: {
      border: ['focus'],
    }
  },
  plugins: [],
}