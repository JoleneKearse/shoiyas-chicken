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
      "brand-800": "#001C63",
      pink: "#B33D82",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      courgette: ['"Courgette"', ...defaultTheme.fontFamily.sans],
      roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    borderRadius: {
      opening: "57% 43% 46% 54% / 42% 32% 68% 58%",
      blurb1: "45% 55% 59% 41% / 30% 30% 70% 70%",
      img1: "46% 54% 45% 55% / 57% 39% 61% 43%",
    },
    extend: {
      backgroundImage: {
        "light-gradient": "linear-gradient(",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
