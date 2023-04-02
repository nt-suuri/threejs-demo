/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transparent: "transparent",
      current: "currentColor",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "primary-blue": "#0073FF",
      "primary-cyan": "#00DCF4",
      "primary-yellow": "#F7F3A4",
      "primary-orange": "#FF6900",
      "secondary-orange": "#FFA727",
      ...colors,
    },
    animation: {
      tick: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;',
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
