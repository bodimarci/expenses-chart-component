/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "soft-red": "#EC775F",
      cyan: "#76B5BC",
      "dark-brown": "#382314",
      "medium-brown": "#93867B",
      cream: "#F8E9DD",
      "pale-orange": "#FFFAF5",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        DMsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
