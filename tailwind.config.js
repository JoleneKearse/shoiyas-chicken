/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "brand-blue": "#1173ba",
      "brand-aqua": "#78baae",
      "brand-100": "#ddffff",
      "brand-200": "#c3ffff",
      "brand-300": "#aaffff",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      courgette: ['"Courgette"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "light-gradient": "linear-gradient(",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
