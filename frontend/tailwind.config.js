/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      light: {
        background: "#141414",
        accent100: "#262626",
        accent200: "#3A3A3A",
        accent300: "#7f7f7f",
        primary: "#FFFFFF",

      }
    },
  },
  plugins: [require("daisyui")],
}

