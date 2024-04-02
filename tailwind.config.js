/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      laser:"#c9a565",
      bright_red:"#b40200",
      },

    },
  },
  plugins: [],
}

