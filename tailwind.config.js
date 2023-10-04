const sourceSansPro = ["Source Sans Pro", "sans-serif"];
const montserrat = ["Montserrat", "sans"];

module.exports = {
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      fontFamily: {
        sans: [sourceSansPro],
        montserrat: montserrat, // Add Montserrat to your fonts
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
