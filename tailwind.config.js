/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0079BF",
        success: "#14A44D",
        info: "#54B4D3",
        error: "#DC4C64",
        warning: "#E4A11B",
        secondary: "#F9FAFC",
      },
    },
  },
  plugins: [],
};
