/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // add this lines
    "./pages/**/*.{js,ts,jsx,tsx}",
    // if you have other folder, add its path too, like this:
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E3A445",
        hover: "#b58741",
        active: "#E3A445",
        darkgray: "#2a303c",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
