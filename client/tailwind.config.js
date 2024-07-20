/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['"Inter"', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        customtheme: {
          "primary": "#4F200D",
          "secondary": "#EAC21F",
          "accent": "#2E6330",
          "neutral": "#F6F1E9",
          "text": "#282828",
          "ghost": "#0D0D0",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};

