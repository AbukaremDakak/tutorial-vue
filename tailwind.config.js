/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      margin: {
        main: "65px",
      },
      colors: {
        cblue: "#2980b9",
        cblack: "#34495e",
        cdarkblack: "#2c3e50",
        cwhite: "#ecf0f1",
        clightgray: "#bdc3c7",
        cdarkgray: "#95a5a6",
        cyellow: "#f1c40f",
        cgreen: "#2ecc71",
        cred: "#e74c3c",
        cpurple: "#8e44ad",
        copacity: "#00000088",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },

  plugins: [],
};
